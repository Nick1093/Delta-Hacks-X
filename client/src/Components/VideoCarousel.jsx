import './VideoCarousel.css';

window.addEventListener('load', () => {
    const synth = window.speechSynthesis
    synth.cancel()
})

const displayTextOnVideo = (text, display, start, num) => {
   
    const arr = text.split(' ')
    let output = ''
    for(let i = start; i < start + num; i++) {
        if(i >= arr.length) break
        output += arr[i] + ' '
    }
    display.innerText = output
}

const replayVideo = (video_element) => {
    video_element.currentTime = 0; 
    video_element.play()
    startVideo(video_element)
}

const togglePlay = (e) => {
    if (e.target.paused) {
        playVideo(e.target)
    } else {
        pauseVideo(e.target)
    }
}

const pauseVideo = (video_element) => {
    video_element.pause()
    const synth = window.speechSynthesis
    synth.pause()
}

const playVideo = (video_element) => {
    if(last_video== null) startVideo(video_element)
    video_element.play()
    const synth = window.speechSynthesis
    synth.resume()
}


let last_video = null
const startVideo = (video_element) => {
    const video = video_element
    const synth = window.speechSynthesis
    if(last_video != null && video != last_video) {
        last_video.currentTime = 0; 
        pauseVideo(last_video)
        synth.cancel()
    }
    const transcript = video.nextElementSibling.innerText
    textToSpeech(transcript, video.parentElement)
    
    last_video = video
    playVideo(video)
}

let utterance = new SpeechSynthesisUtterance();
const textToSpeech = (text, viewport) => {
    // console.log(text)
    utterance.voice = window.speechSynthesis.getVoices()[0];
    // utterance.lang = languages['Français']

    utterance.text = text;
    
    let count = 0;
    const num_words = 4;
    const display_text = viewport.querySelector('.display-text')

    // Set the onboundary event listener
    utterance.onboundary = function(event) {
      // Check if the current boundary is a word boundary
      if (event.name === 'word') {
        // Highlight the current word

        if(count % num_words == 0) displayTextOnVideo(text, display_text, count, num_words)

        // Move to the next word
        count++;
      }
    };

    utterance.onend = function(event) {
        replayVideo(viewport.querySelector('video'))
    }

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
}

let timeout = null
const scroll = (e) => {
    const viewport = e.target
    const rect = viewport.getBoundingClientRect()

    const left_pointer = rect.left + rect.width / 2
    const top_pointer = rect.top + rect.height / 2

    const elements = document.elementsFromPoint(left_pointer, top_pointer)
    
    let video = null
    for(let elem in elements) {
        if(elements[elem].tagName == "VIDEO"){
            video = elements[elem]
            break
        }
    }
    
    // get the video in the middle of viewport    
    clearTimeout(timeout)
    if(video == null) return
    timeout = setTimeout(() => {
        startVideo(video)
    }, 300)
}

const VideoContainer = ({video, transcript}) => {
    const randomColor = () => {
        // from 1 to 255
        const r = Math.floor(Math.random() * 255) + 25
        const g = Math.floor(Math.random() * 255) + 25
        const b = Math.floor(Math.random() * 255) + 25
        return `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div className="video-container">
            <video className="video" onClick={togglePlay} muted>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="transcript">
                {transcript}
            </div>
            <div className="display-text" style={{color:randomColor()}}>
            </div>
        </div>
    )

}

const VideoCarousel = ({videos}) => {
    return (
        <div className="video-carousel" onScroll={scroll}>

            {videos.map((data, index) => {
                const video = data.video
                const transcript = data.transcript

                return <VideoContainer key={index} video={video} transcript={transcript}/>
            })}

        </div>
    )
}
export default VideoCarousel;
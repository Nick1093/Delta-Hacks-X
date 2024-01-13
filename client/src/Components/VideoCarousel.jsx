import './VideoCarousel.css';

window.addEventListener('load', () => {
    const synth = window.speechSynthesis
    synth.cancel()
})

let utterance = new SpeechSynthesisUtterance();
const textToSpeech = (text) => {
    // console.log(text)
    utterance.voice = window.speechSynthesis.getVoices()[0];
    // utterance.lang = languages['Français']

    utterance.text = text;

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
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
    video_element.play()
    const synth = window.speechSynthesis
    synth.resume()
}

let timeout = null
let last_video = null
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
        const synth = window.speechSynthesis
        if(last_video != null && video != last_video) {
            last_video.currentTime = 0; 
            pauseVideo(last_video)
            synth.cancel()
        }
        const transcript = video.nextElementSibling.innerText
        textToSpeech(transcript)
        playVideo(video)
        last_video = video
    }, 300)
}

const VideoContainer = ({video, transcript}) => {
    return (
        <div className="video-container">
            <video className="video" onClick={togglePlay} muted>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="transcript">
                {transcript}
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
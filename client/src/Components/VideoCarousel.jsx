import './VideoCarousel.css';

// import video1 from "./carousel-videos/video (1).mp4";
// import video2 from "./carousel-videos/video (2).mp4";
// import video3 from "./carousel-videos/video (3).mp4";
// import video4 from "./carousel-videos/video (4).mp4";

// const videos = [video1, video2, video3, video4]
const videos = []

window.addEventListener('load', () => {
    const synth = window.speechSynthesis
    synth.cancel()
})

// display text on video
const displayTextOnVideo = (text, display, start, num) => {
    const arr = text.split(' ')
    let output = ''
    for (let i = start; i < start + num; i++) {
        if (i >= arr.length) break
        output += arr[i] + ' '
    }
    display.innerText = output
}

// replay video and speech
const replayVideo = (video_element) => {
    const video_start = video_element.id
    video_element.currentTime = video_start;
    video_element.play()
    startVideo(video_element)
}

// toggle play and pause
const togglePlay = (e) => {
    if (e.target.paused) {
        playVideo(e.target)
    } else {
        pauseVideo(e.target)
    }
}

// pause video and speech
const pauseVideo = (video_element) => {
    video_element.pause()
    const synth = window.speechSynthesis
    synth.pause()
}

// play video and read out transcript
const playVideo = (video_element) => {
    if (last_video == null) startVideo(video_element)
    video_element.play()
    const synth = window.speechSynthesis
    synth.resume()
}

// begin playing video and reading out transcript
let last_video = null
const startVideo = (video_element) => {
    const video = video_element
    const video_start = video.id
    if (last_video != video) video.currentTime = video_start;

    const synth = window.speechSynthesis
    if (last_video != null && video != last_video) {
        const last_video_start = last_video.id
        last_video.currentTime = last_video_start;
        pauseVideo(last_video)
        synth.cancel()
    }
    const transcript = video.nextElementSibling.innerText
    textToSpeech(transcript, video.parentElement)

    last_video = video
    playVideo(video)
}

// read out speech and display on video
let utterance = new SpeechSynthesisUtterance();
const textToSpeech = (text, viewport) => {
    const synth = window.speechSynthesis
    synth.cancel()

    // console.log(text)
    utterance.voice = synth.getVoices()[0];
    // utterance.lang = languages['Français']

    utterance.text = text;

    let count = 0;
    const num_words = 4;
    const display_text = viewport.querySelector('.display-text')

    // Set the onboundary event listener
    utterance.onboundary = function (event) {
        // Check if the current boundary is a word boundary
        if (event.name === 'word') {
            // Highlight the current word
            if (count % num_words == 0) displayTextOnVideo(text, display_text, count, num_words)
            // Move to the next word
            count++;
        }
    };

    utterance.onend = function (event) {
        replayVideo(viewport.querySelector('video'))
    }

    // get voice to read out text
    const voices = synth.getVoices();
    const transcript_voice = viewport.querySelector('.transcript').id
    // console.log(transcript_voice)
    utterance.voice = voices[transcript_voice]
    // utterance.voice = voices[7]

    // Speak the utterance
    synth.speak(utterance);
}

// as the user scrolls the video carousel,
// the video that the user lands on will start playing
let timeout = null
const scroll = (e) => {
    const viewport = e.target
    const rect = viewport.getBoundingClientRect()

    const left_pointer = rect.left + rect.width / 2
    const top_pointer = rect.top + rect.height / 2

    const elements = document.elementsFromPoint(left_pointer, top_pointer)

    let video = null
    for (let elem in elements) {
        if (elements[elem].tagName == "VIDEO") {
            video = elements[elem]
            break
        }
    }

    // get the video in the middle of viewport    
    clearTimeout(timeout)
    if (video == null) return
    timeout = setTimeout(() => {
        startVideo(video)
    }, 300)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const VideoContainer = ({ transcript }) => {
    const randomColor = () => {
        // from 1 to 255
        const r = Math.floor(Math.random() * 255) + 25
        const g = Math.floor(Math.random() * 255) + 25
        const b = Math.floor(Math.random() * 255) + 25
        return `rgb(${r}, ${g}, ${b})`
    }
    const randomVideo = () => {
        const num = getRandomNumber(0, videos.length - 1)
        return videos[num]
    }
    const video = randomVideo()
    return (
        <div className="video-container">
            <video className="video" onClick={togglePlay} muted id={getRandomNumber(0, 500)}>
                <source src={video} type="video/mp4" />
            </video>
            <div className="transcript" id={getRandomNumber(0, 2)}>
                {transcript}
            </div>
            <div className="display-text" style={{ color: randomColor() }}>
            </div>

            <div className="information">
                <h1 className="title">Educate ME</h1>
                <div className="description">test.pptx</div>
            </div>
        </div>
    )

}

const VideoCarousel = ({ videos }) => {
    return (
        <div className="video-carousel" onScroll={scroll}>

            {videos.map((data, index) => {
                return <VideoContainer key={index} transcript={data} />
            })}

            <div className="carousel-end">end of available content</div>

        </div>
    )
}
export default VideoCarousel;
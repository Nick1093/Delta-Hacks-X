import './VideoApp.css'
import VideoCarousel from "./VideoCarousel";

import { useState } from 'react';

// icons
import heart from "./carousel-images/heart_icon.png";
import bookmark from "./carousel-images/bookmark_icon.png";
import chat from "./carousel-images/message_icon.png";
import task from "./carousel-images/task_icon.png";

// chat and task modal
import ChatField from './ChatField';
import TaskField from './TaskField';

const videoTest = [
    , "The average person walks the equivalent of three times around the world in a lifetime."
    , "The sun is approximately 93 million miles (or about 150 million kilometers) away from Earth."
    , "In the realm of the whimsically absurd, there exists a universe where turnips declare war on teapots and zebras sport polka dots for the sheer ragtag beauty of it. The trees recite Shakespearean sonnets, while fish request formal dinner invitations before they nibble on your bait. Giraffes, tired of their towering perspective, have swapped places with ants to experience life from a humbler vantage. The moon, in a funky mood, decided to turn emerald green because it was bored of lunar white, while the sun insisted on setting in the north for a change of scenery. Gravity was declared optional by decree of the pebbles, leading to elephants doing ballet leaps over mountaintops. Yes, indeed, in this world of bedazzling gibberish, where logic, as we know it, is but a whimsical myth, eccentricity has a peculiar charm and chaos is the new order.  "
    , "The average person spends 6 months of their lifetime waiting on a red light to turn green."
    , "Space smells like seared steak. Astronauts have reported that when they come back in from a spacewalk and remove their helmets, they can smell the aroma of steak."
    , "DeltaHacks is an annual student-run hackathon event hosted at McMaster University in Hamilton, Ontario, Canada. It's designed for students from any university and any skill level, even beginners, to create, develop, and present a project in a 24-hour period. DeltaHacks is unique in its focus on `hacking for a cause,` encouraging students to use technology and innovation to solve real-world problems."
    , "western university is the best school in the world."
    , "TikTok, is a Chinese video-sharing social networking service owned by ByteDance, a Beijing-based internet technology company founded in 2012 by Zhang Yiming. It is used to create short dance, lip-sync, comedy and talent videos. ByteDance first launched Douyin for the China market in September 2016. Later, TikTok was launched in 2017 for iOS and Android in most markets outside of mainland China; however, it only became available worldwide, including the United States, after merging with another Chinese social media service Musical.ly on 2 August 2018."
    , "The average person spends 6 months of their lifetime waiting on a red light to turn green."
    , "The history of Minecraft. Minecraft is a sandbox video game originally created by Markus 'Notch' Persson. It is maintained by Mojang Studios, a part of Xbox Game Studios, which in turn is part of Microsoft. From its creation, Minecraft was developed almost exclusively by Notch until Jens 'Jeb' Bergensten started working with him, and has since become head of its development."
]

const videoButton = ({ title, imgSrc, handler }) => {
    return (
        <div className='video-button'>
            <button onClick={handler}>
                <img src={imgSrc} alt="" />
            </button>
            <h3>{title}</h3>
        </div>
    )
}

const toggleModal = () => {
    const modal = document.querySelector('.video-app')
    // console.log(modal.style.aspectRatio)
    if (modal.style.aspectRatio === '3 / 2') {
        closeModal()
    } else {
        openModal()
    }
}

const openModal = () => {
    const modal = document.querySelector('.video-app')
    modal.style.aspectRatio = '3/2'

    const controls = document.querySelector('.controls')
    controls.style.transform = 'translateX(0%)'
}

const closeModal = () => {
    const modal = document.querySelector('.video-app')
    modal.style.aspectRatio = '9/16'

    const controls = document.querySelector('.controls')
    controls.style.transform = 'translateX(125%)'
}

const toggleChat = () => {
    const chat = document.querySelector('.chat')
    if (chat.style.display === 'block') {
        closeChat()
        closeModal()
    } else {
        openChat()
    }
}

const toggleTasks = () => {
    const tasks = document.querySelector('.tasks')
    if (tasks.style.display === 'block') {
        closeTasks()
        closeModal()
    } else {
        openTasks()
    }
}


// __________  chat __________ modal
const openChat = () => {
    openModal()
    const chat = document.querySelector('.chat')
    chat.style.display = 'block'
    chat.style.pointerEvents = 'auto'
    closeTasks()
}

const closeChat = () => {
    const chat = document.querySelector('.chat')
    chat.style.display = 'none'
    chat.style.pointerEvents = 'none'
    // closeModal()
}

// __________  task __________ modal
const openTasks = () => {
    openModal()
    const tasks = document.querySelector('.tasks')
    tasks.style.display = 'block'
    tasks.style.pointerEvents = 'auto'
    closeChat()
}

const closeTasks = () => {
    const tasks = document.querySelector('.tasks')
    tasks.style.display = 'none'
    tasks.style.pointerEvents = 'none'
}

const VideoApp = () => {
    return (
        <div className="video-app">

            <div className="app-left">
                <VideoCarousel videos={videoTest} />

                <div className="controls">
                    {videoButton({ title: "Like", imgSrc: heart })}
                    {videoButton({ title: "Save", imgSrc: bookmark })}
                    {videoButton({ title: "Chat", imgSrc: chat, handler: toggleChat })}
                    {videoButton({ title: "Tasks", imgSrc: task, handler: toggleTasks })}
                </div>
            </div>

            <div className="app-right">
                <div className="chat">
                    <ChatField />
                </div>
                <div className="tasks">
                    <TaskField />
                </div>
            </div>

        </div>
    )
}

export default VideoApp
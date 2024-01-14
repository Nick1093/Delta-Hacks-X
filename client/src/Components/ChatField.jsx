
import './ChatField.css'

import send from './carousel-images/send_icon.png'

const submitChat = () => {
    const input = document.querySelector('#chat-message')
    const message = input.value
    if (message === '') return
    input.value = ''

    const conversation = document.querySelector('.conversation')
    const user = document.createElement('div')
    user.className = 'user'

    const user_message = document.createElement('div')
    user_message.className = 'message'

    user_message.innerHTML = message
    user.appendChild(user_message)

    conversation.appendChild(user)

    // scroll to bottom
    conversation.scrollTop = conversation.scrollHeight
}

const inputHandler = (e) => {
    if (e.keyCode === 13) {
        submitChat()
    }
}


const ChatField = () => {
    return (
        <div className="chat-field">
            <h1>Chat with James but Better</h1>

            <div className="conversation">
                {/* test bot and user */}
                <div className="bot">
                    <div className='message'>Hey there! I’m James But Better. I'm here to assist you with any questions you may have about the topic and offer guidance on the content you've uploaded. Let's embark on a learning journey together! 🐒</div>
                </div>

                <div className='user'>
                    <div className='message'>Hi</div>
                </div>

            </div>

            <div className="input">
                <input onKeyDown={inputHandler} type="text" id='chat-message' placeholder="Ask James But Better a question 🦍" />
                <button onClick={submitChat}>
                    <img src={send} alt="send" />
                </button>
            </div>

        </div>
    )
}

export default ChatField
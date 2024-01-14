import './TaskField.css'

import task_icon from './carousel-images/checkmark_outline.png'

const handleAccept = (e) => {
    const task = e.target.parentElement.parentElement.parentElement
    task.style.display = 'none'
    task.style.pointerEvents = 'none'
}

const handleDismiss = (e) => {
    const task = e.target.parentElement.parentElement.parentElement
    task.style.display = 'none'
    task.style.pointerEvents = 'none'
}

const Task = ({title}) =>{
    return (
        <div className="task">

            <img className="icon" src = {task_icon}></img>
            <div className='task-info'>
                <h2>{title}</h2>
                <div className="actions">
                    <button className='accept' onClick={handleAccept}>accept 🙈</button>
                    <button className='dismiss' onClick={handleDismiss}>dismiss :(</button>
                </div>
            </div>
        </div>
    
    )
} 

const TaskField = () => {
    return (
        <div className="task-field">
            <div className='title'>
                <h1>Tasks 🐒</h1>
                <div className="caption">
                    [ <p id = 'suggestion-num'>3</p> ] Suggested Tasks
                </div>
            </div>

            <div className="tasks">
                <Task title = 'Try brightening specific areas of the video'/>
                <Task title = 'Create contrast between different elements' />
                <Task title = 'Experiment with curves to adjust lighting' />
            </div>
        </div>
    )
}

export default TaskField;
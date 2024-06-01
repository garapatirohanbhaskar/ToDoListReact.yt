import React, {useState} from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Woke up!","Fresh up","Work Out","Study"]);
    const [newTask, setNewTask] = useState("");


    function handleinputchange(event) {
        setNewTask(event.target.value);

    }
    function addTask() {

        if(newTask.trim() != "") {
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index) {

        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);

    }
    function movetaskUp(index) {

    }
    function moveTaskDown(index) {

    }
    return(<>
            <div className="to-do-list">

                <h1>To-Do-List</h1> 

                <div>
                    <input
                    type="text"
                    placeholder='enter task here...'
                    value={newTask}
                    onChange={handleinputchange}/>
                    <button className='add-button'
                    onClick={addTask}>Add</button>

                </div>
                <ol>
                    {tasks.map((task,index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button'
                            onClick={() => deleteTask(index)}>
                                Delete
                        </button>
                        <button className='move-button'
                        onClick={()=> movetaskUp(index)}>
                            ☝️


                        </button>
                        <button className='move-button'
                        onClick={()=> moveTaskDown(index)}>
                            👇


                        </button>

                    </li>)}
                </ol>
                


            </div>
            
            </>);

}

export default ToDoList
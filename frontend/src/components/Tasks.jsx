import { useEffect, useState } from "react";
import axios from "axios";

import "./Tasks.scss";

import TasksItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");

            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Ultimas Tarefas</h3>
                <AddTask fetchTask={fetchTasks} />
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TasksItem
                                key={lastTask._id}
                                task={lastTask}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluidas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((tasks) => tasks.isCompleted)
                        .map((completedTask) => (
                            <TasksItem
                                key={completedTask._id}
                                task={completedTask}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;

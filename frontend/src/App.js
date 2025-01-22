import { useState, useEffect, use } from "react";
import axios from "axios";

import TasksItem from "./components/TaksItem";
// import { set } from "mongoose";

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, description: "Estudar em programação", isCompleted: false },
        { id: 2, description: "Ler", isCompleted: true },
    ]);

    const fetchTasks = async () => {
        try {
           const {data} = await axios.get("http://localhost:8000/tasks");
          

           setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchTasks();
    }, []);

        return (
            <>
                {tasks.map((task) => (
                    <TasksItem key={task.id} task={task} />
                ))}
            </>
        );
   
};

export default App;

import React, { useState } from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
// import { toast } from "react-toastify";
import "./AddTask.scss";

const AddTask = ({ fetchTask }) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });
            await fetchTask();

            setTask("");
        } catch (error) {
            console.log("Algo deu errado");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color=" #fffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;

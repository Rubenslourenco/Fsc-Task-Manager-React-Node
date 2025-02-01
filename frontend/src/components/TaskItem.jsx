import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import "./TaskItem.scss";

const TasksItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async (taskId) => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);

            await fetchTasks();
        } catch (error) {
            console.log("Algo deu errado");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
                isCompleted: e.target.checked,
            });

            await fetchTasks();
        } catch (error) {
            console.log("Algo deu errado");
        }
    };
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompletionChange(e)}
                    />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TasksItem;

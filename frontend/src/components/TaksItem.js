const TasksItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Completa" : "Não completa "}</p>
        </>
    );
};

export default TasksItem;

import { FC } from "react";
import { ITask } from "../../model/task";
import Button from "../../../../shared/ui/button";
import { useNavigate } from "react-router-dom";

interface ITaskItemProps {
    task: ITask
}
const TaskItem: FC<ITaskItemProps> = ({task}) => {
    const navigate = useNavigate();
    return (
        <div style={{marginBottom: '10px', border: '1px solid red'}}>
            <h3>{task.id} {task.title}</h3>
            <p>{task.description}</p>
            <ul>
                <li>Категория: {task.category}</li>
                <li>Статус: {task.status}</li>
                <li>Приоритет: {task.priority}</li>
            </ul>
            <Button onClick={() => navigate(`/task/${task.id}`)}>Редактировать</Button>
        </div>
    ); 
}

export default TaskItem
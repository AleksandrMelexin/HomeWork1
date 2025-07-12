import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../shared/ui/button";
import EditForm from "../../widgets/edit-form/edit-form";
import { useTasks } from "../../app/context/task-context";

const TaskDetailPage: FC = () => {
    const { tasks } = useTasks();
    const navigate = useNavigate();
    const { id } = useParams();
    const task = tasks.find(task => task.id === id);

    if (task) {
        return(
            <main>
                <h1>Отредактировать задачу №{id}</h1>
                <EditForm gotTask={task}/>
            </main>
        );
    } else {
        return(
            <main>
                <h1>Задача с номером {id} не найдена</h1>
                <Button onClick={() => {navigate(`/`)}}>Вернуться на главную</Button>
            </main>
        );
    }
}

export default TaskDetailPage;
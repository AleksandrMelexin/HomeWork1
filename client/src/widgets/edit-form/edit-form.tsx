import { FC, useState } from "react";
import Button from "../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { Category, ITask, Status, Priority } from "../../entities/task/model/task";
import Select from "../../shared/ui/select";
import { useTasks } from "../../app/context/task-context";

interface EditFormProps { 
    gotTask: ITask;
}

const EditForm: FC<EditFormProps> = ({gotTask}) => {
    const [task, setTask] = useState<ITask>(gotTask); 
    const { updateTask } = useTasks();
    const navigate = useNavigate();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateTask(task.id, task);
        navigate('/');
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                name="title" 
                placeholder="Название задачи" 
                value={task.title} 
                required 
                onChange={changeHandler}
            />
            <textarea 
                name="description" 
                placeholder="Описание задачи" 
                value={task.description} 
                onChange={changeHandler}
            />
            <Select
                name="category"
                value={task.category}
                options={Category}
                onChange={changeHandler}
            />
      
            <Select
                name="status"
                value={task.status}
                options={Status}
                onChange={changeHandler}
            />
      
            <Select
                name="priority"
                value={task.priority}
                options={Priority}
                onChange={changeHandler}
            />
            
            
            <Button type="submit">Сохранить</Button>
            <Button onClick={() => navigate('/')}>
                Отмена
            </Button>
        </form>
    );
}

export default EditForm;
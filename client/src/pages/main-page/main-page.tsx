import { FC } from "react";
import TaskList from "../../entities/task/ui/task-list/task-list";
import TaskItem from "../../entities/task/ui/task-item/task-item";
import { useTasks } from "../../app/context/task-context";

const MainPage: FC = () => {
    const { tasks } = useTasks();

    return(
        <main>
            <h1>Менеджер задач</h1>
            <TaskList tasks={tasks} renderTask={(task) => <TaskItem key={task.id} task={task} />} />
        </main>
    );
}

export default MainPage;
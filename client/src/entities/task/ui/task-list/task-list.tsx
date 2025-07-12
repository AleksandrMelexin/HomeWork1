import { FC } from "react";
import { ITask } from "../../model/task";

interface TaskListProps {
    tasks: ITask[];
    renderTask: (task: ITask) => React.ReactNode;
}

const TaskList: FC<TaskListProps> = ({tasks, renderTask}) => {
    return(
        <div>
            {tasks.map(renderTask)}
        </div>
    );
}

export default TaskList
import { FC } from "react";
import { ITask } from "../../model/task";
import { Row, Col, Empty, Spin } from 'antd';
import styles from './task-list.module.css';

interface TaskListProps {
    tasks: ITask[];
    loading?: boolean;
    renderTask: (task: ITask) => React.ReactNode;
    gutter?: number | [number, number];
    cols?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
}

const TaskList: FC<TaskListProps> = ({
    tasks,
    renderTask,
    loading = false,
    gutter = [16, 16],
    cols = { xs: 1, sm: 2, md: 3, lg: 4 }
}) => {
    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <Spin size="large" />
            </div>
        );
    }

    if (!tasks.length) {
        return <Empty description="Нет задач" className={styles.empty} />;
    }

    return (
        <div className={styles.taskList}>
            <Row gutter={gutter}>
                {tasks.map((task) => (
                    <Col 
                        key={task.id}
                        xs={24 / (cols.xs || 1)}
                        sm={24 / (cols.sm || 2)}
                        md={24 / (cols.md || 3)}
                        lg={24 / (cols.lg || 4)}
                        xl={24 / (cols.xl || 4)}
                    >
                        {renderTask(task)}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TaskList;
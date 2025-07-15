import { FC } from "react";
import { Typography, Space } from "antd";
import styles from "./main-page.module.css";
import { useTasks } from "../../app/context/task-context";
import TaskItem from "../../entities/task/ui/task-item/task-item";
import TaskList from "../../entities/task/ui/task-list/task-list";

const { Title } = Typography;

const MainPage: FC = () => {
  const { tasks } = useTasks();

  return (
    <main className={styles.container}>
      <Space direction="vertical" className={styles.header}>
        <Title level={2} className={styles.title}>
          Менеджер задач
        </Title>
      </Space>

      <div className={styles.taskListWrapper}>
        <TaskList
          tasks={tasks}
          renderTask={(task) => <TaskItem key={task.id} task={task} />}
        />
      </div>
    </main>
  );
};
export default MainPage;

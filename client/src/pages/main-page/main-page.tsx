import { useEffect } from "react";
import { Typography, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./main-page.module.css";
import TaskItem from "@entities/task/ui/task-item/";
import TaskList from "@entities/task/ui/task-list/";
import { useTypedSelector } from "@shared/hooks/useTypedSelector";
import { useActions } from "@shared/hooks/useActions";
import { taskApi } from "@entities/task/api";

const { Title } = Typography;

const MainPage = () => {
  const { tasks } = useTypedSelector((state) => state.task);
  const { fetchTasks } = useActions();
  const navigate = useNavigate();

  async function getTasksFromAPI() {
    const res = await taskApi.getTasks();
    if ("error" in res) {
      console.error(res.error);
    } else {
      fetchTasks(res.tasks);
    }
  }

  useEffect(() => {
    if (tasks.length === 0) {
      getTasksFromAPI();
    }
  }, []);

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

      <div className={styles.addButtonContainer}>
        <Button
          type="primary"
          onClick={() => navigate("/task/new")}
          className={styles.addButton}
        >
          Добавить задачу
        </Button>
      </div>
    </main>
  );
};

export default MainPage;

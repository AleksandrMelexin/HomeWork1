import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography, Result, Space } from "antd";
import styles from "./task-detail-page.module.css";
import EditForm from "@widgets/edit-form/edit-form";
import { useTypedSelector } from "@shared/hooks/useTypedSelector";

const { Title } = Typography;

const TaskDetailPage = () => {
  const { tasks } = useTypedSelector((state) => state.task);
  const navigate = useNavigate();
  const { id } = useParams();
  const task = tasks.find((task) => task.id === id);

  if (task) {
    return (
      <main className={styles.container}>
        <Space direction="vertical" className={styles.header}>
          <Title level={2} className={styles.title}>
            Редактирование задачи
          </Title>
        </Space>
        <div className={styles.formWrapper}>
          <EditForm gotTask={task} action="edit" />
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles.notFoundContainer}>
        <Result
          status="404"
          title={`Задача не найдена`}
          subTitle="Извините, запрошенная задача не существует или была удалена"
          extra={
            <Button
              type="primary"
              onClick={() => navigate("/")}
              className={styles.homeButton}
            >
              Вернуться на главную
            </Button>
          }
        />
      </main>
    );
  }
};

export default TaskDetailPage;

import { FC } from "react";
import { Typography, Space } from "antd";
import styles from "./task-create-page.module.css";
import EditForm from "@widgets/edit-form/edit-form";

const { Title } = Typography;

const TaskDetailPage: FC = () => {
  return (
    <main className={styles.container}>
      <Space direction="vertical" className={styles.header}>
        <Title level={2} className={styles.title}>
          Создание задачи
        </Title>
      </Space>
      <div className={styles.formWrapper}>
        <EditForm action="add" />
      </div>
    </main>
  );
};

export default TaskDetailPage;

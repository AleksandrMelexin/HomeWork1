import { ITask } from "../../model/task";
import { Row, Col, Empty, Spin } from "antd";
import styles from "./task-list.module.css";

/**
 * Свойства компонента списка задач
 * @property {ITask[]} tasks - Массив задач для отображения
 * @property {boolean} [loading=false] - Флаг состояния загрузки
 * @property {(task: ITask) => React.ReactNode} renderTask - Функция рендера отдельной задачи
 * @property {number | [number, number]} [gutter=[16, 16]] - Отступы между карточками задач.
 *                                                         Может быть числом (одинаковые отступы)
 *                                                         или массивом [вертикальный, горизонтальный]
 * @property {Object} [cols] - Конфигурация количества колонок для разных разрешений экрана
 * @property {number} [cols.xs=1] - Количество колонок на экранах <576px
 * @property {number} [cols.sm=2] - Количество колонок на экранах ≥576px
 * @property {number} [cols.md=3] - Количество колонок на экранах ≥768px
 * @property {number} [cols.lg=4] - Количество колонок на экранах ≥992px
 * @property {number} [cols.xl=4] - Количество колонок на экранах ≥1200px
 */
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

const TaskList = ({
  tasks,
  renderTask,
  loading = false,
  gutter = [16, 16],
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
}: TaskListProps) => {
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

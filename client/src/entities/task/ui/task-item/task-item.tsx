import { FC } from "react";
import { ITask } from "../../model/task";
import { useNavigate } from "react-router-dom";
import { Card, Tag, Button, Typography } from 'antd';
import styles from './task-item.module.css';

const { Text, Paragraph } = Typography;

interface ITaskItemProps {
    task: ITask;
}

const TaskItem: FC<ITaskItemProps> = ({ task }) => {
    const navigate = useNavigate();

    const getTagColor = (type: 'category' | 'status' | 'priority', value: string): string => {
        const colorMap = {
            category: {
                'баг': 'red',
                'фича': 'green',
                'документация': 'blue',
                'рефакторинг': 'purple',
                'тестирование': 'orange'
            },
            status: {
                'необходимо сделать': 'orange',
                'в процессе': 'blue',
                'выполнена': 'green',
            },
            priority: {
                'низкий': 'green',
                'средний': 'orange',
                'высокий': 'red'
            }
        };

        const normalizedValue = value.toLowerCase().trim();
        for (const [key, color] of Object.entries(colorMap[type])) {
            if (key.toLowerCase().includes(normalizedValue)) {
                return color;
            }
        }
        return 'default';
    };

    return (
        <Card
            className={styles.card}
            title={
                <div className={styles.header}>
                    <Text strong className={styles.taskId}>#{task.id}</Text>
                    <Text 
                        ellipsis={{ tooltip: task.title }} 
                        className={styles.taskTitle}
                    >
                        {task.title}
                    </Text>
                </div>
            }
        >
            <div className={styles.cardContent}>
                {task.description && (
                    <Paragraph 
                        ellipsis={{ rows: 2, expandable: true }} 
                        className={styles.description}
                    >
                        {task.description}
                    </Paragraph>
                )}

                <div className={styles.tagsWrapper}>
                    <Tag color={getTagColor('category', task.category)} className={styles.tag}>
                        {task.category}
                    </Tag>
                    <Tag color={getTagColor('status', task.status)} className={styles.tag}>
                        {task.status}
                    </Tag>
                    <Tag color={getTagColor('priority', task.priority)} className={styles.tag}>
                        {task.priority}
                    </Tag>
                </div>
            </div>
            <Button 
                type="primary" 
                size="small"
                onClick={() => navigate(`/task/${task.id}`)}
                className={styles.editButton}
            >
                Редактировать
            </Button>
        </Card>
    );
};

export default TaskItem;
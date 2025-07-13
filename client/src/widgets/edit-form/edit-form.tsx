import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category, ITask, Status, Priority } from "../../entities/task/model/task";
import { useTasks } from "../../app/context/task-context";
import { Form, Input, Button, Select, Space } from 'antd';
import styles from './edit-form.module.css';

const { TextArea } = Input;
const { Option } = Select;

interface EditFormProps {
    gotTask: ITask;
}

const EditForm: FC<EditFormProps> = ({ gotTask }) => {
    const [task, setTask] = useState<ITask>(gotTask);
    const { updateTask } = useTasks();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const changeHandler = (name: string, value: string) => {
        setTask(prev => ({ ...prev, [name]: value }));
    };

    const submitHandler = () => {
        updateTask(task.id, task);
        navigate('/');
    };

    return (
        <div className={styles.formContainer}>
            <Form
                form={form}
                layout="vertical"
                onFinish={submitHandler}
                initialValues={task}
                className={styles.form}
            >
                <Form.Item
                    label="Название задачи"
                    name="title"
                    rules={[{ required: true, message: 'Введите название задачи' }]}
                >
                    <Input 
                        placeholder="Введите название задачи" 
                        onChange={(e) => changeHandler('title', e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Описание задачи"
                    name="description"
                >
                    <TextArea 
                        rows={4}
                        placeholder="Введите описание задачи"
                        onChange={(e) => changeHandler('description', e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Категория"
                    name="category"
                >
                    <Select
                        onChange={(value) => changeHandler('category', value)}
                    >
                        {Object.values(Category).map(category => (
                            <Option key={category} value={category}>{category}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Статус"
                    name="status"
                >
                    <Select
                        onChange={(value) => changeHandler('status', value)}
                    >
                        {Object.values(Status).map(status => (
                            <Option key={status} value={status}>{status}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Приоритет"
                    name="priority"
                >
                    <Select
                        onChange={(value) => changeHandler('priority', value)}
                    >
                        {Object.values(Priority).map(priority => (
                            <Option key={priority} value={priority}>{priority}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item className={styles.buttons}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                        <Button onClick={() => navigate('/')}>
                            Отмена
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditForm;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, Button, Select, Space } from "antd";
import styles from "./edit-form.module.css";
import { ITask, Category, Status, Priority } from "@entities/task/model/task";
import { useActions } from "@shared/hooks/useActions";
import { SelectForm } from "@shared/ui/select-form/select-form";
import { taskApi } from "@entities/task/api";

const { TextArea } = Input;
const { Option } = Select;

const emptyTask: ITask = {
  // задача-болванка позволит переиспользовать компонент EditForm для создания задачи
  id: "",
  title: "",
  description: "",
  category: Category.feature,
  status: Status.todo,
  priority: Priority.low,
};

interface EditFormProps {
  gotTask?: ITask;
  action: "edit" | "add";
}

const EditForm = ({ gotTask = emptyTask, action }: EditFormProps) => {
  const { addTask, updateTask } = useActions();
  const [task, setTask] = useState<ITask>({
    ...gotTask,
    id: gotTask.id || uuidv4(),
  });
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const changeHandler = (name: string, value: string) => {
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    const currentTask = {
      ...task,
      title: form.getFieldValue("title"),
      description: form.getFieldValue("description"),
      category: form.getFieldValue("category"),
      status: form.getFieldValue("status"),
      priority: form.getFieldValue("priority"),
    };

    if (action === "edit") {
      taskApi.updateTask(currentTask);
      updateTask(currentTask);
    } else {
      taskApi.createTask(currentTask);
      addTask(currentTask);
    }
    navigate("/");
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
          rules={[{ required: true, message: "Введите название задачи" }]}
        >
          <Input
            placeholder="Введите название задачи"
            onChange={(e) => changeHandler("title", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Описание задачи" name="description">
          <TextArea
            rows={4}
            placeholder="Введите описание задачи"
            onChange={(e) => changeHandler("description", e.target.value)}
          />
        </Form.Item>

        <SelectForm
          label="Категория"
          type="category"
          onChange={(value) => changeHandler("category", value)}
        />

        <SelectForm
          label="Статус"
          type="status"
          onChange={(value) => changeHandler("status", value)}
        />

        <SelectForm
          label="Приоритет"
          type="priority"
          onChange={(value) => changeHandler("priority", value)}
        />

        <Form.Item className={styles.buttons}>
          <Space>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
            <Button onClick={() => navigate("/")}>Отмена</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default EditForm;

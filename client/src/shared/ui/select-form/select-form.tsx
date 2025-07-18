import { Form, Select } from "antd";
import { Category, Priority, Status } from "@entities/task/model/task";

const { Option } = Select;

/**
 * Свойства компонента SelectForm
 * Компонент для выбора значения из выпадающего списка с возможностью
 * выбора между категориями, приоритетами и статусами задач.
 * @property {string} label - Текст подписи над полем выбора
 * @property {"category" | "priority" | "status"} type - Тип выбираемых значений:
 *   - "category" - категории задач (баг, фича и т.д.)
 *   - "priority" - приоритеты задач (низкий, средний, высокий)
 *   - "status" - статусы задач (необходимо сделать, в процессе и т.д.)
 * @property {string} [value] - Текущее выбранное значение (контролируемое)
 * @property {(value: string) => void} onChange - Обработчик изменения выбранного значения.
 *   Принимает новое значение в виде строки.
 */
interface SelectFormProps {
  label: string;
  type: "category" | "priority" | "status";
  value?: string;
  onChange: (value: string) => void;
}
const SelectForm = ({ label, type, value, onChange }: SelectFormProps) => {
  const getOptions = () => {
    switch (type) {
      case "category":
        return Object.values(Category);
      case "priority":
        return Object.values(Priority);
      case "status":
        return Object.values(Status);
      default:
        return [];
    }
  };

  return (
    <Form.Item label={label} name={type}>
      <Select value={value} onChange={onChange}>
        {getOptions().map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectForm;

import { Form, Select } from 'antd';
import { Category, Priority, Status } from '../../../entities/task/model/task';

const { Option } = Select;

interface SelectFormProps {
  label: string;
  type: 'category' | 'priority' | 'status';
  value?: string;
  onChange: (value: string) => void;
}

export const SelectForm = ({ label, type, value, onChange }: SelectFormProps) => {
  const getOptions = () => {
    switch (type) {
      case 'category':
        return Object.values(Category);
      case 'priority':
        return Object.values(Priority);
      case 'status':
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
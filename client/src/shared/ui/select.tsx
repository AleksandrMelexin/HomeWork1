import { ChangeEvent, FC } from 'react';

interface SelectProps {
    name: string;
    value: string;
    options: Record<string, string>;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  }
const Select: FC<SelectProps> = ({name, value, options, onChange}) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
        >
            {Object.entries(options).map(([key, label]) => (
                <option key={key} value={key}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export default Select;

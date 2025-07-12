import { FC } from 'react';

interface ButtonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({type = 'button', children, onClick = () => {}}) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    );
};

export default Button;

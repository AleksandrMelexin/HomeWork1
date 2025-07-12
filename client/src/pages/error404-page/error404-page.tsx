import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/ui/button";

const Error404Page: FC = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Страница не найдена</h1>
            <div>Ошибка 404</div>
            <Button onClick={() => {navigate(`/`)}}>Вернуться на главную</Button>
        </div>
    );
}

export default Error404Page;
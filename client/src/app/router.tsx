import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404Page from "../pages/error404-page/error404-page";
import MainPage from "../pages/main-page/main-page";
import TaskDetailPage from "../pages/task-detail-page/task-detail-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

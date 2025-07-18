import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@pages/main-page/";
import Error404Page from "@pages/error404-page/";
import TaskDetailPage from "@pages/task-detail-page/";
import TaskCreatePage from "@pages/create-task-page/";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
        <Route path="/task/new" element={<TaskCreatePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

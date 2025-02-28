import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Todo from "../pages/to-do/Todo";
import InProgress from "../pages/InProgress/InProgress";
import Done from "../pages/Done/Done";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Todo></Todo>,
      },
      {
        path: "in-progress",
        element: <InProgress></InProgress>,
      },
      {
        path: "done",
        element: <Done></Done>,
      },
    ],
  },
]);

export default router;

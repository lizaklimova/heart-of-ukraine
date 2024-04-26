import { useEffect } from "react";
import CreateTask from "components/Tasks/CreateTask";

const CreateTaskPage = () => {
  useEffect(() => {
    localStorage.setItem("location", "/createTask");
  }, []);

  return <CreateTask />;
};

export default CreateTaskPage;

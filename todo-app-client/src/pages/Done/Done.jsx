import tasks from "../../layout/fakedata";
import Card from "../../components/Card/Card";
const Done = () => {
  const done = tasks.filter((task) => (task.category = "Done"));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {done.map((task) => (
        <Card key={task._id} task={task}></Card>
      ))}
    </div>
  );
};

export default Done;

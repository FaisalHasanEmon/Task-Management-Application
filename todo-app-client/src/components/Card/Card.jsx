// eslint-disable-next-line react/prop-types
const Card = ({ task }) => {
  // task = {
  //   _id: "65e110b7f8a1c9e1d2a5e201",
  //   title: "Fix login bug",
  //   description: "Resolve the issue causing login failures for some users.",
  //   timestamp: "2025-02-28T12:00:00Z",
  //   category: "To-Do",
  // };

  return (
    <div className="card  bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{task?.title}</h2>
        <p>{task?.description}</p>
        <p>{task?.timestamp}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">{task?.category}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

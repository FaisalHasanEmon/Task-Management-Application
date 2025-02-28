// eslint-disable-next-line react/prop-types
const Card = ({ task }) => {
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

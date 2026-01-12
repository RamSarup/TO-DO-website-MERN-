import "./card.css";

const Card = ({ title, desc, done, onRemove, onToggle }) => {
  return (
    <div className={`task-card ${done ? "done" : ""}`}>
      <div className="text-container">
        <p className="title-card">{title}</p>
        <p className="desc-card">{desc}</p>
      </div>

      <div id="button">
        <button className="remove" onClick={onRemove}>
          &#128465;
        </button>
        <button className="check" onClick={onToggle}>
          {done ? "UNDO" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default Card;

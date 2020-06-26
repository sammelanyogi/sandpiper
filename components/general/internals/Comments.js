export default function Comments(props) {
  return (
    <div>
      <div>
        <span><strong>{props.name}</strong></span>{": "}
        <span>{props.comments}</span>
      </div>
    </div>
  );
}

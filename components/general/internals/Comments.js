export default function Comments({ creator, comment }) {
  return (
    <div className="py-2 comment">
      <div className="pb-2 d-flex align-items-center">
        <div>
          <img
            src={creator.image}
            alt={creator.name}
            className="creator-image"
          />
        </div>
        <div className=" px-3 d-flex flex-column">
          <div>
            <strong>{creator.name}</strong>
          </div>
          <div className="date">{comment.date}</div>
        </div>
      </div>

      <div className="description">{comment.text}</div>
      <style>
        {`
        .comment {
          color: #004368;
        }
          .creator-image {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .date {
            color: #808080;
            fontsize: 1rem;
          }
        `}
      </style>
    </div>
  );
}

import Comments from "./Comments";

export default function CommentwithReplies({comment, creator}) {
  return (
    <div className="main shadow p-4">
      <Comments
        creator={creator}
        comment={comment}
      />
      <style jsx>
          {`
          .main {
              border-radius: 10px;
              margin-bottom: 2rem;
          }
          `}
      </style>
    </div>
  );
}

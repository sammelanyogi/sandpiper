import Comments from "./Comments";

export default function CommentwithReplies({ comment, creator, replies }) {
  return (
    <div className="main shadow py-4 px-5">
      <Comments creator={creator} comment={comment} />
      <input type="text" name="reply" id="reply" className="form-control" placeholder="Reply to this thread" />
      {!!replies && (
        <div className="replies pl-5">
          {replies.map((reply, index) => {
            return (
              <Comments
                creator={reply.creator}
                comment={reply.comment}
                key={index}
              />
            );
          })}
        </div>
      )}
      <style jsx>
        {`
          input {
            border: 1px solid #004368;
            border-radius: 15px;
          }
          .main {
            border-radius: 10px;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </div>
  );
}

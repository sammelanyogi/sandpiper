export default function BSQTest() {
  return (
    <div className="bsqtest">
      <div className="title">BSQs Test</div>
      <div className="description">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
      </div>
      <ol className="list py-4">
        {[1, 2, 3, 4, 5].map((question, index) => {
          return (
            <li key={index}>
              <div className="question">
                The quick,brown fox jumps over a lazy dog. DJs flock by when MTV
                ax quiz prog. Junk MTV quiz graced by fox whelps. Bawdsjog,flick
                quartz,vexnymphs.
              </div>
              <div className="options">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <div key={index} className="py-1">
                      <input
                        type="radio"
                        id={item}
                        name={question}
                        value={item}
                      />
                      <label htmlFor="other" className="px-2">this is the answer</label>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
      <div>
        <button className="btn btn-lg">
          Submit
        </button>
      </div>
      <style>
        {`
        .btn {
          background-color: #01949b;
          color: white;
          border-radius: 20px;
        }
        .bsqtest {
          color: #004368;
          }
          .title {
            font-size: 2rem;
          }
          .description {
            font-size: 1.3rem;
            font-weight: 500;
          }
          .question {
            font-size: 1.2rem;
          }
          `}
      </style>
    </div>
  );
}

import { useState, useEffect } from "react";

export default function BSSM({ source, meta, number }) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(number)
    if (number == 1) {
      setHeight("60vh");
      setWidth("50vh");
    }
    else if (number == 2) {
      setHeight("50vh")
      setWidth("35vh")
    }
  }, []);
  return (
    <div className="main">
      <div className="bssm d-flex flex-column ">
        <div className="content">
          {meta.type == "image" && (
            <img src={source} className="bssms" alt="bssm" />
          )}
          {meta.type == "video" && <video src={source}></video>}
        </div>
        <div className="px-4">
          <div className="topic py-2">{meta.topic}</div>
          <div className=" metadata  d-flex flex-column justify-content-between">
            <div className="meta">
              <div className="title">{meta.title}</div>
              <div className="description">{meta.description}</div>
            </div>

            <div className="creator d-flex justify-content-between">
              <div>
                <div>
                  <img
                    src={meta.creator.image}
                    alt={meta.creator.name}
                    className="creator-image"
                  />
                </div>
                <div>{meta.creator.name}</div>
              </div>
              <div>
                <div className="bsq">
                  <span>image</span> <span>BSQ</span>
                </div>
                <div className="forum">
                  <span>image</span> <span>FORUM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            height: ${height};
            width: ${width};
          }
          .metadata {
            height: 100%;
          }
          .creator-image {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .bssms {
            width: 100%;
            border-radius: 10px 10px 0 0;
          }
          .bssm {
            height: 100%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border-radius: 10px;
            display: inline-block;
          }
          .description {
            color: #003459;
          }
          .topic {
            color: #01949b;
            font-size: 1.2rem;
          }
        `}
      </style>
    </div>
  );
}

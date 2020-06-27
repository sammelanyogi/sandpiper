import { useState, useEffect, useRef } from "react";

export default function FullBSSM({ source, meta, number }) {
  const ref = useRef();
  const [overflowed, setOverflowed] = useState(false);
  useEffect(() => {
    setOverflowed(
      ref.current.offsetHeight < ref.current.scrollHeight ||
        ref.current.offsetWidth < ref.current.scrollWidth
    );
  }, []);
  return (
    <div className="main">
      <div className="bssm d-flex">
        <div className="content">
          {meta.type == "image" && (
            <img src={source} className="bssms" alt="bssm" />
          )}
          {meta.type == "video" && (
            <video className="bssms-vid" controls>
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="py-3 px-4 d-flex flex-column justify-content-between">
          <div>
            <div className="topic py-2">{meta.topic}</div>
            <div className="metatitle">
              {meta.title} {overflowed.toString()}
            </div>
          </div>
          <div className="meta">
            <div ref={ref} className="description">
              {meta.description}
            </div>
            {overflowed && <div>Read More</div>}
          </div>

          <div className="creator pt-3 d-flex justify-content-between">
            <div>
              <div>
                <img
                  src={meta.creator.image}
                  alt={meta.creator.name}
                  className="creator-image"
                />
              </div>
            </div>
            <div className="d-inline-block">
              <span>image</span>
              <span>image</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content {
            position: relative;
            padding-right: 60%;
            padding-bottom: 45%;
          }
          .main {
            background-color: white;
            border-radius: 10px;
          }
          .metatitle {
            font-size: 1.2rem;
          }
          .d-flex {
            display: flex;
          }
          .flex-column {
            flex-direction: column;
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
            object-fit: cover;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 10px 0 0 10px;
          }
          .bssms-vid {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
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
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
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

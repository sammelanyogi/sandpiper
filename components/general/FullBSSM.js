import { useState, useEffect } from "react";

export default function FullBSSM({ source, meta, number }) {
  return (
    <div className="main">
      <div className="bssm d-flex flex-column ">
        <div className="content">
          {meta.type == "image" && (
            <img src={source} className="bssms" alt="bssm" />
          )}
          {meta.type == "video" && <video src={source}></video>}
        </div>
        <div className="row p-4">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <div>
                <div className="topic py-2">{meta.topic}</div>
                <div className="metatitle">{meta.title}</div>
              </div>
              <div>
                  <span>Save</span>
                  <span>Download </span>
              </div>
            </div>

            <div className="meta">
              <div className="description">{meta.description}</div>
            </div>
          </div>

          <div className="col-md-4 metadata  d-flex flex-column justify-content-between">
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
            background-color: white;
            width: 60vw;
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

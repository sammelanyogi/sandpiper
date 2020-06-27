import { useState, useEffect } from "react";

export default function BSSM({ source, meta }) {
  return (
    <div className="main">
      <div className="bssm d-flex flex-column ">
        <div className="content">
          {meta.type == "image" && (
            <img src={source} className="bssms" alt="bssm" />
          )}
          {meta.type == "video" && (
            <video className="bssms" controls>
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="p-4">
          <div className="topic">{meta.topic}</div>
          <div className=" metadata  d-flex flex-column justify-content-between">
            <div className="meta">
              <div className="metatitle">{meta.title}</div>
              <div className="description">{meta.description}</div>
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
          .content {
            position: relative;
            padding-bottom: 75%;
          }
          .main {
            background-color: white;
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

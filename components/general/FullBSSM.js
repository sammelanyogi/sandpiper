import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
      <div className="bssm d-flex flex-column ">
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
        <div className="row p-4">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <div>
                <div className="topic py-2">{meta.topic}</div>
                <div className="metatitle">
                  {meta.title} {overflowed.toString()}
                </div>
              </div>
              <div>
                <span>Save </span>
                <span>Download </span>
              </div>
            </div>

            <div className="meta">
              <div ref={ref} className="description">
                {meta.description}
              </div>
              {overflowed && <div>Read More</div>}
            </div>
          </div>

          <div className="col-md-4 metadata pt-4 d-flex flex-column justify-content-between">
            <div className="px-4">
              <table>
                <tbody>
                  <Link href="/bsqs">
                    <tr className="bsq">
                      <td className="py-2">
                        <img
                          className="other-image"
                          src="/images/icons/BSQs@2x.png"
                          alt="icon"
                        />
                      </td>{" "}
                      <td className="pl-4">BSQs</td>
                    </tr>
                  </Link>

                  <Link href={`/discussions/${23}`}>
                    <tr className="forum">
                      <td className="py-2">
                        <img
                          className="other-image"
                          src="/images/icons/Forums@2x.png"
                          alt="icon"
                        />
                      </td>{" "}
                      <td className="pl-4">Forums</td>
                    </tr>
                  </Link>
                </tbody>
              </table>
            </div>
            <div className="hr w-75 mx-auto my-2"></div>
            <div className="pt-3 px-4 d-flex">
              <div>
                <img
                  src={meta.creator.image}
                  alt={meta.creator.name}
                  className="creator-image"
                />
              </div>
              <div className="pl-4 name">{meta.creator.name}</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hr {
            background-color: #01949b;
            height: 3px;
          }
          .content {
            position: relative;
            padding-bottom: 56.75%;
          }
          .main {
            background-color: white;
            width: 70vw;
            border-radius: 10px;
          }
          .metatitle {
            font-size: 1.2rem;
          }
          .name {
            font-size: 1.4rem;
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
          .other-image {
            height: 30px;
          }
          .bssms {
            object-fit: cover;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
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
          .forum {
            cursor: pointer;
          }
          .bsq {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

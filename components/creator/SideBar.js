import { useState } from "react";
export default function SideBar(props) {
  const [current, setCurrent] = useState(0);
  return (
    <div className={props.className}>
      <div className="orange shadow px-5">
        <table className="table table-borderless">
          <tbody className="d-flex flex-column justify-content-between ">
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    props.getValue(index);
                    setCurrent(index);
                  }}
                  key={index}
                >
                  <td className="iconn">
                    <img src={item.src} alt={item.name} />
                  </td>
                  <td className={current == index ? "underline" : ""}>
                    {item.name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .orange {
            background-color: #ffba08;
            border-radius: 10px;
            color: #004368;
            height: 100%;
            font-size: 1.5rem;
            display: inline-block;
          }
          .underline {
            text-decoration: underline;
          }
          .iconn {
            padding-right: 2rem;
            text-align: center;
          }
          tr {
            cursor: pointer;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          img {
            width: 20px;
          }
        `}
      </style>
    </div>
  );
}

const data = [
  {
    src: "/images/creator/Dashboard@2x.png",
    name: "Overview",
  },
  {
    src: "/images/creator/Create@2x.png",
    name: "Create",
  },
  {
    src: "/images/creator/Catalog@2x.png",
    name: "Catalog",
  },
  {
    src: "/images/creator/Classroom@2x.png",
    name: "Classroom",
  },
  {
    src: "/images/creator/Messages@2x.png",
    name: "Messages",
  },
  {
    src: "/images/creator/Analytics@2x.png",
    name: "Analytics",
  },
];

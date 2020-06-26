import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation(props) {
  const router = useRouter();

  const [ac, setac] = useState(0);
  useEffect(() => {
    if (router.pathname == "/bsqs") setac(1);
    else if (router.pathname == "/forum") setac(2);
    else if (router.pathname == "/analytics") setac(3);
    else setac(0);
  }, []);
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid big-screen pt-4 pb-3 pt-md-4 pb-md-3 col-xl-11 mx-auto">
        <div className="navbar-header">
          <Link href="/">
            <a className="navbar-brand">Sandpiper</a>
          </Link>
        </div>

        <ul
          className="nav navbar-nav navlist nav-fill"
          style={{ width: "45%" }}
        >
          <li className="nav-item">
            <Link href="/bsqs">
              <a className={ac == 1 ? "nav-link active" : "nav-link "}>BSQ</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/forum">
              <a className={ac == 2 ? "nav-link active" : "nav-link "}>Forum</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/analytics">
              <a className={ac == 3 ? "nav-link active" : "nav-link "}>
                Analytics
              </a>
            </Link>
          </li>
        </ul>
        <div className="navbar-header">
          <Link href="/user">
            <a className="brand">
              {props.user && props.user.photo.trim() != "" ? (
                <div className="outer-circle">
                  <img
                    src={props.user.photo}
                    className="rounded-circle"
                    alt="profile"
                    height="28px"
                  />
                </div>
              ) : (
                <img
                  src="/images/navigation/avatar.jpg"
                  className="rounded-circle"
                  alt="profile"
                  height="30px"
                />
              )}
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .outer-circle {
            background-color: #003459;
            border-radius: 15px;
            width: 30px;
            padding: 1px;
          }
          .btn:focus,
          .btn:active {
            box-shadow: none !important;
            outline: 0px !important;
          }
          .navlist {
            text-align: left;
            list-style-position: inside;
          }
          .navbar-brand {
            font-family: Arvo, serif;
            font-size: 2rem;
          }
          .navbar {
            z-index: 5;
            background-color: white;
          }
          .nav-link {
            font-weight: 400;
            color: #808080;
          }
          .nav-link.active {
            color: #003459;
          }
        `}
      </style>
    </nav>
  );
}

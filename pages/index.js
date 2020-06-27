import Layout from "../components/Layout";
import BSSM from "../components/general/BSSM";

import React, { Component } from "react";
import $ from "jquery";
import { useRouter } from "next/router";
import { Modal, ModalBody } from "reactstrap";
import FullBSSM from "../components/general/FullBSSM";
import Link from "next/link";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  require("materialize-css");
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      router: props.router,
      modalShow: Array.apply(false, Array(bssms.length)).map(function () {}),
      searchState: 1,
    };
  }

  goLeft(i) {
    let newarr = this.state.modalShow;
    newarr[i] = !this.state.modalShow[i];
    newarr[i - 1] = !this.state.modalShow[i - 1];
    this.setState({ modalShow: newarr });
  }
  goRight(i) {
    let newarr = this.state.modalShow;
    newarr[i] = !this.state.modalShow[i];
    newarr[i + 1] = !this.state.modalShow[i + 1];
    this.setState({ modalShow: newarr });
  }
  changeSearch(i) {
    this.setState({ searchState: i });
  }
  toggleStyle(i) {
    let newarr = this.state.modalShow;
    newarr[i] = !this.state.modalShow[i];
    if (this.state.modalShow[i] == false) {
      this.state.router.push("/");
    }
    this.setState({ modalShow: newarr });
  }
  componentDidMount() {
    console.log(this.state.router);
    $(".carousel").carousel();
  }
  render() {
    return (
      <Layout title="Home">
        <div className="carousel" style={{ height: "1000px" }}>
          {bssms.map((item, index) => {
            return (
              <div
                onClick={() => this.toggleStyle(index)}
                className="carousel-item"
                key={index}
              >
                <MaterialModal
                  left={() => this.goLeft(index)}
                  right={() => this.goRight(index)}
                  show={this.state.modalShow[index]}
                  source={item.source}
                  meta={item.meta}
                  onHide={() => this.toggleStyle(index)}
                />
                <Link href={`/?query=${index}`} as={`/content/${index}`}>
                  <a style={{ textDecoration: "none" }}>
                    <BSSM source={item.source} meta={item.meta} />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="outer-carousel">
          <div className="py-4 container d-flex justify-content-center flex-column">
            <div className="title mx-auto">Explore BSSM</div>
            <div className="text-center py-3">
              In your image you've putting the padding outside the child. This
              is not the case. Padding adds to the width of an element, so if
              you add padding and give it a width of 100% it will have a width
              of 100% + padding. In order to what you are wanting you just need
              to either add padding to the parent div, or add a margin to the
              inner div. Because divs are block-level elements they will
              automatically expand to the width of their parent.
            </div>
          </div>
          <div className="container pb-5">
            <div className="searchbox d-flex justify-content-center align-items-center">
              <div className="select px-5">
                <div
                  className={
                    this.state.searchState == 0
                      ? "activesearch"
                      : "unactivesearch"
                  }
                  onClick={() => this.changeSearch(0)}
                >
                  Lessons
                </div>
                <div
                  className={
                    this.state.searchState == 1
                      ? "activesearch"
                      : "unactivesearch"
                  }
                  onClick={() => this.changeSearch(1)}
                >
                  BSSM Book
                </div>
                <div
                  className={
                    this.state.searchState == 2
                      ? "activesearch"
                      : "unactivesearch"
                  }
                  onClick={() => this.changeSearch(2)}
                >
                  BSSM Pages
                </div>
              </div>
              <div>
                <img src="/images/icons/Search.png" alt="Q" />
                <input
                  className="no-border"
                  type="search"
                  id="search-bar"
                  placeholder="search"
                />
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <style>
          {`
          .activesearch {
            border: 2px solid #003459;
            border-radius: 10px;
            padding: 0.5rem;
          }
          .unactivesearch {
            border: 2px solid #ffffff;
            border-radius: 10px;
            padding: 0.5rem;
          }
          .carousel {
            margin-top: -300px;
          }
          .outer-carousel {
            z-index: 5;
          }
          .title {
            color: #004368;
            font-size: 2rem;
          }
          .carousel-item {
            width: 500px !important;
          }
        `}
        </style>
      </Layout>
    );
  }
}

function MaterialModal(props) {
  return (
    <Modal isOpen={props.show} toggle={props.onHide} size="xl" centered>
      <div className="d-flex align-items-center">
        <img
          src="/images/icons/left.png"
          alt="left"
          className="px-4 butt"
          onClick={props.left}
        />
        <FullBSSM source={props.source} meta={props.meta} />
        <img
          src="/images/icons/right.png"
          alt="left"
          className="px-4 butt"
          onClick={props.right}
        />
      </div>
      <style jsx global>
        {`
          .butt {
            cursor: pointer;
          }
          .modal-content {
            border: none !important;
            background-color: transparent !important;
          }
          .modal-xl {
            max-width: 80vw;
          }
        `}
      </style>
    </Modal>
  );
}
const HomeWithRouter = (props) => {
  const router = useRouter();
  return <Home {...props} router={router} />;
};
export default HomeWithRouter;

const bssms = [
  {
    source:
      "https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-Nice-Wallpapers.jpg",
    meta: {
      type: "image",
      topic: "Not a Bambi",
      title: "Hey I am a Bear",
      description:
        "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes.",
      creator: { name: "John Doe", image: "/images/banjara.png" },
    },
  },
  {
    source:
      "https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
    meta: {
      type: "image",
      topic: "Science and Technology",
      title: "Measurements",
      description: "This is a cool description.",
      creator: { name: "John Doe", image: "/images/banjara.png" },
    },
  },
  {
    source:
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    meta: {
      type: "video",
      topic: "Animations",
      title: "A Bear Story",
      description: "Look! I am eating an apple.",
      creator: { name: "John Doe", image: "/images/banjara.png" },
    },
  },
  {
    source:
      "https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
    meta: {
      type: "image",
      topic: "Science and Technology",
      title: "Measurements",
      description: "This is a cool description.",
      creator: { name: "John Doe", image: "/images/banjara.png" },
    },
  },
  {
    source:
      "https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
    meta: {
      type: "image",
      topic: "Science and Technology",
      title: "Measurements",
      description: "This is a cool description.",
      creator: { name: "John Doe", image: "/images/banjara.png" },
    },
  },
];

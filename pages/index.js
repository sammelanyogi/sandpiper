import Layout from "../components/Layout";
import BSSM from "../components/general/BSSM";

import React, { Component } from "react";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  require("materialize-css");
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(".carousel").carousel();
  }
  render() {
    return (
      <Layout title="Home">
        <div className="carousel" style={{ height: "1000px" }}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <div className="ci carousel-item" key={index}>
                <BSSM
                  number={1}
                  source="https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png"
                  meta={{
                    type: "image",
                    topic: "Science and Technology",
                    title: "Measurements",
                    description: "This is a cool description.",
                    creator: { name: "John Doe", image: "/images/banjara.png" },
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="py-4 container d-flex justify-content-center flex-column">
          <div className="title mx-auto">Explore BSSM</div>
          <div className="text-center py-3">
            In your image you've putting the padding outside the child. This is
            not the case. Padding adds to the width of an element, so if you add
            padding and give it a width of 100% it will have a width of 100% +
            padding. In order to what you are wanting you just need to either
            add padding to the parent div, or add a margin to the inner div.
            Because divs are block-level elements they will automatically expand
            to the width of their parent.
          </div>
        </div>

        <div>
          
        </div>

        <style>
          {`
          .carousel {
            margin-top: -300px;
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

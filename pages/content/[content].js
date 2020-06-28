import SimilarBSSM from "../../components/general/SimilarBSSM";
import SelfBSSM from "../../components/general/SelfBSSM";
import Layout from "../../components/Layout";
import { useState } from "react";

export default function Content({ bssms }) {
  const [current, setCurrent] = useState(0);
  return (
    <Layout title="Content">
      <div className="container py-5">
        <div className="title">Browse Similar Contents</div>
        <div className="description">
          The quick brown fox jumps over a lazy dog. DJs f l ockbywhenMTVax q ui
          zprog.JunkM TVquizg raced byfoxwhel s.Baw dsjog,flick quartz,vex
          nymphs.Waltz,badnymph.
        </div>
        <div className="my-5 box py-2 px-4 d-flex justify-content-between">
          <div className="d-flex">
            <div
              onClick={() => setCurrent(0)}
              className={current == 0 ? "underline cur" : "cur"}
            >
              Similar BSSMs
            </div>
            <div
              onClick={() => setCurrent(1)}
              className={current == 1 ? "underline cur ml-5" : "ml-5 cur"}
            >
              Browse popular topics
            </div>
          </div>
          <div>Manage Suggestion</div>
        </div>
        <div className="row py-4">
          <div className="col-md-9">
            <SelfBSSM
              source={bssms.afu[0].filename}
              meta={{
                type: bssms.afu[0].type,
                title: bssms.afu[0].title,
                topic: bssms.afu[0].topic,
                description: bssms.afu[0].description,
                creator: {
                  name: "John Doe",
                  image: "/images/banjara.png",
                },
              }}
            />
          </div>
          <div className="col-md-3">
            <SimilarBSSM source={bssm.source} meta={bssm.meta} />
          </div>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div className="col-md-3 my-4" key={index}>
                <SimilarBSSM source={bssm.source} meta={bssm.meta} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .cur {
            cursor: pointer;
          }
          .underline {
            border-bottom: 4px solid #ffba08;
          }
          .box {
            font-size: 1.5rem;

            color: #004368;
            border: 2px solid #01949b;
            border-radius: 10px;
          }
          .title {
            color: #004368;
            font-size: 2rem;
            padding-top: 0.7rem;
            padding-bottom: 1.5rem;
          }
          .description {
            color: #004368;
            border-left: 2px solid #01949b;
            padding-left: 2rem;
          }
        `}
      </style>
    </Layout>
  );
}
Content.getInitialProps = async (context) => {
  const { content } = context.query;
  const response = await fetch(`http://bssm.nirav.codes/content/${content}`);
  const bssms = await response.json();
  return { bssms: bssms };
};
const bssm = {
  source:
    "https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
  meta: {
    type: "image",
    topic: "Science and Technology",
    title: "Measurements",
    description: "This is a cool description.",
    creator: { name: "John Doe", image: "/images/banjara.png" },
  },
};

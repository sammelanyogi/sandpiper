import BSSM from "../../components/general/BSSM";
import Layout from "../../components/Layout";

export default function Content({ id }) {
  return (
    <Layout title="Content">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="title py-4">Recently Explored</div>
            <BSSM source={bssm.source} meta={bssm.meta} />
          </div>
          <div className="col-md-6">
            <div className="title py-4">Discussions</div>
          </div>
        </div>
        <div>
          <div className="title py-4">Similar Contents</div>
        </div>
      </div>
      Sammelan {id}
      <style>
        {`
          .title {
              color: #004368;
              font-size: 2rem;
          }
          `}
      </style>
    </Layout>
  );
}
Content.getInitialProps = async (context) => {
  const { content } = context.query;
  return { id: content };
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

import Layout from "../components/Layout";
import BSSM from "../components/general/BSSM";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="py-4 d-flex justify-content-center">
        <div className="main d-flex align-items-center">
          <BSSM
            number={2}
            source="https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png"
            meta={{
              type: "image",
              topic: "Science and Technology",
              title: "Measurements",
              description: "This is a cool description.",
              creator: { name: "John Doe", image: "/images/banjara.png" },
            }}
          />
          <BSSM
            number={1}
            source="https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png"
            meta={{
              type: "image",
              topic: "Science Middle Technology",
              title: "Measurements",
              description: "This is a cool description.",
              creator: { name: "John Doe", image: "/images/banjara.png" },
            }}
          />
          <BSSM
            number={2}
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
      </div>
      <div className="container d-flex justify-content-center flex-column">
        <div className="title mx-auto">Explore BSSM</div>
        <div className="text-center py-3">
          In your image you've putting the padding outside the child. This is
          not the case. Padding adds to the width of an element, so if you add
          padding and give it a width of 100% it will have a width of 100% +
          padding. In order to what you are wanting you just need to either add
          padding to the parent div, or add a margin to the inner div. Because
          divs are block-level elements they will automatically expand to the
          width of their parent.
        </div>
      </div>
      <style>
        {`
        .title {
          color: #004368;
          font-size: 2rem;
        }
        .main {

        }
        `}
      </style>
    </Layout>
  );
}

Home.getInitialProps = async (ctx) => {
  const response = null; // get api to bssm await fetch()
  const bssms = null; // response.json();
  return {
    bssms,
  };
};

import Layout from "../components/Layout";
import Navigation from "../components/home/Navigation";
import FullBSSM from "../components/general/FullBSSM";

export default function BSQs() {
  return (
    <Layout title="BSQs">
      <div className="px-5 py-2">This is Analytics.</div>
      <FullBSSM
        source="https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png"
        meta={{
          type: "image",
          topic: "Science and Technology",
          title: "Measurements",
          description: "This is a cool description.",
          creator: { name: "John Doe", image: "/images/banjara.png" },
        }}
      />
    </Layout>
  );
}

BSQs.getInitialProps = async (ctx) => {
  const response = null; // get api to bssm await fetch()
  const bssms = null; // response.json()
  return {
    bssms,
  };
};

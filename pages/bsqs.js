import Layout from "../components/Layout";
import Navigation from "../components/home/Navigation";
import FullBSSM from "../components/general/FullBSSM";

export default function BSQs() {
  return (
    <Layout title="BSQs">
      <div className="px-5 py-2">This is BSQs.</div>
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

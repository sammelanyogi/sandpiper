import Layout from "../components/Layout";

export default function Analytics() {
  return (
    <Layout title="Analytics">
      <div className="px-5 py-2">This is Analytics.</div>
    </Layout>
  );
}

Analytics.getInitialProps = async (ctx) => {
  const response = null; // get api to bssm await fetch()
  const bssms = null; // response.json()
  return {
    bssms,
  };
};

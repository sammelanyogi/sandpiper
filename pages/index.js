import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div>Game Start</div>
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

import Layout from "../components/Layout";
import SideBar from "../components/students/SideBar";
import BSQTest from "../components/students/BSQTest";

export default function BSQs() {
  return (
    <Layout title="BSQs">
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <SideBar value={1} getValue={(x) => console.log(x)} />
          </div>
          <div className="col-8">
            <BSQTest/>
          </div>
        </div>
      </div>
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

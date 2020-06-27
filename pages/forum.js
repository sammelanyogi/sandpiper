import Layout from "../components/Layout";
import SideBar from "../components/creator/SideBar";

export default function Forum() {
  const getValue = (i) => {
    console.log("this is value" + i);
  };
  return (
    <Layout title="Forum">
      <div className="container">
        <div >
        <SideBar getValue={getValue} />
        </div>
       
      </div>
    </Layout>
  );
}

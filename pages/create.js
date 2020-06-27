import Layout from "../components/Layout";
import BSSMUpload from "../components/BSSMUpload";
import axios from "axios";

export default function Forum() {
  return (
    <>
      <Layout title="Forum">
        <div className="container">
          <BSSMUpload />
        </div>
      </Layout>
      <style jsx>
        {`
          .container {
            width: 70%;
            display: block;
          }
        `}
      </style>
    </>
  );
}

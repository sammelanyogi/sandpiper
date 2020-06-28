import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Type(props) {
  const router = useRouter();
  const { type } = router.query;
  return (
    <Layout title={`Upload ${type}`}>
        {type=="video" && <div>Video ko component</div>}
        {type=="audio" && <div>Audio ko component</div>}
        {type=="text" && <div>text ko component</div>}
    </Layout>
  );
}

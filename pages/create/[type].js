import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import BSSMUpload, {BSSMText} from "../../components/BSSMUpload";
import Sidebar from "../../components/creator/SideBar"
import axios from "axios"

export default function Type(props) {
  const router = useRouter();
  const { type } = router.query;

  let [uploadProgress, setUploadProgress] = useState(0);

  function sendVideoToServer(form){
  	sendToServer(form, 'http://bssm.nirav.codes/uploadvideo')
  }
  function sendVideoToServer(form){
  	sendToServer(form, 'http://bssm.nirav.codes/uploadaudio')
  }

  function sendToServer(form, url){
     axios({
          method: 'post',
          url: url,
          data: form,
          headers: {'Content-Type': 'multipart/form-data' },
          onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setUploadProgress(percentCompleted)
          }
      })
      .then(function (response) {
          alert("upload done. Now upload another.")
          console.log(response);
      })
      .catch(function (response) {
          alert("I'm sorry, file didn't upload. I thought I'd save some bucks by using a server in East US but turns out: it has a lot of latency. :( But it could also be a problem of the DNS thing. I bought the domain name from a really shady dealer :3 If you're having real trouble, I'll move the server to Central India, and switch to a better DNS provider")
          console.log(response);
      });
  }

  return (
        <>
    <Layout title={`Upload ${type}`}>
      <div className="container mx-auto">
          <div className="row">
              <div className="col-4">
                  <Sidebar value={1} getValue={x => console.log(x)} />
              </div>
			        {type=="video" && 
			          <div className="col-8">
				          <h2>Video</h2>
                  <BSSMUpload onSubmit={sendVideoToServer} progress ={uploadProgress}/>
			          </div>
				      }
			        {type=="audio" && 
			          <div className="col-8">
				          <h2>Audio</h2>
	                <BSSMAudio onSubmit={sendAudioToServer} progress ={uploadProgress}/>
			          </div>
				      }
			        {type=="text" && 
			          <div className="col-8">
				          <h2>Text</h2>
				          	Not Implemented
			          </div>
				      }
              </div>
          </div>
    </Layout>
      <style jsx>
          {`
              .container{
                  width:90%;
                  display:block;
                  margin-top:30px;
              }
          `}
      </style>
    </>
  );
}

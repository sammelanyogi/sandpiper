import { useEffect, useState } from "react"
import Layout from "../components/Layout";
import BSSMUpload from "../components/BSSMUpload";
import Sidebar from "../components/creator/SideBar"
import axios from "axios"

export default function Forum() {
    let [curpage, setCurpage] = useState("video")
    let [uploadProgress, setUploadProgress] = useState(0);

    function sendVideoToServer(form){
       axios.post("", ) 
       axios({
            method: 'post',
            url: 'http://bssm.nirav.codes/uploadvideo',
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
            alert("I'm sorry, file didn't upload. I thought I'd save some bucks by using a server in East US but turns out: it has a lot of latency. :(But it could also be a problem of the DNS thing. I bought the domain name from a really shady dealer :3 If you're having real trouble, I'll move the server to Central India, and switch to a better DNS provider")
            console.log(response);
        });
    }

    return (
        <>
            <Layout title="Forum">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-4">
                            <Sidebar value={1} getValue={x => console.log(x)} />
                        </div>
                        <div className="col-8">
                            {curpage === "video" &&
                                <BSSMUpload onSubmit={sendVideoToServer} progress ={uploadProgress}/>
                            }
                        </div>
                    </div>
                </div>
            </Layout >
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

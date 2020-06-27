import { useEffect, useState } from "react"
import Layout from "../components/Layout";
import BSSMUpload from "../components/BSSMUpload";
import Sidebar from "../components/creator/SideBar"
import axios from "axios"

export default function Forum() {
    let [curpage, setCurpage] = useState("video")
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
                                <BSSMUpload />
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

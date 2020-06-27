import { useState } from "react"
import Upload from "./upload"
import UploadProgress from "./uploadprogress"
import Input from "./input"
export default function BSSMUpload({ onSubmit:onFormSubmit, progress}) {
    let [file, setFile] = useState(null);
    let title;
    let topic;
    let desc;
    function onSubmit(e) {
        e.preventDefault();
        let data = { title: title.value, topic:topic.value, description:desc.value}
        if (file===null) return alert("khai video haleko?");
        let form = new FormData;
        form.append('video', file);
        form.append('data', JSON.stringify(data));
        onFormSubmit(form);
    }
    function onUpload(file) {
        setFile(file);
    }
    return (
        <div >
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col">
                        <Input ref={n => title = n} describe="Title" placeholder="Descriptive title here" />
                    </div>
                    <div className="col">
                        <Input ref={n => topic = n} describe="Topic" placeholder="Topic for your BSSM" />
                    </div>
                </div>
                <Input describe="Description" ref={n => desc = n} />
                <Upload onUpload={onUpload} />
                <UploadProgress progress={progress}/>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

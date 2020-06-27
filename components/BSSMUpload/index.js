import Upload from "./upload"
import Input from "./input"
export default function BSSMUpload({ className }) {
    return (
        <div >
            <form onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="col">
                        <Input describe="Title" placeholder="Descriptive title here" />
                    </div>
                    <div className="col">
                        <Input describe="Topic" placeholder="Topic for your BSSM" />
                    </div>
                </div>

                <Upload />
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

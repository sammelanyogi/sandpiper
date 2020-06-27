export default function Upload({ onUpload }) {
    function upload(e) {
        onUpload(e.target.files[0]);
    }
    return (
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload Video
                    </span>
                </div>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={upload}
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
                    </label>
                </div>
            </div>
            <style jsx>{`
                .input-group{
                    margin-bottom:10px
                } 
            `}</style>
        </>
    );
}
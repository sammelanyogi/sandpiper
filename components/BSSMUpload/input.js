export default function Input({ describe = "", type = 'text', placeholder = "", smallText }) {
    return (
        <div className="form-group">
            <label >{describe}</label>
            <input type={type} className="form-control" placeholder={"" + placeholder} />

            {!!smallText &&
                <small className="form-text text-muted">{smallText}</small>
            }
        </div>
    )
}
import {forwardRef} from "react"
export default forwardRef(
	function Input({ describe = "", type = 'text', placeholder = "", smallText }, ref) {
    return (
        <div className="form-group">
            <label >{describe}</label>
            <input ref={ref} type={type} className="form-control" placeholder={"" + placeholder} />

            {!!smallText &&
                <small className="form-text text-muted">{smallText}</small>
            }
        </div>
    )
})
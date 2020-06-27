export default function Input({ describe = "", type = 'text', placeholder = "", smallText }) {
    return (
        <div class="form-group">
            <label for="exampleInputEmail1">{describe}</label>
            <input type={type} class="form-control" placeholder={placeholder} />

            {!!smallText &&
                <small class="form-text text-muted">{smallText}</small>
            }
        </div>
    )
}
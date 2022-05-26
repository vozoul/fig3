const AddServerForm = (props) => {

    const submit = () => {
        props.close()
    };

    return (
        <form className="" onSubmit={submit}>
            <h3>Add Server</h3>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
            </div><div>
                <label htmlFor="host">Host</label>
                <input id="host" name="host" type="text" />
            </div><div>
                <label htmlFor="port">Port</label>
                <input id="port" name="port" type="text" />
            </div>
            <div style={{float: "right"}}>
                <button onClick={submit}>Submit</button>
            </div>
        </form>
    )
}

export default AddServerForm
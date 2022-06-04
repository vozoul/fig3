import { useContext } from 'react'
import { AppContext } from 'services/contexts/AppContext';
import "./AddServerForm.css"

const AddServerForm = () => {

    const { toggleModal } = useContext(AppContext)

    const submit = (e) => {
        e.preventDefault()
        console.log('submitted')
        toggleModal()
    };

    return (
        <form className="" onSubmit={submit}>
            <h3>Ajouter un serveur</h3>
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
            <div style={{ float: "right" }}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AddServerForm
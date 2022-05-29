import {useContext} from 'react'
import { AppContext } from 'services/contexts/AppContext';
import "./ContactForm.css"

const ContactForm = () => {

    const {toggleModal} = useContext(AppContext)

    const submit = (e) => {
        e.preventDefault()
        console.log('submitted')
        toggleModal()
    };

    return (
        <form className="" onSubmit={submit}>
            <h3>Nous Contacter</h3>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
            </div><div>
                <label htmlFor="host">Object</label>
                <input id="host" name="host" type="text" />
            </div><div>
                <label htmlFor="port">Message</label>
                <textarea id="port" name="port">
                    
                </textarea>
            </div>
            <div style={{float: "right"}}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm
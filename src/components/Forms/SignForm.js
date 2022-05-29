import {useState, useContext} from 'react'
import { AppContext } from 'services/contexts/AppContext';
import {SwitchButton} from 'components'
import "./SignForm.css"

const SignForm = () => {

    const {toggleModal} = useContext(AppContext)

    const [signIn, setSignIn] = useState(false)
    const toggleSign = () => setSignIn(!signIn)

    const submit = (e) => {
        e.preventDefault()
        console.log('submitted')
        toggleModal()
    };

    return (
        <form className="" onSubmit={submit}>
            <h3>{(signIn)? "Connection" : "Inscription"}</h3>
            <hr />
            <div className='on-off-choice'>
                <div>Inscription  {"<---"}</div>
                <SwitchButton id="sign" action={toggleSign} />
                <div>{"--->"} Connection</div>
            </div>
            <hr />
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            {(!signIn) && <div>
                <div>
                    <label htmlFor="conf-password">Confirm Password</label>
                    <input id="conf-password" name="conf-password" type="password" />
                </div>
                <div>
                    <label htmlFor="host">email</label>
                    <input id="host" name="host" type="text" />
                </div>
                <div>
                    <label htmlFor="port">Description</label>
                    <textarea id="port" name="port">
                        
                    </textarea>
                </div>
            </div>
            }
            <div style={{float: "right"}}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SignForm
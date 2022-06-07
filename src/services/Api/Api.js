import Config from '../config/config'

const Call = ({...params}) => {
    const {endpoint, method, token} = params

    const init = {}
    const url = Config.apiUrl + endpoint

    if (token !== undefined || token !== null) {
        
    }


    if (method === get) {
        init = {
            method: "get",
        }
    }

    return fetch(url, init)
}

export default Call
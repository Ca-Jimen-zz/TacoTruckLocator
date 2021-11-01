import axios from 'axios'

const getLocations = () => {

    const config = {
        method: 'GET',
        url: 'https://my.api.mockaroo.com/locations.json?key=a45f1200',
        crossdomain: true,
        headers: {'Content-Type': 'application/json'}
    }
    return axios(config)
}

export {getLocations};
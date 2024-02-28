const BASE_URL = '/data/'

export async function getData(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

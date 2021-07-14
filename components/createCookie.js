import Cookies from 'cookies'

export default function CreateCooki(token, res, req){

    const cookies = new Cookies(req, res)

    const options = {
        //secure: true,
        httpOnly: true,
        //domain: 'example.com',
        //path: 'foo/bar'
    }

    return cookies.set('myCookieNameRR', 'some-value', options)
}


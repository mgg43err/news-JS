class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }
    //baselink:string
    //options:object
    getResp(
        { endpoint, options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }
    errorHandler(res) {
        //res: object
        if (!res.ok /*boolean */) {
            if (res.status === 401 || res.status === 404 /* res.status number */)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText); //string
        }
        console.log(typeof res.statusText);
        return res;
    }
    makeUrl(options, endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        console.log(typeof this.options, 'typeof options');
        console.log(typeof endpoint, 'endpont');
        return url.slice(0, -1);
    }
    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;

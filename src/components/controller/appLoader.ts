import Loader from './loader.js';

class AppLoader extends Loader {
    constructor() {
        super(
            'https://newsapi.org/v2/',
            /*baseLink */ {
                apiKey: '363caa21afad47d5945bfab1594b6c2e', // получите свой ключ https://newsapi.org/
            } /*options*/
        );
    }
}

export default AppLoader;

import Loaderjs from './loader.js';

class Loader { 
  baseLink: string;
  options: object;
  load: any;
   constructor(b:string, o:object) {
        this.baseLink = b;
        this.options = o;
   }
  /*  getResp(
        { endpoint, options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    } */
}


class AppLoader extends Loaderjs {
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

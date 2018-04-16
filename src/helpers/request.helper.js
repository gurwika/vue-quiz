import Vue from 'vue';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';

Vue.use(VueResource);
Vue.use(VueCookie);

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

class RestResource {
    getData(key){
        return this.props[key];
    }
    setData(value,key){
        Vue.cookie.set(key, value, { expires: '1Y' });
        this.props[key] = value.toString();
    }
    doGetRequest(reqestAction) {
        return Vue.http.get(window['U'] + reqestAction, {
            headers: {
                'REGISTRANT-ID': this.getData("REGISTRANT-ID"),
                'APP-TOKEN': this.getData("APP-TOKEN")
            }
        });
    }
    doPostRequest(reqestAction, reqestData) {
        return Vue.http.post(window['U'] + reqestAction, reqestData,{
            headers: {
                'REGISTRANT-ID': this.getData("REGISTRANT-ID"),
                'APP-TOKEN': this.getData("APP-TOKEN")
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

export default new RestResource();
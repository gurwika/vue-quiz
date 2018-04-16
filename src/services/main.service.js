import RequestHelper from '../helpers/request.helper';

class MainService {
    initQuiz() {
        RequestHelper.props = {};

        return RequestHelper.doGetRequest("main")
            .then( (data) => {
                if(data.ok){
                    RequestHelper.setData(data.body.token, "APP-TOKEN");

                    return data.body.result;
                }

                return []
            });
    }
    getQuestions() {
        return RequestHelper.doGetRequest("questions")
            .then( (data) => {
                if(data.ok){
                    return data.body.result;
                }

                return []
            });
    }
    registerUser(requestData) {
        return RequestHelper.doPostRequest("registrants", requestData)
            .then( (data) => {
                if(data.ok){
                    RequestHelper.setData(data.body.registrantId, "REGISTRANT-ID");

                    return data.body;
                }
                return { result: false }
            });
    }
    showResut(quota) {
        return RequestHelper.doPostRequest("result", quota)
            .then( (data) => {
                if(data.ok){
                    return data.body;
                }
                return { result: false }
            });
    }
}

export default new MainService();
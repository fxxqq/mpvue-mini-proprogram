import axios from 'axios'
import config from './config'

// axios(config);
class API {
    //get
    get(param) {
        config.data.strSQL = param.param;
        return axios.post(param.api, {}, config);
    };
    //post
    post(param) {
        config.data.strSQL = param.param;
        return axios.post(param.api, {}, config);
    };
    // 请求成功
    reqSuccess(obj, msg) {
        obj.$message({
            message: msg,
            type: 'success'
        });
    };
    // 请求失败
    reqFail(obj, msg) {
        obj.$message({
            message: msg,
            type: 'success'
        });
    }
}
export default API;
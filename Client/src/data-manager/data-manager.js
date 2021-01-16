import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';

export default class DataManager {
  static get_test() {
    return axios.get('test');
  }
}

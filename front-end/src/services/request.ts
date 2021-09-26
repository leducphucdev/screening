import Axios from 'axios';

const { REACT_APP_API_ENDPOINT } = process.env;

export default class RequestService {
  getURL(subURL: string) {
    return `${REACT_APP_API_ENDPOINT}/${subURL}`;
  }

  getConfigs() {
    return {
      headers: {},
    };
  }

  async put(subURL: string, payload = {}) {
    return Axios.put(this.getURL(subURL), payload, this.getConfigs())
      .then(res => {
        return res.data;
      })
      .catch(err => {
        // throw new RequestError(err);
      });
  }
}

import Axios from 'axios';

const { REACT_APP_API_ENDPOINT } = process.env;

class ErrorApi {
  public error: number = 1;
  public message: string = 'Incident occurred. Please try again!';

  constructor(error: any) {
    if (error.response.status === 400) {
      const data = error.response.data;
      this.setError(data.error);
      this.setMessage(data.message);
    }
  }

  setError(error: number) {
    this.error = error;
  }
  
  setMessage(message: string) {
    this.message = message;
  }
}

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
      .catch(error => {
        return new ErrorApi(error);
      });
  }
}

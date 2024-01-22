/**
 * helper.js - for storing reusable logic.
 */
import NetInfo from '@react-native-community/netinfo';
import Axios from 'axios';

import ResponseCode from './ResponseCode';
import {Constants} from '../constants/Constants';

export const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const TIMEOUT = 30 * 1000; // 30 seconds

const axiosInit = Axios.create({
  baseURL: Constants.DOMAIN,
  timeout: Constants.TIME_OUT,
});

const {CancelToken} = Axios;

class ApiClient {
  // Map lưu lại những request cần cancel trước khi thực hiện request mới
  mapRequestCancel = new Map();

  static instance;

  constructor(_instance) {
    if (ApiClient.instance) {
      return ApiClient.instance;
    }
    ApiClient.instance = _instance;
  }

  /**
   *
   * @param url Đường dẫn API muốn cancel
   */
  cancelCallApi(url) {
    if (this.mapRequestCancel.has(url)) {
      const canceler = this.mapRequestCancel.get(url);
      canceler && canceler();
      this.mapRequestCancel.delete(url);
    }
  }

  /**
   * Main method used to fetch data from service
   * @param method
   * @param url
   * @param params
   * @param isShowLoading
   * @param ignoreURLBase
   *        true nếu đường link không cộng BASE_URL ở đầu, false ngược lại
   * @param ignoreHandleCommonError
   *        true nếu muốn request bỏ qua logic xử lý các mã lỗi chung như 401, 504, ...
   * @returns
   */

  async request({
    method,
    url,
    params,
    isShowLoading = true,
    ignoreURLBase = false,
    ignoreHandleCommonError = true,
  }) {
    // Checking network connectivity before call API
    const netWorkState = await NetInfo.fetch();
    if (!netWorkState.isConnected) {
      const response = {
        data: {},
      };
      response.status = ResponseCode.NOT_INTERNET;
      return response;
    }

    const requestInterceptor = Axios.interceptors.request.use(
      async config => {
        const configTemp = config;
        configTemp.cancelToken = new CancelToken(cancel => {
          this.mapRequestCancel.set(url, cancel);
        });
        return configTemp;
      },
      err => Promise.reject(err),
    );

    const responseInterceptor = Axios.interceptors.response.use(
      response => {
        if (response.status) {
          if (
            response.status === ResponseCode.SUCCESS ||
            ResponseCode.CREATE_SUCCESS
          ) {
            return response;
          }
          return Promise.reject(response.status);
        }
        return Promise.reject();
      },
      error => {
        if (error.response.status === ResponseCode.UNAUTHORIZED) {
        }
        return Promise.reject(error);
      },
    );

    const urlRequest = ignoreURLBase ? url : Constants.DOMAIN + url;

    console.log(`=======> REQUEST || ${urlRequest} : \n`, params);

    let request;
    if (method === RequestMethod.POST) {
      request = Axios.post(urlRequest, params);
    } else if (method === RequestMethod.PUT) {
      request = Axios.put(urlRequest, params);
    } else if (method === RequestMethod.DELETE) {
      request = Axios.delete(urlRequest, params);
    } else {
      request = Axios.get(urlRequest, {params});
    }
    return Promise.race([
      request,
      new Promise((resolve, reject) => {
        setTimeout(() => {}, TIMEOUT);
      }),
    ])
      .then(res => {
        console.log(`=======> RESPONSE || ${urlRequest} `, res.data);
        const response = {
          data: {},
        };
        response.status = res.status;
        response.data = res.data.data ?? res.data;
        return response;
      })
      .catch(error => {
        console.log(`=======> ERROR || ${urlRequest} `, error.response);
        const response = {
          data: {},
        };
        response.status =
          error?.response?.status ?? ResponseCode.INTERNAL_SERVER_ERROR;
        response.message = error.response.data.message;
        response.error = error.response.error;
        if (
          ignoreHandleCommonError &&
          response.status === ResponseCode.UNAUTHORIZED
        ) {
          response.message = '';
        }

        if (!ignoreHandleCommonError) {
          switch (response.status) {
            case ResponseCode.GATEWAY_TIME_OUT:
              response.message = '';
              break;
            case ResponseCode.UNAUTHORIZED: // Đã có dialog thông báo 401 ở trên
              response.message = '';
              break;
            default:
              break;
          }
        }
        return response;
      })
      .finally(() => {
        Axios.interceptors.request.eject(requestInterceptor);
        Axios.interceptors.response.eject(responseInterceptor);
      });
  }
}

const Api = new ApiClient(axiosInit);
export default Api;

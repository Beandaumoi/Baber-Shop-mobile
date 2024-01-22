import Api, {RequestMethod} from './ApiManager';

export const AuthApis = {
  login: 'v1/auth/customer/login',
  signUp: 'v1/auth/customer/signup',
  check: 'v1/auth/customer/check',
  categories: 'v1/servicetypes?per_page=20&search=&page=1',
};

class AuthenticationApi {
  check(params) {
    const url = AuthApis.check;
    return Api.request({method: RequestMethod.POST, url, params});
  }
  login(params) {
    const url = AuthApis.login;
    return Api.request({method: RequestMethod.POST, url, params});
  }
  signUp(params) {
    const url = AuthApis.signUp;
    return Api.request({method: RequestMethod.POST, url, params});
  }
  categories(params) {
    const url = AuthApis.categories;
    return Api.request({method: RequestMethod.GET, url, params});
  }
}

export default new AuthenticationApi();

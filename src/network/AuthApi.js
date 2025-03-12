import Api, {RequestMethod} from './ApiManager';

export const AuthApis = {
  login: 'v1/auth/customer/login',
  signUp: 'v1/auth/customer/signup',
  check: 'v1/auth/customer/check',
  categories: 'v1/servicetypes?per_page=20&search=&page=1',
  hairCut: 'v1/merchants/detail',
  salons:
    'v1/merchants/merchants-nearby?per_page=20&page=1&lat=21.056987&long=105.883845',
  booking: 'v1/bookings/create',
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
  booking(params) {
    const url = AuthApis.booking;
    return Api.request({method: RequestMethod.POST, url, params});
  }
  categories(params) {
    const url = AuthApis.categories;
    return Api.request({method: RequestMethod.GET, url, params});
  }
  salons(params) {
    const url = AuthApis.salons;
    return Api.request({method: RequestMethod.GET, url, params});
  }
  hairCut(params) {
    const url = AuthApis.hairCut;
    return Api.request({method: RequestMethod.GET, url, params});
  }
}

export default new AuthenticationApi();

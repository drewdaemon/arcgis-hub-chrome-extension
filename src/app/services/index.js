import AuthService from './auth-service';
import Intl from './intl';

class ServiceFactory {
  static get auth() {
    if (!this._auth) {
      this._auth = new AuthService();
    }
    return this._auth;
  }

  static get intl() {
    if (!this._intl) {
      this._intl = new Intl();
    }
    return this._intl;
  }

  static get itemService() {
    if (!this._intl) {
      this._itemService = new Intl();
    }
    return this._intl;
  }
}

export default ServiceFactory;
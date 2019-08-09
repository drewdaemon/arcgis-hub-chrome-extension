import AuthService from './auth-service';
import Intl from './intl';
import ItemService from './item-service';

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
    if (!this._itemsService) {
      this._itemService = new ItemService();
    }
    return this._itemService;
  }
}

export default ServiceFactory;
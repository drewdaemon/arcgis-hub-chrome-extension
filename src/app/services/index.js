import AuthService from './auth-service';
import Intl from './intl';
import ItemService from './item-service';
import SandboxService from './sandbox-service';

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
    if (!this._itemService) {
      this._itemService = new ItemService();
    }
    return this._itemService;
  }

  static get sandboxService() {
    if (!this._sandboxService) {
      this._sandboxService = new SandboxService();
    }
    return this._sandboxService;
  }
}

export default ServiceFactory;
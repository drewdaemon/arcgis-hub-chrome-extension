import ClientOAuth2 from 'client-oauth2';
import { UserSession } from '@esri/arcgis-rest-auth';
import Env from '@app/env';

class AuthService {

  constructor() {
    this.esriAuth = new ClientOAuth2({
      clientId: 'wLynoMNBKOjRSzg2',
      accessTokenUri: `${Env.portalBase}/sharing/rest/portals/self`,
      authorizationUri: `${Env.portalBase}/sharing/oauth2/authorize`,
      redirectUri: chrome.identity.getRedirectURL()
    });
  }

  isAuthenticated() {
    return new Promise(resolve => {
      chrome.storage.sync.get(['grantUrl'], res => {
        if (!res.grantUrl) {
          resolve(null);
          return;
        }
        this.esriAuth.token.getToken(res.grantUrl)
          .then(user => {
            this.session = new UserSession({
              username: user.data.username,
              token: user.accessToken,
              tokenExpires: user.expires,
              clientId: this.esriAuth.options.clientId
            });
            return this.session;
          })
          .then(resolve);
      });
    })
  }

  authenticate() {
    return new Promise(resolve => {
      chrome.runtime.sendMessage({
        type: 'login',
        uri: this.esriAuth.token.getUri()
      });
    })
  }
}

export default AuthService;
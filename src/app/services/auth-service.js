import ClientOAuth2 from 'client-oauth2';

class AuthService {

  constructor() {
    this.esriAuth = new ClientOAuth2({
      clientId: 'wLynoMNBKOjRSzg2',
      clientSecret: 'd95dd2dc88d74ae1bbd86bce44083f3f',
      accessTokenUri: 'https://www.arcgis.com/sharing/rest/portals/self',
      authorizationUri: 'https://www.arcgis.com/sharing/oauth2/authorize',
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
          .then(user => this.user = user)
          .then(_ => resolve(this.user));
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
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

  authenticate() {
    return new Promise(resolve => {
      chrome.identity.launchWebAuthFlow({
        url: this.esriAuth.token.getUri(),
        interactive: true
      }, async resUri => {
        alert(resUri);
        this.user = await this.esriAuth.token.getToken(resUri);
        resolve();
      });
    });
  }
}

export default AuthService;
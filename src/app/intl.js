import Pocket from 'pocket-i18n';
import translations from './translations.json';

class Intl {

  init() {
    const translator = Pocket.load(translations);
    this.t = translator.t;
  }

}

export default new Intl();
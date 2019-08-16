import Factory from '.';
import Env from '@app/env';

class ItemService {

  searchSiteItems(q) {
    return Factory.sandboxService.sendCommand(
      'searchItems', {q: `${q} AND (typekeywords:hubSite)`, portal: `${Env.portalBase}/sharing/rest`});
  }

}

export default ItemService;
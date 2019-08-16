import Factory from '.';

class ItemService {

  searchSiteItems(q) {
    return Factory.sandboxService.sendCommand(
      'searchItems', {q});
  }

}

export default ItemService;
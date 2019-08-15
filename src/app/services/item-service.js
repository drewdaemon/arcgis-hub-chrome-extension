import Factory from '.';

class ItemService {

  getSiteItems(q) {
    return Factory.sandboxService.sendCommand(
      'searchItems', {q});
  }

}

export default ItemService;
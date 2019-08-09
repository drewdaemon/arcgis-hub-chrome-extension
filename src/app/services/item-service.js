import { searchItems } from "@esri/arcgis-rest-portal";
import Factory from '.';

class ItemService {

  getSiteItems(q) {
    searchItems({q, authentication: Factory.auth.session})
      .then(console.log);
  }

}

export default ItemService;
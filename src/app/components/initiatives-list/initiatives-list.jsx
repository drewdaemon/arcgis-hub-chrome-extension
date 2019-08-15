import { h, Component } from 'preact'
import Factory from '../../services';

class InitiativesList extends Component {

  constructor () {
    super();
    this.getSiteItems = this.getSiteItems.bind(this);
  }

  getSiteItems(query) {
    Factory.itemService.getSiteItems(query)
        .then(console.log);
  }

  componentDidMount() {
  }

  render(props, state) {
    return <h1>logged in</h1>
  }
}

export default InitiativesList

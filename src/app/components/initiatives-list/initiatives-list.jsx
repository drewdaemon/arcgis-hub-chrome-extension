import { h, Component } from 'preact'
import Factory from '../../services';

class InitiativesList extends Component {

  componentDidMount() {
    Factory.itemService.getSiteItems('tate');
  }

  render(props, state) {
    return <h1>logged in</h1>
  }
}

export default InitiativesList

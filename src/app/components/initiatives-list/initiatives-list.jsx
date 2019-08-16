import { h, Component } from 'preact'
import Factory from '../../services';

class InitiativesList extends Component {

  constructor () {
    super();
    this.searchSiteItems = this.searchSiteItems.bind(this);
  }

  searchSiteItems(query) {
    return Factory.itemService.searchSiteItems(query)
        .then(resultsObj => {
          this.setState({resultsObj});
        });
  }

  comp() {
    this.searchSiteItems('*');
  }

  render(props, state) {
    return (
      <div>
        <h1 onclick={() => this.searchSiteItems('tate')}>logged in</h1>
        <ul>
          {this.state.resultsObj && this.state.resultsObj.results.map(item => <li>{item.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default InitiativesList

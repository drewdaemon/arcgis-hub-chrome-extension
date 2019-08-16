import { h, Component } from 'preact';
import Factory from '../../services';
import SiteListing from './site-listing/site-listing';

class InitiativesList extends Component {

  constructor () {
    super();
    this.state = { searchStr: '' };
    this.searchSiteItems = this.searchSiteItems.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  componentDidMount() {
    this.searchField.focus();
  }

  searchSiteItems(query) {
    return Factory.itemService.searchSiteItems(query)
        .then(resultsObj => {
          this.setState({resultsObj});
        });
  }

  onInput(e) {
    const { value } = e.target;
    this.setState({searchStr: value});
    return this.searchSiteItems(value);
  }

  render(props, { searchStr }) {
    return (
      <div>
        <h1>Hub Sites</h1>
        <input type='text' placeholder='Search'
          ref={input => this.searchField = input} value={searchStr} onInput={this.onInput}></input>
          {this.state.resultsObj &&
            this.state.resultsObj.results.map(item => <SiteListing site={item} />)}
      </div>
    );
  }
}

export default InitiativesList

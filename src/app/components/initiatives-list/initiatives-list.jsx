import { h, Component } from 'preact'
import Factory from '../../services';

class InitiativesList extends Component {

  constructor () {
    super();
    this.state = { searchStr: '' };
    this.searchSiteItems = this.searchSiteItems.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  searchSiteItems(query) {
    return Factory.itemService.searchSiteItems(query)
        .then(resultsObj => {
          this.setState({resultsObj});
        });
  }

  componentDidMount() {
    this.searchField.focus();
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
        <input ref={input => this.searchField = input} value={searchStr} onInput={this.onInput}></input>
        <ul>
          {this.state.resultsObj &&
            this.state.resultsObj.results.map(item => <li>{item.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default InitiativesList

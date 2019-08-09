import { h, Component } from 'preact';
import './app.scss';

import InitiativesList from './components/initiatives-list/initiatives-list';
import Login from './components/login/login';
import Loader from './components/loader/loader';
import Factory from './services';

class App extends Component {
  constructor() {
    super()
    this.setLoading = this.setLoading.bind(this);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const session = await Factory.auth.isAuthenticated();
    if (!session) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
    this.setLoading(false);
  }

  setLoading(loading) {
    this.setState({ loading: loading });
  }

  render(props, state) {
    return (
      <div class='app-container'>
        {state.loading && <Loader />}
        {state.loggedIn ? (
          <InitiativesList />
        ) : (
          <Login
            setLoading={this.setLoading}
            onLogin={() => this.setState({ loggedIn: true })} />
        )}
      </div>
    );
  }
}

export default App;

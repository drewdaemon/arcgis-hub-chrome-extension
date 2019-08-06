import { h, render, Component } from 'preact';
import './app.scss';

import InitiativesList from './components/initiatives-list/initiatives-list';
import Login from './components/login/login';
import Loader from './components/loader/loader';
import Factory from './services';

class App extends Component {
    constructor() {
        super();
        this.state.loading = true;
    }

   async componentDidMount() {
        const user = await Factory.auth.isAuthenticated();
        if (!user) {
            this.setState({loggedIn: false});
        } else {
            this.setState({loggedIn: true});
        }
    }

    setLoading(loading) {
        this.setState({loading: loading});
    }

    render(props, state) {
        return (
            <div class="app-container">
                {state.loggedIn ? (
                    <InitiativesList />
                ) : (
                    <Login
                        setLoading={this.setLoading.bind(this)}
                        onLogin={() => this.setState({loggedIn: true})} />
                )}
                {state.loading && <Loader />}
            </div>
        )
    }
}

export default App;
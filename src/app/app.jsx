import { h, render, Component } from 'preact';
import './app.scss';

import InitiativesList from './components/initiatives-list/initiatives-list';
import Login from './components/login/login';
import Loader from './components/loader/loader';

class App extends Component {
    constructor() {
        super();
        this.state.loggedIn = false; // TODO check
        this.state.loading = true;
    }

    setLoading(loading) {
        this.setState({loading: loading});
    }

    render(props, state) {
        return (
            <div class="app-container">
                {state.isLoggedIn ? (
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
import { h, render, Component } from 'preact';
import './app.scss';

import InitiativesList from './components/initiatives-list/initiatives-list';
import Login from './components/login/login';

class App extends Component {
    constructor() {
        super();
        this.state.loggedIn = false; // TODO check
        this.state.loading = true;
    }

    render(props, state) {
        return (
            <div class="app-container">
                {state.loading &&
                    (<div class="loader is-active padding-leader-3 padding-trailer-3">
                        <div class="loader-bars"></div>
                        <div class="loader-text">Loading...</div>
                    </div>)
                }
                {state.isLoggedIn ? (
                    <InitiativesList />
                ) : (
                    <Login
                        hideLoader={() => this.setState({loading: false})}
                        onLogin={() => this.setState({loggedIn: true})} />
                )}
            </div>
        )
    }
}

export default App;
import { h, render, Component } from 'preact';
import InitiativesList from './components/initiatives-list';
import Login from './components/login';

class App extends Component {
    constructor() {
        super();
        this.state.loggedIn = false; // TODO check
    }

    onLogin() {
        this.setState({loggedIn: true});
    }

    render(props, state) {
        return state.loggedIn ? <InitiativesList /> : <Login onLogin={this.onLogin.bind(this)} />
    }
}

export default App;
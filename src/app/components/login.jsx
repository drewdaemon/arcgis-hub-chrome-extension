import { h, render, Component } from 'preact';

class Login extends Component {
    render(props, state) {
        return (
          <div>
            <h1>logged out</h1>
            <button onclick={props.onLogin}></button>
          </div>
        );
    }
}

export default Login;
import { h, render, Component } from 'preact';
import './login.scss';

class Login extends Component {

  componentDidMount() {
    this.props.hideLoader();
  }

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
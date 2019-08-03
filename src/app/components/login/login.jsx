import { h, render, Component } from 'preact';
import './login.scss';

class Login extends Component {

  componentDidMount() {
    this.props.hideLoader();
  }

  render(props, state) {
      return (
        <div>
          <h1 class="font-size-5 avenir-regular">ArcGIS Hub Admin Extension</h1>
          <p class="font-size-1">Sign in to get started.</p>
          <button class="btn btn-fill" onclick={props.onLogin}>Sign In</button>
        </div>
      );
  }
}

export default Login;
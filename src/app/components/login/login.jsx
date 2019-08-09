import { h, Component } from 'preact';
import './login.scss';
import Factory from '../../services';

class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.props.setLoading(false);
  }

  async login() {
    this.props.setLoading(true);
    this.user = await Factory.auth.authenticate();
    this.props.setLoading(false);
    this.props.onLogin();
  }

  render(props, state) {
    return (
      <div>
        <h1 class='font-size-5 avenir-regular'>ArcGIS Hub Admin Extension</h1>
        <p class='font-size-1'>Sign in to get started.</p>
        <button class='btn btn-fill' onclick={this.login}>Sign In</button>
      </div>
    );
  }
}

export default Login;

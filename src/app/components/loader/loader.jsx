import { h } from 'preact';
import './loader.scss';

const Loader = ({children, fullScreen}) => (
	<div class={'loader is-active padding-leader-3 padding-trailer-3 ' +
		(fullScreen ? 'full-screen-loader' : '')}>
		<div class='loader-bars' />
		<div class='loader-text'>Loading...</div>
	</div>
);

export default Loader;

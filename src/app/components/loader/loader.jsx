import { h } from 'preact';
import './loader.scss';

const Loader = () => (
	<div class="loader is-active padding-leader-3 padding-trailer-3">
		<div class="loader-bars" />
		<div class="loader-text">Loading...</div>
	</div>
);

export default Loader;

import { h } from 'preact';
import './site-listing.scss';

const SiteListing = ({children, site, selected}) => {
  return (
    <div class={'result-item' + (selected ? ' selected' : '')} >
      <div class='body-container'>
          <div class='body-title'>
            <a href={site.url} target='_blank'>{site.title}</a>
          </div>
          <div class='body-subtitle'>
            {site.owner} | Created: {new Date(site.created).toISOString().slice(0, 10)}
          </div>
      </div>
    </div>
  );
};

export default SiteListing;
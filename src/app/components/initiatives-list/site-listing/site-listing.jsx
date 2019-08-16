import { h } from 'preact';

const SiteListing = ({children, site}) => {
  return (
    <div>
      <a href={site.url} target='_blank'>{site.title}</a>
    </div>
  );
};

export default SiteListing;
import PropTypes from 'prop-types';

const GiffGridItem = ({ title, url }) => {
  return (
    <div className="col-md-auto">
      <div className="card p-2 m-2">
        <img
          src={url}
          className="rounded img-fluid"
          alt={title}
          style={{ height: 200 }}
        ></img>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

GiffGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiffGridItem;

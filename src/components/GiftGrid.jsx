import PropTypes from 'prop-types';

import useFetchGifts from '../hooks/useFetchGifts';
import GiffGridItem from './GiffGridItem';

const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <div className="container">
        <div className="container mt-5 ">
          {isLoading && <p>cargando...</p>}
          <h2>{category}</h2>
          <div className="row row-cols-lg-3 row-cols-xs-1">
            {images.map((image) => (
              <GiffGridItem {...image} key={image.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GiftGrid;

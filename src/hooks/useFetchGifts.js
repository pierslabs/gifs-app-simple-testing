import { useEffect, useState } from 'react';
import { getGiffs } from '../helpers/getGiffs';
import PropTypes from 'prop-types';

const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getImges = async () => {
    const newImages = await getGiffs(category);
    setImages(newImages);
    setIsloading(false);
  };

  useEffect(() => {
    getImges();
  }, [category]);

  return {
    images,
    isLoading,
  };
};

useFetchGifts.propTypes = {
  category: PropTypes.string.isRequired,
};

export default useFetchGifts;

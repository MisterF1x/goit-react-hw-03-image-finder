import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ImgGallery>
      {items.map(img => (
        <ImageGalleryItem key={img.id} image={img} onClick={onClick} />
      ))}
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

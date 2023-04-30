import { Img, ImgItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <ImgItem onClick={() => onClick(largeImageURL, tags)}>
      <Img
        src={webformatURL}
        alt={tags}
        loading="lazy"
        width={480}
        height={260}
      ></Img>
    </ImgItem>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

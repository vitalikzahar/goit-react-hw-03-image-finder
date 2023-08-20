import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallary } from './ImageGallery.styled';

export const ImageGallery = ({ cards }) => {
  return (
    <Gallary>
      {cards.map(card => (
        <ImageGalleryItem
          key={card.id}
          webImg={card.webformatURL}
          largeImg={card.largeImageURL}
        ></ImageGalleryItem>
      ))}
    </Gallary>
  );
};

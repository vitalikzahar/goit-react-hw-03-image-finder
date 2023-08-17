import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ cards }) => {
  return (
    <ul>
      {cards.map(card => (
        <ImageGalleryItem
          key={card.id}
          webImg={card.webformatURL}
          largeImg={card.largeUmageURL}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

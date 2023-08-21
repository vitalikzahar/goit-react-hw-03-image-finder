import { Component } from 'react';

import { Img, Items } from './ImageGalleryItem.styled';
import { Modals } from 'components/Modals/Modals';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  togleModal = () =>
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  render() {
    const { webImg, largeImg } = this.props;

    return (
      <Items>
        <Img onClick={this.togleModal} src={webImg} alt="smalImg" />
        <Modals
          isOpen={this.state.isModalOpen}
          openModal={this.togleModal}
          closeModal={this.togleModal}
          largeImg={largeImg}
        ></Modals>
      </Items>
    );
  }
}

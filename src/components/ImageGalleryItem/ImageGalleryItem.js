import { Component } from 'react';

import { Img, Items } from './ImageGalleryItem.styled';
import { Modals } from 'components/Modals/Modals';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webImg, largeImg } = this.props;

    return (
      <Items>
        <Img onClick={this.openModal} src={webImg} alt="smalImg" />
        <Modals
          isOpen={this.state.isModalOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          largeImg={largeImg}
        ></Modals>
      </Items>
    );
  }
}

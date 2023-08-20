import Modal from 'react-modal';
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export const Modals = ({ isOpen, openModal, closeModal, largeImg }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <div>
          <img src={largeImg} alt="bigPhoto" />
        </div>
      </Modal>
    </div>
  );
};

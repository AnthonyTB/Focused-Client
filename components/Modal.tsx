import Modal from 'react-modal';
import { useState } from 'react';

interface IProps {
    Heading: string;
    Content: string;
    isOpen: boolean;
}

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

const InfoModal: React.FC<IProps> = ({Heading, Content, isOpen}) => {
    Modal.setAppElement('#modal');

    let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(isOpen);

    const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    
    return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
    )
}

export default InfoModal;
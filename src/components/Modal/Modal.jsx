import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code !== 'Escape') return;

    this.props.handleClick();
  };

  render() {
    const { largeImage, alt, handleClick } = this.props;

    return (
      <div className="Overlay">
        <div className="Modal" onClick={handleClick}>
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

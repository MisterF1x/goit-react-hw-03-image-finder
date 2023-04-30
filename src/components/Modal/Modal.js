import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledlModal } from './Modal.styled';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };
  onClickOverlay = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.onClickOverlay}>
        <StyledlModal>{this.props.children}</StyledlModal>
      </Overlay>,
      modalRoot
    );
  }
}

// Modal.js
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import './Modal.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translate(-50%, -60%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: ${slideDown} 0.3s ease-out;
`;

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      console.log('Modal opened');
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, children } = this.props;

    if (!isOpen) return null;

    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWrapper>
          <button className="close-button" onClick={this.props.onClose}>
            &times;
          </button>
          {children}
        </ModalWrapper>
      </Backdrop>
    );
  }
}

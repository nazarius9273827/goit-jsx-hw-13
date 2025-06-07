// App.js
import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Модальне вікно (React Class Component)</h1>
        <button onClick={this.openModal}>Відкрити модалку</button>

        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <h2>Привіт з модального вікна!</h2>
          <p>Це модалка, яку можна закрити по кнопці, натисканням на бекдроп або натисканням Escape.</p>
        </Modal>
      </div>
    );
  }
}

export default App;

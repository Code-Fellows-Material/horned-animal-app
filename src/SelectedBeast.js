import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class SelectedBeast extends Component {
  handleClose = () => {
    this.props.close();
  };

  render() {
    return (
      <Modal
        autoFocus
        centered
        size={"lg"}
        show={this.props.show}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image fluid src={this.props.beast.image_url} rounded />
          <Modal.Dialog centered scrollable>
            {this.props.beast.description}
          </Modal.Dialog>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;

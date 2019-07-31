import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import './NewList.scss';

const defaultList = {
  name: '',
};

class NewList extends React.Component {
  state = {
    newList: defaultList,
  }

  updateName = (e) => {
    e.preventDefault();
    const tempList = { ...this.state.newList };
    tempList.name = e.target.value;
    this.setState({ newList: tempList });
  }

  putForm = (e) => {
    const { listObject } = this.props;
    e.preventDefault();
    this.props.editFormSubmit(this.state.newList, listObject.id);
  };

  createList = (e) => {
    const { newList } = this.state;
    e.preventDefault();
    this.props.addFormSubmit(newList);
  }

  render() {
    const { newList } = this.state;

    return (
      <React.Fragment>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create New List</ModalHeader>
          <ModalBody>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                id="exampleDateInput"
                rows="3"
                value={newList.name}
                onChange= {this.updateName}
                placeholder="Enter List Name" />
            </div>
          </form>
          </ModalBody>
          <ModalFooter>
            {this.props.isEditing
              ? <Button color="primary" onClick={this.putForm}>Save</Button>
              : <Button color="primary" onClick={this.createList}>Create</Button>}
            <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NewList;

import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../actions/itemActions';
import { v4 as uuid } from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name: this.state.name
        }
        this.props.addItem(newItem);
        // Close the modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Item</button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <label for="item">Item</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping list"
                                    onChange={this.onChange}
                                >
                                </input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps,{addItem})(ItemModal);

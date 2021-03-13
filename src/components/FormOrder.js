import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

const FormOrder = ({ handleSubmit, data, flag, listProducts, prodAdded, setProdAdded }) => {
    const [showMessage, setShowMessage] = useState(false)
    const [option, setOption] = useState("");

    const successMessage = () => {
        if (flag) {
            setShowMessage(true)
        }
    }

    const closeMsg = () => {
        setShowMessage(false)
    }

    const optionHandler = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        let value = e.target.value.split(',');
        setOption({name: label, barcode: value[0], price: value[1], quantity: 1, total: value[1]});
    };

    const addHandler = () => {
        setProdAdded([...prodAdded, option]);
        // console.log(prodAdded);
    }

    return (
        
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label >Order ID</Form.Label>
                    <Form.Control type="text" name="orderId" value={data.orderId} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="orderDate" defaultValue={data.orderDate} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Customer</Form.Label>
                    <Form.Control type="text" name="customer" defaultValue={data.customer} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Note (Optional)</Form.Label>
                    <Form.Control as="textarea" row={3} name="note" defaultValue={data.note} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Control as="select" placeholder="Select" onChange={optionHandler}>
                    {
                        listProducts.map((product, index) => {
                            return (<option key={index} value={Array(product.data.barcode, product.data.price)}>{product.data.name}</option>)
                        })
                    }
                </Form.Control>
                    <Button variant="outline-secondary" onClick={addHandler}>Add</Button>
            </Form.Row>

            <Button onClick={successMessage} variant="primary" type="submit" className="btn button-color marginBtn">
                Submit
            </Button>
            <Modal show={showMessage} onHide={closeMsg}
                size="sm"
            >
                <Modal.Body>
                    <div className="mainBackModalProduct">
                        <p>Order has been created!</p>
                        <Button variant="primary" className="btn button-color marginBtn" onClick={closeMsg}>
                            Ok
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Form>
    );
}

export default FormOrder;
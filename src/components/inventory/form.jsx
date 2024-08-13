import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';

function FormInput({ label = "", placeholder = "", onChange }) {
    return (
        <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicISBN">
                <Row style={{ marginBottom: '5px' }}>
                    <Col>
                        <h6 className="text-muted" style={{ display: 'inline' }}>{label}</h6>
                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}>*</h6>
                    </Col>
                </Row>
                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </Form.Group>
        </Col>
    );
}

export default FormInput;

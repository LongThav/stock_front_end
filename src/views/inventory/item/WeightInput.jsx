import React, { useState } from 'react';
import { Col, Row, Form, InputGroup, Dropdown, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

function WeightInput() {
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kg');

    const handleInputWeight = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleUnitSelect = (eventKey) => {
        setUnit(eventKey);
    };

    return (
        <Col>
            <Row style={{ marginBottom: '5px' }}>
                <Col>
                    <h6 className="text-muted" style={{ display: 'inline' }}>Weight</h6>
                    <h6 style={{ display: 'inline', marginLeft: '4px', fontSize: 12, color: 'grey' }}>
                        {/* Additional text can go here */}
                    </h6>
                </Col>
            </Row>
            <InputGroup className="mb-3">
                <Form.Control
                    type="number"
                    value={weight}
                    onChange={handleInputWeight(setWeight)}
                // placeholder="Enter weight"
                />
                <Dropdown onSelect={handleUnitSelect}>
                    <Dropdown.Toggle as={Button} variant="light" style={{ display: 'flex', alignItems: 'center' }}>
                        {unit}
                        {/* <FaChevronDown style={{ marginLeft: '8px' }} /> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="kg">kg</Dropdown.Item>
                        <Dropdown.Item eventKey="g">g</Dropdown.Item>
                        <Dropdown.Item eventKey="lb">lb</Dropdown.Item>
                        <Dropdown.Item eventKey="oz">oz</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup>
        </Col>
    );
}

export default WeightInput;

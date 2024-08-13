import React, { useState } from 'react';
import { Col, Row, Form, InputGroup, Dropdown, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

function ManufacturerForm() {
    const [manufacturers, setManufacturers] = useState([]); // Assuming manufacturers is an array
    const [selectedManufacturer, setSelectedManufacturer] = useState('');
    const [showManage, setShowManage] = useState(false);

    const handleSelect = (event) => {
        const value = event.target.value;
        if (value === "no-result") {
            setShowManage(true); // Show manage option if no result found
        } else {
            setSelectedManufacturer(value);
            setShowManage(false);
        }
    };

    const handleManageClick = () => {
        // Add your manage manufacturer logic here
        alert("Manage Manufacturer clicked");
    };

    return (
        <Col >
            <Row style={{ marginBottom: '5px' }}>
                <Col>
                    <h6 className="text-muted" style={{ display: 'inline' }}>Manufacturer</h6>
                    <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}>*</h6>
                </Col>
            </Row>
            <InputGroup>
                <Form.Control
                    as="select"
                    value={selectedManufacturer}
                    onChange={handleSelect}
                >
                    <option value="" disabled hidden>Select or add Manufacturer</option>
                    {manufacturers.length === 0 ? (
                        <option value="no-result">NO RESULT FOUND</option>
                    ) : (
                        manufacturers.map((manufacturer, index) => (
                            <option key={index} value={manufacturer}>{manufacturer}</option>
                        ))
                    )}
                </Form.Control>
                <InputGroup.Text>
                    <FaChevronDown size={12} />
                </InputGroup.Text>
            </InputGroup>
            {showManage && (
                <Button variant="link" onClick={handleManageClick} style={{ padding: 0, marginTop: '5px' }}>
                    Manage Manufacturer
                </Button>
            )}
        </Col>
    );
}

export default ManufacturerForm;

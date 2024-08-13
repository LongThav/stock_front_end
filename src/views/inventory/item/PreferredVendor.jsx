import React, { useState } from 'react';
import { Col, Row, Form, InputGroup, Dropdown, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

function PreferVendor() {
    const [manufacturers, setManufacturers] = useState(['KENT LEFFER', 'RAUL CONRONY']); // Assuming manufacturers is an array
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
        alert("Manage PreferVendor clicked");
    };

    return (
        <Col md={6}>
            <Row style={{ marginBottom: '5px' }}>
                <Col>
                    <h6 className="text-muted" style={{ display: 'inline' }}>PreferVendor</h6>
                    <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                </Col>
            </Row>
            <InputGroup>
                <Form.Control
                    as="select"
                    value={selectedManufacturer}
                    onChange={handleSelect}
                >
                    <option value="" disabled hidden>Select or add PreferVendor</option>
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
                    Manage PreferVendor
                </Button>
            )}
        </Col>
    );
}

export default PreferVendor;

import React, { useState, useEffect } from 'react';
import { Col, Row, Form, InputGroup, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectDataManufacturer, selectErrorManufacturer, selectLoadingManufacturer } from "selector/inventory/manufacturerSelector";
import { manufacturerReq } from "redux/actions/inventoryAction/manfactureAction";

function ManufacturerForm() {
    const dispatch = useDispatch();
    const [showManage, setShowManage] = useState(false);
    const [selectedManufacturer, setSelectedManufacturer] = useState(""); // State to track selected manufacturer

    // Manufacturer data from the Redux store
    const dataManufacturer = useSelector(selectDataManufacturer);
    const loadingManufacturer = useSelector(selectLoadingManufacturer);
    const errorManufacturer = useSelector(selectErrorManufacturer);

    const handleSelect = (event) => {
        const value = event.target.value;
        setSelectedManufacturer(value); // Update the selected manufacturer

        if (value === "no-result") {
            setShowManage(true); // Show manage option if no result found
        } else {
            setShowManage(false);
        }
    };

    useEffect(() => {
        dispatch(manufacturerReq());
    }, [dispatch]);

    const handleManageClick = () => {
        // Add your manage manufacturer logic here
        alert("Manage Manufacturer clicked");
    };

    return (
        <Col>
            <Row style={{ marginBottom: '5px' }}>
                <Col>
                    <h6 className="text-muted" style={{ display: 'inline' }}>Manufacturer</h6>
                    <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}>*</h6>
                </Col>
            </Row>
            <InputGroup>
                <Form.Control
                    as="select"
                    value={selectedManufacturer} // Use the selected manufacturer state
                    onChange={handleSelect}
                >
                    <option value="" disabled hidden>Select or add Manufacturer</option>
                    {dataManufacturer.length === 0 ? (
                        <option value="no-result">NO RESULT FOUND</option>
                    ) : (
                        dataManufacturer.map((manufacturer) => (
                            <option key={manufacturer.tbl_ManufacturersID} value={manufacturer.tbl_ManufacturersID}>
                                {manufacturer.name}
                            </option>
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

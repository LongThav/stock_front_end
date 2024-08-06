import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { MdClear } from "react-icons/md";
import { FaCircleQuestion } from "react-icons/fa6"; // Example question mark icon from FontAwesome
import { useNavigate } from "react-router-dom";

const AddItem = () => {
    const navigate = useNavigate();
    const popToItem = () => {
        navigate('/inventory/items', { replace: true });
    };

    const [type, setType] = useState('Goods');
    const [name, setName] = useState('');
    const [images, setImages] = useState([]);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImageChange = (event) => {
        setImages([...event.target.files]);
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Row
                className="justify-content-between align-items-center"
                style={{
                    backgroundColor: 'white',
                    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                    borderRadius: '4px',
                    zIndex: 1000,
                    marginRight: 1,
                    marginLeft: 1
                }}
            >
                <Col xs="auto">
                    <h1 style={{ fontSize: 18, fontWeight: 'normal', fontFamily: 'sans-serif' }}>New Item</h1>
                </Col>
                <Col xs="auto">
                    <MdClear onClick={popToItem} size={18} style={{ cursor: 'pointer' }} />
                </Col>
            </Row>
            <div style={{ overflowY: 'auto', flex: 1, paddingLeft: 25, paddingRight: 25, paddingTop: 25 ,marginTop: 10, background: 'white' }}>
                <Row className="mb-3 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="align-items-center mb-3">
                            <Col xs={12} md={6}>
                                <h3 style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: 18 }}>Type</span>
                                    <FaCircleQuestion
                                        style={{
                                            marginLeft: '10px',
                                            cursor: 'pointer',
                                            border: '1px solid #ccc',
                                            borderRadius: '50%',
                                            padding: '3px',
                                            fontSize: '16px',
                                            color: '#007bff',
                                        }}
                                        title="Select the type of item" // Tooltip on hover
                                    />
                                </h3>
                            </Col>
                            <Col xs={12} md={6} className="d-flex align-items-center">
                                <Form.Check
                                    type="radio"
                                    id="goods"
                                    name="type"
                                    value="Goods"
                                    checked={type === 'Goods'}
                                    onChange={handleTypeChange}
                                    label="Goods"
                                    style={{ fontSize: 18 }}
                                    inline
                                />
                                <Form.Check
                                    type="radio"
                                    id="service"
                                    name="type"
                                    value="Service"
                                    checked={type === 'Service'}
                                    onChange={handleTypeChange}
                                    label="Service"
                                    style={{ fontSize: 18 }}
                                    inline
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={6}>
                                <Form.Label style={{ color: 'red', marginBottom: 0, fontSize: 18 }}>Name*</Form.Label>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={handleNameChange}
                                    style={{ width: '400px' }} // Increased width to 500px
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                background: '#f9f9f9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                cursor: 'pointer',
                                overflow: 'hidden',
                            }}
                        >
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0 }}
                            />
                            <span>Upload</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AddItem;

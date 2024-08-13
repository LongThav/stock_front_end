import React, { useRef, useState } from "react";
import { Col, Row, Form, Card, FormControl, InputGroup, Dropdown, Button } from "react-bootstrap";
import { MdClear } from "react-icons/md";
import { FaCircleQuestion } from "react-icons/fa6"; // Example question mark icon from FontAwesome
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaStar } from 'react-icons/fa';
import ImageUploadCard from "./UploadImage";
import ManufacturerForm from "./ManufacturerForm";
import WeightInput from "./WeightInput";
import BranchItem from "./Brand";
import FormInput from "components/inventory/form";
import Account from "./Account";
import DescriptionInput from "components/inventory/description";
import Tax from "./Tax";
import PreferVendor from "./PreferredVendor";


const AddItem = () => {
    const navigate = useNavigate();
    const popToItem = () => {
        navigate('/inventory/items', { replace: true });
    };

    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [unit, setUnit] = useState('cm');
    const [kilo, setKilo] = useState('kg');
    const [returnable, setReturnable] = useState(false);
    const dropdownRef = useRef(null);

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleInputWeight = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setReturnable(event.target.checked);
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


    const handleUnitSelect = (eventKey) => {
        setUnit(eventKey);
    };

    const handleKiloSelect = (eventKey) => {
        setKilo(eventKey);
    };


    const toggleDropdown = () => {
        if (dropdownRef.current) {
            dropdownRef.current.toggleMenu();
        }
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Row
                className="justify-content-between align-items-center"
                style={{
                    backgroundColor: 'white',
                    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                    borderRadius: '1px',
                    zIndex: 1000,
                    marginRight: 0,
                    marginLeft: 0,
                    marginBottom: 10
                }}
            >
                <Col xs="auto">
                    <h1 style={{ marginTop: 5, fontSize: 18, fontWeight: 'normal', fontFamily: 'sans-serif' }}>New Item</h1>
                </Col>
                <Col xs="auto">
                    <MdClear onClick={popToItem} size={18} style={{ cursor: 'pointer' }} />
                </Col>
            </Row>
            <Card>
                <Card.Body className="mb-4">
                    <Row>
                        <Col md={12}>
                            <Col style={{ marginBottom: '5px' }}>
                                <Row>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>Type</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}>*</h6>
                                    </Col>
                                    {/* <ImageUploadCard/> */}
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Row>
                                        <Col md={3}>
                                            <Form.Check type="radio" label="Goods" name="supportedRadios" id="supportedRadio3" />

                                        </Col>
                                        <Col md={1}>
                                            <Form.Check type="radio" label="Service" name="supportedRadios" id="supportedRadio4" />
                                        </Col>
                                    </Row>

                                </Form.Group>
                            </Col>

                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>Name</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}>*</h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicSKU">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>SKU</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Row style={{ marginBottom: '5px' }}>
                                <Col>
                                    <h6 className="text-muted" style={{ display: 'inline' }}>Unit</h6>
                                    <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}>*</h6>
                                </Col>
                            </Row>
                            <InputGroup>
                                <Form.Control as="select">
                                    <option value="" disabled selected hidden>Select or type to add</option>
                                    <option>DOZEN</option>
                                    <option>BOX</option>
                                    <option>GRAMS</option>
                                    <option>KILOGRAMS</option>
                                    <option>TABLETS</option>
                                </Form.Control>
                                <InputGroup.Text>
                                    <FaChevronDown size={12} />
                                </InputGroup.Text>
                            </InputGroup>
                            <Form.Group className="mb-3 mt-1" controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Returnable Item " />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Row style={{ marginBottom: '5px' }}>
                                <Col>
                                    <h6 className="text-muted" style={{ display: 'inline' }}>Dimensions</h6>
                                    <h6 style={{ display: 'inline', marginLeft: '4px', fontSize: 12, color: 'grey' }}>
                                        (Length X Width X Height)
                                    </h6>
                                </Col>
                            </Row>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="number"
                                    value={length}
                                    onChange={handleInputChange(setLength)}
                                    placeholder=""
                                />
                                <InputGroup.Text>x</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    value={width}
                                    onChange={handleInputChange(setWidth)}
                                    placeholder=""
                                />
                                <InputGroup.Text>x</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    value={height}
                                    onChange={handleInputChange(setHeight)}
                                    placeholder=""
                                />
                                <Dropdown onSelect={handleUnitSelect}>
                                    <Dropdown.Toggle as={Button} variant="light" style={{ display: 'flex', alignItems: 'center' }}>
                                        {unit}
                                        {/* <FaChevronDown style={{ marginLeft: '8px' }} /> */}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="cm">cm</Dropdown.Item>
                                        <Dropdown.Item eventKey="in">in</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <ManufacturerForm />
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>UPC</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>EAN</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>Weight</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <WeightInput />
                        </Col>
                        <Col md={6}>
                            <BranchItem />
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>MPN</h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Row style={{ marginBottom: '5px' }}>
                                    <Col>
                                        <h6 className="text-muted" style={{ display: 'inline' }}>ISBN </h6>
                                        <h6 style={{ color: 'red', display: 'inline', marginLeft: '4px' }}></h6>
                                    </Col>
                                </Row>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <hr />
                        <Form.Group className="mb-3 mt-1" controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Sales Information" style={{ color: 'black' }} />
                        </Form.Group>
                        <FormInput label="Selling Price" onChange={{}} />
                        <Account />
                        <DescriptionInput placeholder="" onChange={{}} />
                        <Tax />
                        <Form.Group className="mb-3 mt-1" controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Purchase Information" style={{ color: 'black' }} />
                        </Form.Group>
                        <hr />
                        <FormInput label="Cost Price" onChange={{}} />
                        <Account />
                        <DescriptionInput placeholder="" onChange={{}} />
                        <Tax />
                        <PreferVendor />
                        <Col md={12} className="mt-4">
                            <Button variant="link" className="btn btn-primary">Save</Button>
                            <Button variant="link" className="btn btn-secondary">Cancal</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddItem;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdClear } from "react-icons/md";


const AddItem = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-between align-items-center">
                <Col>
                    <h1 style={{ fontSize: 25, fontWeight: 'normal', fontFamily: 'sans-serif' }}>New Item</h1>
                </Col>
                <Col>
                    <MdClear size={25}/>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default AddItem;
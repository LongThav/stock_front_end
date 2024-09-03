import React, { useState, useEffect } from 'react';
import { Col, Row, Form, InputGroup, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { brandReq } from 'redux/actions/inventoryAction/brandAction';
import { selectDataBrand, selectErrorBrand, selectLoadingBrand } from 'selector/inventory/brandSelector';

function BranchItem() {
    const dispatch = useDispatch();
    const [selectedBrand, setSelectedBrand] = useState(''); // State to track selected brand
    const [showManage, setShowManage] = useState(false);

    // Fetch brand data from the Redux store
    const loadingBrand = useSelector(selectLoadingBrand);
    const errorBrand = useSelector(selectErrorBrand);
    const brandData = useSelector(selectDataBrand);

    const handleSelect = (event) => {
        const value = event.target.value;
        setSelectedBrand(value); // Update the selected brand

        if (value === "no-result") {
            setShowManage(true); // Show manage option if no result found
        } else {
            setShowManage(false);
        }
    };

    const handleManageClick = () => {
        // Add your manage brand logic here
        alert("Manage Brand clicked");
    };

    useEffect(() => {
        dispatch(brandReq());
    }, [dispatch]);

    return (
        <Col>
            <Row style={{ marginBottom: '5px' }}>
                <Col>
                    <h6 className="text-muted" style={{ display: 'inline' }}>Brand</h6>
                </Col>
            </Row>
            <InputGroup>
                <Form.Control
                    as="select"
                    value={selectedBrand} // Use the selected brand state
                    onChange={handleSelect}
                >
                    <option value="" disabled hidden>Select or add Brand</option>
                    {brandData.length === 0 ? (
                        <option value="no-result">NO RESULT FOUND</option>
                    ) : (
                        brandData.map((brand, index) => (
                            <option key={index} value={brand.tbl_BrandID}>
                                {brand.name}
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
                    Manage Brand
                </Button>
            )}
        </Col>
    );
}

export default BranchItem;

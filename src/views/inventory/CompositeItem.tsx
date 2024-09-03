import React, { useState } from 'react';
import { Row, Col, Container, Button, Card, Table, Form, Pagination } from 'react-bootstrap';
import { FaPlus, FaTh, FaList} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const itemsPerPage = 10;

const CompositeItem = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('table'); // 'table' or 'grid'

  // Sample data with image URLs and product information
  const items = [
    { id: 1, name: 'Dining Set', sku: 'Item 1 sku', type: 'Furniture', stock_on_hand: '1111', rating: '$4716.00', image: 'https://via.placeholder.com/40', reorder_point: '' },
    { id: 2, name: 'Dining Set', sku: 'Item 1 sku', type: 'Furniture', stock_on_hand: '1020', rating: '$4716.00', image: 'https://via.placeholder.com/40', reorder_point: '' },
    { id: 3, name: 'Dining Set', sku: 'Item 1 sku', type: 'Furniture', stock_on_hand: '2020', rating: '$4716.00', image: 'https://via.placeholder.com/40', reorder_point: '' },
    { id: 4, name: 'Dining Set', sku: 'Item 1 sku', type: 'Furniture', stock_on_hand: '2222', rating: '$4716.00', image: 'https://via.placeholder.com/40', reorder_point: '' },
    { id: 5, name: 'Dining Set', sku: 'Item 1 sku', type: 'Furniture', stock_on_hand: '3333', rating: '$4716.00', image: 'https://via.placeholder.com/40', reorder_point: '' },
    
  ];

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentItems.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectAll(false); // Reset select all when changing page
  };

  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddButtonClick = () => {
    navigate('/inventory/items/new'); // Navigate to the AddItem page
  };

  return (
    <React.Fragment>
      <Container style={{ padding: 0 }}>
        <Row className="justify-content-between align-items-center">
          <Col>
            <h1 style={{ fontSize: 20, fontWeight: 'normal', fontFamily: 'sans-serif' }}>All Composite Items</h1>
          </Col>
          <Col className="text-end">
            <Button
            //   onClick={handleAddButtonClick}
              variant="primary"
              className="custom-button me-2"
              style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
            >
              <FaPlus style={{ marginRight: '5px' }} />
              New
            </Button>
           
          </Col>
        </Row>
        <Card className="mt-2">
          <Card.Body>
            {view === 'table' ? (
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>
                      <Form.Check
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th style={{ }}>NAME</th>
                    <th style={{ }}>SKU</th>
                    <th style={{ }}>STOCK ON HAND</th>
                    <th style={{ }}>REORDER POINT</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map(item => (
                    <tr key={item.id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedRows.includes(item.id)}
                          onChange={() => handleSelectRow(item.id)}
                        />
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, fontWeight: 'bold', color: 'grey' }}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              borderRadius: '50%',
                              width: '40px',
                              height: '40px',
                              objectFit: 'cover',
                              marginRight: '10px'
                            }}
                          />
                          {item.name}
                        </div>
                      </td>
                      <td style={{ }}>{item.sku}</td>
                      <td style={{ }}>{item.stock_on_hand}</td>
                      <td style={{ }}>{item.reorder_point}</td>
                      {/* <td style={{ }}>{item.reorder_point}</td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="row">
                {currentItems.map(item => (
                  <div key={item.id} className="col-md-4 mb-3">
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <strong>SKU:</strong> {item.sku}<br />
                          <strong>Type:</strong> {item.type}<br />
                          {/* <strong>Description:</strong> {item.description}<br /> */}
                          <strong>Rate:</strong> {item.rating}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            )}
            <div className="d-flex justify-content-end mt-3">
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages).keys()].map(pageNumber => (
                  <Pagination.Item
                    key={pageNumber + 1}
                    active={pageNumber + 1 === currentPage}
                    onClick={() => handlePageChange(pageNumber + 1)}
                  >
                    {pageNumber + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default CompositeItem;

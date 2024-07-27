import React, { useState } from 'react';
import { Row, Col, Container, Button, Card, Table, Form, Pagination } from 'react-bootstrap';
import { FaPlus, FaTh, FaList} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const itemsPerPage = 10;

const ItemView = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('table'); // 'table' or 'grid'

  // Sample data with image URLs and product information
  const items = [
    { id: 1, name: 'Dining Set', sku: 'Item 1 sku', type: 'Furniture', description: 'A stylish dining set with a table and four chairs.', rating: '$4716.00', image: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Coffee Table', sku: 'Item 2 sku', type: 'Furniture', description: 'A modern coffee table.', rating: '$316.00', image: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Armchair', sku: 'Item 3 sku', type: 'Furniture', description: 'A comfy armchair.', rating: '$4716.00', image: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Sofa Set', sku: 'Item 4 sku', type: 'Furniture', description: 'A modern sofa set.', rating: '$500.00', image: 'https://via.placeholder.com/40' },
    { id: 5, name: 'Bookcase', sku: 'Item 5 sku', type: 'Furniture', description: 'A stylish bookcase.', rating: '$600.00', image: 'https://via.placeholder.com/40' },
    { id: 6, name: 'Desk', sku: 'Item 6 sku', type: 'Office', description: 'A modern desk.', rating: '$1200.00', image: 'https://via.placeholder.com/40' },
    { id: 7, name: 'Bed Frame', sku: 'Item 7 sku', type: 'Furniture', description: 'A high-quality bed frame.', rating: '$250.00', image: 'https://via.placeholder.com/40' },
    { id: 8, name: 'Dining Table', sku: 'Item 8 sku', type: 'Furniture', description: 'An elegant dining table.', rating: '$350.00', image: 'https://via.placeholder.com/40' },
    { id: 9, name: 'Chair', sku: 'Item 9 sku', type: 'Furniture', description: 'A stylish chair.', rating: '$800.00', image: 'https://via.placeholder.com/40' },
    { id: 10, name: 'Cabinet', sku: 'Item 10 sku', type: 'Furniture', description: 'A stylish cabinet.', rating: '$400.00', image: 'https://via.placeholder.com/40' },
    { id: 11, name: 'Table Lamp', sku: 'Item 11 sku', type: 'Lighting', description: 'A modern table lamp.', rating: '$700.00', image: 'https://via.placeholder.com/40' },
    { id: 12, name: 'Floor Lamp', sku: 'Item 12 sku', type: 'Lighting', description: 'A stylish floor lamp.', rating: '$250.00', image: 'https://via.placeholder.com/40' }
    // Add more items as needed
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
            <h1 style={{ fontSize: 25, fontWeight: 'normal', fontFamily: 'sans-serif' }}>All Items</h1>
          </Col>
          <Col className="text-end">
            <Button
              onClick={handleAddButtonClick}
              variant="primary"
              className="custom-button me-2"
              style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
            >
              <FaPlus style={{ marginRight: '5px' }} />
              New
            </Button>
            <Button
              variant="secondary"
              className="custom-button me-2"
              style={{ paddingLeft: 9, paddingRight: 9, paddingTop: 5, paddingBottom: 5, alignItems: 'center', justifyContent: 'center' }}
              onClick={() => setView('table')}
            >
              <FaList />
              {/* Table View */}
            </Button>
            <Button
              variant="secondary"
              className="custom-button"
              style={{ paddingLeft: 9, paddingRight: 9, paddingTop: 5, paddingBottom: 5 }}
              onClick={() => setView('grid')}
            >
              <FaTh />
              {/* Grid View */}
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
                    <th style={{ fontSize: 12 }}>NAME</th>
                    <th style={{ fontSize: 12 }}>SKU</th>
                    <th style={{ fontSize: 12 }}>TYPE</th>
                    <th style={{ fontSize: 12 }}>DESCRIPTION</th>
                    <th style={{ fontSize: 12 }}>RATE</th>
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
                      <td style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>{item.sku}</td>
                      <td style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>{item.type}</td>
                      <td style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>{item.description}</td>
                      <td style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>{item.rating}</td>
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
                          <strong>Description:</strong> {item.description}<br />
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

export default ItemView;

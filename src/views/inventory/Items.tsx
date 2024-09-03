import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Card, Table, Form, Pagination } from 'react-bootstrap';
import { FaPlus, FaTh, FaList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { itemReq } from 'redux/actions/inventoryAction/itemAction';
import { selectLoading, selectItems, selectPageable, selectTotalPages, selectTotalElements, selectError } from '../../selector/inventory/itemSelector';

const itemsPerPage = 10;

const ItemView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('table'); // 'table' or 'grid'

  // const state = useSelector(state => state);

  // Access specific part of Redux state
  const loading = useSelector(selectLoading);
  const item = useSelector(selectItems);
  const pageable = useSelector(selectPageable);
  const totalPages = useSelector(selectTotalPages);
  const totalElements = useSelector(selectTotalElements);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(itemReq());
  }, [dispatch]);

  // Sample data with image URLs and product information

  const totalPage = Math.ceil(item.length / itemsPerPage);

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

  const currentItems = item.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddButtonClick = () => {
    navigate('/inventory/items/new'); // Navigate to the AddItem page
  };



  return (
    <React.Fragment>
      <Container style={{ padding: 0 }}>
        <Row className="justify-content-between align-items-center">
          <Col>
            <h1 style={{ fontSize: 20, fontWeight: 'normal', fontFamily: 'sans-serif' }}>All Items</h1>
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
          {loading ? <p style={{textAlign: 'left', paddingTop: '15px', paddingLeft: '15px'}}>Loading...</p> : error ? <p style={{textAlign: 'left', paddingTop: '15px', paddingLeft: '15px'}}>{error}</p> :  <Card.Body>
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
                    <th style={{}}>NAME</th>
                    <th style={{}}>SKU</th>
                    <th style={{}}>TYPE</th>
                    <th style={{}}>DESCRIPTION</th>
                    <th style={{}}>RATE</th>
                  </tr>
                </thead>
                {/* {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>} */}
                <tbody>

                  {currentItems.map(item => (
                    <tr key={item.itemID}>
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
                            src={'https://via.placeholder.com/40'}
                            alt={'https://via.placeholder.com/40'}
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
                      <td style={{}}>{item.sku}</td>
                      <td style={{}}>{item.type}</td>
                      <td style={{}}>{item.salesDescription}</td>
                      <td style={{}}>{item.salesUnitPrice}</td>
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
                {[...Array(totalPage).keys()].map(pageNumber => (
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
                  disabled={currentPage === totalPage}
                />
              </Pagination>
            </div>
          </Card.Body>}
         
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ItemView;

import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';

function ImageUploadCard() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length + images.length > 15) {
            setError('You can only upload up to 15 images.');
            return;
        }
        setError('');
        setImages([...images, ...files]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    return (
        <Card style={{ width: '150px', padding: '5px' }}>
            <Card.Body>
                {/* Title commented out as per your code */}
                {/* <Card.Title>Upload Images</Card.Title> */}
                <Card.Text>
                    <div className="text-center mb-3">
                        <FaUpload size={20} color="#007bff" />
                        {/* Instructions commented out as per your code */}
                        {/* <p style={{fontSize: 12}}>Drag & drop or click to upload (max 15 images)</p> */}
                    </div>
                    <Form.Group>
                        <Form.Control
                            type="file"
                            style={{ width: '100%', height: 'auto', display: 'none' }}
                            multiple
                            onChange={handleFileChange}
                            accept="image/*"
                            id="file-upload"
                        />
                        <Button
                            variant="primary"
                            style={{ width: '100px', padding: 0, }}
                            onClick={() => document.getElementById('file-upload').click()}
                        >
                            <h4 style={{fontSize: '12px', padding: 0, textAlign: 'center', marginTop: '6px', color: 'white'}}>Choose File</h4>
                        </Button>
                    </Form.Group>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="mt-3">
                        {images.length > 0 && (
                            <div className="d-flex flex-wrap">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="position-relative me-2 mb-2"
                                        style={{ width: '50px', height: '50px' }}
                                    >
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Uploaded ${index}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '4px',
                                            }}
                                        />
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="position-absolute top-0 end-0 p-0"
                                            style={{ width: '20px', height: '20px', borderRadius: '50%' }}
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            <span style={{ fontSize: '12px' }}>&times;</span>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ImageUploadCard;

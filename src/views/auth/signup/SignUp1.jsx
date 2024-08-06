import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/actions/authAction';

// Validation schema using Yup
const validationSchema = Yup.object({
  f_name: Yup.string().required('First Name is required'),
  l_name: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email address is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignUp1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    dispatch(
      register(values, (responseError) => {
        setSubmitting(false);
        if (responseError) {
          setErrors({ submit: responseError });
        } else {
          navigate('/login');
        }
      })
    );
  };

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless">
            <Row className="align-items-center">
              <Col>
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon" />
                  </div>
                  <h3 className="mb-4">Sign up</h3>
                  <Formik
                    initialValues={{ f_name: '', l_name: '', email: '', password: '', roleId: 1 }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                      <Form>
                        <div className="input-group mb-3">
                          <Field
                            type="text"
                            name="f_name"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                        {touched.f_name && errors.f_name && (
                          <h3 style={{ color: 'red', fontSize: 12, paddingTop: 5, textAlign: 'start' }}>{errors.f_name}</h3>
                        )}
                        <div className="input-group mb-3">
                          <Field
                            type="text"
                            name="l_name"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                        {touched.l_name && errors.l_name && (
                          <h3 style={{ color: 'red', fontSize: 12, paddingTop: 5, textAlign: 'start' }}>{errors.l_name}</h3>
                        )}
                        <div className="input-group mb-3">
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                          />
                        </div>
                        {touched.email && errors.email && (
                          <h3 style={{ color: 'red', fontSize: 12, paddingTop: 5, textAlign: 'start' }}>{errors.email}</h3>
                        )}
                        <div className="input-group mb-3">
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        {touched.password && errors.password && (
                          <h3 style={{ color: 'red', fontSize: 12, paddingTop: 5, textAlign: 'start' }}>{errors.password}</h3>
                        )}
                        <div className="form-check text-start mb-3 mt-2">
                          <Field
                            type="checkbox"
                            name="newsletter"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label className="form-check-label" htmlFor="customCheck1">
                            Send me the <Link to="#">Newsletter</Link> weekly.
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary mb-4"
                          disabled={isSubmitting}
                        >
                          Sign up
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <p className="mb-2">
                    Already have an account?{' '}
                    <NavLink to={'/auth/signin-1'} className="f-w-400">
                      Login
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp1;

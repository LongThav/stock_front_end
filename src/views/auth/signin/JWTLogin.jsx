import Reac from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import '../../auth/signin/style/JWTLogin.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/actions/authAction';


const JWTLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);


  const handleLogin = (values, { setSubmitting, setErrors }) => {
    // console.log(values);
    dispatch(
      login(values, (responseError) => {
        setSubmitting(false);
        if (responseError) {
          setErrors({ submit: responseError });
        } else {
          navigate('/app/dashboard/default');
        }
      })
    );
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      onSubmit={handleLogin}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
      })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              className="form-control"
              label="Email Address / Username"
              name="email"
              placeholder="Email address"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            {touched.email && errors.email && (
              <h3 style={{ color: 'red', fontSize: 12, paddingTop: 5, textAlign: 'start' }}>{errors.email}</h3>
            )}
          </div>
          <div className="form-group mb-4">
            <input
              className="form-control"
              label="Password"
              name="password"
              placeholder="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            {touched.password && errors.password && (
              <h3 style={{ color: 'red', fontSize: 12, paddingTop: 5, textAlign: 'start' }}>{errors.password}</h3>
            )}
          </div>

          <div className="custom-control custom-checkbox text-start mb-4 mt-2">
            <input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Save credentials.
            </label>
          </div>

          {errors.submit && (
            <Col sm={12}>
              <Alert className="text-start" style={{ textAlign: 'left', color: 'green' }}>{errors.submit}</Alert>
            </Col>
          )}

          <Row>
            <Col mt={2}>
              <Button className="btn-block mb-4" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                Signin
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default JWTLogin;

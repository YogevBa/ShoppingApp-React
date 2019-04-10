import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 60%;
  justify-content: center;
  margin: 50px 0;
`;
const FormInfo = styled.form`
  width: 60%;
`;
const Label = styled.label`
  padding: 5px;
  margin: 10px 0;
  font-size: 20px;
  color: brown;
`;
const FirstNameInput = styled.input`
  width: 50%;
  height: 25px;
`;
const SureNameInput = styled.input`
  width: 50%;
  height: 25px;
`;
const EmailInput = styled.input`
  width: 50%;
  height: 25px;
`;
const SubmitBtn = styled.button`
  background-color: #2a9cda;
  color: white;
  font-size: 25px;
  margin: 0 5px;
`;
const ResetBtn = styled.button`
  background-color: #2a9cda;
  color: white;
  font-size: 25px;
  margin: 0 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: serif;
  color: brown;
`;

const Form = ({ onSubmit }) => (
  <FormContainer>
    <Formik
      initialValues={{ email: "", firstName: "", sureName: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Email is Required"),
        firstName: Yup.string().required("First Name is Required"),
        sureName: Yup.string().required("Sure Name is Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleReset
        } = props;
        return (
          <FormInfo
            onSubmit={e => {
              e.preventDefault();
              return onSubmit(values);
            }}
          >
            <Title>Fill in your details</Title>
            <Label htmlFor="firstName" style={{ display: "block" }}>
              First Name
            </Label>
            <FirstNameInput
              id="firstName"
              placeholder="Enter your First Name"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.firstName && touched.firstName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.firstName && touched.firstName && (
              <div className="input-feedback">{errors.firstName}</div>
            )}

            <Label htmlFor="sureName" style={{ display: "block" }}>
              Sure Name
            </Label>
            <SureNameInput
              id="sureName"
              placeholder="Enter your Sure Name"
              type="text"
              value={values.sureName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.sureName && touched.sureName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.sureName && touched.sureName && (
              <div className="input-feedback">{errors.sureName}</div>
            )}

            <Label htmlFor="email" style={{ display: "block" }}>
              Email
            </Label>
            <EmailInput
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <ButtonsContainer>
              <ResetBtn
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </ResetBtn>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                Submit
              </SubmitBtn>
            </ButtonsContainer>
          </FormInfo>
        );
      }}
    </Formik>
  </FormContainer>
);

export default Form;

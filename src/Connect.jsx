import React , {useState} from 'react'
import axios from "axios";
import './App.css';
import { Formik, Form, Field ,ErrorMessage} from 'formik';
import * as Yup from 'yup';


const Connect = () => {
  const categorie = [
    { value: "", label: "Catégories de l'annonce ... " },
    { value: "Vente", label: "Vente" },
    { value: "Echange", label: "Echange" },
    { value: "Location", label: "Location" },
    { value: "Location pour vaccances", label: "Location pour vaccances" },
  ];
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });
  return (
     <div className='publier'>
       <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <div className='flex flex-col'>
      <Form className='flex flex-col'>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
  
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" />
  
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" />
  
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form></div>
    )}
  </Formik>
  
  
      </div> 
  )
}

export default Connect
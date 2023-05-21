import  { React ,useState }  from 'react'
import {BrowserRouter as Router, Route ,Routes  }from 'react-router-dom' ;//import Nav from './Components/Nav';
//import { Link } from 'react-router-dom';
//import videoBg from'./assets/videoBg.mp4'
//import './App.css';

import axios from "axios";
//import './App.css';
import { Formik, Form, Field ,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Connect from './Connect';
import Main from './Pages/Main';


function App() {
  

  return (
    <div >

<Router> 
      <Routes>
       <Route path="/" element={<Main/> } />
       <Route path="/main" element={<Connect/>} />
     

      </Routes>
    </Router> 
    </div>
  );
}

export default App;

//<video src={videoBg} autoPlay loop muted />
/**
      <Formik  
    initialValues={{  name: '' , surname: '' , age :0,email :'', mdp:'', mdpc :'' , categories:''  }}
    onSubmit={(values, actions ) => {
      setTimeout(async () => {
        const response = await axios.post("http://localhost:5000/annonces/2", values);
        console.log(response.data);
        alert(JSON.stringify(values, null, 10));
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isSubmitting }) => (
    <Form  className=" flex flex-col bg-slate-400  justify-center">
      <Field type="text" name="name" placeholder=" Nom "/><ErrorMessage name="name" />
      <Field type="text" name="surname" placeholder=" Prenom" className="surface"/><ErrorMessage name="surname" />
      <Field type="number"   name="age" placeholder=" Age " className="prix"/>
      <Field type="email" name="email" placeholder="Email" className="wilaya"/>
      <Field type="text" name="mdp" placeholder="Mot de passe"className="commune"/><ErrorMessage name="mdp" />
      <Field type="text" name="mdpc" placeholder=" Confirmer "className="commune"/>
      <Field as="select" name="categories"  className="categories">
          {categorie.map((categories) => (
            <option key={categories.value} value={categories.value}>
              {categories.label}
            </option>
          ))}
      </Field>
     
       
    </Form>
  )}
</Formik> */
import React from "react";
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import Event from "../Components/Event";

const InfoUser = () => {
  const payss = [
    { value: "", label: "votre pays d'origine " },
    { value: "Allemagne", label: "Allemagne" },
    { value: "Argentine", label: "Argentine" },
    { value: "Croatie", label: "Croatie" },
    { value: "France", label: "France" },
    { value: "Roumanie", label: "Roumanie" },
    { value: "Libye", label: "Libye" },
    { value: "Mali", label: "Mali" },
    { value: "Malaisie", label: "Malaisie" },
    { value: "Syrie", label: "Syrie" },
    { value: "Tunisie", label: "Tunisie " },
    { value: "Yémen", label: "Yémen" },
    { value: "Maroc", label: "Maroc" },
    { value: "talie", label: "talie" },
    { value: "Suisse", label: "Suisse" },
  ];
  return (
    <div className="flex justify-center " >
       
      <Formik  className="flex"
        initialValues={{ Age: "", talephone: "", pays: "" }}
        onSubmit={(values, actions) => {
          setTimeout(async () => {
            const response = await axios.post(
              "http://localhost:5000/annonces/2",
              values
            );
            console.log(response.data);
            alert(JSON.stringify(values, null, 10));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className=" flex flex-col justify-center p-16 text-center  mt-10 border-2 border-green-app gap-3 rounded-xl" >
            <h1 className=" text-green-app text-4xl font-bold ">Apprenons-en <br/>davantage sur vous</h1>
             <Field type="Integer" name="age" placeholder="Age"  className=" border border-green-app"/>
            <Field
              type="Integer"
              name="numero"
              placeholder="Numero de telephone"
              className=" border border-green-app "
            />
            <Field as="select" name="pays" className="  bg-green-app opacity-60 rounded-md ">
              {payss.map((pays) => (
                <option value={pays.value}>{pays.label}</option>
              ))}
            </Field>
            <div className="flex justify-center mt-6 ">
            <button  className="flex text-lg px-2  text-center text-white bg-green-app h-8 w-32  rounded-xl" type="submit" disabled={isSubmitting}>
  
      Sauvegarder
      </button></div>
          </Form>
        )}
      </Formik>
     
    </div>
    
  );
};

export default InfoUser;

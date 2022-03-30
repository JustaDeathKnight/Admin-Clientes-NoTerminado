import React from 'react'
import {Formik, Form, Field} from 'formik'

const Formulario = () => {
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-grey-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
        <Formik>
            <Form className='mt-5'>
                <div>
                  <label
                  className='text-gray-800 '
                  htmlFor='nombre'
                  >Nombre</label>
                  <Field
                  placeHolder='Nombre'
                  id='nombre'
                  type='text'
                  className='block mt-2 w-full p-3 bg-gray-50 rounded-md'         
                  />
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Formulario
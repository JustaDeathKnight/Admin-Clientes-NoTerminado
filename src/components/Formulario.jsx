import {Formik, Form, Field} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {
  const navigate = useNavigate()
  const nuevoClienteSchema = Yup.object().shape({

    nombre: Yup.string()
                .required('Nombre del cliente obligatorio')
                .min(3, 'Nombre del cliente muy corto (3-20)')
                .max(20, 'Nombre del cliente muy largo(3-20)'),

    empresa: Yup.string()
                .required('Nombre de la empresa obligatorio')
                .min(3, 'Nombre de la empresa muy corto'),

    email: Yup.string()
              .required('Email del cliente obligatorio')
              .email('Email invalido'),

    tel: Yup.number().typeError('No es un telefono valido')
            .integer('No es un telefono valido')
            .positive('No hay telefonos negativos'),

    notas: Yup.string()
          .max(3000, 'Tu nota se zarpa en larga'),

  })
  const handleSubmit = async (values) => {
 
    try {
      const url = 'http://localhost:4000/clientes'

      const respuesta = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      {alert('Cliente agregado correctamente')}
      navigate('/clientes')
      
    } catch (error){
      console.log(error)
    }
  }
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-grey-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

        <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          tel: '',
          notas: '',
        }}
        onSubmit={ async (values, {resetForm}) => {
          await handleSubmit({values})
          resetForm()
        }}
        // aca le decimos que va a usar a yup para verificar el formulario
        validationSchema={nuevoClienteSchema}
        >
          {({errors, touched})=>{
            return(
            <Form className='mt-5'>
                <div className='mb-4'>
                  <label
                  className='text-gray-800 '
                  htmlFor='nombre'
                  >Nombre</label>
                  <Field
                  name="nombre"
                  placeholder='Nombre del cliente'
                  id='nombre'
                  type='text'
                  className='block mt-2 w-full p-3 bg-gray-50 rounded-md'         
                  />
                  {errors.nombre && touched.nombre ? (<Alerta>{errors.nombre}</Alerta>) : null}
                </div>
                {/* ------------------------------- */}
                <div className='mb-4'>
                  <label
                  className='text-gray-800 '
                  htmlFor='empresa'

                  >Empresa del Cliente</label>
                  <Field
                  name='empresa'
                  placeholder='Empresa de la empresa'
                  id='empresa'
                  type='text'
                  className='block mt-2 w-full p-3 bg-gray-50 rounded-md'         
                  />
                  {errors.empresa && touched.empresa ? (<Alerta>{errors.empresa}</Alerta>) : null}
                </div>
                {/* ------------------------------- */}
                <div className='mb-4'>
                  <label
                  className='text-gray-800 '
                  htmlFor='email'
 
                  >E-mail del cliente</label>
                  <Field
                  name='email'
                  placeholder='Email del cliente'
                  id='email'
                  type='email'
                  className='block mt-2 w-full p-3 bg-gray-50 rounded-md'         
                  />
                  {errors.email && touched.email ? (<Alerta>{errors.email}</Alerta>) : null}
                </div>
                {/* ------------------------------- */}
                <div className='mb-4'>
                  <label
                  className='text-gray-800 '
                  htmlFor='tel'
                  >Telefono del cliente (not required)</label>
                  <Field
                  name='tel'
                  placeholder='Telefono del cliente'
                  id='tel'
                  type='text'
                  className='block mt-2 w-full p-3 bg-gray-50 rounded-md'         
                  />
                  {errors.tel && touched.tel ? (<Alerta>{errors.tel}</Alerta>) : null}
                </div>
                {/* ------------------------------- */}
                <div className='mb-4'>
                  <label
                  className='text-gray-800 '
                  htmlFor='notas'
                  >Notas</label>
                  <Field
                  name='notas'
                  as='textarea'
                  placeholder='Notas del cliente'
                  id='notas'
                  type='text'
                  className='block mt-2 w-full p-3 bg-gray-50 rounded-md h-40'         
                  />
                  {errors.notas && touched.notas ? (<Alerta>{errors.notas}</Alerta>) : null}
                </div>
                <input
                type='submit'
                value='Agregar Cliente'
                className='mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg hover:bg-blue-900 cursor-pointer'
                >
                
                </input>
            </Form>
          )}}
        </Formik>
    </div>
  )
}

export default Formulario
import { useState } from 'react';
import './checkout.css';

const Checkout = () => {

    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')

   

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.nombre]:e.target.value
        })

    }

    // const finalizarCompra = (e) => {
    //     e.preventDefault();
    //     if((nombre, apellido, direccion, telfonom, email).includes('')){
    //         alert(' hay almenos un campo del formulario vacio')
    //     }
    // }



    return (
        <div>
            <h2 className='titulo-checkout'>Terminar compra</h2>
            <h3 className='titulo-formulario'>Llena los siguientes datos</h3>
            {/* <form onSubmit={finalizarCompra}> */}
            <form >
                <div className='input-formulario'>
                    <label htmlFor="">Nombre</label>
                    <input onChange={datosComprador} type="text" placeholder='Nombre' name='nombre'  />
                </div>
                <div className='input-formulario'>
                    <label htmlFor="">Apellido</label>
                    <input onChange={datosComprador} type="text" placeholder='Apellido' name='apellido'  />
                </div>
                <div className='input-formulario'>
                    <label htmlFor="">Teléfono</label>
                    <input onChange={datosComprador} placeholder='000-000-00-00' name='telefono' />
                </div>

                <div className='input-formulario'>
                    <label htmlFor="">Dirección</label>
                    <input onChange={datosComprador} type="text" placeholder='Dirección' name='direccion'  />
                </div>

                <div className='input-formulario'>
                    <label htmlFor="">Email</label>
                    <input onChange={datosComprador} type="email" placeholder='Email' name='email' />
                </div>

                <div className='input-formulario'>
                    <label htmlFor="">Confirma tu email</label>
                    <input onChange={((e)=>setValidateEmail(e.target.value))} type="email" placeholder='Email' name='email' />
                </div>

                <button className='boton-formulario' type='submit' disabled={validateEmail !== user.email} >Genera tu orden de compra</button>

            </form>
        </div>
    )
}

export default Checkout
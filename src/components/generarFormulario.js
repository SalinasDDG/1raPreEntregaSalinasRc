import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {nombre, telefono, email}
        
        onConfirm(userData)
    }
    return (
        <div id="divFormulario">
        <form onSubmit={handleConfirm}>
            <Form.Label htmlFor="inputPassword5"></Form.Label>
            <div>
                <Form.Text id="passwordHelpBlock" muted>
                    Por favor complete el siguiente formulario para generar una orden de compra:
            </Form.Text>
            </div>

            <label>Nombre</label>
            <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                value={nombre}
                onChange={({target}) => setNombre(target.value)}
            />
            <label>Telefono</label>
                <Form.Control
                type="number"
                aria-describedby="passwordHelpBlock"
                value={telefono}
                onChange={({target}) => setTelefono(target.value)}
            />
            <label>Email</label>
            <Form.Control
                type="email"
                aria-describedby="passwordHelpBlock"
                value={email}
                onChange={({target}) => setEmail(target.value)}
            />
                <div>
                <Button type="submit">Crear Orden</Button>
                </div>
        </form>
    </div>
    )

}

export default CheckoutForm;
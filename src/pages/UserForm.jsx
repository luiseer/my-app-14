import { useState, useEffect } from "react"
import { Error } from "../components"


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [passWord, setPassWord] = useState("")
    const [error, setError] = useState(false)


    //generar id
    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //validacion del formulario
        if ([firstName, email, lastName, passWord].includes('')) {
            setError(true)
        } else {
            setError(false)

            //construir objeto User

            const objetoUser = {
                email,
                firstName,
                lastName,
                passWord,

            }



            //reiniciar el form

            setEmail('')
            setFirstName('')
            setLastName('')
            setPassWord('')
        }

    }

    return (

        <div>
            <h2>Welcome & Enjoy</h2>
            <p>Add new User</p>

            <form onSubmit={handleSubmit}>

                {error && <Error
                    mensaje='Todos los Campos son obligatorios'
                />
                }

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name=""
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name=""
                        id="firstName"
                        placeholder="first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name=""
                        id="lastName"
                        placeholder="last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="passWord">Pasword</label>
                    <input
                        type="password"
                        name=""
                        id="passWord"
                        placeholder="password"
                        value={passWord}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario
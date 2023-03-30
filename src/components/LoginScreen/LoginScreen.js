import './LoginScreen.scss'


const LoginScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <imput
                        type={'email'}
                        className="form-control my-3"
                        placeholder='Tu email'
                    />

                    <imput
                        type={'text'}
                        className="form-control my-3"
                        placeholder='Contraseña'
                    />

                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
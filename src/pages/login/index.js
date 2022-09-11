import { useContext } from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle'

export const Login = () => {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)
    async function loginGoogle() {
        await signInGoogle();
    }
    return (
        <>
            {signed?(
                <Navigate to="/home"></Navigate>
            ) : (
                <button onClick={() => signInGoogle()}>Logar com google</button>
            )}
        </>
    )
}

export default Login
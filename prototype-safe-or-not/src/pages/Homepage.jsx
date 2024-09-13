import { useNavigate } from "react-router-dom"

const Homepage = ({token}) => {
    let navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>Welcome back, {token.user.user_metadata.full_name}
        <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Homepage
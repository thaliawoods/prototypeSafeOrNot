import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import './Logout.css'; 

const Logout = ({ setToken }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('token');
    setToken(false);
    navigate('/');
  }

  return (
    <div className="form-container">
      <Navbar />
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

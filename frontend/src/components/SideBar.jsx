import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/logo.png";

const Side = () => {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        navigate("/login");
    };
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Stack Club" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Side;

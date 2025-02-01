import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/logo.png";

const Side = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Stack Club" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Side;

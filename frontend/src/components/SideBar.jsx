import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/logo.png";

const Side = () => {
    return (
        <div className="sideBar-container">
            <div className="logo">
                <img src={logo} alt="Full Stack Club" />
            </div>

            <div className="sign-out"></div>
            <CustomButton>Sair</CustomButton>
        </div>
    );
};

export default Side;

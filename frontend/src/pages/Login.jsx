import CustomButton from "../components/CustomButton";
import "./Login.scss";

import logo from "../assets/images/logo.png";

const login = () => {
    return (
        <div>
            <img src={logo} alt="Full Stack Club" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>Custom
            </div>
        </div>
    );
};

export default login;

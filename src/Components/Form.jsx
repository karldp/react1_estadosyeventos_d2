import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Form = ({setAlert}) => {
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const isValidEmail = (email) => {     /* this is to validate the email if it has @ */
        return email.includes("@");
    }


    const confirmData = (e) => {
        e.preventDefault()

        const { name, email, password, confirmPassword } = FormData;

        if (!name || !email || !password || !confirmPassword) {
            setAlert({
                error: true,
                msg: "Please fill out all required fields.",
                color: "",
            });
            return;
        }

        if (!isValidEmail(email)) {
            setAlert({
                error: true,
                msg: "Please provide a valid email address.",
                color: "secondary",
            });
            return;
        }

        if (password !== confirmPassword) {
            setAlert({
                error: true,
                msg: "Passwords do not match. Please try again.",
                color: "danger",
            });
            return;
        }

        setAlert({
            error: false,
            msg: "Congrats! Your account setup is complete.",
            color: "success",
        });

        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    }

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }

    return (
        <form className="form" onSubmit={confirmData} noValidate> {/* I used noValidate to be able to show the alerts without the interference of the browsers */}
            <div>
                <input
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="Name"
                    onChange={handleChange}
                    value={FormData.name}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="youremail@example.com"
                    onChange={handleChange}
                    value={FormData.email}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="Password"
                    onChange={handleChange}
                    value={FormData.password}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="confirmPassword"
                    className="input-field"
                    placeholder="Confirm your Password"
                    onChange={handleChange}
                    value={FormData.confirmPassword}
                />
            </div>
            <div className="button-container">
                <Button className="button-login" type="submit" variant="success" size="sm">Log in</Button>
            </div>
        </form>
    )
}

export default Form



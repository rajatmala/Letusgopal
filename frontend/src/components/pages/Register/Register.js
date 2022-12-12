import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () =>
{
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        state: ''
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regUser = {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
            state: user.state,
        };
        
        const logUser = {
            email: user.email,
            password: user.password
        }

        await axios({url: "/register", data:regUser, method:"post"}).then((res)=>{
            if(res.data.error != null){
                alert(res.data.error);
            }else{
                alert(res.data.message);
            }
        }).catch((err)=>{
            console.log(err);
        });

        await axios({url: "/loginUser", data:logUser, method:"post"}).then((res)=>{
            if(res.data.error != null){
                alert(res.data.error);
            }else{
                localStorage.setItem("token", res.data.token);
                navigate("/profile");
            }
        }).catch((err)=>{
            console.log(err);
        });

        setUser({
            name: '',
            email: '',
            password: '',
            state: '',
            username: ''
        });
        
    }

    return (
        <>
            <div
                className="container-fluid bg-registration py-5"
                style={ { margin: "90px 0" } }
            >
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5
                                    className="text-primary text-uppercase mb-3"
                                    style={ { letterSpacing: 5 } }
                                >
                                    Need Any Storage
                                </h5>
                                <h1 className="text-white">10% Off For New Comers</h1>
                            </div>
                            <p className="text-white">
                                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                                sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                            </p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2">
                                    <i className="fa fa-check text-primary mr-3" />
                                    Labore eos amet dolor amet diam
                                </li>
                                <li className="py-2">
                                    <i className="fa fa-check text-primary mr-3" />
                                    Etsea et sit dolor amet ipsum
                                </li>
                                <li className="py-2">
                                    <i className="fa fa-check text-primary mr-3" />
                                    Diam dolor diam elitripsum vero.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Sign Up Now</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                onChange={handleChange}
                                                type="text"
                                                className="form-control border-0 p-4"
                                                placeholder="Your name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                onChange={handleChange}
                                                type="email"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="username"
                                                onChange={handleChange}
                                                type="text"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Username"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="password"
                                                onChange={handleChange}
                                                type="password"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Password"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="state"
                                                onChange={handleChange}
                                                className="custom-select border-0 px-4"
                                                style={ { height: 47 } }
                                            >
                                                <option selected="">Select State</option>
                                                <option value={ "Delhi" }>Delhi</option>
                                                <option value={ "Gujurat" }>Gujarat</option>
                                                <option value={ "Maharashtra" }>Maharashtra</option>
                                            </select>
                                        </div>
                                        <div className="text-right">
                                            <button
                                                className="btn btn-dark btn-block border-0 py-3 mb-3"
                                                onClick={handleSubmit}
                                                type="submit"
                                            >
                                                Sign Up Now
                                            </button>
                                            <Link to="/login" className="bg-light mt-1">Regular User Login Now</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;

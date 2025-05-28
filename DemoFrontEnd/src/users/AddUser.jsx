    import axios from "axios";
    import React, { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    const AddUser = () => {
    // chuyển hướng sau khi submit
    const navigate = useNavigate();
    // lưu trang thái đối tượng
    const [user, setUser] = useState({
        username: "",
        name: "",
        email: "",
    });
    const { username, name, email } = user;
    // Cập nhật dữ liệu khi người dùng nhập

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Gửi dữ liệu khi submit
    const onSubmit = async (e) => {
        console.log("Sending user:", user);
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };
    return (
        <div className="container">
        <div className="row">
            <form action="" onSubmit={onSubmit}>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
                <h2 className="text-center m-4">Register User </h2>
                <div className="mb-3">
                <label htmlFor="UserName" className="form-label">
                    UserName
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    id=""
                    value={username}
                    onChange={onInputChange}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    id=""
                    value={name}
                    onChange={onInputChange}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    id=""
                    value={email}
                    onChange={onInputChange}
                />
                </div>
                <button type="submit" className="btn btn-outline-primary ">
                Submit
                </button>
                <Link type="button" className="btn btn-outline-danger mx-2" to="/">
                Cancel
                </Link>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default AddUser;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy id từ URL

  const [user, setUser] = useState({
    userName: "",
    name: "",
    email: "",
  });
  const { username, name, email } = user;
  // Cập nhật dữ liệu khi người dùng nhập

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, user); // Gửi PUT request
      navigate("/");
    } catch (error) {
      console.error("Lỗi update user:", error);
    }
  };
  // in ra input
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("loi", error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <form action="" onSubmit={onSubmit}>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
            <h2 className="text-center m-4">Edit User </h2>
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
                value={user.username || ""}
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
                value={user.name || ""}
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
                value={user.email || ""}
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

export default EditUser;

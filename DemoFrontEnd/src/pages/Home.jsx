import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [listUser, setListUser] = useState([]);
  const { id } = useParams();

  const deleteUser = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa người dùng này không?")) {
      try {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadListUser();
      } catch (error) {
        console.error("Lỗi khi xóa user:", error);
      }
    }
  };

  useEffect(() => {
    // goi API qua axios
    //cách 1:
    // axios
    //   .get("http://localhost:8080/users")
    //   .then((response) => {
    //     setListUser(response.data)
    //   })
    //   .catch((error) => {
    //     console.error("looi goi api");
    //   });

    loadListUser();
  }, []);

  const loadListUser = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setListUser(result.data);
    } catch (error) {
      console.error("loi", error);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

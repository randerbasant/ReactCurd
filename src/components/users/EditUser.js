import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h2 className="text-center py-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
                <label className="form-label" htmlFor="form3Example1">
                  Name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example2"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
                <label className="form-label" htmlFor="form3Example2">
                  User name
                </label>
              </div>
            </div>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form3Example4"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
            <label className="form-label" htmlFor="form3Example4">
              Phone Number
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form3Example4"
              className="form-control"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
            <label className="form-label" htmlFor="form3Example4">
              Website
            </label>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-warning btn-block mb-4">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

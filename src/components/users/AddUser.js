import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const {name, username, email, phone, website} = user;

  const onInputChange = e => {
      setUser({...user, [e.target.name] : e.target.value});
  }

  const onSubmit = async e => {
      e.preventDefault();
      console.log(user);
      await axios.post("http://localhost:3003/users", user);
      history.push("/");

  }
  return (
    <div className="container">
      <div className="py-4">
        <h2 className="text-center py-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
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
                  onChange={e => onInputChange(e)}
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
                  onChange={e => onInputChange(e)}
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
              onChange={e => onInputChange(e)}
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
              onChange={e => onInputChange(e)}
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
              onChange={e => onInputChange(e)}
            />
            <label className="form-label" htmlFor="form3Example4">
              Website
            </label>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

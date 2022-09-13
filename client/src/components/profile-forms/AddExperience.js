import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    company: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const setFormField = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  return (
    <section>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <input
            onChange={(e) => setFormField(e)}
            type="text"
            placeholder="* Job Title"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setFormField(e)}
            type="text"
            placeholder="* Company"
            name="company"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setFormField(e)}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input onChange={(e) => setFormField(e)} type="date" name="from" />
        </div>
        <div className="form-group">
          <label htmlFor="current">
            <input
              onChange={(e) => setFormField(e)}
              type="checkbox"
              id="current"
              name="current"
              value=""
            />{" "}
            Current Job
          </label>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input onChange={(e) => setFormField(e)} type="date" name="to" />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => setFormField(e)}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);

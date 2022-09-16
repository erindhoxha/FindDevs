import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import Alert from "../layout/Alert";

const AddEducation = (props) => {
  let navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: true,
    description: "",
  });

  const { school, degree, fieldofstudy, from, to, current, description } =
    formFields;

  const setFormField = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addEducation(formFields, navigate);
  };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  return (
    <section>
      <Alert />
      <h1 className="large text-primary">Add Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <input
            onChange={(e) => setFormField(e)}
            type="text"
            placeholder="* School"
            name="school"
            required
            value={school}
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setFormField(e)}
            type="text"
            placeholder="* Degree"
            name="degree"
            required
            value={degree}
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setFormField(e)}
            type="text"
            placeholder="Field of study"
            value={fieldofstudy}
            name="fieldofstudy"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            onChange={(e) => setFormField(e)}
            type="date"
            name="from"
            value={from}
          />
        </div>
        <div className="form-group">
          <label htmlFor="current">
            <input
              type="checkbox"
              id="current"
              name="current"
              value={current}
              onChange={(e) => {
                setFormFields({ ...formFields, current: !current });
              }}
              checked={current}
            />{" "}
            Current Job
          </label>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            disabled={current ? "disabled" : ""}
            value={to}
            onChange={(e) => setFormField(e)}
            type="date"
            name="to"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => setFormField(e)}
            name="description"
            cols="30"
            value={description}
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);

import React, { useState } from "react";

function FormComponent() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    // Name validation
    if (!formValues.name) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }

    // Phone number validation
    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = "Phone number is invalid";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the defult behaviour (page reload)
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    alert(`Submit ${formValues.name}`);
  };

  // Handle form submission if there are no errors
  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      //object keys return array of errors in form and checking its lenght is zero or not
      // Form submission logic
      console.log("Form submitted successfully", formValues);
    }
  }, [formErrors, isSubmitting, formValues]);

  return (
    <div>
      <h2>Form</h2>
      //onSubmit is event
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && (
            <span style={{ color: "red" }}>{formErrors.name}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span style={{ color: "red" }}>{formErrors.email}</span>
          )}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {formErrors.phone && (
            <span style={{ color: "red" }}>{formErrors.phone}</span>
          )}
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
          />
          {formErrors.date && (
            <span style={{ color: "red" }}>{formErrors.date}</span>
          )}
        </div>
        <div>
          <label>Country</label>
          <select
            name="country"
            value={formValues.country}
            onChange={handleChange}
          >
            <option value=""> Select a Country</option>
            <option value="India">India</option>
            <option value="USA"> USA</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;

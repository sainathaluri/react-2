import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = ({ employeeId }) => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/employees/${employeeId}`);
        setEmployee(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!employee) {
    return <div>No employee found</div>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <p><strong>ID:</strong> {employee.employeeID}</p>
      <p><strong>First Name:</strong> {employee.firstName}</p>
      <p><strong>Middle Name:</strong> {employee.middleName}</p>
      <p><strong>Last Name:</strong> {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.emailID}</p>
      <p><strong>College of Graduation:</strong> {employee.clgOfGrad}</p>
      <p><strong>Phone Number:</strong> {employee.phoneNo}</p>
      <p><strong>Date of Birth:</strong> {employee.dob}</p>
      <p><strong>On Bench:</strong> {employee.onBench}</p>
      <p><strong>Company:</strong> {employee.company}</p>
      <p><strong>Role:</strong> {employee.securityGroup}</p>
    </div>
  );
};

export default Employee;

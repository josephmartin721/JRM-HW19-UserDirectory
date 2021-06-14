import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">This employee directory was created using React.</p>
      <hr className="my-4" />
      <p>
        An employee or manager benefits greatly from being able to view
        non-sensitive data about other employees.
      </p>
    </div>
  );
};

export default Jumbotron;
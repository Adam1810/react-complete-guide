import React from "react";

const Person = (props) => {
  return (
    <p>
      This is a Person and I am {props.name} and {props.age} years old!
    </p>
  );
};

export default Person;

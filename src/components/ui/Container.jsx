import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <>
      <div className={`container mx-auto px-5 lg:px-8 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;

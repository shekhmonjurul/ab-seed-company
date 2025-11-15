import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-[1660px] mx-auto tablet:px-4 laptop:px-8">
      {children}
    </div>
  );
};

export default Container;

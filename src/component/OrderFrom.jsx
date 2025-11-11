import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from '../container/Container';

const OrderFrom = () => {
  const [hide, setHide] = useState(false);

  const handelcilick = () => {
    setHide(!hide);
  };

  return (
    <div className="flex justify-center w-full h-full my-4">
      <Container>
        <StyledWrapper>
          <form className="form ">
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]">
                45%
              </div>
            </div>
            <p className="title">Order From </p>
            <p className="message">
              আপনি নিশ্চিন্তে অর্ডার করুন, কিছু জানার থাকলে অথবা অর্ডার পরিবর্তন
              করার প্রয়োজন হলে আমরা আপনাকে কল দিয়ে বিস্তারিত আলোচনা করে সমাধান
              করবো।{' '}
            </p>
            <label>
              <input
                required
                placeholder="Your Name*......"
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required
                placeholder="Your Address*......"
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required
                placeholder="Your Phone Number*........."
                type="text"
                className="input"
              />
            </label>
            <label>
              <div className="flex items-center justify-between">
                <span>Show All Order</span>
                <button type="button" onClick={handelcilick}>
                  {' '}
                  {hide ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </button>
              </div>
              {hide && (
                <div className="flex items-center justify-around">
                  <img
                    src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                    alt="prodect imge"
                    className="w-[50px] h-[50px]"
                  />
                  <span> Product name</span>
                </div>
              )}
            </label>
            <button className="submit">Submit</button>
          </form>
        </StyledWrapper>
      </Container>
    </div>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    color: black;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  @media (max-width: 600px) {
    .form {
      width: 100%;
    }
  }
`;

export default OrderFrom;

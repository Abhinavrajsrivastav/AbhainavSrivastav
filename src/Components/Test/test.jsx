import React from 'react';
import './test.css';

const Test = () => {
  return (
    <div className="wrapper">
      <input className="hidden-trigger" id="toogle" type="checkbox" />
      <label className="circle" htmlFor="toogle">
        <svg viewBox="0 0 48 48" version="1.1" xmlSpace="preserve" height="48" width="48" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="svg">
          <image height="48" width="48"></image>
        </svg>
      </label>

      <div className="subs">
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub1" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub1"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub2" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub2"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub3" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub3"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub4" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub4"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub5" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub5"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub6" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub6"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub7" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub7"></label>
        </button>
        <button className="sub-circle">
          <input className="hidden-sub-trigger" id="sub8" type="radio" name="sub-circle" value="1" />
          <label htmlFor="sub8"></label>
        </button>
      </div>
    </div>
  );
};

export default Test;

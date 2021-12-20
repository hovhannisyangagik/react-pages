import React from "react";

const Time = () => {
  return (
    <div className="time-container">
      <div className="input">
        <label for="time">Select time period</label>
        <select name="time" id="time">
          <option value="maket">3Q 2021</option>
        </select>
      </div>

      <div className="time-blocks">
        <div className="first-cube">
          <p className="money">$5634</p>
          <p className="total">Total</p>
        </div>
        <div className="second-cube">
          <p className="money">$5634</p>
          <p className="total">Returns</p>
        </div>
        <div className="third-cube">
          <p className="money">$5634</p>
          <p className="total">Max Drawdown</p>
        </div>
        <div className="forth-cube">
          <p className="money">$5634</p>
          <p className="total">Sharpe</p>
        </div>
        <div className="fivth-cube">
          <p className="money">$5634</p>
          <p className="total">Sortino</p>
        </div>
        <div className="sixth-cube">
          <p className="money">$5634</p>
          <p className="total">Voatility</p>
        </div>
      </div>
    </div>
  );
};

export default Time;

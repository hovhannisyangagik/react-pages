import React from "react";
import btc from "../../assets/img/btc.png";
import sol from "../../assets/img/sol.png";
import eth from "../../assets/img/eth.png";
import ray from "../../assets/img/ray.png";

const Fund = () => {
  return (
    <div className="fund-container">
      <div className="top-fund-container">
        <div className="fund-allocations">
          <h3>Fund Allocations</h3>
        </div>
        <div className="assets">
          <p>
            12
            <br />
            Assets
          </p>
        </div>
      </div>
      <div className="crypto-frame">
        <div className="crypto-money">
          <div className="crypto-inner">
            <div className="image">
              <img src={btc} alt="bitcoin" />
            </div>
            <div className="name-procent">
              <div className="name">
                <p>BTC</p>
              </div>
              <div className="procent">
                <div className="procent-line"></div>
                <p>55%</p>
              </div>
            </div>
          </div>
          <div className="money">
            <p>$41,000</p>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
      <div className="crypto-frame">
        <div className="crypto-money">
          <div className="crypto-inner">
            <div className="image">
              <img src={sol} alt="bitcoin" />
            </div>
            <div className="name-procent">
              <div className="name">
                <p>SOL</p>
              </div>
              <div className="procent">
                <div className="procent-line-second"></div>
                <p>55%</p>
              </div>
            </div>
          </div>
          <div className="money">
            <p>$41,000</p>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
      <div className="crypto-frame">
        <div className="crypto-money">
          <div className="crypto-inner">
            <div className="image">
              <img src={eth} alt="bitcoin" />
            </div>
            <div className="name-procent">
              <div className="name">
                <p>ETH PERP</p>
              </div>
              <div className="procent">
                <div className="procent-line-third"></div>
                <p>55%</p>
              </div>
            </div>
          </div>
          <div className="money">
            <p>$41,000</p>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
      <div className="crypto-frame">
        <div className="crypto-money">
          <div className="crypto-inner">
            <div className="image">
              <img src={btc} alt="bitcoin" />
            </div>
            <div className="name-procent">
              <div className="name">
                <p>BTC Perp</p>
              </div>
              <div className="procent">
                <div className="procent-line-forth"></div>
                <p>55%</p>
              </div>
            </div>
          </div>
          <div className="money">
            <p>$41,000</p>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
      <div className="crypto-frame">
        <div className="crypto-money">
          <div className="crypto-inner">
            <div className="image">
              <img src={ray} alt="bitcoin" />
            </div>
            <div className="name-procent">
              <div className="name">
                <p>RAY</p>
              </div>
              <div className="procent">
                <div className="procent-line-fivth"></div>
                <p>55%</p>
              </div>
            </div>
          </div>
          <div className="money">
            <p>$41,000</p>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
    </div>
  );
};

export default Fund;

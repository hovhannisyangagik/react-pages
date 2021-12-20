import React from "react";
import girlImg from "../../assets/img/girl.png";
import twit from "../../assets/img/twit.png";
import discord from "../../assets/img/discord.png";
import telegram from "../../assets/img/telegram.png";
import copy from "../../assets/img/copy.png";
import readmore from "../../assets/img/readmore.png";

const Manager = () => {
  return (
    <div className="manager-container">
      <div className="title">
        <h3>Manager</h3>
      </div>
      <div className="blocks">
        <div className="connector">
          <div className="left-side">
            <div className="left-above">
              <div className="about-block">
                <div className="image">
                  <div className="img">
                    <img src={girlImg} alt="about picture" />
                  </div>
                </div>
                <div className="name-last-seen">
                  <div className="name">
                    <p>lisa Doe</p>
                  </div>
                  <div className="last-seen">
                    <p>Last Seen 2:30 Am</p>
                  </div>
                </div>
              </div>
              <div className="social-medias">
                <img src={discord} alt="discord" />
                <img src={telegram} alt="telegram" />
                <img src={twit} alt="twit" />
              </div>
            </div>
            <div className="fund-adress">
              <div className="address">
                <p>Fund Address</p>
              </div>
              <div className="url">
                <p>aTnxFjstdgfB...........DFVGE3</p>
                <img src={copy} alt="copy" />
              </div>
            </div>
            <div className="fund-date">
              <div className="date">
                <p>Fund Inception Date</p>
              </div>
              <div className="date-number">
                <p>23 Jun 2021</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-blocks">
              <div className="first-one-block">
                <div className="num">
                  <p>23</p>
                </div>
                <div className="name">
                  <p>No of Active Investors</p>
                </div>
              </div>
              <div className="second-one-block">
                <div className="num">
                  <p>23</p>
                </div>
                <div className="name">
                  <p>No of Active Investors</p>
                </div>
              </div>
              <div className="third-one-block">
                <div className="num">
                  <p>23</p>
                </div>
                <div className="name">
                  <p>No of Active Investors</p>
                </div>
              </div>
              <div className="forth-one-block">
                <div className="num">
                  <p>23</p>
                </div>
                <div className="name">
                  <p>No of Active Investors</p>
                </div>
              </div>
              <div className="fivth-one-block">
                <div className="num">
                  <p>23</p>
                </div>
                <div className="name">
                  <p>No of Active Investors</p>
                </div>
              </div>
              <div className="sixth-one-block">
                <div className="num">
                  <p>23</p>
                </div>
                <div className="name">
                  <p>No of Active Investors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-block">
          <div className="title">
            <p>About Manager</p>
          </div>
          <div className="information-block">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis dolorum fuga. Et harum quidem rerum facilis..
            </p>
          </div>
          <div className="readmore">
            <a href="#">Read More</a>
            <img src={readmore} alt="readmore" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;

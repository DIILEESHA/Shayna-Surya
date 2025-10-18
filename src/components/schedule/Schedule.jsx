import "./c.css";

const Schedule = () => {
  return (
    <div className="schedule_container">
      <h2 className="schedule_title">Sri Lanka Wedding Journey</h2>

      <div className="schedule_flex">
        <div className="schedule_sm cd"></div>
        {/* <div className="schedule_sm line"></div> */}
        <div className="schedule_sm ">
          <div className="circle"></div>
          <div className="schedule_card">
            <div className="s_sm">
              <h2 className="sm_title">WELCOME NIGHT</h2>
              <p className="sm_main_tile">
                @
                <a
                  style={{ color: "#fff" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/8A9dUTMvwHB5i9Ab9"
                  rel="noopener noreferrer"
                >
                  CRUST AHANGAMA (TBC)
                </a>
                , 5:00 PM - 9:00 PM
              </p>
              <p className="other_p">
                Date: Friday, May 15, 2026 <br />
                Dress Code: Tropical Chic <br />
                Join us for a warm welcome evening to kick off the celebrations
                with tropical drinks, relaxed vibes, and good company by the
                beach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* two */}
      <div className="schedule_flex two">
        <div className="schedule_sm bh">
          <div className="circle2"></div>

          <div className="schedule_card bhh">
            <div className="s_sm">
              <h2 className="sm_title fcc">WEDDING DAY</h2>
              <p className="fcc">WEDDING DAY, 4:30 PM - 10:30 PM</p>
              <p className="gh_p">
                Please gather at
                <a
                  href="https://maps.app.goo.gl/BZuUbDrr3e1QWabQ8"
                  style={{ color: "#fff", margin: "0px 3px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Weligama Bay Marriott Resort and Spa</b>
                </a>
                on Saturday, May 16, 2026. The ceremony begins at 4:30 PM,
                followed by dinner, drinks, and dancing by the ocean. <br />
                Dress Code: Beach Formal
              </p>
            </div>
          </div>
        </div>

        <div className="schedule_sm cd"></div>
      </div>

      {/* three */}
      <div className="schedule_flex">
        <div className="schedule_sm cd"></div>

        <div className="schedule_sm">
          <div className="circle"></div>

          <div className="schedule_card">
            <div className="s_sm">
              <h2 className="sm_title">AFTER-PARTY</h2>
              <p className="sm_main_tile">
                @
                <a
                  style={{ color: "#fff" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/UPBut1kMzXcj6RUN6"
                  rel="noopener noreferrer"
                >
                  TRAX AHANGAMA
                </a>
                , 11:00 PM onwards
              </p>
              <p className="other_p">
                Date: Saturday, May 16, 2026 <br />
                Continue the celebration at Trax Ahangama for our lively
                after-party. Expect music, cocktails, and good vibes as we dance
                late into the night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

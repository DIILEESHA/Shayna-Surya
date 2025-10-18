import "./c.css";

const Scheduler = () => {
  return (
    <div className="schedule_container palsi">
      <h2 className="schedule_title pakar"> Dubai Wedding Journey</h2>

      {/* Welcome Night */}
      <div className="schedule_flex note">
        <div className="schedule_sm cd"></div>
        <div className="schedule_sm">
          <div className="circle"></div>
          <div className="schedule_card">
            <div className="s_sm">
              <h2 className="sm_title pahara">WELCOME NIGHT</h2>
              <p className="sm_main_tile">
                @
                <a
                  className="pahara"
                  //   style={{ color: "#fff" }}
                  target="_blank"
                  href="#"
                  rel="noopener noreferrer"
                >
                  TBD
                </a>
                , Time: TBD
              </p>
              <p className="other_p">
                Date: Thursday, May 07, 2026 <br />
                Dress Code: Festive Indian <br />
                Join us for a warm welcome evening to kick off the celebrations
                with joyful vibes, laughter, and festive spirit in Dubai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hindu Wedding Ceremony */}
      <div className="schedule_flex note two">
        <div className="schedule_sm bh">
          <div className="circle2"></div>
          <div className="schedule_card bhh">
            <div className="s_sm">
              <h2 className="sm_title fcc pahara">HINDU WEDDING CEREMONY</h2>
              <p className="fcc">Evening (TBD)</p>
              <p className="gh_p">
                Please gather at
                <a
                  href="https://maps.app.goo.gl/"
                  className="pahara"
                  style={{ color: "", margin: "0px 3px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>
                    Jaitly Home - 48th Street, Villa 4, Al Jaifliya, Dubai UAE
                  </b>
                </a>
                on Friday, May 08, 2026. The ceremony will take place in the
                evening, followed by a traditional Indian feast and
                celebrations.
                <br />
                Dress Code: Traditional Indian
              </p>
            </div>
          </div>
        </div>
        <div className="schedule_sm cd"></div>
      </div>

      {/* Wedding Reception */}
      <div className="schedule_flex note">
        <div className="schedule_sm cd"></div>
        <div className="schedule_sm">
          <div className="circle"></div>
          <div className="schedule_card">
            <div className="s_sm">
              <h2 className="sm_title pahara">WEDDING RECEPTION</h2>
              <p className="sm_main_tile">
                @
                <a
                  className="pahara"
                  //   style={{ color: "#fff" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/"
                  rel="noopener noreferrer"
                >
                  Taj Exotica Resort & Spa, The Palm, Dubai UAE
                </a>
                , Evening (TBD)
              </p>
              <p className="other_p">
                Date: Saturday, May 09, 2026 <br />
                Dress Code: Glamorous Indian <br />
                Celebrate our union in grand style at the beautiful Taj Exotica
                Resort with dinner, music, and a glamorous evening by the Palm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;

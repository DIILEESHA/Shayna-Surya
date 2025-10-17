import "./gift.css";

const Location = () => {
  return (
    <div
      className="location_grid gift"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="location_subs">
        <p className="l_title" style={{ textAlign: "center", width: "100%" }}>
          {" "}
          Gift Suggestion
        </p>
        <div className="n">
          <img
            src="https://i.imgur.com/UVwDt2S.png"
            alt="flightimage"
            className="p_img nallas"
          />
        </div>
      </div>
      <div className="location_sub">
        <div className="l_line"></div>

        {/* fourth */}
        <div className="location_card">
          <div className="card_gri">
            <div className="card_sub_"></div>
            <div className="card_sub_">
              <p className="ll_p" style={{width:"100%",textAlign:"center"}}>
                <b>BE36 0018 8447 5681</b>
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>
      </div>
    </div>
  );
};

export default Location;

import "./l.css";
import { Modal } from "antd";
import { useState } from "react";
import travelPdf from "../../assets/travel.pdf"; // ensure path is correct

const Location = () => {
  const [isThingsModalVisible, setIsThingsModalVisible] = useState(false);
  const [isFaqModalVisible, setIsFaqModalVisible] = useState(false);

  const showThingsModal = () => setIsThingsModalVisible(true);
  const showFaqModal = () => setIsFaqModalVisible(true);
  const handleCancel = () => {
    setIsThingsModalVisible(false);
    setIsFaqModalVisible(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = travelPdf;
    link.download = "travel-info.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="location_grid">
      <div className="location_sub">
        <p className="l_title">Travel & Stay</p>
        <img
          src="https://i.imgur.com/Sws8lXR.png"
          alt="flightimage"
          className="p_img"
        />
      </div>

      <div className="location_sub">
        {/* 1. Airport Info */}
        <div className="location_card">
          <div className="l_line"></div>
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">AIRPORT</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Colombo Bandaranaike International Airport (CMB) <br />
                The hotel is about a 2.5-hour drive from the airport, with a
                rest stop halfway for food and washrooms.
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>

        {/* 2. Hotel Info */}
        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">HOTEL</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Weligama Bay Marriott Resort & Spa <br />
                770 Matara Road Pelana, Weligama, Sri Lanka 81700 <br />
                <br />
                We have reserved a block of rooms at the Marriott. Please use
                the provided link to secure your room.
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>

        {/* 3. Events */}
        {/* <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">EVENT DETAILS</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                <strong>Welcome Night</strong> <br />
                Crust Ahangama (TBC) <br />
                Friday, May 15, 2026 | 5:00 PM - 9:00 PM <br />
                Dress Code: Tropical Chic <br />
                <br />
                <strong>Wedding Day</strong> <br />
                Weligama Bay Marriott Resort and Spa <br />
                Saturday, May 16, 2026 | 4:30 PM - 10:30 PM <br />
                Dress Code: Beach Formal <br />
                <br />
                <strong>After Party</strong> <br />
                Trax Ahangama <br />
                May 16, 2026 | 11:00 PM onwards
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div> */}

        {/* 4. Things to Do */}
        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">THINGS TO DO</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Explore nearby attractions such as Galle Fort, Nomad Café, The
                Doctor’s House, and more. <br />
                {/* <br /> */}
              </p>
              <div className="kadiya">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showThingsModal();
                  }}
                  className="l_link pahara"
                >
                  View Full List
                </a>
              </div>
            </div>
          </div>
          <div className="l_line"></div>
        </div>

        {/* 5. FAQ */}
        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">FAQ</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Learn more about weather, travel, currency, and local culture.{" "}
                <br />
              </p>

              <div className="kadiya">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showFaqModal();
                  }}
                  className="l_link pahara"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
          <div className="l_line"></div>
        </div>
      </div>

      {/* ===== MODAL: Things to Do ===== */}
      <Modal
        title={
          <div className="modal_header">
            <h2 className="modal_title">Things to Do in Weligama</h2>
            <p className="modal_subtitle">
              Discover the tropical charm and local favorites
            </p>
          </div>
        }
        open={isThingsModalVisible}
        onCancel={handleCancel}
        footer={[
          <button
            key="close"
            onClick={handleCancel}
            className="modal_close_btn"
          >
            Close
          </button>,
        ]}
        width={800}
        centered
        bodyStyle={{
          background: "#fafafa",
          borderRadius: "10px",
          padding: "25px 30px",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <div className="things_list">
          <div className="things_item">
            <h3 className="things_item_title">
              🏰 Galle Fort (35 km car ride)
            </h3>
            <p className="things_item_p">
              A UNESCO World Heritage site blending Dutch colonial architecture,
              cobblestone streets, and ocean views within a 17th-century seaside
              fortress.
            </p>
          </div>

          <div className="things_item">
            <h3 className="things_item_title">☕ Nomad Café (5-minute walk)</h3>
            <p className="things_item_p">
              A cozy café offering Western-style breakfast and lunch — perfect
              for relaxed mornings by the beach.
            </p>
          </div>

          <div className="things_item">
            <h3 className="things_item_title">
              🍹 The Doctor’s House (20-minute tuktuk ride)
            </h3>
            <p className="things_item_p">
              A 200-year-old former Dutch Ayurvedic hospital turned beachside
              restaurant and bar, serving great food, cocktails, and live music.
            </p>
          </div>

          <div className="things_item">
            <h3 className="things_item_title">
              🎶 Hotel De Uncle’s (15-minute tuktuk ride)
            </h3>
            <p className="things_item_p">
              A lively beach bar known for its local bites, craft cocktails, and
              nightly live music with an ocean breeze.
            </p>
          </div>

          <div className="things_item">
            <h3 className="things_item_title">💆 The Good Spa (5-min ride)</h3>
            <p className="things_item_p">
              A tropical paradise offering massages and body treatments. Mention{" "}
              <strong>Shayna & Surya</strong> when booking to receive{" "}
              <strong>20% off</strong>.{" "}
              <a
                href="https://goodspa.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="things_item_link"
              >
                Visit website
              </a>
            </p>
          </div>

          <div className="things_item">
            <h3 className="things_item_title">🏖️ Ice Weligama (2-min walk)</h3>
            <p className="things_item_p">
              Mention <strong>Shayna & Surya</strong> to enjoy complimentary
              access to the facilities.
            </p>
          </div>
        </div>
      </Modal>

      {/* ===== MODAL: FAQ ===== */}
      <Modal
        title={
          <div className="modal_header">
            <h2 className="modal_title">Frequently Asked Questions</h2>
            <p className="modal_subtitle">
              Quick answers to help you plan your trip smoothly
            </p>
          </div>
        }
        open={isFaqModalVisible}
        onCancel={handleCancel}
        footer={[
          <button
            key="close"
            onClick={handleCancel}
            className="modal_close_btn"
          >
            Close
          </button>,
        ]}
        width={800}
        centered
        bodyStyle={{
          background: "#fafafa",
          borderRadius: "10px",
          padding: "25px 30px",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <div className="faq_list">
          <div className="faq_item">
            <h3 className="faq_q">
              🌤️ What will the weather be like in the South of Sri Lanka?
            </h3>
            <p className="faq_a">
              It will be warm, around 30°C/86°F, so come prepared with
              lightweight clothing, sunscreen, and insect repellent.
            </p>
          </div>

          <div className="faq_item">
            <h3 className="faq_q">
              🩺 Are there health and safety tips we should be aware of?
            </h3>
            <p className="faq_a">
              Check online for recommended vaccinations from your country of
              origin. Bring common medications and health products such as
              mosquito repellent, sunscreen, hand sanitizer, and imodium (just
              in case). Also, do not drink tap water — always opt for sealed and
              bottled water.
            </p>
          </div>

          <div className="faq_item">
            <h3 className="faq_q">
              🚗 What is the best way to get from CMB airport to the hotel in
              Weligama?
            </h3>
            <p className="faq_a">
              The hotel is about a 2.5 hour car ride from the airport with a
              rest stop halfway through the journey for food and washrooms. We
              recommend pre-booking a car and driver to ensure a smooth journey.
            </p>
          </div>

          <div className="faq_item">
            <h3 className="faq_q">
              💰 Should I exchange money into the local currency?
            </h3>
            <p className="faq_a">
              We recommend converting cash to Sri Lankan Rupees at the airport.
              While some establishments accept credit cards or Apple Pay, you’ll
              need cash for tuktuk rides and smaller local purchases.
            </p>
          </div>

          <div className="faq_item">
            <h3 className="faq_q">👗 What is the dress code?</h3>
            <p className="faq_a">
              <strong>Welcome Night – Tropical Chic:</strong> Casual but
              polished; flowy dresses, maxi skirts, linen shirts, and
              lightweight pants. <br />
              <br />
              <strong>Wedding Day – Beach Formal:</strong> Formal but suited for
              a beach setting; formal dresses, saree, and linen/lightweight
              suits. Ties are optional.
            </p>
          </div>

          <div className="faq_item">
            <h3 className="faq_q">🍛 What is the local cuisine?</h3>
            <p className="faq_a">
              Sri Lankan cuisine is vibrant, aromatic, and full of bold flavors.
              Staples include rice and coconut, which form the base of most
              meals, accompanied by a variety of vegetable and meat curries.
              Tropical fruits are also abundant. We’re excited to share the
              flavors of Sri Lanka with you and will be serving local dishes on
              our wedding day.
            </p>
          </div>

          <div className="faq_item">
            <p className="faq_contact">
              ***If you have any other questions, please contact our Wedding
              Coordinator, <strong>Kalhari</strong>, at{" "}
              <a href="mailto:perera_kalhari@yahoo.com" className="faq_link">
                perera_kalhari@yahoo.com
              </a>{" "}
              or reach out to <strong>Shayna & Surya</strong> directly.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Location;

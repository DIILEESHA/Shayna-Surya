import {
  FaUtensils,
  FaCocktail,
  FaUmbrellaBeach,
  FaLightbulb,
} from "react-icons/fa";
import "./tips.css";

const Tips = () => {
  return (
    <div className="tips-container">
      <div className="tips-header">
        <h2 className="hh">TIPS</h2>
      </div>

      <div className="tips-grid">
        {/* Dinner Recommendations */}
        <div className="tip-card">
          <div className="tip-card-header">
            <FaUtensils className="category-icon" />
            <h3 className="ll_title">DINNER RECOMMENDATIONS</h3>
          </div>
          <div className="tip-card-content">
            <ul className="recommendation-list">
              <li className="ll_p">
                <strong>Magaya</strong> – Asian fusion, relaxed vibe
                (Parasporos)
              </li>
              <li className="ll_p">
                <strong>Tsachpinis</strong> – Traditional Greek, best spot in
                Naoussa (reservation needed)
              </li>
              <li className="ll_p">
                <strong>Arodo</strong> – Quiet, traditional fish restaurant
                (Parikia)
              </li>

              <li className="ll_p">
                <strong>Sunset Restaurant</strong> – Italian fusion (Antiparos)
              </li>
              <li className="ll_p">
                <strong>Yam</strong> – Belgian-owned, laid-back (Antiparos)
              </li>
              <li className="ll_p">
                <strong>To Balcony</strong> – Traditional Greek, group
                reservations recommended (Aliki)
              </li>
              <li className="ll_p">
                <strong>Taverna Klimataria</strong> – Cozy and classic
                (Antiparos)
              </li>
              <li className="ll_p">
                <strong>Cuere Rosso</strong> – pasta lovers (no pizza) – very
                cozy, but not suitable for very large groups (Parikia)
              </li>
              <li className="ll_p">
                <strong>Burger Street</strong> – Small burger spot (Parikia)
              </li>
              <li className="ll_p">
                <strong>Souvlaki cravings? (Greek grilled wraps) </strong> – Try
                Masete or Pepe Souvlaki (Parikia port) for takeaway - perfect
                for a quick bite
              </li>
            </ul>
          </div>
        </div>

        {/* Beach Bars */}
        <div className="tip-card">
          <div className="tip-card-header">
            <div className="cc">
              <div className="fo">
                <FaUmbrellaBeach className="category-icon" />
                <h3 className="ll_title">BEACH BARS</h3>
              </div>
              <div className="subtitle">(PARIKIA - POUNDA AREA)</div>
            </div>
          </div>
          <div className="tip-card-content">
            <ul className="recommendation-list">
              <li className="ll_p">
                <strong>Zazala</strong> – Our favorite! Relaxed vibe, sunset
                parties on Sundays. Free bar & seating area, free sunbeds after
                5 PM (perfect for sunset viewing). Great beach for sunbathing
                with your own towel and parasol.
              </li>
              <li className="ll_p">
                <strong>Cabana</strong> – More expensive but great view & music.
                Free bar area from 3-4 PM onwards with dj.
              </li>
              <li className="ll_p">
                <strong>Crios Beach</strong> – Good for lunch with big groups,
                think Ibiza vibes. Sunbed rental available but quite expensive.
              </li>
              <li className="ll_p">
                <strong>Marcello Beach</strong> – Peaceful beach with rentable
                beds
              </li>
              <li className="ll_p">
                <strong>Laris Beach Bar</strong> – Cheap, traditional vibe
              </li>
            </ul>
          </div>
        </div>

        {/* Bars & Nightlife */}
        <div className="tip-card">
          <div className="tip-card-header">
            <FaCocktail className="category-icon" />
            <h3 className="ll_title">BARS & NIGHTLIFE</h3>
          </div>
          <div className="tip-card-content">
            <div className="location-section">
              <h4 className="ll_p">Antiparos</h4>
              <div className="location-subtitle ll_title">
                (quieter in off-season, but still charming)
              </div>
              <ul className="recommendation-list">
                <li className="ll_p">
                  <strong>Tabula Rasa</strong> – Cocktails
                </li>
                <li className="ll_p">
                  <strong>Timemarine</strong> – Party spot (check Instagram!)
                </li>
                <li className="ll_p">
                  <strong>Sunset</strong> – As the name says…
                </li>

                <li className="ll_p">
                  <strong>Smile</strong> – Rooftop vibes
                </li>
                <li className="ll_p">
                  <strong>Citron Antiparos</strong> – Cocktails
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h4 className="ll_p">Naoussa</h4>
              <div className="location-subtitle">
                (still lively in September)
              </div>
              <ul className="recommendation-list">
                <li className="ll_p">
                  <strong>Agosta</strong> – Beautiful setting, dancing from 11
                  PM
                </li>
                <li className="ll_p">
                  <strong>Sousouro</strong> – Intimate & affordable cocktails
                </li>
                <li className="ll_p">
                  <strong>Kosmos</strong> – Dance bar
                </li>
                <li className="ll_p">
                  <strong>Linardo</strong> – Late-night club from 2 AM
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h4 className="ll_p">Parikia</h4>
              <ul className="recommendation-list">
                <li className="ll_p">
                  <strong>Zazala</strong> – Sunset drinks
                </li>
                <li className="ll_p">
                  <strong>Pirate Bar</strong> – Cool cocktail bar
                </li>
                <li className="ll_p">
                  <strong>La Diablita, Bebop, Dubliner</strong> – Young
                  crowd/club vibe
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;

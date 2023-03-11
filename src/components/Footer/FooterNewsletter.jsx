import React from "react";
import "./FooterNewsletter.css";
const FooterNewsletter = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer-newsletter">
      <div className="container">
        <div>
          <h3>Join Our Newsletter</h3>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form onSubmit={submitFormHandler}>
            <input type="email" required />
            <input type="submit" value="Subscrise" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;

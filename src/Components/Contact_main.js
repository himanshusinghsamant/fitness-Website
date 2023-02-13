import "./Contact_mainStyle.css";

import React from "react";

const Contact_main = () => {
  return (
    <div>
      <div className="map-section">
        <div className="contact-header-sec">
          <h1>CONTACT US FOR MORE INFO</h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.1928722325583!2d80.69439591433982!3d27.556524038712325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ed6f25d73a403%3A0x5cfac9cb00c17164!2sAvas%20Vikas%20Colony%20Rd%2C%20Avas%20Vikas%20Colony%2C%20Sitapur%2C%20Uttar%20Pradesh%20261001!5e0!3m2!1sen!2sin!4v1675607712835!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-form-sec">
        <h1>Let's Get Moving</h1>
        <p>LIVE BETTER. TRAIN HARDER. SWEAT TOGETHER.</p>

        <div className="full-name">
          <span>
            <h4>Full Name *</h4>
          </span>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="email">
          <span>
            <h4>Email *</h4>
          </span>
          <input
            type="email"
            autoComplete="off"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="phone-number">
          <span>
            <h4>Phone *</h4>
          </span>
          <input
            type=""
            autoComplete="off"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="text-area">
          <span>
            <h4>Type your message here</h4>
          </span>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            autoComplete="off"
            required
          ></textarea>
        </div>
        <div className="form-sec-btn">
          <button>Submit</button>
        </div>
        <div className="contact-info">
          <h4>Ph.no. : (811-605-6605)</h4>
          <p>
            <strong>Address : </strong> Awas Vikas Colony-(A-block), Sitapur Rd,
            H.no. 322
          </p>
          <p>
            <strong>Email : </strong> info@indfrontcommunitybodyfit.com
          </p>
        </div>
        <div className="detail-btn">
          <button>Book A Trial Class Now</button>
        </div>
      </div>
    </div>
  );
};

export default Contact_main;

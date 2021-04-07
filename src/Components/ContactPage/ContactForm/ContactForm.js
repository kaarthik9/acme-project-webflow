import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className="content-section">
      <div className="container">
        <div className={styles.contactWrapper}>
          <div className={styles.contactLeft}>
            <h2>Contact Us</h2>
            <div className={styles.richText}>
              <p>
                Acme Outdoors
                <br />
                123 Rainy Street
                <br />
                Oklahoma City, OK 73129
              </p>
              <p>
                ‍<br />
                <strong>General Inquiries:</strong>&nbsp;(405) 555-5555
                <br />
                <strong>Customer Support:</strong>&nbsp;(405) 555-5556
              </p>
            </div>
          </div>

          <div className={styles.contactRight}>
            <h2>Contact Form</h2>
            <p>
              Send us a message and we'll get back to you as soon as we can!{" "}
            </p>
            <div className={styles.contactForm}>
              <form name="email-form">
                <label for="name">Name</label>
                <input
                  type="text"
                  className={styles.contactInput}
                  maxlength="256"
                  name="name"
                  placeholder="Enter your name"
                />
                <label for="email">Email Address</label>
                <input
                  type="email"
                  className={styles.contactInput}
                  maxlength="256"
                  name="email"
                  placeholder="Enter your email address"
                  required=""
                />
                <label for="Message">Your Message</label>
                <textarea
                  placeholder="Enter your message"
                  maxlength="5000"
                  id="Message"
                  name="Message"
                  className={styles.contactInput}
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  className="btn btn-orange"
                />
              </form>

              <div className={styles.error}>
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

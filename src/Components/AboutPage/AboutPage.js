import React from "react";
import HeroTemplate from "../Utilities/HeroTemplate/HeroTemplate";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  document.title = "About";
  return (
    <div>
      <HeroTemplate
        styles={styles}
        heading1="Your Adventure"
        heading2="Awaits"
        para="Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete."
        btnText="Shop merch"
        btnLink="/shop"
      />

      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.aboutTopBlack}>
            <div className={styles.whyAcmeBlock}>
              <div className={styles.smallText}>Why Acme Outdoors?</div>

              <h2 className={styles.acmeHeading}>
                We’re the best in the business.
              </h2>

              <p className={styles.acmePara}>
                From more than 30 years, we’ve been leading the way across
                Oklahoma — creating the best possible customer experience since
                1989.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.aboutColumnsWrapper}>
            <div className={styles.aboutColumn}>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg"
                alt="Warranty Icon"
                className={styles.image}
              />
              <h3>Lifetime Warranty</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
            <div className={styles.aboutColumn}>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg"
                alt="Shopping Cart Icon"
                className={styles.image}
              />
              <h3>Shopping Experience</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
            <div className={styles.aboutColumn}>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg"
                alt="Delivery Icon"
                className={styles.image}
              />
              <h3>On-time Delivery</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
            <div className={styles.aboutColumn}>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg"
                alt="Service Icon"
                className={styles.image}
              />
              <h3>Best in Class Service</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.meetTheOwnersWrapper}>
              <div className={styles.meetTheOwnersLeft}></div>
              <div className={styles.meetTheOwnersRight}>
                <div className={styles.ownersRichText}>
                  <h2>Meet the Owners</h2>
                  <p>
                    John and Jane met on a backpacking adventure in Nepal. John,
                    a former sheep shearer, went on the trip to get some clarity
                    about his next adventures in life. Jane — a Peloton
                    instructor — went on the trip to explore the landscape in
                    Nepal.
                    <br />
                    <br />
                    While on the trip, John and Jane realized that they had one
                    common love — the love for hiking and the love for being
                    outdoors.
                    <br />
                    <br />
                    Returning back to their home state of Oklahoma, John and
                    Jane hatched a plan to launch a retail store centered around
                    their passions. <br />
                    <br />
                    While John handled the sourcing of goods and customer
                    service, Jane focused on the web + e-commerce side of the
                    business, building this website in the best design platform
                    on the web — Webflow!
                    <br />
                    <br />
                    In 1989, John and Jane Doe officially launched Acme
                    Outdoors, the premiere store for outdoor enthusiasts around
                    the state.
                    <br />
                    <br />
                    To this day, John and Jane return to Nepal yearly to ensure
                    that they never forget their roots and where they came from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.container+" "+styles.ownerBiosContainer}>
          <div className={styles.ownerBiosWrapper}>
            <div className={styles.ownerBio}>
              <div className={styles.ownerAvatarWrapper}>
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d114eef39554b0e943d8_John%20Doe.png"
                  alt="Co-Owner John Doe"
                />
              </div>
              <h3>John Doe</h3>
              <p className={styles.ownerBioParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className={styles.ownerBio}>
              <div className={styles.ownerAvatarWrapper}>
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d11d180ebb04f6b16bd9_Jane%20Doe.png"
                  alt="Co-Owner Jane Doe"
                />
              </div>
              <h3>Jane Doe</h3>
              <p className={styles.ownerBioParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./DonationPage.module.css";
import DonateHero from "./DonateHero/DonateHero"
import DonateContent from "./DonateContent/DonateContent";

export default function DonationPage() {
  return (
    <div>
      <DonateHero />
      <DonateContent />
    </div>
  );
}

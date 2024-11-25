import React from "react";
import classes from "./styles.module.scss";
import circlechecklist from "@/assets/images/circlechecklist.png";
import Image from "next/image";
import { APPSTORE, PLAYSTORE } from "@/config/constants/globals";

const Congratulations = () => {

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.backgroundImage}
          src={circlechecklist}
          alt="Congratulations"
        />
      </div>
      <div className={classes.textContainer}>
        <p className={classes.p1}>
          Congratulations and welcome to our community of savvy investors!
          You've successfully signed up with a referral link, and we're thrilled
          to have you on board.
        </p>
        <p>
          Ready to take control of your financial future? Click the link below
          to download the app now
        </p>
      </div>
      <a
        className={classes.submitButton}
        href={PLAYSTORE}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Android
      </a>
      <a
        className={classes.submitButton}
        href={APPSTORE}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download iOS
      </a>
    </div>
  );
};

export default Congratulations;
import React, { useState } from "react";
import Card from "./../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "./../../../components/shared/Button/Button";
import styles from "./StepOtp.module.css";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const next = () => {};
  return (
    <div className={styles.cardWrapper}>
      <Card title="🔒 Enter the OTP">
        <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
        <div className={styles.actionButtonWrap}>
          <Button onClick={next} text="Next" />
        </div>
        <p className={styles.bottomParagraph}>
          By entering the otp you are agree with our Terms of Services and
          Privacy Policy
        </p>
      </Card>
    </div>
  );
};

export default StepOtp;

import crypto from "crypto";
import hashService from "./hash.service";

class OtpService {
  async generateOtp() {
    // generate opt using crypto
    const otp = crypto.randomInt(1000, 9999);
    // hash otp
    const hash = hashService.hashOtp();

    return otp;
  }

  // to send sms
  sendBySms() {}

  verifyOtp() {}
}

export default new OtpService();

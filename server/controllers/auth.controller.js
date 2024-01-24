import otpService from "../services/otp.service";

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone field is required" });
    }
    //generate otp
    const otp = await otpService.generateOtp();
    console.log("OTP", otp);
  }
}

export default new AuthController();

import crypto from "crypto";

class hashService {
  hashOtp(data) {
    if (data === undefined) {
      throw new Error("Data to hash is undefined");
    }
    return crypto
      .createHmac("sha256", process.env.HASH_SECRET)
      .update(data)
      .digest("hex");
  }
}

export default new hashService();

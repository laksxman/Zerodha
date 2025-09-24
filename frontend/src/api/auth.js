// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3002/api/auth", // backend URL
// });

// const formatMobile = (mobile) => (mobile.startsWith("+") ? mobile : "+91" + mobile);

// // Request OTP
// export const requestOTP = (mobile) => {
//   const mobileWithCode = formatMobile(mobile);
//   return API.post("/request-otp", { mobile: mobileWithCode });
// };

// // Verify OTP
// export const verifyOTP = (mobile, otp) => {
//   const mobileWithCode = formatMobile(mobile);
//   return API.post("/verify-otp", { mobile: mobileWithCode, otp });
// };


import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:3002/api/auth" });

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://my-backend.onrender.com/api/auth",
});


export const requestOTP = (mobile) => API.post("/request-otp", { mobile });
export const verifyOTP = (mobile, otp) => API.post("/verify-otp", { mobile, otp });

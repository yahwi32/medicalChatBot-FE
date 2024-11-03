import axios from "axios";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
});
const instance = axios.create({
  baseURL: "https://smart-q-and-a-about-medicine.onrender.com/",
});

export default instance;
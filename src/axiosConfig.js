import axios from "axios";

export default axios.create({
  baseURL: "https://iscream.developme.space/",
  headers: {
    Accept: "application/json",

    // Authorization:
    //   "Bearer JX8IgQYjo2lIZ8B0OUPHiVsbQUNRGkJiKQXeiVACUUJCdjSp0FJUM4gxAKBxQQ1aeN4DPMtdJUoBLIDG",
  },
});

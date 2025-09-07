import axios from "./index";

class MentorsApi {
  static GetMentors = (data) => {
    return axios.get(`mentors-list`, data);
  };

  static CreateMentor = (data) => {
    return axios.post(`mentor/create`, data, { headers: { Authorization: `${data.token}` } });
  }

  static GetMentor = (data) => {
    return axios.get(`mentor/profile`, data, { headers: { Authorization: `${data.token}` } });
  }
}

export default MentorsApi;
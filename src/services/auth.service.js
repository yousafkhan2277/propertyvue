import axios from 'axios';

const API_URL = 'https://api.staging.afiye.net/api/';

class AuthService {
  login(user) {

    console.log("logg auth service api",user);
    return axios
      .put(API_URL + 'user/login', {
        email: user.username,
        password: user.password,
        fcm_token:'tokens',
        current_device:'android',
      })
      .then(response => {
        console.log("response", response.data.status);
        if (response.data.status) {
          console.log("sss");
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    console.log("user",user);
    return axios.post(API_URL + 'user/sign-up', {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      phone_no: user.phone_no,
      fcm_token: 'tokens',
      current_device: 'android',
      gender: user.gender,
    }).then(response => {
console.log("response.data.status",response.data.status);
      if (response.data.status) {
        console.log("sss");
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  updateProfile(user) {
    console.log("user profile",user);
    return axios.post(API_URL + 'user/edit', user);
  }
}

export default new AuthService();

import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      
      console.log("login store",user);
      return AuthService.login(user).then(response => {
        console.log("logg store inner",response);
        if(response.status){
        console.log("logg store inner ff",user),
        commit('loginSuccess', response);
        return response;
      }
      else{
        commit('loginFailure');
        return response;

      }
    });
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(response=>{
        if(response.status){
          commit('registerSuccess');
          return response;
        }
      else{

          commit('registerFailure');
          return response;
        }
    });
    },
    updateProfile(user) {
      console.log("profile",user);
      return true;
      // return AuthService.updateProfile(user);
    },
    
  },
  mutations: {
    loginSuccess(state, user) {
      console.log("commit",user)
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};

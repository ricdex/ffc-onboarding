import { magic } from '../plugins/magic';

export const state = () => ({
  user: null,
  authenticated: false,
  empresa : {},
  inversionista : {},
  step : 'step1',
});

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    state.authenticated = true;
  },
  CLEAR_USER_DATA(state) {
    state.user = null;
    state.authenticated = false;
    state.empresa= {};
    state.inversionista= {};
  },
  SET_EMPRESA_DATA(state, {empresa, step}) {
    state.empresa=  empresa ;
    state.step = step;
  },
  SET_INVERSIONISTA_DATA(state, {inversionista, step}) {
    state.inversionista=  inversionista ;
    state.step = step;
  },

};

export const actions = {
  async login({ commit }, email) {
    await magic.auth.loginWithMagicLink(email);
    const metadata = await magic.user.getMetadata();
    commit('SET_USER_DATA', metadata);
  },
  async updateEmpresa({ commit }, data) {
   
    commit('SET_EMPRESA_DATA', data);
  },
  async updateInversionista({ commit }, data) {
   
    commit('SET_INVERSIONISTA_DATA', data);
  },
  async logout({ commit }) {
    await magic.user.logout();
    commit('CLEAR_USER_DATA');
  },

  
};
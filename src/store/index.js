import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fullname: '',
    nickname: '',
    email: '',
    phone: '',
    day: '',
    month: '',
    year: '',
    age: '',
    checkbox: false,
    linkedin: '',
    github: '',
    certificates: '',
    teamname: '',
    Institution: '',
    Graduation: '',
    emailValid: false,
    fullnameValid: false,
    ageValid: false,
    githubValid: false,
    teamnameValid: false,
    institutionValid: false,
    graduationValid: false,
    checkboxValid: false,
    localStorage: false,
 
  },
  getters: {  
    fullname: state => state.fullname,

  },
  mutations: {
    setFullname(state, fullname) {
      if (/^[A-Z]{1}[a-z]+( [a-zA-Z'"-]+)+$/.test(fullname)) {
        state.fullname = fullname;
        state.fullnameValid = true;
      } else {
        state.fullnameValid = false;
      }
      console.log("validou: " + state.fullnameValid +" Nome: "+ state.fullname);
    },
    setNickname(state, nickname) {
      state.nickname = nickname
      console.log(state.nickname);
    },
    setEmail(state, email) {
      if (/^[^@ \n\r\t]+@[^@ \n\r\t]+\.[^@ \n\r\t]+$/.test(email)) {
        state.email = email;
        state.emailValid = true;
      } else {
        state.emailValid = false;
      }
      console.log("validou: " + state.emailValid + " Email: " + state.email);
    },
    setPhone(state, phone) {
      state.phone = phone
      console.log(state.phone);
    },
    setDay(state, day) {
      state.day = day
      console.log(state.day);
    },
    setMonth(state, month) {
      state.month = month
      console.log(state.month);
    },
    setYear(state, year) {
      state.year = year
      console.log(state.year);
    },
    setAge(state, age) {
      if (state.age >= 5 && state.age <= 122) {
        state.age = age
        state.ageValid = true;
      } else {
        state.ageValid = false;
      }
      console.log(state.ageValid + " Age: " + state.age);
    },
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox
      console.log("StatusValido: " + state.checkbox);

    },
    setLinkedin(state, linkedin) {
      state.linkedin = linkedin
      console.log(state.linkedin);
    },
    setGithub(state, github) { 
      if (// eslint-disable-next-line no-useless-escape 
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(github)) {
        state.github = github;
        state.githubValid = true;
      } else {
        state.githubValid = false;
      }
      console.log(state.githubValid + " Github: " + state.github);
    },
    setCertificates(state, certificates) {
      state.certificates = certificates
      console.log(state.certificates);
    },
    setTeamname(state, teamname) {
      if (// eslint-disable-next-line no-useless-escape 
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(teamname)) {
        state.teamname = teamname
        state.teamnameValid = true;
      } else {
        state.teamnameValid = false;
      }
      console.log(state.teamnameValid + " Teamname: " + state.teamname);
    },
    setInstitution(state, Institution) {
      if(Institution.length > 3){
        state.Institution = Institution
        state.institutionValid = true;
      } else {
        state.institutionValid = false;
      }
      console.log(state.institutionValid + " Institution: " + state.Institution);
    },
    setGraduation(state, Graduation) {
      state.Graduation = Graduation
      if(Graduation.length > 6){
        state.graduationValid = true;
      } else {
        state.graduationValid = false;
      }
      console.log(state.graduationValid + " Graduation: " + state.Graduation);
    },
    setLocalStorage(state, localStorage) {
      state.localStorage = localStorage
      if(localStorage==true){
        window.localStorage.setItem('fullname', state.fullname);
        window.localStorage.setItem('nickname', state.nickname);
        window.localStorage.setItem('email', state.email);
        window.localStorage.setItem('phone', state.phone);
        window.localStorage.setItem('day', state.day);
        window.localStorage.setItem('month', state.month);
        window.localStorage.setItem('year', state.year);
        window.localStorage.setItem('age', state.age);
        window.localStorage.setItem('checkbox', state.checkbox);
        window.localStorage.setItem('linkedin', state.linkedin);
        window.localStorage.setItem('github', state.github);
        window.localStorage.setItem('certificates', state.certificates);
        window.localStorage.setItem('teamname', state.teamname);
        window.localStorage.setItem('Institution', state.Institution);
        window.localStorage.setItem('Graduation', state.Graduation);
      } 
      if (localStorage==false){
        window.localStorage.removeItem('fullname');
        window.localStorage.removeItem('nickname');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('phone');
        window.localStorage.removeItem('day');
        window.localStorage.removeItem('month');
        window.localStorage.removeItem('year');
        window.localStorage.removeItem('age');
        window.localStorage.removeItem('checkbox');
        window.localStorage.removeItem('linkedin');
        window.localStorage.removeItem('github');
        window.localStorage.removeItem('certificates');
        window.localStorage.removeItem('teamname');
        window.localStorage.removeItem('Institution');
        window.localStorage.removeItem('Graduation');
      }
    }

  },
  actions: {
    setFullname({ commit }, fullname) {
      commit('setFullname', fullname)
    },
    setNickname({ commit }, nickname) {
      commit('setNickname', nickname)
    },
    setEmail({ commit }, email) {
      commit('setEmail', email)
    },
    setPhone({ commit }, phone) {
      commit('setPhone', phone)
    },
    setDay({ commit }, day) {
      commit('setDay', day)
    },
    setMonth({ commit }, month) {
      commit('setMonth', month)
    },
    setYear({ commit }, year) {
      commit('setYear', year)
    },
    setAge({ commit }, age) {
      commit('setAge', age)
    },
    setCheckbox({ commit }, checkbox) {
      commit('setCheckbox', checkbox)
    },
    setLinkedin({ commit }, linkedin) {
      commit('setLinkedin', linkedin)
    },
    setGithub({ commit }, github) {
      commit('setGithub', github)
    },
    setCertificates({ commit }, certificates) {
      commit('setCertificates', certificates)
    },
    setTeamname({ commit }, teamname) { 
      commit('setTeamname', teamname)
    },
    setInstitution({ commit }, Institution) {
      commit('setInstitution', Institution)
    },
    setGraduation({ commit }, Graduation) {
      commit('setGraduation', Graduation)
    },
    setEmailValid({ commit }, emailValid) {
      commit('setEmailValid', emailValid)
    },
    setFullnameValid({ commit }, fullnameValid) {
      commit('setFullnameValid', fullnameValid)
    },
    setAgeValid({ commit }, ageValid) {
      commit('setAgeValid', ageValid)
    },
    setGithubValid({ commit }, githubValid) {
      commit('setGithubValid', githubValid)
    },
    setTeamnameValid({ commit }, teamnameValid) {
      commit('setTeamnameValid', teamnameValid)
    },
    setLinkedinValid({ commit }, linkedinValid) {
      commit('setLinkedinValid', linkedinValid)
    },
    setCertificatesValid({ commit }, certificatesValid) {
      commit('setCertificatesValid', certificatesValid)
    },
    setInstitutionValid({ commit }, institutionValid) {
      commit('setInstitutionValid', institutionValid)
    },
    setGraduationValid({ commit }, graduationValid) {
      commit('setGraduationValid', graduationValid)
    },
    setChekboxValid({ commit }, chekboxValid) {
      commit('setChekboxValid', chekboxValid)
    },
    setLocalStorage({ commit }, localStorage) {
      commit('setLocalStorage', localStorage)
    },

  },
  modules: {
  }
})

import $ from "jquery";

export default {
  state: {
    id: "",
    username: "",
    photo: "",
    token: "",
    is_login: false,
  },
  getters: {},

  // 一般是用来修改数据的
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.photo = user.photo;
      state.is_login = true;
    },
    updateToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.id = "";
      state.username = "";
      state.photo = "";
      state.token = "";
      state.is_login = false;
    }
  },

  //actions一般是用来修改state
  actions: {
    login(context, data) {
      $.ajax({
        url: "http://127.0.0.1:3000/user/account/token/",
        type: "POST",
        data: {
          username: data.username,
          password: data.password,
        },

        success(resp) {
          if (resp.error_message === "success") {
            context.commit("updateToken", resp.token);
            data.success(resp);
          } else {
            data.error(resp);
          }
        },

        error(resp) {
          data.error(resp);
        },
      });
    },

    getinfo(context, data) {
      $.ajax({
        url: "http://127.0.0.1:3000/user/account/info/",
        type: "get",
        headers: {
          Authorization: `Bearer ` + context.state.token,
        },
        success(resp) {
          if (resp.error_message === "success") {
            context.commit("updateUser", {
              ...resp,
              is_login: true,
            });
            data.success(resp);
          }else{
            data.error(resp);
          }
        },

        error(resp) {
          data.error(resp);
        },
      });
    },

    logout(context) {
      context.commit("logout");
    }
  },
  modules: {},
};

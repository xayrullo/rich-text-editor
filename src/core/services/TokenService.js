import Vue from "vue";
const TOKEN = "token";
const AUTH_EXPIRATION = "30d";
const cookies = Vue.$cookies;
/**
 * @description get token form localStorage
 */
export const getToken = () => {
  return Vue.$cookies.get(TOKEN);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token) => {
  cookies.set(TOKEN, token, AUTH_EXPIRATION);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = () => {
  cookies.remove(TOKEN);
};

export default { getToken, saveToken, destroyToken };

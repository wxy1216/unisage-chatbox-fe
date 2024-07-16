<template>
  <form @submit.prevent="login">
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" required />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 这里可以添加登录逻辑，比如发送登录请求到后端
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      // 在实际应用中，通常会使用 Axios 或者 fetch 发送登录请求
      // 在成功登录后，可以跳转到其他页面
    },
  },
};
</script>

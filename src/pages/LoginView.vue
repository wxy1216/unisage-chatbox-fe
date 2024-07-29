<template>
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" required 
      @keyup.enter="focusPasswordInput"
      ref="usernameInput"
    />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required @keyup.enter="login" 
      ref="passwordInput"
    />
    <button @click="login">Login</button>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       username: "",
//       password: "",
//     };
//   },
//   methods: {
//     login() {
//       // 这里可以添加登录逻辑，比如发送登录请求到后端
//       console.log("Username:", this.username);
//       console.log("Password:", this.password);
//       // 在实际应用中，通常会使用 Axios 或者 fetch 发送登录请求
//       // 在成功登录后，可以跳转到其他页面
//       //   this.$store.commit('login');
//       const user = { name: this.username, email: this.password };
//       this.$store.dispatch('login', user).then(() => {
//         this.$router.push(this.$route.query.redirect || '/');
//       });
//     },
//   },
// };
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue'; // computed, watch

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const usernameInput = ref(null);
    const passwordInput = ref(null);


     // 监听输入的用户名，并更新 Vuex store 中的用户名
    // watch(username, (newUsername) => {
    //   store.dispatch('updateUsername', newUsername);
    // });

    const focusPasswordInput = () => {
      passwordInput.value.focus();
    };

    const login = () => {
      const user = { username: username.value, password: password.value };
      store.dispatch('login', user).then(() => {
        router.push('/');
      });
    };

    return {
      username,
      password,
      login,
      focusPasswordInput,
      usernameInput,
      passwordInput
    };
  }
};
</script>

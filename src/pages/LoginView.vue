<template>
  <div class="login-container">
    <div class="login-box">
      <h1>登录</h1>
      <input 
        type="text" 
        v-model="username" 
        placeholder="Enter your username" 
        @keyup.enter="focusPasswordInput" 
        ref="usernameInput"
        class="login-input"
        required
      />
      <input 
        type="password" 
        v-model="password" 
        placeholder="Enter your password" 
        @keyup.enter="login" 
        ref="passwordInput"
        class="login-input"
        required
      />
      <button @click="login" class="login-button">Login</button>
    </div>
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

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #f0f4f8, #e2e8f0);
  /* box-sizing: border-box; */
}

.login-box {
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

.login-box h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
}

.login-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #45a049;
}
</style>
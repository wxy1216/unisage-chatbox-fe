<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <p v-if="isLoggedIn">Welcome, {{ user.username }}!</p>
    <p v-else>Please log in.</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const user = computed(() => store.getters.user);

    return {
      isLoggedIn,
      user,
    };
  }
};
</script>

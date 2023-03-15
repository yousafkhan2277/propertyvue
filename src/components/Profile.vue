<template>
  <div class="container">
    <h3>
        <strong>{{currentUser.data.data.email}}</strong> Profile
      </h3>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user)
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
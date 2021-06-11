<template>
  <div>
    <active-user :username="username" :age="age" />
    <user-data @show-data="showData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Michelle Andrey",
      age: 35,
    };
  },
  methods: {
    showData(username, age) {
      this.username = username;
      this.age = age;
      console.log("show data", username, age);
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <form @submit.prevent="showData">
      <div>
        <label>Username</label>
        <input type="text" v-model="enteredUsername" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" v-model="enteredAge" />
      </div>
      <button>Set User Data</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["show-data"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: "",
    };
  },
  methods: {
    showData() {
      this.$emit("show-data", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>

<style></style>

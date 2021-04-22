const app = Vue.createApp({
  data() {
    return {
      name: "Michelle",
      age: 34,
      imgLink: "https://source.unsplash.com/random",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");

const app = Vue.createApp({
  // here goes options
  data() {
    // should return always an object
    return {
      courseGoalA: "<h2>Finish the course and learn Vue!</h2>",
      courseGoalB: "Master Vue!",
      vueLink: "https://vue.org/",
    };
  },
  methods: {
    // this is the object returned by data()
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

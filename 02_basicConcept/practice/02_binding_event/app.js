const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmed: "",
    };
  },
  methods: {
    buttonClicked() {
      alert("Button is clicked!");
    },
    setInput(event) {
      this.output = event.target.value;
    },
    confirmedOutput() {
      this.confirmed = this.output;
    },
  },
});
app.mount("#assignment");

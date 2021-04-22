const app = Vue.createApp({
  data() {
    return {
      classInput: '',
      isHidden: false,
      background: '',
    }
  },
  methods: {
    toggleView() {
      this.isHidden = !this.isHidden
    }
  }
})

app.mount('#assignment')
const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: '',
      isShown: true,
    }
  },
  computed: {
    // buttonCaption() {
    //   return this.isShown ? 'Hide' : 'Show'
    // }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
    },
    toggle() {
      this.isShown = !this.isShown
    }
  }
})

app.mount("#assignment")
<template>
  <div class="home container-fluid">
    <header class="row post log">
      <div class="col-12">
        <h1>Fit P<img alt="Vue logo" src="../assets/logo.png">L</h1>
        <form @submit.prevent="postLog">
          <input v-model="newLog.date" required type="date">
          <button type="submit">Add Log</button>
        </form>
      </div>
    </header>
    <main class="row">
        <div class="col-4 logs">
          <NewLogs />
        </div>
        <!-- <div class="col-4 details">
          details
        </div>
        <div class="col-4 my list">
          my list
        </div> -->
    </main>
  </div>
</template>

<script>
import NewLogs from "@/components/Logs"
export default {
  name: 'home',
  mounted() {
    this.$store.dispatch("getLogs");
  },
  data(){
    return {
      newLog:{
        date:""
      }
    };
  },
  methods: {
    postLog(){
      let log = {...this.newLog};
      this.$store.dispatch("addLog", log);
      this.newLog = {
        date:""
      };
    }
  },
  computed: {
    logs(){
      return this.$store.state.logs;
    }
  },
  components: {
    NewLogs
  }
}
</script>

<style>
h1 img {
  transform: rotate(180deg);
  height: 2rem
}
</style>
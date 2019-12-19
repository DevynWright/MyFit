<template>
  <ol>
      <li v-for="log in logs" :key="log.id">{{log.user}} | {{log.date}}</li>
  </ol>
</template>

<script>
export default {
    name: "NewLogs",
    computed: {
        logs(){
            return this.$store.state.logs;
        }
    }
}
</script>

<style>

</style>
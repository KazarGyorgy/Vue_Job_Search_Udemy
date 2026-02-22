<template>
    <section>Job Details Page {{ currentJobId }}</section>
</template>
<script>
export default {
    name: "JobView",
    computed: {
     currentJobId() {
      return this.$route.params.id
     }
    }
}
</script>

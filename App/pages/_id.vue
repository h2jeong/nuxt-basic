<template>
  <section v-if="directory" class="directory">
    <h1 class="directory__name">{{ directory.name }}</h1>
    <p class="directory__info">{{ directory.info }}</p>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'DirectoryInfo',
  //   data() {
  //     return {
  //       directory: this.$route.params.dir,
  //     }
  //   },
  computed: {
    ...mapState(['directory']),
  },
}
</script>

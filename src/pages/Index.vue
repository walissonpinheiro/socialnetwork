<template>
  <q-page class="column q-mt-sm justify-evenly items-center">
    <div
      class="row q-mt-sm q-mb-sm"
      v-for="(item, index) in feedList"
      :key="index"
    >
      <post-component :meta="item" :active="openPost"></post-component>
    </div>
  </q-page>
</template>

<script lang="ts">
import PostComponent from 'components/PostComponent.vue'
import { myFeed } from 'assets/feed.js'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { PostComponent }
})
export default class PageIndex extends Vue {
  feedList = myFeed
  openPost = false
}
</script>

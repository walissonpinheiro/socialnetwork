<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="sm-w text-center" :class="{ 'lg-w': !$q.screen.gt.md }">
      <q-card-section>
        <sign-in-component />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import SignInComponent from 'components/SigninComponent.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { SignInComponent }
})
export default class MyAccount extends Vue {}
</script>

<style>
.sm-w {
  width: 25vw;
}

.lg-w {
  width: 80vw;
}
</style>

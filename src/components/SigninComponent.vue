<template>
  <div class="full-width">
    <p class="text-pacifico-login">mySocial</p>
    <q-input
      class="q-ma-md"
      v-model="email"
      outlined
      dense
      color="black"
      label="Email"
      type="text"
    ></q-input>
    <q-input
      class="q-ma-md"
      v-model="password"
      outlined
      dense
      color="black"
      label="Password"
      :type="passwordType"
    >
      <template v-slot:append>
        <q-btn round dense flat :icon="visibility" @click="showPassword" />
      </template>
    </q-input>
    <q-btn
      class="full-width q-ma-md q-mt-lg"
      dense
      color="pink"
      no-caps
      label="Sign in"
      @click="doSignin"
    ></q-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SignInComponent extends Vue {
  email = ''
  password = ''
  visibility = 'mdi-eye'
  passwordType = 'password'

  async doSignin () {
    await this.$router.push({ name: 'index' })
  }

  showPassword () {
    if (this.visibility === 'mdi-eye') {
      this.visibility = 'mdi-eye-off'
      this.passwordType = 'text'
    } else {
      this.visibility = 'mdi-eye'
      this.passwordType = 'password'
    }
  }
}
</script>

<style>
.text-pacifico-login {
  font-family: 'Pacifico', cursive;
  font-size: 40px;
  height: 40px;
  margin-bottom: 40px;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white">
      <q-toolbar class="bg-white text-black my-toolbar">
        <q-toolbar-title class="text-pacifico">
          mySocial
        </q-toolbar-title>
        <q-space />
        <q-btn round flat icon="mdi-plus-box-outline"></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class MainLayout extends Vue {}
</script>

<style>
.my-toolbar {
  min-height: 35px;
}
.text-pacifico {
  font-family: 'Pacifico', cursive;
  height: 35px;
}
</style>

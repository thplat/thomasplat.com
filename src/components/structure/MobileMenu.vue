<script setup lang="ts">
import { ref } from 'vue';
import MainMenu from './MainMenu.vue';


const open = ref(false)

</script>

<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--open': open }">
      <MainMenu class="menu--mobile" @navigated="open = false" />
  </div>

  <div class="burger-icon" :class="{ 'open': open }" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </div>    
</template>
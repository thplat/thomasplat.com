<script setup lang="ts">
import '@/assets/app.scss'
import IndexView from './views/IndexView.vue'
import CvView from './views/CvView.vue';
import SkillsView from './views/SkillsView.vue';
import ContactView from './views/ContactView.vue';
import { useHorizontalScroll } from '@/composables/page-position-handler'
import { onMounted } from 'vue';
import MobileMenu from './components/structure/MobileMenu.vue';

const { detectRoute, scrollBehavior } = useHorizontalScroll('.slide-wrapper')
onMounted(scrollBehavior)
onMounted(() => {
  var queries = [
    window.matchMedia("(min-width: 0) and (max-width: 1023px)"),
    window.matchMedia("(min-width: 1024)"),

  ]

  queries.forEach(query => {
    query.addEventListener('change', (e) => {
      console.log("YY")
      //if (e.matches) {
        console.log("RELOADING")
        window.location.reload()
      //}
    })
  })
})
</script>

<template>

  <MobileMenu></MobileMenu>

  <div class="slide-wrapper" @scroll="detectRoute">
    <div class="slide-item slide-item--index">
      <IndexView />
    </div>
    <div class="slide-item">
      <cv-view></cv-view>
    </div>
    <div class="slide-item">
      <skills-view></skills-view>
    </div>
    <div class="slide-item">
      <contact-view></contact-view>
    </div>    
  </div>
</template>

<style>
.route-in-enter-from {
  transform: translateX(20%);
}

.route-in-enter-active {
  transition: all 0.3s ease-out;
}

.route-in-leave-to {
  transform: translateX(-40%);
}

.route-in-leave-active {
  transition: all 0.3s ease-in;
}

.route-out-enter-from {
  transform: translateX(0%);
}

.route-out-enter-active {
  transition: all 0.3s ease-out;
}

.route-out-leave-to {
  transform: translateX(30%);
}

.route-out-leave-active {
  transition: all 0.3s ease-in;
}

</style>
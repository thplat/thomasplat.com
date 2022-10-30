<script setup lang="ts">
import SideContentSplit from '../components/structure/SideContentSplit.vue'
import photo from '@/assets/img/photo.png'

import { useCvStore } from '@/stores/cv';
import WorkHistory from '../components/cv/WorkHistory.vue';

const store = useCvStore()
</script>

<template>
  <div class="page-wrapper page-wrapper--cv">
    <div class="container">
      <SideContentSplit full>
        <template #aside>
          <div class="cv-photo">
            <img :src="photo" alt="Photo">
          </div> 
    
          <Transition name="intro" appear>
            <ul class="attributes-list">
              <li v-for="basicItem in store.basicData" :key="basicItem.label">
                {{ basicItem.label }}: {{ basicItem.value }}
              </li>
            </ul>
          </Transition>      
        </template>

        <div class="cv-gradient"></div>
        <div class="cv-content">
          <WorkHistory :items="store.history"></WorkHistory>
        </div>
      </SideContentSplit>
    </div>
  </div>
</template>

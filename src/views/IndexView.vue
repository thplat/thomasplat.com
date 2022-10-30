<script setup lang="ts">
import SideContentSplit from '../components/structure/SideContentSplit.vue'
import ProjectsGrid from '@/components/project/ProjectsGrid.vue'

import { useProjectStore } from '@/stores/project';

const store = useProjectStore()
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <SideContentSplit>
        <template #aside>
          <h1>{{ $t('index.headline') }}</h1>
    
          <Transition name="intro" appear>
            <div class="sidebar-intro">
              {{ $t('index.asideCopy') }}
            </div>
          </Transition>
        </template>
    
        <ProjectsGrid :projects="store.projects"></ProjectsGrid>
      </SideContentSplit>
    </div>
  </div>
</template>

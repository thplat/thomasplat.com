<script setup lang="ts">
import '@/components/structure/SideContentSplit.vue'
import SideContentSplit from '../components/structure/SideContentSplit.vue'
import SkillPanel from '@/components/skills/SkillPanel.vue';
import { useSkillsStore } from '@/stores/skills';
import { useTransitions } from '@/components/transition/list-stagger';

const store = useSkillsStore()
const { beforeEnter, enter } = useTransitions()
</script>

<template>
  <div class="page-wrapper page-wrapper--skills">
    <div class="container">
      <SideContentSplit large-aside>
        <template #aside>
          <h1>{{ $t('skills.headline') }}</h1>
    
          <div class="sidebar-intro">
            {{ $t('skills.copy') }}
          </div>
        </template>

        <transition-group 
          tag="div" 
          class="skills" 
          appear
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <SkillPanel 
            v-for="(skill, index) in store.skills" 
            :key="skill.category" 
            :skill="skill"
            :data-index="index"
          />
        </transition-group>
      </SideContentSplit>
    </div>
  </div>
</template>
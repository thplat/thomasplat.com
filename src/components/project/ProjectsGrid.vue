<script setup lang="ts">
import { useProjectTransitions } from './project-transitions'
import type { Project } from '@/types';
import ProjectPanel from './ProjectPanel.vue'

defineProps<{ projects: Project[] }>()
const { beforeEnter, enter } = useProjectTransitions()

</script>

<template>
    <transition-group 
        tag="div" 
        class="projects-grid" 
        appear
        @before-enter="beforeEnter"
        @enter="enter"
    >
        <ProjectPanel 
            v-for="(project, index) in projects" 
            :key="project.title" 
            :data-index="index" 
            :project="project"
        />
    </transition-group>
</template>
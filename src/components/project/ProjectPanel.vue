<script setup lang="ts">
import type { Project } from '@/types'
import LinkIcon from '@/assets/icons/LinkIcon.vue'

defineProps<{ project: Project }>()
</script>

<template>
    <div class="project">
        <div class="project__content" :class="{'project--highlight': project.highlight}">
            <div class="project__type">{{ project.type }}</div>
            <h2 class="project__headline">{{ project.title }}</h2>
            <div class="project__copy">{{ project.description }}</div>

            <template v-if="!project.offlineMessage">
                <a v-if="project.link" class="project__url" :href="project.link.url" target="_blank">
                    <LinkIcon></LinkIcon> {{ project.link.name }}
                </a>
            </template>
            <span v-else class="project__offline">{{ project.offlineMessage }}</span>
        </div>
    </div>
</template>
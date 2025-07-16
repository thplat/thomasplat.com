<script setup lang="ts">
import type { Skill } from '@/types';
import { defineAsyncComponent, type Component } from 'vue';

const LogoMap: { [key: string]: Promise<Component> } = {
    js: import('@/assets/icons/JsIcon.vue'),
    laravel: import('@/assets/icons/LaravelIcon.vue'),
    node: import('@/assets/icons/NodeIcon.vue'),
    vue: import('@/assets/icons/VueIcon.vue'),
}

const getComponent = (key: string) => {
    return defineAsyncComponent(() => LogoMap[key])
}

defineProps<{ skill: Skill }>()
</script>

<template>
    <div class="skill-item">
    <div class="skill-item__category">{{ skill.category }}</div>            
    <div class="skill-item__body">
        <div v-if="skill.logos" class="skill-item__logos">
            <component 
                v-for="logo in skill.logos" 
                :key="logo" 
                :is="getComponent(logo)" 
            />
        </div>
        <div class="skill-item__description">
            {{ skill.description }}
        </div>
    </div>            
    </div>
</template>
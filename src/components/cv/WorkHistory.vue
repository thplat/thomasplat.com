<script setup lang="ts">
import type { WorkHistoryEntry } from '@/types';
import WorkHistoryItem from './WorkHistoryItem.vue';
import { useTransitions } from '@/components/transition/list-stagger'

defineProps<{
    items: WorkHistoryEntry[]
}>()

const { beforeEnter, enter } = useTransitions()
</script>

<template>
    <transition-group class="work-history" appear tag="div" @enter="enter" @before-enter="beforeEnter">
        <WorkHistoryItem 
            v-for="(item, index) in items" 
            :key="`work-${index}`"
            :item="item"
            :data-index="index"
        />        
    </transition-group>
</template>
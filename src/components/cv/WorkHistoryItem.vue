<script setup lang="ts">
import type { WorkHistoryEntry } from '@/types';

defineProps<{
    item: WorkHistoryEntry
}>()
</script>

<template>
    <div class="work-history-item">
        <div class="work-history-item__type">{{ item.type }}</div>
        <div class="work-history-item__content">
            <div class="work-history-item__time">
                {{ !item.to ? `${ $t('cv.from') } ${item.from}` : `${item.from} - ${item.to}` }}
            </div>
            <div class="work-history-item__location">{{ item.location }}</div>
            <div v-if="item.position" class="work-history-item__position">{{ item.position }}</div>
            <div v-if="item.description" class="work-history-item__description">{{ item.description }}</div>
        </div>        
    </div>
</template>
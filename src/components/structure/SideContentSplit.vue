<script setup lang="ts">
import MainMenu from '@/components/structure/MainMenu.vue';

defineProps({
    full: { type: Boolean, default: false },
    largeAside: { type: Boolean, default: false }
})
</script>

<template>
    <div class="side-content-wrapper" :class="{ 'side-content-wrapper--large': largeAside }">
        <div class="side-content-wrapper__content">
            <slot name="aside"></slot>
        </div>

        <MainMenu />
    </div>

    <div class="main-content-wrapper" :class="{ 'main-content-wrapper--full': full }">
        <slot></slot>
    </div>
</template>
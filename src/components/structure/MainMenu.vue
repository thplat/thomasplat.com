<script setup lang="ts">
import type { RouteDefinition } from '@/types';
import routes from '@/router/routes'
import { navigateTo } from '@/composables/page-position-handler'
import { useRoutingStore } from '@/stores/routing';

const store = useRoutingStore()
const emit = defineEmits(['navigated'])

const navigate = (route: RouteDefinition) => {
    navigateTo(route.path, '.slide-wrapper')
    emit('navigated', route.path)
}
</script>

<template>
    <nav class="menu">
        <ol>
            <li v-for="(route, index) in routes" :key="route.name">
                <a 
                    class="menu-link" 
                    :class="{'router-link-exact-active': route.path === store.currentRoute}"
                    :href="route.path" 
                    @click.prevent="navigate(route)"
                >
                    <div class="menu-link__number">0{{ index + 1 }}</div>
                    <div class="menu-link__divider"></div>
                    <div class="menu-link__link">
                        {{ $t(`menu.${route.name}`) }}
                    </div>
                </a>                
            </li>
        </ol>
    </nav>
</template>
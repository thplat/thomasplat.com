<script setup lang="ts">
import SideContentSplit from '../components/structure/SideContentSplit.vue'
import photo from '@/assets/img/photo.png'
import config from '@/config/app'

</script>

<template>
  <div class="page-wrapper page-wrapper--contact">
    <div class="container">
      <SideContentSplit full>
        <template #aside>
          <div class="contact-sidebar">
            <div class="contact-panel">
              <div class="contact-reel">
                <img :src="photo">
                <div class="name-info">
                  <div class="name-info__name">{{ $t('general.fullname') }}</div>
                  <div class="name-info__title">Web-Developer</div>
                </div>
              </div>
            </div>
            <div class="contact-panel">
              <div class="contact-info">
                <div class="contact-info__email"><a :href="`mailto:${config.email}`">{{ config.email }}</a></div>
              </div>
            </div>
          </div>
        </template>

        <div class="contact-content">
        </div>
      </SideContentSplit>
    </div>
  </div>
</template>

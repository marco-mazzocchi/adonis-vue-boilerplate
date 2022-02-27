<script>
import { defineComponent } from 'vue'
import { NConfigProvider, NMessageProvider } from 'naive-ui'

import Layout from './Layout.vue'

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: '#f54646',
    primaryColorHover: '#f52929',
  },
}

export default defineComponent({
  components: {
    NMessageProvider,
    NConfigProvider,
    Layout,
  },
  setup() {
    return {
      themeOverrides,
    }
  },
})
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>
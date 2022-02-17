<script>
import { NConfigProvider } from 'naive-ui'

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    fontWeightStrong: '600',
    primaryColor: '#f54646',
    primaryColorHover: '#f52929',
  },
}

export default {
  name: 'App',
  components: { NConfigProvider },
  setup() {
    return {
      themeOverrides,
    }
  },
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <hr />
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
    <hr />
    <router-view></router-view>
  </n-config-provider>
</template>
<script>
import { defineComponent } from 'vue'
import {
  NConfigProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutSider,
} from 'naive-ui'

import Navbar from './Navbar.vue'

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
    NSpace,
    Navbar,
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
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
    <n-space vertical size="large">
      <n-layout>
        <n-layout-header bordered>
          <navbar />
        </n-layout-header>
        <n-layout has-sider>
          <n-layout-sider
            collapse-mode="transform"
            show-trigger="arrow-circle"
            content-style="padding: 24px;"
            bordered
            collapsed
          >
            <p>Sidebar</p>
          </n-layout-sider>
          <n-layout-content content-style="padding: 24px;"
            ><router-view></router-view
          ></n-layout-content>
        </n-layout>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>
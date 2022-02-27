<script>
import { defineComponent } from 'vue'
import { NSpace, NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'

import Navbar from './Navbar.vue'

export default defineComponent({
  components: {
    NSpace,
    Navbar,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
  },
})
</script>
<template>
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
</template>
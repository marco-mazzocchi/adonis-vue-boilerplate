<script>
import { defineComponent, h, ref } from 'vue'
import { NButton, NMenu, NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { Information as WorkIcon, Home as HomeIcon } from '@vicons/carbon'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          class: 'logo',
          to: {
            name: 'home',
          },
        },
        { default: () => 'My Manager' }
      ),
    key: 'logo',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
          },
        },
        { default: () => 'Go Home' }
      ),
    key: 'home',
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/about',
          },
        },
        { default: () => 'About' }
      ),
    key: 'about',
    icon: renderIcon(WorkIcon),
  },
]

export default {
  name: 'Navbar',
  components: {
    NButton,
    NMenu,
  },
  setup() {
    return {
      activeKey: ref(null),
      menuOptions,
    }
  },
}
</script>
<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>
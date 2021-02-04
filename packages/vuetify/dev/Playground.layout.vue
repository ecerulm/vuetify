<template>
  <div>
    <v-layout :layout="layout" full-height>
      <v-layout-item name="drawer1" position="left" :size="width" v-if="bar">drawer1</v-layout-item>
      <v-layout-item name="drawer2" position="right">drawer2</v-layout-item>
      <v-layout-item name="toolbar" position="top" size="100">toolbar</v-layout-item>
      <v-layout-item name="foo" :size="200" position="bottom">foo</v-layout-item>
      <v-layout-item name="foo2" :size="100" position="top">foo2</v-layout-item>
      <!-- <v-footer id="innerfoot">inner footer</v-footer> -->
      <v-content>
        <button @click="bar = !bar">v-if drawer1</button>
        <button @click="toggle">reverse layout</button>

        <v-layout :layout="['bar', 'innerfoot', 'foo']" :style="{ margin: '100px' }">
          <v-layout-item name="bar" position="left" size="50">inner drawer</v-layout-item>
          <v-layout-item name="foo" position="top" size="100">inner bar</v-layout-item>
          <v-layout-item name="innerfoot" position="bottom" size="150">inner footer</v-layout-item>
          <v-content>
            asdasdzxczxc
          </v-content>
        </v-layout>
      </v-content>
    </v-layout>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'Playground',
    setup () {
      const bar = ref(true)
      const width = ref(300)
      const layout = ref(['toolbar', 'drawer1', 'drawer2', 'foo', 'foo2'])

      const toggle = () => {
        layout.value = layout.value.slice().reverse()
      }

      setTimeout(() => {
        width.value = 200
      }, 2000)

      return {
        bar,
        width,
        layout,
        toggle,
      }
    },
  }
</script>

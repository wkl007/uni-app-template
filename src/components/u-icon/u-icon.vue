<template>
  <text :class="[prefixClass,icon]" :style="style" @click="handleClick"/>
</template>

<script>
export default {
  name: 'UICon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    prefixClass: {
      type: String,
      default: 'iconfont'
    },
    color: {
      type: String,
      default: '#000'
    },
    size: {
      type: Number,
      default: 24
    },
    customStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    style () {
      return `color:${this.color};font-size:${this.size}px;line-height:${this.size}px`
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

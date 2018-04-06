<template>
  <v-alert error dismissible @input="onClose">
      This is a success alert that is closeable.
  </v-alert>
</template>

<script>
export default {
  method: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>

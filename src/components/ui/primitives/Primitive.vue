<script setup lang="ts">
import { computed, useSlots } from 'vue'

export interface PrimitiveProps {
  as?: string | object
  asChild?: boolean
  [key: string]: any
}

const props = withDefaults(defineProps<PrimitiveProps>(), {
  as: 'div',
  asChild: false,
})

const slots = useSlots()

const component = computed(() => {
  if (props.asChild && slots.default) {
    return slots.default()[0]?.type || props.as
  }
  return props.as
})

const componentProps = computed(() => {
  const { as, asChild, ...rest } = props
  return rest
})
</script>

<template>
  <component :is="component" v-bind="componentProps">
    <slot />
  </component>
</template>


<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from '@/components/ui/primitives'
import { provideAvatarContext } from './useAvatarContext'

export interface AvatarProps extends /* @vue-ignore */ PrimitiveProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<AvatarProps>(), {
  as: 'span',
  asChild: false,
})

provideAvatarContext()
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :class="cn('relative flex shrink-0 overflow-hidden rounded-full', props.class)"
  >
    <slot />
  </Primitive>
</template>


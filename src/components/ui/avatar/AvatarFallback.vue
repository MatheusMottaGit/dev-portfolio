<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useAvatarContext } from './useAvatarContext'
import { computed } from 'vue'

export interface AvatarFallbackProps {
  class?: string
  delayMs?: number
}

const props = withDefaults(defineProps<AvatarFallbackProps>(), {
  delayMs: 0,
})

const { imageLoadingStatus } = useAvatarContext()
const isVisible = computed(() => imageLoadingStatus.value === 'error' || imageLoadingStatus.value === 'idle')
</script>

<template>
  <span
    v-if="isVisible"
    :class="cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)"
    :style="{ animationDelay: `${props.delayMs}ms` }"
  >
    <slot />
  </span>
</template>


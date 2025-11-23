<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useAvatarContext } from './useAvatarContext'
import { computed, onMounted, ref } from 'vue'

export interface AvatarImageProps {
  src?: string
  alt?: string
  class?: string
}

const props = defineProps<AvatarImageProps>()
const { imageLoadingStatus, setImageLoadingStatus } = useAvatarContext()
const imgRef = ref<HTMLImageElement>()

const imageStatus = computed(() => imageLoadingStatus.value)

onMounted(() => {
  if (props.src) {
    setImageLoadingStatus('loading')
  }
})

const handleLoad = () => {
  setImageLoadingStatus('loaded')
}

const handleError = () => {
  setImageLoadingStatus('error')
}
</script>

<template>
  <img
    v-if="src"
    ref="imgRef"
    :src="src"
    :alt="alt"
    :class="cn('aspect-square h-full w-full object-cover', props.class)"
    :style="{ display: imageStatus === 'error' ? 'none' : 'block' }"
    @load="handleLoad"
    @error="handleError"
  />
</template>


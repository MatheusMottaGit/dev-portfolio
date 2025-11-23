import { inject, provide, ref, type Ref } from 'vue'

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'

const AVATAR_CONTEXT = Symbol('avatar')

export interface AvatarContext {
  imageLoadingStatus: Ref<ImageLoadingStatus>
  setImageLoadingStatus: (status: ImageLoadingStatus) => void
}

export function useAvatarContext() {
  const context = inject<AvatarContext>(AVATAR_CONTEXT)
  if (!context) {
    throw new Error('Avatar components must be used within Avatar')
  }
  return context
}

export function provideAvatarContext() {
  const imageLoadingStatus = ref<ImageLoadingStatus>('idle')
  const setImageLoadingStatus = (status: ImageLoadingStatus) => {
    imageLoadingStatus.value = status
  }

  provide(AVATAR_CONTEXT, {
    imageLoadingStatus,
    setImageLoadingStatus,
  })
}


import { computed } from 'vue'

export function useForwardProps<T extends Record<string, any>>(props: T) {
  return computed(() => {
    const { as, asChild, ...rest } = props as any
    return rest
  })
}


import { randomHexColor } from '../../util/helpers'
import { computed, defineComponent, h, ref } from 'vue'
import { useLayout } from './VLayout'

export const VFooter = defineComponent({
  name: 'VFooter',
  props: {
    height: {
      type: Number,
      default: 48,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup (props, { slots }) {
    const styles = useLayout(props.id, computed(() => props.height), ref('bottom'))
    const background = randomHexColor()

    return () => h('div', {
      style: {
        position: 'absolute',
        background,
        bottom: 0,
        transition: 'all 0.3s ease-in-out',
        ...styles.value,
      },
    }, slots.default?.())
  },
})

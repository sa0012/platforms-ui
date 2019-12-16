// import classNames from 'classnames'
import PropTypes from '../utils/vue-types'
import Base from '../base'
function noop () {}
export const AlertProps = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  closable: PropTypes.bool,
  closeText: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
  onClose: PropTypes.func.def(noop),
  showIcon: PropTypes.bool,
  banner: PropTypes.bool,
  icon: PropTypes.any,
  transition: PropTypes.string
}

const Alert = {
  name: 'PlAlert',
  props: AlertProps,
  data () {
    return {
      text: ''
    }
  },
  methods: {},

  render () {
    return (
      <transition name="pl-alert-fade">
        <div className="pl-alert">
          this is a alert
        </div>
      </transition>
    )
  }
}

// @ts-ignore
Alert.install = function (Vue) {
  Vue.use(Base)
  Vue.component(Alert.name, Alert)
}

export default Alert

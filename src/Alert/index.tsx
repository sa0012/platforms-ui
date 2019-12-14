import classNames from 'classnames'
import PropTypes from '../utils/vue-types'

export const AlertProps = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  closable: PropTypes.bool,
  closeText: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  banner: PropTypes.bool,
  icon: PropTypes.any
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
      <div>
        this is a alert component
      </div>
    )
  }
}

export default Alert;

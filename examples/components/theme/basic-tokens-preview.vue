<style lang="scss">
.component-preview {
  .heading>div{
    margin-bottom: 15px;
  }
  .title {
    font-size: 18px;
    font-weight:400;
    padding: 0 20px
  }
  .paragraph {
    padding: 0 20px
  }
  .demo-color-box {
    margin: 0;
  }
  .color {
    margin-right: -12%;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Color</h4>
  </div>
</template>

<script>
import bus from '../../bus';
import { tintColor } from '../../color.js';
import {
  ACTION_COMPONECT_SELECT,
  ACTION_USER_CONFIG_UPDATE
} from './constant.js';

const original = {
  'color_primary': '#409EFF',
  'color_success': '#67C23A',
  'color_warning': '#E6A23C',
  'color_danger': '#F56C6C',
  'color_info': '#909399',
  'color_white': '#FFFFFF',
  'color_black': '#000000',
  'color_text_primary': '#303133',
  'color_text_regular': '#606266',
  'color_text_secondary': '#909399',
  'color_text_placeholder': '#C0C4CC',
  'border_color_base': '#DCDFE6',
  'border_color_light': '#E4E7ED',
  'border_color_lighter': '#EBEEF5',
  'border_color_extra_light': '#F2F6FC',
  'font_size_extra_large': '20px',
  'font_size_large': '18px',
  'font_size_medium': '16px',
  'font_size_base': '14px',
  'font_size_small': '13px',
  'font_size_extra_small': '12px',
  'font_weight_primary': 500,
  'font_weight_secondary': 100,
  'font_line_height_primary': '24px',
  'font_line_height_secondary': '16px'
};

export default {
  created() {
    bus.$on(ACTION_USER_CONFIG_UPDATE, this.setGlobal);
    bus.$on(ACTION_COMPONECT_SELECT, (val) => {
      this.$nextTick(() => {
        const getSelectElement = Array.from(document.querySelectorAll('h4')).filter((el) => (el.innerText.toLowerCase() === val));
        if (getSelectElement[0]) {
          const elementTop = getSelectElement[0].getBoundingClientRect().top;
          window.scrollTo(0, window.pageYOffset + elementTop - 20); // 20 for padding
        }
      });
    });
  },
  mounted() {
    this.setGlobal();
  },
  methods: {
    tintColor(a, b) {
      return tintColor(a, b);
    },
    dataProxy(value) {
      return this[`color_${value.toLowerCase()}`];
    },
    setGlobal() {
      if (window.userThemeConfig) {
        this.global = window.userThemeConfig.global;
      }
    }
  },
  watch: {
    global: {
      immediate: true,
      handler(value) {
        Object.keys(original).forEach((v) => {
          const key = `$--${v.replace(/_/g, '-')}`;
          if (value[key]) {
            this[v] = value[key];
          } else {
            this[v] = original[v];
          }
        });
      }
    }
  },
  data() {
    return {
      global: {},
      colorLine: ['Primary', 'Success', 'Warning', 'Danger', 'Info'],
      'color_primary': '',
      'color_success': '',
      'color_warning': '',
      'color_danger': '',
      'color_info': '',
      'color_white': '',
      'color_black': '',
      'color_text_primary': '',
      'color_text_regular': '',
      'color_text_secondary': '',
      'color_text_placeholder': '',
      'border_color_base': '',
      'border_color_light': '',
      'border_color_lighter': '',
      'border_color_extra_light': '',
      'font_size_extra_large': '',
      'font_size_large': '',
      'font_size_medium': '',
      'font_size_base': '',
      'font_size_small': '',
      'font_size_extra_small': '',
      'font_weight_primary': 0,
      'font_weight_secondary': 0,
      'font_line_height_primary': '',
      'font_line_height_secondary': ''
    };
  }
};
</script>

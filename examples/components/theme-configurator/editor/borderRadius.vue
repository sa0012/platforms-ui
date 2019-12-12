<template>
  <section class="config" :key="displayName">
  </section>
</template>

<style>
.select {
  width: 100%;
}
</style>

<script>
import Mixin from './mixin';
import Input from './input';
import { getStyleDisplayName } from '../utils/utils.js';

export default {
  data() {
    return {
      options: [],
      value: ''
    };
  },
  components: {
    themeInput: Input
  },
  mixins: [Mixin],
  computed: {
    isGlobalInputValue() {
      return this.config.value.startsWith('$');
    }
  },
  methods: {
    onSelectChange(e) {
      this.onChange(e);
    },
    initSelectOption() {
      this.options = [];
      const golbalV = this.golbalValue.border;
      if (golbalV) {
        Object.keys(golbalV).forEach((font) => {
          if (font.includes('border-radius')) {
            const size = golbalV[font];
            this.options.push({
              value: size.key,
              label: getStyleDisplayName(size)
            });
          }
        });
      }
    }
  },
  watch: {
    'mergedValue': {
      immediate: true,
      handler(value) {
        this.initSelectOption();
        this.value = this.mergedValue;
      }
    }
  }
};
</script>
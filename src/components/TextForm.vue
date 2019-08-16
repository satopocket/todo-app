<template>
  <input v-model="inputValue" type="text" placeholder="タスク" class="input" />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TextForm",
  model: {
    prop: "newTask",
    event: "input"
  },
  props: {
    newTask: {
      type: String as PropType<string>,
      default: ""
    }
  },
  computed: {
    inputValue: {
      get(): string {
        return this.newTask;
      },
      set(newVal: string) {
        if (this.newTask !== newVal) this.$emit("input", newVal);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid;
  margin: 40px 0px 10px 10px;
}
</style>

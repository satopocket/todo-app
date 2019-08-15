<template>
  <input v-model="inputValue" type="text" placeholder="タスク" class="input" />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TextForm",
  props: {
    newTask: {
      type: String as PropType<string>,
      default: "",
      required: true
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

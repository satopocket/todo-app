<template>
  <input type="text" v-model="newTask" placeholder="タスク" class="input" />
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
  watch: {
    newTask(val, oldval) {
      this.$emit("input-new", val);
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

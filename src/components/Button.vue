<template>
  <button @click.prevent="addTask()" class="button">Button</button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
interface Task {
  name: string;
  done: boolean;
}
export default Vue.extend({
  name: "Button",
  methods: {
    addTask(): void {
      this.$emit("add-task");
    }
  }
});
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
  margin: 40px 0px 10px 20px;

  &:hover {
    background: #67c5ff;
    color: white;
  }
}
</style>

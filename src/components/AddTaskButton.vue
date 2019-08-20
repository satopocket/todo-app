<template>
  <button @click="addTask()" class="button">Button</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AddTaskButton",
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

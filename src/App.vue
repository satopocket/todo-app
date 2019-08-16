<template>
  <div id="app">
    <TextForm v-model="newTask" />
    <AddTaskButton @add-task="addTask" />
    <hr />
    <TaskList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
import { default as TextForm } from "@/components/TextForm.vue";
import { default as AddTaskButton } from "@/components/AddTaskButton.vue";
import { default as TaskList } from "@/components/TaskList.vue";

import Vue, { PropOptions } from "vue";
import { Task } from "@/components/types";
export default Vue.extend({
  name: "App",
  components: {
    TextForm,
    AddTaskButton,
    TaskList
  },
  computed: {
    newTask(): string {
      return this.$store.getters.newTask;
    },
    taskList(): Task[] {
      return this.$store.getters.taskList;
    }
  },
  methods: {
    addTask(): void {
      const task = { name: this.newTask, done: false };
      this.$store.commit("setTaskList", task);
      this.$store.commit("setNewTask", "");
    }
  }
});
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>

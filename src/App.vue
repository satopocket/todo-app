<template>
  <div id="app">
    <TextForm v-model="newTask" />
    <AddTaskButton @add-task="addTask" />
    <hr />
    <TaskList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { default as TextForm } from "@/components/TextForm.vue";
import { default as AddTaskButton } from "@/components/AddTaskButton.vue";
import { default as TaskList } from "@/components/TaskList.vue";
import { Task } from "@/components/types";
export default Vue.extend({
  name: "App",
  components: {
    TextForm,
    AddTaskButton,
    TaskList
  },
  computed: {
    newTask: {
      get(): string {
        return this.$store.getters.newTask;
      },
      set(value: string): void {
        this.$store.commit("setNewTask", value);
      }
    },
    taskList: {
      get(): string {
        return this.$store.getters.taskList;
      },
      set(task: Task): void {
        this.$store.commit("setTaskList", task);
      }
    }
  },
  methods: {
    addTask(): void {
      const task = { name: this.newTask, done: false };
      this.taskList = task;
      this.newTask = "";
    }
  }
});
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>

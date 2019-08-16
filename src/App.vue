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
  data() {
    return {
      taskList: [],
      newTask: ""
    } as {
      taskList: Task[];
      newTask: string;
    };
  },
  methods: {
    addTask(): void {
      let text = this.newTask.trim();
      if (!text) {
        return;
      }
      this.taskList.push({
        name: text,
        done: false
      });
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

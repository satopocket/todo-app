<template>
  <div id="app">
    <TextForm @input-new="inputNewTask" :newTask="newTask" />
    <Button @add-task="addTask" />
    <hr />
    <TaskList
      @change-show-mode="changeShowMode"
      :taskList="taskList"
      :isShownAllTask="isShownAllTask"
    />
  </div>
</template>

<script lang="ts">
import { default as TextForm } from "@/components/TextForm.vue";
import { default as Button } from "@/components/Button.vue";
import { default as TaskList } from "@/components/TaskList.vue";

import Vue, { PropOptions } from "vue";
interface Task {
  name: string;
  done: boolean;
}
export default Vue.extend({
  name: "App",
  components: {
    TextForm,
    Button,
    TaskList
  },
  data() {
    return {
      taskList: [],
      newTask: "",
      isShownAllTask: true
    } as {
      taskList: Task[];
      newTask: string;
      isShownAllTask: boolean;
    };
  },
  methods: {
    inputNewTask(task: string) {
      this.newTask = task;
    },
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
    },
    changeShowMode(mode: boolean) {
      this.isShownAllTask = mode;
    }
  }
});
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>

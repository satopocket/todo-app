<template>
  <div id="app">
    <form v-on:submit.prevent="addTask()">
      <input type="text" v-model="newTask" />
      <button>Button</button>
    </form>
    <hr />
    <select v-model="showType">
      <option value="all">タスクをすべて表示</option>
      <option value="exceptDone">完了済みのタスクを表示しない</option>
    </select>
    <div class="task-list" v-for="task in taskList" :key="task.name">
      <label v-if="isShow(task.done)" class="task-list__item">
        <input type="checkbox" v-model="task.done" />
        {{ task.name }}
      </label>
    </div>
    <p class="task-numbetr" v-cloak>
      {{ getUncompletedNum() }}/{{ taskList.length }}
    </p>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
interface Task {
  name: string;
  done: boolean;
}
export default Vue.extend({
  name: "app",
  data() {
    return {
      taskList: [],
      newTask: "",
      showType: "all"
    } as {
      taskList: Task[];
      newTask: string;
      showType: string;
    };
  },
  //   created() {
  //       this.taskList.length = 0;
  //   },
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
    },
    isShow(done: boolean): boolean {
      return (
        this.showType === "all" ||
        (this.showType === "exceptCompleted" && !done)
      );
    },
    getUncompletedNum(): number {
      let unCompletedTask = [];
      for (const task of this.taskList) {
        if (!task.done) {
          unCompletedTask.push(task);
        }
      }
      return unCompletedTask.length;
    }
  }
});
</script>

<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>

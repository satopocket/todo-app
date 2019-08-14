<template>
  <div id="app">
    <form @submit.prevent="addTask()">
      <input type="text" v-model="newTask" />
      <button>Button</button>
    </form>
    <hr />
    <select v-model="isShownAllTask">
      <option :value="true">タスクをすべて表示</option>
      <option :value="false">完了済みのタスクを表示しない</option>
    </select>
    <div class="task-list" v-for="task in taskList" :key="task.name">
      <label v-if="isShow(task.done)" class="task-list__item">
        <input type="checkbox" v-model="task.done" />
        {{ task.name }}
      </label>
    </div>
    <p class="task-count" v-cloak>{{ showTaskCount }}/{{ taskList.length }}</p>
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
      isShownAllTask: true
    } as {
      taskList: Task[];
      newTask: string;
      isShownAllTask: boolean;
    };
  },
  computed: {
    showTaskCount(): number {
      if (this.isShownAllTask) {
        return this.taskList.length;
      }
      return this.getunfinishedNum;
    },
    getunfinishedNum(): number {
      const unfinishedTasks = this.taskList.filter(task => !task.done);
      return unfinishedTasks.length;
    }
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
    },
    isShow(done: boolean): boolean {
      return this.isShownAllTask || (!this.isShownAllTask && !done);
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
  align-items: left;
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
[v-cloak] {
  display: none;
}
</style>

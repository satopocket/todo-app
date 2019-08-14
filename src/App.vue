<template>
  <div id="app">
    <form @submit.prevent="addTask()">
      <input type="text" v-model="newTask" placeholder="タスク" class="input" />
      <button class="button">Button</button>
    </form>
    <hr />
    <select v-model="isShownAllTask" class="select-box">
      <option :value="true">タスクをすべて表示</option>
      <option :value="false">完了済みのタスクを表示しない</option>
    </select>
    <div class="task-list">
      <template v-for="task in taskList">
        <label
          v-if="isShow(task.done)"
          class="task-list__item"
          :key="task.name"
        >
          <input type="checkbox" v-model="task.done" />
          {{ task.name }}
          <br />
        </label>
      </template>
      <p class="task-count" v-cloak>
        {{ showTaskCount }}/{{ taskList.length }}
      </p>
    </div>
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
[v-cloak] {
  display: none;
}

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

.input {
  border: 1px solid;
  margin: 40px 0px 10px 10px;
}

.select-box {
  position: absolute;
  top: 110px;
  left: 250px;
}

.task-list {
  margin-top: 50px;
  margin-left: 10px;
}

.task-count {
  margin-top: 40px;
  margin-left: 370px;
}
</style>

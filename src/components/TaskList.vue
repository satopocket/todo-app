<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
interface Task {
  name: string;
  done: boolean;
}
export default Vue.extend({
  name: "TaskList",
  props: {
    taskList: {
      type: Array as PropType<Task[]>,
      default: () => [],
      required: true
    },
    isShownAllTask: {
      type: Boolean as PropType<boolean>,
      default: false,
      required: true
    }
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
    isShow(done: boolean): boolean {
      return this.isShownAllTask || (!this.isShownAllTask && !done);
    }
  },
  watch: {
    isShownAllTask(val, oldval) {
      this.$emit("change-show-mode", val);
    }
  }
});
</script>

<style lang="scss" scoped>
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

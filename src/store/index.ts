import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import { Task } from "@/components/types";

Vue.use(Vuex);

const store: any = new Vuex.Store({
  // strict: true,
  state: {
    newTask: "" as string,
    taskList: [] as Task[]
  },
  getters: {
    newTask(state: any): string {
      return state.newTask;
    },
    taskList(state: any): Task[] {
      return state.taskList;
    }
  },
  mutations: {
    setNewTask(state: any, newTask: string) {
      state.newTask = newTask;
    },
    setTaskList(state: any, task: Task) {
      let text: string = task.name.trim();
      if (!text) {
        return;
      }
      state.taskList.push(task);
    }
  }
});
export default store;

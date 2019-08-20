import store from "../../src/store/index";

describe("mutations", () => {
  describe("setNewTask", () => {
    test("setNewTask", () => {
      const newTask = "task";
      store.commit("setNewTask", newTask);
      expect(store.state.newTask).toEqual(newTask);
    });
  });
  describe("setTaskList", () => {
    test("空文字", () => {
      const task = { name: "  ", done: false };
      store.commit("setTaskList", task);
      expect(store.state.taskList).not.toContain(task);
    });
    test("not 空文字", () => {
      const task = { name: "task", done: false };
      store.commit("setTaskList", task);
      expect(store.state.taskList).toContain(task);
    });
  });
});

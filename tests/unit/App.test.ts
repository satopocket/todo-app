import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  test("addTask(空文字)", () => {
    const wrapper = shallowMount(App);
    const wm: any = wrapper.vm;
    wm.newTask = "   ";
    wm.addTask();
    expect(wm.taskList).toEqual([]);
  });
  test("addTask(not空文字)", () => {
    const wrapper = shallowMount(App);
    const wm: any = wrapper.vm;
    wm.newTask = "task";
    wm.addTask();
    expect(wm.taskList).toEqual([{ name: "task", done: false }]);
  });
});

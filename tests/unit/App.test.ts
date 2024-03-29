import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import store from "@/store/index";

describe("App.vue", () => {
  test("addTask(空文字)", () => {
    const wrapper = shallowMount(App, {
      store
    });
    const wm: any = wrapper.vm;
    wm.newTask = "   ";
    wm.addTask();
    expect(wm.taskList).toEqual([]);
    expect(wm.newTask).toEqual("");
  });
  test("addTask(not空文字)", () => {
    const wrapper = shallowMount(App, {
      store
    });
    const wm: any = wrapper.vm;
    wm.newTask = "task";
    wm.addTask();
    expect(wm.taskList).toEqual([{ name: "task", done: false }]);
    expect(wm.newTask).toEqual("");
  });
});

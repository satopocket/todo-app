import { shallowMount } from "@vue/test-utils";
import AddTaskButton from "@/components/AddTaskButton.vue";

describe("AddTaskButton.vue", () => {
  test("addTask", () => {
    const wrapper = shallowMount(AddTaskButton);
    const wm: any = wrapper.vm;
    wm.addTask();
    expect(wrapper.emitted("add-task")).toBeTruthy();
  });
});

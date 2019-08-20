import { shallowMount } from "@vue/test-utils";
import TextForm from "@/components/TextForm.vue";
import store from "@/store/index";

describe("TextForm.vue", () => {
  test("setter of newTask", () => {
    const wrapper = shallowMount(TextForm, {
      store
    });
    store.state.newTask = "value";
    const wm: any = wrapper.vm;
    const newVal: string = "new value";
    wm.newTask = newVal;
    expect(store.state.newTask).toEqual(newVal);
  });
});

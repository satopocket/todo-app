import { shallowMount } from "@vue/test-utils";
import TextForm from "@/components/TextForm.vue";

describe("TextForm.vue", () => {
  test("not calls setter of inputValue", () => {
    const newTask: string = "value";
    const newVal: string = "value";
    const wrapper = shallowMount(TextForm, {
      propsData: { newTask }
    });
    const wm: any = wrapper.vm;
    wm.inputValue = newVal;
    expect(wrapper.emitted("input")).toBeFalsy();
  });
  test("calls setter of inputValue", () => {
    const newTask: string = "value";
    const newVal: string = "new value";
    const wrapper = shallowMount(TextForm, {
      propsData: { newTask }
    });
    const wm: any = wrapper.vm;
    wm.inputValue = newVal;
    expect(wrapper.emitted("input")).toBeTruthy();
  });
});

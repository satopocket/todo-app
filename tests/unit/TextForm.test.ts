import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TextForm from "@/components/TextForm.vue";
import store from "@/store/index";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TextForm.vue", () => {
  test("not calls setter of inputValue", () => {
    const newVal: string = "new value";
    const wrapper = shallowMount(TextForm, {
      store,
      localVue
    });
    store.state.newTask = "value";
    const wm: any = wrapper.vm;
    wm.newTask = newVal;
    expect(store.state.newTask).toEqual(newVal);
  });
  test("not calls setter of inputValue", () => {
    const newVal: string = "new value";
    const wrapper = shallowMount(TextForm, {
      store,
      localVue
    });
    store.state.newTask = "value";
    const wm: any = wrapper.vm;
    wm.newTask = newVal;
    expect(wm.newTask).toEqual(store.state.newTask);
    expect(store.state.newTask).toEqual(newVal);
  });
});

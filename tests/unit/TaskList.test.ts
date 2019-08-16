import { shallowMount } from "@vue/test-utils";
import TaskList from "@/components/TaskList.vue";
import { Task } from "@/components/types";

const factory = () => {
  return shallowMount(TaskList, {
    propsData: {
      taskList: []
    }
  });
};

describe("TaskList.vue", () => {
  describe("snapshot", () => {
    test("タスクなし", () => {
      const wrapper = factory();
      expect(wrapper.element).toMatchSnapshot();
    });
    test("タスク1つ", () => {
      const wrapper = factory();
      const taskList: Task[] = [{ name: "task1", done: false }];
      wrapper.setProps({ taskList });
      expect(wrapper.element).toMatchSnapshot();
    });
    test("タスク2つ", () => {
      const wrapper = factory();
      const taskList: Task[] = [
        { name: "task1", done: false },
        { name: "task2", done: false }
      ];
      wrapper.setProps({ taskList });
      expect(wrapper.element).toMatchSnapshot();
    });
    test("タスク2つ中1つ完了", () => {
      const wrapper = factory();
      const taskList: Task[] = [
        { name: "task1", done: false },
        { name: "task2", done: true }
      ];
      wrapper.setProps({ taskList });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
  describe("computed", () => {
    test("showTaskCount(isShownAllTask=true)", () => {
      const wrapper = factory();
      const taskList: Task[] = [
        { name: "task1", done: false },
        { name: "task2", done: false }
      ];
      wrapper.setProps({ taskList });
      const wm: any = wrapper.vm;
      wm.isShownAllTask = true;
      expect(wm.showTaskCount).toBe(2);
    });
    test("showTaskCount(isShownAllTask=false)", () => {
      const wrapper = factory();
      const taskList: Task[] = [
        { name: "task1", done: false },
        { name: "task2", done: true }
      ];
      wrapper.setProps({ taskList });
      const wm: any = wrapper.vm;
      wm.isShownAllTask = false;
      expect(wm.showTaskCount).toBe(wm.getUnfinishedNum);
    });
    test("getUnfinishedNum(未完了0件)", () => {
      const wrapper = factory();
      const taskList: Task[] = [
        { name: "task1", done: true },
        { name: "task2", done: true }
      ];
      wrapper.setProps({ taskList });
      const wm: any = wrapper.vm;
      expect(wm.getUnfinishedNum).toBe(0);
    });
    test("getUnfinishedNum(未完了1件)", () => {
      const wrapper = factory();
      const taskList: Task[] = [
        { name: "task1", done: false },
        { name: "task2", done: true }
      ];
      wrapper.setProps({ taskList });
      const wm: any = wrapper.vm;
      expect(wm.getUnfinishedNum).toBe(1);
    });
  });
  describe("methods", () => {
    test("isShow(isShownAllTask=true, done=true)", () => {
      const wrapper = factory();
      const wm: any = wrapper.vm;
      wm.isShownAllTask = true;
      expect(wm.isShow(true)).toBeTruthy();
    });
    test("isShow(isShownAllTask=true, done=false)", () => {
      const wrapper = factory();
      const wm: any = wrapper.vm;
      wm.isShownAllTask = true;
      expect(wm.isShow(false)).toBeTruthy();
    });
    test("isShow(isShownAllTask=false, done=true)", () => {
      const wrapper = factory();
      const wm: any = wrapper.vm;
      wm.isShownAllTask = false;
      expect(wm.isShow(true)).toBeFalsy();
    });
    test("isShow(isShownAllTask=false, done=false)", () => {
      const wrapper = factory();
      const wm: any = wrapper.vm;
      wm.isShownAllTask = false;
      expect(wm.isShow(false)).toBeTruthy();
    });
  });
});

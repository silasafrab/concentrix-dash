import { taskReducer } from "./taskReducer";
import { Task } from "@/types/Tasks";

describe("taskReducer", () => {
  const initialState: Task[] = [];

  it("should add a task", () => {
    const action = {
      type: "add",
      payload: {
        name: "New Task",
        description: "Task Description",
        priority: "high",
      },
    };

    const newState = taskReducer(initialState, action);
    expect(newState).toHaveLength(1);
    expect(newState[0]).toMatchObject({
      name: "New Task",
      description: "Task Description",
      priority: "high",
    });
    expect(newState[0]).toHaveProperty("id"); // Verifica se um id foi gerado
    expect(newState[0]).toHaveProperty("createAt"); // Verifica se a data de criação foi gerada
  });

  it("should remove a task", () => {
    const taskToRemove = {
      id: "1",
      name: "Task to Remove",
      description: "Description",
      createAt: new Date().toISOString(),
      priority: "low",
    };

    const stateWithTask = [...initialState, taskToRemove];

    const action = {
      type: "remove",
      payload: {
        id: "1",
      },
    };

    const newState = taskReducer(stateWithTask, action);
    expect(newState).toHaveLength(0);
  });

  it("should edit a task", () => {
    const taskToEdit = {
      id: "1",
      name: "Task to Edit",
      description: "Old Description",
      createAt: new Date().toISOString(),
      priority: "middle",
    };

    const stateWithTask = [...initialState, taskToEdit];

    const action = {
      type: "edit",
      payload: {
        id: "1",
        name: "Edited Task",
        description: "New Description",
        priority: "high",
      },
    };

    const newState = taskReducer(stateWithTask, action);
    expect(newState).toHaveLength(1);
    expect(newState[0]).toMatchObject({
      name: "Edited Task",
      description: "New Description",
      priority: "high",
    });
  });

  it("should return the current state if action type is unknown", () => {
    const action = {
      type: "unknown",
      payload: {},
    };

    const newState = taskReducer(initialState, action);
    expect(newState).toEqual(initialState); // Deve retornar o estado atual
  });
});

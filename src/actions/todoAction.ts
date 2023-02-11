import { axiosClient } from "@/utils/axiosClient";
import { Todo, TodoList } from "@/models/Todo";

export const getTodoList = async (): Promise<TodoList> => {
  const response = await axiosClient.get<TodoList>("/api/todo");
  return response.data;
};

export const getTodo = async (id: string): Promise<Todo> => {
  const response = await axiosClient.get<Todo>(`/api/todo/${id}`);
  return response.data;
};

export const postTodo = async (): Promise<Todo> => {
  const response = await axiosClient.post<Todo>(`/api/todo`);
  return response.data;
};

export const putTodo = async (id: string): Promise<Todo> => {
  const response = await axiosClient.put<Todo>(`/api/todo/put/${id}`);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const response = await axiosClient.delete<Todo>(`/api/todo/delete/${id}`);
  return response.data;
};

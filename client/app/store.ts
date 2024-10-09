import { create } from 'zustand';


interface Todo{
    id: number;
    text:string;
    completed:boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  restoreTodo: (id: number) => void;
  deletedTodos: Todo[];
  setDeletedTodos: (todo: Todo) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  deletedTodos: [],
  addTodo: (text) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  deleteTodo: (id) => {
    set((state) => {
      const todoToDelete = state.todos.find(todo => todo.id === id);
      if (todoToDelete) {
        // اضافه کردن تسک به لیست حذف شده
        return {
          todos: state.todos.filter((todo) => todo.id !== id),
          deletedTodos: [...state.deletedTodos, todoToDelete]
        };
      }
      return state;
    });
  },
  restoreTodo: (id) => {
    set((state) => {
      const todoToRestore = state.deletedTodos.find(todo => todo.id === id);
      if (todoToRestore) {
        return {
          deletedTodos: state.deletedTodos.filter((todo) => todo.id !== id),
          todos: [...state.todos, todoToRestore]
        };
      }
      return state;
    });
  },
  setDeletedTodos: (todo) => {
    set((state) => ({
      deletedTodos: [...state.deletedTodos, todo]
    }));
  }
}));

export default useTodoStore;



import { create } from 'zustand';  

interface Todo {  
    id: number;  
    text: string;  
    completed: boolean;  
}  

interface TodoStore {  
    todos: Todo[];  
    addTodo: (text: string) => void;  
    toggleTodo: (id: number) => void;  
    deleteTodo: (id: number) => void;  
    restoreTodo: (id: number) => void;  
    deletedTodos: Todo[];  
    setDeletedTodos: (todo: Todo) => void;  
    showMassage: Todo[];  
}  

// فقط داده‌های قابل ذخیره‌سازی  
interface PersistentTodoStore {  
    todos: Todo[];  
    deletedTodos: Todo[];  
    showMassage: Todo[];  
}  

// تابعی برای ذخیره‌سازی داده‌ها در Local Storage  
const saveToLocalStorage = (state: PersistentTodoStore) => {  
    localStorage.setItem('todos', JSON.stringify(state.todos));  
    localStorage.setItem('deletedTodos', JSON.stringify(state.deletedTodos));  
    localStorage.setItem('showMassage', JSON.stringify(state.showMassage));  
};  

// تابعی برای بارگذاری داده‌ها از Local Storage  
const loadFromLocalStorage = (): PersistentTodoStore => {  
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');  
    const deletedTodos = JSON.parse(localStorage.getItem('deletedTodos') || '[]');  
    const showMassage = JSON.parse(localStorage.getItem('showMassage') || '[]');  
    return { todos, deletedTodos, showMassage };  
};  

const useTodoStore = create<TodoStore>((set) => {  
    let deleteTimer: NodeJS.Timeout | null = null; // متغیر برای ذخیره شناسه تایمر  

    // بارگذاری داده‌ها از Local Storage  
    const { todos, deletedTodos, showMassage } = loadFromLocalStorage();  

    return {  
        todos: todos || [],  
        deletedTodos: deletedTodos || [],  
        showMassage: showMassage || [],  
        addTodo: (text) => {  
            const newTodo: Todo = { id: Date.now(), text, completed: false };  
            set((state) => {  
                const updatedState = { todos: [...state.todos, newTodo] };  
                saveToLocalStorage({ ...state, ...updatedState });  
                return updatedState;  
            });  
        },  

        toggleTodo: (id) => {  
            set((state) => {  
                const todo = state.todos.find(todo => todo.id === id);  
                if (todo) {  
                    const updatedTodo = { ...todo, completed: !todo.completed };  
                    const updatedState = {  
                        todos: state.todos.map((todo) => todo.id === id ? updatedTodo : todo),  
                    };  
                    saveToLocalStorage({ ...updatedState, deletedTodos: state.deletedTodos, showMassage: state.showMassage });  
                    return updatedState;  
                }  
                return state;  
            });  
        },  

        deleteTodo: (id) => {  
            set((state) => {  
                const todoToDelete = state.todos.find(todo => todo.id === id);  
                if (todoToDelete) {  
                    const updatedShowMassage = [...state.showMassage, todoToDelete];  

                    // اگر تایمر قبلاً تنظیم شده باشد، آن را لغو کنید  
                    if (deleteTimer) {  
                        clearTimeout(deleteTimer);  
                    }  

                    deleteTimer = setTimeout(() => {  
                        set((state) => {  
                            const updatedState = {  
                                showMassage: state.showMassage.filter(todo => todo.id !== id),  
                                todos: state.todos.filter((todo) => todo.id !== id),  
                                deletedTodos: [...state.deletedTodos, todoToDelete],  
                            };  
                            saveToLocalStorage(updatedState);  
                            return updatedState;  
                        });  
                    }, 9000); // 9 ثانیه تاخیر  

                    const updatedState = {  
                        todos: state.todos.filter((todo) => todo.id !== id),  
                        deletedTodos: [...state.deletedTodos, todoToDelete],  
                        showMassage: updatedShowMassage,  
                    };  
                    saveToLocalStorage(updatedState);  
                    return updatedState;  
                }  
                return state;  
            });  
        },  

        restoreTodo: (id) => {  
            set((state) => {  
                const todoToRestore = state.deletedTodos.find(todo => todo.id === id);  
                if (todoToRestore) {  
                    // لغو تایمر اگر هنوز فعال است  
                    if (deleteTimer) {  
                        clearTimeout(deleteTimer);  
                        deleteTimer = null; // شناسه تایمر را پاک کنید  
                    }  

                    const updatedState = {  
                        deletedTodos: state.deletedTodos.filter((todo) => todo.id !== id),  
                        todos: [...state.todos, todoToRestore],  
                        showMassage: state.showMassage.filter(todo => todo.id !== id)  
                    };  
                    saveToLocalStorage(updatedState);  
                    return updatedState;  
                }  
                return state;  
            });  
        },  

        setDeletedTodos: (todo) => {  
            set((state) => {  
                const updatedState = {  
                    deletedTodos: [...state.deletedTodos, todo]  
                };  
                
                return updatedState;  
            });  
        }  
    };  
});  

export default useTodoStore;
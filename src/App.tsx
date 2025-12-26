
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import styles from './App.module.css';
import TodosContextProvider from './store/todos-context';

function App() { 

  return (
    <TodosContextProvider>
      <div className={styles.app}>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;

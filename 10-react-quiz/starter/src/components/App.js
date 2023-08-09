import Header from './Header';
import Main from './Main';
import { QuizProvider } from '../contexts/QuizContext';

export default function App() {
  return (
    <QuizProvider>
      <div className='app'>
        <Header />
        <Main className='main'></Main>
      </div>
    </QuizProvider>
  );
}

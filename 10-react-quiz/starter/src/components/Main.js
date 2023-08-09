import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
import { useQuiz } from '../contexts/QuizContext';

function Main() {
  const { status } = useQuiz();

  return (
    <main className='main'>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen />}
      {status === 'active' && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === 'finished' && <FinishScreen />}
    </main>
  );
}

export default Main;

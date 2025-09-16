import { Provider } from '@/components/ui/provider'
import AppRouter from './routes.jsx';

function App() {
  return (
    <Provider>
      <AppRouter />
    </Provider>
  );
}

export default App;
import './App.css';
import Room from './components/Room';
import { RoomNavigationProvider } from './hooks/RoomNavigationContext';

function App() {

  return (
    <RoomNavigationProvider>
      <Room />
    </RoomNavigationProvider>
  );
}

export default App;

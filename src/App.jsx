import MainRouter from './components/router/MainRouter';
import RoomProvider from './components/context/roomsContext';

function App() {
  return (
    <div className="App">
      <RoomProvider>
        <MainRouter />
      </RoomProvider>
    </div>
  );
}

export default App;

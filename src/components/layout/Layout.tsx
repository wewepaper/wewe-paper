import { Outlet } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full border border-gray-200">
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-4 pt-[55px]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;


import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ShortView from './components/ShortView';

const mainVideoContainerRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body />,
    children : [
      {
        path : '/',
        element : <MainContainer />
      },
      {
        path : "/watch",
        element : <WatchPage />
      },
      {
        path : "/short",
        element : <ShortView />
      }
    ]
  },
])

function App() {
  return (
    <div className=''>
      <Header />
      <RouterProvider router={mainVideoContainerRouter}/>
    </div>
  );
}

export default App;

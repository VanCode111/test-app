import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {userSlice} from './store/reducers/UserSlice';
import {fetchUsers} from './store/reducers/ActionCreator';
import PhotosGrid from './components/PhotosGrid';
import Container from '@mui/material/Container';

function App() {
  const dispatch = useDispatch();
  


  useEffect (() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <Container>
        <PhotosGrid/>
      </Container>
      
      
    </div>
  );
}

export default App;
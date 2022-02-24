import axios from 'axios';
import {userSlice} from './UserSlice';

export const fetchUsers = () => async (dispatch) => {
    try{
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
        const albumIds = new Set();
        response.data.forEach((i) => {
            albumIds.add(i.albumId);
        });
        dispatch(userSlice.actions.setAlbumIds(Array.from(albumIds)));
    }catch(e){
        dispatch(userSlice.actions.usersFetchingError(e.message));
    }
};

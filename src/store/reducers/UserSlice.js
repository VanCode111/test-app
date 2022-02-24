import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    photos: [],
    albumIds: [],
    isLoading: false,
    photoDialog: {
        open: false,
        imgUrl: null,
    },
    error: '',
};
    
export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        usersFetching (state) {
            state.isLoading = true;
        },
        usersFetchingSuccess (state, action) {
            state.isLoading = false;
            const photos = action.payload;
            state.photos = photos;
        },
        usersFetchingError (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        deletePhoto (state, action) {
            state.photos = state.photos.filter(photo => photo.id != action.payload);
        },
        closeDialog (state) {
            state.photoDialog.open = false;
        },
        openDialog (state, action) {
           
                state.photoDialog.imgUrl = action.payload; 
                state.photoDialog.open = true;
           
        
        },
        setAlbumIds (state, action) {
            state.albumIds = action.payload;
        }
    }
});

export default userSlice.reducer;
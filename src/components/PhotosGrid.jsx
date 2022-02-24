import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import ImageCard from "./ImageCard";
import Typography from "@mui/material/Typography";
import ImageDialog from "./ImageDialog";
import CircularProgress from "@mui/material/CircularProgress";
import Filter from "./Filter";

const PhotosGrid = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [albumFilter, setAlbumFilter] = useState(null);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const { photos, isLoading, error, albumIds } = useSelector(
    (store) => store.userReducer
  );
  let filteredPhotos = photos;

  if (albumFilter) {
    filteredPhotos = photos.filter((photo) => photo.albumId === albumFilter);
  }

  const amountCards = 36;
  const amountPage = Math.ceil(filteredPhotos.length / amountCards);

  const handlePage = (e, value) => {
    setPageNumber(--value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFilter = (albumId) => {
    setAlbumFilter(albumId);
  };

  useEffect(() => {
    setPageNumber(1);
  }, [albumFilter]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="photos-grid">
      <Filter albumIds={albumIds} handleChange={handleFilter} />
      {albumFilter && (
        <Typography sx={{ marginBottom: 2 }}>AlbumId: {albumFilter}</Typography>
      )}

      <Grid container spacing={2}>
        {filteredPhotos
          .slice(
            pageNumber * amountCards,
            pageNumber * amountCards + amountCards
          )
          .map((i, index) => {
            return (
              <ImageCard
                thumbnailUrl={i.thumbnailUrl}
                key={i.id}
                imgUrl={i.url}
                id={i.id}
              />
            );
          })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Pagination
          count={amountPage}
          size="large"
          page={pageNumber}
          onChange={handlePage}
        />
      </Box>
      <ImageDialog open={openDialog} />
    </div>
  );
};

export default PhotosGrid;

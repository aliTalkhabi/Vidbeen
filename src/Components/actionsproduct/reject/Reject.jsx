import { Box, Typography } from "@mui/material";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { memo, useState } from "react";

const Reject = memo(function MyReject() {
  const [dislikes, setDisLikes] = useState(0);
  const [disliked, setDisLiked] = useState(false);

  const handleDisLikes = () => {
    if (!disliked) {
      setDisLikes(dislikes + 1);
      setDisLiked(true);
    } else {
      setDisLikes(dislikes - 1);
      setDisLiked(false);
    }
  };
  return (
    <Box
      component="section"
      sx={{
        display: "inline-flex",
        flexWrap: "nowrap",
        alignItems: "center",
        margin: "0 .5rem",cursor:'pointer'
      }}
      onClick={handleDisLikes}
    >
      {disliked ? (
        <ThumbDownRoundedIcon
          sx={{
            color: { xs: "#B6B3C2", sm: "#B6B3C2", md: "#150578" },
            fontSize: "28px",
            marginRight: ".5rem",
          }}
        />
      ) : (
        <ThumbDownAltOutlinedIcon
          sx={{
            color: { xs: "#B6B3C2", sm: "#B6B3C2", md: "#150578" },
            fontSize: "28px",
            marginRight: ".5rem",
          }}
        />
      )}

      <Typography
        component="p"
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        دوست نداشتم {dislikes}
      </Typography>
    </Box>
  );
});
export default Reject;

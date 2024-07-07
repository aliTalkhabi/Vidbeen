import { Box, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import { memo, useState } from "react";

const Approbate = memo(function MyLikes() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikes = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: "inline-flex",
        flexWrap: "nowrap",
        alignItems: "center",
        margin: "0 .5rem",
        marginRight: "0",
      }}
      onClick={handleLikes}
    >
      {liked ? (
        <ThumbUpRoundedIcon
          sx={{
            color: { xs: "#B6B3C2", sm: "#B6B3C2", md: "#150578" },
            fontSize: "28px",
            marginRight: ".5rem",
          }}
        />
      ) : (
        <ThumbUpOutlinedIcon
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
        دوست داشتم {likes}
      </Typography>
    </Box>
  );
});
export default Approbate;

import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Typography } from "@mui/material";
export default function Copy() {
    return (<>
        <SaveAltIcon
            sx={{
                color: { xs: "#B6B3C2", sm: "#B6B3C2", md: "#150578" },
                fontSize: "28px",
                marginRight: ".5rem",
            }}
        />
        <Typography
            component="p"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
            کپی کردن
        </Typography>
    </>)
}
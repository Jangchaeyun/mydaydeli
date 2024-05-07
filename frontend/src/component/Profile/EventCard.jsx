import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }} style={{ fontFamily: "Ownglyph_meetme-Rg" }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://mblogthumb-phinf.pstatic.net/MjAyMjA2MDJfMTEg/MDAxNjU0MTM1NzExMjY2.VvHVDtn62IDdE1ne7PZvTE51gbRvqdQBZOTj4vgibfYg.4mi24m9X-WGkQS50Bjmd1FE-mi7FEpVcAwnltWxF3_Ig.JPEG.hana9538/IMG_9652.jpg?type=w800"
        />
        <CardContent>
          <Typography variant="h5" style={{ fontFamily: "Ownglyph_meetme-Rg" }}>
            슬로우 캘리
          </Typography>
          <Typography
            variant="body2"
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          >
            챳 주문시 20% 할인
          </Typography>
          <div className="py-2 space-y-2">
            <p>{"포케"}</p>
            <p className="text-sm text-blue-500">2024-05-07 화요일 12:00AM</p>
            <p className="text-sm text-red-500">2024-05-09 목요일 12:00AM</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;

import React, { useState } from "react";
import {
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";

export default function CustomPagination() {
  const [page, setPage] = useState(4);

  return (
    <Stack spacing={2} alignItems="center" sx={{ p: 2 }}>
      <Pagination
        count={100}
        page={page}
        onChange={(e, value) => setPage(value)}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              previous: () => <KeyboardDoubleArrowLeft/>,
              next: () => <KeyboardDoubleArrowRight/>,
            }}
          />
        )}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
            borderColor: "teal",
            cursor: "pointer",
          },

          "& .Mui-selected": {
            backgroundColor: "cyan !important",
            color: "white !important",
            borderColor: "cyan",
          },

          "& .Mui-selected:hover": {
            backgroundColor: "cyan !important",
            color: "white !important",
          },
        }}
      />
    </Stack>
  );
}
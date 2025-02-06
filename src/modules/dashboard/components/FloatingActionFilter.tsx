import { Fab, Tooltip } from "@mui/material";
import { Tune } from "@mui/icons-material";

function FloatingActionFilter() {
  return (
    <Tooltip title="Filtro" arrow>
      <Fab
        color="secondary"
        onClick={() => alert("Filtro")}
        sx={{
          position: "fixed",
          top: 16,
          right: 30,
          zIndex: 1000,
        }}
      >
        <Tune />
      </Fab>
    </Tooltip>
  );
}

export default FloatingActionFilter;

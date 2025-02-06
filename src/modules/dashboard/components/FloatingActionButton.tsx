import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

function FloatingActionButton() {
  return (
    <Tooltip title="Abrir Formulário" arrow>
      <Fab
        color="primary"
        onClick={() => alert("Abrir formulário")}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 30,
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}

export default FloatingActionButton;

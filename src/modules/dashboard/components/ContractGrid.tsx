import {
  Tooltip,
  Grid,
  Typography,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Contract } from "../interfaces/Contract";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { SearchIcon } from "lucide-react";

function ContractGrid({ contracts }: { contracts: Contract[] }) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "client", headerName: "Cliente", flex: 1 },
    {
      field: "startDate",
      headerName: "Data de Início",
      flex: 1,
      valueFormatter: ({ value }) => value,
    },
    {
      field: "endDate",
      headerName: "Data de Vencimento",
      flex: 1,
      valueFormatter: ({ value }) => value,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: GridRenderCellParams<GridValidRowModel>) => (
        <Tooltip title={`Status: ${params.value}`} arrow>
          <Chip label={params.value} color={getStatusColor(params.value)} />
        </Tooltip>
      ),
    },
    { field: "value", headerName: "Valor", flex: 1 },
    { field: "type", headerName: "Tipo", flex: 1 },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#fefefe",
        borderRadius: "1rem",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.01)",
        padding: "1rem",
      }}
    >
      <Grid item xs={9}>
        <Typography variant="h6" fontWeight="bold">
          Tabela de Contratos
        </Typography>
      </Grid>
      <Grid item xs={3} style={{ paddingRight: "1rem" }}>
        <TextField
          fullWidth
          placeholder="Buscar contratos"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <DataGrid
        style={{ margin: "1rem" }}
        rows={contracts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.01)",
          borderRadius: "1rem",
        }}
      />
    </Grid>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "Ativo":
      return "success";
    case "Pendente Renovação":
      return "warning";
    case "Expirado":
      return "error";
    default:
      return "default";
  }
}

export default ContractGrid;

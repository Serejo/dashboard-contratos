import { Tooltip, Grid, Typography, Chip } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";
import { Contract } from "../interfaces/Contract";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";

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
          <Chip
            label={params.value}
            color={getStatusColor(params.value)}
            icon={<InfoIcon />}
          />
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
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold">
          Tabela de Contratos
        </Typography>
      </Grid>

      <DataGrid
        rows={contracts}
        columns={columns}
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

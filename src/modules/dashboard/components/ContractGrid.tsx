import { Tooltip, Grid, Typography, Chip } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";
import { Contract } from "../interfaces/Contract";

function ContractGrid({ contracts }: { contracts: Contract[] }) {
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

      {/* Cabeçalho */}
      <Grid container item xs={12} spacing={2} sx={{ fontWeight: "bold" }}>
        <Grid item xs={2}>
          <Typography>ID</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Cliente</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Data de Início</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Data de Vencimento</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Status</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Valor</Typography>
        </Grid>
      </Grid>

      {/* Dados */}
      {contracts.length > 0 ? (
        contracts.map((contract) => (
          <Grid container item xs={12} spacing={2} key={contract.id}>
            <Grid item xs={2}>
              <Typography>{contract.id}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{contract.client}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{contract.startDate}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{contract.endDate}</Typography>
            </Grid>
            <Grid item xs={2}>
              {/* Tooltip para status */}
              <Tooltip title={`Status: ${contract.status}`} arrow>
                <Chip
                  label={contract.status}
                  color={getStatusColor(contract.status)}
                  icon={<InfoIcon />}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Typography>{contract.value}</Typography>
            </Grid>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography textAlign="center" color="gray">
            Nenhum contrato cadastrado
          </Typography>
        </Grid>
      )}
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

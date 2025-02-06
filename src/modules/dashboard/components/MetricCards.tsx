import Grid from "@mui/material/Grid2";
import { Metric } from "../interfaces/Metric";
import { Card, CardContent, IconButton, Typography } from "@mui/material";

function MetricCards({ metrics }: { metrics: Metric[] }) {
  return (
    <Grid
      container
      spacing={2}
      className=""
      size={12}
      style={{
        gap: "1rem",
        justifyContent: "center",
        marginTop: "1rem",
        flexFlow: "nowrap",
      }}
    >
      {metrics.map((metric, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Card
            elevation={1}
            sx={{
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton color="primary" size="large">
                {metric.icon}
              </IconButton>
              <div>
                <Typography fontWeight="bold" noWrap title={metric.title}>
                  {metric.title}
                </Typography>
                <Typography variant="h6" color="primary">
                  {metric.value}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MetricCards;

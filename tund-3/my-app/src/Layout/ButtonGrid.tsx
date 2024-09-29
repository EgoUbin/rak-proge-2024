import ButtonUsage from "../Components/ButtonUsage"
import Grid from "@mui/material/Grid2"
import Box from "@mui/material/Box"

export default function ButtonGrid() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      bgcolor={"#282c24"}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid size={6}>
          <ButtonUsage></ButtonUsage>
        </Grid>
        <Grid size={6}>
          <ButtonUsage></ButtonUsage>
        </Grid>
        <Grid size={4}>
          <ButtonUsage></ButtonUsage>
        </Grid>
        <Grid size={8}>
          <ButtonUsage></ButtonUsage>
        </Grid>
        <Grid size={11}>
          <ButtonUsage></ButtonUsage>
        </Grid>
        <Grid size={1}>
          <ButtonUsage></ButtonUsage>
        </Grid>
        <Grid size={12}>
          <ButtonUsage></ButtonUsage>
        </Grid>
      </Grid>
    </Box>
  )
}

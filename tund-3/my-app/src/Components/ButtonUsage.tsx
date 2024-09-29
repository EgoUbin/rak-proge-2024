import * as React from "react"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#282c34",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}))

export default function ButtonUsage() {
  return (
    <Item>
      <Button
        fullWidth
        variant="contained"
      >
        Button Grid!!
      </Button>
    </Item>
  )
}

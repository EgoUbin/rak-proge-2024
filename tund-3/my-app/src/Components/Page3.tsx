import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Grid from "@mui/material/Grid2"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { FormEvent, useState, useEffect } from "react"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#242c34",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}))

function Page3() {
  const [form, setForm] = useState({ input: "" })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(form)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Grid
      container
      spacing={2}
      bgcolor={"#282c24"}
    >
      <Grid size={12}>
        <Item>
          {" "}
          <Box> Egon Ubina </Box>{" "}
        </Item>
      </Grid>
      <Grid size={12}>
        <Item>
          {" "}
          <Box>
            {" "}
            <List sx={{ width: "100%" }}>
              <ListItem> TTRPG </ListItem>
              <ListItem> Biking </ListItem>
              <ListItem> Emulation </ListItem>
            </List>{" "}
          </Box>{" "}
        </Item>
      </Grid>
      <Grid size={12}>
        <Item>
          {" "}
          <Box>
            {" "}
            <Button
              fullWidth
              variant="contained"
            >
              {" "}
              Action!!!{" "}
            </Button>{" "}
          </Box>{" "}
        </Item>
      </Grid>
      <Grid size={12}>
        <Item>
          {" "}
          <Box>
            {" "}
            <form onSubmit={handleSubmit}>
              <TextField
                name="input"
                label="Input"
                variant="outlined"
                onChange={handleChange}
              />
              <Button
                variant="contained"
                type="submit"
              >
                {" "}
                Enter{" "}
              </Button>
            </form>{" "}
          </Box>{" "}
        </Item>
      </Grid>
    </Grid>
  )
}

export default Page3

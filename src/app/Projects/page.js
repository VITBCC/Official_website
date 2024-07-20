"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
} from "@mui/material";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
    handleClose();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0fae96",
            color: "white",
            "&:hover": {
              backgroundColor: "#2a2b23",
            },
          }}
          onClick={handleClickOpen}
        >
          Suggest a project
        </Button>
      </Box>
      <ProjectGrid />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below to tell about your idea.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Project Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={formData.description}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

"use client"
import * as React from 'react';
import Meteors from '@/components/ui/meteors';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import toast, { Toaster } from 'react-hot-toast';
import SparklesText from '@/components/magicui/sparkles-text';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
        background: 'black',
        minHeight: '100vh', // Full page gradient
    })
);

const AppBarStyled = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const mentors = ["Gagan", "Divij", "Ujwal", "Shagun", "Kanishka", "Mitisha", "Dhriti", "Vishal"];
    const [selectedMentors, setSelectedMentors] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [techStack, setTechStack] = useState([]);
    const [techInput, setTechInput] = useState("");
    const [selectedImage, setSelectedImage] = useState();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [fileLink, setFileLink] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    // useEffect(async () => {
    //     // await getUploadLink();
    // }, [])

    console.log(selectedMentors)

    async function getUploadLink() {
        const formData = new FormData();

        // Append project details to formData
        formData.append("name", projectName);
        formData.append("description", projectDesc);

        // Append technologies and mentors as arrays
        techStack.forEach(tech => formData.append("technologies[]", tech));
        selectedMentors.forEach(mentor => formData.append("mentors[]", mentor));

        formData.append("userId", "669b74c95aaf2239644d847b");

        // Append selected images to formData
        if (selectedImage) {
            formData.append("coverImage", selectedImage);
        }

        try {
            const response = await fetch("http://localhost:8003/api/v1/projects/upload", {
                method: "POST",
                body: formData // Use formData directly
            });

            const result = await response.json();
            if (result.success) {
                setIsOpen(false);
                toast.success("Thanks for submitting the project idea.");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.error("Error uploading project:", error);
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleMentorChange = (e) => {
        const value = e.target.value;
        if (value && !selectedMentors.includes(value)) {
            setSelectedMentors([...selectedMentors, value]);
        }
    };

    // Remove mentor
    const removeMentor = (mentor) => {
        setSelectedMentors(selectedMentors.filter(item => item !== mentor));
    };

    const handleTechAdd = () => {
        if (techInput && !techStack.includes(techInput)) {
            setTechStack([...techStack, techInput]);
            setTechInput("");
        }
    };

    const removeTech = (tech) => {
        setTechStack(techStack.filter(item => item !== tech));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0]; // Get the first file (assuming single image upload)
        setSelectedImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Submitted", { selectedMentors, techStack, selectedImage });
        await getUploadLink();
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <CssBaseline />
            <AppBarStyled position="fixed" open={open} sx={{ backgroundColor: '#333' }} className='bg-black bg-opacity-50 font-bold'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" className='text-center w-screen font-mono'>
                        {`Welcome ${"Gagan Chaudhary"} to the official page of VIT BCC.`}
                    </Typography>
                </Toolbar>
            </AppBarStyled>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader className='lg:flex lg:justify-around'>
                    <h2>VIT BCC Logo Here</h2>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Home', 'All Events', 'Register Event', 'All Projects', 'Post Project'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Leaderboard', 'Ask Query', 'Contact Us'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <div className="relative overflow-hidden whitespace-pre-wrap flex flex-col justify-center items-center h-full text-center p-8 bg-gradient dark text-white">
                    <Meteors number={40} />
                    <h1 className="text-4xl font-bold mb-6">Be Part of the </h1>
                    <SparklesText
                        text="Blockchain Revolution!"
                    />
                    <p className="text-lg max-w-2xl mb-4 mt-4">
                        Welcome to the <span className="font-semibold">VIT Blockchain Community</span>, where innovation meets decentralized technology!
                        We are always looking for exciting new ideas that push the boundaries of blockchain.
                    </p>
                    <p className="text-lg max-w-2xl mb-4">
                        Got a project concept that you think could shape the future of blockchain?
                        Whether it's in DeFi, NFTs, smart contracts, or any other area, we'd love to hear it.
                        Your ideas can help us bring groundbreaking solutions to life, and we can work together to make them happen!
                    </p>
                    <p className="text-lg max-w-2xl mb-6">
                        Suggest your next big idea and let’s build a decentralized tomorrow!
                    </p>
                    <div className="mt-8">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Submit Idea
                                </button>
                            </DialogTrigger>
                            <DialogContent className="text-black">
                                <DialogHeader>
                                    <DialogTitle>Submit Your Project Idea</DialogTitle>
                                    <DialogDescription>
                                        Fill out all the mandatory fields to submit your project.
                                    </DialogDescription>
                                </DialogHeader>

                                <form onSubmit={handleSubmit}>
                                    {/* Project Name */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2">
                                            Project Name <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            onChange={(e) => setProjectName(e.target.value)}
                                            type="text"
                                            required
                                            className="border border-gray-300 rounded-md py-2 px-4 w-full"
                                            placeholder="Enter project name"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2">
                                            Description <span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            onChange={(e) => setProjectDesc(e.target.value)}
                                            required
                                            className="border border-gray-300 rounded-md py-2 px-4 w-full"
                                            placeholder="Describe your project"
                                        />
                                    </div>

                                    {/* Mentors Dropdown */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2">
                                            Select Mentors <span className="text-red-600">*</span>
                                        </label>
                                        <div className="flex items-center">
                                            <select
                                                value=""
                                                onChange={handleMentorChange}
                                                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                                            >
                                                <option value="" disabled>Select a mentor</option>
                                                {mentors.map((mentor, index) => (
                                                    <option key={index} value={mentor}>
                                                        {mentor}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            {selectedMentors.map((mentor, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                                >
                                                    {mentor}{" "}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeMentor(mentor)}
                                                        className="text-red-600 ml-1"
                                                    >
                                                        &times;
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack Input */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2">
                                            Tech Stack <span className="text-red-600">*</span>
                                        </label>
                                        <div className="flex items-center">
                                            <input
                                                type="text"
                                                value={techInput}
                                                onChange={(e) => setTechInput(e.target.value)}
                                                className="border border-gray-300 rounded-md py-2 px-4 mr-2 w-full"
                                                placeholder="Type and press add"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleTechAdd}
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
                                            >
                                                Add
                                            </button>
                                        </div>
                                        <div className="mt-2">
                                            {techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                                >
                                                    {tech}{" "}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTech(tech)}
                                                        className="text-red-600 ml-1"
                                                    >
                                                        &times;
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image Upload */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2">
                                            Upload Images (png, jpeg, jpg) <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="file"
                                            required
                                            accept="image/png, image/jpeg, image/jpg"
                                            multiple
                                            onChange={handleImageUpload}
                                            className="border border-gray-300 rounded-md py-2 px-4 w-full"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
                                    >
                                        Submit Project
                                    </button>
                                </form>

                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </Main>

        </Box>
    );
}

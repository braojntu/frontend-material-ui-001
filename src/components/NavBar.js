import { AppBar, Toolbar, Typography, InputBase, makeStyles, alpha, Badge, Avatar } from "@material-ui/core";
import { Cancel, Notifications, Search } from '@material-ui/icons';
import Mail from '@material-ui/icons/Mail';
import { useState } from "react";



const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "blueviolet",
        color: "white"
    },

    logoLg: {
        display: "none",
        fontWeight: 700,
        backgroundColor:"white",
        color:"#555",
        padding: theme.spacing(1),
        borderRadius: "5px",
        marginLeft: theme.spacing(-1.5),
        [theme.breakpoints.up("sm")]: {
            display: "block",
        }
    },

    logoSm: {
        display: "block",
        fontWeight: 700,
        backgroundColor:"white",
        color:"#555",
        padding: theme.spacing(1),
        borderRadius: "50px",
        marginLeft: theme.spacing(-1.5),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        height:"40px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%",
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        //gap: "20px", gap or spacing can be used
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),

    },
    badge: {
        marginRight: theme.spacing(2),
    }

}));

function NavBar() {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Material UI Project
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    MUI
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

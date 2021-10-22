import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
        marginBottom: theme.spacing(1),

    },
    avatar: {
        marginBottom: theme.spacing(2),
    },
    imagelist: {
        fontWeight: 500,
    },
    link: {
        marginRight: theme.spacing(2),
        fontSize: 16,
        color: "#555",
    },

}));

function RightBar() {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Online friends</Typography>
            <AvatarGroup max={6} className={classes.avatar}>
                <Avatar alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <Avatar alt="Travis Howard"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <Avatar alt="Cindy Baker"
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" />
                <Avatar alt="Agnes Walker"
                    src="https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <Avatar alt="Trevor Henderson"
                    src="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NzE3NDMyMjh8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=60" />
                <Avatar alt="Trevor Henderson"
                    src="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NzE3NDMyMjh8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=60" />
                <Avatar alt="Trevor Henderson"
                    src="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NzE3NDMyMjh8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=60" />
            </AvatarGroup>
            <Typography className={classes.title}>Gallery</Typography>
            <ImageList cols={1} className={classes.imagelist} style={{ marginBottom: 3 }}>
                <ImageListItem >
                    <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="" />
                </ImageListItem>
            </ImageList>
            <ImageList cols={2} className={classes.imagelist} style={{ marginBottom: 3 }}>

                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1500484083096-6a769f58a83d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MzcyMTM2OXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                </ImageListItem>

                <ImageListItem >
                    <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1584493548078-64a61088686a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTEwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                </ImageListItem>


                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="" />
                </ImageListItem>

                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="" />
                </ImageListItem>


                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1542227584-47a3901b07a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </ImageListItem>
            </ImageList>

            <ImageList cols={1} className={classes.imagelist} style={{ marginBottom: 20 }}>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMDg5MjQxfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                </ImageListItem>
            </ImageList>

            <Typography className={classes.title} >Categories</Typography>
            <Link href="#" className={classes.link} variant="body2">
                Sports
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Food
            </Link>
            <Divider flexItem style={{ marginBottom: 5 }} />
            <Link href="#" className={classes.link} variant="body2">
                Movies
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Science
            </Link>
            <Divider flexItem style={{ marginBottom: 5 }} />
            <Link href="#" className={classes.link} variant="body2">
                Finance
            </Link>
            <Link href="#" className={classes.link} variant="body2" >
                Health
            </Link>
            <Divider flexItem style={{ marginBottom: 10 }} />

        </Container>
    );
}

export default RightBar;

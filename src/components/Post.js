import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        }

    },
    card: {
        marginBottom: theme.spacing(5),
    }

}));

function Post() {
    const classes = useStyles()
    return (
        <Container>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}
                image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                title="Healthy Food"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">Social Media Card</Typography>
                    <Typography variant="body2">
                        Irure consectetur voluptate aliquip ut aliquip exercitation. Nulla nulla ea ut quis in quis deserunt exercitation nisi occaecat ad. Eiusmod voluptate irure commodo dolore nostrud nostrud aute sit eiusmod ullamco irure duis dolore excepteur. Irure consectetur voluptate aliquip ut aliquip exercitation. Nulla nulla ea ut quis in quis deserunt exercitation nisi occaecat ad. Eiusmod voluptate irure commodo dolore nostrud nostrud aute sit eiusmod ullamco irure duis dolore excepteur 
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
        </Container>
    );
}

export default Post;

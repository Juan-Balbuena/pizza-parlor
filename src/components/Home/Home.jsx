import { Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Home.css';

function Home() {

    const history = useHistory();

    return (
        <>
        <div className="center">
            <img src='images/pizza_photo.png' />
            <h1 id="tagline">Pizza is great!</h1>
            <Box textAlign='center'>
            <Button variant="outlined" 
                onClick={e => history.push('/order')}
                endIcon={<ArrowForwardIcon />}>Begin Order</Button>
            </Box>
        </div>
        </>
    )

}

export default Home;
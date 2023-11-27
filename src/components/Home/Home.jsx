import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {

    const history = useHistory();

    return (
        <>
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>
            <Button variant="outlined"
                onClick={e => history.push('/order')}
                endIcon={<ArrowForwardIcon />}>Begin Order</Button>
        </>
    )

}

export default Home;
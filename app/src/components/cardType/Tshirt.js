import React from 'react';
import CustomCard from '../card/CustomCard';
import Grid from '@material-ui/core/Grid';
import ShowCard from '../card/ShowCard';

function Tshirt() {
    const cardValue = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '?', 'Tea'];
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(null);

    const displayCard = (cardValue) => {
        setOpen(true);
        setSelectedValue(cardValue);
    }

    return (
        <div>
            <Grid
                direction="row"
                justify="center"
                alignItems="center"
                container
                key="tshirt-container"
            >
                {cardValue.map((val, index) => {
                    return (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                            <CustomCard
                                key={index}
                                name={val}
                                click={() => displayCard(val)} />
                        </Grid>
                    )
                })}
            </Grid>
            <ShowCard key="thsirt-popup" open={open} setOpen={setOpen} cardValue={selectedValue} />
        </div >
    );

}

export default Tshirt;

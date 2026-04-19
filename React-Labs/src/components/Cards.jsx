import * as React from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

const bull = (
    <Box component="span" sx={{ mx: "2px" }}>
        •
    </Box>
);

// 9 cards data
const cardData = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
}));

function CustomCard({ id }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Word of the Day {id}
                </Typography>

                <Typography variant="h5">
                    be{bull}nev{bull}o{bull}lent
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>

                <Typography variant="body2">
                    well meaning and kindly.
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default function CardsGrid() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                padding: 2,
            }}
        >
            {cardData.map((item) => (
                <CustomCard key={item.id} id={item.id} />
            ))}
        </Box>
    );
}

import { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Typography,
    Slider,
} from "@mui/material";
import { fetchDummyDataFromAPi } from "../lib/API";

function HomePage() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState([0, 1000]);
    const categories = [...new Set(data.map((i) => i.category))];

    useEffect(() => {
        fetchDummyDataFromAPi()
            .then((res) => {
                const result = res?.data || [];
                setData(result);
                setFiltered(result);

                const prices = result?.map((i) => i.price);
                setPrice([Math?.min(...prices), Math?.max(...prices)]);
            });
    }, []);

    useEffect(() => {
        const filteredData = data?.filter(
            (item) =>
                (category === "" || item?.category === category) &&
                item?.price >= price[0] &&
                item?.price <= price[1]
        )?.sort((a, b) => a?.title?.localeCompare(b?.title));;
        setFiltered(filteredData);
    }, [category, price, data]);


    return (
        <Box p={2}>
            <Grid container spacing={2} mb={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <InputLabel>Category</InputLabel>
                        <Select value={category} label="Category" onChange={(e) => setCategory(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            {categories?.map((c) => (
                                <MenuItem key={c} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography>
                        Price: ${price[0]} - ${price[1]}
                    </Typography>
                    <Slider
                        value={price}
                        onChange={(newVal) => setPrice(newVal)}
                        valueLabelDisplay="auto"
                        min={Math.min(...data.map(i => i.price))}
                        max={Math.max(...data.map(i => i.price))}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {filtered?.map((item) => (
                    <Grid key={item.id} size={{ xs: 12, md: 4, sm: 6 }}>
                        <Card sx={{ height: "100%", width: "100%" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                                    <img
                                        src={item?.image}
                                        alt={item?.title}
                                        width={80}
                                        height={80}
                                        style={{ objectFit: "contain" }}
                                    />
                                </Box>
                                <Typography width={400}>
                                    {item?.title}
                                </Typography>
                                <Typography >Price: ${item?.price}</Typography>
                                <Typography >Category: {item?.category}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}

export default HomePage;

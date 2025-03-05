import express, { Router } from "express";

const index = Router();

index.get('/', (req: express.Request, res: express.Response) => {
    res.send(`
            <p>Welcome to the app!</p> 
            <p>Please enter one of the following into the url followed by /histogram: </p>
            <p> Attribute, Commodity, CommodityType, Units, YearType, Year, Value </p>
            <p> Example url: http://localhost:3000/Commodity/histogram  </p>
        `
    );
});

export default index;
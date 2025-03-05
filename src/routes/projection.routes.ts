import express, { Router } from "express";
import generateHistogram from '../utilities/generateHistogram';
import { ColumnType } from "../utilities/columnTypes";
import generateChart from "../utilities/generateChart";

const projection = Router();

projection.get('/:columnType/histogram', async (req: express.Request, res: express.Response) => {
    const { columnType } = req.params;
    if(!(columnType in ColumnType)) {
        res.send({ error: 'Invalid column Type'});
        return;
    }
    const histogramData = await generateHistogram(ColumnType[columnType as keyof typeof ColumnType]);
    const imageBuffer = await generateChart(histogramData);
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
});

export default projection;
import fs from 'fs';
import csv from 'csv-parser';
import { ColumnType } from './columnTypes';
import stripBom from 'strip-bom-stream';

interface Projection {
    Attribute: string,
    Commodity: string,
    CommodityType: string,
    Units: string,
    YearType: string,
    Year: string,
    Value: string,
    [key: string]: string
}

async function generateHistogram(column: ColumnType): Promise<Record<string, number>> {
    let histogram: Record<string, number> = {};
    const parsedCSVProjectionData: Projection[] = await parseCSV();
    for(let projectionData of parsedCSVProjectionData) {
        let columnValue = projectionData[column];
        if(columnValue in histogram) {
            histogram[columnValue]++;
        } else {
            histogram[columnValue] = 1;
        }
    }
    return histogram;
}

function parseCSV(): Promise<Projection[]> {
    return new Promise((resolve, reject) => {
        const results: Projection[] = [];
        fs.createReadStream('./src/data/Projection2021.csv', 'utf-8')
        .pipe(stripBom())
        .pipe(csv())
        .on('data', (data: Projection) => {
            results.push(data);
        })
        .on('end', () => {
            resolve(results);
        })
        .on('error', (error: Error)=> {
            throw new Error(error.message);
        });
    })
}

export default generateHistogram;
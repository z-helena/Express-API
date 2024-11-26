// Helena Zhang

import { Request, Response } from 'express';
import express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Task 1
app.get('/add', (req: Request, res: Response) => {
    const { array } = req.body;
    const sum = array.reduce((acc: number, num: number) => acc + num, 0);
    res.json({ sum });
});

// Task 2
app.get('/product', (req: Request, res: Response) => {
    const { array } = req.body
    const product = array.reduce((acc: number, num: number) => acc * num, 1);
    res.json({ product });
});

// Task 3
app.get('/evens', (req: Request, res: Response) => {
    const { array } = req.body
    const evens = array.filter((num: number) => num % 2 == 0);
    res.json({ evens });
});

// Task 4
app.get('/min', (req: Request, res: Response) => {
    const { array } = req.body
    const min = Math.min(...array);
    res.json({ min });
});

app.get('/max', (req: Request, res: Response) => {
    const { array } = req.body
    const max = Math.max(...array);
    res.json({ max });
});

// Task 5
app.get('/sort', (req: Request, res: Response) => {
    const { array, ascending } = req.body
    const sortedArray = array.slice().sort((a: number, b: number) => {
        if (ascending) {
            return a - b;
        } else {
            return b - a;
        }
    });
    res.json({ sortedArray });
});

// Task 6
app.get('/target', (req: Request, res: Response) => {
    const { array, target } = req.body;
    const targetSum = (array: number[], target: number): boolean => {
        const passed: number[] = [];
        for (let n of array) {
            if (passed.includes(target - n)) { //check if current number and a passed number sum to target
                return true;
            }
            passed.push(n);
        }
        return false;
    }

    const targetMet: boolean = targetSum(array, target);
    res.json({ targetMet });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

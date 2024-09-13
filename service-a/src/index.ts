import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.get("/message", (_req: Request, res: Response) => {
  res.json({ message: " Hello from Service A" });
});

app.listen(PORT, () => {
  console.log(`Service A running on port ${PORT}`);
});

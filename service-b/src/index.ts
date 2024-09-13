import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const PORT = 3002;
const serviceA = "http://service-a:3001/message";

app.get("/process", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(serviceA);
    const message = `Hello from Service B and ${response.data.message}`;
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to reach Service A" });
  }
});

app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
});

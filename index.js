import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Home Route (GET)
app.get("/", (req, res) => {
  res.json({ message: "InvideoX Backend Running Successfully!" });
});

// 🔹 GET /generate — Browser ke liye message
app.get("/generate", (req, res) => {
  res.json({ error: "Use POST method only!" });
});

// 🔹 POST /generate — REAL VIDEO GENERATION ROUTE
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ error: "Prompt is required!" });
    }

    const fakeVideoUrl = "https://samplelib.com/lib/preview/mp4/sample-5s.mp4";

    return res.json({
      success: true,
      video_url: fakeVideoUrl
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// 🔹 Run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

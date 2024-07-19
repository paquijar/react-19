import express from "express";
import cors from "cors";

const todos = [
  { id: 1, name: "Learn Vite 2" },
  { id: 2, name: "Learn React" },
];

const cards = [
  {
    id: 1,
    title: "Card 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    id: 2,
    title: "Card 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    id: 3,
    title: "Card 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    id: 4,
    title: "Card 4",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
];

const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/todos", (req, res) => {
  res.json(todos);
});
app.post("/api/todos", (req, res) => {
  setTimeout(() => {
    const body = req.body || {};
    if (body?.name !== "error") {
      const todo = {
        id: todos.length + 1,
        name: body.name ?? "",
      };
      todos.push(todo);
      res.json(todo);
    } else {
      res.status(400).json({ error: "Failed to add todo" });
    }
  }, 3000);
});
app.get("/api/cards", (req, res) => {
  res.json(cards);
});
app.get("/api/cards/:id", (req, res) => {
  //random number between 1 and 3
  const random = Math.floor(Math.random() * 3) + 1;
  setTimeout(() => {
    const id = Number(req.params.id);
    const card = cards.find((card) => card.id === id);
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  }, random * 1000);
});
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

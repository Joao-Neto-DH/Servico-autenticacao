import { Router } from "express";

const router = Router({});

router.get("/", (req, res) => {
  return res.json({ text: "ola" });
});

export { router };

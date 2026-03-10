const router = require("express").Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/", async (req, res) => {

  const { question } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Give hints only. Never give the SQL solution."
      },
      {
        role: "user",
        content: question
      }
    ]
  });

  res.json({
    hint: completion.choices[0].message.content
  });

});

module.exports = router;
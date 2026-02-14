
import { Module } from '../../types';

export const module7: Module = {
  id: 7,
  title: "SPECIAL SITUATIONS",
  description: "Tricky verbs and dramatic storytelling styles.",
  sections: [
    {
      title: "7.1 STATIVE VERBS",
      content: "These verbs describe states, not actions. We rarely use them in Continuous (-ing) tenses.",
      type: 'grid',
      data: {
        items: [
          { label: "EMOTIONS", icon: "❤️", details: ["Like, Love, Hate, Prefer"] },
          { label: "THINKING", icon: "🧠", details: ["Know, Believe, Remember"] },
          { label: "SENSES", icon: "👀", details: ["See, Hear, Taste, Smell"] },
          { label: "POSSESSION", icon: "👜", details: ["Have, Own, Belong"] }
        ]
      }
    },
    {
      title: "VERBS THAT DO BOTH",
      content: [
        "THINK: I think it's good (Opinion) vs I am thinking about it (Process).",
        "HAVE: I have a car (Possession) vs I am having lunch (Eating).",
        "SEE: I see what you mean (Understand) vs I am seeing the doctor (Meeting)."
      ],
      type: 'list'
    },
    {
      title: "7.3 HISTORICAL PRESENT",
      content: "Using Simple Present to describe past events for dramatic effect in storytelling or jokes.",
      type: 'note'
    },
    {
      title: "7.4 INDIRECT QUESTIONS",
      content: "Can you tell me where you live? (No 'do/does' and Subject comes before Verb).",
      type: 'note'
    },
    {
      title: "7.5 FUTURE IN THE PAST",
      content: "Actions that were in the future at a past point. Structure: would + V1 or was/were going to.",
      type: 'grid',
      data: {
        items: [
          { label: "PLANS", icon: "📅", details: ["I was going to call you, but I forgot."] },
          { label: "PREDICTION", icon: "🔮", details: ["I knew it would rain today."] }
        ]
      }
    }
  ]
};

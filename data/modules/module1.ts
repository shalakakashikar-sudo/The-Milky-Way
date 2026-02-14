
import { Module } from '../../types';

export const module1: Module = {
  id: 1,
  title: "FOUNDATION - Understanding Tenses",
  description: "The complete academic guide to the bedrock of English: Time + Work.",
  sections: [
    {
      title: "1.1 WHAT ARE TENSES?",
      content: "DEFINITION:\nTenses denote the time an action takes place, and the amount of work done in that time.",
      type: 'text'
    },
    {
      title: "THE GOLDEN FORMULA",
      content: "TENSE = TIME + WORK (ASPECT)",
      type: 'formula'
    },
    {
      title: "The Logic of Tenses",
      content: [
        "TIME: Tells us WHEN something happens (Past, Present, or Future).",
        "WORK (ASPECT): Tells us HOW the action is done (Is it finished? Is it ongoing? Is it a routine?)."
      ],
      type: 'list'
    },
    {
      title: "EXAMPLE COMPARISON",
      content: "Consider: \"I eat\" vs \"I am eating\"\n\nBoth happen in the PRESENT, but the WORK is different:\n• \"I eat\" is a general habit (Simple).\n• \"I am eating\" is happening right now (Continuous).",
      type: 'note'
    },
    {
      title: "1.2 THE TWO COMPONENTS",
      content: "Every tense is constructed by combining one type of Time with one type of Work. This creates the 12 unique structures of English grammar.",
      type: 'text'
    },
    {
      title: "1.3 THE THREE TIMES IN DETAIL",
      content: "These three time frames anchor every sentence you speak in English. They define the 'Then', the 'Now', and the 'Later'.",
      type: 'grid',
      data: {
        items: [
          {
            label: "TIME 1: PAST",
            icon: "🕰️",
            description: "What: Actions that happened before now (Then).",
            details: [
              "Keywords: Yesterday, last week, ago, in 1999, then, once upon a time.",
              "Example: I went to school yesterday.",
              "Example: She lived in Mumbai for 5 years."
            ]
          },
          {
            label: "TIME 2: PRESENT",
            icon: "📍",
            description: "What: Actions happening now or general truths (Now).",
            details: [
              "Keywords: Now, today, currently, these days, always, usually.",
              "Example: I go to school every day.",
              "Example: The sun rises in the east."
            ]
          },
          {
            label: "TIME 3: FUTURE",
            icon: "🚀",
            description: "What: Actions that will happen after now (Later).",
            details: [
              "Keywords: Tomorrow, next week, soon, later, in the future.",
              "Example: I will go to school tomorrow.",
              "Example: She will complete her project next week."
            ]
          }
        ]
      }
    },
    {
      title: "1.4 THE FOUR ASPECTS (TYPES OF WORK)",
      content: "Aspect describes the 'amount' or nature of work done during a specific time frame. It gives flavor to time.",
      type: 'grid',
      data: {
        items: [
          {
            label: "SIMPLE / INDEFINITE",
            icon: "✅",
            description: "Nature: Complete action, routine, or fact. Focuses on the action itself.",
            details: [
              "Example: I eat rice. (It's a fact/habit)"
            ]
          },
          {
            label: "CONTINUOUS / PROGRESSIVE",
            icon: "🔄",
            description: "Nature: Ongoing action, in progress. Focuses on the process of doing.",
            details: [
              "Example: I am eating rice. (Right now, in progress)"
            ]
          },
          {
            label: "PERFECT",
            icon: "🏆",
            description: "Nature: Completed action with connection to reference time. Focuses on the result or experience.",
            details: [
              "Example: I have eaten rice. (Completed, relevant now)"
            ]
          },
          {
            label: "PERFECT CONTINUOUS",
            icon: "⏳",
            description: "Nature: Continuing action with duration. Focuses on the duration and continuity.",
            details: [
              "Example: I have been eating rice for 10 minutes. (Started before, still continuing)"
            ]
          }
        ]
      }
    },
    {
      title: "1.5 THE 12 TENSES OVERVIEW",
      content: "Combine 3 Times with 4 Aspects to navigate the Milky Way of English Tenses.",
      type: 'table',
      data: {
        headers: ["TIME", "SIMPLE", "CONTINUOUS", "PERFECT", "PERFECT CONTINUOUS"],
        rows: [
          [
            "PRESENT",
            { title: "Simple Present", example: "I eat" },
            { title: "Present Continuous", example: "I am eating" },
            { title: "Present Perfect", example: "I have eaten" },
            { title: "Present Perfect Cont.", example: "I have been eating" }
          ],
          [
            "PAST",
            { title: "Simple Past", example: "I ate" },
            { title: "Past Continuous", example: "I was eating" },
            { title: "Past Perfect", example: "I had eaten" },
            { title: "Past Perfect Cont.", example: "I had been eating" }
          ],
          [
            "FUTURE",
            { title: "Simple Future", example: "I will eat" },
            { title: "Future Continuous", example: "I will be eating" },
            { title: "Future Perfect", example: "I will have eaten" },
            { title: "Future Perfect Cont.", example: "I will have been eating" }
          ]
        ]
      }
    },
    {
      title: "MEMORY TIP",
      content: "3 TIMES × 4 ASPECTS = 12 TENSES\nPAST, PRESENT, FUTURE × SIMPLE, CONTINUOUS, PERFECT, PERFECT CONTINUOUS = 12",
      type: 'formula'
    }
  ]
};

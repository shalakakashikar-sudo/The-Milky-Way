
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
      title: "Think of it this way:",
      content: [
        "TIME tells us WHEN something happens.",
        "WORK/ASPECT tells us HOW the action is done (completely, ongoing, etc.)"
      ],
      type: 'list'
    },
    {
      title: "EXAMPLE COMPARISON",
      content: "Consider: \"I eat\" (Simple Present) vs \"I am eating\" (Present Continuous)\n\n• Same TIME (Present)\n• Different WORK (Simple action vs ongoing action)",
      type: 'note'
    },
    {
      title: "1.2 THE TWO COMPONENTS",
      content: "Every tense is constructed by combining one type of Time with one type of Work.",
      type: 'text'
    },
    {
      title: "COMPONENT 1: TIME (The 'When')",
      content: "These three time frames anchor every sentence you speak.",
      type: 'grid',
      data: {
        items: [
          {
            label: "PAST (Then)",
            icon: "🕰️",
            description: "What happened before now. Finished and gone.",
            details: ["Yesterday", "Last week", "In 1999", "Once upon a time"]
          },
          {
            label: "PRESENT (Now)",
            icon: "📍",
            description: "What is happening now or general truths about the world.",
            details: ["Now", "Today", "Currently", "Always/Usually"]
          },
          {
            label: "FUTURE (Later)",
            icon: "🚀",
            description: "What will happen after this moment.",
            details: ["Tomorrow", "Next week", "Soon", "In the future"]
          }
        ]
      }
    },
    {
      title: "COMPONENT 2: WORK/ASPECT (The 'How')",
      content: "Aspect describes the 'amount' or nature of work done during that time.",
      type: 'grid',
      data: {
        items: [
          {
            label: "SIMPLE / INDEFINITE",
            icon: "✅",
            description: "Just the action. Nature: Complete, routine, or a solid fact.",
            details: ["Focus: The action itself"]
          },
          {
            label: "CONTINUOUS / PROGRESSIVE",
            icon: "🔄",
            description: "Nature: Ongoing action. It is currently in progress.",
            details: ["Focus: The process of doing"]
          },
          {
            label: "PERFECT",
            icon: "🏆",
            description: "Nature: Completed action with a connection to now.",
            details: ["Focus: The result or experience"]
          },
          {
            label: "PERFECT CONTINUOUS",
            icon: "⏳",
            description: "Nature: Continuing action with duration. Still going!",
            details: ["Focus: Duration and continuity"]
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
      content: "3 TIMES (Past, Present, Future) × 4 ASPECTS (Simple, Continuous, Perfect, Perfect Continuous) = 12 LEGEND-DAIRY TENSES!",
      type: 'formula'
    }
  ]
};

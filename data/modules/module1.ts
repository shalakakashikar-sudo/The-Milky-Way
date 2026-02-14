import { Module } from '../../types';

export const module1: Module = {
  id: 1,
  title: "FOUNDATION - Understanding Tenses",
  description: "The complete academic guide to the bedrock of English: Time + Work. Learn to navigate the 'When' and 'How' of every action.",
  sections: [
    {
      title: "1.1 THE TENSE COMPASS",
      content: "Tenses are not just about time; they are about the 'State of Work'. Think of Tense as a coordinate on a map.",
      type: 'text'
    },
    {
      title: "THE GOLDEN FORMULA",
      content: "TENSE = TIME (When) + WORK (How much)",
      type: 'formula'
    },
    {
      title: "THE LOGIC OF THE COMPASS",
      content: "Every thought you express is a combination of these two axes.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "TIME AXIS", 
            icon: "🧭", 
            description: "Locates the action on a timeline.", 
            details: ["PAST: Everything before this second.", "PRESENT: This current moment or general reality.", "FUTURE: Any point after this second."] 
          },
          { 
            label: "WORK (ASPECT) AXIS", 
            icon: "⚙️", 
            description: "Describes the nature/completeness of the action.", 
            details: ["SIMPLE: Facts and Routines.", "CONTINUOUS: Ongoing processes.", "PERFECT: Completed results.", "PERF. CONT.: Duration and persistence."] 
          }
        ]
      }
    },
    {
      title: "MOO'S PRO-TIP: THE ASPECT LENS",
      content: "Think of 'Aspect' as a camera lens. Simple is a 'Wide Shot' (General). Continuous is a 'Video' (Progress). Perfect is a 'Photograph' (Finished result).",
      type: 'note'
    },
    {
      title: "1.2 THE THREE TIMES IN DETAIL",
      content: "These three time frames anchor every sentence you speak in English. They define the 'Then', the 'Now', and the 'Later'.",
      type: 'grid',
      data: {
        items: [
          {
            label: "TIME 1: PAST",
            icon: "🕰️",
            description: "What: Actions that happened before now (Then).",
            details: [
              "Keywords: Yesterday, ago, in 1999, then, once upon a time.",
              "Nuance: It implies the 'Window of Opportunity' for that action has closed.",
              "Example: I went to school (Action finished)."
            ]
          },
          {
            label: "TIME 2: PRESENT",
            icon: "📍",
            description: "What: Actions happening now or general truths (Now).",
            details: [
              "Keywords: Now, today, currently, always, usually.",
              "Nuance: Includes 'Timeless' facts that are always true.",
              "Example: The sun rises in the east (Universal)."
            ]
          },
          {
            label: "TIME 3: FUTURE",
            icon: "🚀",
            description: "What: Actions that will happen after now (Later).",
            details: [
              "Keywords: Tomorrow, next week, soon, later.",
              "Nuance: Deals with probability, intent, and scheduling.",
              "Example: I will go to school (Promise/Plan)."
            ]
          }
        ]
      }
    },
    {
      title: "1.3 THE FOUR ASPECTS (TYPES OF WORK)",
      content: "Aspect describes the 'amount' or nature of work done during a specific time frame. It gives flavor to time.",
      type: 'grid',
      data: {
        items: [
          {
            label: "SIMPLE / INDEFINITE",
            icon: "✅",
            description: "Nature: Complete action, routine, or fact.",
            details: [
              "Focus: The existence of the action.",
              "Example: I eat rice. (It's a fact/habit)",
              "Pro-Tip: Use for things that are generally true."
            ]
          },
          {
            label: "CONTINUOUS / PROGRESSIVE",
            icon: "🔄",
            description: "Nature: Ongoing action, in progress.",
            details: [
              "Focus: The process and duration.",
              "Example: I am eating rice. (Right now)",
              "Nuance: Implies the action is temporary."
            ]
          },
          {
            label: "PERFECT",
            icon: "🏆",
            description: "Nature: Completed action with present relevance.",
            details: [
              "Focus: The result or experience.",
              "Example: I have eaten rice. (I'm full now)",
              "Pro-Tip: This is the bridge between past and present."
            ]
          },
          {
            label: "PERFECT CONTINUOUS",
            icon: "⏳",
            description: "Nature: Continuing action with duration.",
            details: [
              "Focus: How long the action has been going on.",
              "Example: I have been eating for 10 mins.",
              "Nuance: Connects the starting point to the current moment."
            ]
          }
        ]
      }
    },
    {
      title: "1.4 THE CELESTIAL TENSE MATRIX",
      content: "Combine 3 Times with 4 Aspects to navigate the Milky Way of English Tenses.",
      type: 'table',
      data: {
        headers: ["TIME", "SIMPLE (The Fact)", "CONTINUOUS (The Process)", "PERFECT (The Result)", "PERF. CONT. (The Duration)"],
        rows: [
          [
            "PRESENT",
            { title: "Simple Present", example: "I eat" },
            { title: "Present Continuous", example: "I am eating" },
            { title: "Present Perfect", example: "I have eaten" },
            { title: "Pres. Perf. Cont.", example: "I have been eating" }
          ],
          [
            "PAST",
            { title: "Simple Past", example: "I ate" },
            { title: "Past Continuous", example: "I was eating" },
            { title: "Past Perfect", example: "I had eaten" },
            { title: "Past Perf. Cont.", example: "I had been eating" }
          ],
          [
            "FUTURE",
            { title: "Simple Future", example: "I will eat" },
            { title: "Future Continuous", example: "I will be eating" },
            { title: "Future Perfect", example: "I will have eaten" },
            { title: "Fut. Perf. Cont.", example: "I will have been eating" }
          ]
        ]
      }
    },
    {
      title: "DR. MOO'S FINAL FOUNDATION TIP",
      content: "Don't just memorize the names; understand the 'Logic of Work'. If you know the time (When) and the aspect (How), the grammar will follow naturally.",
      type: 'note'
    }
  ]
};
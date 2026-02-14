import { Module } from '../../types';

export const module7: Module = {
  id: 7,
  title: "SPECIAL SITUATIONS",
  description: "Navigate tricky verbs, mixed timelines, dramatic storytelling, and sophisticated indirect phrasing.",
  sections: [
    {
      title: "7.1 STATIVE VERBS",
      content: "Stative verbs describe states (feelings, thoughts, senses) rather than actions. They are rarely used in Continuous (-ing) forms.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "EMOTIONS", 
            icon: "❤️", 
            description: "like, love, hate, dislike, prefer, fear.",
            details: ["✗ I am liking this.", "✓ I like this."] 
          },
          { 
            label: "THINKING", 
            icon: "🧠", 
            description: "know, understand, believe, remember, forget.",
            details: ["✗ I am knowing it.", "✓ I know it."] 
          },
          { 
            label: "SENSES", 
            icon: "👀", 
            description: "see, hear, smell, taste, feel.",
            details: ["✗ I am seeing a bird.", "✓ I see a bird."] 
          },
          { 
            label: "POSSESSION", 
            icon: "👜", 
            description: "have, own, belong, contain, possess.",
            details: ["✗ I am having a car.", "✓ I have a car."] 
          }
        ]
      }
    },
    {
      title: "VERBS THAT DO BOTH",
      content: "Some verbs change meaning based on whether they are used as a State or an Action.",
      type: 'table',
      data: {
        headers: ["Verb", "As a State (Simple)", "As an Action (Continuous)"],
        rows: [
          ["THINK", "Opinion: I think it's good.", "Process: I am thinking about it."],
          ["HAVE", "Possession: I have a car.", "Activity: I am having lunch."],
          ["SEE", "Understand: I see what you mean.", "Meeting: I am seeing the doctor."],
          ["TASTE", "Flavor: This soup tastes good.", "Testing: I am tasting the soup."],
          ["BE", "Permanent: She is intelligent.", "Temporary: She is being difficult."]
        ]
      }
    },
    {
      title: "7.2 MIXED TIME REFERENCES",
      content: "English often mixes tenses to show how different times interact.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "PAST → RESULT", 
            description: "Present Perfect + Present.", 
            details: ["I have lost my keys, so I can't open the door."] 
          },
          { 
            label: "PAST → START", 
            description: "Pres. Perf. Cont. + Since/For.", 
            details: ["I have been living here since 2015."] 
          },
          { 
            label: "PAST → CONDITION", 
            description: "Mixed Conditional.", 
            details: ["If I had studied medicine, I would be a doctor now."] 
          }
        ]
      }
    },
    // Fixed duplicate property 'content' by splitting into two sections
    {
      title: "7.3 HISTORICAL PRESENT",
      content: "This is the 'Dramatic Present'. We use Simple Present to tell past stories to make them feel alive.",
      type: 'text'
    },
    {
      title: "DRAMATIC USAGE",
      type: 'list',
      content: [
        "JOKES: 'So, this cow walks into a bar...'",
        "STORYTELLING: 'Suddenly, the hero enters the room and sees the treasure.'",
        "SPORTS: 'Ronaldo receives the ball, he shoots, and... GOAL!'",
        "SUMMARIES: 'In the movie, the main character travels to Mars.'"
      ]
    },
    {
      title: "7.4 INDIRECT QUESTIONS",
      content: "Indirect questions are more polite and follow statement word order.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "DIRECT", 
            description: "Where do you live?", 
            details: ["Uses 'do/does/did'", "Inverted order"] 
          },
          { 
            label: "INDIRECT", 
            description: "Can you tell me where you live?", 
            details: ["No 'do/does/did'", "Subject BEFORE Verb"] 
          },
          { 
            label: "YES/NO", 
            description: "I don't know if she is coming.", 
            details: ["Uses 'if' or 'whether'"] 
          }
        ]
      }
    },
    {
      title: "7.5 FUTURE IN THE PAST",
      content: "Describing the future from a past perspective. Structure: would + V1 or was/were going to.",
      type: 'grid',
      data: {
        items: [
          { label: "REPORTED", description: "He said he would help me.", icon: "💬" },
          { label: "PAST PLANS", description: "I was going to call you, but I forgot.", icon: "📅" },
          { label: "PREDICTION", description: "I knew it would rain today.", icon: "🔮" }
        ]
      }
    },
    {
      title: "DR. MOO'S SPECIAL DIAGNOSIS",
      content: [
        "1. Never say 'I am having two brothers'. That's possession! Use 'I have'.",
        "2. Indirect questions don't use 'do/does/did'. Stick to the baseline S+V.",
        "3. Historical Present is great for stories, but NEVER for formal reports.",
        "4. Stative verbs are like my spots—they don't change just because time is moving!"
      ],
      type: 'list'
    }
  ]
};

import { Module } from '../../types';

export const module5: Module = {
  id: 5,
  title: "FUTURE TENSES",
  description: "Explore the 'Later' with predictions, plans, and future deadlines.",
  sections: [
    {
      title: "5.1 SIMPLE FUTURE",
      content: "S + will/shall + V1 + O",
      type: 'formula'
    },
    {
      title: "DECISIONS & PROMISES",
      content: "Use for instant decisions, offers, and general predictions.",
      type: 'grid',
      data: {
        items: [
          { label: "INSTANT", icon: "💡", description: "Decided while speaking.", details: ["I will help you with those bags!"] },
          { label: "PROMISES", icon: "🤝", description: "Commitments.", details: ["I will call you tomorrow."] },
          { label: "OPINIONS", icon: "💬", description: "Predictions by feeling.", details: ["I think India will win."] }
        ]
      }
    },
    {
      title: "5.2 ALTERNATIVE FUTURE",
      content: "We don't always use 'will'. Sometimes 'going to' or even the Present Continuous is better!",
      type: 'grid',
      data: {
        items: [
          { label: "GOING TO", icon: "📅", description: "Prior plans & evidence.", details: ["I am going to buy a car.", "Look! It is going to rain."] },
          { label: "PRES. CONT.", icon: "📌", description: "Fixed arrangements.", details: ["I am meeting him at 3 PM."] }
        ]
      }
    },
    {
      title: "5.3 FUTURE CONTINUOUS",
      content: "S + will + be + V4(ing) + O",
      type: 'formula'
    },
    {
      title: "IN PROGRESS LATER",
      content: "Actions that will be ongoing at a specific time in the future.",
      type: 'note',
      data: {
        items: [
          { label: "TIMELINE", description: "At 11 AM tomorrow, I will be driving to Bhopal." }
        ]
      }
    },
    {
      title: "5.4 FUTURE PERFECT",
      content: "S + will + have + V3 + O",
      type: 'formula'
    },
    {
      title: "FUTURE DEADLINES",
      content: "Actions that will be COMPLETED by a certain future point. Key word: 'BY'.",
      type: 'grid',
      data: {
        items: [
          { label: "BY DECEMBER", icon: "🏁", description: "I will have saved enough money." },
          { label: "BY 5 PM", icon: "⌚", description: "I will have finished cooking." }
        ]
      }
    },
    {
      title: "5.5 FUTURE PERFECT CONTINUOUS",
      content: "S + will + have + been + V4(ing) + O",
      type: 'formula'
    },
    {
      title: "FUTURE DURATION",
      content: "Next month, I will have been working here for five years!",
      type: 'note'
    },
    {
      title: "FUTURE COMPARISON",
      content: "Choose the right future flavor.",
      type: 'table',
      data: {
        headers: ["Tense", "Use", "Example"],
        rows: [
          ["WILL", "Instant/Offer", "I'll go tomorrow."],
          ["GOING TO", "Plan/Evidence", "I'm going to buy it."],
          ["FUTURE CONT.", "In Progress", "I'll be working at 5 PM."],
          ["FUTURE PERF.", "Deadline", "I'll have finished by then."]
        ]
      }
    }
  ]
};

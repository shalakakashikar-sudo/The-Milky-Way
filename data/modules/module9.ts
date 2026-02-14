
import { Module } from '../../types';

export const module9: Module = {
  id: 9,
  title: "QUICK REFERENCE",
  description: "The complete Tense Chart and Cheat Sheet for all 12 epochs.",
  sections: [
    {
      title: "THE CELESTIAL TENSE GRID",
      content: "Your compass for all English structures.",
      type: 'table',
      data: {
        headers: ["Aspect", "Present", "Past", "Future"],
        rows: [
          ["Simple", "V1 / V1+s", "V2", "will + V1"],
          ["Cont.", "am/is/are + V4", "was/were + V4", "will be + V4"],
          ["Perfect", "has/have + V3", "had + V3", "will have + V3"],
          ["Perf. C", "have been + V4", "had been + V4", "will have been + V4"]
        ]
      }
    },
    {
      title: "TIME MARKER CHEAT SHEET",
      content: "Match the marker to the tense instantly.",
      type: 'grid',
      data: {
        items: [
          { label: "SIMPLE", description: "Always, usually, daily, yesterday, ago, tomorrow." },
          { label: "CONTINUOUS", description: "Now, currently, while, at 5 PM." },
          { label: "PERFECT", description: "Just, already, yet, before, after, by the time." }
        ]
      }
    },
    {
      title: "FINAL GOLDEN RULE",
      content: "TENSE = TIME + WORK. Think about the 'Then/Now/Later' and whether the work is 'Finished/Doing/Duration'. The right tense will follow!",
      type: 'formula'
    },
    {
      title: "DR. MOO'S GOODBYE",
      content: "You have traveled through the entire Milky Way of Tenses. You are now udderly magnificent at English grammar! Keep grazing on knowledge! 🌟",
      type: 'note'
    }
  ]
};

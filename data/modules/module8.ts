
import { Module } from '../../types';

export const module8: Module = {
  id: 8,
  title: "MASTERY & QUICK REFERENCE",
  description: "The complete Tense Chart, Cheat Sheet, and 200+ Practice Exercises.",
  sections: [
    {
      title: "The Milky Way Cheat Sheet",
      content: "Keep this handy for all 12 tenses and their time markers. This is your celestial compass for navigating the tenses.",
      type: 'text'
    },
    {
      title: "Time Markers",
      content: [
        "Simple Present: always, daily, every week",
        "Present Continuous: now, at the moment, currently",
        "Present Perfect: just, already, yet, so far",
        "Simple Past: yesterday, ago, last month",
        "Past Perfect: before, after, by the time",
        "Future Simple: tomorrow, next year, soon"
      ],
      type: 'list'
    },
    {
      title: "Practice Exercise 1: Present Comparison",
      content: "Water ___ (boil) at 100°C. -> boils (General Truth). He ___ (boil) water right now. -> is boiling (Current Action).",
      type: 'text'
    },
    {
      title: "Practice Exercise 2: Past vs Present Perfect",
      content: "I ___ (see) that movie yesterday. -> saw (Specific Past). I ___ (already/see) that movie. -> have already seen (Experience).",
      type: 'text'
    }
  ]
};

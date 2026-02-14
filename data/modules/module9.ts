import { Module } from '../../types';

export const module9: Module = {
  id: 9,
  title: "QUICK REFERENCE",
  description: "The complete Tense Chart, Time Marker Compass, and Dr. Moo's Final Golden Rules. Your ultimate legend-dairy dashboard.",
  sections: [
    {
      title: "THE GRAND MASTER TENSE GRID",
      content: "Every English structure at a single glance. Use this for instant formula recall.",
      type: 'table',
      data: {
        headers: ["ASPECT", "PRESENT (Now)", "PAST (Then)", "FUTURE (Later)"],
        rows: [
          ["SIMPLE", { title: "Fact", example: "V1 / V1+s" }, { title: "Finished", example: "V2" }, { title: "Intent", example: "will + V1" }],
          ["CONTINUOUS", { title: "Ongoing", example: "am/is/are + V4" }, { title: "Process", example: "was/were + V4" }, { title: "Snapshot", example: "will be + V4" }],
          ["PERFECT", { title: "Result", example: "has/have + V3" }, { title: "Order", example: "had + V3" }, { title: "Deadline", example: "will have + V3" }],
          ["PERF. CONT.", { title: "Persistence", example: "have been + V4" }, { title: "Duration", example: "had been + V4" }, { title: "Continuity", example: "will have been + V4" }]
        ]
      }
    },
    {
      title: "THE TIME MARKER COMPASS",
      content: "Markers are the clues. Match the word to the tense structure.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "PRESENT MARKERS", 
            icon: "🌞", 
            description: "Identify current or habitual actions.", 
            details: ["Daily, Usually (Simple)", "Right now, Listen! (Continuous)", "Just, Already, Yet (Perfect)", "Since, For (Perf. Continuous)"] 
          },
          { 
            label: "PAST MARKERS", 
            icon: "🕰️", 
            description: "Identify completed or historical actions.", 
            details: ["Yesterday, Ago (Simple)", "While, At that time (Continuous)", "Before, By then (Perfect)", "For (with past context)"] 
          },
          { 
            label: "FUTURE MARKERS", 
            icon: "🚀", 
            description: "Identify potential or planned actions.", 
            details: ["Tomorrow, Soon (Simple)", "This time tomorrow (Continuous)", "By Monday (Perfect)", "By next year for... (Perf. Cont.)"] 
          }
        ]
      }
    },
    {
      title: "DR. MOO'S 5 GOLDEN RULES",
      content: [
        "1. SUBJECT-VERB AGREEMENT: Singular subject, singular verb. Plural subject, plural verb.",
        "2. MODAL RULE: Always follow 'will', 'can', 'should' with the base V1 form.",
        "3. THE DID MAGNET: Never use V2 after 'did' or 'didn't'. Return the verb to V1.",
        "4. STATIVE RULE: Feelings, thoughts, and possession (Love, Know, Have) rarely use '-ing'.",
        "5. PERFECT BRIDGE: Use Present Perfect to connect a past act to a present result."
      ],
      type: 'list'
    },
    {
      title: "FINAL TENSE EQUATION",
      content: "TENSE = TIME + ASPECT (WORK)",
      type: 'formula'
    },
    {
      title: "A MESSAGE FROM DR. MOO",
      content: "You have traveled through the entire Milky Way. You've mastered the logic of time and work. Now, go forth and moo-ve the world with your legend-dairy English! 🌟🐄",
      type: 'note'
    }
  ]
};
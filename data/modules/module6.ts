import { Module } from '../../types';

export const module6: Module = {
  id: 6,
  title: "ADVANCED CONCEPTS",
  description: "Level up your grammar with Since vs For, Conditionals, and Reported Speech.",
  sections: [
    {
      title: "6.1 SINCE vs FOR - THE GOLDEN RULE",
      content: [
        "SINCE = Starting Point (From when it started).",
        "FOR = Duration (How long it lasted).",
        "Nuance: 'Since' is almost exclusively used with Perfect Tenses. 'For' can be used with any tense (Simple, Continuous, or Perfect)."
      ],
      type: 'list'
    },
    {
      title: "PRO-TIP: THE 'ALL' EXCEPTION",
      content: "When using the word 'all' (e.g., all day, all morning), you don't need 'for' or 'since'! | ✗ I have been waiting for all day. → ✓ I have been waiting all day.",
      type: 'note'
    },
    {
      title: "WHEN TO USE WHICH?",
      content: "Choose based on whether you are mentioning a specific clock/calendar point or a length of time.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "SINCE (Starting Point)", 
            icon: "📍", 
            description: "Year, Month, Day, Time, or Event.", 
            details: [
              "Since 2015 / Since Monday", 
              "Since 9 o'clock / Since Breakfast", 
              "Since childhood / Since I left school",
              "Nuance: Always answers the question 'From when?'"
            ] 
          },
          { 
            label: "FOR (Duration)", 
            icon: "📏", 
            description: "Number + Time or General periods.", 
            details: [
              "For 2 hours / For 3 days", 
              "For 5 years / For a long time", 
              "For ages / For centuries",
              "Nuance: Always answers the question 'How long?'"
            ] 
          }
        ]
      }
    },
    {
      title: "6.2 TIME MARKERS MASTER LIST",
      content: "Every tense has its signature 'Time Stamp'. Use these keywords to identify and form tenses correctly.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "PRESENT", 
            icon: "🌞", 
            description: "Always, usually, now, just, already, yet, for, since.",
            details: ["Daily (Simple)", "Right now (Continuous)", "Just/Already (Perfect)", "For/Since (Perf. Continuous)"]
          },
          { 
            label: "PAST", 
            icon: "🕰️", 
            description: "Yesterday, ago, last week, when, while, before, by the time.",
            details: ["Ago (Simple)", "While (Continuous)", "Before (Perfect)", "All morning (Perf. Continuous)"]
          },
          { 
            label: "FUTURE", 
            icon: "🚀", 
            description: "Tomorrow, soon, next week, by + time, by the time.",
            details: ["Soon (Simple)", "At this time tomorrow (Continuous)", "By then (Perfect)"]
          }
        ]
      }
    },
    {
      title: "6.3 SEQUENCE OF TENSES",
      content: [
        "Rule: When the main verb (reporting verb) is in the Past, the subordinate verb usually moves one step back into the Past.",
        "Example: She says (Pres) she is (Pres) busy. → She said (Past) she was (Past) busy.",
        "Logic: This 'Backshift' maintains the logical timeline of the conversation.",
        "Exception: Universal truths don't change! 'He said that water boils at 100°C.' (Because it still boils at 100°C today!)"
      ],
      type: 'list'
    },
    {
      title: "6.4 REPORTED SPEECH CONVERSION",
      content: "When reporting what someone said, we usually move the tense 'one step back' into the past.",
      type: 'table',
      data: {
        headers: ["Direct Speech", "Reported Speech", "Nuance"],
        rows: [
          ["Simple Present", "Simple Past", "Am/Is/Are → Was/Were"],
          ["Present Continuous", "Past Continuous", "Is eating → Was eating"],
          ["Present Perfect / Simple Past", "Past Perfect", "Have seen / Saw → Had seen"],
          ["Will / Can / May", "Would / Could / Might", "Future becomes 'Future in the Past'"],
          ["Must", "Had to", "Shows external obligation"]
        ]
      }
    },
    {
      title: "PRO-TIP: SAY vs TELL",
      content: "Use 'Say' when there is no personal object. Use 'Tell' when you mention the listener! | ✓ He said that he was tired. | ✓ He told ME that he was tired.",
      type: 'note'
    },
    {
      title: "TIME & PLACE CHANGES",
      content: "Don't forget to change these 'proximity' words when reporting speech! Because you are usually in a different place and time when reporting.",
      type: 'table',
      data: {
        headers: ["Direct", "Reported"],
        rows: [
          ["now", "then / at that time"],
          ["today", "that day"],
          ["tomorrow", "the next day / following day"],
          ["yesterday", "the day before / previous day"],
          ["ago", "before"],
          ["here / this", "there / that"]
        ]
      }
    },
    {
      title: "6.5 CONDITIONAL SENTENCES",
      content: "Conditionals describe the 'Logic of If'—what happens under certain circumstances. They are divided by 'How likely' they are.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "TYPE 0 (Facts)", 
            description: "Scientific Laws / Universal Truths.", 
            details: [
              "Structure: If + Simple Pres, Simple Pres", 
              "Example: If you heat ice, it melts.",
              "Nuance: This happens 100% of the time."
            ] 
          },
          { 
            label: "TYPE 1 (Possible)", 
            description: "Real Future Possibility.", 
            details: [
              "Structure: If + Simple Pres, will + V1", 
              "Example: If it rains, I will stay home.",
              "Nuance: A likely future situation."
            ] 
          },
          { 
            label: "TYPE 2 (Unreal)", 
            description: "Imaginary Present/Future.", 
            details: [
              "Structure: If + Simple Past, would + V1", 
              "Example: If I were rich, I'd buy a farm.",
              "Pro-Tip: Use 'WERE' for all subjects! (If I were, If he were)."
            ] 
          },
          { 
            label: "TYPE 3 (Regret)", 
            description: "Impossible Past (The Time Machine).", 
            details: [
              "Structure: If + Past Perf, would have + V3", 
              "Example: If I had studied, I would have passed.",
              "Nuance: You cannot change the past—it's too late!"
            ] 
          }
        ]
      }
    },
    {
      title: "6.6 ACTIVE & PASSIVE VOICE",
      content: "Active focuses on the Doer. Passive focuses on the Receiver of the action. Passive is useful when the doer is unknown or unimportant.",
      type: 'table',
      data: {
        headers: ["Tense", "Active Pattern", "Passive Pattern (Be + V3)"],
        rows: [
          ["Simple Present", "writes", "is/am/are + written"],
          ["Present Cont.", "is writing", "is/am/are + being + written"],
          ["Present Perfect", "has written", "has/have + been + written"],
          ["Simple Past", "wrote", "was/were + written"],
          ["Past Continuous", "was writing", "was/were + being + written"],
          ["Simple Future", "will write", "will + be + written"],
          ["Modals", "can write", "can + be + written"]
        ]
      }
    },
    {
      title: "NUANCE: THE BY-PHRASE",
      content: "In Passive Voice, we only add 'by [agent]' if the doer is necessary for the meaning. | ✓ The window was broken (by the storm). | ✓ The thief was arrested (no need to say 'by police', it's obvious!).",
      type: 'note'
    },
    {
      title: "DR. MOO'S ADVANCED DIAGNOSIS",
      content: [
        "1. Never use 'will' in the 'If' clause (✗ If it will rain... → ✓ If it rains...). The 'if' clause stays in the present.",
        "2. Passive voice always requires the V3 (Past Participle) form. No V3, no Passive!",
        "3. Since vs For Moo-stake: Don't say 'since 2 hours'—use 'for 2 hours'! Since is a pinpoint on the map of time.",
        "4. In Reported Speech, 'today' must become 'that day' to be accurate. We're time-travelers, not literalists!",
        "5. Subjunctive Moo-rule: In Type 2 Conditionals, 'I was' becomes 'I were'. It's the language of dreams!",
        "6. Question Backshift: In reported questions, the order flips back to normal. (✗ He asked where was I → ✓ He asked where I was)."
      ],
      type: 'list'
    }
  ]
};
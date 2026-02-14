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
        "FOR = Duration (How long it lasted)."
      ],
      type: 'list'
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
            details: ["Since 2015", "Since Monday", "Since morning", "Since 9 o'clock", "Since childhood"] 
          },
          { 
            label: "FOR (Duration)", 
            icon: "📏", 
            description: "Number + Time or General periods.", 
            details: ["For 2 hours", "For 3 days", "For 5 years", "For a long time", "For ages"] 
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
          { label: "PRESENT", icon: "🌞", description: "Always, usually, now, just, already, yet, for, since." },
          { label: "PAST", icon: "🕰️", description: "Yesterday, ago, last week, when, while, before, by the time." },
          { label: "FUTURE", icon: "🚀", description: "Tomorrow, soon, next week, by + time, by the time." }
        ]
      }
    },
    {
      title: "6.3 SEQUENCE OF TENSES",
      content: [
        "Rule: When the main verb is Past, the subordinate verb usually changes to Past.",
        "Example: She says (Pres) she is (Pres) busy. → She said (Past) she was (Past) busy.",
        "Exception: Universal truths don't change! 'He said that water boils at 100°C.'"
      ],
      type: 'list'
    },
    {
      title: "6.4 REPORTED SPEECH CONVERSION",
      content: "When reporting what someone said, we usually move the tense 'one step back' into the past.",
      type: 'table',
      data: {
        headers: ["Direct Speech", "Reported Speech"],
        rows: [
          ["Simple Present", "Simple Past"],
          ["Present Continuous", "Past Continuous"],
          ["Present Perfect / Simple Past", "Past Perfect"],
          ["Will / Can / May", "Would / Could / Might"],
          ["Must", "Had to"]
        ]
      }
    },
    {
      title: "TIME & PLACE CHANGES",
      content: "Don't forget to change these 'proximity' words when reporting speech!",
      type: 'table',
      data: {
        headers: ["Direct", "Reported"],
        rows: [
          ["now", "then / at that time"],
          ["today", "that day"],
          ["tomorrow", "the next day"],
          ["yesterday", "the day before"],
          ["ago", "before"],
          ["here / this", "there / that"]
        ]
      }
    },
    {
      title: "6.5 CONDITIONAL SENTENCES",
      content: "Conditionals describe the 'Logic of If'—what happens under certain circumstances.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "TYPE 0 (Facts)", 
            description: "Universal Truths.", 
            details: ["If + Simple Pres, Simple Pres", "If you heat ice, it melts."] 
          },
          { 
            label: "TYPE 1 (Possible)", 
            description: "Real Future Possibility.", 
            details: ["If + Simple Pres, will + V1", "If it rains, I will stay home."] 
          },
          { 
            label: "TYPE 2 (Unreal)", 
            description: "Unreal Present/Future.", 
            details: ["If + Simple Past, would + V1", "If I were rich, I'd buy a farm."] 
          },
          { 
            label: "TYPE 3 (Regret)", 
            description: "Unreal Past (Impossible).", 
            details: ["If + Past Perf, would have + V3", "If I had studied, I would have passed."] 
          }
        ]
      }
    },
    {
      title: "6.6 ACTIVE & PASSIVE VOICE",
      content: "Active focuses on the Doer. Passive focuses on the Receiver of the action.",
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
      title: "DR. MOO'S ADVANCED DIAGNOSIS",
      content: [
        "1. Never use 'will' in the 'If' clause (✗ If it will rain... → ✓ If it rains...).",
        "2. Passive voice always requires the V3 (Past Participle) form.",
        "3. Since vs For Moo-stake: Don't say 'since 2 hours'—use 'for 2 hours'!",
        "4. In Reported Speech, 'today' must become 'that day' to be accurate."
      ],
      type: 'list'
    }
  ]
};
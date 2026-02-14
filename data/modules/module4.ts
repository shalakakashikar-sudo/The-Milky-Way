
import { Module } from '../../types';

export const module4: Module = {
  id: 4,
  title: "PAST TENSES",
  description: "Navigate the 'Then' with stories of completed actions and historical sequences.",
  sections: [
    {
      title: "4.1 SIMPLE PAST TENSE",
      content: "S + V2 + O",
      type: 'formula'
    },
    {
      title: "COMPLETED ACTIONS",
      content: "Use for actions that finished at a specific point in the past.",
      type: 'grid',
      data: {
        items: [
          { label: "TIME MARKERS", icon: "📅", description: "Key indicators of the past.", details: ["Yesterday", "Last week", "Ago", "In 1999"] },
          { label: "THE 'DID' RULE", icon: "🛠️", description: "Did + V1 in negatives/questions.", details: ["✗ I didn't went.", "✓ I didn't go."] }
        ]
      }
    },
    {
      title: "4.2 PAST CONTINUOUS",
      content: "S + was/were + V4(ing) + O",
      type: 'formula'
    },
    {
      title: "UNFINISHED & INTERRUPTED",
      content: "Actions in progress in the past, often interrupted by another event.",
      type: 'grid',
      data: {
        items: [
          { label: "INTERRUPTIONS", icon: "⚡", description: "Cont. + Simple Past.", details: ["I was reading when the phone rang."] },
          { label: "PARALLEL", icon: "↔️", description: "Two ongoing actions.", details: ["While I was cooking, he was sleeping."] },
          { label: "BACKGROUND", icon: "🖼️", description: "Setting the scene.", details: ["The sun was shining and birds were singing."] }
        ]
      }
    },
    {
      title: "4.3 PAST PERFECT",
      content: "S + had + V3 + O",
      type: 'formula'
    },
    {
      title: "THE 'PAST OF THE PAST'",
      content: "When two actions happened in the past, use Past Perfect for the first one.",
      type: 'grid',
      data: {
        items: [
          { label: "SEQUENCE", icon: "🔢", description: "Action 1 (Had) -> Action 2 (V2).", details: ["The train had left when I reached."] },
          { label: "CONNECTORS", icon: "🔗", description: "Key sequence words.", details: ["Before", "After", "By the time", "Until"] }
        ]
      }
    },
    {
      title: "4.4 PAST PERFECT CONTINUOUS",
      content: "S + had + been + V4(ing) + O",
      type: 'formula'
    },
    {
      title: "DURATION IN THE PAST",
      content: "Shows an ongoing action that was happening before another past event.",
      type: 'note'
    },
    {
      title: "4.5 PAST TENSE COMPARISON",
      content: "Navigate the timeline of 'Then'.",
      type: 'table',
      data: {
        headers: ["Tense", "Focus", "Example"],
        rows: [
          ["SIMPLE PAST", "Finished Action", "I worked in a bank."],
          ["PAST CONT.", "Ongoing/Interrupted", "I was working when you called."],
          ["PAST PERFECT", "Sequence (First)", "I had worked there before I moved."],
          ["PAST P. CONT.", "Past Duration", "I had been working for 5 years."]
        ]
      }
    },
    {
      title: "DR. MOO'S WARNING",
      content: "Never use 'did' with 'V2'. Once you use 'did', the main verb must return to its base form (V1).",
      type: 'note'
    }
  ]
};

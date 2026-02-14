
import { Module } from '../../types';

export const module6: Module = {
  id: 6,
  title: "ADVANCED CONCEPTS",
  description: "Level up your grammar with Since vs For, Conditionals, and Reported Speech.",
  sections: [
    {
      title: "6.1 SINCE vs FOR",
      content: "One tells us 'When?', the other tells us 'How long?'.",
      type: 'grid',
      data: {
        items: [
          { label: "SINCE", icon: "📍", description: "Starting Point.", details: ["Since 2015", "Since Monday", "Since morning"] },
          { label: "FOR", icon: "📏", description: "Duration.", details: ["For 2 hours", "For 3 days", "For ages"] }
        ]
      }
    },
    {
      title: "6.3 SEQUENCE OF TENSES",
      content: "When the main verb is Past, the subordinate verb usually changes to Past.",
      type: 'note'
    },
    {
      title: "6.4 REPORTED SPEECH CONVERSION",
      content: "Moving thoughts from Direct to Indirect.",
      type: 'table',
      data: {
        headers: ["Direct", "Reported"],
        rows: [
          ["Simple Present", "Simple Past"],
          ["Present Continuous", "Past Continuous"],
          ["Present Perfect", "Past Perfect"],
          ["Will / Can", "Would / Could"]
        ]
      }
    },
    {
      title: "6.5 CONDITIONAL SENTENCES",
      content: "The Logic of 'If'.",
      type: 'grid',
      data: {
        items: [
          { label: "TYPE 0", description: "Universal Truths.", details: ["If + Pres, Pres", "If you heat ice, it melts."] },
          { label: "TYPE 1", description: "Real Possibility.", details: ["If + Pres, will + V1", "If it rains, I will stay home."] },
          { label: "TYPE 2", description: "Unreal Present.", details: ["If + Past, would + V1", "If I were rich, I'd buy a farm."] },
          { label: "TYPE 3", description: "Unreal Past.", details: ["If + Past Perf, would have + V3", "If I had studied, I would have passed."] }
        ]
      }
    },
    {
      title: "6.6 ACTIVE & PASSIVE VOICE",
      content: "Changing the focus from the Doer to the Receiver.",
      type: 'table',
      data: {
        headers: ["Tense", "Active", "Passive"],
        rows: [
          ["Simple Present", "Ram writes a letter.", "A letter is written by Ram."],
          ["Present Cont.", "Ram is writing...", "A letter is being written..."],
          ["Simple Past", "Ram wrote a letter.", "A letter was written by Ram."]
        ]
      }
    }
  ]
};

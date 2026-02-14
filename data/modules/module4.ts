import { Module } from '../../types';

export const module4: Module = {
  id: 4,
  title: "PAST TENSES",
  description: "Navigate the 'Then' with stories of completed actions and historical sequences.",
  sections: [
    {
      title: "4.1 SIMPLE PAST TENSE",
      content: [
        "AFFIRMATIVE: S + V2 + O",
        "NEGATIVE: S + did + not + V1 + O",
        "INTERROGATIVE: Did + S + V1 + O ?",
        "NEG. INTERROGATIVE: Did + S + not + V1 + O ?"
      ],
      type: 'list'
    },
    {
      title: "WHEN TO USE SIMPLE PAST",
      content: "Use for actions that happened and finished at a specific point in the past.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "COMPLETED ACTIONS", 
            icon: "✅", 
            description: "Yesterday, last week, ago, in 1999, then, when I was young, once upon a time.", 
            details: ["I went to school yesterday.", "She lived in Mexico for 5 years.", "We received the parcel this morning."] 
          },
          { 
            label: "THE 'DID' RULE", 
            icon: "🛠️", 
            description: "Use V2 ONLY in affirmative. Use 'did + V1' in negative, interrogative, and negative interrogative.", 
            details: ["✗ I didn't went.", "✓ I didn't go.", "✓ Did you eat breakfast?"] 
          }
        ]
      }
    },
    {
      title: "4.2 PAST CONTINUOUS",
      content: [
        "AFFIRMATIVE: S + was/were + V4 + O",
        "NEGATIVE: S + was/were + not + V4 + O",
        "INTERROGATIVE: Was/Were + S + V4 + O ?",
        "NEG. INTERROGATIVE: Was/Were + S + not + V4 + O ?"
      ],
      type: 'list'
    },
    {
      title: "WAS vs WERE",
      content: "The helping verb must agree with the subject in number.",
      type: 'grid',
      data: {
        items: [
          { label: "WAS", icon: "👤", description: "I, He, She, It, Ram.", details: ["I was eating.", "She was writing.", "The baby was sleeping."] },
          { label: "WERE", icon: "👥", description: "We, You, They.", details: ["They were playing.", "We were waiting.", "Children were playing."] }
        ]
      }
    },
    {
      title: "THREE WAYS TO USE CONTINUOUS",
      content: "Describes unfinished, ongoing background actions in the past.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "INTERRUPTIONS", 
            icon: "⚡", 
            description: "A long action interrupted by a short action (Simple Past).", 
            details: ["I was reading when the phone rang.", "It was raining when Reena left."] 
          },
          { 
            label: "SIMULTANEOUS", 
            icon: "↔️", 
            description: "Two parallel actions happening at the same time in the past.", 
            details: ["While I was reading, my brother was watching TV."] 
          },
          { 
            label: "BACKGROUND", 
            icon: "🖼️", 
            description: "Describing background scenes in a story.", 
            details: ["The sun was shining and birds were singing."] 
          }
        ]
      }
    },
    {
      title: "WHEN vs WHILE",
      content: "The choice of connector depends on the action's nature.",
      type: 'grid',
      data: {
        items: [
          { label: "WHEN", description: "Used with Simple Past (the short interruption).", details: ["When the phone rang, I was sleeping."] },
          { label: "WHILE", description: "Used with Past Continuous (the long background).", details: ["While I was sleeping, the phone rang."] }
        ]
      }
    },
    {
      title: "4.3 PAST PERFECT",
      content: [
        "AFFIRMATIVE: S + had + V3 + O",
        "NEGATIVE: S + had + not + V3 + O",
        "INTERROGATIVE: Had + S + V3 + O ?",
        "NEG. INTERROGATIVE: Had + S + not + V3 + O ?"
      ],
      type: 'list'
    },
    {
      title: "THE 'PAST OF THE PAST'",
      content: "Shows which action happened first when there are two or more past actions.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "FIRST ACTION", 
            icon: "1️⃣", 
            description: "Use Past Perfect (Had + V3) for the action that finished first.", 
            details: ["The train had left when I reached the station.", "I had finished my homework before I went to play."] 
          },
          { 
            label: "TIME MARKERS", 
            icon: "🔗", 
            description: "Before, after, already, by the time, by then, until, as soon as.", 
            details: ["When we got to the theatre, the movie had started.", "By the time I reached, the train had left."] 
          }
        ]
      }
    },
    {
      title: "UNDERSTANDING THE SEQUENCE",
      content: "Past Perfect ←————— Simple Past ←————— Present",
      type: 'formula'
    },
    {
      title: "4.4 PAST PERFECT CONTINUOUS",
      content: [
        "AFFIRMATIVE: S + had + been + V4 + O",
        "NEGATIVE: S + had + not + been + V4 + O",
        "INTERROGATIVE: Had + S + been + V4 + O ?",
        "NEG. INTERROGATIVE: Had + S + not + been + V4 + O ?"
      ],
      type: 'list'
    },
    {
      title: "DURATION IN THE PAST",
      content: "Shows an ongoing action that was continuing before another past action.",
      type: 'grid',
      data: {
        items: [
          { label: "CAUSALITY", icon: "🧪", description: "Explaining a past result through an ongoing action.", details: ["I felt tired because I had been driving all day."] },
          { label: "DURATION", icon: "⌛", description: "Emphasis on how long an action lasted before an event.", details: ["She had been waiting for two hours when the doctor arrived."] }
        ]
      }
    },
    {
      title: "4.5 PAST TENSE COMPARISON",
      content: "Decision Tree: One action? -> Simple Past. Interrupted? -> Past Continuous. Two actions? -> Past Perfect. Duration before? -> Past Perf. Continuous.",
      type: 'table',
      data: {
        headers: ["Tense", "Focus", "Example"],
        rows: [
          ["Simple Past", "Single finished action", "I ate breakfast."],
          ["Past Cont.", "Ongoing/Interrupted action", "I was eating when you called."],
          ["Past Perfect", "Earlier of two actions", "I had eaten before I left."],
          ["Past P. Cont.", "Ongoing duration before action", "I had been eating for an hour when he arrived."]
        ]
      }
    },
    {
      title: "4.6 DR. MOO'S TOP MOO-STAKES",
      content: [
        "1. Sequence Error: Using Simple Past for both actions when one happened first (✗ When I arrived, the movie started).",
        "2. V2 Overload: Using V2 after 'did' (✗ I didn't went → ✓ I didn't go).",
        "3. Missing 'Been': Forgetting 'been' in Perfect Continuous (✗ I had working).",
        "4. Continuous Confusion: Using Past Continuous for finished actions (✗ I was finishing my homework yesterday).",
        "5. Connector Chaos: Confusing 'when' and 'while'.",
        "6. Perfect Overuse: Using Past Perfect when sequence is already clear (Use Simple Past).",
        "7. V2 vs V3: Confusing Past Simple with Past Participle (✗ I had went).",
        "8. Stative Blunder: Using Continuous for Stative verbs (✗ I was knowing)."
      ],
      type: 'list'
    },
    {
      title: "DR. MOO'S PRO MASTER TIPS",
      content: [
        "Visualize the Timeline: Past Perf. Cont. -> Past Perfect -> Simple Past -> Now.",
        "Irregular Verbs are Key: Master V2 and V3 forms to tell stories accurately.",
        "Connector Logic: When + Simple Past (short), While + Past Continuous (long).",
        "Storytelling: Mix tenses naturally to bring your past experiences to life!"
      ],
      type: 'list'
    }
  ]
};
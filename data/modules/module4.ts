import { Module } from '../../types';

export const module4: Module = {
  id: 4,
  title: "PAST TENSES",
  description: "Navigate the 'Then' with stories of completed actions and historical sequences. Master the art of time-traveling through memory.",
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
      title: "PRO-TIP: THE 'DID' MAGNET",
      content: "Just like 'Does' in the present, 'Did' is a powerful magnet! When 'Did' enters a sentence, it pulls the past-tense charge away from the main verb, changing it from V2 back to V1. | ✗ I didn't went. → ✓ I didn't go. | ✗ Did you ate? → ✓ Did you eat?",
      type: 'note'
    },
    {
      title: "WHEN TO USE SIMPLE PAST",
      content: "The Simple Past is the 'Workhorse' of English storytelling. Use it for actions that started and ended in the past.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "COMPLETED ACTIONS", 
            icon: "✅", 
            description: "Specific points in time: Yesterday, last week, ago, in 1999.", 
            details: [
              "I went to school yesterday.", 
              "She lived in Mexico for 5 years. (She doesn't now)", 
              "We received the parcel this morning.",
              "Nuance: The action must be completely finished!"
            ] 
          },
          { 
            label: "PAST HABITS", 
            icon: "🔄", 
            description: "Actions repeated in the past but no longer true.", 
            details: [
              "I played the flute when I was a child.", 
              "He always carried an umbrella.", 
              "Pro-Tip: Often interchangeable with 'used to'."
            ] 
          },
          { 
            label: "SUDDEN EVENTS", 
            icon: "⚡", 
            description: "Short actions that interrupt longer ones.", 
            details: [
              "The light went out.", 
              "The phone rang.",
              "Nuance: Usually follows 'when'."
            ] 
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
      title: "WAS vs WERE NUANCES",
      content: "The helping verb must agree with the subject. | 'I was' is standard, but in Type 2 Conditionals (unreal dreams), we use 'I were'! | 'If I were a cow, I would moo all day.'",
      type: 'note'
    },
    // Added missing required 'content' property to fix Section interface violation
    {
      title: "WAS vs WERE GUIDE",
      content: "The choice between 'was' and 'were' depends on whether the subject is singular or plural.",
      type: 'grid',
      data: {
        items: [
          { label: "WAS", icon: "👤", description: "Singular: I, He, She, It, Ram.", details: ["I was eating.", "She was writing.", "The baby was sleeping."] },
          { label: "WERE", icon: "👥", description: "Plural: We, You, They.", details: ["They were playing.", "We were waiting.", "Children were playing."] }
        ]
      }
    },
    {
      title: "THREE WAYS TO USE CONTINUOUS",
      content: "Describes the 'Atmosphere' of the past. It shows that an action was 'in the middle' of happening.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "INTERRUPTIONS", 
            icon: "⚡", 
            description: "A long action interrupted by a short action (Simple Past).", 
            details: [
              "I was reading when the phone rang.", 
              "It was raining when Reena left.",
              "Pro-Tip: The Continuous action was already happening!"
            ] 
          },
          { 
            label: "SIMULTANEOUS", 
            icon: "↔️", 
            description: "Two parallel actions happening at the same time in the past.", 
            details: [
              "While I was reading, my brother was watching TV.",
              "Nuance: Use 'While' to connect these twins."
            ] 
          },
          { 
            label: "BACKGROUND", 
            icon: "🖼️", 
            description: "Setting the scene in a story.", 
            details: [
              "The sun was shining and birds were singing.",
              "People were walking to work.",
              "Nuance: It creates a 'mental photograph' of a moment."
            ] 
          }
        ]
      }
    },
    {
      title: "WHEN vs WHILE: THE MEMORY HOOK",
      content: "WHEN = Sudden Interruption (Short). | WHILE = During the Process (Long). | 'I was walking (Long) WHILE it was raining (Long), WHEN I tripped (Short)!'",
      type: 'note'
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
      content: "If the Past is 'Then', the Past Perfect is 'Even Before Then'. It creates a clear sequence between two past events.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "THE FIRST ACTION", 
            icon: "1️⃣", 
            description: "The action that finished FIRST gets the 'Had + V3' treatment.", 
            details: [
              "The train had left (1st) when I reached the station (2nd).", 
              "I had finished my homework (1st) before I went to play (2nd).",
              "Pro-Tip: If you use 'Before' or 'After', the sequence is already clear, so Simple Past is also common in casual speech."
            ] 
          },
          { 
            label: "TIME MARKERS", 
            icon: "🔗", 
            description: "Before, after, already, by the time, by then, until.", 
            details: [
              "When we got to the theatre, the movie had started.", 
              "By the time I reached, the train had left.",
              "Nuance: 'By the time' is a huge signal for Past Perfect!"
            ] 
          }
        ]
      }
    },
    {
      title: "UNDERSTANDING THE SEQUENCE",
      content: "PAST PERFECT (Action 1) ←————— SIMPLE PAST (Action 2) ←————— PRESENT (Now)",
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
      content: "Shows an ongoing action that was continuing UP TO a specific moment in the past.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "CAUSALITY", 
            icon: "🧪", 
            description: "Explaining a past result through an ongoing action.", 
            details: [
              "I felt tired because I had been driving all day.",
              "The grass was wet because it had been raining.",
              "Nuance: The focus is on the *cause* of the past state."
            ] 
          },
          { 
            label: "DURATION", 
            icon: "⌛", 
            description: "Emphasis on how long an action lasted before an event.", 
            details: [
              "She had been waiting for two hours when the doctor arrived.",
              "Pro-Tip: Similar to Present Perfect Continuous, but moved entirely into the past."
            ] 
          }
        ]
      }
    },
    {
      title: "4.5 PAST TENSE COMPARISON",
      content: "Decision Tree: One action? -> Simple Past. Interrupted? -> Past Continuous. Two actions? -> Past Perfect. Duration before? -> Past Perf. Continuous.",
      type: 'table',
      data: {
        headers: ["Tense", "Focus", "Key Nuance"],
        rows: [
          ["Simple Past", { title: "Fact", example: "I ate breakfast." }, "It is finished and specific."],
          ["Past Cont.", { title: "Process", example: "I was eating when you called." }, "Shows the background state."],
          ["Past Perfect", { title: "Order", example: "I had eaten before I left." }, "Shows which came first."],
          ["Past P. Cont.", { title: "Duration", example: "I had been eating for an hour." }, "Focuses on the effort/length."]
        ]
      }
    },
    {
      title: "4.6 DR. MOO'S TOP 10 MOO-STAKES",
      content: [
        "1. Sequence Error (✗ When I arrived, the movie started). | If the movie was already playing, it *had started* before you got there!",
        "2. V2 Overload (✗ I didn't went). | After 'did', the verb returns to its base form (V1). Use 'didn't go'.",
        "3. Missing 'Been' (✗ I had working). | Perfect Continuous needs the 'been' bridge to connect 'had' and '-ing'.",
        "4. Continuous Confusion (✗ I was finishing my homework yesterday). | If you finished it, use Simple Past: 'I finished'.",
        "5. Connector Chaos: Confusing 'when' and 'while'. | Use 'When' for the short snap and 'While' for the long duration.",
        "6. Perfect Overuse: Using Past Perfect when sequence is already clear with 'Before'. | In casual talk, 'I ate before he came' is fine!",
        "7. V2 vs V3 (✗ I had went). | Perfect tenses ALWAYS use V3 (Gone). V2 (Went) is ONLY for Simple Past Affirmative.",
        "8. Stative Blunder (✗ I was knowing). | Emotions, thoughts, and senses don't like '-ing', even in the past!",
        "9. Forgetting 'Were' with Plurals (✗ They was playing). | Always match 'They/We/You' with 'Were'.",
        "10. Double Past (✗ I did saw him). | Use 'I saw him' or 'I did see him' (for emphasis), but never two past forms together."
      ],
      type: 'list'
    },
    {
      title: "DR. MOO'S PRO MASTER TIPS",
      content: [
        "Visualize the Timeline: Draw a line. Mark 'Now'. Mark 'Action 1'. Mark 'Action 2'. Action 1 is always Perfect!",
        "Irregular Verbs are Key: If you don't know your V2 and V3, you'll be stuck at the farm gate. Practice daily!",
        "Connector Logic: When + Simple Past (Short/Suddenly). While + Past Continuous (Long/Atmosphere).",
        "Storytelling Tip: Use Past Continuous to describe the scene, and Simple Past to describe the plot moving forward."
      ],
      type: 'list'
    }
  ]
};
import { Module } from '../../types';

export const module5: Module = {
  id: 5,
  title: "FUTURE TENSES",
  description: "Explore the 'Later' with predictions, plans, and future deadlines.",
  sections: [
    {
      title: "5.1 SIMPLE FUTURE TENSE",
      content: [
        "AFFIRMATIVE: S + will/shall + V1 + O",
        "NEGATIVE: S + will/shall + not + V1 + O",
        "INTERROGATIVE: Will/Shall + S + V1 + O ?",
        "NEG. INTERROGATIVE: Will + S + not + V1 + O ?"
      ],
      type: 'list'
    },
    {
      title: "WILL vs SHALL",
      content: "In modern English, 'will' is universally accepted for all subjects. Traditionally, 'shall' was used for I/We, but today it is mostly used for formal offers or suggestions.",
      type: 'note'
    },
    {
      title: "4 WAYS TO USE SIMPLE FUTURE",
      content: "Simple Future handles spontaneous thoughts and general predictions.",
      type: 'grid',
      data: {
        items: [
          { label: "INSTANT DECISIONS", icon: "💡", description: "Decided while speaking.", details: ["The phone is ringing. I will get it!", "I'm thirsty. I'll make some tea."] },
          { label: "OFFERS", icon: "🎁", description: "Willingness to help.", details: ["I will help you with those bags.", "Shall I open the door for you?"] },
          { label: "PROMISES", icon: "🤝", description: "Commitments.", details: ["I will pay you back next week.", "I promise I will call you."] },
          { label: "OPINIONS", icon: "💬", description: "Predictions based on feelings.", details: ["I think India will win.", "I believe he will succeed."] }
        ]
      }
    },
    {
      title: "5.2 ALTERNATIVE FUTURE FORMS",
      content: "Sometimes 'will' isn't the best choice. Use 'Going to' for plans or 'Present Continuous' for arrangements.",
      type: 'grid',
      data: {
        items: [
          { label: "GOING TO (PLANS)", icon: "📅", description: "Prior plans & intentions.", details: ["We are going to buy a car.", "She is going to study medicine."] },
          { label: "GOING TO (EVIDENCE)", icon: "☁️", description: "Predictions with present proof.", details: ["Look at those clouds! It is going to rain.", "Watch out! You are going to fall!"] },
          { label: "PRESENT CONTINUOUS", icon: "📌", description: "Fixed future arrangements.", details: ["I am having a party this Saturday.", "We are going to Mumbai tomorrow."] }
        ]
      }
    },
    {
      title: "5.3 FUTURE CONTINUOUS",
      content: [
        "AFFIRMATIVE: S + will/shall + be + V4 + O",
        "NEGATIVE: S + will/shall + not + be + V4 + O",
        "INTERROGATIVE: Will/Shall + S + be + V4 + O ?"
      ],
      type: 'list'
    },
    {
      title: "ONGOING IN THE FUTURE",
      content: "Actions that will be in progress at a specific time or routine future events.",
      type: 'grid',
      data: {
        items: [
          { label: "SPECIFIC TIME", icon: "⌚", description: "Ongoing at a point.", details: ["At 11 AM tomorrow, I will be driving.", "This time tomorrow, I will be on a beach."] },
          { label: "ROUTINE", icon: "🔄", description: "Fixed future events.", details: ["I will be staying in Indore for a few days.", "I will be going to the library later."] }
        ]
      }
    },
    {
      title: "5.4 FUTURE PERFECT",
      content: [
        "AFFIRMATIVE: S + will/shall + have + V3 + O",
        "NEGATIVE: S + will/shall + have + not + V3 + O",
        "INTERROGATIVE: Will/Shall + S + have + V3 + O ?"
      ],
      type: 'list'
    },
    {
      title: "THE FUTURE DEADLINE",
      content: "Actions completed BY a certain time. Key word: 'BY'.",
      type: 'grid',
      data: {
        items: [
          { label: "BY DECEMBER", icon: "🏁", description: "I will have saved enough money.", details: ["Action starts before/now.", "Action ends at the deadline."] },
          { label: "BY THE TIME", icon: "🔗", description: "By the time you arrive, I will have finished.", details: ["Sequencing two future events.", "Focus on completion."] }
        ]
      }
    },
    {
      title: "5.5 FUTURE PERFECT CONTINUOUS",
      content: "S + will/shall + have + been + V4 + O",
      type: 'formula'
    },
    {
      title: "FUTURE DURATION",
      content: "Ongoing actions that will continue UP TO a specific future point, emphasizing the length of time.",
      type: 'note',
      data: {
        items: [
          { label: "EXAMPLE", description: "Next month, I will have been working here for five years." }
        ]
      }
    },
    {
      title: "5.6 FUTURE TENSE COMPARISON",
      content: "Choose the right future flavor for your sentence.",
      type: 'table',
      data: {
        headers: ["Tense", "Use", "Example"],
        rows: [
          ["Simple Future", "Spontaneous / Promise", "I will go tomorrow."],
          ["Going To", "Plan / Evidence", "I'm going to buy it."],
          ["Future Continuous", "Ongoing at time", "I'll be working at 5 PM."],
          ["Future Perfect", "Completion deadline", "I'll have finished by 5 PM."],
          ["Future Perf. Cont.", "Duration deadline", "I'll have been working for 8 hours by 5 PM."]
        ]
      }
    },
    {
      title: "5.7 DR. MOO'S TOP MOO-STAKES",
      content: [
        "1. Wrong Verb Form: No -s/-es after will (✗ She will goes → ✓ She will go).",
        "2. Plan vs. Instant: Using 'will' for prior plans (✗ I will visit my aunt → ✓ I'm going to visit).",
        "3. Missing 'Be': Forgetting 'be' in Continuous (✗ I will working → ✓ I will be working).",
        "4. Missing 'Have': Forgetting 'have' in Perfect (✗ She will finished → ✓ She will have finished).",
        "5. Contraction Master: 'Will not' becomes 'Won't', not 'Willn't'!"
      ],
      type: 'list'
    }
  ]
};
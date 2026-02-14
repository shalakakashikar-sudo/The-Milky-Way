import { Module } from '../../types';

export const module5: Module = {
  id: 5,
  title: "FUTURE TENSES",
  description: "Explore the 'Later' with predictions, plans, and future deadlines. Learn to articulate intentions and scheduled destinies.",
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
      title: "PRO-TIP: THE 'FUTURE-LESS' IF",
      content: "Even though we are talking about the future, we NEVER use 'will' immediately after 'if', 'when', 'before', 'after', or 'as soon as'. | ✗ If it will rain... → ✓ If it rains... | ✗ When I will arrive... → ✓ When I arrive...",
      type: 'note'
    },
    {
      title: "WILL vs SHALL NUANCE",
      content: "In modern English, 'will' is universally accepted. However, 'Shall' survives in two specific ways: | 1. Formal Suggestions: 'Shall we dance?' | 2. Legal/Formal obligations: 'The tenant shall pay the rent.' For everything else, stick to 'Will'!",
      type: 'note'
    },
    {
      title: "4 WAYS TO USE SIMPLE FUTURE",
      content: "Simple Future handles spontaneous thoughts, general predictions, and social contracts.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "INSTANT DECISIONS", 
            icon: "💡", 
            description: "Decided while speaking (Spontaneous).", 
            details: [
              "The phone is ringing. I will get it!", 
              "I'm thirsty. I'll make some tea.",
              "Nuance: You had no plan to do this until this second!"
            ] 
          },
          { 
            label: "OFFERS & SUGGESTIONS", 
            icon: "🎁", 
            description: "Willingness to help or proposing ideas.", 
            details: [
              "I will help you with those bags.", 
              "Shall I open the door for you?",
              "Pro-Tip: 'Shall' makes offers sound very polite."
            ] 
          },
          { 
            label: "PROMISES & THREATS", 
            icon: "🤝", 
            description: "Commitments or warnings.", 
            details: [
              "I will pay you back next week.", 
              "I promise I will call you.",
              "Warning: 'I will tell your mother!' is a classic threat."
            ] 
          },
          { 
            label: "OPINIONS (WEAK PREDICTIONS)", 
            icon: "💬", 
            description: "Predictions based on feelings or thoughts.", 
            details: [
              "I think India will win.", 
              "I believe he will succeed.",
              "Nuance: Use with 'I think', 'I expect', 'Probably'."
            ] 
          }
        ]
      }
    },
    {
      title: "5.2 ALTERNATIVE FUTURE FORMS",
      content: "Sometimes 'will' isn't the best choice. Use 'Going to' for plans or 'Present Continuous' for arrangements.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "GOING TO (PLANS)", 
            icon: "📅", 
            description: "Prior plans & intentions.", 
            details: [
              "We are going to buy a car (we decided last week).", 
              "She is going to study medicine.",
              "Nuance: The decision happened BEFORE the conversation."
            ] 
          },
          { 
            label: "GOING TO (EVIDENCE)", 
            icon: "☁️", 
            description: "Predictions with present proof (Strong).", 
            details: [
              "Look at those clouds! It is going to rain.", 
              "Watch out! You are going to fall!",
              "Pro-Tip: You can *see* the future happening right now."
            ] 
          },
          { 
            label: "PRESENT CONTINUOUS", 
            icon: "📌", 
            description: "Fixed future arrangements with others.", 
            details: [
              "I am having a party this Saturday.", 
              "We are meeting the CEO at 5 PM.",
              "Nuance: Usually involves another person or a set place/time."
            ] 
          }
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
      title: "NUANCE: POLITE INQUIRIES",
      content: "We often use Future Continuous to ask about someone's plans politely, without sounding like we are pressuring them. | 'Will you be staying for dinner?' sounds much softer than 'Will you stay for dinner?'",
      type: 'note'
    },
    {
      title: "ONGOING IN THE FUTURE",
      content: "Actions that will be in progress at a specific time or routine future events.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "SPECIFIC TIME", 
            icon: "⌚", 
            description: "Ongoing at a point in the future.", 
            details: [
              "At 11 AM tomorrow, I will be driving.", 
              "This time tomorrow, I will be on a beach.",
              "Nuance: Like a 'snapshot' of the future."
            ] 
          },
          { 
            label: "ROUTINE / EXPECTED", 
            icon: "🔄", 
            description: "Events that happen naturally as part of a plan.", 
            details: [
              "I will be staying in Indore for a few days.", 
              "The professor will be giving the lecture as usual.",
              "Pro-Tip: Use for things that are 'business as usual'."
            ] 
          }
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
      content: "Actions completed BY a certain time. This is the 'deadline' tense.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "BY + TIME", 
            icon: "🏁", 
            description: "Focus on completion before a point.", 
            details: [
              "I will have saved enough money by December.", 
              "He will have finished the report by 5 PM.",
              "Nuance: We don't know exactly *when* he finishes, only that it is done *by* then."
            ] 
          },
          { 
            label: "SEQUENCING", 
            icon: "🔗", 
            description: "One future action finishing before another.", 
            details: [
              "By the time you arrive (Simple Pres), I will have finished (Future Perf).",
              "Pro-Tip: Use Simple Present for the second action!"
            ] 
          }
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
      type: 'note'
    },
    {
      title: "NUANCE: FOR vs BY",
      content: "This tense almost always requires BOTH a duration ('for') and a point in time ('by'). | 'By next week, I will have been working here FOR ten years.'",
      type: 'note'
    },
    {
      title: "5.6 FUTURE TENSE COMPARISON",
      content: "Choose the right future flavor for your sentence.",
      type: 'table',
      data: {
        headers: ["Tense", "Nuance", "Example", "Signal Word"],
        rows: [
          ["Simple Future", { title: "Spontaneous", example: "I will go." }, "I'll do it now!", "Wait!, I think"],
          ["Going To", { title: "Planned / Evidence", example: "I'm going to buy it." }, "Look! It's going to rain.", "Look!, watch out"],
          ["Future Cont.", { title: "In Progress", example: "I'll be working." }, "At 5 PM, I'll be working.", "At this time..."],
          ["Future Perfect", { title: "Deadline", example: "I'll have finished." }, "I'll have finished by then.", "By, By the time"],
          ["Future Perf. Cont.", { title: "Duration", example: "I'll have been working." }, "By 5 PM, I'll have been working for 8h.", "For... by..."]
        ]
      }
    },
    {
      title: "5.7 DR. MOO'S TOP 10 MOO-STAKES",
      content: [
        "1. No -s/-es after will (✗ She will goes). | Modal verbs like 'will' ALWAYS take the base V1 form.",
        "2. Will for Plans (✗ Next summer I will visit Paris). | If you've already decided, use 'I am going to visit'.",
        "3. Missing 'Be' in Continuous (✗ I will working). | Continuous needs 'be' to hold the '-ing' verb.",
        "4. Missing 'Have' in Perfect (✗ She will finished). | Perfect needs 'have' to hold the V3 form.",
        "5. Contraction Confusion (✗ I'll not). | Use 'I won't' for a more natural-sounding negative.",
        "6. Using 'Will' after 'If' (✗ If I will see him). | The 'if' clause stays in Present Simple: 'If I see him'.",
        "7. Future Continuous vs Simple (✗ At 10, I will sleep). | If the action is ongoing at that time, use 'I will be sleeping'.",
        "8. Forgetting V3 in Perfect (✗ I will have eat). | Always use V3 (Eaten) after 'have'.",
        "9. Present Continuous vs Will (✗ It will rain - looking at clouds). | Use 'It's going to rain' when you see the proof!",
        "10. Sequence Error (✗ By the time you will come, I'll leave). | Use 'By the time you come (Pres), I will have left (Perf)'."
      ],
      type: 'list'
    }
  ]
};
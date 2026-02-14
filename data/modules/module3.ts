import { Module } from '../../types';

export const module3: Module = {
  id: 3,
  title: "PRESENT TENSES",
  description: "Master the 'Now' with the four essential present structures. Learn to express habits, ongoing actions, and life experiences.",
  sections: [
    {
      title: "3.1 SIMPLE PRESENT: THE HABITUAL",
      content: [
        "AFFIRMATIVE: S + V1(+s/es) + O",
        "NEGATIVE: S + do/does + not + V1 + O",
        "INTERROGATIVE: Do/Does + S + V1 + O ?",
        "NEG. INTERROGATIVE: Do/Does + S + not + V1 + O ?"
      ],
      type: 'list'
    },
    {
      title: "THE DO/DOES MAGNET",
      content: "Always remember: 'Does' is like a magnet—it pulls the -s away from the main verb! | ✗ She doesn't likes coffee. → ✓ She doesn't like coffee.",
      type: 'note'
    },
    {
      title: "SPELLING RULES (HE/SHE/IT)",
      content: "In Simple Present Affirmative, we add '-s' or '-es' based on the verb ending.",
      type: 'grid',
      data: {
        items: [
          { label: "STANDARD", icon: "✍️", description: "Just add -s.", details: ["Plays, Eats, Runs."] },
          { label: "S/SH/CH/X/O", icon: "🔤", description: "Add -es.", details: ["Washes, Watches, Goes."] },
          { label: "CONS. + Y", icon: "🔡", description: "Change y to i, add -es.", details: ["Studies, Cries, Flies."] }
        ]
      }
    },
    {
      title: "5 FACETS OF SIMPLE PRESENT",
      content: "Denotes regular, factual, or scheduled events.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "HABITS / ROUTINES", 
            icon: "⏰", 
            description: "Things you do repeatedly.", 
            details: ["I wake up at 6 AM.", "Marker: Always, usually, never."] 
          },
          { 
            label: "UNIVERSAL FACTS", 
            icon: "🌍", 
            description: "General or scientific truths.", 
            details: ["The sun sets in the west.", "Water boils at 100°C."] 
          },
          { 
            label: "SCHEDULED FUTURE", 
            icon: "🚆", 
            description: "Official timetables (Timeless Future).", 
            details: ["The train arrives at 10 AM tomorrow.", "Nuance: Use for fixed schedules."] 
          }
        ]
      }
    },
    {
      title: "3.2 PRESENT CONTINUOUS: THE PROGRESSIVE",
      content: [
        "AFFIRMATIVE: S + am/is/are + V4 + O",
        "NEGATIVE: S + am/is/are + not + V4 + O",
        "INTERROGATIVE: Am/Is/Are + S + V4 + O ?"
      ],
      type: 'list'
    },
    {
      title: "NUANCE: THE 'ALWAYS' COMPLAINT",
      content: "If you use 'always' with Present Continuous, it changes from a fact to an annoyed complaint! | 'He always loses his keys' (Neutral habit) | 'He is ALWAYS losing his keys!' (Annoying behavior)",
      type: 'note'
    },
    {
      title: "THREE WAYS TO USE CONTINUOUS",
      content: "Describes actions in progress or temporary arrangements.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "RIGHT NOW", 
            icon: "📍", 
            description: "At the moment of speaking.", 
            details: ["Listen! Someone is singing.", "Marker: Now, at present, Look!"] 
          },
          { 
            label: "TEMPORARY", 
            icon: "⏳", 
            description: "Ongoing but not forever.", 
            details: ["I am reading a great book this week.", "He is staying with friends."] 
          },
          { 
            label: "FIXED FUTURE", 
            icon: "📅", 
            description: "Arrangements already in the diary.", 
            details: ["I am meeting the boss at 5 PM.", "Nuance: Requires a future time marker."] 
          }
        ]
      }
    },
    {
      title: "3.3 PRESENT PERFECT: THE BRIDGE",
      content: "S + has/have + V3 + O",
      type: 'formula'
    },
    {
      title: "BEEN vs GONE NUANCE",
      content: "Where are they now? | 'She has BEEN to Paris' = She went and returned. | 'She has GONE to Paris' = She is still there or on her way.",
      type: 'note'
    },
    {
      title: "EXPERIENCES vs RECENT ACTS",
      content: "Focuses on the result or the existence of an experience.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "EXPERIENCES", 
            icon: "🌍", 
            description: "Actions at an unstated time.", 
            details: ["I have seen that movie.", "Have you ever tried sushi?"] 
          },
          { 
            label: "RECENT RESULTS", 
            icon: "✨", 
            description: "Completed with immediate impact.", 
            details: ["I have lost my keys (I can't enter now).", "He has just left."] 
          }
        ]
      }
    },
    {
      title: "3.4 PRESENT PERFECT CONTINUOUS",
      content: "S + has/have + been + V4 + O",
      type: 'formula'
    },
    {
      title: "SINCE vs FOR COMPASS",
      content: "Use for actions that started in the past and are still happening.",
      type: 'grid',
      data: {
        items: [
          { label: "SINCE (Start Point)", icon: "📍", description: "Pinpoint on the calendar.", details: ["Since Monday, Since 2010, Since breakfast."] },
          { label: "FOR (Duration)", icon: "📏", description: "Length of the line.", details: ["For 2 hours, For ages, For a long time."] }
        ]
      }
    },
    {
      title: "3.5 PRESENT TENSE COMPARISON",
      content: "Choose the right 'Work' aspect for your present sentence.",
      type: 'table',
      data: {
        headers: ["Aspect", "Focus", "Example", "Signal Word"],
        rows: [
          ["Simple", "Routine/Fact", "I eat apples.", "Always, Daily"],
          ["Continuous", "Progress/Now", "I am eating.", "Look!, Now"],
          ["Perfect", "Result/Life", "I have eaten.", "Just, Already"],
          ["P. Continuous", "Duration", "I have been eating.", "Since, For"]
        ]
      }
    },
    {
      title: "DR. MOO'S PRESENT DIAGNOSIS",
      content: [
        "1. Never use '-ing' for stative verbs like know, believe, or belong.",
        "2. Don't use Present Perfect with specific past times (✗ I have seen him yesterday).",
        "3. Remember: Present Continuous can describe the future, but only for fixed plans.",
        "4. 'Been' is the bridge for duration; don't leave it out of Perfect Continuous!"
      ],
      type: 'list'
    }
  ]
};
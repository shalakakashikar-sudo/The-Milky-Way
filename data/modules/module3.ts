
import { Module } from '../../types';

export const module3: Module = {
  id: 3,
  title: "PRESENT TENSES",
  description: "Master the 'Now' with Simple, Continuous, Perfect, and Progressive forms.",
  sections: [
    {
      title: "3.1 SIMPLE PRESENT TENSE",
      content: "S + V1(+s/es) + O",
      type: 'formula'
    },
    {
      title: "WHEN TO ADD -s/-es",
      content: "This is the most common 'moo-stake'! Only add -s/-es for 3rd Person Singular (He, She, It, Ram).",
      type: 'grid',
      data: {
        items: [
          { label: "I / WE / YOU / THEY", icon: "👥", description: "Use V1 (Base Form).", details: ["I play", "They study", "We work"] },
          { label: "HE / SHE / IT", icon: "👤", description: "Use V1 + s/es.", details: ["He plays", "She works", "It studies"] }
        ]
      }
    },
    {
      title: "USES OF SIMPLE PRESENT",
      content: "Simple Present isn't just for 'now'—it's for things that are always true or happen repeatedly.",
      type: 'grid',
      data: {
        items: [
          { label: "HABITS & ROUTINES", icon: "⏰", description: "Regularly repeated actions.", details: ["She drinks tea every morning.", "I wake up at 6 AM daily."] },
          { label: "UNIVERSAL FACTS", icon: "🌍", description: "Scientific or general truths.", details: ["Water boils at 100°C.", "The sun rises in the east."] },
          { label: "SCHEDULED FUTURE", icon: "🚆", description: "Fixed timetables/programs.", details: ["The train leaves at 9 AM.", "The movie starts at 7 PM."] }
        ]
      }
    },
    {
      title: "3.2 PRESENT CONTINUOUS",
      content: "S + am/is/are + V4(ing) + O",
      type: 'formula'
    },
    {
      title: "ACTIONS HAPPENING NOW",
      content: "Use for actions in progress at this very moment or temporary activities.",
      type: 'grid',
      data: {
        items: [
          { label: "RIGHT NOW", icon: "📍", description: "At the time of speaking.", details: ["I am teaching tenses.", "It is raining outside."] },
          { label: "TEMPORARY", icon: "⏳", description: "Ongoing but not permanent.", details: ["He is learning the guitar.", "I am staying in a hotel."] },
          { label: "CHANGES", icon: "📈", description: "Gradual developments.", details: ["Prices are rising rapidly.", "Climate is changing."] }
        ]
      }
    },
    {
      title: "3.3 PRESENT PERFECT",
      content: "S + has/have + V3 + O",
      type: 'formula'
    },
    {
      title: "EXPERIENCES & RECENT RESULTS",
      content: "Connects the past to the present. The result matters NOW.",
      type: 'grid',
      data: {
        items: [
          { label: "EXPERIENCES", icon: "🌍", description: "Unspecified time before now.", details: ["I have visited France twice.", "Has he ever eaten sushi?"] },
          { label: "RECENT ACTIONS", icon: "✨", description: "Just finished with results.", details: ["I have just eaten lunch.", "She has already finished."] },
          { label: "POINTS TO REMEMBER", icon: "🚫", description: "NEVER use with specific past time.", details: ["✗ I have seen him yesterday.", "✓ I saw him yesterday."] }
        ]
      }
    },
    {
      title: "3.4 PRESENT PERFECT CONTINUOUS",
      content: "S + has/have + been + V4(ing) + O",
      type: 'formula'
    },
    {
      title: "EMPHASIZING DURATION",
      content: "Actions that started in the past and are STILL continuing.",
      type: 'grid',
      data: {
        items: [
          { label: "FOR (Duration)", icon: "📏", description: "Length of time.", details: ["For 2 hours", "For 5 years", "For a long time"] },
          { label: "SINCE (Point)", icon: "📍", description: "Starting point.", details: ["Since Monday", "Since 2015", "Since morning"] }
        ]
      }
    },
    {
      title: "3.5 PRESENT TENSE COMPARISON",
      content: "A quick look at all four flavors of the Present.",
      type: 'table',
      data: {
        headers: ["Tense", "Focus", "Time Marker", "Example"],
        rows: [
          ["SIMPLE", "Habits/Facts", "Always, daily", "I play cricket."],
          ["CONTINUOUS", "Right Now", "Now, at the moment", "I am playing cricket."],
          ["PERFECT", "Result/Result", "Just, already, yet", "I have played cricket."],
          ["PERF. CONT.", "Duration", "For, since", "I have been playing for 2 hours."]
        ]
      }
    },
    {
      title: "3.6 COMMON PITFALLS",
      content: [
        "Don't forget -s/-es for he/she/it.",
        "Don't use Continuous for Stative verbs (✗ I am knowing).",
        "Don't use 'Since' for duration (✗ since 3 hours).",
        "Don't use Perfect with 'Yesterday' or 'Ago'."
      ],
      type: 'list'
    }
  ]
};

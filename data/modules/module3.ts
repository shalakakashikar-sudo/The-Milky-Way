import { Module } from '../../types';

export const module3: Module = {
  id: 3,
  title: "PRESENT TENSES",
  description: "Master the 'Now' with the four essential present structures: Simple, Continuous, Perfect, and Perfect Continuous.",
  sections: [
    {
      title: "3.1 SIMPLE PRESENT TENSE",
      content: [
        "AFFIRMATIVE: S + V1(+s/es) + O",
        "NEGATIVE: S + do/does + not + V1 + O",
        "INTERROGATIVE: Do/Does + S + V1 + O ?",
        "NEG. INTERROGATIVE: Do/Does + S + not + V1 + O ?"
      ],
      type: 'list'
    },
    {
      title: "THE -s/-es SPELLING RULES",
      content: "When the subject is He, She, It, or a Singular Noun, follow these spelling rules for the verb:",
      type: 'grid',
      data: {
        items: [
          { label: "MOST VERBS", icon: "✍️", description: "Just add -s.", details: ["play → plays", "eat → eats", "run → runs"] },
          { label: "ENDING IN s, sh, ch, x, o", icon: "🔤", description: "Add -es.", details: ["pass → passes", "wash → washes", "fix → fixes", "go → goes"] },
          { label: "CONSONANT + Y", icon: "🔡", description: "Change y to i, add -es.", details: ["study → studies", "cry → cries", "fly → flies"] },
          { label: "VOWEL + Y", icon: "🔡", description: "Just add -s.", details: ["play → plays", "say → says", "enjoy → enjoys"] }
        ]
      }
    },
    {
      title: "5 WAYS TO USE SIMPLE PRESENT",
      content: "Simple Present denotes regular, factual, or scheduled events.",
      type: 'grid',
      data: {
        items: [
          { label: "HABITS & ROUTINES", icon: "⏰", description: "Repeated actions.", details: ["She drinks tea every morning.", "I wake up at 6 AM daily."] },
          { label: "UNIVERSAL FACTS", icon: "🌍", description: "Scientific or geographic truths.", details: ["Water boils at 100°C.", "The sun rises in the east."] },
          { label: "INSTRUCTIONS", icon: "📜", description: "Step-by-step directions.", details: ["First, take 100ml water.", "Turn right at the crossing."] },
          { label: "SCHEDULED FUTURE", icon: "🚆", description: "Timetables and programs.", details: ["The train leaves at 9 AM.", "The movie starts at 7:30 PM."] },
          { label: "STORY TELLING", icon: "📖", description: "Historical/Narrative present.", details: ["Suddenly, someone knocks!", "The hero enters the room."] }
        ]
      }
    },
    {
      title: "3.2 PRESENT CONTINUOUS",
      content: [
        "AFFIRMATIVE: S + am/is/are + V4 + O",
        "NEGATIVE: S + am/is/are + not + V4 + O",
        "INTERROGATIVE: Am/Is/Are + S + V4 + O ?",
        "NEG. INTERROGATIVE: Am/Is/Are + S + not + V4 + O ?"
      ],
      type: 'list'
    },
    {
      title: "WHEN TO USE CONTINUOUS",
      content: "Actions in progress or temporary developments.",
      type: 'grid',
      data: {
        items: [
          { label: "RIGHT NOW", icon: "📍", description: "Happening at speaking time.", details: ["I am teaching tenses.", "It is raining outside."] },
          { label: "TEMPORARY", icon: "⏳", description: "Activities over a period.", details: ["Arun is learning guitar.", "She is working on a project."] },
          { label: "GRADUAL CHANGES", icon: "📈", description: "Developing situations.", details: ["The Earth is getting warmer.", "Population is growing."] },
          { label: "FUTURE PLANS", icon: "📅", description: "Fixed arrangements.", details: ["I am having a party Saturday.", "Rahul is having a test tomorrow."] }
        ]
      }
    },
    {
      title: "DR. MOO'S STATIVE VERB WARNING",
      content: "Some verbs are NOT used in Continuous (-ing) form because they describe states, not actions: like, love, hate, want, need, know, understand, believe, seem, belong.",
      type: 'note'
    },
    {
      title: "3.3 PRESENT PERFECT",
      content: [
        "AFFIRMATIVE: S + has/have + V3 + O",
        "NEGATIVE: S + has/have + not + V3 + O",
        "INTERROGATIVE: Has/Have + S + V3 + O ?",
        "NEG. INTERROGATIVE: Has/Have + S + not + V3 + O ?"
      ],
      type: 'list'
    },
    {
      title: "EXPERIENCES vs. RECENT ACTIONS",
      content: "Present Perfect connects past actions to the present result.",
      type: 'grid',
      data: {
        items: [
          { label: "EXPERIENCES", icon: "🌍", description: "Unspecified time before now.", details: ["Anita has visited France 4 times.", "Have you ever been to Japan?"] },
          { label: "RECENT ACTIONS", icon: "✨", description: "Completed with current relevance.", details: ["I have finished my homework.", "He hasn't called me yet."] }
        ]
      }
    },
    {
      title: "IMPORTANT TIME MARKER POSITIONS",
      content: [
        "JUST: Usually before V3 (I have just finished).",
        "ALREADY: Before V3 or at the end (I have already eaten).",
        "YET: Always at the end (Have you finished yet?).",
        "NEVER/EVER: Before V3 (I have never seen that movie)."
      ],
      type: 'list'
    },
    {
      title: "3.4 PRESENT PERFECT CONTINUOUS",
      content: [
        "AFFIRMATIVE: S + has/have + been + V4 + O",
        "NEGATIVE: S + has/have + not + been + V4 + O",
        "INTERROGATIVE: Has/Have + S + been + V4 + O ?",
        "NEG. INTERROGATIVE: Has/Have + S + not + been + V4 + O ?"
      ],
      type: 'list'
    },
    {
      title: "THE SINCE vs FOR BATTLE",
      content: "This tense focuses on the DURATION of an ongoing action.",
      type: 'grid',
      data: {
        items: [
          { label: "SINCE", icon: "📍", description: "Starting Point of Time.", details: ["Since morning", "Since 2015", "Since 9 o'clock", "Since childhood"] },
          { label: "FOR", icon: "📏", description: "Duration of Time.", details: ["For one hour", "For three weeks", "For ages", "For a long time"] }
        ]
      }
    },
    {
      title: "3.5 PRESENT TENSE COMPARISONS",
      content: "Decision Tree: Habit? -> Simple. Now? -> Continuous. Result? -> Perfect. Duration? -> Perf. Continuous.",
      type: 'table',
      data: {
        headers: ["Aspect", "Perfect (V3)", "Perfect Continuous (Been + V4)"],
        rows: [
          ["Focus", { title: "Completion", example: "I have read 5 books." }, { title: "Duration", example: "I have been reading for 2 hours." }],
          ["Result", { title: "Room is painted", example: "She has painted the room." }, { title: "Still painting", example: "She has been painting all day." }]
        ]
      }
    },
    {
      title: "3.6 DR. MOO'S TOP 10 MOO-STAKES",
      content: [
        "1. Forgetting -s/-es for He/She/It (✗ He play).",
        "2. Simple Present for 'Now' (✗ I go to school now).",
        "3. Continuous with Stative Verbs (✗ I am knowing).",
        "4. Present Perfect with specific Past time (✗ I have seen him yesterday).",
        "5. Confusing 'For' and 'Since' (✗ since 3 hours).",
        "6. Forgetting 'Been' in Perfect Continuous (✗ I have working).",
        "7. Using V2 instead of V3 in Perfect (✗ I have went).",
        "8. Wrong word order in questions (✗ You are going where?).",
        "9. Using 'Already' in questions (Use 'Yet').",
        "10. Double negatives (✗ He doesn't know nothing)."
      ],
      type: 'list'
    }
  ]
};
import { Module } from '../../types';

export const module8: Module = {
  id: 8,
  title: "MASTERY PRACTICE",
  description: "Test your skills with 200+ variations and error detection challenges.",
  sections: [
    {
      title: "ERROR DETECTION STRATEGY",
      content: "How to spot 'moo-stakes' in sentences.",
      type: 'grid',
      data: {
        items: [
          { label: "CHECK SUBJECT", icon: "🔍", description: "Does the verb match the doer? (He goes vs They go)" },
          { label: "CHECK MARKERS", icon: "📍", description: "Is there a 'Yesterday' or 'Since'? Use the right tense!" },
          { label: "CHECK ASPECT", icon: "⚖️", description: "Is the action ongoing or completed?" }
        ]
      }
    },
    {
      title: "8.1 THE MOO-STAKE WALL",
      content: [
        "✗ I am knowing the answer. → ✓ I know the answer. | 'Know' is a stative verb (a state of mind), so it shouldn't use the '-ing' continuous form.",
        "✗ She is having a car. → ✓ She has a car. | 'Have' as possession is a state. Use Simple Present for ownership, not Continuous.",
        "✗ He goes to Delhi yesterday. → ✓ He went to Delhi yesterday. | 'Yesterday' is a finished past time. You must use the V2 form (Simple Past).",
        "✗ I have seen him yesterday. → ✓ I saw him yesterday. | Never use Present Perfect with a specific past time marker like 'yesterday' or 'last week'.",
        "✗ They are living here since 2015. → ✓ They have been living here since 2015. | For actions starting in the past and still continuing with 'since/for', use Present Perfect Continuous.",
        "✗ She don't like coffee. → ✓ She doesn't like coffee. | 'She' is 3rd person singular; it requires 'does not' (doesn't), not 'do not'.",
        "✗ We didn't went to school. → ✓ We didn't go to school. | After 'did' or 'didn't', always use the base form (V1), never the past form (V2).",
        "✗ I am agree with you. → ✓ I agree with you. | 'Agree' is a verb, not an adjective. You don't need 'am'. Just say 'I agree'.",
        "✗ She has cook dinner already. → ✓ She has cooked dinner already. | Present Perfect (has/have) always requires the Past Participle (V3) form of the verb."
      ],
      type: 'list'
    },
    {
      title: "8.2 TENSE CONVERSION",
      content: "Transforming thoughts through time.",
      type: 'table',
      data: {
        headers: ["Original Sentence", "Target Tense", "Result"],
        rows: [
          ["He writes a letter.", "Present Continuous", "He is writing a letter."],
          ["They played cricket.", "Present Perfect", "They have played cricket."],
          ["I am eating lunch.", "Past Continuous", "I was eating lunch."],
          ["We go to school.", "Simple Future", "We will go to school."],
          ["She was cooking.", "Past Perfect Continuous", "She had been cooking."],
          ["He eats breakfast.", "Simple Past", "He ate breakfast."]
        ]
      }
    },
    {
      title: "8.3 REAL-LIFE SCENARIOS",
      content: "See how tenses blend in natural conversation.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "JOB INTERVIEW", 
            icon: "💼", 
            description: "Using Past, Present Perfect, and Future to describe a career.", 
            details: ["'I graduated in 2020.' (Past)", "'I have been working for 3 years.' (Pres. Perf. Cont.)", "'I will contribute to your team.' (Future)"] 
          },
          { 
            label: "DAILY ROUTINE", 
            icon: "🥛", 
            description: "Using Simple Present for habits and Continuous for specific tasks.", 
            details: ["'I usually wake up at 6 AM.' (Simple)", "'I am currently reading a history book.' (Continuous)", "'I go to the gym daily.' (Simple)"] 
          },
          {
            label: "HOLIDAY PLANNING",
            icon: "✈️",
            description: "Mixing intentions with scheduled events and expectations.",
            details: ["'We are going to visit Italy.' (Going to)", "'The flight leaves at 10 AM.' (Simple Pres)", "'I'll bring my camera.' (Spontaneous Future)"]
          },
          {
            label: "GHOST STORY",
            icon: "👻",
            description: "Setting a mood with background actions and sudden events.",
            details: ["'The wind was howling.' (Past Cont.)", "'Suddenly, a door slammed.' (Simple Past)", "'I had never felt so scared.' (Past Perfect)"]
          },
          {
            label: "RECIPE VIDEO",
            icon: "👨‍🍳",
            description: "Giving instructions and describing ongoing processes.",
            details: ["'First, you chop the onions.' (Instructional Pres.)", "'Now, I'm adding the spices.' (Continuous)", "'It has been simmering for 10 mins.' (Perf. Cont.)"]
          },
          {
            label: "ACCIDENT REPORT",
            icon: "🚔",
            description: "Sequencing actions before and during a specific event.",
            details: ["'I was waiting at the light.' (Past Cont.)", "'The car had already stopped.' (Past Perfect)", "'Then, the biker hit the brake.' (Simple Past)"]
          },
          {
            label: "INTERVIEW FOLLOW-UP",
            icon: "✉️",
            description: "Professional follow-up combining past gratitude with future hope.",
            details: ["'Thank you for the time you gave me.' (Simple Past)", "'I have been thinking about our talk.' (Perf. Cont.)", "'I look forward to hearing back.' (Simple Pres)"]
          },
          {
            label: "SOCIAL MEDIA POST",
            icon: "🤳",
            description: "Casual status updates using recent and current events.",
            details: ["'Just finished a long hike!' (Present Perfect)", "'Currently chilling at a cafe.' (Continuous)", "'Will post the vlog tonight!' (Simple Future)"]
          },
          {
            label: "SPORTS COMMENTARY",
            icon: "⚽",
            description: "Fast-paced play-by-play using the Dramatic Present.",
            details: ["'He passes to the striker.' (Simple Present)", "'He's looking for an opening.' (Continuous)", "'He has scored a wonder goal!' (Present Perfect)"]
          },
          {
            label: "WEATHER FORECAST",
            icon: "🌦️",
            description: "Comparing current patterns with future predictions.",
            details: ["'It's raining heavily right now.' (Continuous)", "'The clouds will clear by evening.' (Simple Future)", "'It has been a wet week so far.' (Present Perfect)"]
          }
        ]
      }
    },
    {
      title: "DR. MOO'S FINAL MASTERY ADVICE",
      content: "Mistakes are okay—they're part of learning! The key is to understand WHY a tense is used, not just to memorize the formula. If sequence doesn't matter and there is only one action, Simple Past is usually your safest bet for the past.",
      type: 'note'
    }
  ]
};
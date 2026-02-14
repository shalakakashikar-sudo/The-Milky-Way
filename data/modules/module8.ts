import { Module } from '../../types';

export const module8: Module = {
  id: 8,
  title: "MASTERY PRACTICE",
  description: "Test your skills with 200+ variations and error detection challenges. This is the final frontier of your tense journey!",
  sections: [
    {
      title: "ERROR DETECTION STRATEGY",
      content: "Becoming a grammar detective requires a systematic approach. Follow Dr. Moo's 4-Step Diagnosis for every sentence.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "1. CHECK SUBJECT", 
            icon: "🔍", 
            description: "Does the verb match the doer? (Subject-Verb Agreement).",
            details: [
              "Singular subjects (He/She/It) need singular verbs (is/has/does/plays).",
              "Plural subjects (They/We) need plural verbs (are/have/do/play).",
              "Pro-Tip: Look out for 'I'—it follows plural rules for 'have' and 'do', but has its own 'am' and 'was'!"
            ]
          },
          { 
            label: "2. CHECK MARKERS", 
            icon: "📍", 
            description: "Is there a 'Yesterday', 'Since', or 'By'? Match the timestamp!",
            details: [
              "Past markers = V2 or Had + V3.",
              "Ongoing markers = am/is/are + -ing.",
              "Nuance: Sometimes the marker is implied, not written. Look at the surrounding sentences!"
            ]
          },
          { 
            label: "3. CHECK ASPECT", 
            icon: "⚖️", 
            description: "Is the action ongoing, completed, or a routine?",
            details: [
              "Completed = Perfect.",
              "Ongoing = Continuous.",
              "Routine = Simple.",
              "Pro-Tip: Ask yourself—'Is the result what matters most?' If yes, use Perfect!"
            ]
          },
          { 
            label: "4. CHECK THE HELPING VERB", 
            icon: "🛠️", 
            description: "Is the structure grammatically sound?",
            details: [
              "Continuous needs 'be' (is/am/are/was/were).",
              "Perfect needs 'have' (has/have/had).",
              "Negative/Interrogative needs 'do/does/did' or a modal."
            ]
          }
        ]
      }
    },
    {
      title: "8.1 THE MOO-STAKE WALL",
      content: [
        "✗ I am knowing the answer. → ✓ I know the answer. | 'Know' is a stative verb (a state of mind), so it shouldn't use the '-ing' continuous form. Nuance: Even if you are in the middle of realizing it, we say 'I am beginning to know' or simply 'I know'.",
        "✗ She is having a car. → ✓ She has a car. | 'Have' as possession is a state. Use Simple Present for ownership, not Continuous. Pro-Tip: Only use 'is having' for activities like 'is having a party' or 'is having lunch'.",
        "✗ He goes to Delhi yesterday. → ✓ He went to Delhi yesterday. | 'Yesterday' is a finished past time. You must use the V2 form (Simple Past). Nuance: 'Goes' would imply he goes every yesterday, which is logically impossible!",
        "✗ I have seen him yesterday. → ✓ I saw him yesterday. | Never use Present Perfect with a specific past time marker like 'yesterday' or 'last week'. The Present Perfect must remain 'unbound' to a specific past clock/calendar time.",
        "✗ They are living here since 2015. → ✓ They have been living here since 2015. | For actions starting in the past and still continuing with 'since/for', use Present Perfect Continuous. Using 'are living' suggests it just started right now.",
        "✗ She don't like coffee. → ✓ She doesn't like coffee. | 'She' is 3rd person singular; it requires 'does not' (doesn't), not 'do not'. This is the most common academic error in writing!",
        "✗ We didn't went to school. → ✓ We didn't go to school. | After 'did' or 'didn't', always use the base form (V1), never the past form (V2). The 'did' already carries the past tense burden.",
        "✗ I am agree with you. → ✓ I agree with you. | 'Agree' is a verb, not an adjective. You don't need 'am'. Just say 'I agree'. Nuance: You can say 'I am in agreement', but that is much more formal.",
        "✗ She has cook dinner already. → ✓ She has cooked dinner already. | Present Perfect (has/have) always requires the Past Participle (V3) form of the verb. 'Already' signals that the result is ready now.",
        "✗ I will be finish by five. → ✓ I will have finished by five. | When you have a 'by' deadline, you need the Future Perfect to show completion, not the Future Continuous (which would mean you are still working at five)."
      ],
      type: 'list'
    },
    {
      title: "8.2 TENSE CONVERSION",
      content: "Transforming thoughts through time requires changing BOTH the helping verb and the main verb form. Use this table as a logic map.",
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
      title: "PRO-TIP: THE CONVERSION LOGIC",
      content: "When moving from Simple to Continuous, add a 'Be' verb and '-ing'. When moving to Perfect, add 'Have' and change to V3. It's like Lego blocks for language!",
      type: 'note'
    },
    {
      title: "8.3 REAL-LIFE SCENARIOS",
      content: "See how tenses blend in natural conversation. Master these to sound like a native speaker.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "JOB INTERVIEW", 
            icon: "💼", 
            description: "Using Past, Present Perfect, and Future to describe a career.", 
            details: [
              "'I graduated in 2020.' (Finished Fact)", 
              "'I have been working for 3 years.' (Ongoing Experience)", 
              "'I will contribute to your team.' (Future Promise)",
              "Nuance: Use Present Perfect to link your past skills to their current needs!"
            ] 
          },
          { 
            label: "DAILY ROUTINE", 
            icon: "🥛", 
            description: "Using Simple Present for habits and Continuous for specific tasks.", 
            details: [
              "'I usually wake up at 6 AM.' (Habit)", 
              "'I am currently reading a history book.' (Temporary Action)", 
              "'I go to the gym daily.' (Routine)",
              "Pro-Tip: Use Simple Present for 'What' you do, and Continuous for 'How' it's going lately."
            ] 
          },
          {
            label: "HOLIDAY PLANNING",
            icon: "✈️",
            description: "Mixing intentions with scheduled events and expectations.",
            details: [
              "'We are going to visit Italy.' (Pre-decided Plan)", 
              "'The flight leaves at 10 AM.' (Fixed Schedule)", 
              "'I'll bring my camera.' (Spontaneous decision)",
              "Nuance: Use 'Going to' for the big idea, and Simple Present for the flight details!"
            ]
          },
          {
            label: "GHOST STORY",
            icon: "👻",
            description: "Setting a mood with background actions and sudden events.",
            details: [
              "'The wind was howling.' (Atmosphere)", 
              "'Suddenly, a door slammed.' (Plot point)", 
              "'I had never felt so scared.' (Past experience)",
              "Pro-Tip: Continuous creates the 'movie scene', Simple Past moves the 'story forward'."
            ]
          },
          {
            label: "RECIPE VIDEO",
            icon: "👨‍🍳",
            description: "Giving instructions and describing ongoing processes.",
            details: [
              "'First, you chop the onions.' (General Instruction)", 
              "'Now, I'm adding the spices.' (Live Action)", 
              "'It has been simmering for 10 mins.' (Status report)",
              "Nuance: Instructions are always Simple Present (Imperative)."
            ]
          },
          {
            label: "ACCIDENT REPORT",
            icon: "🚔",
            description: "Sequencing actions before and during a specific event.",
            details: [
              "'I was waiting at the light.' (Ongoing state)", 
              "'The car had already stopped.' (Pre-existing condition)", 
              "'Then, the biker hit the brake.' (Sudden event)",
              "Nuance: Past Perfect is vital here to show who was there first!"
            ]
          },
          {
            label: "INTERVIEW FOLLOW-UP",
            icon: "✉️",
            description: "Professional follow-up combining past gratitude with future hope.",
            details: [
              "'Thank you for the time you gave me.' (Past event)", 
              "'I have been thinking about our talk.' (Ongoing since the meeting)", 
              "'I look forward to hearing back.' (Present state)",
              "Pro-Tip: 'I have been thinking' sounds more thoughtful than 'I am thinking'."
            ]
          },
          {
            label: "SOCIAL MEDIA POST",
            icon: "🤳",
            description: "Casual status updates using recent and current events.",
            details: [
              "'Just finished a long hike!' (Recent completion)", 
              "'Currently chilling at a cafe.' (Now)", 
              "'Will post the vlog tonight!' (Future intent)",
              "Nuance: In casual text, we often drop the subject 'I'!"
            ]
          },
          {
            label: "SPORTS COMMENTARY",
            icon: "⚽",
            description: "Fast-paced play-by-play using the Dramatic Present.",
            details: [
              "'He passes to the striker.' (Action)", 
              "'He's looking for an opening.' (State)", 
              "'He has scored a wonder goal!' (Instant result)",
              "Pro-Tip: Use Simple Present to keep up with high-speed action."
            ]
          },
          {
            label: "WEATHER FORECAST",
            icon: "🌦️",
            description: "Comparing current patterns with future predictions.",
            details: [
              "'It's raining heavily right now.' (Current)", 
              "'The clouds will clear by evening.' (Prediction)", 
              "'It has been a wet week so far.' (Summary of recent days)",
              "Nuance: 'By' + Future Perfect is great for forecast deadlines."
            ]
          }
        ]
      }
    },
    {
      title: "DR. MOO'S FINAL MASTERY ADVICE",
      content: "Mistakes are okay—they're part of learning! The key is to understand WHY a tense is used, not just to memorize the formula. If sequence doesn't matter and there is only one action, Simple Past is usually your safest bet for the past. Remember: Language is about communication, not perfection, but tenses are the tracks that keep the communication train running smoothly!",
      type: 'note'
    }
  ]
};
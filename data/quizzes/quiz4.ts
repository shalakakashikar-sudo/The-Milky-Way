import { ModuleQuiz } from '../../types';

export const quiz4: ModuleQuiz = {
  moduleId: 4,
  questions: [
    // --- 4.1 Simple Past (1-25) ---
    {
      question: "What is the affirmative structure for Simple Past?",
      options: ["S + V1 + O", "S + V2 + O", "S + V3 + O", "S + did + V1 + O"],
      correctAnswer: 1,
      explanation: "Affirmative Simple Past uses the V2 form of the verb."
    },
    {
      question: "Which component is missing here: 'S + did + not + ___ + O'?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 0,
      explanation: "After 'did', the verb returns to its base form (V1)."
    },
    {
      question: "What does Dr. Moo call the 'Did' Magnet?",
      options: ["A way to attract cows", "The power of 'did' to pull the past charge away from the verb", "A special type of verb", "The rule for irregular verbs"],
      correctAnswer: 1,
      explanation: "'Did' pulls the past-tense charge away, changing V2 back to V1."
    },
    {
      question: "Correct this: 'I didn't went to the park.'",
      options: ["I didn't go to the park.", "I didn't gone to the park.", "I not went to the park.", "I did went to the park."],
      correctAnswer: 0,
      explanation: "V1 (go) must be used after 'didn't'."
    },
    {
      question: "Correct this: 'Did you ate dinner?'",
      options: ["Did you eat dinner?", "Did you eaten dinner?", "You did ate dinner?", "Eated you dinner?"],
      correctAnswer: 0,
      explanation: "'Did' requires the base form 'eat'."
    },
    {
      question: "Which time marker is a classic signal for Simple Past?",
      options: ["Next week", "Yesterday", "Since Monday", "Now"],
      correctAnswer: 1,
      explanation: "'Yesterday' marks a specific completed point in the past."
    },
    {
      question: "What is the V2 form of 'Go'?",
      options: ["Goes", "Gone", "Went", "Going"],
      correctAnswer: 2,
      explanation: "Go-Went-Gone."
    },
    {
      question: "What is the V2 form of 'Eat'?",
      options: ["Eats", "Ate", "Eaten", "Eating"],
      correctAnswer: 1,
      explanation: "Eat-Ate-Eaten."
    },
    {
      question: "For regular verbs, how is V2 usually formed?",
      options: ["Adding -ing", "Adding -s", "Adding -ed", "Changing the vowel"],
      correctAnswer: 2,
      explanation: "Regular verbs like 'play' become 'played'."
    },
    {
      question: "When is Simple Past used as the 'Workhorse' of English?",
      options: ["For future plans", "For storytelling and completed actions", "For universal facts", "For current progress"],
      correctAnswer: 1,
      explanation: "It's the primary tense for narrating finished events."
    },
    {
      question: "'I played the flute when I was a child' is an example of:",
      options: ["A sudden event", "A past habit", "An ongoing action", "A future dream"],
      correctAnswer: 1,
      explanation: "Repeating actions in the past are past habits."
    },
    {
      question: "Which word is often interchangeable with Simple Past for past habits?",
      options: ["Will", "Used to", "Have been", "Going to"],
      correctAnswer: 1,
      explanation: "I played flute = I used to play flute."
    },
    {
      question: "Identify the Interrogative structure for Simple Past.",
      options: ["Do + S + V1?", "Did + S + V2?", "Did + S + V1?", "Was + S + V4?"],
      correctAnswer: 2,
      explanation: "Did + Subject + V1."
    },
    {
      question: "In the sentence 'The phone rang', 'rang' is which verb form?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 1,
      explanation: "Ring (V1) - Rang (V2) - Rung (V3)."
    },
    {
      question: "Does Simple Past imply the action is finished?",
      options: ["Yes, completely", "No, it might continue", "Only if it was a habit", "Only for irregular verbs"],
      correctAnswer: 0,
      explanation: "Simple Past actions are started and ended in the past."
    },
    {
      question: "Which facet is: 'The light went out'?",
      options: ["Past Habit", "Sudden Event", "Ongoing Background", "Duration"],
      correctAnswer: 1,
      explanation: "Sudden, short actions interrupt longer ones."
    },
    {
      question: "'She lived in Mexico for 5 years' implies:",
      options: ["She still lives there", "She doesn't live there now", "She will move back", "She hates Mexico"],
      correctAnswer: 1,
      explanation: "Simple Past indicates the state is over."
    },
    {
      question: "Which marker indicates Simple Past?",
      options: ["In 1999", "Currently", "Soon", "Since 1999"],
      correctAnswer: 0,
      explanation: "A specific year in the past signals Simple Past."
    },
    {
      question: "Correct the sentence: 'We not played yesterday.'",
      options: ["We didn't play yesterday.", "We didn't played yesterday.", "We were not played yesterday.", "We no played yesterday."],
      correctAnswer: 0,
      explanation: "Negative Simple Past needs 'didn't' + V1."
    },
    {
      question: "What is V2 of 'Write'?",
      options: ["Writes", "Wrote", "Written", "Writing"],
      correctAnswer: 1,
      explanation: "Write-Wrote-Written."
    },
    {
      question: "Is 'I did see him' correct for emphasis?",
      options: ["Yes", "No", "Only for cows", "Only in the future"],
      correctAnswer: 0,
      explanation: "You can use 'did' in affirmative for emphasis, followed by V1."
    },
    {
      question: "Spelling: V2 of 'Study'?",
      options: ["Studied", "Studyed", "Studiied", "Studying"],
      correctAnswer: 0,
      explanation: "Consonant + Y changes to -ied."
    },
    {
      question: "Spelling: V2 of 'Stop'?",
      options: ["Stoped", "Stopped", "Stoping", "Stops"],
      correctAnswer: 1,
      explanation: "C-V-C pattern doubles the final consonant."
    },
    {
      question: "If an action is 'interrupted' by a short action, the short action uses:",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 0,
      explanation: "Simple Past is the 'snap' that breaks the flow."
    },
    {
      question: "Which connector often introduces the 'snap' interruption?",
      options: ["While", "When", "Since", "For"],
      correctAnswer: 1,
      explanation: "'When' usually precedes the short Simple Past action."
    },

    // --- 4.2 Past Continuous (26-50) ---
    {
      question: "What is the affirmative structure for Past Continuous?",
      options: ["S + V4 + O", "S + was/were + V4 + O", "S + has been + V4 + O", "S + had + V4 + O"],
      correctAnswer: 1,
      explanation: "Was/Were + V4 (-ing)."
    },
    {
      question: "Which 'Be' helper matches 'I' in the past?",
      options: ["Am", "Was", "Were", "Been"],
      correctAnswer: 1,
      explanation: "I was."
    },
    {
      question: "Which 'Be' helper matches 'They' in the past?",
      options: ["Am", "Was", "Were", "Been"],
      correctAnswer: 2,
      explanation: "They were."
    },
    {
      question: "In Type 2 Conditionals (unreal dreams), 'I was' changes to:",
      options: ["I am", "I were", "I been", "I will be"],
      correctAnswer: 1,
      explanation: "The 'Subjunctive Mood' uses 'If I were...'"
    },
    {
      question: "Identify the usage: 'The sun was shining and birds were singing.'",
      options: ["Interruption", "Simultaneous", "Background scene", "Sudden event"],
      correctAnswer: 2,
      explanation: "Creating a mental photograph/atmosphere."
    },
    {
      question: "Identify the usage: 'While I was reading, my brother was watching TV.'",
      options: ["Interruption", "Simultaneous parallel actions", "Background scene", "Finished fact"],
      correctAnswer: 1,
      explanation: "Two long actions happening at once."
    },
    {
      question: "Which connector is best for simultaneous long actions?",
      options: ["When", "While", "Since", "By"],
      correctAnswer: 1,
      explanation: "'While' is the process connector."
    },
    {
      question: "Identify the usage: 'I was reading when the phone rang.'",
      options: ["Interruption of a long action", "Background scene", "Past habit", "Sudden decision"],
      correctAnswer: 0,
      explanation: "The long action (reading) is broken by the short action (rang)."
    },
    {
      question: "Correct the sentence: 'They was playing football.'",
      options: ["They were playing football.", "They are playing football.", "They playing football.", "They was play football."],
      correctAnswer: 0,
      explanation: "'They' is plural and needs 'were'."
    },
    {
      question: "Was/Were matches 'You'?",
      options: ["Was", "Were", "Both", "Neither"],
      correctAnswer: 1,
      explanation: "You were (You always follows plural rules)."
    },
    {
      question: "Negative structure: 'S + was/were + ___ + V4 + O'",
      options: ["no", "not", "did", "do"],
      correctAnswer: 1,
      explanation: "I was not eating."
    },
    {
      question: "Interrogative: '___ + S + V4 + O?'",
      options: ["Did", "Was/Were", "Has/Have", "Am/Is/Are"],
      correctAnswer: 1,
      explanation: "Was he sleeping? Were they playing?"
    },
    {
      question: "Is 'I was knowing the answer' correct?",
      options: ["Yes", "No", "Only if Dr. Moo says", "Always"],
      correctAnswer: 1,
      explanation: "'Know' is a stative verb and shouldn't use -ing."
    },
    {
      question: "What does Past Continuous focus on?",
      options: ["Fact", "Result", "Atmosphere/Process", "Completion"],
      correctAnswer: 2,
      explanation: "It shows that an action was 'in the middle' of happening."
    },
    {
      question: "'It was raining when Reena left.' Which action started first?",
      options: ["Reena left", "It was raining", "Both at once", "Neither"],
      correctAnswer: 1,
      explanation: "The continuous action was already happening background."
    },
    {
      question: "Correct the negative interrogative: 'Wasn't he ___?'",
      options: ["study", "studies", "studied", "studying"],
      correctAnswer: 3,
      explanation: "Continuous needs V4."
    },
    {
      question: "Which time marker fits: 'At 10 PM last night, I ___.'",
      options: ["ate", "was eating", "have eaten", "eat"],
      correctAnswer: 1,
      explanation: "A specific moment in the past usually captures an ongoing process."
    },
    {
      question: "If I say 'I were a cow', I am:",
      options: ["Talking about my childhood", "Imagining/Dreaming", "Correcting my grammar", "Predicting the future"],
      correctAnswer: 1,
      explanation: "This is a Type 2 Conditional (Unreal)."
    },
    {
      question: "V4 of 'Lie' is:",
      options: ["Lieing", "Lying", "Lay", "Lied"],
      correctAnswer: 1,
      explanation: "Lying."
    },
    {
      question: "Can 'Always' be used with Past Continuous?",
      options: ["No", "Yes, to show an annoying past habit", "Only for facts", "Only in stories"],
      correctAnswer: 1,
      explanation: "e.g., 'He was always complaining!'"
    },
    {
      question: "Identify the structure: 'Were you waiting long?'",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 1,
      explanation: "Were + S + V4."
    },
    {
      question: "What is the 'Memory Hook' for WHEN?",
      options: ["Process", "Atmosphere", "Sudden Interruption (Short)", "Result"],
      correctAnswer: 2,
      explanation: "When = Short snap."
    },
    {
      question: "What is the 'Memory Hook' for WHILE?",
      options: ["Process (Long)", "Interruption", "Deadline", "Fact"],
      correctAnswer: 0,
      explanation: "While = During the process."
    },
    {
      question: "True or False: Stative verbs like 'believe' can be used in Past Continuous.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation: "Stative verbs (feelings/thoughts) generally avoid -ing."
    },
    {
      question: "Which tense creates a 'mental photograph'?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 1,
      explanation: "It sets the background scene."
    },

    // --- 4.3 Past Perfect (51-75) ---
    {
      question: "What is the nickname for Past Perfect?",
      options: ["The Future Past", "The Past of the Past", "The Recent Past", "The Habitual Past"],
      correctAnswer: 1,
      explanation: "It describes an event even further back than another past event."
    },
    {
      question: "Affirmative structure: 'S + ___ + V3 + O'",
      options: ["have", "has", "had", "was"],
      correctAnswer: 2,
      explanation: "Had + V3 (Past Participle)."
    },
    {
      question: "If two actions happened in the past, which one takes 'Had + V3'?",
      options: ["The one that finished 1st", "The one that finished 2nd", "Both", "The shorter one"],
      correctAnswer: 0,
      explanation: "The earliest action is Past Perfect."
    },
    {
      question: "'The train had left when I reached the station.' Which happened first?",
      options: ["The train left", "I reached the station", "Simultaneous", "Unknown"],
      correctAnswer: 0,
      explanation: "The train had already left before arrival."
    },
    {
      question: "Identify the structure: 'Had you eaten before the movie?'",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Present Perfect"],
      correctAnswer: 2,
      explanation: "Had + S + V3."
    },
    {
      question: "Which marker is a huge signal for Past Perfect?",
      options: ["Now", "Soon", "By the time", "Always"],
      correctAnswer: 2,
      explanation: "'By the time' sets up a sequence."
    },
    {
      question: "Is 'I had went' correct?",
      options: ["Yes", "No, it should be 'I had gone'", "No, it should be 'I gone'", "Only in casual speech"],
      correctAnswer: 1,
      explanation: "Past Perfect needs V3 (Gone), not V2 (Went)."
    },
    {
      question: "Correct this: 'When I arrived, the movie started.' (It was already playing)",
      options: ["When I arrived, the movie had started.", "When I arrived, the movie was start.", "When I arrived, the movie has started.", "No correction needed."],
      correctAnswer: 0,
      explanation: "If it was already playing, it started 1st."
    },
    {
      question: "What is the logic for sequencing?",
      options: ["Action 1 (Past Perfect) -> Action 2 (Simple Past)", "Action 1 (Simple Past) -> Action 2 (Past Perfect)", "Action 1 (Continuous) -> Action 2 (Perfect)", "Everything is Simple Past"],
      correctAnswer: 0,
      explanation: "Past Perfect precedes Simple Past on the timeline."
    },
    {
      question: "Negative structure: 'S + had + ___ + V3 + O'",
      options: ["not", "no", "never", "did"],
      correctAnswer: 0,
      explanation: "I had not finished."
    },
    {
      question: "V3 of 'Buy'?",
      options: ["Buy", "Bought", "Buying", "Buys"],
      correctAnswer: 1,
      explanation: "Buy-Bought-Bought."
    },
    {
      question: "V3 of 'Go'?",
      options: ["Go", "Went", "Gone", "Going"],
      correctAnswer: 2,
      explanation: "Go-Went-Gone."
    },
    {
      question: "Identify the tense: 'I had already finished my work before the power cut.'",
      options: ["Simple Past", "Past Perfect", "Past Continuous", "Present Perfect"],
      correctAnswer: 1,
      explanation: "Had + V3."
    },
    {
      question: "Which connector often triggers Past Perfect?",
      options: ["Before", "After", "By then", "All of the above"],
      correctAnswer: 3,
      explanation: "These markers clarify time sequences."
    },
    {
      question: "Does Past Perfect always need a second past action mentioned?",
      options: ["Yes, to show sequence", "No, never", "Only for irregular verbs", "Only if it was a habit"],
      correctAnswer: 0,
      explanation: "Its purpose is to establish order between events."
    },
    {
      question: "V3 of 'Write'?",
      options: ["Wrote", "Written", "Writing", "Writes"],
      correctAnswer: 1,
      explanation: "Write-Wrote-Written."
    },
    {
      question: "Is 'I had ate' correct?",
      options: ["Yes", "No, use 'I had eaten'", "No, use 'I ate'", "Only for breakfast"],
      correctAnswer: 1,
      explanation: "V3 is 'Eaten'."
    },
    {
      question: "Which of these is Past Perfect?",
      options: ["I saw", "I was seeing", "I had seen", "I have seen"],
      correctAnswer: 2,
      explanation: "Had + V3."
    },
    {
      question: "True or False: Past Perfect is used for very recent actions.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation: "False, it's for actions finished *before* other past actions."
    },
    {
      question: "Can Past Perfect be used for regrets?",
      options: ["Yes (If I had known...)", "No", "Only for dreams", "Only for cows"],
      correctAnswer: 0,
      explanation: "It's used in Type 3 Conditionals to show past regret."
    },
    {
      question: "If I use 'Before' clearly, is Simple Past also acceptable in casual talk?",
      options: ["Yes", "No", "Only in writing", "Never"],
      correctAnswer: 0,
      explanation: "In casual speech, 'I ate before he came' is common."
    },
    {
      question: "'I had finished' - 'had' is which type of verb?",
      options: ["Main Verb", "Helping Verb", "Stative Verb", "Modal"],
      correctAnswer: 1,
      explanation: "'Had' acts as the auxiliary."
    },
    {
      question: "Which aspect focus is 'Order'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Past Perfect is all about the order of events."
    },
    {
      question: "Correct the interrogative: 'Had he ___ the letter?'",
      options: ["write", "wrote", "written", "writing"],
      correctAnswer: 2,
      explanation: "Needs V3."
    },
    {
      question: "V3 of 'Run'?",
      options: ["Run", "Ran", "Running", "Runned"],
      correctAnswer: 0,
      explanation: "Run-Ran-Run."
    },

    // --- 4.4 Past Perfect Continuous (76-90) ---
    {
      question: "What is the affirmative structure for Past Perfect Continuous?",
      options: ["S + had + V4", "S + had + been + V4", "S + have been + V4", "S + was + been + V4"],
      correctAnswer: 1,
      explanation: "Had + been + V4 (ing)."
    },
    {
      question: "What is the primary focus of this tense?",
      options: ["Result", "Sequence", "Duration/Causality in the past", "Spontaneous decision"],
      correctAnswer: 2,
      explanation: "It shows an ongoing action continuing up to a past point."
    },
    {
      question: "'The grass was wet because it had been raining.' This shows:",
      options: ["Interruption", "Causality", "Parallel actions", "Future plan"],
      correctAnswer: 1,
      explanation: "Explaining a past result through an ongoing action."
    },
    {
      question: "'She had been waiting for 2 hours when the doctor arrived.' This shows:",
      options: ["Duration before an event", "Universal fact", "Spontaneous decision", "Recent experience"],
      correctAnswer: 0,
      explanation: "Emphasizing the length of effort before a point."
    },
    {
      question: "Negative: 'S + had + ___ + been + V4'",
      options: ["not", "no", "never", "did"],
      correctAnswer: 0,
      explanation: "I had not been waiting."
    },
    {
      question: "Interrogative: '___ + S + been + V4 + O?'",
      options: ["Has", "Have", "Had", "Was"],
      correctAnswer: 2,
      explanation: "Had you been studying?"
    },
    {
      question: "Does this tense connect to the Present (Now)?",
      options: ["Yes", "No, it's moved entirely into the past", "Only if it's raining", "Always"],
      correctAnswer: 1,
      explanation: "Unlike Present Perfect Continuous, this is finished relative to now."
    },
    {
      question: "Which marker is common: 'She had been driving ___ all day.'",
      options: ["since", "for", "during", "at"],
      correctAnswer: 1,
      explanation: "Duration of time."
    },
    {
      question: "Correct the sentence: 'I have been waiting for hours when he finally came.'",
      options: ["I had been waiting for hours when he finally came.", "I was waiting for hours when he finally came.", "I am waiting for hours when he finally came.", "I had wait for hours when he finally came."],
      correctAnswer: 0,
      explanation: "If the second action is past (came), the duration before it must be Past Perfect Continuous."
    },
    {
      question: "Is 'I had been knowing' correct?",
      options: ["Yes", "No, stative verbs don't use -ing", "Only for 5 years", "Always"],
      correctAnswer: 1,
      explanation: "Stative verbs (know, believe) avoid continuous forms."
    },
    {
      question: "Identify the tense: 'They had been playing since morning.'",
      options: ["Present Perfect Continuous", "Past Perfect Continuous", "Future Perfect Continuous", "Past Continuous"],
      correctAnswer: 1,
      explanation: "Had + been + V4."
    },
    {
      question: "What is the 'Been' bridge in this tense?",
      options: ["A bridge in London", "The link between had and V4", "The subject", "The object"],
      correctAnswer: 1,
      explanation: "Dr. Moo calls 'been' the bridge that holds the perfect continuous together."
    },
    {
      question: "Which aspect focus is 'Duration' in the past?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "Perfect Continuous tracks length and effort."
    },
    {
      question: "If I feel tired in the past because of a long task, I use:",
      options: ["Simple Past", "Past Perfect Continuous", "Past Continuous", "Present Perfect"],
      correctAnswer: 1,
      explanation: "e.g., 'I felt tired because I had been working all day.'"
    },
    {
      question: "Correct the structure: 'Had they been ___?'",
      options: ["work", "worked", "working", "works"],
      correctAnswer: 2,
      explanation: "Needs V4."
    },

    // --- 4.5 Comparison & Moo-stakes (91-100) ---
    {
      question: "One action in the past? -> Use:",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 0,
      explanation: "Simple Past is for single finished facts."
    },
    {
      question: "Interrupted action? -> Use:",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 1,
      explanation: "Past Continuous shows the ongoing background."
    },
    {
      question: "Two actions with clear order? -> Use:",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 2,
      explanation: "Past Perfect shows which came 1st."
    },
    {
      question: "Which is a 'Moo-stake'?",
      options: ["I didn't went", "I didn't go", "I was going", "I had gone"],
      correctAnswer: 0,
      explanation: "Double past is wrong! After 'didn't', use V1."
    },
    {
      question: "Which is a 'Moo-stake'?",
      options: ["They were playing", "They was playing", "We were playing", "You were playing"],
      correctAnswer: 1,
      explanation: "'They' is plural; use 'were'."
    },
    {
      question: "Which is a 'Moo-stake'?",
      options: ["I had seen", "I had saw", "I have seen", "I saw"],
      correctAnswer: 1,
      explanation: "Past Perfect needs V3 (Seen), not V2 (Saw)."
    },
    {
      question: "Connector Logic: 'While' + ___?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 1,
      explanation: "While = Process (Continuous)."
    },
    {
      question: "Storytelling Tip: Use ___ to describe the scene.",
      options: ["Simple Past", "Past Continuous", "Future", "Present"],
      correctAnswer: 1,
      explanation: "Continuous creates the atmosphere."
    },
    {
      question: "Storytelling Tip: Use ___ to move the plot forward.",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 0,
      explanation: "Simple Past describes the sequence of events."
    },
    {
      question: "If I say 'I had eaten before I left', which action is 1st?",
      options: ["Eaten", "Left", "Simultaneous", "Unknown"],
      correctAnswer: 0,
      explanation: "Past Perfect (had eaten) is Action 1."
    }
  ]
};
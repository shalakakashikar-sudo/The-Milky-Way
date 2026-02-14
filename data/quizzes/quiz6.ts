import { ModuleQuiz } from '../../types';

export const quiz6: ModuleQuiz = {
  moduleId: 6,
  questions: [
    // --- 6.1 Since vs For (1-15) ---
    {
      question: "When should you use 'Since'?",
      options: ["For a duration of time", "For a specific starting point in time", "For a general guess", "For the future only"],
      correctAnswer: 1,
      explanation: "Since 1999, Since Monday—it's for the starting point!"
    },
    {
      question: "When should you use 'For'?",
      options: ["For a starting point", "For a duration or length of time", "Only for the past", "Only for the future"],
      correctAnswer: 1,
      explanation: "'For' measures the duration, like 'for 2 hours'."
    },
    {
      question: "Which is correct: 'I have been waiting ___ 2 hours'?",
      options: ["since", "for", "from", "at"],
      correctAnswer: 1,
      explanation: "2 hours is a duration."
    },
    {
      question: "Which is correct: 'I have been waiting ___ 10 AM'?",
      options: ["since", "for", "from", "at"],
      correctAnswer: 0,
      explanation: "10 AM is a starting point."
    },
    {
      question: "Which is correct: 'She has lived here ___ 2015'?",
      options: ["since", "for", "until", "by"],
      correctAnswer: 0,
      explanation: "2015 is a specific year (starting point)."
    },
    {
      question: "Which is correct: 'She has lived here ___ ten years'?",
      options: ["since", "for", "from", "in"],
      correctAnswer: 1,
      explanation: "Ten years is the length of time."
    },
    {
      question: "Identify the correct use of the 'All' exception.",
      options: ["I have been working for all day.", "I have been working since all day.", "I have been working all day.", "I have been working at all day."],
      correctAnswer: 2,
      explanation: "When using 'all', you don't need 'for' or 'since'."
    },
    {
      question: "Can 'For' be used with Simple Past?",
      options: ["Yes", "No", "Only with 'Since'", "Only in stories"],
      correctAnswer: 0,
      explanation: "Yes! 'I lived in Paris for two years' means I don't live there now."
    },
    {
      question: "Which question does 'Since' usually answer?",
      options: ["How long?", "From when?", "To where?", "Why?"],
      correctAnswer: 1,
      explanation: "Since answers 'From when?' (the starting point)."
    },
    {
      question: "Which question does 'For' usually answer?",
      options: ["How long?", "From when?", "What time?", "Who?"],
      correctAnswer: 0,
      explanation: "For answers 'How long?' (the duration)."
    },
    {
      question: "Is 'since 2 hours' grammatically correct?",
      options: ["Yes", "No, it should be 'for 2 hours'", "Only in casual talk", "Always"],
      correctAnswer: 1,
      explanation: "2 hours is duration, so 'for' is required."
    },
    {
      question: "Is 'for Monday' correct when used as a starting point?",
      options: ["Yes", "No, it should be 'since Monday'", "Only for plans", "Always"],
      correctAnswer: 1,
      explanation: "Monday is a starting point, so 'since' is required."
    },
    {
      question: "Which fits: 'I haven't eaten ___ breakfast'?",
      options: ["for", "since", "all", "during"],
      correctAnswer: 1,
      explanation: "Breakfast is the specific point in time when the action started."
    },
    {
      question: "Which fits: 'He's been sick ___ ages'?",
      options: ["for", "since", "from", "at"],
      correctAnswer: 0,
      explanation: "'Ages' is an informal duration."
    },
    {
      question: "Dr. Moo's Nuance: 'Since' is almost exclusively used with ___ tenses.",
      options: ["Simple", "Continuous", "Perfect", "Future"],
      correctAnswer: 2,
      explanation: "'Since' usually links a past point to a present result in Perfect tenses."
    },

    // --- 6.2 Time Markers (16-30) ---
    {
      question: "Which of these is a classic marker for Simple Present?",
      options: ["Yesterday", "Daily", "Already", "Tomorrow"],
      correctAnswer: 1,
      explanation: "Habits and routines (Daily) use Simple Present."
    },
    {
      question: "Which marker is a 'Progressive' signal for the Present Continuous?",
      options: ["Usually", "Often", "Right now", "Just"],
      correctAnswer: 2,
      explanation: "'Right now' shows the action is in motion."
    },
    {
      question: "Which of these is a marker for Simple Past?",
      options: ["Ago", "Next week", "Now", "Yet"],
      correctAnswer: 0,
      explanation: "'Ago' looks back at a finished past point."
    },
    {
      question: "Which marker is common for Future Perfect?",
      options: ["Since", "Ago", "By the time", "While"],
      correctAnswer: 2,
      explanation: "Future Perfect is the 'deadline' tense, often using 'by'."
    },
    {
      question: "'Look!' and 'Listen!' are markers for which tense?",
      options: ["Simple Present", "Present Continuous", "Simple Past", "Future"],
      correctAnswer: 1,
      explanation: "They draw attention to an action happening right now."
    },
    {
      question: "Identify the marker for Present Perfect:",
      options: ["Last week", "Tomorrow", "Already", "Daily"],
      correctAnswer: 2,
      explanation: "'Already', 'Yet', and 'Just' are common for Perfect results."
    },
    {
      question: "Which connector is best for simultaneous long actions in the past?",
      options: ["When", "While", "By", "Until"],
      correctAnswer: 1,
      explanation: "'While' shows two processes happening at once."
    },
    {
      question: "Which connector is best for a sudden interruption in the past?",
      options: ["When", "While", "Already", "By"],
      correctAnswer: 0,
      explanation: "'When' usually precedes the short 'snap' action."
    },
    {
      question: "'At this time tomorrow' is a marker for:",
      options: ["Simple Future", "Future Continuous", "Future Perfect", "Present Continuous"],
      correctAnswer: 1,
      explanation: "It describes a snapshot of an action in the future."
    },
    {
      question: "'Before' and 'After' can often signal which past tense?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future Past"],
      correctAnswer: 2,
      explanation: "They clarify sequences, which is the job of Past Perfect."
    },
    {
      question: "'Every day' is a frequency marker for:",
      options: ["Simple Present", "Present Continuous", "Present Perfect", "Simple Past"],
      correctAnswer: 0,
      explanation: "Repeated habits use Simple Present."
    },
    {
      question: "'Soon' and 'Later' are markers for:",
      options: ["Past", "Present", "Future", "None"],
      correctAnswer: 2,
      explanation: "They point toward upcoming events."
    },
    {
      question: "'In 1990' is a specific time marker for:",
      options: ["Simple Present", "Simple Past", "Present Perfect", "Past Perfect"],
      correctAnswer: 1,
      explanation: "Specific finished years require Simple Past."
    },
    {
      question: "'Just' is usually used for events that happened ___.",
      options: ["A long time ago", "Very recently", "In the future", "Daily"],
      correctAnswer: 1,
      explanation: "It's the 'very recent' bridge to the present."
    },
    {
      question: "'All morning' with an ongoing feel often uses:",
      options: ["Simple Past", "Past Perfect Continuous", "Simple Future", "Present Simple"],
      correctAnswer: 1,
      explanation: "It shows the duration of work in the past."
    },

    // --- 6.3 Sequence of Tenses (31-40) ---
    {
      question: "What is the general rule for Sequence of Tenses?",
      options: ["Verbs never change", "If the reporting verb is Past, the next verb usually moves back", "If the reporting verb is Present, the next verb moves back", "Always use Future"],
      correctAnswer: 1,
      explanation: "The 'Backshift' rule maintains logical order."
    },
    {
      question: "If I say 'She says she is busy', and then report it in the past, it becomes:",
      options: ["She said she is busy", "She said she was busy", "She said she will be busy", "She says she was busy"],
      correctAnswer: 1,
      explanation: "Is (Present) shifts to Was (Past)."
    },
    {
      question: "Identify the exception to the Backshift rule.",
      options: ["Daily habits", "Universal Truths", "Personal secrets", "Long stories"],
      correctAnswer: 1,
      explanation: "Universal truths (e.g., water boils) don't change because they are still true!"
    },
    {
      question: "In 'He said that water boils at 100°C', why didn't 'boils' change to 'boiled'?",
      options: ["It's a mistake", "It's a universal truth", "The speaker forgot", "It's in the future"],
      correctAnswer: 1,
      explanation: "Scientific facts stay in the present even when reported."
    },
    {
      question: "The 'Backshift' moves verbs from the Present into the:",
      options: ["Future", "Present Perfect", "Past", "Future Past"],
      correctAnswer: 2,
      explanation: "Present moves to Past."
    },
    {
      question: "If the reporting verb is 'will say' (Future), do we backshift?",
      options: ["Yes", "No", "Only if it rains", "Always"],
      correctAnswer: 1,
      explanation: "No backshift for Present or Future reporting verbs."
    },
    {
      question: "Sequence of Tenses maintains the ___ of a conversation.",
      options: ["Volume", "Logical Timeline", "Subject", "Object"],
      correctAnswer: 1,
      explanation: "It ensures the order of events makes sense in the past context."
    },
    {
      question: "Correct the reported logic: 'He told me he ___ tired.'",
      options: ["is", "was", "will", "be"],
      correctAnswer: 1,
      explanation: "Reported speech after 'told' (Past) needs 'was'."
    },
    {
      question: "Backshift of Present Perfect results in:",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future Perfect"],
      correctAnswer: 2,
      explanation: "Have/Has seen -> Had seen."
    },
    {
      question: "Backshift of Will results in:",
      options: ["Can", "Shall", "Would", "Will be"],
      correctAnswer: 2,
      explanation: "Will -> Would."
    },

    // --- 6.4 Reported Speech (41-60) ---
    {
      question: "Which of these words changes from 'now' to '___' in Reported Speech?",
      options: ["today", "then", "later", "before"],
      correctAnswer: 1,
      explanation: "Now becomes then/at that time."
    },
    {
      question: "In Reported Speech, 'tomorrow' often becomes:",
      options: ["yesterday", "the next day", "now", "then"],
      correctAnswer: 1,
      explanation: "We must update the proximity of time."
    },
    {
      question: "When should you use 'Tell' instead of 'Say'?",
      options: ["When there is no listener mentioned", "When you mention the listener (personal object)", "Always", "Never"],
      correctAnswer: 1,
      explanation: "He TOLD ME (listener mentioned). He SAID (no listener)."
    },
    {
      question: "Correct the Reported Question: 'He asked where ___.'",
      options: ["was I", "I was", "am I", "I am"],
      correctAnswer: 1,
      explanation: "Reported questions use statement word order (Subject + Verb)."
    },
    {
      question: "What bridge word is used for Yes/No questions in Reported Speech?",
      options: ["That", "What", "If/Whether", "When"],
      correctAnswer: 2,
      explanation: "e.g., 'He asked IF I was coming.'"
    },
    {
      question: "'This' and 'Here' change to '___' and '___' in Reported Speech.",
      options: ["That / There", "These / Those", "Now / Then", "Is / Was"],
      correctAnswer: 0,
      explanation: "Place and pointer words shift away from the speaker."
    },
    {
      question: "Report this: 'I am eating,' said Ram.",
      options: ["Ram said he is eating.", "Ram said he was eating.", "Ram told he was eating.", "Ram said I am eating."],
      correctAnswer: 1,
      explanation: "Backshift Present Continuous to Past Continuous."
    },
    {
      question: "Report this: 'I saw him,' she said.",
      options: ["She said she saw him.", "She said she had seen him.", "She told me she sees him.", "She said she will see him."],
      correctAnswer: 1,
      explanation: "Simple Past shifts to Past Perfect."
    },
    {
      question: "What does 'Must' usually change to in Reported Speech?",
      options: ["Should", "Had to", "Might", "Will"],
      correctAnswer: 1,
      explanation: "Must (Obligation) becomes Had to."
    },
    {
      question: "Is 'He said me he was tired' correct?",
      options: ["Yes", "No, use 'He told me'", "No, use 'He said that'", "Both B and C are correct"],
      correctAnswer: 3,
      explanation: "You can't use 'Say' directly with a person. Use 'Tell' or 'Say to'."
    },
    {
      question: "Pronouns change in Reported Speech based on:",
      options: ["The weather", "The speaker's perspective", "The length of the word", "The alphabet"],
      correctAnswer: 1,
      explanation: "e.g., 'I' becomes 'He' or 'She'."
    },
    {
      question: "Report this: 'Can you help?' he asked.",
      options: ["He asked can I help.", "He asked if I could help.", "He asked I could help.", "He said if I can help."],
      correctAnswer: 1,
      explanation: "Can -> Could, add 'if'."
    },
    {
      question: "'Yesterday' becomes '___' in Reported Speech.",
      options: ["The day before", "Tomorrow", "Then", "At that time"],
      correctAnswer: 0,
      explanation: "Or 'the previous day'."
    },
    {
      question: "'Ago' becomes '___' in Reported Speech.",
      options: ["Then", "Before", "After", "Now"],
      correctAnswer: 1,
      explanation: "e.g., 2 days ago -> 2 days before."
    },
    {
      question: "Can 'that' be omitted in 'He said that he was happy'?",
      options: ["Yes, in informal speech", "No, never", "Only for cows", "Only in questions"],
      correctAnswer: 0,
      explanation: "In casual English, 'He said he was happy' is very common."
    },
    {
      question: "Report this: 'Don't go!' he shouted.",
      options: ["He shouted don't go.", "He shouted that not go.", "He shouted not to go.", "He told me no go."],
      correctAnswer: 2,
      explanation: "Negative imperatives use 'not + to + V1'."
    },
    {
      question: "Report this: 'I may come,' he said.",
      options: ["He said he might come.", "He said he may come.", "He told he will come.", "He said he came."],
      correctAnswer: 0,
      explanation: "May -> Might."
    },
    {
      question: "If I report something immediately, is backshifting always mandatory?",
      options: ["Yes", "No, sometimes we keep the present if it's still true", "Only in movies", "Only for 'Say'"],
      correctAnswer: 1,
      explanation: "If the situation hasn't changed (e.g., reported 2 seconds later), we might keep the present."
    },
    {
      question: "In reported speech, 'Will' becomes 'Would'. This is called:",
      options: ["The Future in the Past", "The Past Perfect", "The Unreal Mood", "A Moo-stake"],
      correctAnswer: 0,
      explanation: "It represents a future intention from a past viewpoint."
    },
    {
      question: "Reported questions never use which punctuation?",
      options: ["Full stop", "Question mark", "Comma", "Capital letter"],
      correctAnswer: 1,
      explanation: "Since the order is now a statement, we use a full stop, not a question mark."
    },

    // --- 6.5 Conditionals (61-80) ---
    {
      question: "In Type 0 Conditionals (Universal Truths), what tenses are used?",
      options: ["If + Past, Past", "If + Present, Future", "If + Present, Present", "If + Past Perfect, would have"],
      correctAnswer: 2,
      explanation: "If you heat ice, it melts. Both parts stay in the Present!"
    },
    {
      question: "Identify the tense pattern for Type 1 (Possible Future).",
      options: ["If + Past, would + V1", "If + Present, will + V1", "If + Present, Present", "If + Past Perfect, would have + V3"],
      correctAnswer: 1,
      explanation: "Real future possibility."
    },
    {
      question: "Identify the tense pattern for Type 2 (Unreal/Dream).",
      options: ["If + Past, would + V1", "If + Present, will + V1", "If + Present, Present", "If + Past Perfect, would have + V3"],
      correctAnswer: 0,
      explanation: "Imaginary present/future situations."
    },
    {
      question: "Identify the tense pattern for Type 3 (Regret/Past).",
      options: ["If + Past, would + V1", "If + Present, will + V1", "If + Present, Present", "If + Past Perfect, would have + V3"],
      correctAnswer: 3,
      explanation: "Impossible past regret."
    },
    {
      question: "Which 'Be' verb is used for ALL subjects in Type 2 Conditionals?",
      options: ["Was", "Were", "Been", "Am"],
      correctAnswer: 1,
      explanation: "The subjunctive mood uses 'If I were', 'If he were'."
    },
    {
      question: "Identify the conditional: 'If it rains, I will stay home.'",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 1,
      explanation: "A real future possibility."
    },
    {
      question: "Identify the conditional: 'If I were you, I would study.'",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 2,
      explanation: "Giving advice/imaginary situation."
    },
    {
      question: "Identify the conditional: 'If I had studied, I would have passed.'",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 3,
      explanation: "Regretting a past event that cannot be changed."
    },
    {
      question: "Identify the conditional: 'If you touch fire, you get burned.'",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 0,
      explanation: "A scientific certainty/fact."
    },
    {
      question: "Can we use 'will' inside the 'if' clause?",
      options: ["Always", "Never", "Only for emphasis", "Only in Type 2"],
      correctAnswer: 1,
      explanation: "Moo-rule #1: The 'if' clause stays in the present/past, never 'will'!"
    },
    {
      question: "Correct this: 'If it will rain, I'll take an umbrella.'",
      options: ["If it rains", "If it would rain", "If it rained", "No correction needed"],
      correctAnswer: 0,
      explanation: "Remove 'will' from the IF clause."
    },
    {
      question: "Correct this: 'If I had a car, I will drive to work.'",
      options: ["I would drive", "I have driven", "I drive", "I had driven"],
      correctAnswer: 0,
      explanation: "Type 2 needs 'would + V1' to match Simple Past."
    },
    {
      question: "Which conditional is known as the 'Time Machine'?",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 3,
      explanation: "It talks about changing the past (which is impossible!)."
    },
    {
      question: "Which conditional is for 'Likely' future events?",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 1,
      explanation: "Type 1 is for realistic possibilities."
    },
    {
      question: "Which conditional is for 'Unlikely/Imaginary' events?",
      options: ["Type 0", "Type 1", "Type 2", "Type 3"],
      correctAnswer: 2,
      explanation: "Type 2 is for things that probably won't happen."
    },
    {
      question: "In Type 3, 'would have' is followed by which verb form?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 2,
      explanation: "It's a perfect structure: would have + Participle (V3)."
    },
    {
      question: "True or False: Type 0 is only for science.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation: "False! It's for anything that is always true, like 'If I eat peanuts, I get sick'."
    },
    {
      question: "Can the clauses be swapped? (e.g., 'I will go if you go')",
      options: ["Yes", "No", "Only in writing", "Only for Type 3"],
      correctAnswer: 0,
      explanation: "Yes, you can start with the result clause. Just omit the comma!"
    },
    {
      question: "If I say 'If I won the lottery', am I likely to win?",
      options: ["Yes", "No, it's a Type 2 dream", "Maybe in Type 1", "Definitely"],
      correctAnswer: 1,
      explanation: "Simple Past in the IF clause shows the event is distant or unreal."
    },
    {
      question: "Identify the mistake: 'If I was rich, I'd buy a farm.'",
      options: ["was should be were", "buy should be bought", "no mistake", "if should be when"],
      correctAnswer: 0,
      explanation: "While common in casual talk, formal grammar requires 'were' (Subjunctive)."
    },

    // --- 6.6 Active & Passive Voice (81-100) ---
    {
      question: "What is the primary focus of Passive Voice?",
      options: ["The Doer (Subject)", "The Receiver (Object)", "The Time", "The Place"],
      correctAnswer: 1,
      explanation: "Passive highlights what happened to the object."
    },
    {
      question: "What is the mandatory verb form for ALL Passive structures?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 2,
      explanation: "Passive voice always uses the Past Participle (V3)."
    },
    {
      question: "Which 'Helping Verb' family is essential for Passive Voice?",
      options: ["Do family", "Be family", "Have family", "Modal family"],
      correctAnswer: 1,
      explanation: "Passive structure = Be (am/is/was/etc) + V3."
    },
    {
      question: "Change to Passive: 'She eats an apple.'",
      options: ["An apple is eaten by her.", "An apple eaten by her.", "An apple was eaten by her.", "An apple is eating her."],
      correctAnswer: 0,
      explanation: "Simple Present Passive: is + V3."
    },
    {
      question: "Change to Passive: 'They built a house.'",
      options: ["A house is built by them.", "A house was built by them.", "A house were built by them.", "A house had been built."],
      correctAnswer: 1,
      explanation: "Simple Past Passive: was + V3."
    },
    {
      question: "Change to Passive: 'I am writing a book.'",
      options: ["A book is written by me.", "A book is being written by me.", "A book was written by me.", "A book has been written."],
      correctAnswer: 1,
      explanation: "Continuous Passive: being + V3."
    },
    {
      question: "Change to Passive: 'He has finished the report.'",
      options: ["The report is finished.", "The report has been finished by him.", "The report was finished.", "The report had been finished."],
      correctAnswer: 1,
      explanation: "Perfect Passive: has been + V3."
    },
    {
      question: "When do we use the 'by [agent]' phrase in Passive?",
      options: ["Always", "Never", "Only if the doer is important or necessary", "Only for cows"],
      correctAnswer: 2,
      explanation: "If the doer is obvious (The thief was arrested), we omit 'by police'."
    },
    {
      question: "Change to Passive: 'Will you help me?'",
      options: ["Will I be helped by you?", "Will you be helped by me?", "Shall I helped by you?", "Will I being helped?"],
      correctAnswer: 0,
      explanation: "Future Passive: will be + V3."
    },
    {
      question: "Identify the mistake: 'The car was wash yesterday.'",
      options: ["was should be is", "wash should be washed", "yesterday should be today", "no mistake"],
      correctAnswer: 1,
      explanation: "Passive needs V3 (washed), not V1 (wash)."
    },
    {
      question: "Passive of 'Someone stole my wallet'?",
      options: ["My wallet was stolen.", "My wallet stolen by someone.", "My wallet is stolen.", "Someone was stolen."],
      correctAnswer: 0,
      explanation: "We use Passive when the doer is unknown."
    },
    {
      question: "Passive of 'They are painting the fence'?",
      options: ["The fence is painted.", "The fence is being painted.", "The fence are being painted.", "The fence was painted."],
      correctAnswer: 1,
      explanation: "Fence is singular, use 'is being'."
    },
    {
      question: "Passive of 'He can solve it'?",
      options: ["It can be solved by him.", "It can solve by him.", "It could solved by him.", "It is solved."],
      correctAnswer: 0,
      explanation: "Modal Passive: modal + be + V3."
    },
    {
      question: "Which tense has 'was/were + being + V3' in Passive?",
      options: ["Simple Past", "Past Continuous", "Present Continuous", "Past Perfect"],
      correctAnswer: 1,
      explanation: "It matches the ongoing nature of the past."
    },
    {
      question: "Change to Active: 'The room was cleaned by her.'",
      options: ["She cleans the room.", "She cleaned the room.", "She was cleaning the room.", "She had cleaned the room."],
      correctAnswer: 1,
      explanation: "Reverse from Past Passive to Simple Past."
    },
    {
      question: "Can we make 'I am happy' passive?",
      options: ["Yes", "No, because there is no object", "Only in writing", "Only for Dr. Moo"],
      correctAnswer: 1,
      explanation: "Intransitive verbs (no object) cannot be made passive."
    },
    {
      question: "Passive of 'Who wrote this?'",
      options: ["By whom was this written?", "Who was this written?", "By whom this was written?", "Who wrote this by?"],
      correctAnswer: 0,
      explanation: "Standard formal structure for passive questions."
    },
    {
      question: "In Passive Voice, the Object of the active sentence becomes the:",
      options: ["New Subject", "New Object", "Verb", "Rest"],
      correctAnswer: 0,
      explanation: "The 'Receiver' moves to the front of the stage."
    },
    {
      question: "Which is the 'Passive Pattern' rule?",
      options: ["Be + V3", "Have + V3", "Do + V1", "Be + V4"],
      correctAnswer: 0,
      explanation: "The Be-verb is the foundation of Passive voice."
    },
    {
      question: "Identify the tense: 'The house is being built.'",
      options: ["Simple Present Passive", "Present Continuous Passive", "Past Continuous Passive", "Future Passive"],
      correctAnswer: 1,
      explanation: "Is being + V3."
    }
  ]
};

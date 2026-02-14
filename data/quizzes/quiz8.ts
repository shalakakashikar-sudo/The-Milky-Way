import { ModuleQuiz } from '../../types';

export const quiz8: ModuleQuiz = {
  moduleId: 8,
  questions: [
    // --- Error Detection Strategy (1-15) ---
    {
      question: "What is the first step in Dr. Moo's 4-Step Diagnosis?",
      options: ["Check the Helping Verb", "Check the Markers", "Check the Subject", "Check the Aspect"],
      correctAnswer: 2,
      explanation: "Step 1 is always Subject-Verb agreement. Does the verb match the doer?"
    },
    {
      question: "In the 4-Step Diagnosis, what are you looking for in Step 2: Check Markers?",
      options: ["Spelling errors", "Time stamps like 'Yesterday' or 'Since'", "Punctuation", "The object"],
      correctAnswer: 1,
      explanation: "Markers are the coordinates that tell you which time epoch to use."
    },
    {
      question: "Step 3: Check Aspect asks: Is the action ___?",
      options: ["Loud or quiet", "Fast or slow", "Ongoing, completed, or a routine", "Good or bad"],
      correctAnswer: 2,
      explanation: "Aspect determines if you need Simple, Continuous, or Perfect forms."
    },
    {
      question: "What is the focus of Step 4: Check the Helping Verb?",
      options: ["Is the structure grammatically sound?", "Is the verb irregular?", "Is the subject a person?", "Does the sentence have an object?"],
      correctAnswer: 0,
      explanation: "This step ensures 'be', 'have', and 'do' are used correctly for the chosen tense."
    },
    {
      question: "Which diagnosis step handles 'Yesterday' markers?",
      options: ["Step 1: Subject", "Step 2: Markers", "Step 3: Aspect", "Step 4: Helping Verb"],
      correctAnswer: 1,
      explanation: "Markers provide the time context."
    },
    {
      question: "Which diagnosis step ensures 'He' matches with 'is' instead of 'are'?",
      options: ["Step 1: Subject", "Step 2: Markers", "Step 3: Aspect", "Step 4: Helping Verb"],
      correctAnswer: 0,
      explanation: "This is Subject-Verb agreement."
    },
    {
      question: "Which diagnosis step helps you choose between 'Simple' and 'Perfect'?",
      options: ["Step 1", "Step 2", "Step 3: Aspect", "Step 4"],
      correctAnswer: 2,
      explanation: "Aspect describes the nature of work completion."
    },
    {
      question: "If a sentence is negative, which Diagnosis step checks the 'do/does/did' helper?",
      options: ["Step 1", "Step 2", "Step 3", "Step 4: Helping Verb"],
      correctAnswer: 3,
      explanation: "Structure of negatives and questions depends on helping verbs."
    },
    {
      question: "True or False: According to Dr. Moo, the marker is sometimes implied by the surrounding context.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation: "Context matters! Even if 'Yesterday' isn't in the sentence, the story might be set in the past."
    },
    {
      question: "In Step 1, 'I' follows plural rules for which helping verbs?",
      options: ["am and was", "have and do", "is and has", "will and shall"],
      correctAnswer: 1,
      explanation: "I have, I do (plural rules), but I am, I was (singular/special rules)."
    },
    {
      question: "If the result is what matters most, Step 3 suggests using which Aspect?",
      options: ["Simple", "Continuous", "Perfect", "Future"],
      correctAnswer: 2,
      explanation: "Perfect focus is on the result or experience."
    },
    {
      question: "In Step 4, if a tense is Continuous, which 'family' of helpers do you need?",
      options: ["Do family", "Have family", "Be family", "Modal family"],
      correctAnswer: 2,
      explanation: "Continuous needs am/is/are/was/were."
    },
    {
      question: "In Step 4, if a tense is Perfect, which 'family' of helpers do you need?",
      options: ["Do family", "Have family", "Be family", "Modal family"],
      correctAnswer: 1,
      explanation: "Perfect needs has/have/had."
    },
    {
      question: "A 'systematic approach' to grammar makes you a:",
      options: ["Cowherd", "Grammar Detective", "Time Traveler", "Cook"],
      correctAnswer: 1,
      explanation: "Dr. Moo wants you to investigate sentences logically."
    },
    {
      question: "Does 'Singular subject' always mean 'Singular verb'?",
      options: ["Yes", "No", "Only for 'He'", "Only in the past"],
      correctAnswer: 0,
      explanation: "Rule 1 of agreement: He plays, They play."
    },

    // --- 8.1 The Moo-stake Wall (16-45) ---
    {
      question: "Correct the 'Moo-stake': 'I am knowing the answer.'",
      options: ["I know the answer.", "I known the answer.", "I have knowing the answer.", "I was knowing the answer."],
      correctAnswer: 0,
      explanation: "'Know' is stative; it doesn't like -ing."
    },
    {
      question: "Why is 'She is having a car' wrong?",
      options: ["Have is too short", "Possession is a state, not an activity", "Cars are plural", "She is singular"],
      correctAnswer: 1,
      explanation: "Ownership is stable, not progressive."
    },
    {
      question: "Correct the 'Moo-stake': 'He goes to Delhi yesterday.'",
      options: ["He went to Delhi yesterday.", "He go to Delhi yesterday.", "He has gone to Delhi yesterday.", "He was go to Delhi yesterday."],
      correctAnswer: 0,
      explanation: "'Yesterday' is finished; use Simple Past (V2)."
    },
    {
      question: "Why is 'I have seen him yesterday' a Moo-stake?",
      options: ["Saw is better", "Present Perfect can't have a specific past time marker", "Yesterday is not a result", "Seen is V3"],
      correctAnswer: 1,
      explanation: "Present Perfect must remain 'unbound' to a specific past clock time."
    },
    {
      question: "Correct the 'Moo-stake': 'They are living here since 2015.'",
      options: ["They live here since 2015.", "They have been living here since 2015.", "They were living since 2015.", "No correction needed."],
      correctAnswer: 1,
      explanation: "Starting in the past + still continuing = Present Perfect Continuous."
    },
    {
      question: "Correct the 'Moo-stake': 'She don't like coffee.'",
      options: ["She doesn't like coffee.", "She didn't liked coffee.", "She not like coffee.", "She don't likes coffee."],
      correctAnswer: 0,
      explanation: "3rd person singular 'She' needs 'does not'."
    },
    {
      question: "Correct the 'Moo-stake': 'We didn't went to school.'",
      options: ["We didn't go to school.", "We not went to school.", "We hadn't went to school.", "We didn't gone to school."],
      correctAnswer: 0,
      explanation: "After 'did', pull the past charge back to V1."
    },
    {
      question: "Why is 'I am agree with you' wrong?",
      options: ["Agree is an adjective", "Agree is a verb, it doesn't need 'am'", "Agree should be agreed", "I is not plural"],
      correctAnswer: 1,
      explanation: "You don't say 'I am play', so don't say 'I am agree'."
    },
    {
      question: "Correct the 'Moo-stake': 'She has cook dinner already.'",
      options: ["She has cooked dinner already.", "She has cooks dinner already.", "She cooked dinner already.", "She has been cook dinner already."],
      correctAnswer: 0,
      explanation: "Present Perfect requires V3 (Participle)."
    },
    {
      question: "Correct the 'Moo-stake': 'I will be finish by five.'",
      options: ["I will finished by five.", "I will have finished by five.", "I am finish by five.", "I will be finishing by five."],
      correctAnswer: 1,
      explanation: "A 'by' deadline requires Future Perfect to show completion."
    },
    {
      question: "Is 'I am beginning to know' technically okay?",
      options: ["Yes", "No", "Only if it's raining", "Only for Dr. Moo"],
      correctAnswer: 0,
      explanation: "Module 8 says you can say 'I am beginning to know' or simply 'I know'."
    },
    {
      question: "Which form should 'Have' use for a party?",
      options: ["Stative (Have)", "Continuous (Is having)", "Both are fine", "Neither"],
      correctAnswer: 1,
      explanation: "Parties are activities, so 'is having' is correct."
    },
    {
      question: "Why would 'He goes to Delhi yesterday' imply a logical impossibility?",
      options: ["Because Delhi is far", "Because it implies he goes 'every yesterday'", "Because 'goes' is future", "Because cows don't go to Delhi"],
      correctAnswer: 1,
      explanation: "Simple Present implies a habit, but you can't have a habit in a single finished day."
    },
    {
      question: "The 'burden' of the past tense in a negative sentence is carried by:",
      options: ["The Main Verb", "The Object", "The Helping Verb (Did)", "The Subject"],
      correctAnswer: 2,
      explanation: "'Did' takes the charge, freeing the main verb."
    },
    {
      question: "'I am in agreement' is more ___ than 'I agree'.",
      options: ["Casual", "Formal", "Cow-like", "Short"],
      correctAnswer: 1,
      explanation: "Module 8 notes this nuance in formal speech."
    },
    {
      question: "The marker 'Already' signals that the result is ___.",
      options: ["Late", "Ready now", "Forgotten", "Impossible"],
      correctAnswer: 1,
      explanation: "'Already' fits the result-focused Perfect aspect."
    },
    {
      question: "Identify the error type: 'She has saw him.'",
      options: ["Subject error", "Marker error", "V2 vs V3 error", "Helping verb error"],
      correctAnswer: 2,
      explanation: "Saw is V2; Perfect needs V3 (Seen)."
    },
    {
      question: "Identify the error type: 'They was playing.'",
      options: ["Subject-Verb agreement", "V2 vs V3", "Stative blunder", "Marker mismatch"],
      correctAnswer: 0,
      explanation: "Plural subject needs plural verb."
    },
    {
      question: "Correct the 'Moo-stake': 'He has been knowing her for years.'",
      options: ["He has known her for years.", "He has been know her for years.", "He knows her for years.", "He was knowing her for years."],
      correctAnswer: 0,
      explanation: "Duration with a stative verb uses Perfect, not Perfect Continuous."
    },
    {
      question: "Which of these is a valid 'by' deadline structure?",
      options: ["I will finish by 5 PM.", "I will be finished by 5 PM.", "I will have finished by 5 PM.", "All of these are common, but C is the specific Future Perfect formula."],
      correctAnswer: 2,
      explanation: "Future Perfect is the precise choice for completion deadlines."
    },
    {
      question: "Error Detection: 'I didn't saw him.' What step catches this?",
      options: ["Step 1", "Step 2", "Step 3", "Step 4: Helping Verb Structure"],
      correctAnswer: 3,
      explanation: "Step 4 checks if the 'did + V1' pattern is followed."
    },
    {
      question: "Error Detection: 'Look! He eat grass.' What step catches this?",
      options: ["Step 1", "Step 2: Markers (Look!)", "Step 3", "Step 4"],
      correctAnswer: 1,
      explanation: "Marker 'Look!' demands Continuous aspect."
    },
    {
      question: "Error Detection: 'The water have boiled.' What step catches this?",
      options: ["Step 1: Subject agreement", "Step 2", "Step 3", "Step 4"],
      correctAnswer: 0,
      explanation: "Water (Singular) needs 'has'."
    },
    {
      question: "Is 'I have been to Paris last week' correct?",
      options: ["Yes", "No, use Simple Past", "No, use Past Perfect", "Only if I'm still there"],
      correctAnswer: 1,
      explanation: "Specific past time = Simple Past."
    },
    {
      question: "Why is 'She don't' called the most common 'academic error'?",
      options: ["Because students forget cows", "Because agreement with 'does' is often missed in writing", "Because it's too short", "Because it's a secret"],
      correctAnswer: 1,
      explanation: "Subject-verb agreement for 3rd person singular is a high-frequency error."
    },
    {
      question: "Which step identifies the wrong face of a verb (e.g. using V2 instead of V3)?",
      options: ["Step 1", "Step 2", "Step 3", "Step 4: Helping Verb/Structure"],
      correctAnswer: 3,
      explanation: "This step ensures the verb form matches the auxiliary."
    },
    {
      question: "True or False: 'Moo-stakes' are part of the learning journey.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation: "Dr. Moo says mistakes are okay; the key is understanding WHY."
    },
    {
      question: "If sequence doesn't matter and there's one action, use:",
      options: ["Past Perfect", "Simple Past", "Future Continuous", "Present Perfect"],
      correctAnswer: 1,
      explanation: "Simple Past is the safest bet for single past facts."
    },
    {
      question: "What is the 'Lego block' for moving from Simple to Continuous?",
      options: ["Add 'Have' + V3", "Add 'Be' + -ing", "Add 'Did' + V1", "Add 'Will' + V1"],
      correctAnswer: 1,
      explanation: "Continuous aspect always needs a 'Be' verb and the -ing suffix."
    },
    {
      question: "What is the 'Lego block' for moving to Perfect aspect?",
      options: ["Add 'Be' + -ing", "Add 'Have' + V3", "Add 'Will' + V1", "Add 'Did' + V2"],
      correctAnswer: 1,
      explanation: "Perfect aspect always needs a 'Have' verb and the V3 form."
    },

    // --- 8.2 Tense Conversion (46-60) ---
    {
      question: "Transform 'He writes a letter' to Present Continuous.",
      options: ["He writing a letter.", "He is writing a letter.", "He has written a letter.", "He writes letter."],
      correctAnswer: 1,
      explanation: "Add 'is' (Be) and 'writing' (-ing)."
    },
    {
      question: "Transform 'They played cricket' to Present Perfect.",
      options: ["They have played cricket.", "They has played cricket.", "They playing cricket.", "They had played cricket."],
      correctAnswer: 0,
      explanation: "Add 'have' and use V3 (played)."
    },
    {
      question: "Transform 'I am eating lunch' to Past Continuous.",
      options: ["I eat lunch.", "I was eating lunch.", "I had eaten lunch.", "I am eating lunch yesterday."],
      correctAnswer: 1,
      explanation: "Change 'am' to 'was'."
    },
    {
      question: "Transform 'We go to school' to Simple Future.",
      options: ["We will go to school.", "We going to school.", "We went to school.", "We have gone to school."],
      correctAnswer: 0,
      explanation: "Add 'will' + V1."
    },
    {
      question: "Transform 'She was cooking' to Past Perfect Continuous.",
      options: ["She has been cooking.", "She had been cooking.", "She cooked.", "She was being cooked."],
      correctAnswer: 1,
      explanation: "Change 'was' to 'had been' to move from Continuous to Perfect Continuous."
    },
    {
      question: "Transform 'He eats breakfast' to Simple Past.",
      options: ["He ate breakfast.", "He has eaten breakfast.", "He was eating breakfast.", "He eated breakfast."],
      correctAnswer: 0,
      explanation: "Use V2 (ate)."
    },
    {
      question: "Transform 'I study' to Future Perfect.",
      options: ["I will study.", "I will be studying.", "I will have studied.", "I have studied."],
      correctAnswer: 2,
      explanation: "Add 'will have' + V3."
    },
    {
      question: "Transform 'The cows moo' to Past Perfect.",
      options: ["The cows mooed.", "The cows had mooed.", "The cows have mooed.", "The cows were mooing."],
      correctAnswer: 1,
      explanation: "Add 'had' + V3 (mooed)."
    },
    {
      question: "Transform 'You are listening' to Future Continuous.",
      options: ["You will be listening.", "You will listening.", "You are going to listen.", "You listen."],
      correctAnswer: 0,
      explanation: "Change 'are' to 'will be'."
    },
    {
      question: "Conversion Logic: Simple -> Continuous. What changes?",
      options: ["Only the verb", "The helping verb and main verb form", "Only the subject", "Nothing"],
      correctAnswer: 1,
      explanation: "You must add 'be' and change to V4 (-ing)."
    },
    {
      question: "Conversion Logic: Continuous -> Perfect. What changes?",
      options: ["Be becomes Have, V4 becomes V3", "Be becomes Do, V4 becomes V1", "Have becomes Be, V3 becomes V4", "Nothing"],
      correctAnswer: 0,
      explanation: "Switch the auxiliary family and the verb face."
    },
    {
      question: "If the target is 'Past Perfect Continuous', you need which helpers?",
      options: ["Was/Were", "Had been", "Has been", "Will have been"],
      correctAnswer: 1,
      explanation: "Had been + V4."
    },
    {
      question: "Transform 'He sees' to Simple Past.",
      options: ["He seen", "He saw", "He was see", "He has seen"],
      correctAnswer: 1,
      explanation: "V2 of see is saw."
    },
    {
      question: "Transform 'They walk' to Present Perfect Continuous.",
      options: ["They have walked", "They have been walking", "They are walking", "They had been walking"],
      correctAnswer: 1,
      explanation: "Has/Have + been + V4."
    },
    {
      question: "Final conversion check: 'I will write' -> Past Perfect?",
      options: ["I had written", "I written", "I have written", "I will written"],
      correctAnswer: 0,
      explanation: "Had + V3."
    },

    // --- 8.3 Real-Life Scenarios (61-90) ---
    {
      question: "In a Job Interview, which tense describes an ongoing skill or experience?",
      options: ["Simple Past", "Present Perfect Continuous", "Simple Future", "Past Continuous"],
      correctAnswer: 1,
      explanation: "'I have been working for 3 years' connects past effort to now."
    },
    {
      question: "In a Job Interview, 'I graduated in 2020' is a:",
      options: ["Habit", "Finished Fact (Simple Past)", "Plan", "Experience"],
      correctAnswer: 1,
      explanation: "Specific past events use Simple Past."
    },
    {
      question: "In a Daily Routine, which tense describes your usual wakeup time?",
      options: ["Simple Present", "Present Continuous", "Present Perfect", "Simple Past"],
      correctAnswer: 0,
      explanation: "Habits and routines = Simple Present."
    },
    {
      question: "In a Daily Routine, 'I am currently reading a book' is a:",
      options: ["Permanent Habit", "Temporary Action", "Future Plan", "Finished Fact"],
      correctAnswer: 1,
      explanation: "Ongoing but not forever = Present Continuous."
    },
    {
      question: "In Holiday Planning, 'The flight leaves at 10 AM' is which usage?",
      options: ["Fixed Schedule (Simple Present)", "Spontaneous", "Intention", "Experience"],
      correctAnswer: 0,
      explanation: "Official timetables use Simple Present."
    },
    {
      question: "In Holiday Planning, 'We are going to visit Italy' is a:",
      options: ["Spontaneous decision", "Pre-decided Plan", "Fixed arrangement", "Fact"],
      correctAnswer: 1,
      explanation: "'Going to' is for intentions decided earlier."
    },
    {
      question: "In a Ghost Story, which tense sets the atmosphere?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
      correctAnswer: 1,
      explanation: "'The wind was howling' (Atmosphere/Scene)."
    },
    {
      question: "In a Ghost Story, which tense moves the plot forward?",
      options: ["Simple Past", "Past Continuous", "Simple Present", "Future"],
      correctAnswer: 0,
      explanation: "'Suddenly, a door slammed' (Simple Past snap)."
    },
    {
      question: "In a Recipe Video, instructions like 'First, you chop the onions' are in:",
      options: ["Simple Present (Imperative)", "Present Continuous", "Simple Future", "Present Perfect"],
      correctAnswer: 0,
      explanation: "Instructions are always Simple Present."
    },
    {
      question: "In an Accident Report, which tense shows who was there FIRST?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Present Perfect"],
      correctAnswer: 2,
      explanation: "Past Perfect (Had already stopped) sequences events."
    },
    {
      question: "In an Interview Follow-up, 'I have been thinking about our talk' sounds more:",
      options: ["Angry", "Thoughtful/Professional", "Confused", "Casual"],
      correctAnswer: 1,
      explanation: "It shows ongoing interest since the meeting."
    },
    {
      question: "In Social Media posts, why do we say 'Just finished a hike'?",
      options: ["We are lazy", "It's a recent completion relevant now", "It's the future", "It's a habit"],
      correctAnswer: 1,
      explanation: "Present Perfect focuses on the 'Just done' result."
    },
    {
      question: "In Sports Commentary, 'He passes to the striker' uses which tense?",
      options: ["Dramatic Present", "Simple Past", "Present Continuous", "Future"],
      correctAnswer: 0,
      explanation: "Simple Present keeps up with high-speed action."
    },
    {
      question: "In a Weather Forecast, 'The clouds will clear by evening' is a:",
      options: ["Prediction with a deadline", "Routine", "Past event", "Fact"],
      correctAnswer: 0,
      explanation: "Future Perfect is great for forecast deadlines."
    },
    {
      question: "In a Ghost Story, 'I had never felt so scared' uses which tense?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Describes an experience before that past moment."
    },
    {
      question: "In a Job Interview, which tense links past skills to current needs?",
      options: ["Simple Past", "Present Perfect", "Simple Future", "Past Perfect"],
      correctAnswer: 1,
      explanation: "The 'Bridge' tense shows past experience affecting the present."
    },
    {
      question: "Identify the usage: 'Ronaldo shoots and scores!'",
      options: ["Routine", "Universal Fact", "Dramatic Present", "Future Plan"],
      correctAnswer: 2,
      explanation: "Live sports action."
    },
    {
      question: "In Recipe Videos, 'Now, I'm adding the spices' is:",
      options: ["Fact", "Instruction", "Live Action (Continuous)", "Result"],
      correctAnswer: 2,
      explanation: "Describing what is happening right now on screen."
    },
    {
      question: "In Accident Reports, 'I was waiting at the light' is which usage?",
      options: ["Interruption", "Ongoing State/Background", "Finished fact", "Result"],
      correctAnswer: 1,
      explanation: "Setting the scene for the crash."
    },
    {
      question: "In Holiday Planning, 'I'll bring my camera' is which usage?",
      options: ["Prior plan", "Spontaneous decision", "Schedule", "Habit"],
      correctAnswer: 1,
      explanation: "'Will' is used for decisions made while speaking."
    },
    {
      question: "In Daily Routine, 'I go to the gym daily' is which usage?",
      options: ["Temporary", "Routine/Habit", "Result", "Plan"],
      correctAnswer: 1,
      explanation: "Simple Present markers like 'daily' signal habits."
    },
    {
      question: "Identify the scenario: 'The grass was wet because it had been raining.'",
      options: ["Job Interview", "Weather/Accident Causality", "Recipe", "Social Media"],
      correctAnswer: 1,
      explanation: "Explaining a past result through a past duration."
    },
    {
      question: "In Interview Follow-up, 'I look forward to hearing back' is:",
      options: ["Past", "Present State", "Future", "Result"],
      correctAnswer: 1,
      explanation: "Simple Present for current feelings."
    },
    {
      question: "Which scenario uses 'By' + Future Perfect most effectively?",
      options: ["Ghost Story", "Weather Forecast", "Daily Routine", "Joke"],
      correctAnswer: 1,
      explanation: "e.g., 'Rain will have stopped by noon'."
    },
    {
      question: "Why do we drop 'I' in 'Currently chilling at a cafe' on Social Media?",
      options: ["It's incorrect", "It's casual text style", "The verb is enough", "None"],
      correctAnswer: 1,
      explanation: "Casual context often permits subject omission."
    },
    {
      question: "Identify the scenario: 'Thank you for the time you gave me.'",
      options: ["Interview Follow-up", "Ghost Story", "Sports", "Recipe"],
      correctAnswer: 0,
      explanation: "Standard professional gratitude."
    },
    {
      question: "Identify the scenario: 'Watch out! The pot is going to boil over!'",
      options: ["Job Interview", "Recipe Video (Evidence)", "Social Media", "Daily Routine"],
      correctAnswer: 1,
      explanation: "'Going to' for evidence in front of you."
    },
    {
      question: "In Ghost Stories, why is Past Perfect vital?",
      options: ["To sound smart", "To show who was there first and avoid confusion", "To predict the ending", "None"],
      correctAnswer: 1,
      explanation: "Sequencing 'Even before then' adds clarity to plots."
    },
    {
      question: "True or False: Using the correct tense helps you sound like a native speaker.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation: "Tenses are the tracks for smooth communication."
    },
    {
      question: "What is Dr. Moo's advice on perfection?",
      options: ["Always be perfect", "Language is about communication, not just perfection", "Never make mistakes", "Only write, don't speak"],
      correctAnswer: 1,
      explanation: "Communication is the goal; tenses are the tools."
    },

    // --- Mastery & Golden Rules (91-100) ---
    {
      question: "Rule Check: Modal 'will' always takes which form?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 0,
      explanation: "I will go, he will eat (always base form)."
    },
    {
      question: "Rule Check: 'Has/Have' in Perfect tenses always takes which form?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 2,
      explanation: "The Participle (V3) face."
    },
    {
      question: "Rule Check: 'Be' verbs in Continuous tenses always take which form?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 3,
      explanation: "The -ing (V4) face."
    },
    {
      question: "The 'Did' Magnet pulls the past charge away from the ___.",
      options: ["Subject", "Main Verb", "Object", "Helping Verb"],
      correctAnswer: 1,
      explanation: "The main verb returns to V1."
    },
    {
      question: "Final Mastery Rule: Tense = Time + ___.",
      options: ["Work (Aspect)", "Subject", "Object", "Grammar"],
      correctAnswer: 0,
      explanation: "The core formula of the Milky Way!"
    },
    {
      question: "Which coordinate is: (Past, Continuous)?",
      options: ["I eat", "I am eating", "I was eating", "I had eaten"],
      correctAnswer: 2,
      explanation: "Time: Past (was), Aspect: Continuous (eating)."
    },
    {
      question: "Which coordinate is: (Future, Perfect)?",
      options: ["I will eat", "I will be eating", "I will have eaten", "I am eating"],
      correctAnswer: 2,
      explanation: "Time: Future (will have), Aspect: Perfect (eaten)."
    },
    {
      question: "Which coordinate is: (Present, Simple)?",
      options: ["I eat", "I ate", "I have eaten", "I am eating"],
      correctAnswer: 0,
      explanation: "Time: Present, Aspect: Simple (Base form)."
    },
    {
      question: "Dr. Moo's Final Advice: If only one action exists in the past, use ___.",
      options: ["Past Perfect", "Simple Past", "Past Continuous", "Present Perfect"],
      correctAnswer: 1,
      explanation: "It's the safest and most standard choice."
    },
    {
      question: "You have traveled the Milky Way. What keeps the communication train running?",
      options: ["Milk", "Tenses", "Grass", "The Station"],
      correctAnswer: 1,
      explanation: "Tenses are the tracks that keep your message on the right path!"
    }
  ]
};
import { ModuleQuiz } from '../../types';

export const quiz2: ModuleQuiz = {
  moduleId: 2,
  questions: [
    // --- 2.1 S-V-O-R Blueprint (1-20) ---
    {
      question: "What does the 'S' stand for in the S-V-O blueprint?",
      options: ["Sentence", "Subject", "Suffix", "Simple"],
      correctAnswer: 1,
      explanation: "The Subject is the hero or doer of the action in the sentence."
    },
    {
      question: "What does 'HV' stand for in the fundamental pattern?",
      options: ["Heavy Verb", "Helping Verb", "High Verb", "Hidden Verb"],
      correctAnswer: 1,
      explanation: "Helping Verbs (Auxiliaries) help show the tense or time of the action."
    },
    {
      question: "Which component is known as the 'Receiver' of the action?",
      options: ["Subject", "Verb", "Object", "Rest"],
      correctAnswer: 2,
      explanation: "The Object is the target or receiver of the action."
    },
    {
      question: "In the sentence 'Ram eats a mango', who is the Subject?",
      options: ["Ram", "Eats", "A", "Mango"],
      correctAnswer: 0,
      explanation: "Ram is the one doing the eating!"
    },
    {
      question: "In 'Ram eats a mango', what is the Object?",
      options: ["Ram", "Eats", "A", "Mango"],
      correctAnswer: 3,
      explanation: "The mango is the thing being eaten (the receiver)."
    },
    {
      question: "Which part of the sentence Blueprint answers 'Who or What did it?'",
      options: ["Subject", "Helping Verb", "Main Verb", "Object"],
      correctAnswer: 0,
      explanation: "The Subject identifies the 'doer'."
    },
    {
      question: "Which part of the sentence Blueprint answers 'Whom or What?' (about the action)?",
      options: ["Subject", "Helping Verb", "Main Verb", "Object"],
      correctAnswer: 3,
      explanation: "The Object reveals who or what was affected by the verb."
    },
    {
      question: "Which component acts as the 'Time-Keeper' of the sentence?",
      options: ["Subject", "Helping Verb", "Main Verb", "Object"],
      correctAnswer: 1,
      explanation: "Helping verbs (is, was, will) tell us when the action happened."
    },
    {
      question: "The 'Main Verb' (V) represents the:",
      options: ["Hero", "Time", "Action", "Receiver"],
      correctAnswer: 2,
      explanation: "The Main Verb is the actual task or state being expressed."
    },
    {
      question: "Which blueprint sequence is standard for English thoughts?",
      options: ["V-S-O", "O-V-S", "S-V-O", "S-O-V"],
      correctAnswer: 2,
      explanation: "Subject-Verb-Object is the golden standard blueprint."
    },
    {
      question: "A Subject can be a Noun or a:",
      options: ["Pronoun", "Adverb", "Preposition", "Conjunction"],
      correctAnswer: 0,
      explanation: "Pronouns like He, She, It, or They can act as subjects."
    },
    {
      question: "Can a sentence have a Helping Verb and a Main Verb together?",
      options: ["Yes", "No"],
      correctAnswer: 0,
      explanation: "Yes, like 'I am (HV) eating (V)'."
    },
    {
      question: "Where does the 'Object' usually sit in the blueprint?",
      options: ["Before the Subject", "Between Subject and Verb", "After the Verb", "At the very beginning"],
      correctAnswer: 2,
      explanation: "The object typically follows the verb."
    },
    {
      question: "What is the 'Rest' (R) in the S-V-O-R blueprint?",
      options: ["The end of the action", "Remaining details like time or place", "The subject's break time", "The verb's suffix"],
      correctAnswer: 1,
      explanation: "Rest includes extra information like 'in the park' or 'at night'."
    },
    {
      question: "In 'The cows give us milk', 'give' is the:",
      options: ["Subject", "Helping Verb", "Main Verb", "Object"],
      correctAnswer: 2,
      explanation: "'Give' is the action—the main verb."
    },
    {
      question: "Which of these acts as a Helping Verb?",
      options: ["Moo", "Will", "Green", "Grass"],
      correctAnswer: 1,
      explanation: "'Will' is a common helping verb for the future."
    },
    {
      question: "In the blueprint, parentheses around (HV) mean:",
      options: ["It's mandatory", "It's optional/hidden in some tenses", "It's a mistake", "It's the most important part"],
      correctAnswer: 1,
      explanation: "In Simple Present and Simple Past affirmative, the helping verb is often hidden!"
    },
    {
      question: "Can a sentence exist without a Subject?",
      options: ["Always", "Never in a standard statement", "Only if it's very long", "Only if Dr. Moo says so"],
      correctAnswer: 1,
      explanation: "A standard English statement requires a subject to know who is acting."
    },
    {
      question: "What is the 'Hero' of the sentence?",
      options: ["Subject", "Verb", "Object", "Full Stop"],
      correctAnswer: 0,
      explanation: "Dr. Moo calls the Subject the hero of the block."
    },
    {
      question: "In 'I am writing a book', what is 'am'?",
      options: ["Subject", "Helping Verb", "Main Verb", "Object"],
      correctAnswer: 1,
      explanation: "'Am' is the auxiliary/helping verb."
    },

    // --- 2.2 Subject Categories (21-40) ---
    {
      question: "Who is the '1st Person'?",
      options: ["The Listener", "The Speaker", "The Person talked about", "The Object"],
      correctAnswer: 1,
      explanation: "1st person refers to the one(s) speaking (I, We)."
    },
    {
      question: "Which of these is 1st Person Plural?",
      options: ["I", "You", "We", "They"],
      correctAnswer: 2,
      explanation: "'We' represents a group that includes the speaker."
    },
    {
      question: "Who is the '2nd Person'?",
      options: ["The Speaker", "The Listener", "The Cow", "The Hero"],
      correctAnswer: 1,
      explanation: "2nd person refers to the one(s) being spoken to (You)."
    },
    {
      question: "Who is the '3rd Person'?",
      options: ["The Speaker", "The Listener", "The person/thing we talk about", "The Subject"],
      correctAnswer: 2,
      explanation: "3rd person is anyone outside the conversation."
    },
    {
      question: "Which of these is 3rd Person Singular?",
      options: ["I", "You", "She", "They"],
      correctAnswer: 2,
      explanation: "'She' is one person we are talking about."
    },
    {
      question: "Is 'Ram' a 1st, 2nd, or 3rd person subject?",
      options: ["1st", "2nd", "3rd", "None"],
      correctAnswer: 2,
      explanation: "Names like Ram, Sita, or Dr. Moo are 3rd person subjects."
    },
    {
      question: "Which of these is 3rd Person Plural?",
      options: ["He", "She", "It", "They"],
      correctAnswer: 3,
      explanation: "'They' refers to a group of people we are talking about."
    },
    {
      question: "What is unique about the subject 'You'?",
      options: ["It is always singular", "It always takes plural verbs", "It is 1st person", "It never uses 'be' verbs"],
      correctAnswer: 1,
      explanation: "Even if you are talking to one person, 'You' follows plural verb rules (You are, You were)."
    },
    {
      question: "'I' is which person?",
      options: ["1st Singular", "1st Plural", "2nd Singular", "3rd Singular"],
      correctAnswer: 0,
      explanation: "'I' is the single speaker."
    },
    {
      question: "'The Cows' is which person/number?",
      options: ["3rd Singular", "3rd Plural", "2nd Plural", "1st Plural"],
      correctAnswer: 1,
      explanation: "A group of things/animals we are talking about is 3rd person plural."
    },
    {
      question: "Which category does 'It' belong to?",
      options: ["1st Singular", "2nd Singular", "3rd Singular", "3rd Plural"],
      correctAnswer: 2,
      explanation: "'It' is 3rd person singular."
    },
    {
      question: "If 'Sita and Gita' are the subjects, they are:",
      options: ["3rd Singular", "3rd Plural", "2nd Plural", "1st Plural"],
      correctAnswer: 1,
      explanation: "Multiple people being talked about = 3rd Person Plural."
    },
    {
      question: "Which pronoun is used for the speaker themselves?",
      options: ["You", "I", "He", "She"],
      correctAnswer: 1,
      explanation: "'I' is the 1st person singular pronoun."
    },
    {
      question: "Does 'He' take the same helping verbs as 'She'?",
      options: ["Yes", "No"],
      correctAnswer: 0,
      explanation: "Yes, both are 3rd person singular."
    },
    {
      question: "Which pronoun acts as 1st Person Plural?",
      options: ["They", "You", "We", "Us"],
      correctAnswer: 2,
      explanation: "'We' is the subject pronoun for 1st person plural."
    },
    {
      question: "If I talk to you directly, you are the:",
      options: ["1st Person", "2nd Person", "3rd Person", "Main Verb"],
      correctAnswer: 1,
      explanation: "The listener is the 2nd person."
    },
    {
      question: "Which subject category always includes the speaker?",
      options: ["1st Person", "2nd Person", "3rd Person", "None"],
      correctAnswer: 0,
      explanation: "1st person (I, We) always involves the speaker."
    },
    {
      question: "Which subject category never includes the speaker or the listener?",
      options: ["1st Person", "2nd Person", "3rd Person", "Rest"],
      correctAnswer: 2,
      explanation: "3rd person (He, She, It, They) is outside the 'I-You' circle."
    },
    {
      question: "Which of these is a pronoun?",
      options: ["Ram", "Eat", "They", "Milk"],
      correctAnswer: 2,
      explanation: "'They' is a subject pronoun."
    },
    {
      question: "Person and Number of 'You all'?",
      options: ["2nd Plural", "2nd Singular", "3rd Plural", "1st Plural"],
      correctAnswer: 0,
      explanation: "It remains 2nd person plural."
    },

    // --- 2.3 The 'Be' Family Chart (41-60) ---
    {
      question: "Which 'Be' verb matches 'I' in the Present?",
      options: ["Is", "Am", "Are", "Was"],
      correctAnswer: 1,
      explanation: "In the present, we always say 'I am'."
    },
    {
      question: "Which 'Be' verb matches 'He/She/It' in the Present?",
      options: ["Am", "Is", "Are", "Was"],
      correctAnswer: 1,
      explanation: "3rd person singular takes 'Is' (He is, She is, It is)."
    },
    {
      question: "Which 'Be' verb matches 'We/You/They' in the Present?",
      options: ["Am", "Is", "Are", "Were"],
      correctAnswer: 2,
      explanation: "Plural subjects and 'You' take 'Are' in the present."
    },
    {
      question: "Which 'Be' verb matches 'I' in the Past?",
      options: ["Was", "Were", "Am", "Been"],
      correctAnswer: 0,
      explanation: "In the past, 'I' takes 'Was'."
    },
    {
      question: "Which 'Be' verb matches 'They' in the Past?",
      options: ["Was", "Were", "Are", "Been"],
      correctAnswer: 1,
      explanation: "Plural subjects take 'Were' in the past."
    },
    {
      question: "What is the Future form of the 'Be' verb for ALL subjects?",
      options: ["Will is", "Will are", "Will be", "Shall is"],
      correctAnswer: 2,
      explanation: "Future 'Be' is always 'Will be' (I will be, they will be)."
    },
    {
      question: "Past form of 'Be' for 'She'?",
      options: ["Is", "Was", "Were", "Am"],
      correctAnswer: 1,
      explanation: "She was."
    },
    {
      question: "Past form of 'Be' for 'You'?",
      options: ["Was", "Were", "Are", "Been"],
      correctAnswer: 1,
      explanation: "You were (remember 'You' follows plural rules!)."
    },
    {
      question: "Is 'They was' grammatically correct?",
      options: ["Yes", "No"],
      correctAnswer: 1,
      explanation: "No! 'They' is plural and needs 'Were' in the past."
    },
    {
      question: "Is 'I is' grammatically correct?",
      options: ["Yes", "No"],
      correctAnswer: 1,
      explanation: "No! 'I' needs 'Am' in the present."
    },
    {
      question: "Which 'Be' verb fits 'Ram and Shyam' in the present?",
      options: ["Is", "Are", "Am", "Was"],
      correctAnswer: 1,
      explanation: "Since there are two people, it's plural (Are)."
    },
    {
      question: "What is the base form of am/is/are?",
      options: ["Been", "Be", "Being", "Was"],
      correctAnswer: 1,
      explanation: "'Be' is the root base form."
    },
    {
      question: "Helping verb for 'It' in the future?",
      options: ["Will be", "Is", "Was", "Are"],
      correctAnswer: 0,
      explanation: "It will be."
    },
    {
      question: "Which 'Be' verbs are for singular (excluding 'You') in the past?",
      options: ["Was", "Were", "Are", "Am"],
      correctAnswer: 0,
      explanation: "I, He, She, It, Ram all take 'Was'."
    },
    {
      question: "How many Present 'Be' verbs are there?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      explanation: "Three: Am, Is, Are."
    },
    {
      question: "Which 'Be' verb is used with 'We' in the past?",
      options: ["Was", "Were", "Are", "Am"],
      correctAnswer: 1,
      explanation: "'We' is plural, so it takes 'Were'."
    },
    {
      question: "In the sentence 'I ___ a student', the missing present 'be' verb is:",
      options: ["Is", "Are", "Am", "Was"],
      correctAnswer: 2,
      explanation: "I am."
    },
    {
      question: "Which form of 'Be' is used for plural subjects in the present?",
      options: ["Is", "Am", "Are", "Was"],
      correctAnswer: 2,
      explanation: "Are is for We/You/They."
    },
    {
      question: "Can 'Is' be used with 'They'?",
      options: ["Yes", "No"],
      correctAnswer: 1,
      explanation: "No, 'They' requires 'Are' (Present) or 'Were' (Past)."
    },
    {
      question: "Which 'Be' verb matches 'It' in the past?",
      options: ["Was", "Were", "Is", "Am"],
      correctAnswer: 0,
      explanation: "It was."
    },

    // --- 2.4 The 4 Faces of a Verb (V1-V4) (61-80) ---
    {
      question: "What is 'V1'?",
      options: ["Past Form", "Base Form", "Participle", "ING Form"],
      correctAnswer: 1,
      explanation: "V1 is the base or root form of the verb."
    },
    {
      question: "What is 'V2'?",
      options: ["Base Form", "Past Form", "Participle", "ING Form"],
      correctAnswer: 1,
      explanation: "V2 is the past form (e.g., went, ate)."
    },
    {
      question: "What is 'V3'?",
      options: ["Past Form", "Participle Form", "Base Form", "Continuous Form"],
      correctAnswer: 1,
      explanation: "V3 is the past participle (e.g., gone, eaten)."
    },
    {
      question: "What is 'V4'?",
      options: ["Base Form", "Past Form", "ING Form", "Perfect Form"],
      correctAnswer: 2,
      explanation: "V4 is the continuous or progressive -ing form."
    },
    {
      question: "Which verb form is used ONLY for Simple Past Affirmative?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 1,
      explanation: "V2 is the special face for simple past positive sentences."
    },
    {
      question: "Which verb form is used in ALL Perfect tenses?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 2,
      explanation: "V3 (Participle) is the partner for all Perfect tenses."
    },
    {
      question: "Which verb form is used in ALL Continuous tenses?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 3,
      explanation: "V4 (ING) shows ongoing actions."
    },
    {
      question: "Which verb form is used after Modal verbs (will, can, should)?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 0,
      explanation: "Modals always take the base V1 form."
    },
    {
      question: "If 'Eat' is V1, what is V2?",
      options: ["Eats", "Eating", "Ate", "Eaten"],
      correctAnswer: 2,
      explanation: "Eat-Ate."
    },
    {
      question: "If 'Eat' is V1, what is V3?",
      options: ["Ate", "Eating", "Eaten", "Eats"],
      correctAnswer: 2,
      explanation: "Eat-Ate-Eaten."
    },
    {
      question: "If 'Go' is V1, what is V4?",
      options: ["Went", "Gone", "Goes", "Going"],
      correctAnswer: 3,
      explanation: "Go-Going."
    },
    {
      question: "V3 is used in Passive Voice sentences.",
      options: ["True", "False"],
      correctAnswer: 0,
      explanation: "Yes, passive voice always uses the V3 form."
    },
    {
      question: "Which form needs a 'Be' helper (am/is/was)?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 3,
      explanation: "V4 (-ing) usually needs a 'Be' helping verb."
    },
    {
      question: "Which form needs a 'Have/Has' helper?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 2,
      explanation: "V3 (Participle) needs a 'Have' helping verb in perfect tenses."
    },
    {
      question: "What is V2 of 'Play'?",
      options: ["Play", "Played", "Playing", "Plays"],
      correctAnswer: 1,
      explanation: "Regular verbs add -ed to form V2."
    },
    {
      question: "What is V3 of 'Play'?",
      options: ["Play", "Played", "Playing", "Plays"],
      correctAnswer: 1,
      explanation: "For regular verbs, V2 and V3 are usually identical."
    },
    {
      question: "Which form is the 'Root' of the verb?",
      options: ["V1", "V2", "V3", "V4"],
      correctAnswer: 0,
      explanation: "V1 is the original root."
    },
    {
      question: "V2 of 'Write'?",
      options: ["Wrote", "Written", "Writing", "Write"],
      correctAnswer: 0,
      explanation: "Write-Wrote."
    },
    {
      question: "V3 of 'Write'?",
      options: ["Wrote", "Written", "Writing", "Write"],
      correctAnswer: 1,
      explanation: "Write-Wrote-Written."
    },
    {
      question: "Can V2 be used with a Helping Verb?",
      options: ["Yes", "No"],
      correctAnswer: 1,
      explanation: "No, V2 is a 'lone wolf' used only in Simple Past Affirmative without auxiliaries."
    },

    // --- 2.5 Irregular Verb Families (81-95) ---
    {
      question: "What is the 'A-A-A' family called?",
      options: ["The Twins", "The Stables", "The Trinity", "The Root"],
      correctAnswer: 1,
      explanation: "Stables are verbs where all forms are identical."
    },
    {
      question: "Which of these is a 'Stable' (A-A-A)?",
      options: ["Go", "Eat", "Cut", "Buy"],
      correctAnswer: 2,
      explanation: "Cut-Cut-Cut."
    },
    {
      question: "In 'The Twins' (A-B-B) family, which forms are identical?",
      options: ["V1 and V2", "V2 and V3", "V1 and V3", "All three"],
      correctAnswer: 1,
      explanation: "In A-B-B, the Past (V2) and Participle (V3) are the same."
    },
    {
      question: "Which of these is a 'Twin' (A-B-B)?",
      options: ["Go", "Buy", "Cut", "Write"],
      correctAnswer: 1,
      explanation: "Buy-Bought-Bought."
    },
    {
      question: "What is 'The Trinity' (A-B-C) family?",
      options: ["Forms are all the same", "Two forms are the same", "All three forms are different", "No forms exist"],
      correctAnswer: 2,
      explanation: "A-B-C verbs have unique V1, V2, and V3 forms."
    },
    {
      question: "Which of these is a 'Trinity' (A-B-C)?",
      options: ["Put", "Keep", "Go", "Hit"],
      correctAnswer: 2,
      explanation: "Go-Went-Gone."
    },
    {
      question: "V1, V2, and V3 of 'Read'?",
      options: ["Read-Read-Read", "Read-Red-Red", "Read-Road-Read", "Read-Ready-Read"],
      correctAnswer: 0,
      explanation: "Spelling stays the same (Stable), but the sound changes to 'red' in V2 and V3!"
    },
    {
      question: "V1, V2, and V3 of 'Teach'?",
      options: ["Teach-Taught-Taught", "Teach-Teached-Teached", "Teach-Taughten-Taughten", "Teach-Teach-Teach"],
      correctAnswer: 0,
      explanation: "Teach is a Twin (A-B-B)."
    },
    {
      question: "V1, V2, and V3 of 'Eat'?",
      options: ["Eat-Eat-Eat", "Eat-Ate-Ate", "Eat-Ate-Eaten", "Eat-Eaten-Eaten"],
      correctAnswer: 2,
      explanation: "Eat is a Trinity (A-B-C)."
    },
    {
      question: "Which family does 'Put' belong to?",
      options: ["Stables", "Twins", "Trinity", "Regular"],
      correctAnswer: 0,
      explanation: "Put-Put-Put."
    },
    {
      question: "Which family does 'Keep' belong to?",
      options: ["Stables", "Twins", "Trinity", "Regular"],
      correctAnswer: 1,
      explanation: "Keep-Kept-Kept."
    },
    {
      question: "Which family does 'Write' belong to?",
      options: ["Stables", "Twins", "Trinity", "Regular"],
      correctAnswer: 2,
      explanation: "Write-Wrote-Written."
    },
    {
      question: "What is the V3 of 'Gone'?",
      options: ["Go", "Went", "Gone", "Going"],
      correctAnswer: 2,
      explanation: "Gone is the V3 of Go."
    },
    {
      question: "What is the V2 of 'Bought'?",
      options: ["Buy", "Bought", "Buying", "Buys"],
      correctAnswer: 1,
      explanation: "Bought is the V2 of Buy."
    },
    {
      question: "What happens to 'y' in V2 of regular verbs like 'Study'?",
      options: ["Add -ed", "Change y to i, add -ed", "Stay the same", "Add -ing"],
      correctAnswer: 1,
      explanation: "Study-Studied (Consonant + Y rule)."
    },

    // --- Mastery / Mixed / New Questions to hit 100 (96-100) ---
    {
      question: "V3 of 'Sing'?",
      options: ["Sing", "Sang", "Sung", "Singing"],
      correctAnswer: 2,
      explanation: "Sing (V1), Sang (V2), Sung (V3). It is a Trinity verb."
    },
    {
      question: "V2 of 'Run'?",
      options: ["Run", "Ran", "Runned", "Running"],
      correctAnswer: 1,
      explanation: "Run (V1), Ran (V2), Run (V3). Special family where V1 and V3 match!"
    },
    {
      question: "In the sentence 'Birds fly in the sky', what is the 'Rest' (R)?",
      options: ["Birds", "Fly", "In the sky", "There is no rest"],
      correctAnswer: 2,
      explanation: "'In the sky' provides the additional detail/location (Rest)."
    },
    {
      question: "Is 'You was' ever correct in formal English grammar?",
      options: ["Yes", "No"],
      correctAnswer: 1,
      explanation: "No, 'You' always takes plural 'were' in the past."
    },
    {
      question: "Which 'Be' verb matches ALL subjects in the future?",
      options: ["Will is", "Will are", "Will be", "Shall are"],
      correctAnswer: 2,
      explanation: "It is always 'Will be' for Future state of being."
    }
  ]
};

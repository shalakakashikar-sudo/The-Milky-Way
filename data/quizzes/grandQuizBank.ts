import { QuizQuestion } from '../../types';

export const grandQuizBank: QuizQuestion[] = [
  // --- FUNDAMENTAL LOGIC (1-15) ---
  {
    question: "In the 'Golden Formula' of grammar, what two components create a Tense?",
    options: ["Subject + Object", "Time + Work (Aspect)", "Noun + Adjective", "Prefix + Suffix"],
    correctAnswer: 1,
    explanation: "Tense is a coordinate of When (Time) and How much progress (Aspect)."
  },
  {
    question: "Which aspect is used to describe a general fact or a repeating routine?",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 0,
    explanation: "Simple tenses provide a 'wide shot' view of facts and habits."
  },
  {
    question: "Which aspect describes an action as an ongoing process or 'video'?",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 1,
    explanation: "Continuous aspect focuses on the action in motion."
  },
  {
    question: "Which aspect focuses on the finished result or experience?",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 2,
    explanation: "Perfect tenses are like 'photographs' of completed work."
  },
  {
    question: "Which aspect highlights how long an action has been persisting?",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 3,
    explanation: "Perfect Continuous is the aspect of duration."
  },
  {
    question: "How many total tense combinations exist in the standard English matrix?",
    options: ["3", "4", "9", "12"],
    correctAnswer: 3,
    explanation: "3 Times (Past, Present, Future) x 4 Aspects = 12 Tenses."
  },
  {
    question: "A universal truth like 'Honey is sweet' belongs to which Time epoch?",
    options: ["Past", "Present", "Future", "None"],
    correctAnswer: 1,
    explanation: "Timeless facts use the Present time frame."
  },
  {
    question: "Which Time frame handles 'intent and probability'?",
    options: ["Past", "Present", "Future", "Static"],
    correctAnswer: 2,
    explanation: "Future tenses deal with what we plan or predict."
  },
  {
    question: "The 'Aspect' of a verb tells us about its:",
    options: ["Time", "State of completion or progress", "Subject", "Difficulty"],
    correctAnswer: 1,
    explanation: "Aspect describes the nature of the 'Work' being done."
  },
  {
    question: "Which Time epoch represents any moment before 'now'?",
    options: ["Past", "Present", "Future", "Indefinite"],
    correctAnswer: 0,
    explanation: "The Past handles everything that has already occurred."
  },
  {
    question: "If an action is 'temporary' and happening right now, use the:",
    options: ["Simple Aspect", "Continuous Aspect", "Perfect Aspect", "Future Aspect"],
    correctAnswer: 1,
    explanation: "Continuous implies a process that hasn't finished yet."
  },
  {
    question: "Which aspect bridges a past starting point to the current moment?",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 3,
    explanation: "Perfect Continuous tracks the action's persistence from then to now."
  },
  {
    question: "A routine like 'I brush my teeth daily' is expressed with which aspect?",
    options: ["Simple", "Continuous", "Perfect", "Indefinite Continuous"],
    correctAnswer: 0,
    explanation: "Repeating habits are the core of Simple tenses."
  },
  {
    question: "The 'Time-Keeper' role in a sentence is played by:",
    options: ["The Subject", "The Helping Verb (Auxiliary)", "The Object", "The Noun"],
    correctAnswer: 1,
    explanation: "Auxiliaries like 'was' or 'will' mark the time."
  },
  {
    question: "What does the vertical axis of the Tense Matrix represent?",
    options: ["Time", "Subject", "Work / Aspect", "Punctuation"],
    correctAnswer: 2,
    explanation: "The vertical axis defines the nature of the work (Simple, Perfect, etc.)."
  },

  // --- SENTENCE ARCHITECTURE (16-35) ---
  {
    question: "What is the standard blueprint for an English thought?",
    options: ["V-O-S", "S-V-O-R", "R-O-V-S", "O-S-V"],
    correctAnswer: 1,
    explanation: "Subject + Verb + Object + Rest is the golden sequence."
  },
  {
    question: "In the sentence 'Dr. Moo grazes on grass', 'Dr. Moo' is the:",
    options: ["Subject", "Object", "Verb", "Adverb"],
    correctAnswer: 0,
    explanation: "Dr. Moo is the hero or doer of the action."
  },
  {
    question: "In 'The cows are eating hay', what is the Helping Verb?",
    options: ["The", "Cows", "Are", "Eating"],
    correctAnswer: 2,
    explanation: "'Are' is the auxiliary that helps form the continuous tense."
  },
  {
    question: "Which subject pronoun always follows plural verb rules?",
    options: ["I", "You", "He", "It"],
    correctAnswer: 1,
    explanation: "'You' is always treated as plural (You are, You were)."
  },
  {
    question: "Identify the 3rd person singular pronoun.",
    options: ["We", "They", "It", "I"],
    correctAnswer: 2,
    explanation: "He, She, and It are 3rd person singular."
  },
  {
    question: "Which verb form (V1-V4) is used ONLY for Simple Past Affirmative?",
    options: ["V1", "V2", "V3", "V4"],
    correctAnswer: 1,
    explanation: "V2 (e.g., 'went') is the exclusive past face."
  },
  {
    question: "Which verb form is used in all Perfect tenses?",
    options: ["V1", "V2", "V3", "V4"],
    correctAnswer: 2,
    explanation: "V3 (Past Participle) is the partner for Perfect tenses."
  },
  {
    question: "Which verb form is used in all Continuous tenses?",
    options: ["V1", "V2", "V3", "V4"],
    correctAnswer: 3,
    explanation: "V4 (the -ing form) shows ongoing progress."
  },
  {
    question: "The verb family 'Cut - Cut - Cut' is known as:",
    options: ["The Twins", "The Stables", "The Trinity", "The Regulars"],
    correctAnswer: 1,
    explanation: "Stables stay the same in V1, V2, and V3."
  },
  {
    question: "The verb family 'Buy - Bought - Bought' is known as:",
    options: ["The Twins", "The Stables", "The Trinity", "The Regulars"],
    correctAnswer: 0,
    explanation: "Twins have identical V2 and V3 forms."
  },
  {
    question: "The verb family 'Go - Went - Gone' is known as:",
    options: ["The Twins", "The Stables", "The Trinity", "The Regulars"],
    correctAnswer: 2,
    explanation: "Trinity verbs have three distinct forms."
  },
  {
    question: "After modal verbs (can, will, should), we always use:",
    options: ["V1 (Base)", "V2", "V3", "V4"],
    correctAnswer: 0,
    explanation: "Modals are followed by the root verb."
  },
  {
    question: "In the sentence 'I have seen him', what is 'seen'?",
    options: ["V1", "V2", "V3", "V4"],
    correctAnswer: 2,
    explanation: "It is the V3 Participle used with 'have'."
  },
  {
    question: "Which 'Be' verb matches 'They' in the past?",
    options: ["Was", "Were", "Are", "Been"],
    correctAnswer: 1,
    explanation: "They were."
  },
  {
    question: "Which 'Be' verb matches 'I' in the past?",
    options: ["Am", "Was", "Were", "Wasn't"],
    correctAnswer: 1,
    explanation: "I was."
  },
  {
    question: "Which 'Be' verb matches 'She' in the present?",
    options: ["Am", "Is", "Are", "Was"],
    correctAnswer: 1,
    explanation: "She is."
  },
  {
    question: "Which 'Be' verb matches 'You' in the present?",
    options: ["Am", "Is", "Are", "Were"],
    correctAnswer: 2,
    explanation: "You are."
  },
  {
    question: "What is the future form of 'Be' for all subjects?",
    options: ["Will is", "Will are", "Will be", "Shall been"],
    correctAnswer: 2,
    explanation: "Future state of being is 'will be'."
  },
  {
    question: "In 'Ram plays cricket', 'cricket' is the:",
    options: ["Subject", "Verb", "Object", "Rest"],
    correctAnswer: 2,
    explanation: "It is the receiver of the action 'plays'."
  },
  {
    question: "V4 is created by adding ___ to the base verb.",
    options: ["-ed", "-s", "-ing", "-en"],
    correctAnswer: 2,
    explanation: "V1 + ing = V4."
  },

  // --- PRESENT TENSE MASTERY (36-60) ---
  {
    question: "Simple Present: What happens to 'Go' for the subject 'He'?",
    options: ["Gos", "Goes", "Going", "Gone"],
    correctAnswer: 1,
    explanation: "Verbs ending in 'o' add -es."
  },
  {
    question: "What does the 'Does' helper do to the main verb in a negative sentence?",
    options: ["Adds -s", "Pulls the -s away", "Changes it to V2", "Nothing"],
    correctAnswer: 1,
    explanation: "After 'does', the main verb returns to V1 (base form)."
  },
  {
    question: "Identify the correct negative: 'She ___ like coffee.'",
    options: ["don't", "doesn't", "no", "not"],
    correctAnswer: 1,
    explanation: "3rd person singular needs 'does not'."
  },
  {
    question: "Which marker indicates Simple Present?",
    options: ["Right now", "Usually", "Just", "Yesterday"],
    correctAnswer: 1,
    explanation: "Frequency adverbs signal habits."
  },
  {
    question: "Present Continuous: 'Look! The bird ___.'",
    options: ["fly", "flies", "is flying", "has flown"],
    correctAnswer: 2,
    explanation: "Action happening at the moment of speaking."
  },
  {
    question: "If you use 'always' with Present Continuous, it often expresses:",
    options: ["A simple fact", "An annoyed complaint", "A future goal", "A mystery"],
    correctAnswer: 1,
    explanation: "e.g., 'You are always losing your keys!'"
  },
  {
    question: "Can Present Continuous describe the future?",
    options: ["No", "Yes, for fixed Arrangements", "Only for weather", "Only for cows"],
    correctAnswer: 1,
    explanation: "e.g., 'I am meeting her at 5'."
  },
  {
    question: "Present Perfect: 'I ___ seen that movie.'",
    options: ["am", "do", "have", "has"],
    correctAnswer: 2,
    explanation: "I have + V3."
  },
  {
    question: "What is the V3 of 'Eat'?",
    options: ["Eat", "Ate", "Eaten", "Eating"],
    correctAnswer: 2,
    explanation: "Eat-Ate-Eaten."
  },
  {
    question: "'She has BEEN to London' implies:",
    options: ["She is still there", "She went and returned", "She never went", "She is lost"],
    correctAnswer: 1,
    explanation: "'Been' shows a completed round trip."
  },
  {
    question: "'She has GONE to London' implies:",
    options: ["She returned", "She is still there or on her way", "She hated it", "She is home"],
    correctAnswer: 1,
    explanation: "'Gone' shows the action hasn't finished its return."
  },
  {
    question: "Identify the mistake: 'I have seen him yesterday.'",
    options: ["Seen should be saw", "Have should be has", "Yesterday cannot be used with have seen", "No mistake"],
    correctAnswer: 2,
    explanation: "Present Perfect cannot have a specific past time marker."
  },
  {
    question: "Present Perfect Continuous focus is:",
    options: ["Result", "Habit", "Duration up to now", "Instant choice"],
    correctAnswer: 2,
    explanation: "It tracks how long an action has lasted."
  },
  {
    question: "'I have been studying ___ 2 hours.'",
    options: ["since", "for", "at", "during"],
    correctAnswer: 1,
    explanation: "'For' is used for lengths of time."
  },
  {
    question: "'I have been studying ___ 10 AM.'",
    options: ["since", "for", "from", "by"],
    correctAnswer: 0,
    explanation: "'Since' marks the specific starting point."
  },
  {
    question: "The 'Been' bridge is used in which aspect?",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 3,
    explanation: "It links 'have' to the continuous '-ing' verb."
  },
  {
    question: "What is the negative structure for Present Perfect Continuous?",
    options: ["S + not have been + V4", "S + have not been + V4", "S + have been not + V4", "S + don't have been + V4"],
    correctAnswer: 1,
    explanation: "The 'not' sits after the first helping verb."
  },
  {
    question: "Which tense describes 'Water boils at 100°C'?",
    options: ["Simple Present", "Present Continuous", "Present Perfect", "Future"],
    correctAnswer: 0,
    explanation: "Scientific facts use Simple Present."
  },
  {
    question: "How do you change 'Study' for 'He' in Simple Present?",
    options: ["Studys", "Studies", "Studying", "Studied"],
    correctAnswer: 1,
    explanation: "Consonant + Y changes to -ies."
  },
  {
    question: "V4 of 'Run' is spelled:",
    options: ["Runing", "Running", "Runed", "Runs"],
    correctAnswer: 1,
    explanation: "C-V-C pattern doubles the consonant."
  },
  {
    question: "V4 of 'Write' is spelled:",
    options: ["Writeing", "Writing", "Written", "Writes"],
    correctAnswer: 1,
    explanation: "Drop the 'e' before adding -ing."
  },
  {
    question: "Which marker signals Present Perfect?",
    options: ["Usually", "Daily", "Already", "Tomorrow"],
    correctAnswer: 2,
    explanation: "'Already', 'Yet', 'Just' signal a result."
  },
  {
    question: "In Simple Present questions, 'You' uses which helper?",
    options: ["Do", "Does", "Are", "Have"],
    correctAnswer: 0,
    explanation: "Do you...?"
  },
  {
    question: "In Simple Present questions, 'Ram' uses which helper?",
    options: ["Do", "Does", "Is", "Has"],
    correctAnswer: 1,
    explanation: "Does Ram...?"
  },
  {
    question: "Identify the tense: 'I am reading a book this week.'",
    options: ["Simple Present", "Present Continuous", "Present Perfect", "Present Perfect Continuous"],
    correctAnswer: 1,
    explanation: "Temporary ongoing action."
  },

  // --- PAST TENSE MASTERY (61-85) ---
  {
    question: "What is the nickname for Past Perfect?",
    options: ["Past of the Present", "Past of the Past", "Future Past", "Daily Past"],
    correctAnswer: 1,
    explanation: "It happens before another past event."
  },
  {
    question: "What does the 'Did' helper do in a negative past sentence?",
    options: ["Pulls past charge away from main verb", "Makes it plural", "Adds -ed", "Nothing"],
    correctAnswer: 0,
    explanation: "Verb returns to V1 base form after 'did'."
  },
  {
    question: "Correct this: 'I didn't saw him.'",
    options: ["I didn't seen him.", "I didn't see him.", "I not saw him.", "I didn't saw."],
    correctAnswer: 1,
    explanation: "Use V1 'see' after 'didn't'."
  },
  {
    question: "Which connector often introduces a sudden past interruption?",
    options: ["While", "When", "Since", "By"],
    correctAnswer: 1,
    explanation: "When + Simple Past 'snap'."
  },
  {
    question: "Which connector is best for two parallel long past actions?",
    options: ["When", "While", "Already", "Until"],
    correctAnswer: 1,
    explanation: "While + Continuous process."
  },
  {
    question: "Past Continuous: 'We ___ eating when the bell rang.'",
    options: ["was", "were", "are", "have"],
    correctAnswer: 1,
    explanation: "We were."
  },
  {
    question: "Identify the tense: 'I had already left when you called.'",
    options: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"],
    correctAnswer: 2,
    explanation: "Had + V3."
  },
  {
    question: "Which marker is a strong signal for Past Perfect?",
    options: ["Now", "Soon", "By the time", "Always"],
    correctAnswer: 2,
    explanation: "By the time Action 2 happened, Action 1 was done."
  },
  {
    question: "Past Perfect Continuous structure:",
    options: ["S + has been + V4", "S + had been + V4", "S + were + V4", "S + had + V3"],
    correctAnswer: 1,
    explanation: "Had been + -ing."
  },
  {
    question: "Which tense explains a past result through a past duration?",
    options: ["Simple Past", "Past Perfect", "Past Perfect Continuous", "Future Past"],
    correctAnswer: 2,
    explanation: "e.g., 'I was tired because I had been running'."
  },
  {
    question: "V2 of 'Eat'?",
    options: ["Eats", "Ate", "Eaten", "Eating"],
    correctAnswer: 1,
    explanation: "Ate."
  },
  {
    question: "V3 of 'Go'?",
    options: ["Went", "Going", "Gone", "Goes"],
    correctAnswer: 2,
    explanation: "Gone."
  },
  {
    question: "Is 'I was knowing him' correct?",
    options: ["Yes", "No, stative verbs avoid -ing", "Only for 2 years", "Always"],
    correctAnswer: 1,
    explanation: "Know is stative; don't use Continuous."
  },
  {
    question: "Which tense creates the 'Atmosphere' of a story?",
    options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
    correctAnswer: 1,
    explanation: "Continuous sets the background scene."
  },
  {
    question: "'The grass was wet because it ___ (rain).'",
    options: ["rained", "had been raining", "is raining", "was raining"],
    correctAnswer: 1,
    explanation: "Past duration causing a past state."
  },
  {
    question: "Correct the question: 'Did you ___ the cows?'",
    options: ["saw", "see", "seen", "seeing"],
    correctAnswer: 1,
    explanation: "Did + V1."
  },
  {
    question: "Identify the tense: 'I was sleeping at 10 PM last night.'",
    options: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"],
    correctAnswer: 1,
    explanation: "A snapshot of a past process."
  },
  {
    question: "Structure check: 'Had + V3' is:",
    options: ["Present Perfect", "Past Perfect", "Future Perfect", "Past Simple"],
    correctAnswer: 1,
    explanation: "Past of the Past."
  },
  {
    question: "V2 of 'Buy'?",
    options: ["Buys", "Buyed", "Bought", "Buying"],
    correctAnswer: 2,
    explanation: "Bought."
  },
  {
    question: "V3 of 'Drink'?",
    options: ["Drink", "Drank", "Drunk", "Drunken"],
    correctAnswer: 2,
    explanation: "Drink-Drank-Drunk."
  },
  {
    question: "Which tense shows who arrived FIRST?",
    options: ["Simple Past", "Past Continuous", "Past Perfect", "Future"],
    correctAnswer: 2,
    explanation: "Past Perfect sequences actions."
  },
  {
    question: "In 'I had eaten before I left', Action 2 is:",
    options: ["Had eaten", "Left", "Both", "Nowhere"],
    correctAnswer: 1,
    explanation: "Action 2 is the Simple Past 'left'."
  },
  {
    question: "V2 of 'Sing'?",
    options: ["Sing", "Sings", "Sang", "Sung"],
    correctAnswer: 2,
    explanation: "Sang."
  },
  {
    question: "V3 of 'Write'?",
    options: ["Write", "Wrote", "Written", "Writing"],
    correctAnswer: 2,
    explanation: "Written."
  },
  {
    question: "Does 'They were playing' mean they finished?",
    options: ["Yes", "No, it was in progress", "Only if it was yesterday", "Always"],
    correctAnswer: 1,
    explanation: "Continuous only shows progress, not completion."
  },

  // --- FUTURE TENSE MASTERY (86-110) ---
  {
    question: "Simple Future structure:",
    options: ["will + V1", "will be + V4", "will have + V3", "going to + V1"],
    correctAnswer: 0,
    explanation: "Will + root verb."
  },
  {
    question: "The 'Future-less' IF rule says:",
    options: ["Never use if", "Never use 'will' in the IF clause", "Always use 'will' after IF", "If is past"],
    correctAnswer: 1,
    explanation: "✗ If it will rain... → ✓ If it rains..."
  },
  {
    question: "Identify the usage: 'The phone is ringing. I will get it!'",
    options: ["Prior Plan", "Instant Decision", "Weak Prediction", "Promise"],
    correctAnswer: 1,
    explanation: "Deciding while speaking."
  },
  {
    question: "Identify the usage: 'I think it will snow.'",
    options: ["Strong proof", "Weak Prediction / Opinion", "Arrangement", "Habit"],
    correctAnswer: 1,
    explanation: "Opinions use 'will'."
  },
  {
    question: "When should you use 'Going to' instead of 'Will'?",
    options: ["Instant choice", "Prior Intention / Plan", "Official schedule", "Never"],
    correctAnswer: 1,
    explanation: "If you planned it before the talk."
  },
  {
    question: "Identify the usage: 'Look! He is going to fall!'",
    options: ["Opinion", "Prediction with present proof", "Fixed Arrangement", "Joke"],
    correctAnswer: 1,
    explanation: "You see the evidence now."
  },
  {
    question: "Future Continuous describes:",
    options: ["Completed future act", "Ongoing snapshot of the future", "Finished habit", "Universal law"],
    correctAnswer: 1,
    explanation: "It shows an action in progress later."
  },
  {
    question: "Which usage sounds softer/polite: 'Will you ___?'",
    options: ["stay", "be staying", "have stayed", "staying"],
    correctAnswer: 1,
    explanation: "Future Continuous is used for polite inquiries."
  },
  {
    question: "Future Perfect structure:",
    options: ["will + V3", "will have + V3", "will have been + V3", "will be + V3"],
    correctAnswer: 1,
    explanation: "Will have + Participle."
  },
  {
    question: "Which aspect focus is 'Future Deadline'?",
    options: ["Simple", "Continuous", "Perfect", "Indefinite"],
    correctAnswer: 2,
    explanation: "Future Perfect shows completion BY a time."
  },
  {
    question: "Future Perfect Continuous emphasis is:",
    options: ["The result", "The duration up to a future point", "A quick snap", "Past habit"],
    correctAnswer: 1,
    explanation: "It tracks the length of future effort."
  },
  {
    question: "Contraction of 'Will not'?",
    options: ["Willn't", "Won't", "Shan't", "Wouldn't"],
    correctAnswer: 1,
    explanation: "Won't."
  },
  {
    question: "'At 10 AM tomorrow, I ___ (work).'",
    options: ["will work", "will be working", "work", "will have worked"],
    correctAnswer: 1,
    explanation: "Snapshot of a future process."
  },
  {
    question: "'By 2030, I ___ (live) here for 10 years.'",
    options: ["will live", "will have been living", "am living", "will have live"],
    correctAnswer: 1,
    explanation: "Duration + point in the future."
  },
  {
    question: "In time clauses like 'As soon as he ___', we use Present Simple.",
    options: ["will arrive", "arrives", "arrived", "is arriving"],
    correctAnswer: 1,
    explanation: "No 'will' after 'as soon as'."
  },
  {
    question: "Is 'I will have eaten' finished or ongoing?",
    options: ["Finished by a future time", "Ongoing forever", "Finished in the past", "Spontaneous"],
    correctAnswer: 0,
    explanation: "It captures the finished result later."
  },
  {
    question: "V1, V2, V3 of 'Go'?",
    options: ["Go-Went-Gone", "Go-Gone-Gone", "Go-Went-Went", "Go-Goes-Gone"],
    correctAnswer: 0,
    explanation: "A Trinity verb."
  },
  {
    question: "Which form describes business as usual?",
    options: ["Simple Future", "Future Continuous", "Future Perfect", "Past Simple"],
    correctAnswer: 1,
    explanation: "Routine expected events use Continuous."
  },
  {
    question: "'Shall' is mostly used today for:",
    options: ["Daily acts", "Formal suggestions (Shall we?)", "All plural subjects", "Only past"],
    correctAnswer: 1,
    explanation: "Suggestions and legal contracts."
  },
  {
    question: "Identify the error: 'He will having lunch.'",
    options: ["Will should be is", "Having should be have", "He should be I", "No error"],
    correctAnswer: 1,
    explanation: "Will + V1 (have)."
  },
  {
    question: "Identify the error: 'I will have finish by 5.'",
    options: ["Finish should be finished", "Will should be shall", "By should be for", "No error"],
    correctAnswer: 0,
    explanation: "Perfect needs V3 (finished)."
  },
  {
    question: "Identify the error: 'If I will see her, I'll tell her.'",
    options: ["Will should be dropped", "Tell should be told", "I'll should be I", "No error"],
    correctAnswer: 0,
    explanation: "Remove 'will' from the IF clause."
  },
  {
    question: "V3 of 'Drink'?",
    options: ["Drink", "Drank", "Drunk", "Drinking"],
    correctAnswer: 2,
    explanation: "Drink-Drank-Drunk."
  },
  {
    question: "V2 of 'Eat'?",
    options: ["Eats", "Ate", "Eaten", "Eating"],
    correctAnswer: 1,
    explanation: "Ate."
  },
  {
    question: "Will vs Going To: Which is for evidence?",
    options: ["Will", "Going To", "Shall", "None"],
    correctAnswer: 1,
    explanation: "Going to + Evidence (The sky is dark)."
  },

  // --- ADVANCED & SPECIAL CONCEPTS (111-160) ---
  {
    question: "Since vs For: Which is a 'Starting Point'?",
    options: ["Since", "For", "By", "At"],
    correctAnswer: 0,
    explanation: "Since Monday, Since 2010."
  },
  {
    question: "Since vs For: Which is a 'Duration'?",
    options: ["Since", "For", "Until", "From"],
    correctAnswer: 1,
    explanation: "For 2 hours, For 5 years."
  },
  {
    question: "Is 'I have been waiting for all day' correct?",
    options: ["Yes", "No, drop 'for'", "No, drop 'been'", "No, use since"],
    correctAnswer: 1,
    explanation: "The 'All' exception: no preposition needed."
  },
  {
    question: "Sequence of Tenses: If the main verb is Past, the reported verb shifts:",
    options: ["Forward", "One step back in time", "To Future", "Doesn't change"],
    correctAnswer: 1,
    explanation: "The Backshift rule."
  },
  {
    question: "Exception to the Backshift rule:",
    options: ["Universal Truths", "Secret plans", "Daily news", "Lies"],
    correctAnswer: 0,
    explanation: "Facts that stay true don't move back."
  },
  {
    question: "Reported Speech: 'Now' becomes:",
    options: ["Then", "Today", "Before", "Later"],
    correctAnswer: 0,
    explanation: "Proximity shifts away."
  },
  {
    question: "Reported Speech: 'Will' becomes:",
    options: ["Shall", "Would", "Can", "Must"],
    correctAnswer: 1,
    explanation: "Backshift of 'will' is 'would'."
  },
  {
    question: "Say vs Tell: Which needs a personal object (listener)?",
    options: ["Say", "Tell", "Both", "Neither"],
    correctAnswer: 1,
    explanation: "He told ME (ME is the object)."
  },
  {
    question: "Conditional Type 0: 'If you heat ice, it ___.'",
    options: ["melt", "melts", "will melt", "melted"],
    correctAnswer: 1,
    explanation: "If + Pres, Pres (Scientific fact)."
  },
  {
    question: "Conditional Type 1: 'If it rains, I ___ stay home.'",
    options: ["would", "will", "did", "have"],
    correctAnswer: 1,
    explanation: "Real future possibility."
  },
  {
    question: "Conditional Type 2: 'If I ___ you, I'd go.'",
    options: ["was", "were", "am", "been"],
    correctAnswer: 1,
    explanation: "The subjunctive 'were' for all subjects."
  },
  {
    question: "Conditional Type 3: 'If I ___ studied, I would have passed.'",
    options: ["have", "did", "had", "would"],
    correctAnswer: 2,
    explanation: "Impossible past regret (Had + V3)."
  },
  {
    question: "Passive Voice mandatory formula:",
    options: ["Have + V3", "Be + V3", "Do + V1", "Will + V1"],
    correctAnswer: 1,
    explanation: "Be verb + Past Participle."
  },
  {
    question: "Passive of 'He eats an apple':",
    options: ["An apple is eaten.", "An apple was eaten.", "An apple eaten.", "An apple ate."],
    correctAnswer: 0,
    explanation: "is + V3."
  },
  {
    question: "Stative Verbs (like believe) rarely use:",
    options: ["V1", "V2", "Continuous (-ing) forms", "Past perfect"],
    correctAnswer: 2,
    explanation: "They describe stable states."
  },
  {
    question: "Why is 'I am having a car' wrong?",
    options: ["Have is too short", "Possession is a state, not an activity", "Cows don't have cars", "Wrong subject"],
    correctAnswer: 1,
    explanation: "Use 'I have'."
  },
  {
    question: "Which use of 'Think' is dynamic (action)?",
    options: ["I think you're right.", "I am thinking about the exam.", "Thinking is good.", "He thinks so."],
    correctAnswer: 1,
    explanation: "Mental processing is an action."
  },
  {
    question: "Dr. Moo's 'Temporary Be' rule: 'She is being rude' means:",
    options: ["She is always rude", "She is acting rude right now", "She was rude", "She will be rude"],
    correctAnswer: 1,
    explanation: "Temporary behavior vs personality."
  },
  {
    question: "Indirect Questions: 'Where is the barn?' becomes 'Do you know ___?'",
    options: ["where is the barn", "where the barn is", "where was the barn", "is where the barn"],
    correctAnswer: 1,
    explanation: "Verb moves to the end."
  },
  {
    question: "Indirect Questions: What happens to 'do/does/did'?",
    options: ["They stay same", "They are dropped", "They become 'that'", "Nothing"],
    correctAnswer: 1,
    explanation: "No auxiliaries in the indirect part."
  },
  {
    question: "'I knew it would rain' is an example of:",
    options: ["Simple Future", "Future in the Past", "Mixed Conditional", "Past Perfect"],
    correctAnswer: 1,
    explanation: "Looking forward from a past point."
  },
  {
    question: "Historical Present is used for:",
    options: ["Ancient books", "Dramatic storytelling / Jokes", "Predicting future", "Business reports"],
    correctAnswer: 1,
    explanation: "Making past events feel 'alive'."
  },
  {
    question: "Which bridge word is used for Yes/No indirect questions?",
    options: ["That", "If / Whether", "When", "What"],
    correctAnswer: 1,
    explanation: "I wonder IF/WHETHER she is coming."
  },
  {
    question: "Identify the mistake: 'I'd like to know what time is it.'",
    options: ["Time should be end", "Is should be at the end", "Know should be knowing", "No error"],
    correctAnswer: 1,
    explanation: "...what time it IS."
  },
  {
    question: "Which 'Switch-Hitter' verb means meeting/dating in Continuous?",
    options: ["Have", "See", "Think", "Feel"],
    correctAnswer: 1,
    explanation: "I am seeing Sara."
  },
  {
    question: "Report this: 'I am tired,' he said.",
    options: ["He said he is tired.", "He said he was tired.", "He told he was tired.", "He says he was tired."],
    correctAnswer: 1,
    explanation: "Shift 'is' to 'was'."
  },
  {
    question: "Reported 'Today' becomes:",
    options: ["That day", "Yesterday", "The next day", "Then"],
    correctAnswer: 0,
    explanation: "Update for context."
  },
  {
    question: "Conditional Type 2 is used for:",
    options: ["Facts", "Likely Future", "Unreal/Imaginary Present", "Regret"],
    correctAnswer: 2,
    explanation: "Dreams and hypotheticals."
  },
  {
    question: "Passive Voice focus is on the:",
    options: ["Doer", "Receiver (Object)", "Time", "Place"],
    correctAnswer: 1,
    explanation: "Highlighting the victim or target."
  },
  {
    question: "What is the V3 of 'Begin'?",
    options: ["Begin", "Began", "Begun", "Beginning"],
    correctAnswer: 2,
    explanation: "Begin-Began-Begun."
  },
  {
    question: "What is the V3 of 'Swim'?",
    options: ["Swim", "Swam", "Swum", "Swimming"],
    correctAnswer: 2,
    explanation: "Swim-Swam-Swum."
  },
  {
    question: "What is the V3 of 'Speak'?",
    options: ["Speak", "Spoke", "Spoken", "Speaks"],
    correctAnswer: 2,
    explanation: "Speak-Spoke-Spoken."
  },
  {
    question: "Which auxiliary is the 'did' magnet for Present?",
    options: ["Do/Does", "Has/Have", "Am/Is/Are", "Will"],
    correctAnswer: 0,
    explanation: "It pulls the -s/es away."
  },
  {
    question: "In reported speech, 'can' becomes:",
    options: ["could", "can be", "might", "would"],
    correctAnswer: 0,
    explanation: "Backshift of 'can'."
  },
  {
    question: "In reported speech, 'may' becomes:",
    options: ["might", "may be", "must", "could"],
    correctAnswer: 0,
    explanation: "Backshift of 'may'."
  },
  {
    question: "'He is tasting the soup' is:",
    options: ["Stative", "Action (Dynamic)", "Fact", "Mistake"],
    correctAnswer: 1,
    explanation: "Active testing of flavor is an action."
  },
  {
    question: "Identify the coordinate: (Past, Perfect)",
    options: ["I ate", "I was eating", "I had eaten", "I had been eating"],
    correctAnswer: 2,
    explanation: "Time: Past; Aspect: Perfect."
  },
  {
    question: "Identify the coordinate: (Present, Continuous)",
    options: ["I eat", "I am eating", "I have eaten", "I have been eating"],
    correctAnswer: 1,
    explanation: "Time: Present; Aspect: Continuous."
  },
  {
    question: "Identify the coordinate: (Future, Perfect)",
    options: ["I will eat", "I will be eating", "I will have eaten", "I will have been eating"],
    correctAnswer: 2,
    explanation: "Time: Future; Aspect: Perfect."
  },
  {
    question: "Which tense uses 'am/is/are + being + V3'?",
    options: ["Simple Present Passive", "Present Continuous Passive", "Present Perfect Passive", "Past Passive"],
    correctAnswer: 1,
    explanation: "Continuous Passive structure."
  },
  {
    question: "V3 of 'Break'?",
    options: ["Break", "Broke", "Broken", "Breaking"],
    correctAnswer: 2,
    explanation: "Break-Broke-Broken."
  },
  {
    question: "V3 of 'Know'?",
    options: ["Know", "Knew", "Known", "Knowing"],
    correctAnswer: 2,
    explanation: "Know-Knew-Known."
  },
  {
    question: "V3 of 'Fall'?",
    options: ["Fall", "Fell", "Fallen", "Falling"],
    correctAnswer: 2,
    explanation: "Fall-Fell-Fallen."
  },
  {
    question: "V3 of 'Take'?",
    options: ["Take", "Took", "Taken", "Taking"],
    correctAnswer: 2,
    explanation: "Take-Took-Taken."
  },
  {
    question: "V3 of 'Give'?",
    options: ["Give", "Gave", "Given", "Giving"],
    correctAnswer: 2,
    explanation: "Give-Gave-Given."
  },
  {
    question: "Which is more formal: 'I agree' or 'I am in agreement'?",
    options: ["I agree", "I am in agreement", "Both same", "Cows don't know"],
    correctAnswer: 1,
    explanation: "The noun form is more formal."
  },
  {
    question: "Passive of 'Who wrote this?':",
    options: ["By whom was this written?", "Who was this written?", "Written by who?", "Who wrote this by?"],
    correctAnswer: 0,
    explanation: "Standard formal passive question."
  },
  {
    question: "Is 'He has lived here since 10 years' correct?",
    options: ["Yes", "No, use 'for'", "No, use 'in'", "Always"],
    correctAnswer: 1,
    explanation: "Duration needs 'for'."
  },
  {
    question: "Is 'I have been here since morning' correct?",
    options: ["Yes", "No, use 'for'", "Only for cows", "Sometimes"],
    correctAnswer: 0,
    explanation: "Morning is a start point; 'since' is correct."
  },
  {
    question: "What does the 'S' in S-V-O stand for?",
    options: ["Sentence", "Subject", "Structure", "Suffix"],
    correctAnswer: 1,
    explanation: "The doer."
  },

  // --- MIXED MASTERY (161-200) ---
  {
    question: "Which tense uses 'had been + V4'?",
    options: ["Present Perfect Continuous", "Past Perfect Continuous", "Future Perfect Continuous", "Past Continuous"],
    correctAnswer: 1,
    explanation: "Past Epoch + Persistence Aspect."
  },
  {
    question: "Which tense uses 'will have + V3'?",
    options: ["Simple Future", "Future Continuous", "Future Perfect", "Present Perfect"],
    correctAnswer: 2,
    explanation: "Future Epoch + Result Aspect."
  },
  {
    question: "V2 of 'See'?",
    options: ["See", "Saw", "Seen", "Seeing"],
    correctAnswer: 1,
    explanation: "Saw."
  },
  {
    question: "V3 of 'See'?",
    options: ["See", "Saw", "Seen", "Seeing"],
    correctAnswer: 2,
    explanation: "Seen."
  },
  {
    question: "V2 of 'Do'?",
    options: ["Do", "Did", "Done", "Doing"],
    correctAnswer: 1,
    explanation: "Did."
  },
  {
    question: "V3 of 'Do'?",
    options: ["Do", "Did", "Done", "Doing"],
    correctAnswer: 2,
    explanation: "Done."
  },
  {
    question: "Which aspect is compared to a 'Snapshot'?",
    options: ["Simple", "Continuous", "Perfect", "Persistence"],
    correctAnswer: 1,
    explanation: "Continuous aspect shows a moment in time."
  },
  {
    question: "Which aspect is compared to a 'Wide Shot'?",
    options: ["Simple", "Continuous", "Perfect", "Persistence"],
    correctAnswer: 0,
    explanation: "Simple aspect shows the whole fact."
  },
  {
    question: "Which aspect is compared to a 'Finished Photo'?",
    options: ["Simple", "Continuous", "Perfect", "Persistence"],
    correctAnswer: 2,
    explanation: "Perfect aspect shows the end result."
  },
  {
    question: "Identify the mistake: 'I didn't went.'",
    options: ["did should be do", "went should be go", "I should be He", "No mistake"],
    correctAnswer: 1,
    explanation: "Did + V1."
  },
  {
    question: "Identify the mistake: 'They was playing.'",
    options: ["was should be were", "playing should be play", "They should be We", "No mistake"],
    correctAnswer: 0,
    explanation: "Plural subject needs 'were'."
  },
  {
    question: "Identify the mistake: 'He has saw the movie.'",
    options: ["has should be have", "saw should be seen", "movie should be movies", "No mistake"],
    correctAnswer: 1,
    explanation: "Perfect needs V3 (seen)."
  },
  {
    question: "Identify the mistake: 'If it will rain tomorrow...'",
    options: ["will should be dropped", "rain should be rains", "Both A and B", "No mistake"],
    correctAnswer: 2,
    explanation: "✗ If it will rain → ✓ If it rains."
  },
  {
    question: "Identify the mistake: 'She don't like coffee.'",
    options: ["don't should be doesn't", "like should be likes", "She should be I", "No mistake"],
    correctAnswer: 0,
    explanation: "She doesn't."
  },
  {
    question: "V3 of 'Bring'?",
    options: ["Bring", "Brang", "Brought", "Bringing"],
    correctAnswer: 2,
    explanation: "Bring-Brought-Brought."
  },
  {
    question: "V3 of 'Buy'?",
    options: ["Buy", "Bought", "Buying", "Buys"],
    correctAnswer: 1,
    explanation: "Buy-Bought-Bought."
  },
  {
    question: "V3 of 'Catch'?",
    options: ["Catch", "Catched", "Caught", "Catching"],
    correctAnswer: 2,
    explanation: "Catch-Caught-Caught."
  },
  {
    question: "V3 of 'Teach'?",
    options: ["Teach", "Teached", "Taught", "Teaching"],
    correctAnswer: 2,
    explanation: "Teach-Taught-Taught."
  },
  {
    question: "V3 of 'Think'?",
    options: ["Think", "Thinked", "Thought", "Thinking"],
    correctAnswer: 2,
    explanation: "Think-Thought-Thought."
  },
  {
    question: "If I'm tired because I've been running, this is:",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 3,
    explanation: "Duration up to now."
  },
  {
    question: "If I'm tired because I ran, this is:",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 0,
    explanation: "A past fact."
  },
  {
    question: "If I'm tired because I've seen a ghost, this is:",
    options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
    correctAnswer: 2,
    explanation: "A recent experience with a result."
  },
  {
    question: "V2 of 'Read'?",
    options: ["Read (sound like reed)", "Read (sound like red)", "Road", "Rude"],
    correctAnswer: 1,
    explanation: "Spelled same, sound changes."
  },
  {
    question: "V3 of 'Read'?",
    options: ["Read (sound like reed)", "Read (sound like red)", "Road", "Rude"],
    correctAnswer: 1,
    explanation: "Spelled same, sound changes."
  },
  {
    question: "Which helper is used for 'I' in the future?",
    options: ["Will", "Shall", "Both", "Am"],
    correctAnswer: 2,
    explanation: "Will is universal; Shall is formal."
  },
  {
    question: "Can 'You' ever use 'was'?",
    options: ["Yes, in stories", "No, always 'were'", "Only if singular", "Always"],
    correctAnswer: 1,
    explanation: "You were."
  },
  {
    question: "Can 'He' ever use 'were'?",
    options: ["No", "Yes, in Type 2 Conditionals", "Only if plural", "Always"],
    correctAnswer: 1,
    explanation: "Subjunctive mood: 'If he were...'"
  },
  {
    question: "Which coordinate is: (Past, Continuous)?",
    options: ["I ate", "I was eating", "I had eaten", "I have eaten"],
    correctAnswer: 1,
    explanation: "Time: Past; Aspect: Continuous."
  },
  {
    question: "Which coordinate is: (Future, Perfect)?",
    options: ["I will eat", "I will be eating", "I will have eaten", "I will have been eating"],
    correctAnswer: 2,
    explanation: "Time: Future; Aspect: Perfect."
  },
  {
    question: "Which coordinate is: (Present, Simple)?",
    options: ["I eat", "I am eating", "I have eaten", "I am eating"],
    correctAnswer: 0,
    explanation: "Time: Present; Aspect: Simple."
  },
  {
    question: "What is the 'root' of a verb?",
    options: ["V1", "V2", "V3", "V4"],
    correctAnswer: 0,
    explanation: "V1 is the base form."
  },
  {
    question: "Identify the usage: 'Suddenly, a cow enters.'",
    options: ["Habit", "Fact", "Historical Present (Dramatic)", "Future"],
    correctAnswer: 2,
    explanation: "Using Present for Past stories."
  },
  {
    question: "According to standard rules, which sentence follows correct Subject-Verb Agreement?",
    options: ["The cows grazes in the field.", "He go to school every day.", "She plays cricket on weekends.", "I is a student."],
    correctAnswer: 2,
    explanation: "3rd person singular (She) requires the +s form (plays)."
  },
  {
    question: "If you find a 'Yesterday' marker in a sentence describing a single finished fact, which verb form is required?",
    options: ["V1", "V2", "V3", "V4"],
    correctAnswer: 1,
    explanation: "Simple Past affirmative facts require V2 (e.g., 'I saw him yesterday')."
  },
  {
    question: "When a sentence emphasizes the 'Result' or 'Experience' above all else, which aspect coordinate should you choose?",
    options: ["Simple", "Continuous", "Perfect", "Persistent"],
    correctAnswer: 2,
    explanation: "The Perfect aspect captures the completed work and its lasting result."
  },
  {
    question: "In the architecture of any Continuous tense, which specific family of helping verbs must be present?",
    options: ["The Do family", "The Be family", "The Have family", "The Modal family"],
    correctAnswer: 1,
    explanation: "All continuous tenses (Present, Past, Future) require a form of 'Be' (am, is, was, etc.) followed by V4."
  },
  {
    question: "Is 'I am agree' correct?",
    options: ["Yes", "No, use 'I agree'", "Only if formal", "Always"],
    correctAnswer: 1,
    explanation: "Agree is a verb, not an adjective."
  },
  {
    question: "V4 of 'Die'?",
    options: ["Dieing", "Dying", "Died", "Dies"],
    correctAnswer: 1,
    explanation: "ie changes to y + ing."
  },
  {
    question: "V4 of 'Lie'?",
    options: ["Lieing", "Lying", "Lay", "Lied"],
    correctAnswer: 1,
    explanation: "ie changes to y + ing."
  },
  {
    question: "What keeps the communication train running smoothly?",
    options: ["Milk", "Tenses", "Grass", "The Barn"],
    correctAnswer: 1,
    explanation: "Tenses are the tracks for our messages!"
  },
  {
    question: "Final Mastery Check: Tense = Time + ___.",
    options: ["Work (Aspect)", "Subject", "Object", "Logic"],
    correctAnswer: 0,
    explanation: "The bedrock formula of the Milky Way."
  }
];

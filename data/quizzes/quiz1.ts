import { ModuleQuiz } from '../../types';

export const quiz1: ModuleQuiz = {
  moduleId: 1,
  questions: [
    {
      question: "What is the 'Golden Formula' for Tenses according to Dr. Moo?",
      options: ["Tense = Subject + Verb", "Tense = Time + Work (Aspect)", "Tense = Past + Future", "Tense = Noun + Adjective"],
      correctAnswer: 1,
      explanation: "Exactly! Tenses are the combination of Time (when it happened) and the Aspect/Work (how much is done)."
    },
    {
      question: "How many main 'Times' are there in English tenses?",
      options: ["2 (Past, Present)", "3 (Past, Present, Future)", "4 (Past, Present, Future, Future-Past)", "12"],
      correctAnswer: 1,
      explanation: "Right! We have the Past, the Present, and the Future."
    },
    {
      question: "In Dr. Moo's 'Aspect Lens', which aspect is compared to a 'Wide Shot'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "The Simple aspect is like a wide shot—it shows the general fact or routine without focusing on the process."
    },
    {
      question: "Which aspect is compared to a 'Video' because it shows progress?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "Continuous aspect shows actions in motion, just like a video recording!"
    },
    {
      question: "Which aspect is compared to a 'Photograph' because it shows a finished result?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "The Perfect aspect captures a completed moment with a result, like a still photo."
    },
    {
      question: "What does the 'Time Axis' on the Tense Compass help you locate?",
      options: ["The speed of the action", "The duration of the action", "The location on a timeline", "The importance of the action"],
      correctAnswer: 2,
      explanation: "The Time Axis tells us 'When'—Past, Present, or Future."
    },
    {
      question: "What does the 'Work' (Aspect) axis describe?",
      options: ["The difficulty of the task", "The nature or completeness of the action", "The person doing the work", "The place where work happens"],
      correctAnswer: 1,
      explanation: "Aspect tells us 'How' the work is being done—is it a fact, a process, or a result?"
    },
    {
      question: "Which 'Time' describes everything that happened before this second?",
      options: ["Past", "Present", "Future", "Indefinite"],
      correctAnswer: 0,
      explanation: "The Past covers every single moment that has already ticked by."
    },
    {
      question: "Which 'Time' includes 'Timeless' facts that are always true?",
      options: ["Past", "Present", "Future", "Continuous"],
      correctAnswer: 1,
      explanation: "Universal truths like 'The sun rises' live in the Present time."
    },
    {
      question: "How many total tenses are in the 'Celestial Tense Matrix'?",
      options: ["3", "4", "7", "12"],
      correctAnswer: 3,
      explanation: "3 Times multiplied by 4 Aspects gives us the 12 major tenses!"
    },
    {
      question: "Which aspect focus is on 'Routine, fact, or habit'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "Simple tenses are the bread and butter of routines and facts."
    },
    {
      question: "Which aspect focus is on 'The process and duration'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "Continuous (Progressive) tenses focus on the action while it is happening."
    },
    {
      question: "Which aspect focus is on 'The result or experience'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Perfect tenses tell us that something is 'finished' and we have the result now."
    },
    {
      question: "Which aspect focus is on 'How long the action has been going on'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "Perfect Continuous tenses are all about the persistence and duration of the work."
    },
    {
      question: "Which word is a common signal marker for 'Past' time?",
      options: ["Tomorrow", "Currently", "Yesterday", "Usually"],
      correctAnswer: 2,
      explanation: "'Yesterday' clearly points to a time before the present."
    },
    {
      question: "Which word is a common signal marker for 'Future' time?",
      options: ["Ago", "Next week", "Since", "Always"],
      correctAnswer: 1,
      explanation: "'Next week' is a destination on the timeline that hasn't arrived yet."
    },
    {
      question: "Which word is a common signal marker for 'Present' time?",
      options: ["Then", "Later", "Today", "Once upon a time"],
      correctAnswer: 2,
      explanation: "'Today' anchors the action in our current time frame."
    },
    {
      question: "The 'Simple' aspect is also sometimes called:",
      options: ["Indefinite", "Progressive", "Completed", "Persistent"],
      correctAnswer: 0,
      explanation: "'Indefinite' is the academic term for the Simple aspect."
    },
    {
      question: "The 'Continuous' aspect is also sometimes called:",
      options: ["Indefinite", "Progressive", "Perfect", "Static"],
      correctAnswer: 1,
      explanation: "'Progressive' indicates that the action is making progress (it's moving!)."
    },
    {
      question: "If an action is 'temporary', which aspect is likely being used?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "Continuous tenses often imply that an action is currently happening but will end."
    },
    {
      question: "Which aspect bridges the gap between starting point and the current moment?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "Perfect Continuous follows the trail of an action from its start to now."
    },
    {
      question: "According to Dr. Moo, the 'Window of Opportunity' for an action is closed in which time?",
      options: ["Past", "Present", "Future", "All of them"],
      correctAnswer: 0,
      explanation: "Once an action is in the Past, the 'window' to change it in that specific time is shut."
    },
    {
      question: "Which aspect focuses on the 'existence' of an action rather than its progress?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "Simple tenses state that an action exists (e.g., 'I eat')."
    },
    {
      question: "What is the primary goal of learning the 'Celestial Tense Matrix'?",
      options: ["To count to 12", "To memorize names", "To navigate the 'Milky Way' of English", "To write longer sentences"],
      correctAnswer: 2,
      explanation: "It's about having a map for every possible scenario in English communication."
    },
    {
      question: "'I have been eating for 10 mins' is an example of which aspect?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "It shows the duration (10 mins) and the persistence of the action."
    },
    {
      question: "Which aspect says: 'I'm full now'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "The Perfect aspect (e.g., 'I have eaten') focuses on the current result of a past act."
    },
    {
      question: "In the Tense Matrix, what happens when you combine 'Future' + 'Continuous'?",
      options: ["I eat", "I was eating", "I will be eating", "I have eaten"],
      correctAnswer: 2,
      explanation: "Future (will) + Continuous (be eating) = Future Continuous."
    },
    {
      question: "In the Tense Matrix, what happens when you combine 'Past' + 'Perfect'?",
      options: ["I eat", "I ate", "I had eaten", "I will have eaten"],
      correctAnswer: 2,
      explanation: "Past (had) + Perfect (eaten) = Past Perfect."
    },
    {
      question: "Which time handles 'intent, probability, and scheduling'?",
      options: ["Past", "Present", "Future", "Indefinite"],
      correctAnswer: 2,
      explanation: "The Future is the realm of what we plan or expect to happen."
    },
    {
      question: "Dr. Moo's Final Foundation Tip says: 'Tense = Time + ___'?",
      options: ["Verb", "Logic", "Work (Aspect)", "Formula"],
      correctAnswer: 2,
      explanation: "Always remember: Tense isn't just time; it's the quality of the work being done."
    },
    {
      question: "Which of these is NOT an aspect?",
      options: ["Simple", "Continuous", "Perfect", "Tomorrow"],
      correctAnswer: 3,
      explanation: "'Tomorrow' is a time marker, not an aspect of work."
    },
    {
      question: "True or False: Tenses are only about when an action happens.",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation: "False! They are also about the 'Work' or 'Aspect' (how the action happens)."
    },
    {
      question: "The 'State of Work' is another name for:",
      options: ["Tense", "Aspect", "Time", "Subject"],
      correctAnswer: 1,
      explanation: "Aspect specifically describes the state or nature of the action."
    },
    {
      question: "Which time is used for 'Universal truths'?",
      options: ["Past", "Present", "Future", "None"],
      correctAnswer: 1,
      explanation: "Facts that never change live in the Present time frame."
    },
    {
      question: "If I say 'I ate', I am using which aspect?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "This is a Simple/Indefinite past action."
    },
    {
      question: "If I say 'I will have eaten', I am using which aspect?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "This is the Future Perfect aspect."
    },
    {
      question: "What is the 'root' of every tense?",
      options: ["The Verb", "The Subject", "Time + Aspect", "The Object"],
      correctAnswer: 2,
      explanation: "Every tense coordinate is formed by intersecting a Time with an Aspect."
    },
    {
      question: "Which aspect focuses on a 'snapshot' of a moment in time?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "Continuous acts like a snapshot of an action in progress."
    },
    {
      question: "Which aspect focus is on 'Completion'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Perfect means 'Complete' in grammar logic."
    },
    {
      question: "Which time covers 'anything after this second'?",
      options: ["Past", "Present", "Future", "Routine"],
      correctAnswer: 2,
      explanation: "The Future is everything that has yet to happen."
    },
    {
      question: "If an action is 'Routine', which aspect should you use?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "Simple tenses are perfect for repeating habits."
    },
    {
      question: "A scientifically proven law (like gravity) usually uses:",
      options: ["Simple Past", "Simple Present", "Simple Future", "Present Perfect"],
      correctAnswer: 1,
      explanation: "Because it is a fact that is true 'Now' and always."
    },
    {
      question: "Which aspect should you use to show 'Persistence'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "Perfect Continuous shows the persistent effort over time."
    },
    {
      question: "The coordinate (Present, Perfect) results in which tense?",
      options: ["Simple Present", "Present Continuous", "Present Perfect", "Present Perfect Continuous"],
      correctAnswer: 2,
      explanation: "By combining the Time (Present) and Aspect (Perfect)."
    },
    {
      question: "The coordinate (Past, Continuous) results in which tense?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"],
      correctAnswer: 1,
      explanation: "By combining the Time (Past) and Aspect (Continuous)."
    },
    {
      question: "The coordinate (Future, Simple) results in which tense?",
      options: ["Simple Future", "Future Continuous", "Future Perfect", "Future Perfect Continuous"],
      correctAnswer: 0,
      explanation: "By combining the Time (Future) and Aspect (Simple)."
    },
    {
      question: "Which aspect focuses on the 'amount of work done'?",
      options: ["Time", "Aspect", "Subject", "Adverb"],
      correctAnswer: 1,
      explanation: "Aspect describes the nature and volume of the action's progress."
    },
    {
      question: "Dr. Moo's 'Compass' has how many main directions for Time?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      explanation: "Three directions: Past, Present, Future."
    },
    {
      question: "Dr. Moo's 'Compass' has how many main directions for Aspect (Work)?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 3,
      explanation: "Four directions: Simple, Continuous, Perfect, Perfect Continuous."
    },
    {
      question: "Which aspect is used in: 'I am dancing'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "It's a continuous process happening now."
    },
    {
      question: "Which aspect is used in: 'I dance daily'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "It's a routine/habit (Simple)."
    },
    {
      question: "Which aspect is used in: 'I have danced'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "It's a completed experience (Perfect)."
    },
    {
      question: "Which aspect is used in: 'I had been dancing'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "It's a duration in the past (Past Perfect Continuous)."
    },
    {
      question: "When we talk about a 'coordinate' in grammar, we mean:",
      options: ["The place of the action", "The intersection of Time and Aspect", "The subject's location", "The map of the Milky Way"],
      correctAnswer: 1,
      explanation: "A tense is defined by its Time and its Aspect."
    },
    {
      question: "Which time marker fits 'Present Perfect'?",
      options: ["Yesterday", "Already", "Tomorrow", "In 1990"],
      correctAnswer: 1,
      explanation: "'Already' signals a completed result relevant to the present."
    },
    {
      question: "Which time marker fits 'Simple Past'?",
      options: ["Now", "Soon", "Last year", "Always"],
      correctAnswer: 2,
      explanation: "'Last year' points to a finished time in the past."
    },
    {
      question: "Which time marker fits 'Simple Future'?",
      options: ["Ago", "Next month", "Currently", "Usually"],
      correctAnswer: 1,
      explanation: "'Next month' points to a time yet to come."
    },
    {
      question: "In the 'Video' metaphor, which aspect is being described?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "Videos show movement and progress (Continuous)."
    },
    {
      question: "In the 'Wide Shot' metaphor, which aspect is being described?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "Wide shots show the whole picture/fact (Simple)."
    },
    {
      question: "In the 'Photograph' metaphor, which aspect is being described?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Photographs show a completed result (Perfect)."
    },
    {
      question: "Which 'Work' type should you use to bridge past and present results?",
      options: ["Simple", "Continuous", "Perfect", "Indefinite"],
      correctAnswer: 2,
      explanation: "Perfect tenses are the bridge between 'Then' and 'Now'."
    },
    {
      question: "Which 'Work' type focuses on a continuing action with duration?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "Perfect Continuous tracks how long a process has lasted."
    },
    {
      question: "Which time deals with probability?",
      options: ["Past", "Present", "Future", "Continuous"],
      correctAnswer: 2,
      explanation: "We use the Future to talk about things we think might happen."
    },
    {
      question: "Which time handles official timetables?",
      options: ["Past", "Present", "Future", "None"],
      correctAnswer: 1,
      explanation: "Schedules often use the Present time frame (e.g., 'The train leaves at 5')."
    },
    {
      question: "Is 'Tense' the same as 'Time'?",
      options: ["Yes, exactly the same", "No, Tense includes Aspect too", "Only in the Past", "Only in the Present"],
      correctAnswer: 1,
      explanation: "Time is 'When', but Tense is 'When' + 'How' (Aspect)."
    },
    {
      question: "Which aspect implies an action is in progress?",
      options: ["Simple", "Continuous", "Perfect", "Indefinite"],
      correctAnswer: 1,
      explanation: "Continuous/Progressive is the aspect of movement."
    },
    {
      question: "Which aspect indicates a completed action with present relevance?",
      options: ["Simple", "Continuous", "Perfect", "Future"],
      correctAnswer: 2,
      explanation: "The Perfect aspect shows the 'perfection' or completion of the act."
    },
    {
      question: "Which aspect is best for life experiences (unspecified time)?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Perfect tenses are great for talking about what you 'have done' in your life."
    },
    {
      question: "Which aspect is used in: 'It has been raining'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "This describes the duration of the rain up to now."
    },
    {
      question: "Which aspect is used in: 'I drink milk'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 0,
      explanation: "A simple fact or habit."
    },
    {
      question: "Which aspect is used in: 'I am drinking milk'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 1,
      explanation: "An ongoing action (Continuous)."
    },
    {
      question: "Which aspect is used in: 'I have drunk milk'?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 2,
      explanation: "A completed action with a result (Perfect)."
    },
    {
      question: "Which coordinate represents the 'Bedrock of English'?",
      options: ["Subject + Object", "Time + Work", "Nouns + Verbs", "Past + Present"],
      correctAnswer: 1,
      explanation: "Time + Work (Aspect) is the fundamental formula."
    },
    {
      question: "In Dr. Moo's Compass, the axis that goes vertical is:",
      options: ["Time", "Work (Aspect)", "Subject", "Moo-mentum"],
      correctAnswer: 1,
      explanation: "The horizontal axis is Time, and the vertical axis is the quality of Work (Aspect)."
    },
    {
      question: "Which aspect is like a steady stream of water?",
      options: ["Simple", "Continuous", "Perfect", "Static"],
      correctAnswer: 1,
      explanation: "Continuous is fluid and ongoing."
    },
    {
      question: "Which aspect is like a single solid block?",
      options: ["Simple", "Continuous", "Perfect", "Fluid"],
      correctAnswer: 0,
      explanation: "Simple tenses represent solid facts or routines."
    },
    {
      question: "Which aspect indicates a finished journey?",
      options: ["Simple", "Continuous", "Perfect", "Progressive"],
      correctAnswer: 2,
      explanation: "Perfect aspect shows the end of the road for that action."
    },
    {
      question: "Which aspect describes a marathon that hasn't finished yet?",
      options: ["Simple", "Continuous", "Perfect", "Perfect Continuous"],
      correctAnswer: 3,
      explanation: "Perfect Continuous is about the long-term continuation of an action."
    },
    {
      question: "In the Celestial Matrix, (Future, Perfect) is:",
      options: ["I will eat", "I will be eating", "I will have eaten", "I will have been eating"],
      correctAnswer: 2,
      explanation: "By combining Future time with Perfect aspect."
    },
    {
      question: "In the Celestial Matrix, (Present, Simple) is:",
      options: ["I eat", "I am eating", "I have eaten", "I have been eating"],
      correctAnswer: 0,
      explanation: "By combining Present time with Simple aspect."
    },
    {
      question: "Which word best describes the 'Work' in: 'I eat'?",
      options: ["Routine", "Ongoing", "Completed", "Duration"],
      correctAnswer: 0,
      explanation: "Simple Present often focuses on routine."
    },
    {
      question: "Which word best describes the 'Work' in: 'I am eating'?",
      options: ["Routine", "Ongoing", "Completed", "Duration"],
      correctAnswer: 1,
      explanation: "Continuous aspect focus is on ongoing actions."
    },
    {
      question: "Which word best describes the 'Work' in: 'I have eaten'?",
      options: ["Routine", "Ongoing", "Completed", "Duration"],
      correctAnswer: 2,
      explanation: "Perfect aspect focus is on completion."
    },
    {
      question: "Which word best describes the 'Work' in: 'I have been eating'?",
      options: ["Routine", "Ongoing", "Completed", "Duration"],
      correctAnswer: 3,
      explanation: "Perfect Continuous focus is on duration."
    },
    {
      question: "Which Time frame is 'Before now'?",
      options: ["Past", "Present", "Future", "Never"],
      correctAnswer: 0,
      explanation: "The Past is everything that has already occurred."
    },
    {
      question: "Which Time frame is 'After now'?",
      options: ["Past", "Present", "Future", "Sometimes"],
      correctAnswer: 2,
      explanation: "The Future is everything that is yet to happen."
    },
    {
      question: "Which Time frame is 'Current'?",
      options: ["Past", "Present", "Future", "Always"],
      correctAnswer: 1,
      explanation: "The Present is the 'Now'."
    },
    {
      question: "Why does Dr. Moo call the matrix 'Celestial'?",
      options: ["Because it's in the sky", "Because it's as vast as the Milky Way", "Because cows love stars", "Because tenses are magic"],
      correctAnswer: 1,
      explanation: "The matrix maps out the vast 'Milky Way' of English grammar."
    },
    {
      question: "Which aspect should you use for a fact that is always true?",
      options: ["Simple", "Continuous", "Perfect", "Indefinite"],
      correctAnswer: 0,
      explanation: "Simple Present is the home for universal facts."
    },
    {
      question: "Which aspect shows the current state of an action started in the past?",
      options: ["Simple", "Continuous", "Perfect", "Future"],
      correctAnswer: 2,
      explanation: "Perfect tenses show how a past act affects the present."
    },
    {
      question: "Is 'I eat' the same as 'I am eating'?",
      options: ["Yes, they mean the same", "No, one is a habit, one is happening now", "Only in the morning", "Only if Dr. Moo says so"],
      correctAnswer: 1,
      explanation: "Aspect changes the meaning! 'I eat' is a habit; 'I am eating' is occurring right now."
    },
    {
      question: "Which 'Work' type is best for describing a story as it unfolds?",
      options: ["Simple", "Continuous", "Perfect", "Persistent"],
      correctAnswer: 1,
      explanation: "Continuous makes stories feel alive and moving."
    },
    {
      question: "Which 'Work' type is best for stating scientific laws?",
      options: ["Simple", "Continuous", "Perfect", "Future"],
      correctAnswer: 0,
      explanation: "Laws of nature are treated as simple, stable facts."
    },
    {
      question: "What is the 'How much' part of the Tense formula?",
      options: ["Time", "Aspect (Work)", "Subject", "Moo"],
      correctAnswer: 1,
      explanation: "Aspect defines the 'amount' or 'nature' of the action."
    },
    {
      question: "If I'm at the station waiting, I should use:",
      options: ["Simple", "Continuous", "Perfect", "Completed"],
      correctAnswer: 1,
      explanation: "Waiting is an ongoing process (Continuous)."
    },
    {
      question: "If I've finished my trip, I should use:",
      options: ["Simple", "Continuous", "Perfect", "Indefinite"],
      correctAnswer: 2,
      explanation: "Finished actions with results use the Perfect aspect."
    },
    {
      question: "A routine is:",
      options: ["Something you do once", "Something you do repeatedly", "Something you will do later", "Something you forgot to do"],
      correctAnswer: 1,
      explanation: "Repeated habits are routines."
    },
    {
      question: "Persistence refers to:",
      options: ["Giving up", "Starting a new task", "Continuing an action over time", "Finishing early"],
      correctAnswer: 2,
      explanation: "Persisting means keeping at it (Perfect Continuous)."
    },
    {
      question: "Which time marker is definitely FUTURE?",
      options: ["In 1999", "Yesterday", "Later today", "Currently"],
      correctAnswer: 2,
      explanation: "'Later' indicates a time that has not arrived yet."
    },
    {
      question: "If an action started in the past, is happening now, and you want to show how long it has lasted, you are using...",
      options: ["The Present Continuous", "The Present Perfect", "The Present Perfect Continuous", "The Simple Present"],
      correctAnswer: 2,
      explanation: "Exactly! Perfect Continuous is the aspect of persistence and duration."
    }
  ]
};
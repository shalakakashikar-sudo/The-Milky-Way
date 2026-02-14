import { ModuleQuiz } from '../../types';

export const quiz8: ModuleQuiz = {
  moduleId: 8,
  questions: [
    // 1-10: Error Correction (The Moo-stake Wall)
    { question: "Correct this: 'I am knowing the answer.'", options: ["I know the answer.", "I known the answer.", "I have knowing the answer.", "No correction needed."], correctAnswer: 0, explanation: "'Know' is a stative verb and shouldn't use the continuous form." },
    { question: "Correct this: 'She is having a car.'", options: ["She have a car.", "She has a car.", "She had having a car.", "No correction needed."], correctAnswer: 1, explanation: "'Have' for possession is a state, use Simple Present." },
    { question: "Correct this: 'He goes to Delhi yesterday.'", options: ["He go to Delhi yesterday.", "He has gone to Delhi yesterday.", "He went to Delhi yesterday.", "No correction needed."], correctAnswer: 2, explanation: "'Yesterday' requires Simple Past (V2)." },
    { question: "Correct this: 'I have seen him last week.'", options: ["I see him last week.", "I saw him last week.", "I had seen him last week.", "No correction needed."], correctAnswer: 1, explanation: "Specific past times like 'last week' cannot be used with Present Perfect." },
    { question: "Correct this: 'They are living here since 2015.'", options: ["They live here since 2015.", "They have been living here since 2015.", "They were living here since 2015.", "No correction needed."], correctAnswer: 1, explanation: "'Since' + duration requires Present Perfect Continuous." },
    { question: "Correct this: 'She don't like coffee.'", options: ["She doesn't like coffee.", "She didn't liked coffee.", "She not like coffee.", "No correction needed."], correctAnswer: 0, explanation: "3rd person singular (She) uses 'doesn't'." },
    { question: "Correct this: 'We didn't went to school.'", options: ["We didn't go to school.", "We not went to school.", "We hadn't went to school.", "No correction needed."], correctAnswer: 0, explanation: "After 'did/didn't', always use the base form (V1)." },
    { question: "Correct this: 'I am agree with you.'", options: ["I agree with you.", "I agreed with you.", "I am agreed with you.", "No correction needed."], correctAnswer: 0, explanation: "'Agree' is a verb, not an adjective. No 'am' needed." },
    { question: "Correct this: 'She has cook dinner.'", options: ["She has cooks dinner.", "She has cooked dinner.", "She has cooking dinner.", "No correction needed."], correctAnswer: 1, explanation: "Present Perfect requires V3 (cooked)." },
    { question: "Correct this: 'I was knowing him for years.'", options: ["I have known him for years.", "I knew him for years.", "I had knowing him for years.", "No correction needed."], correctAnswer: 0, explanation: "Stative verbs like 'know' use Perfect forms for duration, not Continuous." },

    // 11-20: Since vs For
    { question: "I have been waiting ___ 9 o'clock.", options: ["for", "since", "from", "at"], correctAnswer: 1, explanation: "9 o'clock is a specific starting point." },
    { question: "She has been working here ___ five years.", options: ["since", "for", "from", "during"], correctAnswer: 1, explanation: "Five years is a duration of time." },
    { question: "We haven't seen them ___ the party.", options: ["for", "since", "until", "before"], correctAnswer: 1, explanation: "The party is a specific point in time." },
    { question: "He has been sleeping ___ hours.", options: ["since", "for", "at", "by"], correctAnswer: 1, explanation: "'Hours' is a duration." },
    { question: "I've lived in this house ___ I was a child.", options: ["for", "since", "from", "when"], correctAnswer: 1, explanation: "'I was a child' is a point in time." },
    { question: "They have been married ___ 20 years.", options: ["since", "for", "during", "in"], correctAnswer: 1, explanation: "20 years is a duration." },
    { question: "I haven't eaten ___ breakfast.", options: ["for", "since", "from", "until"], correctAnswer: 1, explanation: "Breakfast is the starting point." },
    { question: "He has been sick ___ a week.", options: ["since", "for", "from", "during"], correctAnswer: 1, explanation: "'A week' is a duration." },
    { question: "She's been crying ___ she heard the news.", options: ["for", "since", "when", "after"], correctAnswer: 1, explanation: "The event marks the starting point." },
    { question: "We have known each other ___ a long time.", options: ["since", "for", "from", "during"], correctAnswer: 1, explanation: "'A long time' is a duration." },

    // 21-30: Conditionals
    { question: "If you heat ice, it ___.", options: ["melt", "melts", "will melt", "melted"], correctAnswer: 1, explanation: "Type 0: Facts use Simple Present in both clauses." },
    { question: "If it rains tomorrow, we ___ at home.", options: ["stay", "will stay", "would stay", "stayed"], correctAnswer: 1, explanation: "Type 1: Real future possibility (If + Present, will + V1)." },
    { question: "If I ___ a bird, I would fly.", options: ["am", "was", "were", "be"], correctAnswer: 2, explanation: "Type 2: Unreal situation uses 'were' for all subjects." },
    { question: "If she ___ earlier, she wouldn't have missed the bus.", options: ["leaves", "left", "had left", "has left"], correctAnswer: 2, explanation: "Type 3: Unreal past (If + Past Perfect, would have + V3)." },
    { question: "I ___ to the party if I have time.", options: ["go", "will go", "would go", "went"], correctAnswer: 1, explanation: "Type 1: Real future possibility." },
    { question: "If you ___ the button, the light comes on.", options: ["push", "will push", "pushed", "pushes"], correctAnswer: 0, explanation: "Type 0: General truth/scientific fact." },
    { question: "If I ___ you, I wouldn't do that.", options: ["am", "was", "were", "be"], correctAnswer: 2, explanation: "Type 2: Giving advice (subjunctive mood)." },
    { question: "They ___ if they had known.", options: ["came", "will come", "would have come", "had come"], correctAnswer: 2, explanation: "Type 3: Past regret/impossible change." },
    { question: "If water reaches 100 degrees, it ___.", options: ["boil", "boils", "will boil", "is boiling"], correctAnswer: 1, explanation: "Type 0: Fact." },
    { question: "If I win the lottery, I ___ a farm.", options: ["buy", "will buy", "would buy", "bought"], correctAnswer: 1, explanation: "Type 1: Real possibility." },

    // 31-40: Stative Verbs
    { question: "I ___ (think) this movie is great.", options: ["am thinking", "think", "thought", "have thinking"], correctAnswer: 1, explanation: "'Think' as an opinion is a state." },
    { question: "I ___ (think) about moving to London.", options: ["am thinking", "think", "thought", "have thinking"], correctAnswer: 0, explanation: "'Think' as a mental process can be continuous." },
    { question: "This soup ___ (taste) delicious.", options: ["is tasting", "tastes", "has tasted", "taste"], correctAnswer: 1, explanation: "Flavor is a state." },
    { question: "The chef ___ (taste) the soup now.", options: ["is tasting", "tastes", "taste", "has tasted"], correctAnswer: 0, explanation: "The act of tasting is an action." },
    { question: "I ___ (see) what you mean.", options: ["am seeing", "see", "saw", "seen"], correctAnswer: 1, explanation: "Understanding is a state." },
    { question: "I ___ (see) the doctor tomorrow.", options: ["am seeing", "see", "sees", "seen"], correctAnswer: 0, explanation: "Meeting someone is an action/plan." },
    { question: "She ___ (have) a big house.", options: ["is having", "has", "have", "had having"], correctAnswer: 1, explanation: "Possession is a state." },
    { question: "She ___ (have) lunch right now.", options: ["is having", "has", "have", "had having"], correctAnswer: 0, explanation: "Eating is an action." },
    { question: "I ___ (believe) in ghosts.", options: ["am believing", "believe", "believes", "believed"], correctAnswer: 1, explanation: "Belief is a state." },
    { question: "This book ___ (belong) to me.", options: ["is belonging", "belongs", "belong", "belonged"], correctAnswer: 1, explanation: "Ownership is a state." },

    // 41-50: Tense Conversion Logic
    { question: "Convert to Past Continuous: 'He writes a letter.'", options: ["He was writing a letter.", "He wrote a letter.", "He had been writing a letter.", "He is writing a letter."], correctAnswer: 0, explanation: "Was/Were + V4." },
    { question: "Convert to Present Perfect: 'They played cricket.'", options: ["They have played cricket.", "They has played cricket.", "They are playing cricket.", "They had played cricket."], correctAnswer: 0, explanation: "Have/Has + V3." },
    { question: "Convert to Future Perfect: 'I finish my work.'", options: ["I will be finishing my work.", "I will have finished my work.", "I finished my work.", "I have finished my work."], correctAnswer: 1, explanation: "Will have + V3." },
    { question: "Convert to Simple Past: 'She goes to school.'", options: ["She go to school.", "She went to school.", "She gone to school.", "She was going to school."], correctAnswer: 1, explanation: "V2 of go is went." },
    { question: "Convert to Past Perfect: 'We eat lunch.'", options: ["We had eaten lunch.", "We have eaten lunch.", "We were eating lunch.", "We ate lunch."], correctAnswer: 0, explanation: "Had + V3." },
    { question: "Convert to Present Continuous: 'Sun rises.'", options: ["Sun rose.", "Sun is rising.", "Sun has risen.", "Sun will rise."], correctAnswer: 1, explanation: "Is/Am/Are + V4." },
    { question: "Convert to Future Continuous: 'They sing.'", options: ["They will sing.", "They will be singing.", "They are singing.", "They sang."], correctAnswer: 1, explanation: "Will be + V4." },
    { question: "Convert to Present Perfect Continuous: 'I study.'", options: ["I have been studying.", "I has been studying.", "I am studying.", "I had been studying."], correctAnswer: 0, explanation: "Have been + V4." },
    { question: "Convert to Simple Future: 'He cooked.'", options: ["He will cook.", "He cooks.", "He is cooking.", "He will be cooking."], correctAnswer: 0, explanation: "Will + V1." },
    { question: "Convert to Past Perfect Continuous: 'She worked.'", options: ["She had worked.", "She had been working.", "She has been working.", "She was working."], correctAnswer: 1, explanation: "Had been + V4." },

    // 51-60: Reported Speech
    { question: "Report this: 'I am hungry,' said Tom.", options: ["Tom said he is hungry.", "Tom said he was hungry.", "Tom said he has been hungry.", "Tom said I am hungry."], correctAnswer: 1, explanation: "Simple Present moves to Simple Past in reported speech." },
    { question: "Report this: 'I will help you,' she said.", options: ["She said she will help me.", "She said she would help me.", "She said she helps me.", "She said she helped me."], correctAnswer: 1, explanation: "'Will' becomes 'would'." },
    { question: "Report this: 'I have finished,' he said.", options: ["He said he finished.", "He said he had finished.", "He said he has finished.", "He said he was finishing."], correctAnswer: 1, explanation: "Present Perfect becomes Past Perfect." },
    { question: "Report this: 'I saw him yesterday,' said Ram.", options: ["Ram said he saw him yesterday.", "Ram said he had seen him the day before.", "Ram said he saw him the day before.", "Ram said he has seen him yesterday."], correctAnswer: 1, explanation: "Simple Past becomes Past Perfect, 'yesterday' becomes 'the day before'." },
    { question: "Report this: 'Can you swim?' he asked.", options: ["He asked if I can swim.", "He asked if I could swim.", "He asked could I swim.", "He asked can you swim."], correctAnswer: 1, explanation: "Question word order becomes statement order, 'can' becomes 'could'." },
    { question: "Report this: 'Go away!' he shouted.", options: ["He shouted to go away.", "He shouted go away.", "He shout go away.", "He shouted that go away."], correctAnswer: 0, explanation: "Imperatives use 'to + V1'." },
    { question: "Report this: 'I'm coming now,' she said.", options: ["She said she is coming now.", "She said she was coming then.", "She said she comes then.", "She said she was coming now."], correctAnswer: 1, explanation: "'Now' becomes 'then'." },
    { question: "Report this: 'Do you like tea?' she asked.", options: ["She asked if I like tea.", "She asked if I liked tea.", "She asked do I like tea.", "She asked if you liked tea."], correctAnswer: 1, explanation: "Backshift from Present to Past." },
    { question: "Report this: 'I may be late,' he said.", options: ["He said he may be late.", "He said he might be late.", "He said he was late.", "He said he could be late."], correctAnswer: 1, explanation: "'May' becomes 'might'." },
    { question: "Report this: 'This is my book,' he said.", options: ["He said this was his book.", "He said that was his book.", "He said that is his book.", "He said this is his book."], correctAnswer: 1, explanation: "'This' becomes 'that'." },

    // 61-70: Active & Passive
    { question: "Passive of 'She eats an apple.'", options: ["An apple is eaten by her.", "An apple was eaten by her.", "An apple is eating by her.", "An apple eaten by her."], correctAnswer: 0, explanation: "Simple Present Passive: is/am/are + V3." },
    { question: "Passive of 'They built a house.'", options: ["A house is built by them.", "A house was built by them.", "A house were built by them.", "A house had been built by them."], correctAnswer: 1, explanation: "Simple Past Passive: was/were + V3." },
    { question: "Passive of 'I am writing a story.'", options: ["A story is written by me.", "A story is being written by me.", "A story was being written by me.", "A story being written by me."], correctAnswer: 1, explanation: "Continuous Passive: being + V3." },
    { question: "Passive of 'He has finished the work.'", options: ["The work is finished by him.", "The work has been finished by him.", "The work was finished by him.", "The work had been finished by him."], correctAnswer: 1, explanation: "Perfect Passive: has/have been + V3." },
    { question: "Passive of 'Will you help me?'", options: ["Will I be helped by you?", "Will I helped by you?", "Shall I be help by you?", "Would I be helped by you?"], correctAnswer: 0, explanation: "Future Passive: will be + V3." },
    { question: "Active of 'The window was broken by him.'", options: ["He breaks the window.", "He broke the window.", "He had broken the window.", "He was breaking the window."], correctAnswer: 1, explanation: "Reverse from Past Passive to Simple Past." },
    { question: "Passive of 'They are playing football.'", options: ["Football is played by them.", "Football is being played by them.", "Football are being played by them.", "Football was being played by them."], correctAnswer: 1, explanation: "Football is singular." },
    { question: "Passive of 'Who did this?'", options: ["By whom was this done?", "By who was this done?", "By whom this was done?", "Who was this done by?"], correctAnswer: 0, explanation: "Standard formal structure." },
    { question: "Passive of 'Open the door.'", options: ["Let the door be opened.", "Door should open.", "The door is opened.", "You open the door."], correctAnswer: 0, explanation: "Imperative passive with 'Let'." },
    { question: "Passive of 'I can do it.'", options: ["It can be done by me.", "It can done by me.", "It could be done by me.", "It is done by me."], correctAnswer: 0, explanation: "Modal Passive: modal + be + V3." },

    // 71-80: Real Life Scenarios logic
    { question: "In a job interview, how do you describe a past achievement?", options: ["I will finish the project.", "I finished the project in 2022.", "I finish the project daily.", "I am finishing the project."], correctAnswer: 1, explanation: "Simple Past for specific completed events." },
    { question: "In a recipe video, 'Now, I ___ (add) the milk.'", options: ["add", "am adding", "added", "have added"], correctAnswer: 1, explanation: "Continuous for actions currently shown." },
    { question: "Reporting an accident: 'The car ___ (already stop) when I hit it.'", options: ["already stopped", "had already stopped", "was already stopping", "has already stopped"], correctAnswer: 1, explanation: "Past Perfect for an action completed before another past event." },
    { question: "Telling a scary story: 'Suddenly, a cold wind ___ (blow).'", options: ["blows", "blew", "was blowing", "had blown"], correctAnswer: 1, explanation: "Simple Past for a sudden event in a narrative." },
    { question: "Daily Routine: 'I usually ___ (drink) coffee at 8 AM.'", options: ["drink", "am drinking", "drank", "will drink"], correctAnswer: 0, explanation: "Simple Present for habits." },
    { question: "Planning a trip: 'We ___ (fly) to Paris next week.'", options: ["fly", "are flying", "flew", "have flown"], correctAnswer: 1, explanation: "Present Continuous for fixed future arrangements." },
    { question: "Sports commentary: 'He ___ (pass) the ball and he scores!'", options: ["passes", "is passing", "passed", "has passed"], correctAnswer: 0, explanation: "Dramatic Present for play-by-play action." },
    { question: "Weather: 'It ___ (rain) since morning.'", options: ["rains", "is raining", "has been raining", "rained"], correctAnswer: 2, explanation: "Duration starting in the past and continuing." },
    { question: "Social Media: 'Just ___ (finish) my workout!'", options: ["finish", "finished", "have finished", "finishing"], correctAnswer: 2, explanation: "Recent action relevant now (informal context often drops 'I')." },
    { question: "Follow-up email: 'I ___ (think) about our conversation.'", options: ["think", "am thinking", "have been thinking", "thought"], correctAnswer: 2, explanation: "Ongoing action from the past up to now." },

    // 81-90: Tricky Irregular Verbs
    { question: "V3 of 'Go'?", options: ["Went", "Gone", "Going", "Goes"], correctAnswer: 1, explanation: "Go-Went-Gone." },
    { question: "V2 of 'Eat'?", options: ["Eaten", "Eating", "Eats", "Ate"], correctAnswer: 3, explanation: "Eat-Ate-Eaten." },
    { question: "V3 of 'Drink'?", options: ["Drank", "Drunk", "Drinking", "Drinks"], correctAnswer: 1, explanation: "Drink-Drank-Drunk." },
    { question: "V2 of 'Fly'?", options: ["Flown", "Flying", "Flew", "Flies"], correctAnswer: 2, explanation: "Fly-Flew-Flown." },
    { question: "V3 of 'Write'?", options: ["Wrote", "Written", "Writing", "Writes"], correctAnswer: 1, explanation: "Write-Wrote-Written." },
    { question: "V2 of 'Buy'?", options: ["Bought", "Buyed", "Buying", "Buys"], correctAnswer: 0, explanation: "Buy-Bought-Bought." },
    { question: "V3 of 'Begin'?", options: ["Began", "Begun", "Beginned", "Beginning"], correctAnswer: 1, explanation: "Begin-Began-Begun." },
    { question: "V2 of 'Swim'?", options: ["Swam", "Swum", "Swimming", "Swims"], correctAnswer: 0, explanation: "Swim-Swam-Swum." },
    { question: "V3 of 'Forget'?", options: ["Forgot", "Forgotten", "Forgetting", "Forgets"], correctAnswer: 1, explanation: "Forget-Forgot-Forgotten." },
    { question: "V2 of 'Catch'?", options: ["Catched", "Caught", "Catching", "Catches"], correctAnswer: 1, explanation: "Catch-Caught-Caught." },

    // 91-100: Advanced / Mixed
    { question: "Which is the 'Past of the Past'?", options: ["Simple Past", "Past Perfect", "Past Continuous", "Present Perfect"], correctAnswer: 1, explanation: "Past Perfect." },
    { question: "Structure of Future Perfect Continuous?", options: ["will have + V3", "will be + V4", "will have been + V4", "have been + V4"], correctAnswer: 2, explanation: "S + will have been + V4." },
    { question: "Is 'I am believing you' correct?", options: ["Yes", "No", "Maybe", "Only in stories"], correctAnswer: 1, explanation: "No, 'believe' is a stative verb." },
    { question: "By 2030, I ___ (graduate).", options: ["graduate", "will graduate", "will have graduated", "graduated"], correctAnswer: 2, explanation: "Future completion deadline (By + Time)." },
    { question: "When I arrived, she ___ (already leave).", options: ["already left", "has already left", "had already left", "was leaving"], correctAnswer: 2, explanation: "Sequence of past events." },
    { question: "She told me she ___ (be) tired.", options: ["is", "was", "has been", "be"], correctAnswer: 1, explanation: "Sequence of tenses (Backshift)." },
    { question: "Look! The baby ___ (walk)!", options: ["walks", "is walking", "walked", "has walked"], correctAnswer: 1, explanation: "Happening right now." },
    { question: "I ___ (never see) such a big cow before.", options: ["never saw", "have never seen", "had never seen", "am never seeing"], correctAnswer: 2, explanation: "Experience before a past reference point." },
    { question: "They ___ (play) for 2 hours when it rained.", options: ["played", "were playing", "had been playing", "have played"], correctAnswer: 2, explanation: "Duration before a past interruption." },
    { question: "Final Rule: Tense = Time + ___?", options: ["Verb", "Subject", "Work (Aspect)", "Object"], correctAnswer: 2, explanation: "Work or Aspect defines the nature of the action!" }
  ]
};
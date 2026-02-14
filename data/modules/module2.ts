import { Module } from '../../types';

export const module2: Module = {
  id: 2,
  title: "BUILDING BLOCKS - Sentence Structure",
  description: "Master the fundamental patterns and components that form every thought in English.",
  sections: [
    {
      title: "2.1 THE FUNDAMENTAL PATTERN",
      content: "SUBJECT + (HELPING VERB) + MAIN VERB + OBJECT + REST",
      type: 'formula'
    },
    {
      title: "BREAKING DOWN THE BLOCK",
      content: [
        "SUBJECT: The doer who performs the action or what the sentence is about.",
        "HELPING VERB: Assists the main verb in showing time (also called Auxiliary).",
        "MAIN VERB: The action itself (Lexical verb) like 'eat', 'run', or 'think'.",
        "OBJECT: The receiver of the action (Who or what is affected?).",
        "REST: Extra info like place (in the park), time (at 5 PM), or manner."
      ],
      type: 'list'
    },
    {
      title: "2.2 THE SUBJECT",
      content: "The subject tells us WHO is performing the action. It can be a name, a pronoun, or a common noun.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "NAMES (PROPER)", 
            icon: "👤", 
            description: "Specific people, places, or brands.", 
            details: ["Ram plays cricket.", "India is a large country.", "Microsoft is a company."] 
          },
          { 
            label: "PRONOUNS", 
            icon: "🆔", 
            description: "Words that replace nouns.", 
            details: ["I, We, You, They (Plural/I)", "He, She, It (Singular)"] 
          },
          { 
            label: "COMMON NOUNS", 
            icon: "🏢", 
            description: "General names for groups of people or things.", 
            details: ["The teacher explains.", "My friend arrived.", "Children play."] 
          }
        ]
      }
    },
    {
      title: "SUBJECT-VERB AGREEMENT",
      content: "The verb must match the subject in number.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "SINGULAR", 
            description: "He, She, It, Ram.", 
            details: ["Uses: is, was, has, goes, plays", "✓ He plays cricket."] 
          },
          { 
            label: "PLURAL", 
            description: "We, You, They.", 
            details: ["Uses: are, were, have, go, play", "✓ They play cricket."] 
          }
        ]
      }
    },
    {
      title: "2.3 HELPING VERBS (AUXILIARIES)",
      content: "These verbs 'help' the main verb to describe the exact timing of an action.",
      type: 'grid',
      data: {
        items: [
          { label: "BE FORMS", icon: "🐝", description: "am, is, are, was, were, been, being." },
          { label: "HAVE FORMS", icon: "👜", description: "has, have, had." },
          { label: "DO FORMS", icon: "🛠️", description: "do, does, did." },
          { label: "MODALS", icon: "✨", description: "will, shall, can, could, may, might, must, should." }
        ]
      }
    },
    {
      title: "WHEN DO WE USE THEM?",
      content: [
        "TO FORM TENSES: 'I am reading' (Continuous), 'She has finished' (Perfect).",
        "TO FORM NEGATIVES: 'I do not eat meat.' 'They have not arrived.'",
        "TO FORM QUESTIONS: 'Do you like coffee?' 'Is she your sister?'",
        "WITH MODALS: Modals are ALWAYS followed by V1. 'I can swim.' 'She will study.'"
      ],
      type: 'list'
    },
    {
      title: "DETAILED VERB TABLES",
      content: "Master the forms of Primary Auxiliaries based on the Subject.",
      type: 'table',
      data: {
        headers: ["Subject", "BE (Pres/Past)", "HAVE (Pres/Past)", "DO (Pres/Past)"],
        rows: [
          ["I", "am / was", "have / had", "do / did"],
          ["He / She / It", "is / was", "has / had", "does / did"],
          ["We / You / They", "are / were", "have / had", "do / did"]
        ]
      }
    },
    {
      title: "2.4 & 2.5 VERB FORMS",
      content: "Main verbs (Action words) change their shape through 4 primary forms.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "V1 (BASE)", 
            icon: "🌱", 
            description: "Eat, Play, Go, Write.", 
            details: ["Simple Present: I eat rice.", "After Modals: I can eat.", "Infinitives: I want to eat."] 
          },
          { 
            label: "V2 (PAST SIMPLE)", 
            icon: "🍂", 
            description: "Ate, Played, Went, Wrote.", 
            details: ["Simple Past: I ate rice yesterday.", "Used only in Affirmative Past."] 
          },
          { 
            label: "V3 (PAST PART.)", 
            icon: "🍎", 
            description: "Eaten, Played, Gone, Written.", 
            details: ["Perfect Tenses: I have eaten.", "Passive Voice: Rice is eaten."] 
          },
          { 
            label: "V4 (PRES. PART.)", 
            icon: "🌊", 
            description: "Eating, Playing, Going.", 
            details: ["Continuous Tenses: I am eating.", "Perfect Continuous: I have been eating."] 
          }
        ]
      }
    },
    {
      title: "2.6 REGULAR VS IRREGULAR",
      content: "Verbs are classified by how they form their Past Tense.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "REGULAR", 
            icon: "📏", 
            description: "V2 and V3 end in -ed.", 
            details: ["play - played - played", "work - worked - worked", "clean - cleaned - cleaned"] 
          },
          { 
            label: "IRREGULAR A-A-A", 
            icon: "1️⃣", 
            description: "All forms are identical.", 
            details: ["cut - cut - cut", "put - put - put", "hit - hit - hit", "read - read - read"] 
          },
          { 
            label: "IRREGULAR A-B-B", 
            icon: "2️⃣", 
            description: "V2 and V3 are the same.", 
            details: ["buy - bought - bought", "say - said - said", "keep - kept - kept"] 
          },
          { 
            label: "IRREGULAR A-B-C", 
            icon: "3️⃣", 
            description: "All forms are different.", 
            details: ["go - went - gone", "eat - ate - eaten", "write - wrote - written"] 
          }
        ]
      }
    },
    {
      title: "2.7 THE OBJECT",
      content: "The object answers the question 'What?' or 'Whom?' after the verb.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "DIRECT OBJECT", 
            description: "Receives the action directly.", 
            details: ["I wrote a letter. (What? -> a letter)", "She loves her mother. (Whom? -> mother)"] 
          },
          { 
            label: "INDIRECT OBJECT", 
            description: "Receives the direct object.", 
            details: ["I gave him a book. (him = indirect)", "She told me a story. (me = indirect)"] 
          },
          { 
            label: "INTRANSITIVE", 
            description: "Verbs with NO object.", 
            details: ["The baby is sleeping.", "Birds fly.", "She laughed loudly."] 
          }
        ]
      }
    },
    {
      title: "2.8 FOUR SENTENCE TYPES",
      content: "There are four ways to structure a sentence in any tense.",
      type: 'table',
      data: {
        headers: ["Type", "Structure", "Example"],
        rows: [
          ["AFFIRMATIVE", "S + (HV) + V + O", "She speaks English."],
          ["NEGATIVE", "S + HV + not + V + O", "She does not speak English."],
          ["INTERROGATIVE", "HV + S + V + O ?", "Does she speak English?"],
          ["NEG. INTERROG.", "HV + S + not + V + O ?", "Does she not speak English?"]
        ]
      }
    },
    {
      title: "CONTRACTIONS TIP",
      content: "In Negative Interrogative sentences, we often use contractions: 'Doesn't Ram play cricket?' or 'Hasn't she finished?'",
      type: 'note'
    },
    {
      title: "DR. MOO'S BUILDING RULES",
      content: [
        "1. We ALWAYS need a helping verb in negative sentences.",
        "2. The helping verb comes BEFORE the subject in questions.",
        "3. Learn 5 irregular verbs a day to master the Milky Way!",
        "4. Subject + Verb + Object (SVO) is your legend-dairy baseline."
      ],
      type: 'list'
    }
  ]
};
import { Module } from '../../types';

export const module2: Module = {
  id: 2,
  title: "BUILDING BLOCKS - Sentence Structure",
  description: "Master the fundamental patterns, Subject-Verb agreement, and the V1-V4 verb forms that power every sentence.",
  sections: [
    {
      title: "2.1 THE S-V-O-R BLUEPRINT",
      content: "Every standard English thought follows this logical sequence. Master the pattern, master the language.",
      type: 'text'
    },
    {
      title: "THE FUNDAMENTAL PATTERN",
      content: "SUBJECT + (HELPING VERB) + MAIN VERB + OBJECT + REST",
      type: 'formula'
    },
    {
      title: "BREAKING DOWN THE BLOCK",
      content: "Each component has a specific job in conveying your message.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "SUBJECT (S)", 
            icon: "👤", 
            description: "The 'Hero' or Doer of the action.", 
            details: ["Can be a Noun (Ram) or Pronoun (He).", "Answers: 'Who or What did it?'"] 
          },
          { 
            label: "HELPING VERB (HV)", 
            icon: "🛠️", 
            description: "The 'Time-Keeper' (Auxiliary).", 
            details: ["Shows the Tense.", "Examples: am, is, was, had, will."] 
          },
          { 
            label: "MAIN VERB (V)", 
            icon: "⚡", 
            description: "The 'Action' itself.", 
            details: ["The actual task: eat, play, think.", "Changes form (V1-V4) based on tense."] 
          },
          { 
            label: "OBJECT (O)", 
            icon: "🎯", 
            description: "The 'Receiver' of the action.", 
            details: ["The thing being acted upon.", "Answers: 'Whom or What?'"] 
          }
        ]
      }
    },
    {
      title: "2.2 SUBJECT CATEGORIES",
      content: "English verbs change based on the 'Person' and 'Number' of the subject.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "1ST PERSON", 
            icon: "☝️", 
            description: "The speaker.", 
            details: ["Singular: I", "Plural: We"] 
          },
          { 
            label: "2ND PERSON", 
            icon: "✌️", 
            description: "The listener.", 
            details: ["Singular/Plural: You", "Nuance: 'You' always takes plural verbs!"] 
          },
          { 
            label: "3RD PERSON", 
            icon: "👉", 
            description: "The person/thing we talk about.", 
            details: ["Singular: He, She, It, Ram", "Plural: They, The Cows"] 
          }
        ]
      }
    },
    {
      title: "2.3 THE 'BE' FAMILY CHART",
      content: "The verb 'To Be' is the most used—and most irregular—helping verb in English.",
      type: 'table',
      data: {
        headers: ["Subject", "Present (Now)", "Past (Then)", "Future (Later)"],
        rows: [
          ["I", "am", "was", "will be"],
          ["He / She / It / Ram", "is", "was", "will be"],
          ["We / You / They", "are", "were", "will be"]
        ]
      }
    },
    {
      title: "2.4 THE 4 FACES OF A VERB (V1-V4)",
      content: "Main verbs change their shape to match the 'Work' aspect of the tense.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "V1 (BASE FORM)", 
            icon: "🌱", 
            description: "Go, Write, Play.", 
            details: ["Simple Present & Future.", "After Modals (can, will, should).", "Pro-Tip: The 'Root' of the verb."] 
          },
          { 
            label: "V2 (PAST FORM)", 
            icon: "🍂", 
            description: "Went, Wrote, Played.", 
            details: ["ONLY for Simple Past Affirmative.", "Nuance: Disappears when 'Did' is present."] 
          },
          { 
            label: "V3 (PARTICIPLE)", 
            icon: "🍎", 
            description: "Gone, Written, Played.", 
            details: ["Used in all Perfect Tenses.", "Used in Passive Voice.", "Pro-Tip: Needs a 'Have/Has' helper."] 
          },
          { 
            label: "V4 (ING FORM)", 
            icon: "🌊", 
            description: "Going, Writing, Playing.", 
            details: ["Used in all Continuous Tenses.", "Describes actions 'in progress'.", "Pro-Tip: Needs a 'Be' helper."] 
          }
        ]
      }
    },
    {
      title: "2.5 IRREGULAR VERB FAMILIES",
      content: "Don't just memorize; recognize the families. These verbs don't follow the '-ed' rule.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "THE STABLES (A-A-A)", 
            icon: "🧱", 
            description: "All forms stay the same.", 
            details: ["Cut - Cut - Cut", "Put - Put - Put", "Read - Read - Read (spelling stays, sound changes!)"] 
          },
          { 
            label: "THE TWINS (A-B-B)", 
            icon: "👯", 
            description: "V2 and V3 are identical.", 
            details: ["Buy - Bought - Bought", "Teach - Taught - Taught", "Keep - Kept - Kept"] 
          },
          { 
            label: "THE TRINITY (A-B-C)", 
            icon: "🔱", 
            description: "Every form is different.", 
            details: ["Go - Went - Gone", "Eat - Ate - Eaten", "Write - Wrote - Written"] 
          }
        ]
      }
    },
    {
      title: "DR. MOO'S BUILDING RULE",
      content: "You cannot build a house without bricks, and you cannot build a sentence without knowing your V1, V2, and V3. Learn 5 irregular verbs a day—it's udderly vital!",
      type: 'note'
    }
  ]
};
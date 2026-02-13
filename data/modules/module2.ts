
import { Module } from '../../types';

export const module2: Module = {
  id: 2,
  title: "BUILDING BLOCKS - Sentence Structure",
  description: "Master the fundamental pattern of English sentences.",
  sections: [
    {
      title: "2.1 Basic Sentence Structure",
      content: "SUBJECT + (HELPING VERB) + MAIN VERB + OBJECT + REST",
      type: 'formula'
    },
    {
      title: "2.3 Helping Verbs (Auxiliary Verbs)",
      content: "BE: am, is, are, was, were, been, being | HAVE: has, have, had | DO: do, does, did",
      type: 'text'
    },
    {
      title: "2.5 Verb Forms (V1, V2, V3, V4)",
      content: [
        "V1 = Base Form (eat)",
        "V2 = Past Simple (ate)",
        "V3 = Past Participle (eaten)",
        "V4 = Present Participle (eating)"
      ],
      type: 'list'
    }
  ]
};

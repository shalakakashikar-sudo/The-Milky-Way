
import { Module } from '../../types';

export const module8: Module = {
  id: 8,
  title: "MASTERY PRACTICE",
  description: "Test your skills with 200+ variations and error detection challenges.",
  sections: [
    {
      title: "ERROR DETECTION STRATEGY",
      content: "How to spot 'moo-stakes' in sentences.",
      type: 'grid',
      data: {
        items: [
          { label: "CHECK SUBJECT", icon: "🔍", description: "Does the verb match the doer? (He goes vs They go)" },
          { label: "CHECK MARKERS", icon: "📍", description: "Is there a 'Yesterday' or 'Since'? Use the right tense!" },
          { label: "CHECK ASPECT", icon: "⚖️", description: "Is the action ongoing or completed?" }
        ]
      }
    },
    {
      title: "COMMON CORRECTIONS",
      content: [
        "✗ I am having a car. → ✓ I have a car.",
        "✗ She didn't went. → ✓ She didn't go.",
        "✗ I've been waiting since 2 hours. → ✓ for 2 hours.",
        "✗ Water is boiling at 100C. → ✓ Water boils at 100C."
      ],
      type: 'list'
    },
    {
      title: "PRACTICE TIP",
      content: "Don't overthink! If sequence doesn't matter and there is only one action, Simple Past is usually the safest bet.",
      type: 'note'
    }
  ]
};

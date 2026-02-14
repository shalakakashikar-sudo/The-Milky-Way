import { Module } from '../../types';

export const module7: Module = {
  id: 7,
  title: "SPECIAL SITUATIONS",
  description: "Navigate tricky verbs, mixed timelines, dramatic storytelling, and sophisticated indirect phrasing.",
  sections: [
    {
      title: "7.1 STATIVE VERBS",
      content: "Stative verbs describe states (feelings, thoughts, senses) rather than actions. They are rarely used in Continuous (-ing) forms because a state is generally seen as stable or non-progressive.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "EMOTIONS", 
            icon: "❤️", 
            description: "like, love, hate, dislike, prefer, fear.",
            details: ["✗ I am liking this cake.", "✓ I like this cake.", "Nuance: We use 'love' in continuous only for extreme, temporary emphasis (e.g., 'I'm lovin' it')."] 
          },
          { 
            label: "THINKING", 
            icon: "🧠", 
            description: "know, understand, believe, remember, forget.",
            details: ["✗ I am knowing the truth.", "✓ I know the truth.", "Pro-Tip: You either know something or you don't; there is no 'middle' of knowing!"] 
          },
          { 
            label: "SENSES", 
            icon: "👀", 
            description: "see, hear, smell, taste, feel.",
            details: ["✗ I am smelling the coffee.", "✓ I smell the coffee.", "Nuance: If you use -ing, it implies a deliberate action (sniffing) rather than an automatic sense."] 
          },
          { 
            label: "POSSESSION", 
            icon: "👜", 
            description: "have, own, belong, contain, possess.",
            details: ["✗ I am having a car.", "✓ I have a car.", "Warning: 'Have' only takes -ing when it means 'consuming' or 'experiencing'."] 
          }
        ]
      }
    },
    {
      title: "VERBS THAT DO BOTH",
      content: "Some verbs are 'Switch-Hitters'. Their meaning changes fundamentally when you move from Simple to Continuous.",
      type: 'table',
      data: {
        headers: ["Verb", "As a State (Simple/Static)", "As an Action (Continuous/Active)"],
        rows: [
          ["THINK", { title: "Opinion", example: "I think it's good." }, { title: "Mental Process", example: "I am thinking about the exam." }],
          ["HAVE", { title: "Possession", example: "I have a big barn." }, { title: "Activity/Consumption", example: "I am having lunch/fun." }],
          ["SEE", { title: "Understanding", example: "I see what you mean." }, { title: "Meeting/Dating", example: "I am seeing the doctor/Sara." }],
          ["TASTE", { title: "Flavor quality", example: "The milk tastes fresh." }, { title: "Active Testing", example: "I am tasting the milk for salt." }],
          ["BE", { title: "Personality", example: "She is very kind." }, { title: "Current Behavior", example: "She is being rude right now." }],
          ["FEEL", { title: "Opinion", example: "I feel that's wrong." }, { title: "Physical Sensation", example: "I am feeling the texture." }]
        ]
      }
    },
    {
      title: "PRO-TIP: THE 'TEMPORARY' BE",
      content: "Saying 'He is being stupid' is very different from 'He is stupid'. The first one implies he is normally smart but acting differently right now!",
      type: 'note'
    },
    {
      title: "7.2 MIXED TIME REFERENCES",
      content: "English often mixes tenses to show how different times interact. This is where your grammar becomes truly sophisticated.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "PAST → PRESENT RESULT", 
            description: "Present Perfect connects to the immediate 'Now'.", 
            details: [
              "I have lost my keys (Past), so I can't open the door (Now).",
              "Nuance: If the past action didn't have a result now, you would just use Simple Past."
            ] 
          },
          { 
            label: "PAST → DURATION", 
            description: "Pres. Perf. Cont. bridges the gap of time.", 
            details: [
              "I have been living here since 2015.",
              "Logic: The action started 'Then', is happening 'Now', and will likely continue 'Later'."
            ] 
          },
          { 
            label: "UNREAL MIXED", 
            description: "Mixed Conditionals (The Time Paradox).", 
            details: [
              "If I had studied medicine (Past), I would be a doctor now (Present).",
              "Pro-Tip: Use this to connect past choices to present identities."
            ] 
          }
        ]
      }
    },
    {
      title: "7.3 HISTORICAL PRESENT",
      content: "This is the 'Dramatic Present'. We use Simple Present to tell past stories to make them feel alive and urgent.",
      type: 'text'
    },
    {
      title: "DRAMATIC USAGE & NUANCES",
      type: 'list',
      content: [
        "JOKES: 'So, this cow walks into a bar...' | Using Present makes the punchline hit harder.",
        "STORYTELLING: 'Suddenly, the hero enters the room.' | Creates immediate suspense for the listener.",
        "SPORTS COMMENTARY: 'Ronaldo receives the ball, he shoots...' | Because the action is too fast for the past tense!",
        "BOOK/MOVIE SUMMARIES: 'In the movie, the main character travels to Mars.' | Creative works are considered 'living' in the present.",
        "Warning: Never use this in formal academic essays or business reports!"
      ]
    },
    {
      title: "7.4 INDIRECT QUESTIONS",
      content: "Indirect questions are the secret to sounding polite and professional in English. They avoid the aggressive 'interrogative' tone.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "THE FORMULA", 
            description: "Polite Starter + Question Word + SUBJECT + VERB.", 
            details: [
              "Direct: Where is the barn?", 
              "Indirect: Do you know where the barn IS?",
              "Nuance: Notice the verb 'is' moves to the end!"
            ] 
          },
          { 
            label: "NO AUXILIARIES", 
            description: "We drop 'do/does/did' in the indirect part.", 
            details: [
              "Direct: What did he say?",
              "Indirect: Can you tell me what he SAID?",
              "Pro-Tip: The 'said' stays in the past, but the order becomes a statement."
            ] 
          },
          { 
            label: "THE IF/WHETHER BRIDGE", 
            description: "For Yes/No questions.", 
            details: [
              "Direct: Is she coming?",
              "Indirect: I wonder if/whether she is coming.",
              "Nuance: 'Whether' is slightly more formal than 'if'."
            ] 
          }
        ]
      }
    },
    {
      title: "INDIRECT QUESTION WORD ORDER",
      content: "POLITE STARTER + [Wh- Word] + SUBJECT + VERB",
      type: 'formula'
    },
    {
      title: "7.5 FUTURE IN THE PAST",
      content: "This describes an event that was in the 'future' relative to a specific point in the 'past'. Structure: would + V1 or was/were going to.",
      type: 'grid',
      data: {
        items: [
          { 
            label: "REPORTED PROMISES", 
            icon: "💬", 
            description: "He said he would help me.", 
            details: ["Nuance: 'Will' becomes 'Would' because the reporting verb 'Said' is in the past."] 
          },
          { 
            label: "UNFULFILLED PLANS", 
            icon: "📅", 
            description: "I was going to call you, but I forgot.", 
            details: ["Pro-Tip: Use 'was going to' for plans that changed or were interrupted."] 
          },
          { 
            label: "PAST PREDICTIONS", 
            icon: "🔮", 
            description: "I knew it would rain today.", 
            details: ["Logic: At that moment in the past, the rain was still in the future."] 
          }
        ]
      }
    },
    {
      title: "7.6 DR. MOO'S SPECIAL DIAGNOSIS",
      content: [
        "1. Never say 'I am having two brothers'. That's possession! Possession is a state, not an activity. Use 'I have'.",
        "2. Indirect questions don't use 'do/does/did'. Stick to the baseline S+V order. It's the most common 'moo-stake' in professional emails!",
        "3. Stative verbs are like my spots—they are part of my identity, not something I'm 'doing'! Use Simple Present for them.",
        "4. 'Would' vs 'Was going to': Use 'would' for predictions from the past, and 'was going to' for specific intentions/plans.",
        "5. The 'Historical Present' is a tool for actors and jokers. If you use it with your boss, they might think you've lost your mind (or your herd)!",
        "6. Question Mark Nuance: In 'Do you know where he is?', the '?' belongs to 'Do you know', not the statement 'where he is'."
      ],
      type: 'list'
    }
  ]
};
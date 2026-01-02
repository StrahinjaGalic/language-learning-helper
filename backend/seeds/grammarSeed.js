export const grammarSeedData = [
  {
    grammarId: "n5-001-wa-particle",
    title: "は (wa) - Topic Particle",
    titleJapanese: "は",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle は marks the topic of the sentence. It indicates what the sentence is about. Note that は is written with the hiragana 'ha' but pronounced 'wa' when used as a particle.",
    structure: "[Topic] は [Comment]",
    examples: [
      {
        japanese: "私は学生です",
        reading: "わたしはがくせいです",
        english: "I am a student",
        breakdown: "私(I) は(topic) 学生(student) です(am)"
      },
      {
        japanese: "これはペンです",
        reading: "これはペンです",
        english: "This is a pen",
        breakdown: "これ(this) は(topic) ペン(pen) です(is)"
      },
      {
        japanese: "東京は大きいです",
        reading: "とうきょうはおおきいです",
        english: "Tokyo is big",
        breakdown: "東京(Tokyo) は(topic) 大きい(big) です(is)"
      }
    ],
    notes: "は is pronounced 'wa' not 'ha' when used as a particle. It marks the general topic, not necessarily the grammatical subject.",
    relatedGrammar: ["n5-002-ga-particle", "n5-007-desu-copula"],
    tags: ["basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-002-ga-particle",
    title: "が (ga) - Subject Particle",
    titleJapanese: "が",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle が marks the grammatical subject of a sentence. It identifies who or what is performing the action or has a certain property.",
    structure: "[Subject] が [Verb/Adjective]",
    examples: [
      {
        japanese: "猫がいます",
        reading: "ねこがいます",
        english: "There is a cat",
        breakdown: "猫(cat) が(subject) います(exists)"
      },
      {
        japanese: "雨が降っています",
        reading: "あめがふっています",
        english: "Rain is falling / It's raining",
        breakdown: "雨(rain) が(subject) 降っています(is falling)"
      },
      {
        japanese: "私が行きます",
        reading: "わたしがいきます",
        english: "I will go (emphasizing 'I')",
        breakdown: "私(I) が(subject) 行きます(will go)"
      }
    ],
    notes: "が emphasizes the subject and often answers 'who' or 'what'. Different from は which marks the topic.",
    relatedGrammar: ["n5-001-wa-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-003-wo-particle",
    title: "を (wo/o) - Object Particle",
    titleJapanese: "を",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle を marks the direct object of an action. It indicates what is being acted upon by the verb.",
    structure: "[Object] を [Action Verb]",
    examples: [
      {
        japanese: "ご飯を食べます",
        reading: "ごはんをたべます",
        english: "I eat rice/food",
        breakdown: "ご飯(rice/food) を(object) 食べます(eat)"
      },
      {
        japanese: "本を読みます",
        reading: "ほんをよみます",
        english: "I read a book",
        breakdown: "本(book) を(object) 読みます(read)"
      },
      {
        japanese: "日本語を勉強します",
        reading: "にほんごをべんきょうします",
        english: "I study Japanese",
        breakdown: "日本語(Japanese) を(object) 勉強します(study)"
      }
    ],
    notes: "を is written with the hiragana 'wo' but pronounced 'o'. It's only used after the direct object.",
    relatedGrammar: ["n5-001-wa-particle", "n5-002-ga-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-004-ni-particle",
    title: "に (ni) - Location/Time/Direction Particle",
    titleJapanese: "に",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle に has multiple uses: indicates location of existence, time when something happens, destination of movement, or indirect object.",
    structure: "[Location/Time/Target] に [Verb]",
    examples: [
      {
        japanese: "部屋に猫がいます",
        reading: "へやにねこがいます",
        english: "There is a cat in the room",
        breakdown: "部屋(room) に(in) 猫(cat) が います(exists)"
      },
      {
        japanese: "学校に行きます",
        reading: "がっこうにいきます",
        english: "I go to school",
        breakdown: "学校(school) に(to) 行きます(go)"
      },
      {
        japanese: "七時に起きます",
        reading: "しちじにおきます",
        english: "I wake up at 7 o'clock",
        breakdown: "七時(7 o'clock) に(at) 起きます(wake up)"
      }
    ],
    notes: "に is versatile: location (existence), time (specific), destination (movement), indirect object (giving).",
    relatedGrammar: ["n5-005-de-particle", "n5-018-kara-made"],
    tags: ["basic", "essential", "particles"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-005-de-particle",
    title: "で (de) - Location of Action/Means Particle",
    titleJapanese: "で",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle で indicates the location where an action takes place, or the means/method by which something is done.",
    structure: "[Location/Means] で [Action]",
    examples: [
      {
        japanese: "図書館で勉強します",
        reading: "としょかんでべんきょうします",
        english: "I study at the library",
        breakdown: "図書館(library) で(at) 勉強します(study)"
      },
      {
        japanese: "バスで行きます",
        reading: "バスでいきます",
        english: "I go by bus",
        breakdown: "バス(bus) で(by) 行きます(go)"
      },
      {
        japanese: "日本語で話します",
        reading: "にほんごではなします",
        english: "I speak in Japanese",
        breakdown: "日本語(Japanese) で(in) 話します(speak)"
      }
    ],
    notes: "で marks location of action (different from に for existence), means of transport, or method/language used.",
    relatedGrammar: ["n5-004-ni-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-006-no-particle",
    title: "の (no) - Possession/Modification Particle",
    titleJapanese: "の",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle の is primarily used to show possession or to connect nouns, indicating that one noun modifies another.",
    structure: "[Modifier] の [Modified Noun]",
    examples: [
      {
        japanese: "私の本",
        reading: "わたしのほん",
        english: "My book",
        breakdown: "私(I) の(possessive) 本(book)"
      },
      {
        japanese: "日本の料理",
        reading: "にほんのりょうり",
        english: "Japanese cuisine",
        breakdown: "日本(Japan) の(of) 料理(cuisine)"
      },
      {
        japanese: "先生の車",
        reading: "せんせいのくるま",
        english: "Teacher's car",
        breakdown: "先生(teacher) の(possessive) 車(car)"
      }
    ],
    notes: "の connects two nouns, showing possession, origin, material, or description.",
    relatedGrammar: ["n5-001-wa-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 1,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-007-desu-copula",
    title: "です/だ - Copula (To Be)",
    titleJapanese: "です・だ",
    jlptLevel: "N5",
    category: "copula",
    explanation: "です (polite) and だ (casual) are copulas that link the subject with a noun or na-adjective, meaning 'to be' or 'is'.",
    structure: "[Noun/Na-adjective] です",
    examples: [
      {
        japanese: "私は学生です",
        reading: "わたしはがくせいです",
        english: "I am a student",
        breakdown: "私(I) は 学生(student) です(am)"
      },
      {
        japanese: "これは本です",
        reading: "これはほんです",
        english: "This is a book",
        breakdown: "これ(this) は 本(book) です(is)"
      },
      {
        japanese: "静かです",
        reading: "しずかです",
        english: "It is quiet",
        breakdown: "静か(quiet) です(is)"
      }
    ],
    notes: "です is the polite form. だ is casual. Used with nouns and na-adjectives, not i-adjectives.",
    relatedGrammar: ["n5-001-wa-particle", "n5-012-i-adjectives", "n5-013-na-adjectives"],
    tags: ["basic", "essential", "copula"],
    difficulty: 1,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/stateofbeing" }
    ]
  },
  {
    grammarId: "n5-008-masu-form",
    title: "ます形 (masu-form) - Polite Verb Form",
    titleJapanese: "ます形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    explanation: "ます-form is the polite present/future tense of verbs. It's created by adding ます to the verb stem.",
    structure: "[Verb stem] ます",
    examples: [
      {
        japanese: "食べます",
        reading: "たべます",
        english: "eat / will eat",
        breakdown: "食べ(eat-stem) ます(polite marker)"
      },
      {
        japanese: "行きます",
        reading: "いきます",
        english: "go / will go",
        breakdown: "行き(go-stem) ます(polite marker)"
      },
      {
        japanese: "見ます",
        reading: "みます",
        english: "see / watch / will see",
        breakdown: "見(see-stem) ます(polite marker)"
      }
    ],
    notes: "ます-form is polite and indicates present habitual action or future action. Negative is ません.",
    relatedGrammar: ["n5-009-te-form", "n5-010-nai-form", "n5-011-ta-form"],
    tags: ["basic", "essential", "verb-conjugation", "polite"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/polite" }
    ]
  },
  {
    grammarId: "n5-009-te-form",
    title: "て形 (te-form) - Connective Form",
    titleJapanese: "て形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    explanation: "て-form is one of the most important verb forms in Japanese. It connects actions, indicates ongoing actions, and makes requests.",
    structure: "[Verb te-form]",
    examples: [
      {
        japanese: "食べて寝ます",
        reading: "たべてねます",
        english: "Eat and sleep",
        breakdown: "食べて(eat-and) 寝ます(sleep)"
      },
      {
        japanese: "読んでいます",
        reading: "よんでいます",
        english: "Am reading",
        breakdown: "読んで(read-te) います(ongoing)"
      },
      {
        japanese: "見てください",
        reading: "みてください",
        english: "Please look",
        breakdown: "見て(look-te) ください(please)"
      }
    ],
    notes: "て-form conjugation varies by verb type. Used for connecting actions, requests (〜てください), and ongoing actions (〜ている).",
    relatedGrammar: ["n5-008-masu-form", "n5-011-ta-form"],
    tags: ["basic", "essential", "verb-conjugation"],
    difficulty: 5,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/teform" }
    ]
  },
  {
    grammarId: "n5-010-nai-form",
    title: "ない形 (nai-form) - Negative Form",
    titleJapanese: "ない形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    explanation: "ない-form is the casual negative form of verbs, meaning 'not do'. The polite version adds ません instead.",
    structure: "[Verb negative stem] ない",
    examples: [
      {
        japanese: "食べない",
        reading: "たべない",
        english: "Don't eat / Won't eat",
        breakdown: "食べ(eat-stem) ない(not)"
      },
      {
        japanese: "行かない",
        reading: "いかない",
        english: "Don't go / Won't go",
        breakdown: "行か(go-negative stem) ない(not)"
      },
      {
        japanese: "食べません",
        reading: "たべません",
        english: "Don't eat (polite)",
        breakdown: "食べ(eat-stem) ません(not-polite)"
      }
    ],
    notes: "Casual negative: ない. Polite negative: ません. Important for making negative statements.",
    relatedGrammar: ["n5-008-masu-form", "n5-011-ta-form"],
    tags: ["basic", "essential", "verb-conjugation", "negative"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/negativeverbs" }
    ]
  },
  {
    grammarId: "n5-011-ta-form",
    title: "た形 (ta-form) - Past Tense",
    titleJapanese: "た形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    explanation: "た-form is the past tense form of verbs. It indicates completed actions. The polite version is ました.",
    structure: "[Verb past stem] た",
    examples: [
      {
        japanese: "食べた",
        reading: "たべた",
        english: "Ate",
        breakdown: "食べ(eat-stem) た(past)"
      },
      {
        japanese: "行った",
        reading: "いった",
        english: "Went",
        breakdown: "行(go-stem) った(past)"
      },
      {
        japanese: "見ました",
        reading: "みました",
        english: "Saw / Watched (polite)",
        breakdown: "見(see-stem) ました(past-polite)"
      }
    ],
    notes: "Conjugation rules similar to て-form. Casual past: た. Polite past: ました.",
    relatedGrammar: ["n5-008-masu-form", "n5-009-te-form"],
    tags: ["basic", "essential", "verb-conjugation", "past"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/pastverbs" }
    ]
  },
  {
    grammarId: "n5-012-i-adjectives",
    title: "い-Adjectives",
    titleJapanese: "い形容詞",
    jlptLevel: "N5",
    category: "adjectives",
    explanation: "い-adjectives end with い and can directly modify nouns. They conjugate on their own without needing です.",
    structure: "[い-adjective] [Noun] / [い-adjective] です",
    examples: [
      {
        japanese: "大きい犬",
        reading: "おおきいいぬ",
        english: "Big dog",
        breakdown: "大きい(big) 犬(dog)"
      },
      {
        japanese: "高いです",
        reading: "たかいです",
        english: "It is expensive",
        breakdown: "高い(expensive) です(is)"
      },
      {
        japanese: "おいしい料理",
        reading: "おいしいりょうり",
        english: "Delicious food",
        breakdown: "おいしい(delicious) 料理(food)"
      }
    ],
    notes: "い-adjectives end with い and conjugate: negative (〜くない), past (〜かった). です after い-adjectives is optional but polite.",
    relatedGrammar: ["n5-013-na-adjectives", "n5-007-desu-copula"],
    tags: ["basic", "essential", "adjectives"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/adjectives" }
    ]
  },
  {
    grammarId: "n5-013-na-adjectives",
    title: "な-Adjectives",
    titleJapanese: "な形容詞",
    jlptLevel: "N5",
    category: "adjectives",
    explanation: "な-adjectives (also called nominal adjectives) use な when modifying nouns directly, and だ/です when used as predicates.",
    structure: "[な-adjective] な [Noun] / [な-adjective] です",
    examples: [
      {
        japanese: "きれいな花",
        reading: "きれいなはな",
        english: "Beautiful flower",
        breakdown: "きれい(beautiful) な 花(flower)"
      },
      {
        japanese: "静かです",
        reading: "しずかです",
        english: "It is quiet",
        breakdown: "静か(quiet) です(is)"
      },
      {
        japanese: "好きな食べ物",
        reading: "すきなたべもの",
        english: "Favorite food",
        breakdown: "好き(liked) な 食べ物(food)"
      }
    ],
    notes: "な-adjectives need な before nouns, but use です/だ as predicate. They conjugate like nouns.",
    relatedGrammar: ["n5-012-i-adjectives", "n5-007-desu-copula"],
    tags: ["basic", "essential", "adjectives"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/adjectives" }
    ]
  },
  {
    grammarId: "n5-014-demonstratives",
    title: "これ・それ・あれ - Demonstratives (This/That)",
    titleJapanese: "これ・それ・あれ",
    jlptLevel: "N5",
    category: "pronouns",
    explanation: "これ (this), それ (that), あれ (that over there) are demonstrative pronouns indicating things at different distances.",
    structure: "これ/それ/あれ は [Noun] です",
    examples: [
      {
        japanese: "これは本です",
        reading: "これはほんです",
        english: "This is a book",
        breakdown: "これ(this) は 本(book) です"
      },
      {
        japanese: "それは何ですか",
        reading: "それはなんですか",
        english: "What is that?",
        breakdown: "それ(that) は 何(what) ですか"
      },
      {
        japanese: "あれは私の車です",
        reading: "あれはわたしのくるまです",
        english: "That over there is my car",
        breakdown: "あれ(that-far) は 私の(my) 車(car) です"
      }
    ],
    notes: "これ (near speaker), それ (near listener), あれ (far from both). こ/そ/あ pattern applies to location and direction words too.",
    relatedGrammar: ["n5-015-location-words"],
    tags: ["basic", "essential", "pronouns"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/demonstratives" }
    ]
  },
  {
    grammarId: "n5-015-location-words",
    title: "ここ・そこ・あそこ - Location Words (Here/There)",
    titleJapanese: "ここ・そこ・あそこ",
    jlptLevel: "N5",
    category: "pronouns",
    explanation: "ここ (here), そこ (there), あそこ (over there) are location demonstratives indicating places at different distances.",
    structure: "ここ/そこ/あそこ に/で [Verb]",
    examples: [
      {
        japanese: "ここに座ります",
        reading: "ここにすわります",
        english: "I will sit here",
        breakdown: "ここ(here) に 座ります(sit)"
      },
      {
        japanese: "そこで待ってください",
        reading: "そこでまってください",
        english: "Please wait there",
        breakdown: "そこ(there) で 待ってください(please wait)"
      },
      {
        japanese: "あそこは図書館です",
        reading: "あそこはとしょかんです",
        english: "That place over there is the library",
        breakdown: "あそこ(over there) は 図書館(library) です"
      }
    ],
    notes: "ここ (near speaker), そこ (near listener), あそこ (far from both). Part of the こ/そ/あ/ど system.",
    relatedGrammar: ["n5-014-demonstratives", "n5-004-ni-particle", "n5-005-de-particle"],
    tags: ["basic", "essential", "pronouns", "location"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/demonstratives" }
    ]
  },
  {
    grammarId: "n5-016-ka-particle",
    title: "か (ka) - Question Particle",
    titleJapanese: "か",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle か is added to the end of a sentence to turn it into a yes/no question. It's like a question mark in function.",
    structure: "[Statement] か",
    examples: [
      {
        japanese: "これは本ですか",
        reading: "これはほんですか",
        english: "Is this a book?",
        breakdown: "これ(this) は 本(book) です か(question)"
      },
      {
        japanese: "日本語が分かりますか",
        reading: "にほんごがわかりますか",
        english: "Do you understand Japanese?",
        breakdown: "日本語(Japanese) が 分かります(understand) か(question)"
      },
      {
        japanese: "コーヒーを飲みますか",
        reading: "コーヒーをのみますか",
        english: "Will you drink coffee?",
        breakdown: "コーヒー(coffee) を 飲みます(drink) か(question)"
      }
    ],
    notes: "か makes yes/no questions. In casual speech, rising intonation alone can indicate a question without か.",
    relatedGrammar: ["n5-007-desu-copula"],
    tags: ["basic", "essential", "particles", "questions"],
    difficulty: 1,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/question" }
    ]
  },
  {
    grammarId: "n5-017-mo-particle",
    title: "も (mo) - Also/Too Particle",
    titleJapanese: "も",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle も means 'also' or 'too'. It replaces は, が, or を to indicate that something applies to another item as well.",
    structure: "[Noun] も [Verb/Adjective]",
    examples: [
      {
        japanese: "私も学生です",
        reading: "わたしもがくせいです",
        english: "I am also a student",
        breakdown: "私(I) も(also) 学生(student) です"
      },
      {
        japanese: "これも好きです",
        reading: "これもすきです",
        english: "I like this too",
        breakdown: "これ(this) も(also) 好き(like) です"
      },
      {
        japanese: "日本語も勉強します",
        reading: "にほんごもべんきょうします",
        english: "I also study Japanese",
        breakdown: "日本語(Japanese) も(also) 勉強します(study)"
      }
    ],
    notes: "も replaces は, が, or を but can be used with other particles like に and で (〜にも, 〜でも).",
    relatedGrammar: ["n5-001-wa-particle", "n5-002-ga-particle", "n5-003-wo-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-018-kara-made",
    title: "から・まで - From/To Particles",
    titleJapanese: "から・まで",
    jlptLevel: "N5",
    category: "particles",
    explanation: "から means 'from' (starting point), and まで means 'to/until' (end point). They indicate ranges in time or space.",
    structure: "[Start] から [End] まで",
    examples: [
      {
        japanese: "九時から五時まで働きます",
        reading: "くじからごじまではたらきます",
        english: "I work from 9 to 5",
        breakdown: "九時(9 o'clock) から(from) 五時(5 o'clock) まで(to) 働きます(work)"
      },
      {
        japanese: "東京から大阪まで",
        reading: "とうきょうからおおさかまで",
        english: "From Tokyo to Osaka",
        breakdown: "東京(Tokyo) から(from) 大阪(Osaka) まで(to)"
      },
      {
        japanese: "月曜日から金曜日まで",
        reading: "げつようびからきんようびまで",
        english: "From Monday to Friday",
        breakdown: "月曜日(Monday) から(from) 金曜日(Friday) まで(to)"
      }
    ],
    notes: "から marks starting point, まで marks end point. Can be used separately or together. Works for time and location.",
    relatedGrammar: ["n5-004-ni-particle"],
    tags: ["basic", "essential", "particles", "time", "location"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-019-to-particle",
    title: "と (to) - And/With Particle",
    titleJapanese: "と",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle と has two main uses: connecting nouns (and), or indicating accompaniment (with someone).",
    structure: "[Noun] と [Noun] / [Person] と [Verb]",
    examples: [
      {
        japanese: "パンと牛乳",
        reading: "パンとぎゅうにゅう",
        english: "Bread and milk",
        breakdown: "パン(bread) と(and) 牛乳(milk)"
      },
      {
        japanese: "友達と映画を見ます",
        reading: "ともだちとえいがをみます",
        english: "I watch a movie with a friend",
        breakdown: "友達(friend) と(with) 映画(movie) を 見ます(watch)"
      },
      {
        japanese: "犬と猫がいます",
        reading: "いぬとねこがいます",
        english: "There are dogs and cats",
        breakdown: "犬(dog) と(and) 猫(cat) が います"
      }
    ],
    notes: "と connects exactly two items (complete list). For incomplete lists, use や. Also means 'with' for accompaniment.",
    relatedGrammar: ["n5-020-ya-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },
  {
    grammarId: "n5-020-ya-particle",
    title: "や (ya) - And (Partial List) Particle",
    titleJapanese: "や",
    jlptLevel: "N5",
    category: "particles",
    explanation: "The particle や means 'and' but implies there are other items not mentioned. It gives an incomplete list of examples.",
    structure: "[Noun] や [Noun] (など)",
    examples: [
      {
        japanese: "りんごやバナナを買いました",
        reading: "りんごやバナナをかいました",
        english: "I bought apples, bananas, (and other things)",
        breakdown: "りんご(apple) や(and) バナナ(banana) を 買いました(bought)"
      },
      {
        japanese: "本やペンがあります",
        reading: "ほんやペンがあります",
        english: "There are books, pens, (and other things)",
        breakdown: "本(book) や(and) ペン(pen) が あります(there are)"
      },
      {
        japanese: "犬や猫などが好きです",
        reading: "いぬやねこなどがすきです",
        english: "I like dogs, cats, etc.",
        breakdown: "犬(dog) や(and) 猫(cat) など(etc.) が 好きです(like)"
      }
    ],
    notes: "や gives non-exhaustive lists (implies more items exist). Use と for complete lists. Often paired with など (etc.).",
    relatedGrammar: ["n5-019-to-particle"],
    tags: ["basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  }
];

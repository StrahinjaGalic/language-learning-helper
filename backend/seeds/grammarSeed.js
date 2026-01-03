// Grammar points organized following Tae Kim's Guide to Japanese Grammar
// This serves as a companion/helper tool for learners using Tae Kim's guide

export const grammarSeedData = [
  // ===== BASIC GRAMMAR: The State of Being =====
  {
    grammarId: "tk-basic-001-desu-da",
    title: "だ - Declarative State of Being",
    titleJapanese: "だ",
    jlptLevel: "N5",
    category: "copula",
    taeKimSection: "3.2 Expressing State-of-Being",
    taeKimOrder: 1,
    explanation: "The state-of-being is expressed by attaching だ to nouns or na-adjectives. This makes the statement declarative and emphatic. However, だ is often omitted in casual speech, as state-of-being can be implied. Men tend to use だ more frequently to sound more forceful. Conjugates to all four tenses: affirmative, negative, past, negative past.",
    structure: "[Noun/Na-adjective] + だ\n[Noun/Na-adjective] + じゃない (negative)\n[Noun/Na-adjective] + だった (past)\n[Noun/Na-adjective] + じゃなかった (negative past)",
    examples: [
      {
        japanese: "人だ",
        reading: "ひとだ",
        english: "Is person",
        breakdown: "人(person) + だ(is)"
      },
      {
        japanese: "学生だ",
        reading: "がくせいだ",
        english: "Is student",
        breakdown: "学生(student) + だ(is)"
      },
      {
        japanese: "元気だ",
        reading: "げんきだ",
        english: "Is well",
        breakdown: "元気(healthy/well) + だ(is)"
      },
      {
        japanese: "学生じゃない",
        reading: "がくせいじゃない",
        english: "Is not student",
        breakdown: "学生(student) + じゃない(is not)"
      },
      {
        japanese: "友達だった",
        reading: "ともだちだった",
        english: "Was friend",
        breakdown: "友達(friend) + だった(was)"
      },
      {
        japanese: "元気じゃなかった",
        reading: "げんきじゃなかった",
        english: "Was not well",
        breakdown: "元気(healthy) + じゃなかった(was not)"
      }
    ],
    notes: "State-of-being can be implied without だ. Example: A: 元気？(Are you well?) B: 元気。(I'm well). The declarative だ makes statements more emphatic. All conjugations work without だ in the affirmative.",
    relatedGrammar: ["tk-basic-002-wa-particle", "tk-basic-005-na-adjectives"],
    tags: ["tae-kim", "basic", "essential", "copula", "conjugation"],
    difficulty: 1,
    resources: [
      { name: "Tae Kim - State of Being", url: "http://www.guidetojapanese.org/learn/grammar/stateofbeing" }
    ]
  },

  // ===== BASIC GRAMMAR: Introduction to Particles =====
  {
    grammarId: "tk-basic-002-wa-particle",
    title: "は - Topic Particle",
    titleJapanese: "は",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.3 Introduction to Particles (は、も、が)",
    taeKimOrder: 2,
    explanation: "The topic particle identifies what you're talking about - the topic of your sentence. The topic particle is は, pronounced /wa/ (not /ha/) when used as a particle. Once the topic is established, it doesn't need to be repeated. The topic can refer to any action or object from anywhere, even from other sentences.",
    structure: "[Topic] + は + [Comment]",
    examples: [
      {
        japanese: "アリスは学生？",
        reading: "アリスはがくせい？",
        english: "Is Alice (you) student?",
        breakdown: "アリス(Alice) + は(topic marker) + 学生(student)?"
      },
      {
        japanese: "今日は試験だ",
        reading: "きょうはしけんだ",
        english: "Today is exam",
        breakdown: "今日(today) + は(topic) + 試験(exam) + だ(is)"
      },
      {
        japanese: "ジョンは明日",
        reading: "ジョンはあした",
        english: "John is tomorrow (As for John, the exam is tomorrow)",
        breakdown: "ジョン(John) + は(topic) + 明日(tomorrow) [exam implied from context]"
      }
    ],
    notes: "The topic is very generic and can refer to anything from context. Example: 'ジョンは？' (What about John?) uses は to introduce John as a topic. Notice 'は' is written with ha but pronounced 'wa' as a particle.",
    relatedGrammar: ["tk-basic-003-mo-particle", "tk-basic-004-ga-particle"],
    tags: ["tae-kim", "basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Particles は, も, が", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },

  {
    grammarId: "tk-basic-003-mo-particle",
    title: "も - Inclusive Topic Particle",
    titleJapanese: "も",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.3 Introduction to Particles (は、も、が)",
    taeKimOrder: 3,
    explanation: "The inclusive topic particle も is essentially は with the additional meaning of 'also'. It introduces another topic in addition to the current topic. The inclusion must be consistent - use は to break from the inclusion.",
    structure: "[Noun] + も + [Comment]",
    examples: [
      {
        japanese: "アリスは学生？うん、トムも学生",
        reading: "アリスはがくせい？うん、トムもがくせい",
        english: "Is Alice a student? Yeah, and Tom is also student",
        breakdown: "トム(Tom) + も(also) + 学生(student)"
      },
      {
        japanese: "アリスは学生？うん、でもトムは学生じゃない",
        reading: "アリスはがくせい？うん、でもトムはがくせいじゃない",
        english: "Is Alice a student? Yeah, but Tom is not student",
        breakdown: "でも(but) + トム(Tom) + は(topic - breaks inclusion) + 学生じゃない(not student)"
      },
      {
        japanese: "ううん、トムも学生じゃない",
        reading: "ううん、トムもがくせいじゃない",
        english: "No, and Tom is also not student",
        breakdown: "トム(Tom) + も(also) + 学生じゃない(not student)"
      }
    ],
    notes: "も must be consistent with the statement. Can't say 'I am student, Tom is also not student'. Use は to make a break from inclusion. Works with negatives too.",
    relatedGrammar: ["tk-basic-002-wa-particle", "tk-basic-004-ga-particle"],
    tags: ["tae-kim", "basic", "essential", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Particles は, も, が", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },

  {
    grammarId: "tk-basic-004-ga-particle",
    title: "が - Identifier Particle",
    titleJapanese: "が",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.3 Introduction to Particles (は、も、が)",
    taeKimOrder: 4,
    explanation: "Tae Kim calls が the 'identifier particle' (not subject particle) because it indicates the speaker wants to identify something unspecified. が identifies what/who specifically, while は just sets the topic. Cannot replace が with は when asking questions with 'who' or 'what' because it would make the question word the topic.",
    structure: "[Identifier] + が + [Predicate]",
    examples: [
      {
        japanese: "誰が学生？",
        reading: "だれががくせい？",
        english: "Who is the one that is student?",
        breakdown: "誰(who) + が(identifier) + 学生(student)?"
      },
      {
        japanese: "ジョンが学生",
        reading: "ジョンががくせい",
        english: "John is the one who is student",
        breakdown: "ジョン(John) + が(identifier) + 学生(student)"
      },
      {
        japanese: "私が学生",
        reading: "わたしががくせい",
        english: "I (am) student (identifying specifically me)",
        breakdown: "私(I) + が(identifier) + 学生(student)"
      }
    ],
    notes: "Difference from は: '誰が学生？' = 'Who is the student?' (identifying) vs '学生は誰？' = 'The student is who?' (talking about student). Cannot say '誰は学生？' because 'who' would become the topic.",
    relatedGrammar: ["tk-basic-002-wa-particle", "tk-basic-003-mo-particle"],
    tags: ["tae-kim", "basic", "essential", "particles"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Particles は, も, が", url: "http://www.guidetojapanese.org/learn/grammar/particlesintro" }
    ]
  },

  // ===== BASIC GRAMMAR: Adjectives =====
  {
    grammarId: "tk-basic-006-i-adjectives",
    title: "い-Adjectives",
    titleJapanese: "い形容詞",
    jlptLevel: "N5",
    category: "adjectives",
    taeKimSection: "3.4 Adjectives",
    taeKimOrder: 6,
    explanation: "All i-adjectives end in the hiragana い. Unlike na-adjectives, you do NOT need to add な to directly modify a noun. Important: You can NEVER attach だ to i-adjectives. Conjugation: Remove trailing い and add くない (negative), かった (past), or くなかった (negative past).",
    structure: "[い-adjective] + [Noun] (direct modification)\nNegative: [stem] + くない\nPast: [stem] + かった\nNegative past: [stem] + くなかった",
    examples: [
      {
        japanese: "おいしい食べ物",
        reading: "おいしいたべもの",
        english: "Tasty food",
        breakdown: "おいしい(tasty) + 食べ物(food) - no な needed"
      },
      {
        japanese: "高いビル",
        reading: "たかいビル",
        english: "Tall building",
        breakdown: "高い(tall/expensive) + ビル(building)"
      },
      {
        japanese: "高くないビル",
        reading: "たかくないビル",
        english: "Not tall building",
        breakdown: "高い → 高くない (remove い, add くない)"
      },
      {
        japanese: "高かったビル",
        reading: "たかかったビル",
        english: "Building that was tall",
        breakdown: "高い → 高かった (remove い, add かった)"
      },
      {
        japanese: "値段が高いレストランはあまり好きじゃない",
        reading: "ねだんがたかいレストランはあまりすきじゃない",
        english: "Don't like high price restaurants very much",
        breakdown: "値段が高い (clause) + レストラン - directly modifies noun"
      }
    ],
    notes: "Exception: いい (good) conjugates as よい: よくない (negative), よかった (past), よくなかった (negative past). かっこいい also follows this pattern. Do NOT attach だ to i-adjectives!",
    relatedGrammar: ["tk-basic-005-na-adjectives"],
    tags: ["tae-kim", "basic", "adjectives", "essential"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Adjectives", url: "http://www.guidetojapanese.org/learn/grammar/adjectives" }
    ]
  },

  {
    grammarId: "tk-basic-005-na-adjectives",
    title: "な-Adjectives",
    titleJapanese: "な形容詞",
    jlptLevel: "N5",
    category: "adjectives",
    taeKimSection: "3.4 Adjectives",
    taeKimOrder: 5,
    explanation: "Na-adjectives act essentially like nouns. The main difference is that a na-adjective can directly modify a noun by sticking な between the adjective and noun. All conjugation rules for both nouns and na-adjectives are the same. You can also use adjectives with particles just like nouns.",
    structure: "[な-adjective] + な + [Noun]\n[な-adjective] + だ (affirmative)\n[な-adjective] + じゃない (negative)\n[な-adjective] + だった (past)\n[な-adjective] + じゃなかった (negative past)",
    examples: [
      {
        japanese: "静かな人",
        reading: "しずかなひと",
        english: "Quiet person",
        breakdown: "静か(quiet) + な + 人(person)"
      },
      {
        japanese: "友達は親切",
        reading: "ともだちはしんせつ",
        english: "Friend is kind",
        breakdown: "友達(friend) + は + 親切(kind)"
      },
      {
        japanese: "ボブは魚が好きだ",
        reading: "ボブはさかながすきだ",
        english: "Bob likes fish",
        breakdown: "ボブ(Bob) + は + 魚(fish) + が + 好き(likeable) + だ"
      },
      {
        japanese: "ボブは魚が好きじゃない",
        reading: "ボブはさかながすきじゃない",
        english: "Bob does not like fish",
        breakdown: "好き(likeable) + じゃない(is not)"
      },
      {
        japanese: "魚が好きな人",
        reading: "さかながすきなひと",
        english: "Person that likes fish",
        breakdown: "魚が好き(likes fish) + な + 人(person)"
      }
    ],
    notes: "Think of 好き as meaning 'desirable' rather than 'like'. Whole clauses like '魚が好き' can modify nouns. Remember: きれい and 嫌い are rare na-adjectives ending in い.",
    relatedGrammar: ["tk-basic-006-i-adjectives", "tk-basic-001-desu-da"],
    tags: ["tae-kim", "basic", "adjectives", "essential"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Adjectives", url: "http://www.guidetojapanese.org/learn/grammar/adjectives" }
    ]
  },

  // ===== BASIC GRAMMAR: Verb Basics =====
  {
    grammarId: "tk-basic-007-ru-verbs",
    title: "る-Verbs Classification",
    titleJapanese: "る動詞",
    jlptLevel: "N5",
    category: "verb-conjugation",
    taeKimSection: "3.5 Verb Basics",
    taeKimOrder: 7,
    explanation: "All ru-verbs end in る. If a verb does NOT end in る, it's always an u-verb. For verbs ending in る: if the vowel sound before る is /a/, /u/, or /o/, it's always u-verb. If the preceding sound is /i/ or /e/, it will be a ru-verb in MOST cases (but there are exceptions like 帰る, 切る). Verbs only need a verb to be grammatically complete - no subject required!",
    structure: "[Stem from dropping る] + [Conjugation ending]",
    examples: [
      {
        japanese: "食べる",
        reading: "たべる",
        english: "Eat. (I/you/we/they eat)",
        breakdown: "べ is e-vowel sound, so る-verb. Complete sentence!"
      },
      {
        japanese: "アリスは食べる",
        reading: "アリスはたべる",
        english: "As for Alice, eat",
        breakdown: "アリス(Alice) + は(topic) + 食べる(eat)"
      },
      {
        japanese: "見る",
        reading: "みる",
        english: "See/watch",
        breakdown: "み is i-vowel, so る-verb"
      },
      {
        japanese: "起きる",
        reading: "おきる",
        english: "Wake; occur",
        breakdown: "き is i-vowel, so る-verb"
      }
    ],
    notes: "Important: A grammatically complete sentence requires only a verb. '食べる。' is complete. Common る-verbs: 食べる, 見る, 寝る, 起きる, 考える, 教える, 出る, いる, 着る. Exception u-verbs ending in iru/eru: 帰る, 切る, 走る, 知る, 入る.",
    relatedGrammar: ["tk-basic-008-u-verbs", "tk-basic-009-irregular-verbs"],
    tags: ["tae-kim", "basic", "verbs", "essential"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Verb Basics", url: "http://www.guidetojapanese.org/learn/grammar/verbbasics" }
    ]
  },

  {
    grammarId: "tk-basic-008-u-verbs",
    title: "う-Verbs Classification",
    titleJapanese: "う動詞",
    jlptLevel: "N5",
    category: "verb-conjugation",
    taeKimSection: "3.5 Verb Basics",
    taeKimOrder: 8,
    explanation: "U-verbs can end in any u-vowel sound including る. If a verb does NOT end in る, it's always u-verb. For る-ending verbs: if the preceding vowel is /a/, /u/, or /o/, it's always u-verb. Examples: 話す, 聞く, 泳ぐ, 遊ぶ, 待つ, 飲む, 買う, ある, 死ぬ. U-verbs are the majority of Japanese verbs.",
    structure: "[Root with u-sound changed] + [Ending]",
    examples: [
      {
        japanese: "話す",
        reading: "はなす",
        english: "To speak",
        breakdown: "Ends in す (su), so u-verb"
      },
      {
        japanese: "分かる",
        reading: "わかる",
        english: "To understand",
        breakdown: "か is a-vowel before る, so u-verb"
      },
      {
        japanese: "ジムが来る",
        reading: "ジムがくる",
        english: "Jim is the one that comes",
        breakdown: "来る is exception verb, but example sentence"
      },
      {
        japanese: "お金がある",
        reading: "おかねがある",
        english: "There is money (Money exists)",
        breakdown: "ある (u-verb) - exists for inanimate objects"
      },
      {
        japanese: "私は買う",
        reading: "わたしはかう",
        english: "As for me, buy",
        breakdown: "買う ends in u-sound"
      }
    ],
    notes: "Important: ある (inanimate existence) vs いる (animate existence - ru-verb). '猫はいる' = There is cat. 'お金がある' = There is money. Choose based on animate/inanimate.",
    relatedGrammar: ["tk-basic-007-ru-verbs", "tk-basic-009-irregular-verbs"],
    tags: ["tae-kim", "basic", "verbs", "essential"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Verb Basics", url: "http://www.guidetojapanese.org/learn/grammar/verbbasics" }
    ]
  },

  {
    grammarId: "tk-basic-009-irregular-verbs",
    title: "Irregular Verbs (する・来る)",
    titleJapanese: "不規則動詞",
    jlptLevel: "N5",
    category: "verb-conjugation",
    taeKimSection: "3.5 Verb Basics",
    taeKimOrder: 9,
    explanation: "There are only two exception verbs in Japanese: する (to do) and 来る (to come). These don't follow ru-verb or u-verb rules. All verbs fall into one of three categories: ru-verb, u-verb, or exception.",
    structure: "Memorize conjugations separately",
    examples: [
      {
        japanese: "する",
        reading: "する",
        english: "To do",
        breakdown: "Exception verb #1"
      },
      {
        japanese: "来る",
        reading: "くる",
        english: "To come",
        breakdown: "Exception verb #2"
      },
      {
        japanese: "ボブもする",
        reading: "ボブもする",
        english: "Bob also do",
        breakdown: "ボブ(Bob) + も(also) + する(do)"
      }
    ],
    notes: "These two verbs are exceptions in ALL conjugations. 勉強する (study), 電話する (telephone) are compound verbs using する, so they conjugate the same way: 勉強しない, 勉強した.",
    relatedGrammar: ["tk-basic-007-ru-verbs", "tk-basic-008-u-verbs"],
    tags: ["tae-kim", "basic", "verbs", "irregular", "essential"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Verb Basics", url: "http://www.guidetojapanese.org/learn/grammar/verbbasics" }
    ]
  },

  // ===== BASIC GRAMMAR: Negative Verbs =====
  {
    grammarId: "tk-basic-010-negative-verbs",
    title: "Negative Verb Conjugation",
    titleJapanese: "動詞の否定形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    taeKimSection: "3.6 Negative Verbs",
    taeKimOrder: 10,
    explanation: "Conjugation rules: ru-verbs drop る and attach ない. U-verbs ending in う: replace with わ + ない. All other u-verbs: replace u-vowel with a-vowel equivalent + ない. Exceptions: する→しない, 来る→こない, ある→ない (NOT あらない).",
    structure: "ru-verb: [stem] + ない\nu-verb: [a-vowel stem] + ない\nu-verb ending う: [stem]わ + ない",
    examples: [
      {
        japanese: "アリスは食べない",
        reading: "アリスはたべない",
        english: "As for Alice, does not eat",
        breakdown: "食べる → 食べない (drop る, add ない)"
      },
      {
        japanese: "ジムが遊ばない",
        reading: "ジムがあそばない",
        english: "Jim is the one that does not play",
        breakdown: "遊ぶ → 遊ばない (u-sound ぶ → a-sound ば)"
      },
      {
        japanese: "ボブもしない",
        reading: "ボブもしない",
        english: "Bob also does not do",
        breakdown: "する → しない (exception)"
      },
      {
        japanese: "お金がない",
        reading: "おかねがない",
        english: "There is no money (Money does not exist)",
        breakdown: "ある → ない (exception, NOT あらない)"
      },
      {
        japanese: "私は買わない",
        reading: "わたしはかわない",
        english: "As for me, not buy",
        breakdown: "買う → 買わない (う → わ)"
      },
      {
        japanese: "猫はいない",
        reading: "ねこはいない",
        english: "There is no cat (Cat does not exist)",
        breakdown: "いる → いない (ru-verb: drop る, add ない)"
      }
    ],
    notes: "Key exception: ある (to exist for inanimate) → ない (NOT あらない). More examples: 話す→話さない, 聞く→聞かない, 泳ぐ→泳がない, 待つ→待たない, 飲む→飲まない, 帰る→帰らない, 死ぬ→死なない.",
    relatedGrammar: ["tk-basic-007-ru-verbs", "tk-basic-008-u-verbs", "tk-basic-009-irregular-verbs"],
    tags: ["tae-kim", "basic", "verbs", "negative", "essential"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Negative Verbs", url: "http://www.guidetojapanese.org/learn/grammar/negativeverbs" }
    ]
  },

  // ===== BASIC GRAMMAR: Past Tense =====
  {
    grammarId: "tk-basic-011-past-tense",
    title: "Past Tense Conjugation",
    titleJapanese: "動詞の過去形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    taeKimSection: "3.7 Past Tense",
    taeKimOrder: 11,
    explanation: "Tae Kim warns this is the most complex conjugation rule. Ru-verbs: drop る add た. U-verbs have 4 sub-categories based on ending: す→した, く/ぐ→いた/いだ, む/ぬ/ぶ→んだ, る/つ/う→った. Exception: 行く→行った (not 行いた). Past-negative: change verb to negative, replace い with かった.",
    structure: "ru-verb: [stem] + た\nu-verb endings: す→した, く→いた, ぐ→いだ, む/ぬ/ぶ→んだ, る/つ/う→った\nPast-negative: [negative] - い + かった",
    examples: [
      {
        japanese: "出た",
        reading: "でた",
        english: "Came out",
        breakdown: "出る → 出た (ru-verb: drop る, add た)"
      },
      {
        japanese: "話した",
        reading: "はなした",
        english: "Spoke",
        breakdown: "話す → 話した (す → した)"
      },
      {
        japanese: "書いた",
        reading: "かいた",
        english: "Wrote",
        breakdown: "書く → 書いた (く → いた)"
      },
      {
        japanese: "泳いだ",
        reading: "およいだ",
        english: "Swam",
        breakdown: "泳ぐ → 泳いだ (ぐ → いだ)"
      },
      {
        japanese: "飲んだ",
        reading: "のんだ",
        english: "Drank",
        breakdown: "飲む → 飲んだ (む → んだ)"
      },
      {
        japanese: "遊んだ",
        reading: "あそんだ",
        english: "Played",
        breakdown: "遊ぶ → 遊んだ (ぶ → んだ)"
      },
      {
        japanese: "切った",
        reading: "きった",
        english: "Cut",
        breakdown: "切る → 切った (る → った)"
      },
      {
        japanese: "買った",
        reading: "かった",
        english: "Bought",
        breakdown: "買う → 買った (う → った)"
      },
      {
        japanese: "した",
        reading: "した",
        english: "Did",
        breakdown: "する → した (exception)"
      },
      {
        japanese: "来た",
        reading: "きた",
        english: "Came",
        breakdown: "来る → 来た (exception)"
      },
      {
        japanese: "行った",
        reading: "いった",
        english: "Went",
        breakdown: "行く → 行った (exception to く rule)"
      },
      {
        japanese: "食べなかった",
        reading: "たべなかった",
        english: "Did not eat",
        breakdown: "食べる → 食べない → 食べなかった (remove い, add かった)"
      },
      {
        japanese: "お金がなかった",
        reading: "おかねがなかった",
        english: "There was no money",
        breakdown: "ある → ない → なかった"
      }
    ],
    notes: "Example sentences: 今日は、走った (As for today, ran). 友達が来た (Friend is the one that came). 私も遊んだ (I also played). 勉強は、した (About study, did it). Past-negative for ALL verbs: [negative form] remove い → add かった.",
    relatedGrammar: ["tk-basic-007-ru-verbs", "tk-basic-008-u-verbs", "tk-basic-010-negative-verbs"],
    tags: ["tae-kim", "basic", "verbs", "past", "essential"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - Past Tense", url: "http://www.guidetojapanese.org/learn/grammar/pasttense" }
    ]
  },

  // ===== BASIC GRAMMAR: Particles Used with Verbs =====
  {
    grammarId: "tk-basic-012-wo-particle",
    title: "を - Direct Object Particle",
    titleJapanese: "を",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.8 Particles used with verbs (を、に、へ、で)",
    taeKimOrder: 12,
    explanation: "The を character is attached to the end of a word to signify that word is the direct object of the verb. Pronounced /o/ (not /wo/) in real speech. Places can also be direct objects of motion verbs like 歩く and 走る. With する + noun, を is optional and you can treat the whole [noun+する] as one verb.",
    structure: "[Direct object] + を + [Verb]",
    examples: [
      {
        japanese: "魚を食べる",
        reading: "さかなをたべる",
        english: "Eat fish",
        breakdown: "魚(fish) + を(object marker) + 食べる(eat)"
      },
      {
        japanese: "ジュースを飲んだ",
        reading: "ジュースをのんだ",
        english: "Drank juice",
        breakdown: "ジュース(juice) + を + 飲んだ(drank)"
      },
      {
        japanese: "街をぶらぶら歩く",
        reading: "まちをぶらぶらあるく",
        english: "Aimlessly walk through town",
        breakdown: "街(town) + を + ぶらぶら(aimlessly) + 歩く(walk) - location as direct object"
      },
      {
        japanese: "高速道路を走る",
        reading: "こうそくどうろをはしる",
        english: "Run through expressway",
        breakdown: "高速道路(expressway) + を + 走る(run)"
      },
      {
        japanese: "毎日、日本語を勉強する",
        reading: "まいにち、にほんごをべんきょうする",
        english: "Study Japanese everyday",
        breakdown: "日本語(Japanese) + を (勉強する is noun+する verb)"
      }
    ],
    notes: "The を character is essentially never used anywhere else. Katakana ヲ is almost never used since particles are written in hiragana. Unlike English, places can be direct objects of motion verbs.",
    relatedGrammar: ["tk-basic-013-ni-particle", "tk-basic-004-ga-particle"],
    tags: ["tae-kim", "basic", "particles", "essential"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Particles Used with Verbs", url: "http://www.guidetojapanese.org/learn/grammar/particlesverb" }
    ]
  },

  {
    grammarId: "tk-basic-013-ni-particle",
    title: "に - Target Particle",
    titleJapanese: "に",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.8 Particles used with verbs (を、に、へ、で)",
    taeKimOrder: 13,
    explanation: "The に particle specifies a target of a verb - the verb does something TOWARD the word associated with に. Different from を where the verb acts ON the object. Used with: 1) motion verbs (target destination), 2) existence verbs ある/いる (location), 3) time (when something happens), 4) target of action (meet, become). The idea of target is very general in Japanese.",
    structure: "[Target] + に + [Verb]",
    examples: [
      {
        japanese: "ボブは日本に行った",
        reading: "ボブはにほんにいった",
        english: "Bob went to Japan",
        breakdown: "日本(Japan) + に(to-target) + 行った(went)"
      },
      {
        japanese: "家に帰らない",
        reading: "うちにかえらない",
        english: "Not go back home",
        breakdown: "家(home) + に(to) + 帰らない(not return)"
      },
      {
        japanese: "部屋にくる",
        reading: "へやにくる",
        english: "Come to room",
        breakdown: "部屋(room) + に(to) + くる(come)"
      },
      {
        japanese: "猫は部屋にいる",
        reading: "ねこはへやにいる",
        english: "Cat is in room",
        breakdown: "猫(cat) + は + 部屋(room) + に(location) + いる(exists)"
      },
      {
        japanese: "いすが台所にあった",
        reading: "いすがだいどころにあった",
        english: "Chair was in the kitchen",
        breakdown: "いす(chair) + が + 台所(kitchen) + に(location) + あった(existed)"
      },
      {
        japanese: "いい友達に会った",
        reading: "いいともだちにあった",
        english: "Met good friend",
        breakdown: "いい友達(good friend) + に(target of meeting) + 会った(met)"
      },
      {
        japanese: "ジムは医者になる",
        reading: "ジムはいしゃになる",
        english: "Jim will become doctor",
        breakdown: "医者(doctor) + に(target of becoming) + なる(become)"
      }
    ],
    notes: "Important: target always means 'to' not 'from'. For 'from' use から. Pairs with まで (up to): 今日から明日まで (from today to tomorrow). Don't forget ある for inanimate objects, いる for animate.",
    relatedGrammar: ["tk-basic-012-wo-particle", "tk-basic-014-e-particle", "tk-basic-015-de-particle"],
    tags: ["tae-kim", "basic", "particles", "essential"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Particles Used with Verbs", url: "http://www.guidetojapanese.org/learn/grammar/particlesverb" }
    ]
  },

  {
    grammarId: "tk-basic-014-e-particle",
    title: "へ - Directional Particle",
    titleJapanese: "へ",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.8 Particles used with verbs (を、に、へ、で)",
    taeKimOrder: 14,
    explanation: "While へ is normally pronounced /he/, as a particle it's always pronounced /e/. Primary difference from に: に goes to a target as the final intended destination, while へ expresses setting out TOWARDS the direction of the target. へ is fuzzy about the ultimate destination, only indicates heading in that direction. Only used with directional motion verbs. Cannot use with verbs that have no physical direction.",
    structure: "[Direction] + へ + [Motion verb]",
    examples: [
      {
        japanese: "ボブは日本へ行った",
        reading: "ボブはにほんへいった",
        english: "Bob headed towards Japan",
        breakdown: "日本(Japan) + へ(towards) + 行った(went)"
      },
      {
        japanese: "家へ帰らない",
        reading: "うちへかえらない",
        english: "Not go home toward house",
        breakdown: "家(house) + へ(towards) + 帰らない(not return)"
      },
      {
        japanese: "部屋へくる",
        reading: "へやへくる",
        english: "Come towards room",
        breakdown: "部屋(room) + へ(towards) + くる(come)"
      },
      {
        japanese: "勝ちへ向かう",
        reading: "かちへむかう",
        english: "Go towards victory",
        breakdown: "勝ち(victory) + へ(towards) + 向かう(head) - abstract concept"
      }
    ],
    notes: "Cannot say 医者へなる (incorrect). に sticks to destination, へ is fuzzy about where ultimately headed. Because of fuzzy directional meaning, へ can also be used for setting out towards future goals or expectations.",
    relatedGrammar: ["tk-basic-013-ni-particle", "tk-basic-012-wo-particle"],
    tags: ["tae-kim", "basic", "particles"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Particles Used with Verbs", url: "http://www.guidetojapanese.org/learn/grammar/particlesverb" }
    ]
  },

  {
    grammarId: "tk-basic-015-de-particle",
    title: "で - Context/Means Particle",
    titleJapanese: "で",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.8 Particles used with verbs (を、に、へ、で)",
    taeKimOrder: 15,
    explanation: "The で particle specifies the context in which the action is performed. Answers questions like: Where did the action take place? By what means did it happen? With what will you do it? Think of で as meaning 'by way of'. Note: 何で can be read as なにで (by what means?) or なんで (why? - colloquial).",
    structure: "[Context/Means/Location] + で + [Action]",
    examples: [
      {
        japanese: "映画館で見た",
        reading: "えいがかんでみた",
        english: "Saw at movie theater",
        breakdown: "映画館(movie theater) + で(at-location of action) + 見た(saw)"
      },
      {
        japanese: "バスで帰る",
        reading: "バスでかえる",
        english: "Go home by bus",
        breakdown: "バス(bus) + で(by means of) + 帰る(go home)"
      },
      {
        japanese: "レストランで昼ご飯を食べた",
        reading: "レストランでひるごはんをたべた",
        english: "Ate lunch at restaurant",
        breakdown: "レストラン(restaurant) + で(at) + 昼ご飯(lunch) + を + 食べた(ate)"
      },
      {
        japanese: "何できた？",
        reading: "なにできた？",
        english: "Came by the way of what?",
        breakdown: "何(what) + で(by means) + きた(came)"
      },
      {
        japanese: "バスできた",
        reading: "バスできた",
        english: "Came by the way of bus",
        breakdown: "バス(bus) + で + きた(came)"
      }
    ],
    notes: "Confusing: 何できた？ can be なにで (by what means?) or なんで (why?). The なんで version means 'why' and is completely separate from the particle. Context makes it clear which is intended 95% of the time.",
    relatedGrammar: ["tk-basic-013-ni-particle", "tk-basic-012-wo-particle"],
    tags: ["tae-kim", "basic", "particles", "essential"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Particles Used with Verbs", url: "http://www.guidetojapanese.org/learn/grammar/particlesverb" }
    ]
  },

  // ===== ESSENTIAL GRAMMAR: て-form =====
  {
    grammarId: "tk-essential-016-te-form",
    title: "て-form - Verb Connector",
    titleJapanese: "て形",
    jlptLevel: "N5",
    category: "verb-conjugation",
    taeKimSection: "4.4 Compound Sentences (て-form)",
    taeKimOrder: 16,
    explanation: "The て-form is used to express a sequence of verbs (I did X, then Y, then Z). Conjugate the verb to past tense and replace た with て or だ with で. It's called て-form even though it's sometimes で. The tense of all actions is determined by the tense of the LAST verb. Also used with ください for requests, and with いる for ongoing actions.",
    structure: "Positive: [Past tense] た→て or だ→で\\nNegative (like i-adj): Replace い with くて",
    examples: [
      {
        japanese: "食堂に行って、昼ご飯を食べて、昼寝をする",
        reading: "しょくどうにいって、ひるごはんをたべて、ひるねをする",
        english: "I will go to cafeteria, eat lunch, and take a nap",
        breakdown: "行く→行った→行って, 食べる→食べた→食べて, last verb する determines future tense"
      },
      {
        japanese: "食堂に行って、昼ご飯を食べて、昼寝をした",
        reading: "しょくどうにいって、ひるごはんをたべて、ひるねをした",
        english: "I went to cafeteria, ate lunch, and took a nap",
        breakdown: "Same verbs, but した at end makes everything past tense"
      },
      {
        japanese: "時間がありまして、映画を見ました",
        reading: "じかんがありまして、えいがをみました",
        english: "There was time and I watched a movie",
        breakdown: "ありました→ありまして (polite て-form from ます-stem)"
      }
    ],
    notes: "Conjugation rules from past tense: 食べた→食べて, 行った→行って, した→して, 遊んだ→遊んで, 飲んだ→飲んで. Negative: 食べない→食べなくて (remove い, add くて). Polite: です→でして, ます-endings work too.",
    relatedGrammar: ["tk-basic-011-past-tense", "tk-basic-010-negative-verbs"],
    tags: ["tae-kim", "essential", "verbs", "te-form"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - て-form", url: "http://www.guidetojapanese.org/learn/grammar/compound#Expressing_a_sequence_of_verbs_with_the_te-form" }
    ]
  },

  // Chapter 3.9 - Transitive and Intransitive Verbs
  {
    grammarId: "tk-basic-017-transitive-intransitive",
    title: "Transitive and Intransitive Verbs",
    titleJapanese: "他動詞と自動詞",
    jlptLevel: "N4",
    category: "verbs",
    taeKimSection: "3.9 Transitive and Intransitive Verbs",
    taeKimOrder: 17,
    explanation: "In Japanese, many verbs come in pairs: transitive (action done by someone) and intransitive (action that occurs naturally). Transitive verbs take を particle, intransitive verbs take が particle. Example pairs: 開ける (to open something) / 開く (to be opened), 消す (to turn off) / 消える (to go off).",
    structure: "Transitive: [Object]を + Verb, Intransitive: [Subject]が + Verb",
    examples: [
      {
        japanese: "私が電気をつけた",
        reading: "わたしがでんきをつけた",
        english: "I turned on the lights",
        breakdown: "つける (transitive) + を particle for direct object"
      },
      {
        japanese: "電気がついた",
        reading: "でんきがついた", 
        english: "The lights turned on",
        breakdown: "つく (intransitive) + が particle, no agent specified"
      },
      {
        japanese: "誰が窓を開けた？",
        reading: "だれがまどをあけた",
        english: "Who opened the window?",
        breakdown: "開ける (transitive) - someone performed the action"
      },
      {
        japanese: "窓がどうして開いた？",
        reading: "まどがどうしてあいた",
        english: "Why did the window open?",
        breakdown: "開く (intransitive) - window opened by itself"
      }
    ],
    notes: "Common pairs: 落とす/落ちる (drop/fall), 出す/出る (take out/come out), 入れる/入る (insert/enter), 開ける/開く (open/be opened), 閉める/閉まる (close/be closed), つける/つく (attach/be attached), 消す/消える (erase/disappear), 抜く/抜ける (extract/be extracted). Always pay attention to which particle to use!",
    relatedGrammar: ["tk-basic-012-wo-particle", "tk-basic-004-ga-particle"],
    tags: ["tae-kim", "basic", "verbs", "particles"],
    difficulty: 5,
    resources: [
      { name: "Tae Kim - Transitive/Intransitive", url: "http://www.guidetojapanese.org/learn/grammar/transitivity" }
    ]
  },

  // Chapter 3.10 - Relative Clauses
  {
    grammarId: "tk-basic-018-relative-clauses",
    title: "Relative Clauses",
    titleJapanese: "連体修飾",
    jlptLevel: "N4",
    category: "grammar-patterns",
    taeKimSection: "3.10 Relative Clauses and Sentence Order",
    taeKimOrder: 18,
    explanation: "In Japanese, you can directly modify nouns with verb clauses, adjective clauses, or state-of-being clauses (except plain だ). This is like saying 'the person who ate' or 'the movie that was interesting'. The modifying clause comes directly before the noun it modifies.",
    structure: "[Verb/Adjective clause] + Noun",
    examples: [
      {
        japanese: "先週に映画を見た人は誰？",
        reading: "せんしゅうにえいがをみたひとはだれ",
        english: "Who is the person who watched a movie last week?",
        breakdown: "映画を見た modifies 人"
      },
      {
        japanese: "ボブは、いつも勉強する人だ",
        reading: "ボブは、いつもべんきょうするひとだ",
        english: "Bob is a person who always studies",
        breakdown: "いつも勉強する modifies 人"
      },
      {
        japanese: "学生じゃない人は、学校に行かない",
        reading: "がくせいじゃないひとは、がっこうにいかない",
        english: "People who are not students do not go to school",
        breakdown: "学生じゃない modifies 人"
      },
      {
        japanese: "晩ご飯を食べなかった人は、映画で見た銀行に行った",
        reading: "ばんごはんをたべなかったひとは、えいがでみたぎんこうにいった",
        english: "The person who didn't eat dinner went to the bank she saw at the movie",
        breakdown: "Two relative clauses: 食べなかった modifies 人, 見た modifies 銀行"
      }
    ],
    notes: "Cannot use plain だ to directly modify nouns (use particles instead). Past, negative, and past-negative of state-of-being (だった, じゃない, じゃなかった) can modify nouns directly. Sentence order is flexible - only requirement is verb at end.",
    relatedGrammar: ["tk-basic-001-da", "tk-basic-005-na-adjectives", "tk-basic-006-i-adjectives"],
    tags: ["tae-kim", "basic", "relative-clauses", "modification"],
    difficulty: 6,
    resources: [
      { name: "Tae Kim - Relative Clauses", url: "http://www.guidetojapanese.org/learn/grammar/clause" }
    ]
  },

  // Chapter 3.11 - と particle (and)
  {
    grammarId: "tk-basic-019-to-particle",
    title: "と - And Particle",
    titleJapanese: "と",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.11 Noun-related Particles (と、や、とか、の)",
    taeKimOrder: 19,
    explanation: "The と particle connects two or more nouns to mean 'and'. It lists items exhaustively (all items are included). Also used to express doing something together with someone.",
    structure: "[Noun1]と[Noun2](と[Noun3]...) or [Person]と + Action",
    examples: [
      {
        japanese: "ナイフとフォークでステーキを食べた",
        reading: "ナイフとフォークでステーキをたべた",
        english: "Ate steak with knife and fork",
        breakdown: "ナイフとフォーク = knife and fork (exhaustive list)"
      },
      {
        japanese: "本と雑誌と葉書を買った",
        reading: "ほんとざっしとはがきをかった",
        english: "Bought book, magazine, and postcard",
        breakdown: "Three items connected with と"
      },
      {
        japanese: "友達と話した",
        reading: "ともだちとはなした",
        english: "Talked with friend",
        breakdown: "と shows action done together with someone"
      },
      {
        japanese: "先生と会った",
        reading: "せんせいとあった",
        english: "Met with teacher",
        breakdown: "と indicates doing action together"
      }
    ],
    notes: "と implies complete listing of items. Different from や/とか which are vague listings. When used with people, と shows doing action together/with someone.",
    relatedGrammar: ["tk-basic-020-ya-particle", "tk-basic-021-no-particle"],
    tags: ["tae-kim", "basic", "particles", "conjunction"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - と particle", url: "http://www.guidetojapanese.org/learn/grammar/nounparticles#The_Inclusive_と_particle" }
    ]
  },

  // Chapter 3.11 - や/とか particles
  {
    grammarId: "tk-basic-020-ya-particle",
    title: "や/とか - Vague Listing Particles",
    titleJapanese: "や・とか",
    jlptLevel: "N4",
    category: "particles",
    taeKimSection: "3.11 Noun-related Particles (と、や、とか、の)",
    taeKimOrder: 20,
    explanation: "The や and とか particles list items vaguely, implying there may be other unlisted items. Similar to 'and/or, etc.' in English. とか is more colloquial than や.",
    structure: "[Noun1]や[Noun2](や...) or [Noun1]とか[Noun2](とか...)",
    examples: [
      {
        japanese: "飲み物やカップやナプキンは、いらない？",
        reading: "のみものやカップやナプキンは、いらない",
        english: "You don't need things like drinks, cups, napkins, etc.?",
        breakdown: "や implies there might be other items"
      },
      {
        japanese: "靴やシャツを買う",
        reading: "くつやシャツをかう",
        english: "Buy things like shoes and shirts, etc.",
        breakdown: "や shows incomplete, vague listing"
      },
      {
        japanese: "飲み物とかカップとかナプキンは、いらない？",
        reading: "のみものとかカップとかナプキンは、いらない",
        english: "You don't need things like drinks, cups, napkins, etc.?",
        breakdown: "とか is colloquial version of や"
      }
    ],
    notes: "Use や/とか when you're giving examples, not a complete list. と = exhaustive list, や/とか = incomplete/example list. とか is more casual than や.",
    relatedGrammar: ["tk-basic-019-to-particle"],
    tags: ["tae-kim", "basic", "particles", "listing"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - や/とか", url: "http://www.guidetojapanese.org/learn/grammar/nounparticles#The_Vague_Listing_や_and_とか_particles" }
    ]
  },

  // Chapter 3.11 - の particle (possession/nominalization)
  {
    grammarId: "tk-basic-021-no-particle",
    title: "の - Possessive/Nominalizing Particle",
    titleJapanese: "の",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.11 Noun-related Particles (と、や、とか、の)",
    taeKimOrder: 21,
    explanation: "The の particle connects nouns (possession, description) and can nominalize verb/adjective clauses (turn them into noun phrases). Very versatile particle with multiple uses.",
    structure: "[Noun1]の[Noun2] or [Verb/Adj]の + (を/は/が...)",
    examples: [
      {
        japanese: "ボブの本",
        reading: "ボブのほん",
        english: "Bob's book",
        breakdown: "の shows possession"
      },
      {
        japanese: "アメリカの大学の学生",
        reading: "アメリカのだいがくのがくせい",
        english: "Student of an American college",
        breakdown: "Two の particles: アメリカの modifies 大学, 大学の modifies 学生"
      },
      {
        japanese: "白いのは、かわいい",
        reading: "しろいのは、かわいい",
        english: "The white one is cute",
        breakdown: "の nominalizes adjective 白い into 'white thing/one'"
      },
      {
        japanese: "毎日勉強するのは大変",
        reading: "まいにちべんきょうするのはたいへん",
        english: "Studying every day is tough",
        breakdown: "の nominalizes verb clause into noun 'the act of studying'"
      },
      {
        japanese: "授業に行くのを忘れた",
        reading: "じゅぎょうにいくのをわすれた",
        english: "Forgot to go to class",
        breakdown: "の creates noun from verb clause, を marks it as direct object"
      }
    ],
    notes: "の has many uses: possession (ボブの本), description (アメリカの大学), nominalization (食べるの), explanatory tone (忙しいの？). Can replace nouns when context is clear (これは誰の？= Whose is this?). For na-adjectives: need な before の (静かなの).",
    relatedGrammar: ["tk-basic-002-wa-particle", "tk-basic-012-wo-particle"],
    tags: ["tae-kim", "basic", "particles", "possession", "nominalization"],
    difficulty: 5,
    resources: [
      { name: "Tae Kim - の particle", url: "http://www.guidetojapanese.org/learn/grammar/nounparticles#The_の_particle" }
    ]
  },

  // Chapter 3.12 - Adverbs
  {
    grammarId: "tk-basic-022-adverbs",
    title: "Adverbs (Adjective → Adverb)",
    titleJapanese: "副詞",
    jlptLevel: "N4",
    category: "grammar-patterns",
    taeKimSection: "3.12 Adverbs and Sentence-ending particles",
    taeKimOrder: 22,
    explanation: "Adjectives can be converted to adverbs to modify verbs. い-adjectives: change い to く. な-adjectives: add に. Adverbs can be placed anywhere before the verb they modify.",
    structure: "い-adj: い→く, な-adj: +に",
    examples: [
      {
        japanese: "ボブは朝ご飯を早く食べた",
        reading: "ボブはあさごはんをはやくたべた",
        english: "Bob ate breakfast quickly/early",
        breakdown: "早い→早く (i-adjective to adverb)"
      },
      {
        japanese: "アリスは自分の部屋をきれいにした",
        reading: "アリスはじぶんのへやをきれいにした",
        english: "Alice cleaned her room",
        breakdown: "きれい→きれいに (na-adjective to adverb)"
      },
      {
        japanese: "この町は、最近大きく変わった",
        reading: "このまちは、さいきんおおきくかわった",
        english: "This town changed greatly recently",
        breakdown: "大きい→大きく"
      },
      {
        japanese: "図書館の中では、静かにする",
        reading: "としょかんのなかでは、しずかにする",
        english: "Inside the library, we do things quietly",
        breakdown: "静か→静かに"
      }
    ],
    notes: "Some words are inherently adverbs (たくさん, 全然, 最近) and don't need conjugation. Adverb placement is flexible - can go anywhere before verb. Remember: い→く, な→に.",
    relatedGrammar: ["tk-basic-005-na-adjectives", "tk-basic-006-i-adjectives"],
    tags: ["tae-kim", "basic", "adverbs", "adjectives"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Adverbs", url: "http://www.guidetojapanese.org/learn/grammar/adverbs" }
    ]
  },

  // Chapter 3.12 - Sentence-ending particles ね/よ
  {
    grammarId: "tk-basic-023-ne-yo-particles",
    title: "ね/よ - Sentence-ending Particles",
    titleJapanese: "ね・よ",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "3.12 Adverbs and Sentence-ending particles",
    taeKimOrder: 23,
    explanation: "Sentence-ending particles change the tone/feel of sentences. ね seeks agreement ('right?', 'isn't it?'). よ informs listener of new information ('you know...'). Can combine as よね.",
    structure: "[Sentence]ね or [Sentence]よ or [Sentence]よね",
    examples: [
      {
        japanese: "いい天気だね",
        reading: "いいてんきだね",
        english: "Nice weather, isn't it?",
        breakdown: "ね seeks agreement/confirmation"
      },
      {
        japanese: "おもしろい映画だったね",
        reading: "おもしろいえいがだったね",
        english: "That was an interesting movie, wasn't it?",
        breakdown: "ね expects listener to agree"
      },
      {
        japanese: "時間がないよ",
        reading: "じかんがないよ",
        english: "You know, there's no time",
        breakdown: "よ informs listener of something new"
      },
      {
        japanese: "明日雨が降るよ",
        reading: "あしたあめがふるよ",
        english: "It will rain tomorrow, you know",
        breakdown: "よ tells listener new information"
      },
      {
        japanese: "ボブは、魚が好きなんだよね",
        reading: "ボブは、さかながすきなんだよね",
        english: "You like fish, don't you?",
        breakdown: "よね combines both: informing + seeking agreement"
      }
    ],
    notes: "ね = seeking agreement/confirmation. よ = informing of new info. よね = informing + seeking agreement (always this order, never ねよ). Very common in conversation to soften tone.",
    relatedGrammar: ["tk-basic-001-da"],
    tags: ["tae-kim", "basic", "particles", "sentence-ending", "conversation"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - ね/よ", url: "http://www.guidetojapanese.org/learn/grammar/adverbs#Sentence-ending_particles" }
    ]
  },

  // Chapter 4.1 - Polite Form (です/ます)
  {
    grammarId: "tk-essential-024-polite-form",
    title: "Polite Form (です/ます)",
    titleJapanese: "丁寧語",
    jlptLevel: "N5",
    category: "grammar-patterns",
    taeKimSection: "4.1 Polite Form and Verb Stems",
    taeKimOrder: 24,
    explanation: "Polite form (丁寧語) is used when speaking to people of higher social rank or unfamiliar people. Verbs use ます-form, nouns/adjectives use です. The verb stem is created by: ru-verbs remove る, u-verbs change u-sound to i-sound.",
    structure: "Verb stem + ます/ません/ました/ませんでした, Noun/Adjective + です",
    examples: [
      {
        japanese: "明日、大学に行きます",
        reading: "あした、だいがくにいきます",
        english: "Tomorrow, I will go to college",
        breakdown: "行く → 行き (stem) + ます"
      },
      {
        japanese: "先週、ボブに会いましたよ",
        reading: "せんしゅう、ボブにあいましたよ",
        english: "You know, I met Bob last week",
        breakdown: "会う → 会い (stem) + ました"
      },
      {
        japanese: "晩ご飯を食べませんでしたね",
        reading: "ばんごはんをたべませんでしたね",
        english: "You didn't eat dinner, did you?",
        breakdown: "食べる → 食べ (stem) + ませんでした"
      },
      {
        japanese: "子犬はとても好きです",
        reading: "こいぬはとてもすきです",
        english: "I like puppies very much",
        breakdown: "好き (na-adj) + です"
      }
    ],
    notes: "Stem rules: 食べる→食べ, 泳ぐ→泳ぎ, する→し, 来る→き. です is NOT the same as だ - です cannot be used in relative clauses. For negatives: かわいくないです or more formal かわいくありません. Past: noun/na-adj becomes でした (NOT いいでした - wrong!)",
    relatedGrammar: ["tk-basic-007-ru-verbs", "tk-basic-008-u-verbs"],
    tags: ["tae-kim", "essential", "polite-form", "politeness"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Polite Form", url: "http://www.guidetojapanese.org/learn/grammar/politeform" }
    ]
  },

  // Chapter 4.3 - Question Marker か
  {
    grammarId: "tk-essential-025-question-marker",
    title: "Question Marker (か)",
    titleJapanese: "疑問文",
    jlptLevel: "N5",
    category: "particles",
    taeKimSection: "4.3 The Question Marker",
    taeKimOrder: 25,
    explanation: "The question marker か is attached to the end of sentences to clearly indicate a question in polite speech. Cannot use declarative だ with か. In casual speech, か is usually not used for questions - use rising intonation or の instead.",
    structure: "[Sentence]か (no question mark needed, no だ)",
    examples: [
      {
        japanese: "お母さんはどこですか",
        reading: "おかあさんはどこですか",
        english: "Where is (your) mother?",
        breakdown: "Polite question with か"
      },
      {
        japanese: "イタリア料理を食べに行きませんか",
        reading: "イタリアりょうりをたべにいきませんか",
        english: "Won't you go eat Italian food?",
        breakdown: "Negative question used as invitation"
      },
      {
        japanese: "昨日何を食べたか忘れた",
        reading: "きのうなにをたべたかわすれた",
        english: "I forgot what I ate yesterday",
        breakdown: "か in relative clause creates embedded question"
      },
      {
        japanese: "先生が学校に行ったかどうか知らない",
        reading: "せんせいががっこうにいったかどうかしらない",
        english: "I don't know whether or not the teacher went to school",
        breakdown: "かどうか = whether or not"
      }
    ],
    notes: "Question words + か: 誰か (someone), 何か (something), いつか (sometime), どこか (somewhere), どれか (a certain one). + も in negative: 誰も (nobody), 何も (nothing), どこも (nowhere). + でも: 誰でも (anybody), 何でも (anything), どこでも (anywhere).",
    relatedGrammar: ["tk-essential-024-polite-form"],
    tags: ["tae-kim", "essential", "questions", "particles"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Question Marker", url: "http://www.guidetojapanese.org/learn/grammar/questionmarker" }
    ]
  },

  // Chapter 4.4 - から/ので (Reason)
  {
    grammarId: "tk-essential-026-kara-node",
    title: "から/ので - Expressing Reason",
    titleJapanese: "理由の表現",
    jlptLevel: "N5",
    category: "grammar-patterns",
    taeKimSection: "4.4 Compound Sentences",
    taeKimOrder: 26,
    explanation: "から and ので connect sentences to express reason/cause. Order: [Reason] から/ので [Result]. から explicitly states reason, ので is softer/more polite (puts sentences together with explanatory tone). Must add だ to nouns/na-adj with から.",
    structure: "[Reason]から[Result] or [Reason]ので[Result]",
    examples: [
      {
        japanese: "時間がなかったからパーティーに行きませんでした",
        reading: "じかんがなかったからパーティーにいきませんでした",
        english: "I didn't go to the party because I had no time",
        breakdown: "から explicitly states reason"
      },
      {
        japanese: "ちょっと忙しいので、そろそろ失礼します",
        reading: "ちょっといそがしいので、そろそろしつれいします",
        english: "Because I'm a little busy, I'll be taking my leave soon",
        breakdown: "ので is softer, more polite for excuses"
      },
      {
        japanese: "私は学生なので、お金がないんです",
        reading: "わたしはがくせいなので、おかねがないんです",
        english: "Because I'm a student, I have no money",
        breakdown: "な required for nouns with ので"
      },
      {
        japanese: "時間がなかったんでパーティーに行かなかった",
        reading: "じかんがなかったんでパーティーにいかなかった",
        english: "Didn't go to party because had no time",
        breakdown: "んで is casual contraction of ので"
      }
    ],
    notes: "Difference: から = explicit reason 'because X', ので = causation 'X happened, so Y'. ので preferred for apologies/excuses. Can omit reason or result if clear from context. Remember: のだ/のです → ので (explanatory の). Speech: ので often becomes んで.",
    relatedGrammar: ["tk-basic-021-no-particle"],
    tags: ["tae-kim", "essential", "reason", "compound-sentences"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - Compound Sentences", url: "http://www.guidetojapanese.org/learn/grammar/compound" }
    ]
  },

  // Chapter 4.4 - のに (Despite)
  {
    grammarId: "tk-essential-027-noni",
    title: "のに - Despite",
    titleJapanese: "逆接",
    jlptLevel: "N3",
    category: "grammar-patterns",
    taeKimSection: "4.4 Compound Sentences",
    taeKimOrder: 27,
    explanation: "のに expresses contradiction/unexpected result: 'despite the fact that'. Used exactly like ので grammatically, but order is reversed: [Result]のに[Expectation]. Shows that the result contradicts what you'd normally expect.",
    structure: "[Unexpected Result]のに[Expectation/Reason]",
    examples: [
      {
        japanese: "毎日運動したのに、全然痩せなかった",
        reading: "まいにちうんどうしたのに、ぜんぜんやせなかった",
        english: "Despite exercising every day, I didn't get thin at all",
        breakdown: "Expected to lose weight but didn't"
      },
      {
        japanese: "学生なのに、彼女は勉強しない",
        reading: "がくせいなのに、かのじょはべんきょうしない",
        english: "Despite being a student, she doesn't study",
        breakdown: "な required for nouns, contradiction of expected behavior"
      }
    ],
    notes: "Used same way as ので but with opposite meaning (contradiction vs reason). Always shows unexpected/contrary result. Requires な for nouns and na-adjectives like ので.",
    relatedGrammar: ["tk-essential-026-kara-node"],
    tags: ["tae-kim", "essential", "contradiction", "compound-sentences"],
    difficulty: 5,
    resources: [
      { name: "Tae Kim - Compound Sentences", url: "http://www.guidetojapanese.org/learn/grammar/compound#Expressing_contradiction" }
    ]
  },

  // Chapter 4.4 - が/けど (But/Contradiction)
  {
    grammarId: "tk-essential-028-ga-kedo",
    title: "が/けど - But/Contradiction",
    titleJapanese: "逆接・接続",
    jlptLevel: "N5",
    category: "grammar-patterns",
    taeKimSection: "4.4 Compound Sentences",
    taeKimOrder: 28,
    explanation: "が and けど connect sentences to express contradiction or simply as general connector. が is softer/more polite than けど. Unlike English 'but', often used just to connect topics without actual contradiction. Requires だ for nouns/na-adj.",
    structure: "[Sentence 1]が/けど[Sentence 2]",
    examples: [
      {
        japanese: "デパートに行きましたが、何も欲しくなかったです",
        reading: "デパートにいきましたが、なにもほしくなかったです",
        english: "I went to the department store but didn't want anything",
        breakdown: "が with polite ました ending"
      },
      {
        japanese: "友達に聞いたけど、知らなかった",
        reading: "ともだちにきいたけど、しらなかった",
        english: "I asked a friend but he didn't know",
        breakdown: "けど with plain ending"
      },
      {
        japanese: "今日は暇だけど、明日は忙しい",
        reading: "きょうはひまだけど、あしたはいそがしい",
        english: "I'm free today but busy tomorrow",
        breakdown: "だ required with na-adjective"
      },
      {
        japanese: "デパートに行きましたが、いい物がたくさんありました",
        reading: "デパートにいきましたが、いいものがたくさんありました",
        english: "I went to the department store and there was a lot of good stuff",
        breakdown: "が as general connector, not contradiction"
      }
    ],
    notes: "が softer/more polite, けど more casual. More formal: けれど, けれども. Often used as topic connector without actual contradiction (like English 'and'). が commonly with ます/です, けど with plain forms.",
    relatedGrammar: ["tk-essential-027-noni"],
    tags: ["tae-kim", "essential", "contradiction", "conjunction"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Compound Sentences", url: "http://www.guidetojapanese.org/learn/grammar/compound" }
    ]
  },

  // Chapter 4.4 - し (Multiple Reasons)
  {
    grammarId: "tk-essential-029-shi",
    title: "し - Multiple Reasons",
    titleJapanese: "複数理由",
    jlptLevel: "N4",
    category: "grammar-patterns",
    taeKimSection: "4.4 Compound Sentences",
    taeKimOrder: 29,
    explanation: "し lists multiple reasons for states or actions, similar to や particle but for verbs/adjectives. Implies there may be other unstated reasons. Add だ for nouns and na-adjectives. Can list multiple reasons ending with し, し, し...",
    structure: "[Reason 1]し、[Reason 2]し、[Reason 3]し...",
    examples: [
      {
        japanese: "先生だし、年上だし",
        reading: "せんせいだし、としうえだし",
        english: "Well, he's the teacher, and he's older...",
        breakdown: "Multiple reasons with だ for nouns"
      },
      {
        japanese: "優しいし、かっこいいし、面白いから",
        reading: "やさしいし、かっこいいし、おもしろいから",
        english: "Because he's kind, attractive, and interesting (among other things)",
        breakdown: "Multiple i-adjective reasons, implies more reasons exist"
      }
    ],
    notes: "Similar to や particle for nouns (vague listing). Implies non-exhaustive list of reasons. Different from て-form which just lists facts - し emphasizes these are reasons and hints at more. Must use だ with nouns/na-adjectives.",
    relatedGrammar: ["tk-essential-026-kara-node", "tk-basic-020-ya-particle"],
    tags: ["tae-kim", "essential", "reasons", "listing"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - し", url: "http://www.guidetojapanese.org/learn/grammar/compound#Expressing_multiple_reasons" }
    ]
  },

  // Chapter 4.4 - 〜たりする (Multiple Actions)
  {
    grammarId: "tk-essential-030-tarisuru",
    title: "〜たりする - Listing Sample Actions",
    titleJapanese: "動作の例示",
    jlptLevel: "N4",
    category: "grammar-patterns",
    taeKimSection: "4.4 Compound Sentences",
    taeKimOrder: 30,
    explanation: "〜たりする lists example actions among a larger possible list (verb version of や). Conjugate each verb to past tense, add り, end with する. Tense determined by final する. Can also use with state-of-being for varying states.",
    structure: "[Verb1-た]り[Verb2-た]りする",
    examples: [
      {
        japanese: "映画を見たり、本を読んだり、昼寝したりする",
        reading: "えいがをみたり、ほんをよんだり、ひるねしたりする",
        english: "I do things like watch movies, read books, and take naps (among other things)",
        breakdown: "見た→見たり, 読んだ→読んだり, した→したり + する"
      },
      {
        japanese: "この大学の授業は簡単だったり、難しかったりする",
        reading: "このだいがくのじゅぎょうはかんたんだったり、むずかしかったりする",
        english: "Classes at this college are sometimes easy, sometimes difficult",
        breakdown: "State-of-being: だった→だったり, かった→かったり"
      },
      {
        japanese: "映画を見たり、本を読んだりした",
        reading: "えいがをみたり、ほんをよんだりした",
        english: "I did things like watch movies and read books",
        breakdown: "Past tense by changing final する→した"
      }
    ],
    notes: "Implies incomplete list of actions (among other possibilities). Similar to や for nouns. Tense/polarity controlled by final する (しない, した, しなかった). For state-of-being: use past tense + り (簡単だった→簡単だったり).",
    relatedGrammar: ["tk-basic-020-ya-particle", "tk-basic-011-past-tense"],
    tags: ["tae-kim", "essential", "actions", "listing"],
    difficulty: 5,
    resources: [
      { name: "Tae Kim - たりする", url: "http://www.guidetojapanese.org/learn/grammar/compound#tarisuru" }
    ]
  },

  // Chapter 4.5 - 〜ている (Progressive/Enduring State)
  {
    grammarId: "tk-essential-031-teiru",
    title: "〜ている - Progressive/Enduring State",
    titleJapanese: "進行形・継続",
    jlptLevel: "N5",
    category: "grammar-patterns",
    taeKimSection: "4.5 Other uses of the te-form",
    taeKimOrder: 31,
    explanation: "〜ている describes continuing state of action ('is doing'). Conjugate to て-form and add いる (conjugates as ru-verb). Often abbreviated to 〜てる in speech. For some verbs describes resultant state not action (知っている = knows, not is knowing).",
    structure: "[Verb-て form]いる/います",
    examples: [
      {
        japanese: "友達は昼ご飯を食べている",
        reading: "ともだちはひるごはんをたべている",
        english: "Friend is eating lunch",
        breakdown: "食べる→食べて→食べている"
      },
      {
        japanese: "何を読んでいますか",
        reading: "なにをよんでいますか",
        english: "What are you reading?",
        breakdown: "読む→読んで→読んでいる + polite form"
      },
      {
        japanese: "話を聞いていない",
        reading: "はなしをきいていない",
        english: "I'm not listening",
        breakdown: "Negative: いる→いない"
      },
      {
        japanese: "この歌を知っていますか",
        reading: "このうたをしっていますか",
        english: "Do you know this song?",
        breakdown: "知る uses ている for resultant state of knowing"
      },
      {
        japanese: "もう、家に帰っている",
        reading: "もう、いえにかえっている",
        english: "He's already at home (went home and is there)",
        breakdown: "Motion verb: completed action + current state"
      }
    ],
    notes: "Abbreviated: ている→てる, でいる→でる in casual speech. Some verbs describe resultant state: 知っている (know), 結婚している (is married), 持っている (have), 住んでいる (live/reside). Motion verbs (行く,来る): means completed action + current location. Conjugates as regular ru-verb after attaching いる.",
    relatedGrammar: ["tk-essential-016-te-form"],
    tags: ["tae-kim", "essential", "progressive", "state", "te-form"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - ている", url: "http://www.guidetojapanese.org/learn/grammar/teform#teiru" }
    ]
  },

  // Chapter 4.5 - てある (resultant state)
  {
    grammarId: "tk-essential-032",
    title: "てある - Resultant State",
    titleJapanese: "〜てある",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.5",
    taeKimOrder: 32,
    explanation: "By replacing いる with ある in the て-form construction, it becomes a resultant state after an action has been completed. This expression is used to explain that something is in a state of completion, usually carrying a nuance of being completed in preparation for something else.",
    structure: "Verb (て-form) + ある",
    examples: [
      {
        japanese: "準備は、もうしてあるよ。",
        reading: "じゅんびは、もうしてあるよ。",
        english: "The preparations are already done.",
        breakdown: "準備 (preparation) + は (topic) + もう (already) + してある (is done/completed). The use of してある emphasizes the completed state."
      },
      {
        japanese: "切符を買ったし、ホテルの予約もしてある。",
        reading: "きっぷをかったし、ホテルのよやくもしてある。",
        english: "Not only did I buy the ticket, I also took care of the hotel reservations.",
        breakdown: "切符 (ticket) + を買った (bought) + し (and also) + ホテルの予約 (hotel reservation) + も (also) + してある (have done/completed)."
      }
    ],
    notes: "Since this grammar describes the state of a completed action, it is common to see the は and も particles instead of the を particle. The completed action carries a nuance of preparation for something else.",
    relatedGrammar: ["tk-essential-031", "tk-essential-033"],
    tags: ["tae-kim", "essential", "state", "completion", "te-form", "preparation"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - てある", url: "http://www.guidetojapanese.org/learn/grammar/compound#Using_てある_as_resultant_state" }
    ]
  },

  // Chapter 4.5 - ておく (preparation for future)
  {
    grammarId: "tk-essential-033",
    title: "ておく - Preparation for the Future",
    titleJapanese: "〜ておく",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.5",
    taeKimOrder: 33,
    explanation: "Using ておく explicitly states that an action is done (or will be done) with the future in mind. The verb おく (置く, to place) describes preparation for the future. While 置く by itself is written in kanji, it's customary to use hiragana when attached to a conjugated verb.",
    structure: "Verb (て-form) + おく  [Casual abbreviation: 〜とく]",
    examples: [
      {
        japanese: "晩ご飯を作っておく。",
        reading: "ばんごはんをつくっておく。",
        english: "Make dinner (in advance for the future).",
        breakdown: "晩ご飯 (dinner) + を + 作って (make, て-form) + おく (place/prepare). Making dinner now for later consumption."
      },
      {
        japanese: "電池を買っておきます。",
        reading: "でんちをかっておきます。",
        english: "I'll buy batteries (in advance for the future).",
        breakdown: "電池 (battery) + を + 買って (buy, て-form) + おきます (will prepare, polite). Buying batteries now to have them ready."
      },
      {
        japanese: "晩ご飯を作っとく。",
        reading: "ばんごはんをつくっとく。",
        english: "Make dinner (in advance for the future).",
        breakdown: "Casual abbreviation: ておく → とく. Same meaning as the first example but more casual."
      }
    ],
    notes: "ておく is often abbreviated to とく in casual speech for convenience. This grammar explicitly shows preparation or doing something in advance, unlike てある which describes a completed resultant state.",
    relatedGrammar: ["tk-essential-032"],
    tags: ["tae-kim", "essential", "preparation", "future", "te-form", "casual-speech"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - ておく", url: "http://www.guidetojapanese.org/learn/grammar/compound#Using_ておく_as_preparation" }
    ]
  },

  // Chapter 4.5 - Motion verbs with て-form
  {
    grammarId: "tk-essential-034",
    title: "Motion Verbs with て-form (ていく/てくる)",
    titleJapanese: "〜ていく・〜てくる",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.5",
    taeKimOrder: 34,
    explanation: "Motion verbs 行く (to go) and 来る (to come) can be used with the て-form to show that an action is oriented toward or from someplace. Most commonly used with 持つ (to hold) to express taking or bringing something. Can also express actions moving forward in time (toward the future) or coming up to the present.",
    structure: "Verb (て-form) + いく/くる",
    examples: [
      {
        japanese: "鉛筆を学校へ持っていく？",
        reading: "えんぴつをがっこうへもっていく？",
        english: "Are you taking a pencil to school?",
        breakdown: "鉛筆 (pencil) + を + 学校へ (to school) + 持って (hold, て-form) + いく (go). Literally 'hold and go' = take."
      },
      {
        japanese: "鉛筆を家に持ってくる？",
        reading: "えんぴつをいえにもってくる？",
        english: "Are you bringing a pencil home?",
        breakdown: "鉛筆 (pencil) + を + 家に (to home) + 持って (hold) + くる (come). Literally 'hold and come' = bring."
      },
      {
        japanese: "お父さんは、早く帰ってきました。",
        reading: "おとうさんは、はやくかえってきました。",
        english: "Father came back home early.",
        breakdown: "お父さん (father) + は + 早く (early) + 帰って (return, て-form) + きました (came, polite past). Returned and came = came back."
      },
      {
        japanese: "冬に入って、コートを着ている人が増えていきます。",
        reading: "ふゆにはいって、コートをきているひとがふえていきます。",
        english: "Entering winter, people wearing coats will increase (toward the future).",
        breakdown: "Time expression: 増えていく means 'will increase moving forward in time', expressing change toward the future."
      },
      {
        japanese: "色々な人と付き合ってきたけど、いい人はまだ見つからない。",
        reading: "いろいろなひととつきあってきたけど、いいひとはまだみつからない。",
        english: "I've dated various types of people (up to the present) but a good person hasn't been found yet.",
        breakdown: "付き合ってきた uses てくる to express experience accumulated up to the present moment."
      }
    ],
    notes: "Think of these as a sequence of actions: hold and go, or hold and come. When used in time expressions, ていく moves toward the future, while てくる brings experience from the past up to the present. 持っている = possess (state), 持っていく = take (action toward), 持ってくる = bring (action from).",
    relatedGrammar: ["tk-essential-031", "tk-basic-016"],
    tags: ["tae-kim", "essential", "motion", "direction", "te-form", "time-expression"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - Motion Verbs", url: "http://www.guidetojapanese.org/learn/grammar/compound#Using_motion_verbs" }
    ]
  },

  // Chapter 4.6 - Potential Form
  {
    grammarId: "tk-essential-035",
    title: "Potential Form - Expressing Ability",
    titleJapanese: "可能形",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.6",
    taeKimOrder: 35,
    explanation: "In Japanese, the ability to do a certain action is expressed by conjugating the verb rather than adding a word like 'can' or 'able to'. All verbs conjugated into the potential form become ru-verbs. The potential form indicates that something is possible but no actual action is taken - it describes a state of feasibility.",
    structure: "Ru-verbs: Remove る + られる\nU-verbs: Change u-vowel to e-vowel + る\nする → できる\nくる → こられる",
    examples: [
      {
        japanese: "漢字は書けますか？",
        reading: "かんじはかけますか？",
        english: "Can you write kanji?",
        breakdown: "書く (to write) → 書ける (can write). U-verb: く → け + る. Polite question form."
      },
      {
        japanese: "残念だが、今週末は行けない。",
        reading: "ざんねんだが、こんしゅうまつはいけない。",
        english: "It's unfortunate, but I can't go this weekend.",
        breakdown: "行く (to go) → 行ける (can go) → 行けない (can't go). Negative potential form."
      },
      {
        japanese: "もう信じられない。",
        reading: "もうしんじられない。",
        english: "I can't believe it already.",
        breakdown: "信じる (to believe) → 信じられる (can believe) → 信じられない (can't believe). Ru-verb potential."
      },
      {
        japanese: "富士山が登れた。",
        reading: "ふじさんがのぼれた。",
        english: "Was able to climb Mt. Fuji.",
        breakdown: "Note the particle: が (not を). Potential forms don't take direct objects because they describe states of possibility, not actions."
      }
    ],
    notes: "IMPORTANT: Potential forms do NOT use the を particle because they describe states (what is possible) rather than actions. Use が or は instead. The casual potential for ru-verbs (食べれる instead of 食べられる) is common but considered slang - learn the standard られる form first. Special verbs: 見える/聞こえる (to be visible/audible) vs 見られる/聞ける (to be able to see/hear).",
    relatedGrammar: ["tk-essential-037", "tk-basic-005"],
    tags: ["tae-kim", "essential", "potential", "ability", "conjugation", "particles"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Potential Form", url: "http://www.guidetojapanese.org/learn/grammar/potential" }
    ]
  },

  // Chapter 4.7 - する/なる with に particle
  {
    grammarId: "tk-essential-036",
    title: "する and なる with に Particle",
    titleJapanese: "〜にする・〜になる",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.7",
    taeKimOrder: 36,
    explanation: "Using する and なる with the に particle creates useful expressions. なる (to become) always uses に because becoming is a target of change, not an action done to something. する with に means 'to decide on [X]' rather than 'to do [X]'. For verbs, use こと or よう to nominalize them first.",
    structure: "Noun/Na-adj + になる (to become)\nNoun + にする (to decide on)\nVerb + ことになる/にする\nVerb + ようになる/にする",
    examples: [
      {
        japanese: "彼の日本語が上手になった。",
        reading: "かれのにほんごがじょうずになった。",
        english: "His Japanese has become skillful.",
        breakdown: "上手 (skillful, na-adj) + に + なった (became). Standard becoming pattern for na-adjectives."
      },
      {
        japanese: "私はハンバーガーとサラダにします。",
        reading: "わたしはハンバーガーとサラダにします。",
        english: "I'll have the hamburger and salad.",
        breakdown: "Common when ordering: にする means 'I decide on/choose'. Literally 'do toward hamburger and salad'."
      },
      {
        japanese: "去年から背が高くなったね。",
        reading: "きょねんからせがたかくなったね。",
        english: "Your height has gotten taller from last year, huh?",
        breakdown: "高い (tall, i-adj) → 高く (adverb form) + なった. I-adjectives use adverb form before なる."
      },
      {
        japanese: "海外に行くことになった。",
        reading: "かいがいにいくことになった。",
        english: "It's been decided that I will go abroad.",
        breakdown: "行く (verb) + こと (nominalizer) + に + なった. Literally 'became the event of going abroad' = it was decided."
      },
      {
        japanese: "毎日、肉を食べるようにする。",
        reading: "まいにち、にくをたべるようにする。",
        english: "I will try to eat meat everyday.",
        breakdown: "食べる + ように + する. Literally 'do toward the manner of eating meat' = make an effort to eat meat."
      },
      {
        japanese: "日本に来て、寿司が食べられるようになった。",
        reading: "にほんにきて、すしがたべられるようになった。",
        english: "After coming to Japan, I became able to eat sushi.",
        breakdown: "Potential verb (食べられる) + ように + なった. Describes change in ability/manner - a common pattern with potential forms."
      }
    ],
    notes: "Key patterns: になる (become), にする (decide on/make something). For verbs: ことになる (it becomes/is decided that), ことにする (decide to), ようになる (become able to/come to do), ようにする (try to/make effort toward). The ようになる pattern is especially common with potential verbs to describe gaining new abilities.",
    relatedGrammar: ["tk-essential-035", "tk-basic-004", "tk-essential-006"],
    tags: ["tae-kim", "essential", "change", "decision", "particles", "nominalization"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - する/なる", url: "http://www.guidetojapanese.org/learn/grammar/surunaru" }
    ]
  },

  // Chapter 4.8 - Conditionals (と/なら/ば/たら)
  {
    grammarId: "tk-essential-037",
    title: "Conditionals - Four Types of 'If'",
    titleJapanese: "条件形（と・なら・ば・たら）",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.8",
    taeKimOrder: 37,
    explanation: "Japanese has four ways to say 'if': と (natural consequence), なら (contextual), ば (general conditional), and たら (past conditional). Each has specific nuances and usage patterns. Understanding when to use each type is crucial for natural Japanese.",
    structure: "と: [Condition] + と + [Result]\nなら: [Context] + なら + [Result]\nば: Verb e-form + ば, i-adj(-い) + ければ, Noun/Na-adj + であれば\nたら: Past tense + ら",
    examples: [
      {
        japanese: "ボールを落とすと落ちる。",
        reading: "ボールをおとすとおちる。",
        english: "If you drop the ball, it will fall.",
        breakdown: "と conditional: natural consequence, no question about it. Action A naturally leads to result B."
      },
      {
        japanese: "学校に行かないと友達と会えないよ。",
        reading: "がっこうにいかないとともだちとあえないよ。",
        english: "If you don't go to school, you can't meet your friends.",
        breakdown: "と with negative + potential form. Speaker presents this as an expected natural consequence."
      },
      {
        japanese: "皆が行くなら私も行く。",
        reading: "みんながいくならわたしもいく。",
        english: "If given that everybody is going, then I'll go too.",
        breakdown: "なら: contextual conditional. 'Given this context/situation, then...' Don't attach だ to nouns/na-adj with なら."
      },
      {
        japanese: "図書館なら、あそこです。",
        reading: "としょかんなら、あそこです。",
        english: "If you're talking about the library, then it's over there.",
        breakdown: "なら with noun: 'if given that context'. Common in conversations to clarify what's being discussed."
      },
      {
        japanese: "友達に会えれば、買い物に行きます。",
        reading: "ともだちにあえれば、かいものにいきます。",
        english: "If I can meet with my friend, we will go shopping.",
        breakdown: "ば conditional: general 'if'. Verb potential form 会える → 会えれば. Focuses on the conditional part itself."
      },
      {
        japanese: "お金があればいいね。",
        reading: "おかねがあればいいね。",
        english: "If I had money, it would be good, huh?",
        breakdown: "ある → あれば. ば conditional with existence verb. Expresses hypothetical wish."
      },
      {
        japanese: "暇だったら、遊びに行くよ。",
        reading: "ひまだったら、あそびにいくよ。",
        english: "If I am free, I will go play.",
        breakdown: "たら conditional: past tense + ら. 暇だ → 暇だった → 暇だったら. Focuses on what happens after the condition."
      },
      {
        japanese: "友達に会えたら、買い物に行きます。",
        reading: "ともだちにあえたら、かいものにいきます。",
        english: "If I can meet with my friend, we will go shopping.",
        breakdown: "たら version: 会える → 会えた → 会えたら. Slightly different nuance from ば - more focused on the result."
      },
      {
        japanese: "家に帰ったら、誰もいなかった。",
        reading: "いえにかえったら、だれもいなかった。",
        english: "When I went home, there was no one there.",
        breakdown: "Special たら usage: result can be in past. Expresses surprise at unexpected result. Not really an 'if' here."
      }
    ],
    notes: "Key differences: と = natural consequence (if A, then B naturally follows); なら = contextual (given context A, then B); ば = general conditional (focuses on the condition); たら = focuses on what comes after (past conditional). たら is the only type where the result can be past tense. もし (if by any chance) can be used with any conditional to add uncertainty. For i-adjectives and verbs, ば and たら are often interchangeable but たら sounds more natural when focusing on results.",
    relatedGrammar: ["tk-essential-026", "tk-essential-025", "tk-essential-040"],
    tags: ["tae-kim", "essential", "conditionals", "if", "と", "なら", "ば", "たら"],
    difficulty: 5,
    resources: [
      { name: "Tae Kim - Conditionals", url: "http://www.guidetojapanese.org/learn/grammar/conditionals" }
    ]
  },

  // Chapter 4.9 - Must/Have to
  {
    grammarId: "tk-essential-038",
    title: "Expressing 'Must' or 'Have To'",
    titleJapanese: "〜なければならない・〜なくてはいけない",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.9",
    taeKimOrder: 38,
    explanation: "To express must/have to in Japanese, use negative verb forms with だめ (no good), いけない, or ならない. The double negative creates the meaning 'must do'. Three methods exist: negative て-form + は, negative verb + と conditional, and negative verb + ば conditional. Casual shortcuts: なくちゃ and なきゃ.",
    structure: "Must do: Neg. て-form + は + だめ/いけない/ならない\nMust do: Neg. verb + と + だめ/いけない/ならない\nMust do: Neg. verb + ば + だめ/いけない/ならない\nMust not: て-form + は + だめ/いけない/ならない\nCasual: なくちゃ/なきゃ (だめ/いけない optional)",
    examples: [
      {
        japanese: "ここに入ってはいけません。",
        reading: "ここにはいってはいけません。",
        english: "You must not enter here.",
        breakdown: "入る → 入って (て-form) + は + いけません. Must not pattern: positive て-form + は + negative word."
      },
      {
        japanese: "それを食べてはだめ！",
        reading: "それをたべてはだめ！",
        english: "You can't (must not) eat that!",
        breakdown: "食べて + は + だめ. Casual prohibition. だめ is most casual, いけない and ならない more formal."
      },
      {
        japanese: "毎日学校に行かなくてはなりません。",
        reading: "まいにちがっこうにいかなくてはなりません。",
        english: "Must go to school everyday.",
        breakdown: "行く → 行かない (negative) → 行かなくて (neg. て-form) + は + なりません. Double negative = must."
      },
      {
        japanese: "宿題をしなくてはいけなかった。",
        reading: "しゅくだいをしなくてはいけなかった。",
        english: "Had to do homework.",
        breakdown: "Past tense of いけない. Shows obligation that existed in the past."
      },
      {
        japanese: "毎日学校に行かないとだめです。",
        reading: "まいにちがっこうにいかないとだめです。",
        english: "Must go to school everyday.",
        breakdown: "Negative verb + と conditional. Shorter and easier than は method. Most common in speech."
      },
      {
        japanese: "毎日学校に行かなければいけません。",
        reading: "まいにちがっこうにいかなければいけません。",
        english: "Must go to school everyday.",
        breakdown: "Negative verb + ば conditional. 行かない → 行かなければ (remove い + ければ)."
      },
      {
        japanese: "勉強しなくちゃ。",
        reading: "べんきょうしなくちゃ。",
        english: "Gotta study.",
        breakdown: "Casual shortcut: なくて → なくちゃ. Can drop だめ/いけない entirely in casual speech."
      },
      {
        japanese: "ご飯を食べなきゃ。",
        reading: "ごはんをたべなきゃ。",
        english: "Gotta eat.",
        breakdown: "Casual shortcut: なければ → なきゃ. Very common in conversation."
      },
      {
        japanese: "学校に行かないと。",
        reading: "がっこうにいかないと。",
        english: "Gotta go to school.",
        breakdown: "Most casual: just と conditional with だめ/いけない dropped. Very common."
      },
      {
        japanese: "ここに入っちゃだめだよ。",
        reading: "ここにはいっちゃだめだよ。",
        english: "You can't enter here.",
        breakdown: "Casual prohibition: ては → ちゃ. Note: verbs ending in む/ぶ/ぬ use じゃ instead (死んじゃだめ)."
      }
    ],
    notes: "Three ways to say must: 1) なくては (formal), 2) ないと (most common in speech), 3) なければ (general). All use double negative logic. Differences: だめ (casual), いけない (general), ならない (rules/policies for multiple people). Casual shortcuts are very common: なくちゃ/なきゃ (cute/childish), ないと (neutral). For prohibition (must not): ては/では with だめ/いけない/ならない, casual ちゃ (じゃ for む/ぶ/ぬ verbs). Reality: なくては and なければ are long, so people use ないと or shortcuts in conversation.",
    relatedGrammar: ["tk-essential-037", "tk-essential-016", "tk-essential-039"],
    tags: ["tae-kim", "essential", "obligation", "must", "have-to", "prohibition", "casual-speech"],
    difficulty: 4,
    resources: [
      { name: "Tae Kim - Must/Have to", url: "http://www.guidetojapanese.org/learn/grammar/musthaveto" }
    ]
  },

  // Chapter 4.9 - Saying it's ok (don't have to)
  {
    grammarId: "tk-essential-039",
    title: "Expressing 'It's OK' or 'Don't Have To'",
    titleJapanese: "〜てもいい",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.9",
    taeKimOrder: 39,
    explanation: "Using the て-form with the も particle expresses 'even if you do X...' followed by いい (good), 大丈夫 (ok), or 構わない (don't mind). This is how to express permission or that something is not necessary. In casual speech, ても often shortens to just て.",
    structure: "Verb (て-form) + も + いい/大丈夫/構わない\nCasual: て + いい (dropping も)",
    examples: [
      {
        japanese: "全部食べてもいいよ。",
        reading: "ぜんぶたべてもいいよ。",
        english: "You can go ahead and eat it all.",
        breakdown: "食べて (て-form) + も (even if) + いい (good). Literally 'Even if you eat it all, it's good' = permission."
      },
      {
        japanese: "全部食べなくてもいいよ。",
        reading: "ぜんぶたべなくてもいいよ。",
        english: "You don't have to eat it all.",
        breakdown: "Negative て-form: 食べない → 食べなくて. 'Even if you don't eat it all, it's good' = not necessary."
      },
      {
        japanese: "全部飲んでも大丈夫だよ。",
        reading: "ぜんぶのんでもだいじょうぶだよ。",
        english: "It's ok if you drink it all.",
        breakdown: "Alternative to いい: 大丈夫 (ok/safe). Same meaning, slightly different nuance."
      },
      {
        japanese: "全部飲んでも構わないよ。",
        reading: "ぜんぶのんでもかまわないよ。",
        english: "I don't mind if you drink it all.",
        breakdown: "構わない means 'don't mind/doesn't matter'. Shows speaker's indifference or permission."
      },
      {
        japanese: "もう帰っていい？",
        reading: "もうかえっていい？",
        english: "Can I go home already?",
        breakdown: "Casual speech: ても → て (dropping も). Very common contraction asking for permission."
      },
      {
        japanese: "これ、ちょっと見ていい？",
        reading: "これ、ちょっとみていい？",
        english: "Can I take a quick look at this?",
        breakdown: "Another casual example dropping も. Asking permission in a friendly way."
      }
    ],
    notes: "The も particle adds the meaning 'even if', making the logic: 'even if you do/don't do X, it's fine'. This is the standard way to give permission or say something is not necessary. Common expressions: てもいい (it's fine), ても大丈夫 (it's ok), ても構わない (I don't mind). Casual speech often drops the も entirely, using just ていい for permission requests. Use negative て-form (なくても) to express 'don't have to' or 'it's ok not to'.",
    relatedGrammar: ["tk-essential-038", "tk-essential-016"],
    tags: ["tae-kim", "essential", "permission", "optional", "te-form", "いい", "casual-speech"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - ても", url: "http://www.guidetojapanese.org/learn/grammar/musthaveto#Saying_something_is_ok" }
    ]
  },

  // Chapter 4.10 - Desire (たい)
  {
    grammarId: "tk-essential-040",
    title: "Expressing Desire with たい",
    titleJapanese: "〜たい",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.10",
    taeKimOrder: 40,
    explanation: "To express wanting to do something, add たい to the verb stem. This transforms the verb into an i-adjective, which conjugates like any other i-adjective. Verb particles like を, に, へ, or で can still be used with the たい form. Use only for first person (I want) or in questions; for others, use indirect expressions.",
    structure: "Verb stem + たい (becomes i-adjective)\nConjugates: たい, たくない, たかった, たくなかった",
    examples: [
      {
        japanese: "何をしたいですか。",
        reading: "なにをしたいですか。",
        english: "What do you want to do?",
        breakdown: "する → したい (want to do). Question form is acceptable because asking directly."
      },
      {
        japanese: "温泉に行きたい。",
        reading: "おんせんにいきたい。",
        english: "I want to go to hot spring.",
        breakdown: "行く → 行き (stem) + たい. Expresses speaker's desire to go."
      },
      {
        japanese: "ケーキ、食べたくないの？",
        reading: "ケーキ、たべたくないの？",
        english: "You don't want to eat cake?",
        breakdown: "Negative: たい → たくない (like i-adjective). Question with explanatory の."
      },
      {
        japanese: "食べたくなかったけど食べたくなった。",
        reading: "たべたくなかったけどたべたくなった。",
        english: "I didn't want to eat it but I became wanting to eat.",
        breakdown: "Past negative: たくなかった. Then: たくなる (become wanting) → たくなった. Shows change in desire."
      },
      {
        japanese: "ずっと一緒にいたい。",
        reading: "ずっといっしょにいたい。",
        english: "I want to be together forever.",
        breakdown: "いる (to exist/be) + たい. Even いる can take たい form to express desire to exist somewhere."
      },
      {
        japanese: "犬と遊びたいですか。",
        reading: "いぬとあそびたいですか。",
        english: "Do you want to play with dog?",
        breakdown: "遊ぶ → 遊び + たい. Questions are fine since you're asking, not presuming to know."
      }
    ],
    notes: "たい conjugates as an i-adjective: たい (want), たくない (don't want), たかった (wanted), たくなかった (didn't want). Since it becomes an adjective describing a desire, verb particles (を, に, へ, で) can still be used, unlike regular adjectives. IMPORTANT: Only use for first person (I want) or questions (Do you want?). Cannot directly say 'he wants' - must use indirect expressions like '彼は食べたがっている' (he appears to want to eat) or '食べたいと言った' (said he wants to eat). ある cannot have たい form (inanimate objects can't want). Tongue twister: 食べたくなくなった (became not wanting to eat).",
    relatedGrammar: ["tk-essential-041", "tk-basic-004", "tk-essential-036"],
    tags: ["tae-kim", "essential", "desire", "want", "たい", "i-adjective", "first-person"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - たい", url: "http://www.guidetojapanese.org/learn/grammar/desire#Verbs_you_want_to_do" }
    ]
  },

  // Chapter 4.10 - Wanting things (欲しい)
  {
    grammarId: "tk-essential-041",
    title: "Wanting Things with 欲しい",
    titleJapanese: "欲しい",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.10",
    taeKimOrder: 41,
    explanation: "'To want' in Japanese is actually an i-adjective (欲しい), not a verb, similar to 好き (to like). When combined with the て-form of a verb, it means 'want something done'. While grammatically correct, there are more polite and appropriate ways to make requests that will be covered later.",
    structure: "Noun + が + 欲しい (want something)\nVerb (て-form) + 欲しい (want something done)\nCustomary to write in hiragana when attached to verb",
    examples: [
      {
        japanese: "大きい縫いぐるみが欲しい！",
        reading: "おおきいぬいぐるみがほしい！",
        english: "I want a big stuffed doll!",
        breakdown: "欲しい used as i-adjective describing desire for a thing. が particle marks the wanted object."
      },
      {
        japanese: "全部食べてほしいんだけど・・・。",
        reading: "ぜんぶたべてほしいんだけど・・・。",
        english: "I want it all eaten but...",
        breakdown: "食べて (て-form) + ほしい (written in hiragana). Expresses wanting someone to do something. んだけど softens the request."
      },
      {
        japanese: "部屋をきれいにしてほしいのよ。",
        reading: "へやをきれいにしてほしいのよ。",
        english: "It is that I want the room cleaned up, you know.",
        breakdown: "Complex: きれいにする (to clean) → きれいにして + ほしい. Explanatory の + feminine よ."
      }
    ],
    notes: "欲しい is an i-adjective (like 好き), not a verb. It conjugates like other i-adjectives: 欲しい, 欲しくない, 欲しかった, 欲しくなかった. When used with verbs in て-form, write in hiragana (ほしい) because kanji is used for the verb itself. This grammar (てほしい) can sound demanding or childish - later lessons cover more appropriate request forms like てください, ていただけませんか, etc. Like たい, 欲しい is primarily for first person or questions.",
    relatedGrammar: ["tk-essential-040", "tk-essential-016"],
    tags: ["tae-kim", "essential", "desire", "want", "欲しい", "i-adjective", "requests"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - 欲しい", url: "http://www.guidetojapanese.org/learn/grammar/desire#Wanting_things" }
    ]
  },

  // Chapter 4.10 - Volitional Form (Casual)
  {
    grammarId: "tk-essential-042",
    title: "Volitional Form (Casual) - Let's Do Something",
    titleJapanese: "意向形（よう・おう）",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.10",
    taeKimOrder: 42,
    explanation: "The volitional form indicates a will to set out to do something. It translates to 'let's' or 'shall we?' in English. For ru-verbs, remove る and add よう. For u-verbs, change the u-vowel to o-vowel and add う. All volitional verbs become one tense only since you're setting out to do something.",
    structure: "Ru-verbs: Remove る + よう\nU-verbs: Change u→o vowel + う\nする → しよう\nくる → こよう",
    examples: [
      {
        japanese: "今日は何をしようか？",
        reading: "きょうはなにをしようか？",
        english: "What shall we do today?",
        breakdown: "する → しよう (volitional). Question marker か adds 'shall we?' nuance."
      },
      {
        japanese: "テーマパークに行こう！",
        reading: "テーマパークにいこう！",
        english: "Let's go to theme park!",
        breakdown: "行く → 行こう. U-verb: く → こ + う. Exclamation shows enthusiasm for the suggestion."
      },
      {
        japanese: "明日は何を食べようか？",
        reading: "あしたはなにをたべようか？",
        english: "What shall we eat tomorrow?",
        breakdown: "食べる → 食べよう. Ru-verb: remove る + よう. Discussing future plans."
      },
      {
        japanese: "カレーを食べよう！",
        reading: "カレーをたべよう！",
        english: "Let's eat curry!",
        breakdown: "Making a definite suggestion using volitional form."
      }
    ],
    notes: "The volitional form expresses intention or suggestion. It has only one tense because you're making a suggestion about the future. Cannot be used in past tense (×昨日食べよう doesn't make sense). Think of it as 'setting out to do' something. The volitional is also used in other grammar patterns like volitional + と思う (I think I'll...) and volitional + とする (attempt to...).",
    relatedGrammar: ["tk-essential-043", "tk-essential-044", "tk-essential-047"],
    tags: ["tae-kim", "essential", "volitional", "suggestion", "intention", "conjugation"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Volitional", url: "http://www.guidetojapanese.org/learn/grammar/desire#Volitional_casual" }
    ]
  },

  // Chapter 4.10 - Volitional Form (Polite)
  {
    grammarId: "tk-essential-043",
    title: "Volitional Form (Polite) - Polite Suggestions",
    titleJapanese: "〜ましょう",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.10",
    taeKimOrder: 43,
    explanation: "The polite volitional form is made by adding ましょう to the verb stem. It's even simpler than the casual form. Like all polite endings, it must always come at the end of the sentence. This is often one of the first conjugations beginners learn.",
    structure: "Verb stem + ましょう",
    examples: [
      {
        japanese: "今日は何をしましょうか？",
        reading: "きょうはなにをしましょうか？",
        english: "What shall we do today?",
        breakdown: "する → し (stem) + ましょう. Polite question form with か."
      },
      {
        japanese: "テーマパークに行きましょう！",
        reading: "テーマパークにいきましょう！",
        english: "Let's go to theme park!",
        breakdown: "行く → 行き (stem) + ましょう. Polite suggestion."
      },
      {
        japanese: "明日は何を食べましょうか？",
        reading: "あしたはなにをたべましょうか？",
        english: "What shall we eat tomorrow?",
        breakdown: "食べる → 食べ (stem) + ましょう. Planning future actions politely."
      },
      {
        japanese: "カレーを食べましょう！",
        reading: "カレーをたべましょう！",
        english: "Let's eat curry!",
        breakdown: "Polite definite suggestion using ましょう form."
      }
    ],
    notes: "Simply add ましょう to the verb stem - the same stem used for ます form. Must come at the end of the sentence as all polite endings do. Use this in formal situations or when being polite. The casual volitional (よう/おう) is more common among friends.",
    relatedGrammar: ["tk-essential-042", "tk-essential-024"],
    tags: ["tae-kim", "essential", "volitional", "polite", "suggestion", "ましょう"],
    difficulty: 1,
    resources: [
      { name: "Tae Kim - Volitional Polite", url: "http://www.guidetojapanese.org/learn/grammar/desire#Volitional_polite" }
    ]
  },

  // Chapter 4.10 - Making Suggestions
  {
    grammarId: "tk-essential-044",
    title: "Making Suggestions (〜たらどう/〜ばどう)",
    titleJapanese: "〜たらどう・〜ばどう",
    jlptLevel: "N3",
    category: "Essential Grammar",
    taeKimSection: "4.10",
    taeKimOrder: 44,
    explanation: "You can make suggestions by using the ば or たら conditional and adding どう (how). This literally means 'If you do [X], how is it?' which becomes 'How about doing [X]?' in English. A commonly used set phrase for giving advice.",
    structure: "Verb (ば form) + どう\nVerb (たら form) + どう",
    examples: [
      {
        japanese: "銀行に行ったらどうですか。",
        reading: "ぎんこうにいったらどうですか。",
        english: "How about going to bank?",
        breakdown: "行く → 行ったら (たら conditional) + どう (how) + ですか (polite). Polite suggestion."
      },
      {
        japanese: "たまにご両親と話せばどう？",
        reading: "たまにごりょうしんとはなせばどう？",
        english: "How about talking with your parents once in a while?",
        breakdown: "話す → 話せば (ば conditional) + どう. Casual suggestion giving advice."
      }
    ],
    notes: "This pattern combines conditionals (which you already know) with どう to make suggestions. Both ば and たら work, with no significant difference. Add です/ますfor politeness. Common for giving advice or making recommendations. Literally asking 'how would it be if...' but functions as 'how about...'.",
    relatedGrammar: ["tk-essential-037", "tk-essential-042"],
    tags: ["tae-kim", "essential", "suggestion", "advice", "conditional", "どう"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Suggestions", url: "http://www.guidetojapanese.org/learn/grammar/desire#Suggestions" }
    ]
  },

  // Chapter 4.11 - Direct Quote
  {
    grammarId: "tk-essential-045",
    title: "Direct Quotations with と",
    titleJapanese: "直接引用（と言う）",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.11",
    taeKimOrder: 45,
    explanation: "To make a direct quote in Japanese, enclose the statement in quotes, add と, and then insert the appropriate verb (言う, 聞く, 叫ぶ, 呼ぶ, etc.). This と is different from the と particle and the と conditional. Used frequently in novels and narrative works for dialogue.",
    structure: "「Quote」+ と + Verb (言う/聞く/etc.)",
    examples: [
      {
        japanese: "アリスが、「寒い」と言った。",
        reading: "アリスが、「さむい」といった。",
        english: "Alice said, 'Cold'.",
        breakdown: "Direct quote enclosed in「」, followed by と, then verb 言った (said). Verb doesn't need to be directly connected."
      },
      {
        japanese: "「今日は授業がない」と先生から聞いたんだけど。",
        reading: "「きょうはじゅぎょうがない」とせんせいからきいたんだけど。",
        english: "It is that I heard from the teacher, 'There is no class today'.",
        breakdown: "Quote + と + 聞いた (heard). Can have modifiers between と and verb."
      },
      {
        japanese: "「寒い」とアリスが田中に言った。",
        reading: "「さむい」とアリスがたなかにいった。",
        english: "'Cold,' Alice said to Tanaka.",
        breakdown: "Quote can be separated from verb by other elements. The と still marks it as a quotation."
      }
    ],
    notes: "The と quotation marker allows you to quote something directly. Unlike English, you must use と to mark quotes. Common verbs: 言う (say), 聞く (hear), 叫ぶ (scream), 呼ぶ (call), 呟く (mutter), 尋ねる (ask). The と and verb don't need to be adjacent - you can have subjects, objects, and modifiers in between. This is purely for direct word-for-word quotes.",
    relatedGrammar: ["tk-essential-046", "tk-essential-048"],
    tags: ["tae-kim", "essential", "quotation", "と", "direct-quote", "saying"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - Direct Quote", url: "http://www.guidetojapanese.org/learn/grammar/actiononclause#Direct_quote" }
    ]
  },

  // Chapter 4.11 - Interpreted Quote
  {
    grammarId: "tk-essential-046",
    title: "Interpreted Quotations and Thoughts",
    titleJapanese: "間接引用（と思う）",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.11",
    taeKimOrder: 46,
    explanation: "The interpreted quote expresses what someone said along the lines of, not word-for-word. It's used for indirect speech and expressing thoughts. No quotation marks needed. With 思う (to think), you can say 'I think that...' - used constantly in Japanese to soften statements. State-of-being must use explicit だ.",
    structure: "Clause + と + Verb (言う/聞く/思う/考える)\nNoun/Na-adj + だ + と + Verb",
    examples: [
      {
        japanese: "先生から今日は授業がないと聞いたんだけど。",
        reading: "せんせいからきょうはじゅぎょうがないときいたんだけど。",
        english: "I heard from the teacher that there is no class today.",
        breakdown: "Indirect quote - not exact words but the meaning. No quotation marks."
      },
      {
        japanese: "これは、日本語で何と言いますか。",
        reading: "これは、にほんごでなんといいますか。",
        english: "What do you call this in Japanese?",
        breakdown: "Literally 'About this, what do you say in Japanese?' - と言う used for 'to be called'."
      },
      {
        japanese: "私は、アリスと言います。",
        reading: "わたしは、アリスといいます。",
        english: "I am called Alice.",
        breakdown: "Literally 'As for me, you say Alice.' Common self-introduction pattern using と言う."
      },
      {
        japanese: "カレーを食べようと思ったけど、食べる時間がなかった。",
        reading: "カレーをたべようとおもったけど、たべるじかんがなかった。",
        english: "I thought about setting out to eat curry but I didn't have time to eat.",
        breakdown: "Volitional + と思う = 'thought about doing'. Very common pattern for expressing intentions."
      },
      {
        japanese: "彼は、これは何だと言いましたか。",
        reading: "かれは、これはなんだといいましたか。",
        english: "What did he say this is?",
        breakdown: "Note the だ before と. Required for nouns/na-adjectives to explicitly show state-of-being."
      },
      {
        japanese: "彼は高校生だと聞いたけど、信じられない。",
        reading: "かれはこうこうせいだときいたけど、しんじられない。",
        english: "I heard that he is a high school student but I can't believe it.",
        breakdown: "高校生 (noun) + だ (explicit declarative) + と. The だ is crucial here."
      }
    ],
    notes: "Unlike direct quotes, this is for reporting general meaning, not exact words. IMPORTANT: For noun/na-adjective state-of-being, must use explicit だ (何だと not 何と). Compare: 何だと言いましたか (What did he say this is?) vs 何と言いましたか (What did he say?). The と思う pattern is used constantly to soften statements and express personal opinions - Japanese people rarely make absolute statements. Also used with 考える (to consider).",
    relatedGrammar: ["tk-essential-045", "tk-essential-042", "tk-essential-048"],
    tags: ["tae-kim", "essential", "quotation", "indirect-quote", "thoughts", "と思う", "と言う"],
    difficulty: 3,
    resources: [
      { name: "Tae Kim - Interpreted Quote", url: "http://www.guidetojapanese.org/learn/grammar/actiononclause#Interpreted_quote" }
    ]
  },

  // Chapter 4.11 - Casual って
  {
    grammarId: "tk-essential-047",
    title: "Casual Quotation with って",
    titleJapanese: "って",
    jlptLevel: "N3",
    category: "Essential Grammar",
    taeKimSection: "4.11",
    taeKimOrder: 47,
    explanation: "って is a casual shortened version of と that's everywhere in casual speech. The key point is you can drop the rest of the sentence and rely on context. Also used to bring up topics in place of は particle. Very versatile and common in conversation.",
    structure: "Clause + って (rest can be dropped)\nNoun + って (as topic marker)",
    examples: [
      {
        japanese: "智子は来年、海外に行くんだって。",
        reading: "ともこはらいねん、かいがいにいくんだって。",
        english: "Tomoko said that she's going overseas next year.",
        breakdown: "って replaces と言っていた. The rest is dropped and understood from context."
      },
      {
        japanese: "もうお金がないって。",
        reading: "もうおかねがないって。",
        english: "I already told you I have no money.",
        breakdown: "Complete sentence dropped after って. Listener understands from context what was said/meant."
      },
      {
        japanese: "え？何だって？",
        reading: "え？なんだって？",
        english: "Huh? What did you say?",
        breakdown: "Casual question using って. Much shorter than 何と言いましたか."
      },
      {
        japanese: "明日って、雨が降るんだって。",
        reading: "あしたって、あめがふるんだって。",
        english: "About tomorrow, I hear that it's going to rain.",
        breakdown: "First って brings up topic (like は), second って quotes what was heard."
      },
      {
        japanese: "アリスって、すごくいい人でしょ？",
        reading: "アリスって、すごくいいひとでしょ？",
        english: "About Alice, she's a very good person, right?",
        breakdown: "って used as topic marker instead of は. Very common in casual conversation."
      }
    ],
    notes: "って is THE casual quotation marker - shorter than と and allows dropping the verb entirely. Context fills in the gaps. Also doubles as a casual topic marker replacing は. Used constantly in conversation. Can mean: 'I heard that...', 'someone said that...', 'speaking of...', 'about...'. Much more casual than と, but same function. Very useful for learners because it's short and everywhere in spoken Japanese.",
    relatedGrammar: ["tk-essential-045", "tk-essential-046", "tk-essential-049"],
    tags: ["tae-kim", "essential", "quotation", "って", "casual", "topic", "conversation"],
    difficulty: 2,
    resources: [
      { name: "Tae Kim - って", url: "http://www.guidetojapanese.org/learn/grammar/actiononclause#Using_って" }
    ]
  },

  // Chapter 4.12: Defining and Describing with という
  {
    grammarId: "tk-essential-048",
    title: "Defining and Describing (という)",
    titleJapanese: "定義と説明",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.12",
    taeKimOrder: 48,
    explanation: "The という construction is used to define, describe, or talk about something. While いう literally means 'to say', when combined with と it becomes a versatile pattern for naming, defining, and describing any relative clause. It's essential for asking 'what is this called?' and explaining meanings.",
    structure: "Noun + という + Noun: [A] called/known as [B]\nClause + ということ: The thing/fact that [clause]",
    examples: [
      {
        japanese: "私はアリスといいます。",
        reading: "わたしはアリスといいます。",
        english: "I am called Alice.",
        breakdown: "私は (as for me) + アリス (Alice) + と (quotation) + いいます (is said/called). Literally: 'As for me, people say Alice.' This is the standard self-introduction pattern."
      },
      {
        japanese: "これは、なんという魚ですか。",
        reading: "これは、なんというさかなですか。",
        english: "What is this fish called?",
        breakdown: "これは (as for this) + なんという (what-called) + 魚 (fish) + ですか (is it?). Used to ask the name of something."
      },
      {
        japanese: "主人公が犯人だったというのが一番面白かった。",
        reading: "しゅじんこうがはんにんだったというのがいちばんおもしろかった。",
        english: "The most interesting thing was that the main character was the criminal.",
        breakdown: "主人公が犯人だった (main character was criminal) + というの (the thing that) + が一番面白かった (was most interesting). という encapsulates entire clause to talk about it."
      },
      {
        japanese: "大学に行かないって、どういう意味なの？",
        reading: "だいがくにいかないって、どういういみなの？",
        english: "What do you mean you're not going to college?",
        breakdown: "大学に行かない (not going to college) + って (casual という) + どういう意味 (what meaning). Used to question something surprising."
      }
    ],
    notes: "Key uses: 1) Self-introduction: 私は[name]といいます 2) Asking names: なんという[noun]ですか 3) Describing situations: こういう/そういう/ああいう/どういう + noun 4) Encapsulating clauses: [clause]ということ (the fact that...). Casual variations: って can replace という. というか means 'or rather...' for rephrasing.",
    relatedGrammar: ["tk-essential-045", "tk-essential-046", "tk-essential-047"],
    tags: ["definition", "description", "という", "naming", "self-introduction"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/define" }]
  },

  // Chapter 4.13: Trying Something Out
  {
    grammarId: "tk-essential-049",
    title: "Trying Something Out (てみる)",
    titleJapanese: "試してみる",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.13",
    taeKimOrder: 49,
    explanation: "The てみる pattern means 'to try doing something' to see what happens. Think of it as doing an action and then 'seeing' the result. This is different from 'attempting' (volitional + とする). てみる is for experimental actions you want to test out.",
    structure: "Verb (te-form) + みる: Try doing [verb]",
    examples: [
      {
        japanese: "お好み焼きを初めて食べてみたけど、とてもおいしかった！",
        reading: "おこのみやきをはじめてたべてみたけど、とてもおいしかった！",
        english: "I tried eating okonomiyaki for the first time and it was very tasty!",
        breakdown: "お好み焼きを (okonomiyaki-obj) + 初めて (for first time) + 食べてみた (tried eating) + けど (but) + とても美味しかった (was very tasty)."
      },
      {
        japanese: "広島のお好み焼きを食べてみたい！",
        reading: "ひろしまのおこのみやきをたべてみたい！",
        english: "I want to try eating Hiroshima okonomiyaki!",
        breakdown: "広島のお好み焼きを食べて (eat Hiroshima okonomiyaki) + みたい (want to try). Combining てみる with たい form."
      }
    ],
    notes: "てみる conjugates like 見る: てみる/てみた/てみない/てみなかった/てみたい. Usually written in hiragana. Implies experimental curiosity. Different from volitional+とする which means making an effort. Very common for suggesting to try things.",
    relatedGrammar: ["tk-essential-050"],
    tags: ["trying", "てみる", "experimental", "testing"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/try" }]
  },

  // Chapter 4.13: Attempting to Do Something  
  {
    grammarId: "tk-essential-050",
    title: "Attempting to Do Something (Volitional + とする)",
    titleJapanese: "しようとする",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.13",
    taeKimOrder: 50,
    explanation: "The volitional form + とする means to attempt or try to do something. This shows effort or intention, even if you might not succeed. Unlike てみる (trying something out), this emphasizes the attempt itself. Uses the quoted clause pattern with する.",
    structure: "Verb (volitional) + とする: Attempt to [verb]",
    examples: [
      {
        japanese: "毎日、勉強を避けようとする。",
        reading: "まいにち、べんきょうをさけようとする。",
        english: "Every day, she attempts to avoid study.",
        breakdown: "毎日 (every day) + 勉強を避けよう (try to avoid study-volitional) + とする (attempt to). Shows repeated attempts."
      },
      {
        japanese: "早く寝ようとしたけど、結局は徹夜した。",
        reading: "はやくねようとしたけど、けっきょくはてつやした。",
        english: "I attempted to sleep early but ended up staying up all night.",
        breakdown: "早く寝よう (try to sleep early) + としたけど (attempted but) + 結局は徹夜した (ended up all-nighter). Shows failed attempt."
      }
    ],
    notes: "Formation: verb volitional form + とする. てみる = trying experimentally to see what happens. volitional + とする = attempting/making effort to do something. Can also use with 思う/決める/考える instead of する for 'think about/decide to/consider attempting'.",
    relatedGrammar: ["tk-essential-042", "tk-essential-043", "tk-essential-049"],
    tags: ["attempting", "とする", "volitional", "trying", "effort"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/try" }]
  },

  // Chapter 4.14: Giving (あげる/やる)
  {
    grammarId: "tk-essential-051",
    title: "Giving (あげる/やる) - From Giver's Perspective",
    titleJapanese: "あげる・やる",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.14",
    taeKimOrder: 51,
    explanation: "あげる means 'to give' from the giver's point of view. Use when YOU are giving to someone else, or viewing from the giver's perspective. Can also express doing a favor using te-form. やる is casual version for animals/plants, not people.",
    structure: "Giver は Receiver に Thing を あげる\nGiver は Receiver に Verb-te + あげる (doing favor)",
    examples: [
      {
        japanese: "私が友達にプレゼントをあげた。",
        reading: "わたしがともだちにプレゼントをあげた。",
        english: "I gave a present to my friend.",
        breakdown: "私が (I-subj) + 友達に (to friend) + プレゼントを (present-obj) + あげた (gave). Speaker is the giver."
      },
      {
        japanese: "車を買ってあげるよ。",
        reading: "くるまをかってあげるよ。",
        english: "I'll give you the favor of buying you a car.",
        breakdown: "車を買って (buy car-te) + あげる (give favor) + よ (emphasis). てあげる = doing favor of the action."
      },
      {
        japanese: "犬に餌をやった。",
        reading: "いぬにえさをやった。",
        english: "I gave food to the dog.",
        breakdown: "犬に (to dog) + 餌を (food-obj) + やった (gave-past). やる is used for animals instead of あげる."
      }
    ],
    notes: "Used when YOU give to others (1st person → others) or viewing from giver's perspective. Direction: giving 'goes up' to others. あげる = normal for people, やる = casual for animals/plants. てあげる = doing action as favor (can sound condescending if used improperly).",
    relatedGrammar: ["tk-essential-052", "tk-essential-053"],
    tags: ["giving", "あげる", "やる", "favors", "perspective"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/favor" }]
  },

  // Chapter 4.14: Receiving from Others (くれる)
  {
    grammarId: "tk-essential-052",
    title: "Receiving from Others (くれる) - To Receiver",
    titleJapanese: "くれる",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.14",
    taeKimOrder: 52,
    explanation: "くれる means 'to give' but from RECEIVER'S point of view. Use when someone gives something to YOU, or viewing from receiver's perspective. Opposite of あげる. The giving 'comes down' to the speaker. Critical for Japanese perspective.",
    structure: "Giver が Receiver(me) に Thing を くれる\nGiver が Receiver(me) に Verb-te + くれる (receiving favor)",
    examples: [
      {
        japanese: "友達が私にプレゼントをくれた。",
        reading: "ともだちがわたしにプレゼントをくれた。",
        english: "My friend gave me a present.",
        breakdown: "友達が (friend-subj) + 私に (to me) + プレゼントを (present-obj) + くれた (gave-past). From receiver's perspective."
      },
      {
        japanese: "車を買ってくれるの？",
        reading: "くるまをかってくれるの？",
        english: "You'll give me the favor of buying a car for me?",
        breakdown: "車を買って (buy car-te) + くれる (give favor to me) + の (explanatory). Requesting favor."
      }
    ],
    notes: "Perspective distinction: あげる = from giver's view (giving 'goes up'), くれる = from receiver's view (giving 'comes down' to me). MUST use くれる when someone gives to YOU or does something FOR YOU. てくれる emphasizes someone did something for you - very commonly used to show appreciation.",
    relatedGrammar: ["tk-essential-051", "tk-essential-053", "tk-essential-054"],
    tags: ["receiving", "くれる", "perspective", "favors", "giving"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/favor" }]
  },

  // Chapter 4.14: Receiving (もらう)
  {
    grammarId: "tk-essential-053",
    title: "Receiving (もらう) - To Receive",
    titleJapanese: "もらう",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.14",
    taeKimOrder: 53,
    explanation: "もらう means 'to receive' from receiver's perspective, focusing on what receiver obtained. Unlike くれる (focuses on giver's action toward you), もらう emphasizes that YOU received something FROM someone. Use に or から for source.",
    structure: "Receiver は Source に/から Thing を もらう\nReceiver は Source に/から Verb-te + もらう (receiving favor)",
    examples: [
      {
        japanese: "私が友達にプレゼントをもらった。",
        reading: "わたしがともだちにプレゼントをもらった。",
        english: "I received a present from my friend.",
        breakdown: "私が (I-subj) + 友達に (from friend) + プレゼントを (present-obj) + もらった (received). Focus on speaker receiving."
      },
      {
        japanese: "これは友達に買ってもらった。",
        reading: "これはともだちにかってもらった。",
        english: "I received the favor of my friend buying this (for me).",
        breakdown: "これは (this-topic) + 友達に (from friend) + 買ってもらった (received favor of buying). Emphasizes receiving the action."
      }
    ],
    notes: "Focus on RECEIVER (not giver). Source marked with に or から (both OK). Emphasizes what was received. Only one version (unlike あげる/くれる distinction). Three perspectives: あげる (I give to others), くれる (others give to me), もらう (I receive from others). てもらう = receive favor of action, more neutral than てくれる.",
    relatedGrammar: ["tk-essential-051", "tk-essential-052", "tk-essential-054"],
    tags: ["receiving", "もらう", "perspective", "favors"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/favor" }]
  },

  // Chapter 4.14: Requesting Favors
  {
    grammarId: "tk-essential-054",
    title: "Requesting Favors (てくれる/てもらえる)",
    titleJapanese: "お願いの表現",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.14",
    taeKimOrder: 54,
    explanation: "Make requests using てくれる (will you give me the favor...?) or potential form of もらう: てもらえる (can I receive the favor...?). Polite ways to ask someone to do something for you. Cannot use てあげる for requests.",
    structure: "Verb-te + くれる/くれない: Will you (not) do X for me?\nVerb-te + もらえる/もらえない: Can I (not) receive X?",
    examples: [
      {
        japanese: "千円を貸してくれる？",
        reading: "せんえんをかしてくれる？",
        english: "Will you lend me 1000 yen?",
        breakdown: "千円を貸して (lend 1000 yen-te) + くれる (give favor to me). Direct request."
      },
      {
        japanese: "漢字で書いてもらえませんか。",
        reading: "かんじでかいてもらえませんか。",
        english: "Could you write this in kanji for me?",
        breakdown: "漢字で書いて (write in kanji-te) + もらえません (can't receive) + か (question). Very polite negative question."
      },
      {
        japanese: "全部食べないでくれますか。",
        reading: "ぜんぶたべないでくれますか。",
        english: "Can you not eat it all?",
        breakdown: "全部食べないで (not eat all-negative-te) + くれますか (will give favor?). Requesting someone NOT to do something."
      }
    ],
    notes: "Two patterns: てくれる (will you do X?) and てもらえる (can I receive X?). Mean same thing from different perspectives. Politeness levels from softest: てもらえませんか > てくれませんか > てもらえますか > てくれますか > てくれる. Negative requests: Verb-ないで + くれる/もらえる. Cannot use あげる for requests to others.",
    relatedGrammar: ["tk-essential-052", "tk-essential-053", "tk-essential-055"],
    tags: ["requests", "てくれる", "てもらえる", "favors", "asking"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/favor" }]
  },

  // Chapter 4.15: Polite Requests (ください)
  {
    grammarId: "tk-essential-055",
    title: "Polite Requests (ください)",
    titleJapanese: "ください",
    jlptLevel: "N5",
    category: "Essential Grammar",
    taeKimSection: "4.15",
    taeKimOrder: 55,
    explanation: "ください is special conjugation of honorific verb くださる (honorific くれる). Used to make direct but polite requests. Unlike くれる which asks 'will you?', ください directly requests 'please do this'. Very common essential request form.",
    structure: "Noun + を + ください: Please give me [noun]\nVerb-te + ください: Please do [verb]\nVerb-ないで + ください: Please don't [verb]",
    examples: [
      {
        japanese: "それをください。",
        reading: "それをください。",
        english: "Please give me that.",
        breakdown: "それを (that-obj) + ください (please give). Direct polite request."
      },
      {
        japanese: "漢字で書いてください。",
        reading: "かんじでかいてください。",
        english: "Please write it in kanji.",
        breakdown: "漢字で (in kanji) + 書いて (write-te) + ください (please do). Standard polite request."
      },
      {
        japanese: "ここに来ないでください。",
        reading: "ここにこないでください。",
        english: "Please don't come here.",
        breakdown: "ここに (here-to) + 来ないで (not come-negative-te) + ください (please). Polite prohibition."
      },
      {
        japanese: "日本語で話して。",
        reading: "にほんごではなして。",
        english: "Please speak in Japanese.",
        breakdown: "日本語で話して (speak in Japanese-te) + [ください dropped]. Casual speech often drops ください."
      }
    ],
    notes: "Special conjugation of くださる (honorific くれる). Direct request, more forceful than てくれますか. Must come at end (like masu-form). Cannot modify nouns directly. Negative requests: Verb-ないで + ください. Casual shortening: often drop ください, just use te-form. Masculine casual: てくれ (drop る from くれる).",
    relatedGrammar: ["tk-essential-052", "tk-essential-054", "tk-essential-056", "tk-essential-057"],
    tags: ["requests", "ください", "polite", "please", "commands"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/requests" }]
  },

  // Chapter 4.15: Casual Requests (ちょうだい)
  {
    grammarId: "tk-essential-056",
    title: "Casual Requests (ちょうだい)",
    titleJapanese: "ちょうだい",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.15",
    taeKimOrder: 56,
    explanation: "ちょうだい is casual alternative to ください. While anyone can use it, it has slightly feminine and childish nuance. Usually written in hiragana. The kanji 頂戴 is used in very formal expressions like 頂戴致します. Grammatically identical to ください.",
    structure: "Noun + を + ちょうだい: Please give me [noun] (casual)\nVerb-te + ちょうだい: Please do [verb] (casual)",
    examples: [
      {
        japanese: "スプーンをちょうだい。",
        reading: "スプーンをちょうだい。",
        english: "Please give me the spoon.",
        breakdown: "スプーンを (spoon-obj) + ちょうだい (please give-casual). Casual request for thing."
      },
      {
        japanese: "ここに名前を書いてちょうだい。",
        reading: "ここになまえをかいてちょうだい。",
        english: "Please write your name here.",
        breakdown: "ここに名前を書いて (write name here-te) + ちょうだい (please-casual). Casual action request."
      }
    ],
    notes: "Casual version of ください. Slightly feminine/childish nuance. Usually hiragana ちょうだい (casual) vs kanji 頂戴 (formal). Grammatically identical to ください. Anyone can use but more common in women's/children's speech. Sounds softer/cuter than ください. Avoid in formal situations.",
    relatedGrammar: ["tk-essential-055", "tk-essential-057"],
    tags: ["requests", "ちょうだい", "casual", "feminine", "childish"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/requests" }]
  },

  // Chapter 4.15: Firm Requests (なさい)
  {
    grammarId: "tk-essential-057",
    title: "Firm Requests (なさい)",
    titleJapanese: "なさい",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.15",
    taeKimOrder: 57,
    explanation: "なさい is special honorific conjugation of する. Soft yet firm way of issuing commands/instructions. Used when mother scolds child or teacher addresses misbehaving student. Unlike ください, only works with positive verbs and uses verb stem instead of te-form.",
    structure: "Verb stem + なさい: Do [verb] (firm but polite)\nCasual: Verb stem + な",
    examples: [
      {
        japanese: "よく聞きなさい！",
        reading: "よくききなさい！",
        english: "Listen well!",
        breakdown: "よく (well) + 聞き (listen-stem) + なさい (firm command). Mother/teacher telling someone to listen."
      },
      {
        japanese: "ここに座りなさい。",
        reading: "ここにすわりなさい。",
        english: "Sit here.",
        breakdown: "ここに (here-at) + 座り (sit-stem) + なさい (firm command). Instructing where to sit."
      },
      {
        japanese: "まだいっぱいあるから、たくさん食べな。",
        reading: "まだいっぱいあるから、たくさんたべな。",
        english: "There's still a lot, so eat plenty.",
        breakdown: "まだいっぱいある (still plenty) + たくさん食べな (eat a lot-casual なさい). Dropping さい makes casual."
      }
    ],
    notes: "Formation: Verb STEM (not te-form!) + なさい. Special conjugation of する. Soft yet firm command. Used by authority figures (parents, teachers, bosses). Only positive verbs. Cannot stand alone. Casual: drop さい to make な (can add よ for softer: なよ). Cannot use for negative commands (use command form + な instead).",
    relatedGrammar: ["tk-essential-055", "tk-essential-056", "tk-essential-058", "tk-essential-059"],
    tags: ["commands", "なさい", "instructions", "authority", "firm"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/requests" }]
  },

  // Chapter 4.15: Command Form
  {
    grammarId: "tk-essential-058",
    title: "Command Form (Imperative)",
    titleJapanese: "命令形",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.15",
    taeKimOrder: 58,
    explanation: "Command form is most direct and coarse way to tell someone to do something. Rarely used in real life as Japanese prefer being polite. Mainly seen in fiction (manga, anime) or extremely casual male speech. Women almost never use this. Useful to recognize when reading.",
    structure: "Ru-verbs: Replace る with ろ\nU-verbs: Change /u/ to /e/ vowel\nExceptions: する→しろ, くる→こい, くれる→くれ",
    examples: [
      {
        japanese: "好きにしろ。",
        reading: "すきにしろ。",
        english: "Do as you please.",
        breakdown: "好きに (as you like) + しろ (do-command). Blunt command."
      },
      {
        japanese: "あっち行け！",
        reading: "あっちいけ！",
        english: "Go away!",
        breakdown: "あっち (that way) + 行け (go-command). Very rude command to leave."
      },
      {
        japanese: "死ね！",
        reading: "しね！",
        english: "Die!",
        breakdown: "死ね (die-command). Classic fiction villain line. NEVER use in real life!"
      }
    ],
    notes: "Formation: Ru-verbs る→ろ (食べる→食べろ), U-verbs /u/→/e/ (話す→話せ, 行く→行け), Exceptions: する→しろ, 来る→こい, くれる→くれ. VERY RUDE - almost never used in real conversation. Considered coarse, rough, masculine. Women generally don't use (use なさい or くれる). Mostly in fiction, military, emergency situations. Use てください/てくれ/なさい instead in real life.",
    relatedGrammar: ["tk-essential-055", "tk-essential-057", "tk-essential-059"],
    tags: ["commands", "imperative", "命令形", "rude", "masculine", "fiction"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/requests" }]
  },

  // Chapter 4.15: Negative Commands
  {
    grammarId: "tk-essential-059",
    title: "Negative Commands (するな)",
    titleJapanese: "否定命令",
    jlptLevel: "N4",
    category: "Essential Grammar",
    taeKimSection: "4.15",
    taeKimOrder: 59,
    explanation: "To command someone NOT to do something, simply attach な to any verb. Very simple formation but equally rude as positive command form. Don't confuse with sentence-ending particle な (which has different intonation and is softer).",
    structure: "Any verb (plain form) + な: Don't [verb]!",
    examples: [
      {
        japanese: "それを食べるな！",
        reading: "それをたべるな！",
        english: "Don't eat that!",
        breakdown: "それを (that-obj) + 食べる (eat-plain) + な (don't!). Direct prohibition."
      },
      {
        japanese: "変なことを言うな！",
        reading: "へんなことをいうな！",
        english: "Don't say such weird things!",
        breakdown: "変なことを (weird things-obj) + 言う (say-plain) + な (don't!). Commanding not to say something."
      }
    ],
    notes: "Formation (extremely simple!): Just add な to plain form of ANY verb. No conjugation needed. Works with ru-verbs, u-verbs, exceptions. Don't confuse with: 1) Sentence-ending particle な (different intonation, softer suggestion) 2) Short version of なさい (しな vs するな). Politer prohibitions: ないでください > てはいけません > てはだめ > ないで > な. Same usage context as positive command form - mostly fiction, emergency warnings, very casual masculine.",
    relatedGrammar: ["tk-essential-058", "tk-essential-055", "tk-essential-036"],
    tags: ["commands", "negative", "prohibition", "な", "するな", "rude"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/requests" }]
  },

  // Chapter 4.17: Casual Patterns and Slang
  {
    grammarId: "tk-essential-060",
    title: "Casual Speech Patterns and Slang",
    titleJapanese: "カジュアルな話し方",
    jlptLevel: "N3",
    category: "Essential Grammar",
    taeKimSection: "4.17",
    taeKimOrder: 60,
    explanation: "Understanding casual Japanese requires more than just learning casual forms - it involves pronunciation changes, slurring, shortcuts, and slang. The fundamental goal is reducing mouth movement to make things easier to say. This includes shortening words and merging sounds together.",
    structure: "Various patterns: sound changes, dropped particles, shortened forms",
    examples: [
      {
        japanese: "ここつまんないから、私んち行こう。",
        reading: "ここつまんないから、わたしんちいこう。",
        english: "It's boring here, so let's go to my place.",
        breakdown: "ここ (here) + つまんない (shortened from つまらない=boring) + 私んち (私の家=my home, shortened) + 行こう (let's go). Multiple casual shortenings."
      },
      {
        japanese: "ったく、いつまでこんなとこで、ぐずぐずすんだよ。",
        reading: "ったく、いつまでこんなとこで、ぐずぐずすんだよ。",
        english: "Good grief, how long are you going to dawdle around in a place like this?",
        breakdown: "ったく (shortened from まったく=entirely/good grief) + こんなとこ (shortened from こんなところ=place like this) + すんだ (shortened from するんだ=doing)"
      }
    ],
    notes: "Basic principles of casual speech:\n1) Primary goal: reduce mouth movement\n2) Make things shorter OR slur sounds together\n3) Not random - follows consistent patterns\n\nCommon shortcuts:\n- つまらない → つまんない (boring)\n- かもしれない → かもしんない → かも (might be)\n- している → してる (doing)\n- 〜ている → 〜てる (progressive)\n- 〜ておく → 〜とく (in advance)\n- 〜てしまう → 〜ちゃう (accidentally)\n- 私の家 → 私んち (my home)\n- 〜のだ → 〜んだ (explanatory)\n\nSound merging:\n- では → じゃ\n- という → って → て\n- といえば → ってば\n- ければ → きゃ\n- なければ → なきゃ\n\nParticle rules:\n- を often dropped in casual speech\n- は can be dropped if context is clear\n- Sentence order more flexible\n- Verbs can be left incomplete if obvious\n\nImportant: Casual speech is guided by natural mouth movement. With practice, you'll naturally pick up shorter pronunciations. Don't force it - let it develop naturally through exposure.",
    relatedGrammar: ["tk-essential-047"],
    tags: ["casual", "slang", "shortcuts", "pronunciation", "natural-speech"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/slang" }]
  },

  // Chapter 4.18: Sentence-Ending Particles
  {
    grammarId: "tk-essential-061",
    title: "Sentence-Ending Particle な (emphasis/wonder)",
    titleJapanese: "終助詞「な」",
    jlptLevel: "N3",
    category: "Essential Grammar",
    taeKimSection: "4.18",
    taeKimOrder: 61,
    explanation: "The sentence-ending particle な is used to express emotions, reflections, or when talking to yourself. Different from the negative command な (which has sharper intonation). Often used with the question marker か to indicate wondering about something.",
    structure: "Sentence + な: [emotional reflection]\nSentence + かな: I wonder if...",
    examples: [
      {
        japanese: "今日は雨が降るかな？",
        reading: "きょうはあめがふるかな？",
        english: "I wonder if it'll rain today?",
        breakdown: "今日は (today-topic) + 雨が降る (rain falls) + かな (I wonder). な with か shows wondering."
      },
      {
        japanese: "いい大学に行けるかな？",
        reading: "いいだいがくにいけるかな？",
        english: "I wonder if I can go to a good college?",
        breakdown: "いい大学に行ける (can go to good college) + かな (I wonder). Expressing uncertainty about future."
      }
    ],
    notes: "Two main uses:\n1) Emotional emphasis/reflection (talking to yourself)\n2) With か to express wondering (かな)\n\nImportant distinctions:\n- 食べるな (Don't eat! - negative command, sharp tone)\n- 食べるな。(You should eat, you know - suggestion, softer intonation)\n\nThe intonation is totally different!\n\nな vs かな:\n- な alone: emotional reflection, emphasis\n- かな: wondering, uncertainty, 'I wonder...'\n\nCommon with:\n- Statements of emotion\n- Self-reflection\n- Wishful thinking\n- Uncertainty about situations\n\nGender: Relatively neutral, used by both men and women in this context (different from the な in なさい short form).",
    relatedGrammar: ["tk-essential-059"],
    tags: ["particles", "sentence-ending", "な", "wondering", "reflection"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/endingparticles" }]
  },

  {
    grammarId: "tk-essential-062",
    title: "Masculine Question Particles (かい/だい)",
    titleJapanese: "男性的疑問詞",
    jlptLevel: "N3",
    category: "Essential Grammar",
    taeKimSection: "4.18",
    taeKimOrder: 62,
    explanation: "かい and だい are strongly masculine sentence endings for asking questions. かい is used for yes/no questions while だい is used for open-ended questions (who, what, where, when, why, how). These give a rough, manly, or older-generation feel.",
    structure: "Yes/no question + かい: [masculine yes/no question]\nOpen question + だい: [masculine wh-question]",
    examples: [
      {
        japanese: "おい、どこに行くんだい？",
        reading: "おい、どこにいくんだい？",
        english: "Hey, where are you going?",
        breakdown: "おい (hey) + どこに行くんだ (where are you going-explanatory) + い (masculine question). だい for open-ended question."
      },
      {
        japanese: "さきちゃんって呼んでもいいかい？",
        reading: "さきちゃんってよんでもいいかい？",
        english: "Can I call you Saki-chan?",
        breakdown: "さきちゃんって呼んでもいい (is it OK to call you Saki-chan) + かい (masculine yes/no question)."
      },
      {
        japanese: "一体何時に帰ってくるつもりだったんだい？",
        reading: "いったいなんじにかえってくるつもりだったんだい？",
        english: "What time were you planning on coming home exactly?",
        breakdown: "一体 (emphasizes 'on earth') + 何時に帰ってくるつもりだった (what time planning to come home) + んだい (explanatory + masculine question)."
      },
      {
        japanese: "俺は土曜日、映画を見に行くけど、一緒に行くかい？",
        reading: "おれはどようび、えいがをみにいくけど、いっしょにいくかい？",
        english: "I'm going to see a movie Saturday, wanna go together?",
        breakdown: "俺は (I-masculine) + 土曜日映画を見に行く (going to see movie Saturday) + けど (but) + 一緒に行く (go together) + かい (yes/no question)."
      }
    ],
    notes: "Usage patterns:\nかい - Yes/No questions\n- いいかい？ (Is it OK?)\n- 知ってるかい？ (Do you know?)\n- 行くかい？ (Will you go?)\n\nだい - Open-ended questions (wh-questions)\n- どこだい？ (Where?)\n- 何だい？ (What?)\n- いつだい？ (When?)\n- 誰だい？ (Who?)\n\nCharacteristics:\n- Strongly masculine\n- Often used by older generation\n- Can sound rough or overly casual\n- Not appropriate for formal situations\n- Women generally don't use these\n\nOften combined with:\n- のだ/んだ explanatory (becomes んだい)\n- Masculine pronouns (俺/僕)\n- Casual speech patterns\n\nSimilar to:\n- か (neutral question marker)\n- の (feminine question marker)\n\nThese are the masculine equivalents of softer question markers.",
    relatedGrammar: ["tk-essential-063"],
    tags: ["particles", "questions", "masculine", "かい", "だい", "rough-speech"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/endingparticles" }]
  },

  {
    grammarId: "tk-essential-063",
    title: "Gender-Specific Particles (わ/かしら/ぞ/ぜ)",
    titleJapanese: "性別による終助詞",
    jlptLevel: "N3",
    category: "Essential Grammar",
    taeKimSection: "4.18",
    taeKimOrder: 63,
    explanation: "These sentence-ending particles are primarily used to emphasize something and are heavily gender-specific. わ is very feminine, かしら is feminine version of かな. ぞ and ぜ are masculine versions of よ, making you sound 'cool' and manly. Understanding these helps recognize gendered speech patterns.",
    structure: "Feminine: Sentence + わ/かしら\nMasculine: Sentence + ぞ/ぜ",
    examples: [
      {
        japanese: "もう時間がないわ。",
        reading: "もうじかんがないわ。",
        english: "There is no more time.",
        breakdown: "もう時間がない (no more time) + わ (feminine emphasis). Very feminine particle."
      },
      {
        japanese: "いい大学に入れるかしら？",
        reading: "いいだいがくにはいれるかしら？",
        english: "I wonder if I can enter a good college?",
        breakdown: "いい大学に入れる (can enter good college) + かしら (feminine wondering). Feminine version of かな."
      },
      {
        japanese: "おい、行くぞ！",
        reading: "おい、いくぞ！",
        english: "Hey, we're going!",
        breakdown: "おい (hey) + 行く (going) + ぞ (masculine emphasis). Masculine, forceful."
      },
      {
        japanese: "これで、もう終わりだぜ。",
        reading: "これで、もうおわりだぜ。",
        english: "With this, it's over already.",
        breakdown: "これで (with this) + もう終わりだ (already over) + ぜ (masculine cool emphasis). Trying to sound cool/manly."
      }
    ],
    notes: "Feminine particles:\nわ - Emphasis (very feminine)\n- Different from Kansai dialect わ\n- Sounds delicate/refined\n- Can sound overly feminine if overused\n- もう帰るわ (I'm going home now)\n\nかしら - Wondering (feminine)\n- Feminine version of かな\n- どうかしら？ (I wonder how it is?)\n- 来るかしら？ (I wonder if they'll come?)\n\nMasculine particles:\nぞ - Strong emphasis (masculine)\n- Equivalent to よ but masculine\n- 見たぞ！ (I saw it!)\n- 行くぞ！ (Let's go!/We're going!)\n- Forceful, declaring\n\nぜ - Cool emphasis (masculine)\n- Similar to ぞ but sounds 'cooler'\n- 大丈夫だぜ (It's fine, dude)\n- Trying to sound cool/casual\n- Common in manga/anime\n\nImportant notes:\n- These make statements much stronger\n- Heavily associated with gender stereotypes\n- Modern speech less rigidly gendered\n- Overuse can sound like caricature\n- Context and intonation matter\n\nCaution for learners:\n- Be aware these exist for comprehension\n- Use carefully - easy to sound unnatural\n- Native speakers use more subtly\n- Better to observe than overuse",
    relatedGrammar: ["tk-essential-061", "tk-essential-062"],
    tags: ["particles", "gender", "feminine", "masculine", "わ", "かしら", "ぞ", "ぜ"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/endingparticles" }]
  },

  // Chapter 5.1: Causative and Passive Verbs
  {
    grammarId: "tk-special-001",
    title: "Causative Verbs (させる - make/let someone do)",
    titleJapanese: "使役動詞",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.1",
    taeKimOrder: 64,
    explanation: "Causative verbs express making or letting someone do something. The form させる (ru-verbs) or せる (u-verbs) transforms verbs to mean 'make/let [someone] do [action]'. The person doing the action is marked with に. When combined with あげる/くれる, it usually means 'let' rather than 'make'.",
    structure: "Ru-verbs: 食べる → 食べさせる\nU-verbs: 話す → 話させる\nExceptions: する → させる, くる → こさせる\nShorter alternative: さす ending (casual)",
    examples: [
      {
        japanese: "先生が学生に宿題をたくさんさせた。",
        reading: "せんせいががくせいにしゅくだいをたくさんさせた。",
        english: "The teacher made the students do lots of homework.",
        breakdown: "先生が (teacher-subject) + 学生に (to students) + 宿題をたくさん (lots of homework-object) + させた (made do-past). Causative shows teacher caused action."
      },
      {
        japanese: "先生が質問をたくさん聞かせてくれた。",
        reading: "せんせいがしつもんをたくさんきかせてくれた。",
        english: "The teacher let [me] ask lots of questions.",
        breakdown: "先生が (teacher) + 質問をたくさん (lots of questions) + 聞かせて (causative of 聞く=to ask) + くれた (gave me favor). With くれる, means 'let' not 'make'."
      },
      {
        japanese: "今日は仕事を休ませてください。",
        reading: "きょうはしごとをやすませてください。",
        english: "Please let me rest from work today.",
        breakdown: "今日は (today) + 仕事を休ませて (let [me] rest from work-causative) + ください (please). Polite request using causative."
      },
      {
        japanese: "その部長は、よく長時間働かせる。",
        reading: "そのぶちょうは、よくちょうじかんはたらかせる。",
        english: "That manager often makes people work long hours.",
        breakdown: "その部長は (that manager) + よく (often) + 長時間働かせる (make work long hours). 働く → 働かせる (causative of u-verb)."
      }
    ],
    notes: "Formation rules:\n**Ru-verbs:** Remove る, add させる\n- 食べる → 食べさせる (make/let eat)\n- 見る → 見させる (make/let see)\n\n**U-verbs:** Change to negative form base, add せる\n- 話す → 話さない → 話させる (make/let talk)\n- 聞く → 聞かない → 聞かせる (make/let ask/listen)\n- 書く → 書かない → 書かせる (make/let write)\n\n**Exceptions:**\n- する → させる\n- くる → こさせる\n\nAll causative verbs become ru-verbs!\n\nMeaning distinction:\n- With あげる/くれる: Usually 'let' (giving permission/favor)\n- Without: Often 'make' (forcing action)\n- Context determines exact meaning\n\nShorter alternative (casual/slang):\n- Use さす ending instead of させる/せる\n- 食べさす, 行かす (less formal)\n\nParticle usage:\n- Person performing action: に\n- When verb already has に: を can be used for person\n- Object of action: を\n\nImportant: The causative doesn't specify whether it's forcing or allowing - context and additional verbs (like くれる) clarify the meaning.",
    relatedGrammar: ["tk-special-002", "tk-special-003", "tk-essential-051", "tk-essential-052"],
    tags: ["causative", "させる", "make", "let", "verb-forms"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/causepass" }]
  },

  {
    grammarId: "tk-special-002",
    title: "Passive Verbs (られる - be done to)",
    titleJapanese: "受身形",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.1",
    taeKimOrder: 65,
    explanation: "Passive verbs express actions done to the subject. The form られる (ru-verbs) or れる (u-verbs) transforms verbs to passive voice. In Japanese, passive is frequently used in formal writing and to express politeness (being less direct = more polite). The person performing the action is marked with に.",
    structure: "Ru-verbs: 食べる → 食べられる\nU-verbs: 話す → 話される\nExceptions: する → される, くる → こられる",
    examples: [
      {
        japanese: "ポリッジが誰かに食べられた！",
        reading: "ポリッジがだれかにたべられた！",
        english: "The porridge was eaten by somebody!",
        breakdown: "ポリッジが (porridge-subject) + 誰かに (by somebody) + 食べられた (was eaten-passive). Classic passive showing action done to subject."
      },
      {
        japanese: "みんなに変だと言われます。",
        reading: "みんなにへんだといわれます。",
        english: "I am told by everybody that I'm strange.",
        breakdown: "みんなに (by everybody) + 変だと (that [I'm] strange) + 言われます (am told-passive polite). Passive shows receiving action of being told."
      },
      {
        japanese: "光の速さを超えるのは、不可能だと思われる。",
        reading: "ひかりのはやさをこえるのは、ふかのうだとおもわれる。",
        english: "Exceeding the speed of light is thought to be impossible.",
        breakdown: "光の速さを超えるのは (exceeding speed of light-topic) + 不可能だと思われる (is thought to be impossible-passive). Passive makes statement more objective/formal."
      },
      {
        japanese: "この教科書は多くの人に読まれている。",
        reading: "このきょうかしょはおおくのひとによまれている。",
        english: "This textbook is being read by many people.",
        breakdown: "この教科書は (this textbook) + 多くの人に (by many people) + 読まれている (is being read-passive progressive). Shows ongoing passive action."
      }
    ],
    notes: "Formation rules:\n**Ru-verbs:** Remove る, add られる\n- 食べる → 食べられる (be eaten)\n- 見る → 見られる (be seen)\n\n**U-verbs:** Change to negative form base, add れる\n- 話す → 話さない → 話される (be spoken)\n- 聞く → 聞かない → 聞かれる (be heard/asked)\n- 書く → 書かない → 書かれる (be written)\n\n**Exceptions:**\n- する → される\n- くる → こられる\n\nAll passive verbs become ru-verbs!\n\nNote: 食べられる can mean BOTH:\n1. Passive: 'be eaten' (porridge was eaten)\n2. Potential: 'can eat' (I can eat)\nContext always makes meaning clear.\n\nUsage in Japanese:\n- **Much more common** than English passive\n- Frequently used in essays, articles, formal writing\n- Adds politeness by being less direct\n- Often used for showing respect\n\nPoliteness progression:\n- どうする (casual: What will you do?)\n- どうしますか (polite: What will you do?)\n- どうされますか (respectful: What will you do?-passive)\n- どうなさいますか (honorific: What will you do?)\n- どうなさいますでしょうか (very formal)\n\nParticle usage:\n- Person performing action: に\n- Sometimes で for means/method\n- Subject of passive: が/は",
    relatedGrammar: ["tk-special-001", "tk-special-003", "tk-essential-036"],
    tags: ["passive", "られる", "polite", "formal", "verb-forms"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/causepass" }]
  },

  {
    grammarId: "tk-special-003",
    title: "Causative-Passive (させられる - be made to do)",
    titleJapanese: "使役受身",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.1",
    taeKimOrder: 66,
    explanation: "Causative-passive expresses being made to do something against your will. It combines both causative (make/let do) and passive (be done to). The conjugation order is critical: first make causative, then make that passive. This form emphasizes the unwillingness or lack of control of the person forced to act.",
    structure: "Order: Verb → Causative → Passive\n食べる → 食べさせる → 食べさせられる\nShorter alternative: さされる (limited use)",
    examples: [
      {
        japanese: "朝ご飯は食べたくなかったのに、食べさせられた。",
        reading: "あさごはんはたべたくなかったのに、たべさせられた。",
        english: "Despite not wanting to eat breakfast, I was made to eat it.",
        breakdown: "朝ご飯は食べたくなかった (didn't want to eat breakfast) + のに (despite) + 食べさせられた (was made to eat-causative-passive). Shows unwilling action."
      },
      {
        japanese: "日本では、お酒を飲ませられることが多い。",
        reading: "にほんでは、おさけをのませられることがおおい。",
        english: "In Japan, being made to drink is common.",
        breakdown: "日本では (in Japan) + お酒を飲ませられること (being made to drink) + が多い (is common). Describes cultural phenomenon using causative-passive."
      },
      {
        japanese: "あいつに二時間も待たせられた。",
        reading: "あいつににじかんもまたせられた。",
        english: "I was made to wait 2 hours by that guy.",
        breakdown: "あいつに (by that guy-casual) + 二時間も (as much as 2 hours-emphasis) + 待たせられた (was made to wait). Shows frustration at forced waiting."
      }
    ],
    notes: "Formation process (CRITICAL - order matters!):\n\n**Step 1: Make causative**\n- 食べる → 食べさせる (make eat)\n- 行く → 行かせる (make go)\n\n**Step 2: Make that causative form passive**\n- 食べさせる → 食べさせられる (be made to eat)\n- 行かせる → 行かせられる (be made to go)\n\nComplete examples:\n- 食べる → 食べさせる → 食べさせられる\n- 読む → 読ませる → 読ませられる\n- 行く → 行かせる → 行かせられる\n\nShorter alternative (casual):\n- Use さされる instead of させられる\n- 食べさされる (instead of 食べさせられる)\n- Cannot use if resulting form ends in させられる's られる\n- Limited use - standard form more common\n\nNuance:\n- Emphasizes **unwillingness** or **lack of choice**\n- Often implies negative feeling about the situation\n- Subject had no say in the matter\n- More dramatic than simple causative\n\nDon't confuse:\n- Causative (させる): make/let someone do\n- Passive (られる): be done to\n- Causative-passive (させられる): be made to do\n\nCommon situations:\n- Being made to work overtime\n- Being made to drink at work parties\n- Being made to wait\n- Being made to do homework/chores\n\nAll describe situations where you had no choice but to do something.",
    relatedGrammar: ["tk-special-001", "tk-special-002"],
    tags: ["causative-passive", "させられる", "unwilling", "forced-action", "verb-forms"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/causepass" }]
  },

  // Chapter 5.3: Unintentional Actions
  {
    grammarId: "tk-special-004",
    title: "Unintentional Actions (てしまう/ちゃう/じゃう)",
    titleJapanese: "意図しない動作",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.3",
    taeKimOrder: 67,
    explanation: "てしまう expresses actions that happen unintentionally, often with unsatisfactory results, or actions completed completely. It attaches to the te-form and conveys regret, accident, or finality. In casual speech, てしまう becomes ちゃう and でしまう becomes じゃう. There's also a rougher masculine version: ちまう/じまう.",
    structure: "Verb te-form + しまう\nCasual: てしまう → ちゃう, でしまう → じゃう\nRough: ちまう/じまう",
    examples: [
      {
        japanese: "そのケーキを全部食べてしまった。",
        reading: "そのケーキをぜんぶたべてしまった。",
        english: "Oops, I ate that whole cake.",
        breakdown: "そのケーキを全部 (that whole cake) + 食べてしまった (ended up eating-regret). Shows unintended completion with negative feeling."
      },
      {
        japanese: "金魚がもう死んじゃった。",
        reading: "きんぎょがもうしんじゃった。",
        english: "The goldfish died already.",
        breakdown: "金魚がもう (goldfish already) + 死んじゃった (died-casual てしまう). 死んでしまった → 死んじゃった. Shows unfortunate outcome."
      },
      {
        japanese: "また遅刻しちまったよ。",
        reading: "またちこくしちまったよ。",
        english: "Darn, I'm late again.",
        breakdown: "また遅刻 (late again) + しちまった (ended up doing-rough masculine). してしまった → しちまった. Rough, coarse feeling."
      },
      {
        japanese: "宿題をやってしまいなさい。",
        reading: "しゅくだいをやってしまいなさい。",
        english: "Finish your homework completely.",
        breakdown: "宿題をやって (do homework) + しまいなさい (finish completely-command). Alternative meaning: complete action thoroughly, not regretful."
      }
    ],
    notes: "Two main meanings:\n\n**1. Unintentional/Regretful Action (most common):**\n- Expresses something happened accidentally\n- Often with unsatisfactory results\n- Conveys speaker's regret or dismay\n- Examples: forgot, accidentally broke, ate too much\n\n**2. Complete Action (less common):**\n- Emphasizes thorough completion\n- Often in commands/suggestions\n- No regret nuance\n- Similar to 'finish doing...'\n\nCasual forms:\n**てしまう → ちゃう** (casual, cute)\n- 食べてしまう → 食べちゃう\n- 行ってしまう → 行っちゃう\n- 見てしまう → 見ちゃう\n\n**でしまう → じゃう** (casual, cute)\n- 死んでしまう → 死んじゃう\n- 飲んでしまう → 飲んじゃう\n\nRough masculine forms:\n**ちまう/じまう** (rough, coarse)\n- 食べてしまう → 食べちまう\n- 死んでしまう → 死んじまう\n- Sounds like rough middle-aged man\n- Less cute than ちゃう/じゃう\n\nConjugation:\n- All forms conjugate as regular u-verbs\n- ちゃう: ちゃわない, ちゃった, ちゃって\n- じゃう: じゃわない, じゃった, じゃって\n\nCommon situations:\n- Forgot something important\n- Ate/drank too much\n- Broke something\n- Said something you shouldn't have\n- Made someone wait\n- Lost something\n\nしまった! alone = \"Oh no!\" / \"I screwed up!\"",
    relatedGrammar: ["tk-essential-032", "tk-essential-034"],
    tags: ["unintentional", "regret", "しまう", "ちゃう", "completion"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/unintended" }]
  },

  // Chapter 5.4: Generic Nouns
  {
    grammarId: "tk-special-005",
    title: "Experience with こと (have done/have you ever)",
    titleJapanese: "経験を表す「こと」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.4",
    taeKimOrder: 68,
    explanation: "Using past tense verb + ことがある expresses whether you have ever experienced something. This is the primary way to express 'have done' or 'have you ever done' in Japanese. Using present tense + ことがある means 'there are times when [action happens]'.",
    structure: "Past verb + ことがある: have done (experience)\nPresent verb + ことがある: there are times when",
    examples: [
      {
        japanese: "パリに行ったことはありますか。",
        reading: "パリにいったことはありますか。",
        english: "Have you ever gone to Paris?",
        breakdown: "パリに行った (went to Paris-past) + ことはありますか (experience exists?). Standard way to ask about past experience."
      },
      {
        japanese: "お寿司を食べたことがある。",
        reading: "おすしをたべたことがある。",
        english: "I've had sushi before.",
        breakdown: "お寿司を食べた (ate sushi-past) + ことがある (have experience). States having done something at least once."
      },
      {
        japanese: "日本の映画を観たことないの？",
        reading: "にほんのえいがをみたことないの？",
        english: "You've never seen a Japanese movie?",
        breakdown: "日本の映画を観た (watched Japanese movie) + ことない (no experience) + の (feminine question). Negative experience question."
      },
      {
        japanese: "徹夜して、宿題することはある。",
        reading: "てつやして、しゅくだいすることはある。",
        english: "There are times when I do homework while staying up all night.",
        breakdown: "徹夜して宿題すること (doing homework while staying up) + はある (times exist). Present tense = occasional occurrence, not single experience."
      }
    ],
    notes: "Critical distinction:\n\n**Past tense + ことがある = EXPERIENCE**\n- 'Have done' / 'Have you ever done'\n- Asking about or stating past experience\n- At least one time in the past\n- 食べたことがある (I've eaten it before)\n- 行ったことがない (I've never gone)\n\n**Present tense + ことがある = OCCASIONAL**\n- 'There are times when...'\n- Habitual or occasional action\n- Not about specific past experience  \n- 食べることがある (There are times I eat it)\n- 行くことがある (There are times I go)\n\nForming questions:\n- ことはありますか (polite)\n- ことある？ (casual)\n- ことない？ (never?, casual)\n\nNegative forms:\n- ことがない (have never)\n- ことはない (never do/doesn't happen)\n- ことがなかった (had never - until some point)\n\nEmphasis patterns:\n- 一度も〜ことがない (not even once)\n- まだ〜ことがない (haven't yet)\n- 何度も〜ことがある (have done many times)\n\nThis is ESSENTIAL grammar for:\n- Talking about travel experiences\n- Discussing foods you've tried\n- Asking about someone's background\n- Job interviews ('Have you ever worked...')\n- Language learning ('Have you studied...')\n\nDon't confuse with:\n- ことになる (it has been decided that)\n- ことにする (decide to)\n- ということ (the fact that/means that)",
    relatedGrammar: ["tk-special-006", "tk-special-007"],
    tags: ["experience", "こと", "have-done", "past-experience"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/genericnouns" }]
  },

  {
    grammarId: "tk-special-006",
    title: "Abstract Places with ところ (just now/about to)",
    titleJapanese: "抽象的な「ところ」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.4",
    taeKimOrder: 69,
    explanation: "ところ means 'place' but can express abstract moments in time. Past tense + ところ means 'just finished', present tense + ところ means 'just about to', and ている + ところ means 'in the middle of'. It can also describe characteristics or good parts of something.",
    structure: "Past + ところ: just finished\nPresent + ところ: about to\nている + ところ: in the middle of",
    examples: [
      {
        japanese: "早くきて。映画は今ちょうどいいところだよ。",
        reading: "はやくきて。えいがはいまちょうどいいところだよ。",
        english: "Come quickly. We're at the good part of the movie.",
        breakdown: "映画は今ちょうど (movie is now exactly) + いいところ (good part/place). ところ refers to point in the movie."
      },
      {
        japanese: "今は授業が終ったところです。",
        reading: "いまはじゅぎょうがおわったところです。",
        english: "Class has ended just now.",
        breakdown: "授業が終った (class ended-past) + ところです (at that point). Past + ところ = just finished."
      },
      {
        japanese: "これから行くところでした。",
        reading: "これからいくところでした。",
        english: "I was just about to go from now.",
        breakdown: "これから行く (going from now-present) + ところでした (was at that point). Present + ところ = about to do."
      },
      {
        japanese: "彼は優しいところもあるよ。",
        reading: "かれはやさしいところもあるよ。",
        english: "His personality has some gentle parts too.",
        breakdown: "彼は優しい (he is kind) + ところもある (parts exist too). ところ = aspects/characteristics."
      }
    ],
    notes: "Multiple uses of ところ:\n\n**1. Physical place (basic meaning):**\n- あそこはいいところ (That's a good place)\n- どこかいいところ知ってる？ (Know any good places?)\n\n**2. Point in time (abstract):**\n\n**Past tense + ところ = Just finished**\n- 食べたところ (just ate)\n- 着いたところ (just arrived)\n- 終わったところ (just finished)\n\n**Present tense + ところ = About to**\n- 食べるところ (about to eat)\n- 出かけるところ (about to go out)\n- 始まるところ (about to start)\n\n**ている + ところ = In the middle of**\n- 食べているところ (in the middle of eating)\n- 勉強しているところ (in the middle of studying)\n\n**3. Characteristic/aspect:**\n- 面白いところ (interesting aspect)\n- いいところ (good point/characteristic)\n- 彼女の好きなところ (the parts I like about her)\n\n**4. Good timing/part:**\n- ちょうどいいところ (perfect timing/good part)\n- いいところに来た (you came at a good time)\n\nUsage notes:\n- Often with だ/です at the end\n- Can use past tense でした for softer feel\n- Very common in daily conversation\n- Expresses timing/progression naturally\n\nCommon patterns:\n- 今〜ところ (just now)\n- ちょうど〜ところ (exactly at that point)\n- これから〜ところ (about to from now)",
    relatedGrammar: ["tk-special-005", "tk-special-007", "tk-essential-032"],
    tags: ["ところ", "timing", "just-now", "about-to", "abstract"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/genericnouns" }]
  },

  // Chapter 5.5: Certainty Levels
  {
    grammarId: "tk-special-007",
    title: "Uncertainty with かもしれない (maybe/might)",
    titleJapanese: "不確かさ「かもしれない」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.5",
    taeKimOrder: 70,
    explanation: "かもしれない means 'maybe' or 'possibly' and expresses uncertainty - less certain than 多分. It attaches to complete clauses. For nouns and na-adjectives, remove だ. Casual form is かも. There's also a masculine version かもしれん. It can be written in kanji as かも知れない.",
    structure: "Clause + かもしれない\nNouns/na-adj: Remove だ\nCasual: かも\nPolite: かもしれません",
    examples: [
      {
        japanese: "スミスさんは食堂に行ったかもしれません。",
        reading: "スミスさんはしょくどうにいったかもしれません。",
        english: "Smith-san may have gone to the cafeteria.",
        breakdown: "スミスさんは食堂に行った (Smith went to cafeteria) + かもしれません (might-polite). Shows uncertainty about past action."
      },
      {
        japanese: "雨で試合は中止になるかもしれないね。",
        reading: "あめでしあいはちゅうしになるかもしれないね。",
        english: "The game may become canceled by rain, huh?",
        breakdown: "雨で (because of rain) + 試合は中止になる (game becomes canceled) + かもしれない (might) + ね (tag). Uncertain prediction."
      },
      {
        japanese: "この映画は一回観たことあるかも！",
        reading: "このえいがはいっかいみたことあるかも！",
        english: "I might have already seen this movie once.",
        breakdown: "この映画は一回観たことある (have seen this movie once) + かも (might-casual). Casual uncertainty about experience."
      },
      {
        japanese: "彼は学生かもしれない。",
        reading: "かれはがくせいかもしれない。",
        english: "He might be a student.",
        breakdown: "彼は学生 (he is student-noun, だ removed) + かもしれない (might be). Must remove だ for nouns."
      }
    ],
    notes: "Formation rules:\n\n**With verbs and i-adjectives:**\nSimply attach かもしれない\n- 行くかもしれない (might go)\n- 寒いかもしれない (might be cold)\n- 食べたかもしれない (might have eaten)\n\n**With nouns and na-adjectives:**\nMUST remove declarative だ\n- 学生だかもしれない ✗ WRONG\n- 学生かもしれない ✓ CORRECT\n- 静かだかもしれない ✗ WRONG  \n- 静かかもしれない ✓ CORRECT\n\n**Formality levels:**\n- かもしれません (polite)\n- かもしれない (casual)\n- かも (very casual, common in speech)\n- かもしれん (masculine, rough)\n\n**Certainty scale:**\nLeast certain → Most certain\n1. かもしれない (maybe, possibly)\n2. 多分 (probably)\n3. でしょう/だろう (probably, fairly certain)\n4. に違いない (must be, almost certain)\n5. 絶対 (absolutely, certain)\n\nUsage:\n- Less assertive than 多分\n- Shows speaker is not confident\n- Polite way to suggest possibilities\n- Common in daily conversation\n\nCasual abbreviation かも:\n- Very common in speech\n- Can end sentence directly\n- 行くかも (might go)\n- そうかも (might be so)\n- わからないかも (might not know)\n\nDon't confuse with:\n- かもしれないけど (might be, but...)\n- かもしれないが (might be, however...)",
    relatedGrammar: ["tk-special-008", "tk-special-009"],
    tags: ["uncertainty", "possibility", "かもしれない", "maybe", "doubt"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/certainty" }]
  },

  {
    grammarId: "tk-special-008",
    title: "Probability with でしょう/だろう (probably)",
    titleJapanese: "推量「でしょう」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.5",
    taeKimOrder: 71,
    explanation: "でしょう expresses probability or expectation, close to 多分 in meaning. It's more certain than かもしれない. The polite form is flat intonation; casual has rising tone and can shorten to でしょ. だろう is the casual masculine equivalent. Can replace です/か with でしょう/でしょうか for more polite, less assuming questions.",
    structure: "Sentence + でしょう (polite/casual)\nSentence + だろう (casual masculine)\nQuestion: 〜でしょうか (polite uncertainty)",
    examples: [
      {
        japanese: "明日も雨でしょう。",
        reading: "あしたもあめでしょう。",
        english: "Probably rain tomorrow too.",
        breakdown: "明日も雨 (tomorrow also rain) + でしょう (probably). Polite prediction with fair certainty."
      },
      {
        japanese: "だから、時間がないって言ったでしょう！",
        reading: "だから、じかんがないっていったでしょう！",
        english: "That's why I told you there was no time!",
        breakdown: "時間がないって言った (said there's no time) + でしょう (I told you so!-casual rising tone). Assertive 'I told you so' feeling."
      },
      {
        japanese: "もう寝ているだろう。",
        reading: "もうねているだろう。",
        english: "Probably sleeping already.",
        breakdown: "もう寝ている (already sleeping) + だろう (probably-masculine). Casual masculine probability."
      },
      {
        japanese: "休ませていただけますでしょうか。",
        reading: "やすませていただけますでしょうか。",
        english: "May I receive the favor of resting, possibly?",
        breakdown: "休ませていただけます (can receive favor of resting-honorific) + でしょうか (possibly?). VERY polite でしょうか added to ます form."
      }
    ],
    notes: "Two distinct uses:\n\n**1. POLITE でしょう (flat intonation):**\n- States probability/expectation\n- More certain than かもしれない\n- Formal, respectful tone\n- Similar to 多分\n- 明日は晴れでしょう (It will probably be sunny tomorrow)\n- 学生さんでしょうか (Are you a student? - polite)\n\n**2. CASUAL でしょう/でしょ (rising intonation):**\n- 'See, I told you!'\n- 'Right?' / 'Don't you think?'\n- Assertive, seeking agreement\n- Often sounds like でしょー with long vowel\n- そうでしょう？ (Right? I told you so!)\n- 知ってるでしょ (You know, right?)\n\nだろう (casual masculine):\n- Same meaning as casual でしょう\n- More masculine/rough\n- Common in male speech\n- もう終わっただろう (It's probably over already)\n- 行くんだろう？ (You're going, right?)\n\nPolite questions:\nReplace です/か with でしょうか\n- 学生ですか → 学生でしょうか (more polite, less assuming)\n- どこへ行きますか → どこへ行くんでしょうか (softer inquiry)\n\nVery polite pattern:\n〜ますでしょうか (even more polite)\n- います → いますでしょうか\n- できます → できますでしょうか\n\nCertainty comparison:\nかもしれない < でしょう/だろう < に違いない\n(might) < (probably) < (must be)\n\nConjugation:\n- No tense (always だろう/でしょう)\n- でしょう can become でしょうか (question)\n- Casual: でしょ\n- Masculine: だろう, だろ\n\nCommon in:\n- Weather forecasts (雨でしょう)\n- Giving opinions politely\n- Seeking agreement\n- Making assumptions",
    relatedGrammar: ["tk-special-007", "tk-essential-024"],
    tags: ["probability", "でしょう", "だろう", "probably", "expectation"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/certainty" }]
  },

  // Chapter 5.6: Expressing Amounts
  {
    grammarId: "tk-special-009",
    title: "Limiting with だけ (only/just)",
    titleJapanese: "限定「だけ」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.6",
    taeKimOrder: 72,
    explanation: "だけ means 'only' or 'just that' - indicating that's all there is. It attaches directly to words like a particle. Unlike しか (which requires negative), だけ works with both positive and negative sentences. Major particles (を/に/へ/で) come after だけ, but minor particles like から/まで usually come before だけ.",
    structure: "Word + だけ: only/just\nだけ + を/に/で/etc: (major particles after)\nから/まで + だけ: (minor particles before)",
    examples: [
      {
        japanese: "それだけは、食べないでください。",
        reading: "それだけは、たべないでください。",
        english: "Just don't eat that.",
        breakdown: "それだけ (just that) + は (topic marker after だけ). Singling out one thing not to eat, implying others are OK."
      },
      {
        japanese: "準備が終わったから、これからは食べるだけだ。",
        reading: "じゅんびがおわったから、これからはたべるだけだ。",
        english: "Since the preparations are done, from here we just have to eat.",
        breakdown: "準備が終わった (preparations finished) + これからは食べるだけ (from now just eat). だけ attaches directly to verb."
      },
      {
        japanese: "ここに名前を書くだけでいいですか？",
        reading: "ここになまえをかくだけでいいですか？",
        english: "Is it ok to just write [my] name here?",
        breakdown: "名前を書くだけ (just write name) + でいい (is OK with). Shows simplicity of required action."
      },
      {
        japanese: "小林さんからだけは、返事が来なかった。",
        reading: "こばやしさんからだけは、へんじがこなかった。",
        english: "A reply has not come from only Kobayashi-san.",
        breakdown: "小林さんから (from Kobayashi) + だけは (only-topic). Minor particle から comes before だけ."
      }
    ],
    notes: "Basic usage:\n**だけ = only, just, that's all**\n- りんごだけ (just apples)\n- これだけ (just this)\n- 一つだけ (just one)\n\nWith particles:\n**Major particles come AFTER だけ:**\nを, に, へ, で, と\n- それだけを食べる (eat only that)\n- ここだけに行く (go only here)\n- 彼だけと話す (talk only with him)\n\n**Minor particles come BEFORE だけ:**\nから, まで, より\n- 田中さんからだけ (only from Tanaka)\n- 3時までだけ (only until 3 o'clock)\n- More common: からだけ (90,000 hits) vs だけから (50,000)\n\n**Topic marker は always comes AFTER:**\n- これだけは (just this - emphasized)\n- 今日だけは (just today - special emphasis)\n\nWith verbs:\nAttach directly to any verb form\n- 食べるだけ (just eat)\n- 食べただけ (just ate)\n- 食べないだけ (just don't eat)\n- Past tense adds certainty: 食べただけがいい (it's better to just eat)\n\nWith adjectives:\nDirect attachment\n- 大きいだけ (just big)\n- 静かなだけ (just quiet)\n\nDifference from しか:\n**だけ (neutral - 'only'):**\n- Works with positive or negative\n- これだけ見る (see just this) ✓\n- これだけ見ない (don't see just this) ✓\n\n**しか (emphatic - 'nothing but'):**\n- MUST use negative\n- これしか見る ✗ WRONG\n- これしか見ない (don't see anything but this) ✓\n\nCommon patterns:\n- だけで enough to just do that)\n- だけでいい (just that is fine)\n- だけじゃない (not only/it's not just...)\n- それだけ (that's all/just that)",
    relatedGrammar: ["tk-special-010", "tk-special-011"],
    tags: ["だけ", "only", "limitation", "particles", "amounts"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/amount" }]
  },

  {
    grammarId: "tk-special-010",
    title: "Nothing but with しか (only - negative emphasis)",
    titleJapanese: "否定限定「しか」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.6",
    taeKimOrder: 73,
    explanation: "しか indicates the lack of everything else and MUST be used with negative forms. It means 'nothing but' or 'only' with emphatic negative feeling. It's stronger than だけ and emphasizes insufficiency or limitation. The particle order is から/まで before しか. There's a stronger casual version っきゃ.",
    structure: "Word + しか + NEGATIVE\nAlternative: っきゃ + NEGATIVE",
    examples: [
      {
        japanese: "今日は忙しくて、朝ご飯しか食べられなかった。",
        reading: "きょうはいそがしくて、あさごはんしかたべられなかった。",
        english: "Today was busy and couldn't eat anything but breakfast.",
        breakdown: "今日は忙しくて (today was busy) + 朝ご飯しか食べられなかった (could only eat breakfast-negative). しか emphasizes insufficient eating."
      },
      {
        japanese: "アリスからしか何ももらってない。",
        reading: "アリスからしかなにももらってない。",
        english: "I didn't receive anything except from Alice.",
        breakdown: "アリスから (from Alice) + しか (nothing but) + 何ももらってない (didn't receive anything). から comes before しか."
      },
      {
        japanese: "こうなったら、逃げるしかない。",
        reading: "こうなったら、にげるしかない。",
        english: "There's no choice but to run away once it turns out like this.",
        breakdown: "こうなったら (if it becomes like this) + 逃げるしかない (no choice but to escape). Shows limited options."
      },
      {
        japanese: "これは買うっきゃない！",
        reading: "これはかうっきゃない！",
        english: "There's nothing but to buy this!",
        breakdown: "これは買う (buy this) + っきゃない (nothing but-emphatic). Stronger alternative to しか, shows determination."
      }
    ],
    notes: "Critical rule:\n**しか ALWAYS requires negative!**\n\nCorrect:\n- これしか見ない (don't see anything but this) ✓\n- これしかない (there's nothing but this) ✓\n\nWrong:\n- これしか見る ✗\n- これしかある ✗\n\nComparison with だけ:\n**だけ (neutral):**\n- これだけ見る (just see this) - neutral\n- これだけ見ない (don't see just this)\n\n**しか (emphatic lack):**\n- これしか見ない (don't see anything else)\n- Emphasizes that everything else is excluded\n- Implies insufficiency or limitation\n\nWith particles:\n**から/まで come BEFORE しか:**\nからしか beats しかから (60,000 to 600 on Google)\n- 朝からしか勉強してない (only studied since morning)\n- 5時までしかいない (only here until 5)\n\n**Major particles come AFTER:**\n- これしかを食べない → これしか食べない\n- Usually particles are dropped with しか\n\nCommon patterns:\n**〜しかない = no choice but to/only [option]**\n- 行くしかない (no choice but to go)\n- やるしかない (gotta do it)\n- 頑張るしかない (can only try our best)\n- 待つしかない (can only wait)\n\n**〜しか〜ない = only [insufficient amount]**\n- 100円しかない (only have 100 yen)\n- 一つしかない (there's only one)\n- 少ししかない (there's only a little)\n\nっきゃ (emphatic alternative):\n- Stronger than しか\n- More determined feeling\n- やるっきゃない！ (Gotta just do it!)\n- これっきゃない！ (This is the only option!)\n- Less common than しか\n\nNuance:\nしか emphasizes:\n- Insufficiency (not enough)\n- Limited options\n- Disappointment\n- Exclusion of alternatives\n- 'Only X and nothing more (unfortunately)'",
    relatedGrammar: ["tk-special-009", "tk-special-011"],
    tags: ["しか", "negative", "limitation", "nothing-but", "emphasis"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/amount" }]
  },

  {
    grammarId: "tk-special-011",
    title: "Nothing but everywhere with ばかり (all/nothing but)",
    titleJapanese: "充満「ばかり」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.6",
    taeKimOrder: 74,
    explanation: "ばかり expresses when there's so much of something that there's nothing else - the opposite of しか. It means 'nothing but' or 'only' but emphasizes abundance rather than lack. Casual pronunciations are ばっかり or ばっか. Can attach to verbs and nouns.",
    structure: "Noun/Verb + ばかり/ばっかり/ばっか\nEmphasis on abundance of one thing",
    examples: [
      {
        japanese: "何だよ！おばさんばっかりじゃないか？",
        reading: "なんだよ！おばさんばっかりじゃないか？",
        english: "What the? Isn't it nothing but obasan?",
        breakdown: "おばさん (middle-aged ladies) + ばっかり (nothing but-casual) + じゃないか (isn't it?). Shows dismay at room full of one type."
      },
      {
        japanese: "崇君は漫画ばっかり読んでてさ。かっこ悪い。",
        reading: "たかしくんはまんがばっかりよんでてさ。かっこわるい。",
        english: "Takashi-kun is reading nothing but comic books... He's so uncool.",
        breakdown: "漫画ばっかり読んでて (reading nothing but manga). Criticizing his exclusive focus on manga."
      },
      {
        japanese: "直美ちゃんと遊ぶばっかりでしょう！",
        reading: "なおみちゃんとあそぶばっかりでしょう！",
        english: "You're hanging out with Naomi-chan all the time, aren't you!",
        breakdown: "直美ちゃんと遊ぶ (play with Naomi) + ばっかり (nothing but) + でしょう (aren't you). Accusing of spending all time with one person."
      },
      {
        japanese: "最近は仕事ばっかだよ。",
        reading: "さいきんはしごとばっかだよ。",
        english: "Lately, it's nothing but work.",
        breakdown: "最近は仕事 (lately, work) + ばっか (nothing but-very casual). Complaining about work consuming all time."
      }
    ],
    notes: "Key distinction:\n**しか vs ばかり:**\n\n**しか (lack/insufficiency):**\n- 100円しかない (only 100 yen - not enough!)\n- Emphasizes what's missing\n- Always negative\n- Disappointed tone\n\n**ばかり (abundance/excess):**\n- おばさんばかり (nothing but older ladies - too many!)\n- Emphasizes overwhelming amount\n- Positive or negative verb\n- Often complaining about too much\n\nPronunciation variations:\n**Formality levels:**\n- ばかり (standard)\n- ばっかり (casual)\n- ばっか (very casual)\n- All mean exactly the same thing\n\nUsage patterns:\n**With nouns:**\n- 肉ばかり (nothing but meat)\n- 仕事ばかり (nothing but work)\n- テレビばかり (nothing but TV)\n\n**With verbs:**\n- 遊んでばかり (doing nothing but playing)\n- 寝てばかり (doing nothing but sleeping)  \n- 文句ばかり言う (saying nothing but complaints)\n\n**With て-form:**\nOften drops いる:\n- 読んでいる → 読んでる → 読んでばかり\n- 遊んでいる → 遊んでる → 遊んでばっか\n\nCommon contexts:\n**Complaints:**\n- ゲームばっかりしてる！ (Playing nothing but games!)\n- 寝てばかりいる (Doing nothing but sleeping)\n\n**Observations:**\n- 女の子ばかりだ (It's all girls)\n- 雨ばかり降る (It rains all the time)\n\n**Criticism:**\n- 文句ばかり (nothing but complaints)\n- 嘘ばかり (nothing but lies)\n\nNuance:\n- Usually implies **too much** of something\n- Can be neutral but often negative\n- Suggests need for variety/balance\n- 'Nothing but X' with emphasis on exclusivity\n\nDon't confuse with:\n- ばかり also means 'just/only recently' (食べたばかり = just ate)\n- Context makes meaning clear",
    relatedGrammar: ["tk-special-009", "tk-special-010", "tk-special-012"],
    tags: ["ばかり", "nothing-but", "abundance", "excess", "emphasis"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/amount" }]
  },

  {
    grammarId: "tk-special-012",
    title: "Too much with すぎる (exceed/too much)",
    titleJapanese: "過度「すぎる」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.6",
    taeKimOrder: 75,
    explanation: "すぎる (過ぎる) means 'to exceed' and expresses 'too much' when attached to verbs and adjectives. For verbs, attach to stem. For i-adjectives, remove い. For negatives, remove い from ない and add さ before すぎる. The result is always a ru-verb. The stem すぎ can be used as a noun.",
    structure: "Verb stem + すぎる\nI-adj (remove い) + すぎる\nNegative (ない→なさ) + すぎる",
    examples: [
      {
        japanese: "佐藤さんは料理が上手で、また食べ過ぎました。",
        reading: "さとうさんはりょうりがじょうずで、またたべすぎました。",
        english: "Satou-san is good at cooking and I ate too much again.",
        breakdown: "料理が上手 (good at cooking) + また食べ過ぎました (ate too much again). 食べる → 食べすぎる (eat too much)."
      },
      {
        japanese: "お酒を飲みすぎないように気をつけてね。",
        reading: "おさけをのみすぎないようにきをつけてね。",
        english: "Be careful to not drink too much, ok?",
        breakdown: "お酒を飲みすぎないように (so as not to drink too much) + 気をつけて (be careful). Negative form of すぎる."
      },
      {
        japanese: "静かすぎる。罠かもしれないよ。",
        reading: "しずかすぎる。わなかもしれないよ。",
        english: "It's too quiet. It might be a trap, you know.",
        breakdown: "静か (quiet na-adj) + すぎる (too much). 静か directly attaches to すぎる for na-adjectives."
      },
      {
        japanese: "時間が足りなさすぎて、何もできなかった。",
        reading: "じかんがたりなさすぎて、なにもできなかった。",
        english: "Due to too much of a lack of time, I couldn't do anything.",
        breakdown: "時間が足りない (time is insufficient) → 足りなさすぎる (too insufficient). Negative: ない → なさ + すぎる."
      }
    ],
    notes: "Formation rules:\n\n**1. Verbs: Use stem**\n- 食べる → 食べ + すぎる (eat too much)\n- 飲む → 飲み + すぎる (drink too much)\n- 話す → 話し + すぎる (talk too much)\n- 働く → 働き + すぎる (work too much)\n\n**2. I-adjectives: Remove final い**\n- 大きい → 大きすぎる (too big)\n- 高い → 高すぎる (too expensive/tall)\n- 遠い → 遠すぎる (too far)\n- 難しい → 難しすぎる (too difficult)\n\n**3. Na-adjectives: Direct attachment**\n- 静か + すぎる (too quiet)\n- きれい + すぎる (too pretty/clean)\n- 簡単 + すぎる (too simple)\n\n**4. Negatives: ない → なさ + すぎる**\n- 食べない → 食べなさすぎる (too much not eating)\n- 面白くない → 面白くなさすぎる (too not interesting)\n- 時間が足りない → 足りなさすぎる (too insufficient)\n\n**Special cases with 無い:**\nI-adjectives ending in ない that include 無:\n- もったいない → もったいなさすぎる (too wasteful)\n- 情けない → 情けなさすぎる (too pitiable)\n- Apply negative rule\n\nRegular i-adjectives with ない:\n- 危ない → 危なすぎる (too dangerous)\n- 少ない → 少なすぎる (too few)\n- Apply regular i-adjective rule\n\nConjugation:\n**すぎる is a ru-verb!**\n- すぎる (present)\n- すぎない (negative)\n- すぎた (past)\n- すぎて (te-form)\n- すぎすぎる would mean 'exceed too much' (rarely used)\n\nAs a noun (stem form):\n- 飲みすぎ (drinking too much - noun)\n- 食べすぎ (eating too much - noun)\n- それは飲みすぎだよ (That's drinking too much)\n\nNo tense on the すぎる:\nOnly すぎる conjugates for tense\n- 食べすぎる (eat too much - habitual)\n- 食べすぎた (ate too much - past)\n- NOT 食べたすぎる\n\nCommon patterns:\n- 〜すぎて (too much, so...)\n- 〜すぎる！ (This is too much!)\n- 〜すぎないように (so as not to [verb] too much)\n- 〜すぎるから (because it's too [adj])\n\nNuance:\n- Usually negative (excessive is bad)\n- Can be positive in compliments (親切すぎる = too kind)\n- Natural expression of excess",
    relatedGrammar: ["tk-special-011"],
    tags: ["すぎる", "excessive", "too-much", "exceed", "amounts"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/amount" }]
  },

  // Chapter 5.7: Similarity and Hearsay
  {
    grammarId: "tk-special-013",
    title: "Similarity with よう (appears/seems like)",
    titleJapanese: "様態「よう」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.7",
    taeKimOrder: 76,
    explanation: "よう (様) means appearance or manner. It expresses that something has the appearance or manner of a certain state. Can directly modify relative clauses. When sentence ends in よう, must add だ/です. For nouns use の, for na-adjectives use な. Can also be used with に as target particle to say 'like that'.",
    structure: "Clause + ようだ/ようです\nNoun + のよう\nNa-adj + なよう\n〜ように (like/as)",
    examples: [
      {
        japanese: "ここには、誰もいないようだ。",
        reading: "ここには、だれもいないようだ。",
        english: "Looks like no one is here.",
        breakdown: "ここには誰もいない (no one is here) + ようだ (appears/looks like). Declarative だ states the appearance."
      },
      {
        japanese: "あの人を見たような気がした。",
        reading: "あのひとをみたようなきがした。",
        english: "Had a feeling like I saw that person before.",
        breakdown: "あの人を見たような (like saw that person) + 気がした (had a feeling). よう used as na-adjective to modify 気."
      },
      {
        japanese: "彼は学生のような雰囲気ですね。",
        reading: "かれはがくせいのようなふんいきですね。",
        english: "He has a student-like atmosphere.",
        breakdown: "学生のような (student-like) + 雰囲気 (atmosphere). Noun 学生 needs の before よう."
      },
      {
        japanese: "何も起こらなかったように言った。",
        reading: "なにもおこらなかったようにいった。",
        english: "Said (it) like nothing happened.",
        breakdown: "何も起こらなかった (nothing happened) + ように (like/as) + 言った (said). Target particle に with よう."
      }
    ],
    notes: "Formation patterns:\n\n**With verbs and i-adjectives:**\nDirect attachment + ようだ\n- 雨が降るようだ (looks like it will rain)\n- 美味しいようだ (appears to be delicious)\n- 映画を観たようだ (looks like [they] watched the movie)\n\n**With nouns:**\nUse の particle\n- 学生のようだ (appears to be a student)\n- 先生のような人 (person like a teacher)\n\n**With na-adjectives:**\nUse な\n- 静かなようだ (appears to be quiet)\n- きれいなような感じ (a feeling like it's pretty)\n\n**Ending requirement:**\nSentence must end with だ/です/でございます\n- ようだ (plain)\n- ようです (polite)\n- ようでございます (very polite)\n\n**As na-adjective modifier:**\nUse ような before nouns\n- 夢のような話 (dream-like story)\n- 子供のような大人 (adult like a child)\n\n**With target particle に:**\nように = like, as, in the way that\n- 見えるように書く (write so it's visible)\n- 言ったように (as [I] said)\n- できるようになる (become able to do)\n\nImportant distinction:\nDon't say おいしいようだ to mean 'looks tasty'\n- This means 'apparently is tasty' (based on info)\n- Sounds like doubting or being rude\n- Use おいしそう instead for 'looks tasty'\n\nCommon patterns:\n- 〜ような気がする (have a feeling like...)\n- 〜ような感じ (a feeling/sense like...)\n- 〜ように見える (looks like/appears as if...)\n- 〜ように聞こえる (sounds like...)\n- 〜ようになる (come to be like/become able to)\n\nNuance:\n- More formal than みたい\n- Used in writing and formal speech\n- States appearance/manner objectively\n- Can express similarity or seeming",
    relatedGrammar: ["tk-special-014", "tk-special-015", "tk-special-016"],
    tags: ["よう", "similarity", "appearance", "seems-like", "manner"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/similarity" }]
  },

  {
    grammarId: "tk-special-014",
    title: "Casual similarity with みたい (looks like)",
    titleJapanese: "類似「みたい」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.7",
    taeKimOrder: 77,
    explanation: "みたい is a casual way to express similarity, meaning 'looks like' or 'seems like'. It can attach directly to nouns, adjectives, and verbs like a particle. Conjugates like a na-adjective, NOT like i-adjectives. More casual than よう - mainly for conversation, not formal writing. Implies something only looks like it, not actually is.",
    structure: "Attach みたい directly (no particles needed)\nConjugates like na-adjective\nCasual alternative to よう",
    examples: [
      {
        japanese: "もう売り切れみたい。",
        reading: "もううりきれみたい。",
        english: "Looks like it's sold out already.",
        breakdown: "もう売り切れ (already sold out) + みたい (looks like). Direct attachment shows casual observation."
      },
      {
        japanese: "制服を着ている姿をみると、学生みたいです。",
        reading: "せいふくをきているすがたをみると、がくせいみたいです。",
        english: "Looking at the uniform-wearing figure, (person) looks like a student.",
        breakdown: "制服を着ている姿 (uniform-wearing figure) + 学生みたい (looks like student). Implies might not actually be a student."
      },
      {
        japanese: "このピザはお好み焼きみたいじゃない？",
        reading: "このピザはおこのみやきみたいじゃない？",
        english: "Doesn't this pizza look like okonomiyaki?",
        breakdown: "このピザは (this pizza) + お好み焼きみたい (looks like okonomiyaki) + じゃない (doesn't it?). みたい conjugates as na-adj, not i-adj."
      }
    ],
    notes: "Key characteristics:\n\n**Direct attachment (like particle):**\nNo need for の or な\n- 犬みたい (looks like a dog)\n- 学生みたい (looks like a student)\n- 売り切れみたい (looks like sold out)\n\n**Conjugates like NA-ADJECTIVE:**\nNOT like i-adjective!\n- Positive: みたい\n- Negative: みたいじゃない (NOT みたくない)\n- Past: みたいだった\n- Past negative: みたいじゃなかった\n\nCommon mistake:\n- このピザはお好み焼きみたくない ✗ WRONG\n- このピザはお好み焼きみたいじゃない ✓ CORRECT\n\n**Formality:**\n- Conversational Japanese\n- Don't use in essays, articles, reports\n- Use よう for formal situations\n\n**Nuance difference from よう:**\nみたい implies 'only looks like it'\n- 学生みたい = looks like student (but isn't)\n- 学生のようだ = appears to be student (might be)\n\nDon't use for taste/cuteness:\n- おいしいみたい ✗ (sounds doubtful)\n- かわいいみたい ✗ (insulting)\n- Use そう instead: おいしそう, かわいそう\n\nWait - かわいそう means 'pitiful/poor thing'!\n- かわいい = cute (already describes appearance)\n- Never needs みたい or そう\n- Just say かわいい directly\n\n**Formal equivalent with よう:**\n- もう売り切れみたい → もう売り切れのようだ\n- 学生みたい → 学生のようだ  \n- このピザはお好み焼きみたい → このピザはお好み焼きのように見える\n\nCommon patterns:\n- 〜みたいだ (looks like...)\n- 〜みたいな + noun (noun that looks like...)\n- 〜みたいに + verb (do like...)\n- 〜みたい？ (looks like...?)\n\nWith verbs:\nDirect attachment\n- 知ってるみたい (looks like [they] know)\n- 来るみたい (looks like [they'll] come)\n- 雨が降るみたい (looks like it'll rain)",
    relatedGrammar: ["tk-special-013", "tk-special-015"],
    tags: ["みたい", "casual", "similarity", "looks-like", "appearance"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/similarity" }]
  },

  {
    grammarId: "tk-special-015",
    title: "Appearance-based guessing with そう (looks)",
    titleJapanese: "様子「そう」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.7",
    taeKimOrder: 78,
    explanation: "そう attached to verbs/adjectives expresses how something looks based on appearance, indicating a likely outcome. For verbs use stem, for i-adjectives remove い (except いい becomes よさそう), for negatives change い to さ. Does NOT work with plain nouns. Different from そうだ (hearsay).",
    structure: "Verb stem + そう\nI-adj (remove い) + そう\nNegative (ない→なさ) + そう\nException: いい → よさそう",
    examples: [
      {
        japanese: "この漬物はおいしそう！",
        reading: "このつけものはおいしそう！",
        english: "I bet this pickled vegetable is tasty! (This pickled vegetable looks good!)",
        breakdown: "この漬物は (this pickled vegetable) + おいしそう (looks delicious). おいしい → おいしそう (remove い)."
      },
      {
        japanese: "バランスが崩れて、一瞬倒れそうだった。",
        reading: "バランスがくずれて、いっしゅんたおれそうだった。",
        english: "Losing my balance, I seemed likely to fall for a moment.",
        breakdown: "バランスが崩れて (balance collapsed) + 倒れそうだった (looked like would fall). 倒れる → 倒れ (stem) + そう."
      },
      {
        japanese: "もう10時になったから、来なさそうだね。",
        reading: "もうじゅうじになったから、こなさそうだね。",
        english: "Since it already became 10:00, it's likely that (person) won't come.",
        breakdown: "10時になった (became 10 o'clock) + 来なさそう (unlikely to come). 来ない → 来なさそう (negative: ない→なさ)."
      },
      {
        japanese: "これも結構よさそうだけど、やっぱり高いよね。",
        reading: "これもけっこうよさそうだけど、やっぱりたかいよね。",
        english: "This one also seems to be good but, as expected, it's expensive, huh?",
        breakdown: "結構よさそう (seems quite good) + 高い (expensive). いい is exception: いい → よさそう (NOT いいそう)."
      }
    ],
    notes: "Formation rules (same as すぎる):\n\n**1. Verbs: Change to stem**\n- 降る → 降りそう (looks like it'll rain)\n- 倒れる → 倒れそう (looks like will fall)\n- 来る → 来そう (looks like will come)\n- する → しそう (looks like will do)\n\n**2. I-adjectives: Remove い**\n- おいしい → おいしそう (looks delicious)\n- 高い → 高そう (looks expensive)\n- 面白い → 面白そう (looks interesting)\n\n**3. Exception: いい → よさそう**\nONLY exception to rule 2!\n- いい → よさそう (looks good)\n- NOT いそう ✗\n\n**4. Na-adjectives: Direct attachment**\n- 好き → 好きそう (looks like [they] like it)\n- 元気 → 元気そう (looks energetic)\n\n**5. Negatives: ない → なさ + そう**\n- 来ない → 来なさそう (doesn't look like will come)\n- じゃない → じゃなさそう (doesn't look like it is)\n- おいしくない → おいしくなさそう (doesn't look delicious)\n\n**Special negative adjectives:**\nAdjectives with 無い (ない) kanji:\n- もったいない → もったいなさそう (looks wasteful)\n- 情けない → 情けなさそう (looks pitiable)\n\nRegular ない i-adjectives:\n- 危ない → 危なそう (looks dangerous)\n- 少ない → 少なそう (looks like few)\n\n**Does NOT work with plain nouns:**\n- その人は学生そう ✗ WRONG\n- Use でしょう/だろう instead\n\n**Critical distinction:**\nそう = based on APPEARANCE (what you see)\nそうだ = based on HEARSAY (what you heard)\n\n- 雨が降りそう (looks like it'll rain - I see dark clouds)\n- 雨が降るそうだ (I hear it'll rain - someone told me)\n\n**WARNING about かわいい:**\nかわいそう ≠ looks cute!\nかわいそう = poor thing/pitiful (different word)\n- この犬はかわいそう (This poor dog)\n- この犬はかわいい (This dog is cute)\n\nFor 'looks cute', just use かわいい\n- かわいい already means 'looks cute'\n- Never use かわいいそう ✗\n\nCommon usage:\n- 〜そうだ (looks like...)\n- 〜そうな + noun (noun that looks...)\n- 〜そうに + verb (do in a way that looks...)",
    relatedGrammar: ["tk-special-016", "tk-special-012"],
    tags: ["そう", "appearance", "looks-like", "prediction", "likelihood"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/similarity" }]
  },

  {
    grammarId: "tk-special-016",
    title: "Hearsay with そうだ (I heard that)",
    titleJapanese: "伝聞「そうだ」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.7",
    taeKimOrder: 79,
    explanation: "そうだ expresses hearsay - things you heard from others. Simply attach そうだ to complete sentences. For nouns and na-adjectives, must add だ before そうだ. Always ends in だ/です/でございます. Has no tense. Different from appearance そう - this is about information heard, not what you observe.",
    structure: "Sentence + そうだ/そうです\nNoun/na-adj + だ + そうだ\nNo tense variations",
    examples: [
      {
        japanese: "明日、雨が降るそうだ。",
        reading: "あした、あめがふるそうだ。",
        english: "I hear that it's going to rain tomorrow.",
        breakdown: "明日雨が降る (tomorrow rain will fall) + そうだ (I heard). Reporting what someone said about weather."
      },
      {
        japanese: "毎日会いに行ったそうです。",
        reading: "まいにちあいにいったそうです。",
        english: "I heard he went to meet everyday.",
        breakdown: "毎日会いに行った (went to meet everyday-past) + そうです (I heard-polite). Hearsay about past actions."
      },
      {
        japanese: "彼は、高校生だそうです。",
        reading: "かれは、こうこうせいだそうです。",
        english: "I hear that he is a high school student.",
        breakdown: "彼は高校生だ (he is high school student) + そうです (I heard). Must include だ for nouns before そう."
      },
      {
        japanese: "だそうです。",
        reading: "だそうです。",
        english: "So I hear.",
        breakdown: "Short response confirming hearsay. だ + そうです. Used when starting sentence with this grammar."
      }
    ],
    notes: "Key formation:\n\n**With verbs and i-adjectives:**\nDirect attachment\n- 行くそうだ (I hear [they'll] go)\n- 美味しいそうだ (I hear it's delicious)\n- 見たそうだ (I hear [they] saw it)\n\n**With nouns and na-adjectives:**\nMUST add だ first\n- 学生だそうだ (I hear [they're] a student)\n- 元気だそうだ (I hear [they're] energetic)\n- 雨だそうだ (I hear it's rain)\n\n**Sentence ending requirement:**\nAlways ends with だ/です/でございます\n- そうだ (plain)\n- そうです (polite)\n- そうでございます (very formal)\n\nNo tense conjugation!\n- Always そうだ regardless of tense\n- The verb/adjective before そう shows tense\n- 行ったそうだ (I hear [they] went - past)\n- 行くそうだ (I hear [they'll] go - future)\n\n**Starting sentences:**\nWhen beginning with this grammar, add だ\n- A: 田中さんは来ないの？\n- B: だそうです。(So I hear.)\n\nJust like だから needs だ at sentence start\n\n**Polite questions:**\nReplace ですか with でしょうか\n- そうですか → そうでしょうか (more polite)\n\n**Critical distinction from appearance そう:**\n\n**Appearance そう (what you SEE):**\n- 雨が降りそう (looks like it'll rain - dark clouds)\n- おいしそう (looks delicious - visual)\n- Formation: stem/remove い\n\n**Hearsay そうだ (what you HEARD):**\n- 雨が降るそうだ (I hear it'll rain - forecast said)\n- おいしいそうだ (I hear it's delicious - someone told me)\n- Formation: complete sentence + そうだ\n\nNever confuse these two!\n\nCommon patterns:\n- 〜そうだ (I hear that...)\n- 〜そうです (I've heard that...)\n- によると〜そうだ (according to X, I hear...)\n\nUsage contexts:\n- Reporting news\n- Sharing information heard\n- Weather forecasts\n- Rumors and gossip\n- Second-hand information\n\nNot about your own observation or opinion!",
    relatedGrammar: ["tk-special-015", "tk-special-017", "tk-essential-045", "tk-essential-046"],
    tags: ["そうだ", "hearsay", "reported-speech", "I-heard", "information"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/similarity" }]
  },

  {
    grammarId: "tk-special-017",
    title: "Hearsay or behavior with らしい (apparently/like)",
    titleJapanese: "推定「らしい」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.7",
    taeKimOrder: 80,
    explanation: "らしい has two uses: 1) Expresses hearsay based on what you've heard (seems like based on information), different from そうだ which reports specific info. 2) Indicates someone behaves in a way typical of their role. Conjugates like i-adjective. More interpretive than そうだ.",
    structure: "Direct attachment to nouns/adjectives/verbs\nらしい/らしくない/らしかった\nConjugates like i-adjective",
    examples: [
      {
        japanese: "こないらしい。",
        reading: "こないらしい。",
        english: "Seems like it (based on what I heard).",
        breakdown: "こない (won't come) + らしい (seems/appears based on info). Shows inference from things heard."
      },
      {
        japanese: "美由紀さんの友達らしいですよ。",
        reading: "みゆきさんのともだちらしいですよ。",
        english: "Seems to be Miyuki-san's friend (based on what I heard).",
        breakdown: "美由紀さんの友達 (Miyuki's friend) + らしい (seems to be based on info) + ですよ. Direct attachment to noun."
      },
      {
        japanese: "あの子は子供らしくない。",
        reading: "あのこはこどもらしくない。",
        english: "That child does not act like a child.",
        breakdown: "あの子は (that child) + 子供らしくない (doesn't act child-like). Shows behavior doesn't match role."
      },
      {
        japanese: "大人らしくするつもりだったのに、大騒ぎしてしまった。",
        reading: "おとならしくするつもりだったのに、おおさわぎしてしまった。",
        english: "Despite the fact that I planned to act like an adult, I ended up making a big ruckus.",
        breakdown: "大人らしくする (act adult-like) + つもりだった (intended to) + のに (despite) + 大騒ぎしてしまった (ended up making commotion)."
      }
    ],
    notes: "Two distinct meanings:\n\n**1. HEARSAY/INFERENCE (based on info heard):**\nSeems to be true based on things you've heard\n- 来るらしい (seems like [they'll] come)\n- 雨らしい (seems to be rain)\n- 彼は学生らしい (seems he's a student)\n\nDifference from そうだ:\n- そうだ: heard specifically (someone told you directly)\n- らしい: seems based on various info (inference from rumors, hints)\n\n**2. BEHAVIOR/TYPICAL (acting like one's role):**\nBehaving in a way typical or expected\n- 子供らしい (child-like, acts like a child)\n- 男らしい (manly, acts like a man)\n- 学生らしい (student-like)\n- 日本人らしい (typical Japanese person)\n\nConjugation (like i-adjective):\n- Present: らしい\n- Negative: らしくない\n- Past: らしかった\n- Past negative: らしくなかった\n- Te-form: らしくて\n- Adverb: らしく\n\n**Direct attachment:**\nNo particles needed\n- Verbs: 降るらしい (seems it'll rain)\n- I-adj: 寒いらしい (seems cold)\n- Na-adj: 元気らしい (seems energetic)\n- Nouns: 学生らしい (seems to be student)\n\nCommon behavioral patterns:\n**Acting appropriately for role:**\n- 子供らしくする (act like a child should)\n- 大人らしくない (not acting like an adult)\n- 先生らしい人 (person who acts teacher-like)\n- 女らしい/男らしい (womanly/manly)\n\n**Not acting according to role:**\n- 子供らしくない (doesn't act like a child)\n- 学生らしくない格好 (outfit not appropriate for student)\n\nNuance differences:\n\n**Information source:**\n- らしい: vague, multiple sources, inference\n- そうだ: specific information, heard directly\n- みたい: casual observation, looks like\n\n**Certainty level:**\nLeast certain → Most certain\nかもしれない < らしい < そうだ < でしょう\n\nCommon patterns:\n- 〜らしい (seems...)\n- 〜らしくない (doesn't seem.../not typical)\n- 〜らしい + noun (typical/seeming noun)\n- 〜らしく + verb (do in typical manner)",
    relatedGrammar: ["tk-special-016", "tk-special-014", "tk-special-018"],
    tags: ["らしい", "hearsay", "behavior", "typical", "seems-like"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/similarity" }]
  },

  {
    grammarId: "tk-special-018",
    title: "Casual similarity with っぽい (seems/has tendency)",
    titleJapanese: "傾向「っぽい」",
    jlptLevel: "N2",
    category: "Special Expressions",
    taeKimSection: "5.7",
    taeKimOrder: 81,
    explanation: "っぽい is a very casual slang expression for similarity or tendency. Can be used as casual version of all similarity expressions covered. Attaches directly to words. Conjugates like i-adjective. Common in casual conversation but avoid in formal contexts.",
    structure: "Word + っぽい\nConjugates like i-adjective\nVery casual/slang",
    examples: [
      {
        japanese: "あの人はちょっと韓国人っぽいよね。",
        reading: "あのひとはちょっとかんこくじんっぽいよね。",
        english: "That person looks a little like Korean person, huh?",
        breakdown: "あの人は (that person) + ちょっと (a little) + 韓国人っぽい (seems Korean) + よね (huh). Casual observation of similarity."
      },
      {
        japanese: "みんなで、もう全部食べてしまったっぽいよ。",
        reading: "みんなで、もうぜんぶたべてしまったっぽいよ。",
        english: "It appears that everybody ate everything already.",
        breakdown: "みんなで全部食べてしまった (everybody ate everything) + っぽい (appears/seems). Casual inference about situation."
      },
      {
        japanese: "恭子は全然女っぽくないね。",
        reading: "きょうこはぜんぜんおんなっぽくないね。",
        english: "Kyouko is not womanly at all, huh?",
        breakdown: "恭子は (Kyouko) + 全然 (not at all) + 女っぽくない (not woman-like). っぽい conjugates like i-adjective: っぽくない."
      }
    ],
    notes: "Characteristics:\n\n**Very casual/slang:**\n- Conversational only\n- Don't use in formal writing\n- Common among friends\n- Can replace other similarity expressions casually\n\n**Direct attachment:**\nNo particles needed\n- 子供っぽい (childish)\n- 男っぽい (mannish)\n- 水っぽい (watery)\n- 嘘っぽい (seems like a lie)\n\n**Conjugates like i-adjective:**\n- Present: っぽい\n- Negative: っぽくない\n- Past: っぽかった\n- Te-form: っぽくて\n- Adverb: っぽく\n\nCommon uses:\n\n**1. Physical similarity:**\n- 韓国人っぽい (looks Korean)\n- 本物っぽい (looks authentic)\n\n**2. Tendency/characteristic:**\n- 忘れっぽい (forgetful, tends to forget)\n- 怒りっぽい (quick to anger)\n- 飽きっぽい (gets bored easily)\n\n**3. Behavior pattern:**\n- 子供っぽい (childish)\n- 大人っぽい (mature, adult-like)\n- 女っぽい/男っぽい (feminine/masculine)\n\n**4. Appearance/quality:**\n- 水っぽい (watery, diluted)\n- 粉っぽい (powdery)\n- 安っぽい (cheap-looking)\n\n**Can replace other forms casually:**\n- よう → っぽい\n- みたい → っぽい\n- らしい → っぽい\n- そう → っぽい\n\nExamples:\n- 雨が降るっぽい (looks like it'll rain - casual)\n- 学生っぽい (looks like a student)\n- 嘘っぽい話 (story that seems like a lie)\n\nNegative nuance often:\nOften implies criticism\n- 子供っぽい (childish - negative)\n- 安っぽい (cheap-looking)\n- 嘘っぽい (seems fake)\n\nBut can be neutral:\n- 大人っぽい (mature - can be compliment)\n- 春っぽい (spring-like)\n\nCommon fixed expressions:\n- 忘れっぽい (forgetful)\n- 飽きっぽい (fickle)\n- 怒りっぽい (short-tempered)\n- 熱っぽい (feverish)\n\nUsage tip:\nGood for casual conversation but learn the formal equivalents (よう/みたい/らしい) for proper contexts.",
    relatedGrammar: ["tk-special-014", "tk-special-017"],
    tags: ["っぽい", "casual", "slang", "similarity", "tendency"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/similarity" }]
  },

  // Chapter 5.8: Comparisons
  {
    grammarId: "tk-special-019",
    title: "Comparisons with 方 (more/better than)",
    titleJapanese: "比較「方」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.8",
    taeKimOrder: 82,
    explanation: "方 (ほう) means direction/side and is used for comparisons by saying one way is better/worse than another. Works like a regular noun with の particle. For non-negative verbs, can use past tense for more certainty in suggestions. Often used with より to show 'rather than'.",
    structure: "Noun + の方\nVerb/adj + 方\nOften with より for comparison",
    examples: [
      {
        japanese: "ご飯の方がおいしい。",
        reading: "ごはんのほうがおいしい。",
        english: "Rice is tastier.",
        breakdown: "ご飯の方 (the way/side of rice) + がおいしい (is delicious). Comparing rice to something else (like bread)."
      },
      {
        japanese: "ゆっくり食べた方が健康にいいよ。",
        reading: "ゆっくりたべたほうがけんこうにいいよ。",
        english: "It's better for your health to eat slowly.",
        breakdown: "ゆっくり食べた方 (the way of eating slowly-past for emphasis) + が健康にいい (is good for health). Past tense shows confident suggestion."
      },
      {
        japanese: "学生じゃない方がいいよ。",
        reading: "がくせいじゃないほうがいいよ。",
        english: "It's better to not be a student.",
        breakdown: "学生じゃない方 (the way of not being student) + がいい (is good). Works with negative statements too."
      },
      {
        japanese: "怖い映画は観ない方がいいよ。",
        reading: "こわいえいがはみないほうがいいよ。",
        english: "It's better not to watch scary movie(s).",
        breakdown: "怖い映画は観ない方 (the way of not watching scary movies) + がいい (is good). Negative verbs stay present tense, not past."
      }
    ],
    notes: "Basic formation:\n\n**With nouns (use の):**\n- ご飯の方 (rice side/way)\n- パンの方 (bread side/way)\n- こっちの方 (this way)\n- 鈴木さんの方 (Suzuki's side)\n\n**With verbs and adjectives:**\nDirect attachment\n- 行く方 (the way of going)\n- 食べる方 (the way of eating)\n- 大きい方 (the bigger side)\n- 静かな方 (the quieter side)\n\n**Past tense for certainty:**\nNon-negative verbs can use past for confident suggestions\n- 食べた方がいい (it's better to eat - confident)\n- 行った方がいい (it's better to go - strong advice)\n\nBUT negative stays present:\n- 食べない方がいい (better not to eat)\n- NOT 食べなかった方がいい ✗\n\nUnless comparing past events:\n- そんなに飲まなかった方がよかった (would have been better not to drink that much)\n\nCommon patterns:\n\n**〜方がいい (it's better to...):**\nGiving advice/suggestions\n- 早く寝た方がいい (better to sleep early)\n- 医者に行った方がいい (better to go to doctor)\n- やめた方がいい (better to quit)\n\n**〜方が + adjective:**\nComparing qualities\n- ご飯の方がおいしい (rice is tastier)\n- こっちの方が安い (this one is cheaper)\n- そっちの方が大きい (that one is bigger)\n\n**With negatives:**\n- 食べない方がいい (better not to eat)\n- 行かない方がいい (better not to go)\n\n**Standalone 方:**\nCan be used alone when clear from context\n- どっちがいい？ こっちの方。(Which is better? This one.)\n- パンとご飯、どっち？ ご飯の方。(Bread or rice? Rice.)\n\nOften combined with より:\n- パンより ご飯の方がおいしい (Rice is tastier than bread)\n- 見るより やる方が難しい (Doing is harder than watching)\n\n方 can mean 'person' (かた):\n- あの方 (that person - polite)\n- どなた (which person - polite who)\nBut in comparisons always ほう!",
    relatedGrammar: ["tk-special-020", "tk-special-021"],
    tags: ["方", "comparison", "better", "advice", "suggestion"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/comparison" }]
  },

  {
    grammarId: "tk-special-020",
    title: "Comparisons with より (rather than/as opposed to)",
    titleJapanese: "比較「より」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.8",
    taeKimOrder: 83,
    explanation: "より means 'rather than' or 'as opposed to' and is the opposite of 方. Attaches directly to any word. Usually used with 方 to make complete comparisons. Can also use with question words (誰/何/どこ) to make superlatives (more than anyone/anything). The word with より doesn't need tense agreement.",
    structure: "Word + より\nOften: X + より + Y + の方が...\nSuperlative: Question word + より + も",
    examples: [
      {
        japanese: "ご飯の方が、パンよりおいしい。",
        reading: "ごはんのほうが、パンよりおいしい。",
        english: "Rice tastes better than bread.",
        breakdown: "ご飯の方が (rice side) + パンより (rather than bread) + おいしい (delicious). Complete comparison with both 方 and より."
      },
      {
        japanese: "仕事がないよりましだよ。",
        reading: "しごとがないよりましだよ。",
        english: "It's not as bad as opposed to not having a job.",
        breakdown: "仕事がないより (rather than having no job) + ましだ (is better). より can be used without 方 when context is clear."
      },
      {
        japanese: "ゆっくり食べた方が早く食べるよりいい。",
        reading: "ゆっくりたべたほうがはやくたべるよりいい。",
        english: "It is better to eat slowly as opposed to eating quickly.",
        breakdown: "ゆっくり食べた方 (eating slowly-past) + 早く食べるより (rather than eating quickly-present). より doesn't need tense match."
      },
      {
        japanese: "この仕事は誰よりも早くできます。",
        reading: "このしごとはだれよりもはやくできます。",
        english: "Can do this job more quickly than anyone else.",
        breakdown: "誰よりも (than anyone else-superlative) + 早くできます (can do quickly). Question word + より + も creates superlative."
      }
    ],
    notes: "Basic usage:\n\n**Direct attachment:**\nNo particles needed\n- パンより (than bread)\n- それより (than that)\n- 前より (than before)\n- 昨日より (than yesterday)\n\n**With 方 for complete comparison:**\nStandard pattern: X + より + Y + の方が + [comparison]\n- パンより ご飯の方がおいしい (Rice is tastier than bread)\n- 見るより やる方が難しい (Doing is harder than watching)\n- 冬より 夏の方が好き (I like summer more than winter)\n\n**Without 方 (context clear):**\n- 花より団子 (Dango rather than flowers - famous saying)\n- 死ぬより苦しい (More painful than dying)\n- 何もないよりまし (Better than having nothing)\n\n**No tense requirement:**\nより doesn't need tense agreement\n- 食べた方が 食べるより いい ✓\n- 食べた方が 食べたより いい ✓\nBoth acceptable, but present more common\n\n**Superlative with question words:**\nQuestion word + より + (も)\n\n**誰より (than anyone):**\n- 誰よりも速い (faster than anyone)\n- 誰より強い (stronger than anyone)\n\n**何より (than anything):**\n- 何より大切 (more important than anything)\n- 何よりも嬉しい (happier than anything)\n\n**どこより (than anywhere):**\n- どこよりも安い (cheaper than anywhere)\n- どこより美しい (more beautiful than anywhere)\n\nThe も after より is optional but adds emphasis\n\nCommon expressions:\n\n**花より団子:**\nFamous proverb\n- Literal: Dango rather than flowers\n- Meaning: Prefer practical things over aesthetic\n- From 花見 (cherry blossom viewing) where people prefer eating dango to viewing flowers\n\n**〜よりまし:**\nBetter than [unfortunate situation]\n- 死ぬよりまし (better than dying)\n- 何もないよりまし (better than nothing)\n- 一人よりまし (better than being alone)\n\n**〜よりいい/〜よりも:**\nStraightforward comparisons\n- これよりいい (better than this)\n- 前よりも良くなった (became better than before)\n\nParticle interactions:\nより usually stands alone but can combine\n- Xよりも (than X - emphasis)\n- Xよりは (than X at least)\n\nPosition:\nTypically comes after the thing being compared\n- パンより ご飯 (rice over bread)\n- Literally: 'compared to bread, rice'",
    relatedGrammar: ["tk-special-019", "tk-special-021"],
    tags: ["より", "comparison", "rather-than", "superlative", "more-than"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/comparison" }]
  },

  // Chapter 5.9: Easy/Difficult Actions
  {
    grammarId: "tk-special-021",
    title: "Easy actions with やすい (easy to do)",
    titleJapanese: "容易動作「やすい」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.9",
    taeKimOrder: 84,
    explanation: "やすい attached to verb stems makes i-adjectives meaning 'easy to do [action]'. Transform verb to stem and add やすい. The result conjugates as a regular i-adjective. Describes physical or abstract actions that are simple or convenient to perform.",
    structure: "Verb stem + やすい\nConjugates like i-adjective",
    examples: [
      {
        japanese: "カクテルはビールより飲みやすい。",
        reading: "カクテルはビールよりのみやすい。",
        english: "Cocktails are easier to drink than beer.",
        breakdown: "カクテルは (cocktails) + ビールより (than beer) + 飲みやすい (easy to drink). 飲む → 飲み (stem) + やすい."
      },
      {
        japanese: "この字は読みやすい。",
        reading: "このじはよみやすい。",
        english: "This handwriting is easy to read.",
        breakdown: "この字は (this handwriting) + 読みやすい (easy to read). 読む → 読み (stem) + やすい. Regular i-adjective."
      }
    ],
    notes: "Formation:\n**Verb stem + やすい**\n\nRu-verbs (remove る):\n- 食べる → 食べやすい (easy to eat)\n- 見る → 見やすい (easy to see)\n- 着る → 着やすい (easy to wear)\n\nU-verbs (change to i-stem):\n- 飲む → 飲みやすい (easy to drink)\n- 読む → 読みやすい (easy to read)\n- 書く → 書きやすい (easy to write)\n- 話す → 話しやすい (easy to talk to)\n\nConjugation (i-adjective):\n- Present: やすい\n- Negative: やすくない\n- Past: やすかった\n- Past negative: やすくなかった\n- Te-form: やすくて\n- Adverb: やすく\n\nCommon expressions:\n- 使いやすい (easy to use)\n- わかりやすい (easy to understand)\n- 書きやすい (easy to write)\n- 読みやすい (easy to read)\n- 食べやすい (easy to eat)\n- 着やすい (easy to wear)\n- 持ちやすい (easy to hold)\n- 覚えやすい (easy to remember)\n\nAlternative expressions:\nCan also express same meaning with:\n- その肉を食べるのは簡単だ (Eating that meat is simple)\n- この字を読むのは易しい (Reading this handwriting is easy)\n\nBut やすい is more natural and common for describing actions.",
    relatedGrammar: ["tk-special-022", "tk-special-023"],
    tags: ["やすい", "easy", "convenient", "simple-actions"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/easyhardtoactions" }]
  },

  {
    grammarId: "tk-special-022",
    title: "Difficult actions with にくい (hard to do)",
    titleJapanese: "困難動作「にくい」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.9",
    taeKimOrder: 85,
    explanation: "にくい attached to verb stems makes i-adjectives meaning 'hard to do [action]'. Transform verb to stem and add にくい. The result conjugates as a regular i-adjective. Describes physical or abstract actions that are difficult or inconvenient. Can also be written 難い. Note: 見にくい sounds like 醜い (ugly).",
    structure: "Verb stem + にくい\nConjugates like i-adjective",
    examples: [
      {
        japanese: "この字は読みにくい。",
        reading: "このじはよみにくい。",
        english: "This handwriting is hard to read.",
        breakdown: "この字は (this handwriting) + 読みにくい (hard to read). 読む → 読み (stem) + にくい."
      },
      {
        japanese: "部屋が暗かったので、見にくかった。",
        reading: "へやがくらかったので、みにくかった。",
        english: "Since the room was dark, it was hard to see.",
        breakdown: "部屋が暗かった (room was dark) + ので (because) + 見にくかった (was hard to see-past). Shows conjugation as i-adjective."
      },
      {
        japanese: "その肉は食べにくい。",
        reading: "そのにくはたべにくい。",
        english: "That meat is hard to eat.",
        breakdown: "その肉は (that meat) + 食べにくい (hard to eat). 食べる → 食べ (stem) + にくい."
      }
    ],
    notes: "Formation:\n**Verb stem + にくい**\n\nRu-verbs (remove る):\n- 食べる → 食べにくい (hard to eat)\n- 見る → 見にくい (hard to see)\n- 覚える → 覚えにくい (hard to remember)\n\nU-verbs (change to i-stem):\n- 飲む → 飲みにくい (hard to drink)\n- 読む → 読みにくい (hard to read)\n- 書く → 書きにくい (hard to write)\n- 話す → 話しにくい (hard to talk about)\n\nConjugation (i-adjective):\n- Present: にくい\n- Negative: にくくない\n- Past: にくかった\n- Past negative: にくくなかった\n- Te-form: にくくて\n- Adverb: にくく\n\nCommon expressions:\n- 使いにくい (hard to use)\n- わかりにくい (hard to understand)\n- 書きにくい (hard to write)\n- 読みにくい (hard to read)\n- 食べにくい (hard to eat)\n- 着にくい (hard to wear)\n- 言いにくい (hard to say)\n- やりにくい (hard to do)\n\nCaution with 見にくい:\n- 見にくい (hard to see) - from 見る\n- 醜い (みにくい - ugly) - different word!\n- Context makes clear which one\n\nAlternative expressions:\n- その肉を食べるのは難しい (Eating that meat is difficult)\n- Same meaning but にくい more natural\n\nEquivalent forms:\n- その肉は食べにくい (That meat is hard to eat)\n- その肉を食べるのは難しい (The thing of eating that meat is difficult)\nBoth essentially identical in meaning.",
    relatedGrammar: ["tk-special-021", "tk-special-023", "tk-special-024"],
    tags: ["にくい", "difficult", "hard", "inconvenient"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/easyhardtoactions" }]
  },

  {
    grammarId: "tk-special-023",
    title: "Formal difficulty with がたい (hard to do)",
    titleJapanese: "困難「がたい」",
    jlptLevel: "N2",
    category: "Special Expressions",
    taeKimSection: "5.9",
    taeKimOrder: 86,
    explanation: "がたい is a formal/written version of にくい, meaning 'hard to do'. The kanji 難い can be read as both にくい and がたい. にくい is common in speech for physical actions; がたい is formal/written for abstract/emotional actions. Both use verb stem. Always write in hiragana to prevent reading ambiguity.",
    structure: "Verb stem + がたい\nMore formal than にくい\nUsually for abstract actions",
    examples: [
      {
        japanese: "彼との忘れがたい思い出を大切にしている。",
        reading: "かれとのわすれがたいおもいでをたいせつにしている。",
        english: "I am treating importantly the hard to forget memories of and with him.",
        breakdown: "彼との (with him) + 忘れがたい (hard to forget-formal) + 思い出を (memories) + 大切にしている (treating importantly). Abstract emotional action."
      },
      {
        japanese: "とても信じがたい話だが、本当に起こったらしい。",
        reading: "とてもしんじがたいはなしだが、ほんとうにおこったらしい。",
        english: "It's a very difficult to believe story but it seems (from hearsay) that it really happened.",
        breakdown: "とても信じがたい話 (very hard-to-believe story) + だが (but) + 本当に起こったらしい (seems really happened). Formal writing style."
      }
    ],
    notes: "Key characteristics:\n\n**Formality:**\n- にくい: Common in speech, physical actions\n- がたい: Formal/written, abstract/emotional actions\n\n**Usage guidelines:**\nにくい for physical:\n- 食べにくい (hard to eat)\n- 読みにくい (hard to read)\n- 使いにくい (hard to use)\n\nがたい for abstract:\n- 忘れがたい (hard to forget - emotional)\n- 信じがたい (hard to believe - mental)\n- 理解しがたい (hard to understand - abstract)\n- 許しがたい (hard to forgive - emotional)\n- 受け入れがたい (hard to accept - mental)\n\n**No hard rule:**\nNo absolute rule on which to use\n- Check both versions on Google\n- See which is more popular\n- Context determines appropriateness\n\n**Writing recommendation:**\nAlways write がたい in hiragana\n- Prevents reading ambiguity\n- 難い could be read multiple ways\n- がたい makes reading clear\n\nSame applies to にくい\n- Write in hiragana: にくい\n- Not kanji: 難い (ambiguous reading)\n\nCommon がたい expressions:\n- 忘れがたい (unforgettable)\n- 信じがたい (unbelievable)\n- 許しがたい (unforgivable)\n- 動かしがたい (immovable - facts)\n- 測りがたい (immeasurable)\n\nFormation same as にくい:\n- Verb stem + がたい\n- 忘れる → 忘れがたい\n- 信じる → 信じがたい\n- 許す → 許しがたい\n\nConjugation (i-adjective):\n- がたい, がたくない, がたかった, がたくなかった",
    relatedGrammar: ["tk-special-022", "tk-special-024"],
    tags: ["がたい", "formal", "difficult", "abstract-actions"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/easyhardtoactions" }]
  },

  {
    grammarId: "tk-special-024",
    title: "Casual difficulty with づらい (hard to do)",
    titleJapanese: "困難「づらい」",
    jlptLevel: "N2",
    category: "Special Expressions",
    taeKimSection: "5.9",
    taeKimOrder: 87,
    explanation: "づらい is a casual/coarse variation of にくい meaning 'hard to do'. It's a transformed version of 辛い (つらい - painful/difficult). NOT the same as 辛い (からい - spicy)! More casual and slightly rough. Used in conversation to express difficulty with a colloquial tone.",
    structure: "Verb stem + づらい\nCasual/coarse variation\nFrom 辛い (つらい - painful)",
    examples: [
      {
        japanese: "日本語は読みづらいな。",
        reading: "にほんごはよみづらいな。",
        english: "Man, Japanese is hard to read.",
        breakdown: "日本語は (Japanese language) + 読みづらい (hard to read-casual) + な (masculine particle). Casual complaint with rough tone."
      },
      {
        japanese: "待ち合わせは、分かりづらい場所にしないでね。",
        reading: "まちあわせは、わかりづらいばしょにしないでね。",
        english: "Please don't pick a difficult to understand location for the meeting arrangement.",
        breakdown: "待ち合わせは (meeting arrangement) + 分かりづらい場所 (hard-to-understand location) + にしないで (don't make it). Request using casual form."
      }
    ],
    notes: "Origin and meaning:\n\n**From 辛い (つらい):**\n- 辛い (つらい) = painful, difficult, hard\n- NOT 辛い (からい) = spicy!\n- Different readings, different meanings\n- づらい comes from つらい (painful)\n\n**Formality comparison:**\n- にくい: Standard, neutral\n- がたい: Formal, written\n- づらい: Casual, coarse, rough\n\n**Tone:**\n- More casual than にくい\n- Slightly rough/masculine feel\n- Common in spoken language\n- Often used in complaints\n\nCommon expressions:\n- 読みづらい (hard to read - casual)\n- 分かりづらい (hard to understand)\n- 言いづらい (hard to say)\n- やりづらい (hard to do)\n- 使いづらい (hard to use)\n- 見づらい (hard to see)\n\nFormation:\n- Verb stem + づらい\n- Same as にくい/がたい\n- 読む → 読みづらい\n- 分かる → 分かりづらい\n\nConjugation (i-adjective):\n- Present: づらい\n- Negative: づらくない\n- Past: づらかった\n- Te-form: づらくて\n\nUsage context:\n- Casual conversation\n- Complaints\n- Informal situations\n- With friends/family\n\nAvoid in:\n- Formal writing\n- Business situations\n- Polite conversation\n- Use にくい instead\n\nComparison summary:\n**Physical actions:**\n- にくい (standard)\n- づらい (casual/rough)\n\n**Abstract actions:**\n- がたい (formal)\n- にくい (standard)\n\n**Formality scale:**\nがたい (formal) > にくい (standard) > づらい (casual/rough)",
    relatedGrammar: ["tk-special-022", "tk-special-023"],
    tags: ["づらい", "casual", "difficult", "rough-speech"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/easyhardtoactions" }]
  },

  // Chapter 5.12: Time-specific Actions
  {
    grammarId: "tk-special-025",
    title: "Just finished action with ばかり",
    titleJapanese: "直後「ばかり」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.12",
    taeKimOrder: 88,
    explanation: "ばかり attached to past tense verbs expresses that an action was just completed. Different from the 'nothing but' usage with present tense. Casual forms are ばっかり and ばっか. Emphasizes the recentness of the action - 'just did', 'just now finished'.",
    structure: "Past tense verb + ばかり\nCasual: ばっかり/ばっか",
    examples: [
      {
        japanese: "食べたばかりなのに、もうお腹が空いた。",
        reading: "たべたばかりなのに、もうおなかがすいた。",
        english: "Despite just eating, I'm hungry already.",
        breakdown: "食べたばかり (just ate) + なのに (despite that) + もうお腹が空いた (already hungry). Past tense + ばかり for recent completion."
      },
      {
        japanese: "今起きたばっかりだから、まだ眠い。",
        reading: "いまおきたばっかりだから、まだねむい。",
        english: "Since I just woke up, I'm still sleepy.",
        breakdown: "今起きたばっかり (just now woke up-casual) + だから (because) + まだ眠い (still sleepy). ばっかり = casual form."
      }
    ],
    notes: "Formation:\n**Past tense verb + ばかり**\n\n- 食べた + ばかり → 食べたばかり (just ate)\n- 来た + ばかり → 来たばかり (just came)\n- 買った + ばかり → 買ったばかり (just bought)\n- した + ばかり → したばかり (just did)\n\nCasual variants:\n- ばかり (standard)\n- ばっかり (casual)\n- ばっか (more casual)\n\nMeaning distinction:\n\n**With past tense (this grammar):**\n- 食べたばかり = just ate (recent completion)\n\n**With present tense (different meaning):**\n- 食べるばかり = nothing but eating (from 5.6)\n\nTime frame:\nIndicates very recent past\n- Usually within minutes to hours\n- Emphasizes how recent it was\n- Often with もう (already), まだ (still)\n\nCommon patterns:\n- 〜たばかりだ (just did)\n- 〜たばかりなのに (despite just doing)\n- 〜たばかりなので (because just did)\n- 〜たばかりで (having just done)\n\nComparison with ところ:\n- 食べたところ = just finished eating (at that exact moment)\n- 食べたばかり = just ate (recently, still fresh)\n- ばかり has slightly longer time frame\n\nCommon expressions:\n- 起きたばかり (just woke up)\n- 買ったばかり (just bought)\n- 始めたばかり (just started)\n- 来たばかり (just came/arrived)\n- 会ったばかり (just met)\n\nNote: Don't confuse with the 'nothing but' ばかり from 5.6 which uses present tense.",
    relatedGrammar: ["tk-special-011", "tk-special-026", "tk-special-006"],
    tags: ["ばかり", "just-finished", "recent-past", "completion"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/timeactions" }]
  },

  {
    grammarId: "tk-special-026",
    title: "Immediate succession with とたん",
    titleJapanese: "直後「とたん」",
    jlptLevel: "N2",
    category: "Special Expressions",
    taeKimSection: "5.12",
    taeKimOrder: 89,
    explanation: "とたん (途端) expresses that something happened immediately after another action. Attach to past tense verb. Often use とたんに with に particle. CRITICAL: Can ONLY use for things that happen outside your control, NOT actions you yourself perform intentionally.",
    structure: "Past tense verb + とたん(に)\nOnly for uncontrolled events",
    examples: [
      {
        japanese: "窓を開けたとたんに、猫が跳んでいった。",
        reading: "まどをあけたとたんに、ねこがとんでいった。",
        english: "As soon as I opened the window, the cat jumped out.",
        breakdown: "窓を開けたとたんに (the moment opened window) + 猫が跳んでいった (cat jumped out). Cat jumping is outside your control."
      },
      {
        japanese: "映画を観たとたんに、眠くなりました。",
        reading: "えいがをみたとたんに、ねむくなりました。",
        english: "The instant I watched the movie, I became sleepy.",
        breakdown: "映画を観たとたんに (moment watched movie) + 眠くなりました (became sleepy-polite). Becoming sleepy is involuntary, so correct usage."
      }
    ],
    notes: "Formation:\n**Past tense verb + とたん(に)**\n\n- 開ける → 開けた → 開けたとたん(に)\n- 取る → 取った → 取ったとたん(に)\n- 聞く → 聞いた → 聞いたとたん(に)\n\nKey restriction:\n**ONLY for uncontrolled events!**\n\nCorrect (outside control):\n✓ 開けたとたんに、猫が逃げた (cat escaping - uncontrolled)\n✓ 食べたとたんに、お腹が痛くなった (stomach hurting - involuntary)\n✓ 聞いたとたんに、泣き出した (started crying - emotion)\n✓ 映画を観たとたんに、眠くなった (became sleepy - involuntary)\n\nIncorrect (intentional actions):\n✗ 映画を観たとたんに、トイレに行った (going to bathroom - you chose)\n✗ 食べたとたんに、帰った (going home - intentional)\n✗ 起きたとたんに、シャワーを浴びた (taking shower - your action)\n\nCommon patterns:\n- 〜たとたん(に) + involuntary verb\n- 〜たとたん、... (comma acceptable)\n- Often with なる (become), 〜出す (start doing)\n\nInvoluntary verbs that work:\n- 眠くなる (become sleepy)\n- 泣き出す (start crying)\n- 倒れる (collapse)\n- 壊れる (break - intransitive)\n- 消える (disappear)\n- 驚く (be surprised)\n- 痛くなる (become painful)\n\nWith/without に:\n- とたん and とたんに both acceptable\n- とたんに slightly more common\n- に marks specific point in time\n\nTiming:\nImmediate succession\n- Almost simultaneous\n- No time gap\n- Instant cause and effect\n\nFormal equivalent:\n途端 is the kanji, usually written in hiragana: とたん\n\nSimilar to:\n- 〜や否や (as soon as - literary)\n- 〜なり (as soon as - literary)\n\nNote: Very specific grammar with clear restrictions. Pay attention to whether second action is voluntary or involuntary.",
    relatedGrammar: ["tk-special-025", "tk-special-027"],
    tags: ["とたん", "immediate", "uncontrolled-events", "succession"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/timeactions" }]
  },

  {
    grammarId: "tk-special-027",
    title: "Concurrent actions with ながら",
    titleJapanese: "同時動作「ながら」",
    jlptLevel: "N4",
    category: "Special Expressions",
    taeKimSection: "5.12",
    taeKimOrder: 90,
    explanation: "ながら attached to verb stems expresses one action taking place while another occurs concurrently. The verb with ながら describes a secondary action happening at the same time as the main action. Can also use negative form. Main verb controls tense.",
    structure: "Verb stem + ながら\nNegative: verb negative + ながら\nMain verb determines tense",
    examples: [
      {
        japanese: "テレビを観ながら、宿題をする。",
        reading: "テレビをみながら、しゅくだいをする。",
        english: "Do homework while watching TV.",
        breakdown: "テレビを観ながら (while watching TV) + 宿題をする (do homework). Main action is homework; watching TV is concurrent."
      },
      {
        japanese: "音楽を聴きながら、学校へ歩くのが好き。",
        reading: "おんがくをききながら、がっこうへあるくのがすき。",
        english: "I like to walk to school while listening to music.",
        breakdown: "音楽を聴きながら (while listening to music) + 学校へ歩く (walk to school). Walking is main action."
      },
      {
        japanese: "ポップコーンを食べながら、映画を観た。",
        reading: "ポップコーンをたべながら、えいがをみた。",
        english: "Watched movie while eating popcorn.",
        breakdown: "ポップコーンを食べながら (while eating popcorn) + 映画を観た (watched movie-past). Tense comes from main verb 観た."
      }
    ],
    notes: "Formation:\n**Verb stem + ながら**\n\nRu-verbs:\n- 食べる → 食べ → 食べながら (while eating)\n- 見る → 見 → 見ながら (while watching)\n\nU-verbs:\n- 走る → 走り → 走りながら (while running)\n- 聞く → 聞き → 聞きながら (while listening)\n- 話す → 話し → 話しながら (while talking)\n\nNegative form:\n- 走る → 走らない → 走らないながら (while not running)\n- 言う → 言わない → 言わないながら (while not saying)\n\nKey points:\n\n**Action priority:**\nMain action = final verb\nSecondary action = verb with ながら\n\n- テレビを観ながら宿題をする\n  Main: homework, Secondary: TV\n- 宿題をしながらテレビを観る\n  Main: TV, Secondary: homework\n\n**No tense on ながら:**\nTense controlled by main verb only\n- 食べながら観る (while eating, watch)\n- 食べながら観た (while eating, watched)\n- 食べながら観ている (while eating, watching)\n\n**With state-of-being (advanced):**\nCan attach directly to nouns/adjectives\n- 残念ながら (while it's unfortunate)\n- 貧乏ながらも (even while poor)\nも adds emphasis (even while)\n\nCommon expressions:\n- 歩きながら (while walking)\n- 泣きながら (while crying)\n- 笑いながら (while laughing)\n- 考えながら (while thinking)\n- 残念ながら (unfortunately - fixed expression)\n\nUsage pattern:\nAction A + ながら, Action B\n- A happens concurrently with B\n- B is the main focus\n- A provides context/background\n\nExamples:\n- 走りながら話す (talk while running)\n- 口笛をしながら手紙を書く (write letter while whistling)\n- 相手に何も言わないながら分かってほしい (want understanding without saying anything)\n\nContrast with te-form:\nTe-form: sequential actions\n- 食べて寝る (eat, then sleep)\n\nながら: concurrent actions\n- 食べながら寝る (eat while sleeping - odd but grammatical)\n\nNote: Very common and useful pattern for describing simultaneous actions.",
    relatedGrammar: ["tk-essential-029", "tk-special-028"],
    tags: ["ながら", "concurrent", "while", "simultaneous-actions"],
    difficulty: 2,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/timeactions" }]
  },

  {
    grammarId: "tk-special-028",
    title: "Reckless repetition with まくる",
    titleJapanese: "連続動作「まくる」",
    jlptLevel: "N1",
    category: "Special Expressions",
    taeKimSection: "5.12",
    taeKimOrder: 91,
    explanation: "まくる is a verb suffix meaning to do something repeatedly with reckless abandon, excessively, or continuously. Attach to verb stem plus まくっている for ongoing state. Very casual expression. Indicates doing action all the time without restraint.",
    structure: "Verb stem + まくっている\nVery casual expression",
    examples: [
      {
        japanese: "ゲームにはまっちゃって、最近パソコンを使いまくっているよ。",
        reading: "ゲームにはまっちゃって、さいきんパソコンをつかいまくっているよ。",
        english: "Having gotten hooked by games, I do nothing but use the computer lately.",
        breakdown: "ゲームにはまっちゃって (got hooked on games) + 最近パソコンを使いまくっている (using computer excessively lately). Continuous excessive use."
      },
      {
        japanese: "アメリカにいた時はコーラを飲みまくっていた。",
        reading: "アメリカにいたときはコーラをのみまくっていた。",
        english: "When I was in the US, I drank coke like all the time.",
        breakdown: "アメリカにいた時 (when was in America) + コーラを飲みまくっていた (was drinking cola excessively). Past continuous reckless action."
      }
    ],
    notes: "Formation:\n**Verb stem + まくる**\n\nSince continuing activity → enduring state:\n**Verb stem + まくっている** (most common)\n\n- やる → やり → やりまくっている (doing recklessly)\n- 食べる → 食べ → 食べまくっている (eating excessively)\n- 使う → 使い → 使いまくっている (using constantly)\n- 飲む → 飲み → 飲みまくっている (drinking excessively)\n\nComplete conjugation:\n\n| Form | Positive | Negative |\n|------|----------|----------|\n| Non-Past | やりまくっている (doing all the time) | やりまくっていない (not doing all the time) |\n| Past | やりまくっていた (did all the time) | やりまくっていなかった (didn't do all the time) |\n\nMeaning:\nVerb suffix indicating:\n- Reckless abandon\n- Excessive action\n- Continuous repetition\n- Without restraint\n- All the time\n\nNuance:\n- Very casual/slangy\n- Often slight exaggeration\n- Can be positive or negative depending on context\n- Emphasizes lack of moderation\n\nCommon expressions:\n- 食べまくる (eat excessively)\n- 飲みまくる (drink excessively)\n- 使いまくる (use constantly)\n- 遊びまくる (play/hang out all the time)\n- 勉強しまくる (study like crazy)\n- 買いまくる (buy excessively/shopping spree)\n- 走りまくる (run all over the place)\n\nUsage context:\n- Casual conversation only\n- Among friends\n- Describing excessive behavior\n- Often with slight humor\n\nAvoid in:\n- Formal situations\n- Business context\n- Polite conversation\n- Writing (except casual)\n\nTypical patterns:\n- 〜まくっている (currently doing excessively)\n- 〜まくっていた (was doing excessively)\n- 〜まくってる (casual contraction)\n- 〜まくった (did excessively - simple past)\n\nExamples in context:\n- 昨日カラオケで歌いまくった (Yesterday sang like crazy at karaoke)\n- 試験前に勉強しまくってる (Studying like crazy before exam)\n- 子供がお菓子を食べまくっている (Kid eating sweets excessively)\n\nNote: Very casual and colorful expression. Adds emphasis and exaggeration to the action.",
    relatedGrammar: ["tk-essential-029", "tk-special-027"],
    tags: ["まくる", "excessive", "reckless", "continuous", "casual"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/timeactions" }]
  },

  {
    grammarId: "tk-special-029",
    title: "Unchanged state with まま",
    titleJapanese: "状態維持「まま」",
    jlptLevel: "N3",
    category: "Special Expressions",
    taeKimSection: "5.13",
    taeKimOrder: 92,
    explanation: "まま expresses a lack of change - leaving something as-is without alteration. Grammatically functions as a noun. Can be modified by verbs, adjectives, or nouns. Common in convenience stores: このままで宜しいですか (Is this ok as-is?). Describes maintaining an unchanged state.",
    structure: "Verb/Adjective/Noun + まま\nWorks like regular noun",
    examples: [
      {
        japanese: "このままで宜しいですか？",
        reading: "このままでよろしいですか？",
        english: "Is it ok just like this?",
        breakdown: "このまま (just like this) + で (with) + 宜しいですか (is it good-very polite). Clerk asking if you want item as-is or bagged."
      },
      {
        japanese: "半分しか食べてないままで捨てちゃダメ！",
        reading: "はんぶんしかたべてないままですてちゃダメ！",
        english: "You can't throw it out leaving it in that half-eaten condition!",
        breakdown: "半分しか食べてないまま (state of being half-uneaten) + で (with) + 捨てちゃダメ (can't throw away). Unchanged state of being half-eaten."
      },
      {
        japanese: "今日だけは悲しいままでいさせてほしい。",
        reading: "きょうだけはかなしいままでいさせてほしい。",
        english: "For only today, I want you to let me stay in this sad condition.",
        breakdown: "今日だけは (just for today) + 悲しいままで (in sad state) + いさせてほしい (want to be allowed to exist). Staying in unchanged sad state."
      },
      {
        japanese: "その格好のままでクラブに入れないよ。",
        reading: "そのかっこうのままでクラブにはいれないよ。",
        english: "You can't get in the club in that getup (without changing).",
        breakdown: "その格好のまま (that appearance unchanged) + で (with) + クラブに入れない (can't enter club). Direct noun modification."
      }
    ],
    notes: "Formation:\n**まま works like a regular noun**\n\nWith verbs:\n- 食べる → 食べたまま (leaving eaten state)\n- 開ける → 開けたまま (leaving opened state)\n- 座る → 座ったまま (remaining seated)\n\nWith i-adjectives:\n- 悲しい → 悲しいまま (remaining sad)\n- 寒い → 寒いまま (staying cold)\n- 汚い → 汚いまま (leaving dirty)\n\nWith na-adjectives:\n- 綺麗 → 綺麗なまま (staying beautiful)\n- 静か → 静かなまま (remaining quiet)\n\nWith nouns:\n- その格好 → その格好のまま (in that appearance)\n- 子供 → 子供のまま (remaining a child)\n\nCommon patterns:\n\n**このままで:**\n- このままで宜しいですか (Is this ok as-is?)\n- このままでいい (This is fine as-is)\n- このままではダメ (Can't leave it like this)\n\n**〜たままで:**\n- 座ったままで (while remaining seated)\n- 開けたままで (leaving it open)\n- 履いたままで (with shoes still on)\n\n**〜ないままで:**\n- 何も食べないままで (without eating anything)\n- 言わないままで (without saying)\n\nKey concept:\n**Lack of change**\n- Something stays the same\n- No alteration\n- Maintaining a state\n- As-is condition\n\nWith particles:\nまま functions as noun, takes particles:\n- ままで (with/in that state)\n- ままに (as it is)\n- ままだ (is in that state)\n- ままの (noun modifier)\n\nCommon expressions:\n- 立ったまま (while standing/remaining standing)\n- 座ったまま (while sitting/remaining seated)\n- 開けっぱなしのまま (left wide open - combines with っぱなし)\n- 靴を履いたまま (with shoes still on)\n- 寝たまま (while lying down/asleep)\n- 生まれたままの姿 (as-born appearance/naked)\n\nConvenience store context:\nこのままで宜しいですか？\n- Clerk asking: bag it or leave as-is?\n- 宜しい = very polite form of いい\n- Common fixed expression\n\nCausative with まま:\n- いさせる = causative of いる (let/make exist)\n- 悲しいままでいさせて (let me stay sad)\n\nNote: Very useful for expressing unchanged states. Grammatically treated as noun, so conjugation/particle usage follows noun patterns.",
    relatedGrammar: ["tk-special-030"],
    tags: ["まま", "unchanged", "as-is", "maintaining-state"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/leavingsomething" }]
  },

  {
    grammarId: "tk-special-030",
    title: "Leaving undone with っぱなし",
    titleJapanese: "放置「っぱなし」",
    jlptLevel: "N2",
    category: "Special Expressions",
    taeKimSection: "5.13",
    taeKimOrder: 93,
    explanation: "っぱなし is a suffix from 放す (to release/set loose) meaning to do something and leave it that way through oversight or neglect. Attach to verb stem. Treat result as regular noun. Carries nuance of carelessness or negligence. Can also see ほっとく (leave alone) or ほったらかす (neglect).",
    structure: "Verb stem + っぱなし\nImplies neglect/oversight\nTreat as noun",
    examples: [
      {
        japanese: "テレビをつけっぱなしにしなければ眠れない人は、結構いる。",
        reading: "テレビをつけっぱなしにしなければねむれないひとは、けっこういる。",
        english: "There exists a fair number of people who cannot sleep unless they turn on the TV and leave it that way.",
        breakdown: "テレビをつけっぱなし (TV left on) + にしなければ (unless make it so) + 眠れない (can't sleep). Leaving TV on deliberately for sleeping."
      },
      {
        japanese: "窓が開けっ放しだったので、蚊がいっぱい入ってしまった。",
        reading: "まどがあけっぱなしだったので、かがいっぱいはいってしまった。",
        english: "The window was left wide open, so a lot of mosquitoes got in.",
        breakdown: "窓が開けっ放しだった (window was left open) + ので (because) + 蚊がいっぱい入ってしまった (many mosquitos entered). Oversight leading to problem."
      }
    ],
    notes: "Formation:\n**Verb stem + っぱなし**\n\n- 開ける → 開け → 開けっぱなし (left open)\n- 書く → 書き → 書きっぱなし (left written/unfinished)\n- つける → つけ → つけっぱなし (left on)\n- 出す → 出し → 出しっぱなし (left out)\n\nRelated expressions:\n\n**放す (はなす) variations:**\n- 放す (はなす) - to release, set loose\n- 放っとく (ほっとく) - leave alone\n  * ほっといてくれ！(Leave me alone!)\n- ほったらかす - to neglect\n  * ほったらかしにする (neglect/abandon)\n\nKey nuance:\n**Implies oversight or neglect**\n- Not intentional maintenance\n- Carelessness\n- Forgetting to undo\n- Lack of follow-through\n\nTreat as noun:\nっぱなし becomes noun, takes particles:\n- っぱなしだ (is in left-alone state)\n- っぱなしで (while left that way)\n- っぱなしに (leaving it that way)\n- っぱなしの (noun modifier)\n\nCommon expressions:\n- 開けっぱなし (left open - forgot to close)\n- つけっぱなし (left on - forgot to turn off)\n- 出しっぱなし (left out - forgot to put away)\n- やりっぱなし (did and abandoned - no follow-up)\n- 食べっぱなし (ate and left dishes/mess)\n- 読みっぱなし (read and left book open/out)\n- 書きっぱなし (wrote and left unfinished/messy)\n\nWriting variations:\nCan write with kanji:\n- 開けっぱなし\n- 開けっ放し (ぱなし in kanji)\n- 開け放し (less common)\n\nUsually written: っぱなし (hiragana)\n\nContrast with まま:\n\n**まま (neutral):**\n- このままで (as-is, neutral)\n- Can be intentional or unintentional\n- No negative nuance necessarily\n\n**っぱなし (negative):**\n- つけっぱなし (left on carelessly)\n- Implies should have undone\n- Carries criticism/complaint\n\nTypical contexts:\n- Complaints about carelessness\n- Describing oversight\n- Things left undone\n- Lack of tidiness\n\nExamples in context:\n- 電気をつけっぱなしにしないで (Don't leave lights on)\n- ドアを開けっぱなしだよ (The door is left open!)\n- 水を出しっぱなしにした (Left water running)\n- やりっぱなしはダメ (Can't just do and abandon)\n\nGrammatical treatment:\nBecause it's a noun:\n- だ/です conjugation\n- Particle attachment\n- Can modify other nouns\n- Takes な for na-adjective use (rare)\n\nNote: Useful expression with clear negative nuance of negligence. Common in daily complaints about carelessness.",
    relatedGrammar: ["tk-special-029"],
    tags: ["っぱなし", "neglect", "oversight", "carelessness", "left-undone"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/leavingsomething" }]
  },

  // Chapter 6.1: Formal Expressions
  {
    grammarId: "tk-advanced-001",
    title: "Formal state-of-being with である",
    titleJapanese: "公式表現「である」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.1",
    taeKimOrder: 94,
    explanation: "である is a formal state-of-being used to state facts in a neutral, official manner. Used in speeches, reports, documentaries, and formal writing. More official than だ. Attach to nouns or adjectives. Different tone from です or でございます - sounds factual and authoritative.",
    structure: "Noun/Adjective + である\nFormal/written style",
    examples: [
      {
        japanese: "吾輩は猫である。",
        reading: "わがはいはねこである。",
        english: "I am a cat.",
        breakdown: "吾輩は (I - formal archaic) + 猫である (cat-formal be). Famous title of novel by 夏目漱石. Shows formal literary usage."
      },
      {
        japanese: "混合物は、2種類以上の純物質が混じりあっている物質である。",
        reading: "こんごうぶつは、にしゅるいいじょうのじゅんぶっしつがまじりあっているぶっしつである。",
        english: "An amalgam is a mixture of two or more pure materials.",
        breakdown: "混合物は (amalgam) + 2種類以上の純物質が混じりあっている物質である (is substance of 2+ types mixed materials). Wikipedia definition style."
      }
    ],
    notes: "Formation:\n**Noun/Adjective + である**\n\n- 学生である (is student)\n- 重要である (is important)\n- 問題である (is problem)\n\nComplete conjugation:\n\n| Form | Positive | Negative |\n|------|----------|----------|\n| Non-Past | 学生である (is student) | 学生ではない (is not student) |\n| Past | 学生であった (was student) | 学生ではなかった (was not student) |\n\nNegative formation:\nMust insert は before ない\n- である → ではない (NOT でない!)\n- これは不公平ではないでしょうか (Wouldn't this be unfair?)\n\nKey characteristics:\n\n**Formality level:**\nMore formal than だ\n- だ: casual\n- です: polite\n- でございます: very polite/humble\n- である: formal/official\n\n**Usage contexts:**\n- Formal speeches\n- Academic writing\n- News reports\n- Documentaries\n- Wikipedia articles\n- Official documents\n- Technical descriptions\n\n**NOT used for:**\n- Casual conversation\n- Polite conversation\n- When です/でございます appropriate\n\nTone comparison examples:\nSame sentence, different formality:\n\n1. 混合物は何?\n   混合物は、2種類以上の純物質が混じりあっている物質だ。\n   (Casual with だ)\n\n2. 混合物は何ですか?\n   混合物は、2種類以上の純物質が混じりあっている物質です。\n   (Polite with です)\n\n3. 混合物は何でしょうか。\n   混合物は、2種類以上の純物質が混じりあっている物質でございます。\n   (Very polite with でございます)\n\n4. 混合物とは?\n   混合物は、2種類以上の純物質が混じりあっている物質である。\n   (Formal with である)\n\nCommon patterns:\n- 〜である (is...)\n- 〜であった (was...)\n- 〜ではない (is not...)\n- 〜ではなかった (was not...)\n- 〜であろう (probably is...)\n- 〜であるべき (should be...)\n\nWith particles:\n- 学生であり (being student, and...)\n- 学生であって (being student, and...)\n- 学生であるが (although is student)\n\nNote: である gives authoritative, factual tone. Common in academic and formal writing. Sounds unnatural in casual speech.",
    relatedGrammar: ["tk-basic-001", "tk-essential-024"],
    tags: ["である", "formal", "state-of-being", "written-style"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/formal" }]
  },

  {
    grammarId: "tk-advanced-002",
    title: "Sequential clauses in formal writing",
    titleJapanese: "連用形接続",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.1",
    taeKimOrder: 95,
    explanation: "In formal writing, use verb stems (not te-form) to connect sequential actions. Common in newspapers, publications, and formal narration. More concise than te-form. For ている forms, stem becomes てい but commonly use おり (humble form of いる) for better flow.",
    structure: "Verb stem (not te-form)\nSequential actions in formal writing\nている → おり",
    examples: [
      {
        japanese: "花火は、火薬と金属の粉末を混ぜたものに火を付け、燃焼時の火花を楽しむためのもの。",
        reading: "はなびは、かやくときんぞくのふんまつをまぜたものにひをつけ、ねんしょうじのひばなをたのしむためのもの。",
        english: "Fireworks are for the enjoyment of sparks created from combustion created by lighting up a mixture of gunpowder and metal powder.",
        breakdown: "火薬と金属の粉末を混ぜたものに (mixed gunpowder and metal) + 火を付け (light fire - stem not て) + 燃焼時の火花を楽しむ (enjoy sparks). Wikipedia formal definition."
      },
      {
        japanese: "封筒には写真が数枚入っており、手紙が添えられていた。",
        reading: "ふうとうにはしゃしんがすうまいはいっており、てがみがそえられていた。",
        english: "Several photos were inside the envelope, and a letter was attached.",
        breakdown: "写真が数枚入っており (photos were inside - おり not いる) + 手紙が添えられていた (letter attached). Using おり for better flow."
      }
    ],
    notes: "Key rule:\n**Use verb stems, NOT te-form**\n\nCasual/spoken:\n- 混ぜて、火を付けて、楽しむ (mix, light, enjoy - te-form)\n\nFormal/written:\n- 混ぜ、火を付け、楽しむ (mix, light, enjoy - stems)\n\nFormation:\nRu-verbs (remove る):\n- 食べる → 食べ\n- 見る → 見\n\nU-verbs (change to i-stem):\n- 付ける → 付け\n- 混ぜる → 混ぜ\n- 書く → 書き\n- 話す → 話し\n\n**Special case: ている forms**\n\nProblem:\n- 入っている → 入ってい (awkward!)\n\nSolution:\nUse おり (humble form of いる):\n- 入っている → 入っており\n- 添えられている → 添えられており\n- 設定されている → 設定されており\n\nWhy おり?\n- Better flow in middle of sentence\n- Nothing to do with humble meaning\n- Just grammatical convenience\n- Standard practice in formal writing\n\nUsage contexts:\n\n**Common in:**\n- Newspaper articles (brevity!)\n- Academic papers\n- Reports\n- Documentation\n- Formal narratives\n- Wikipedia definitions\n\n**NOT used in:**\n- Casual conversation\n- Everyday speech\n- Informal writing\n- Use te-form instead\n\nExamples:\n\nFormal article:\n企業内の顧客データを利用し、彼の行方を調べることが出来た。\n(Used company data, investigated whereabouts)\n利用し (used - stem) + 調べる (investigate)\n\nFormal narration:\nこのファイルにはパスワードが設定されており、開く際にはそれを入力する必要がある。\n(Password set on file, must enter when opening)\n設定されており (is set - using おり)\n\nBrevity advantage:\nNewspapers especially prefer stems\n- Shorter than te-form\n- More information in less space\n- Professional tone\n\nContrast with casual:\n\nCasual:\n写真を見て、手紙を読んで、泣いた。\n(Saw photos, read letter, cried)\n\nFormal:\n写真を見、手紙を読み、泣いた。\n(Saw photos, read letter, cried - more concise)\n\nNote: This is purely stylistic - formal vs casual. Meaning identical, but tone and appropriateness differ drastically.",
    relatedGrammar: ["tk-essential-029", "tk-advanced-001"],
    tags: ["formal-writing", "sequential-actions", "verb-stem", "conjunctive-form"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/formal" }]
  },

  {
    grammarId: "tk-advanced-003",
    title: "Expectations with はず",
    titleJapanese: "予想「はず」",
    jlptLevel: "N3",
    category: "Advanced Topics",
    taeKimSection: "6.2",
    taeKimOrder: 96,
    explanation: "はず expresses expectation - something supposed to be or supposed to happen based on reason. Treat like regular noun. For negative expectation (not supposed to happen), use はずがない or はずはない. はずじゃない mainly for confirmation (はずじゃないか - isn't it supposed to?).",
    structure: "Verb/Adjective/Noun + はず\nTreat as noun\nNegative: はずがない",
    examples: [
      {
        japanese: "彼は漫画マニアだから、これらをもう全部読んだはずだよ。",
        reading: "かれはまんがマニアだから、これらをもうぜんぶよんだはずだよ。",
        english: "He has a mania for comics so I expect he read all these already.",
        breakdown: "彼は漫画マニア (he's comic mania) + だから (because) + もう全部読んだはず (expect already read all). Expectation based on his interest."
      },
      {
        japanese: "この料理はおいしいはずだったが、焦げちゃって、まずくなった。",
        reading: "このりょうりはおいしいはずだったが、こげちゃって、まずくなった。",
        english: "This dish was expected to be tasty but it burned and became distasteful.",
        breakdown: "おいしいはずだった (was expected to be tasty) + が (but) + 焦げちゃって (burned) + まずくなった (became bad). Past expectation unfulfilled."
      },
      {
        japanese: "そう簡単に直せるはずがないよ。",
        reading: "そうかんたんになおせるはずがないよ。",
        english: "It's not supposed to be that easy to fix.",
        breakdown: "そう簡単に直せる (fix that easily) + はずがない (no way/not expected). Negative expectation using がない."
      }
    ],
    notes: "Formation:\n**Treat はず like regular noun**\n\nWith nouns:\n- 日曜日のはず (expect it's Sunday)\n\nWith na-adjectives:\n- 可能なはず (expect it's possible)\n\nWith i-adjectives:\n- おいしいはず (expect it's tasty)\n\nWith verbs:\n- 帰るはず (expect will return)\n- 読んだはず (expect already read)\n\nNegative expectations:\n\n**はずがない (no way/not supposed to):**\nUse negative existence verb\n- 帰るはずがない (no way will return)\n- できるはずがない (can't possibly do)\n- そんなはずがない (that can't be right)\n\n**はずはない (shouldn't be the case):**\nSimilar meaning, は instead of が\n- 嘘のはずはない (shouldn't be a lie)\n\n**はずじゃない (mainly for confirmation):**\nUsed for positive confirmation:\n- 始まるはずじゃないか (isn't it supposed to start?)\n- そうのはずじゃないですか (isn't that how it's supposed to be?)\nNot commonly used for straight negative\n\nKey concept:\n**Expectation based on reason**\n- Not wild guess\n- Logical conclusion\n- Based on evidence/circumstances\n- \"Should be\" in the sense of \"expected to be\"\n\nCommon patterns:\n- 〜はずだ (should be/expected to be)\n- 〜はずだった (was expected to be)\n- 〜はずがない (no way/can't be)\n- 〜はずじゃない (shouldn't be - rare)\n- 〜はずじゃないか (isn't it supposed to - confirmation)\n\nExamples in context:\n\n色々予定してあるから、今年は楽しいクリスマスのはず。\n(Various things planned, so expect fun Christmas)\nBased on planning → expectation\n\n打合せは毎週２時から始まるはずじゃないですか?\n(Meeting supposed to start 2pm every week, right?)\nConfirmation question\n\nContrast with other expressions:\n\n**はず (expectation):**\n彼は来るはず (expect he'll come - based on what I know)\n\n**だろう (probability):**\n彼は来るだろう (probably will come - less certain)\n\n**かもしれない (possibility):**\n彼は来るかもしれない (might come - uncertain)\n\nNote: はず implies reasonable expectation based on circumstances, not mere possibility or guess.",
    relatedGrammar: ["tk-special-007", "tk-special-008", "tk-advanced-004"],
    tags: ["はず", "expectation", "supposed-to", "reasoning"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/shouldbe" }]
  },

  {
    grammarId: "tk-advanced-004",
    title: "Strong suggestion with べき",
    titleJapanese: "義務「べき」",
    jlptLevel: "N3",
    category: "Advanced Topics",
    taeKimSection: "6.2",
    taeKimOrder: 96,
    explanation: "べき expresses strong obligation - what one should/must do. NOT for suggestions like \"you should see doctor\" (use 方がいい instead). べき sounds bossy/authoritative. Usually for oneself or neutral circumstances. する can become すべき (drop る).",
    structure: "Verb + べき\nする → すべき",
    examples: [
      {
        japanese: "何かを買う前に本当に必要かどうかをよく考えるべきだ。",
        reading: "なにかをかうまえにほんとうにひつようかどうかをよくかんがえるべきだ。",
        english: "Before buying something, one should think well on whether it's really necessary.",
        breakdown: "何かを買う前に (before buying) + 本当に必要かどうか (whether really necessary) + よく考えるべき (should think well)."
      }
    ],
    notes: "Formation: Verb + べき. する → すべき OR するべき. Strong/bossy tone. Conjugates like noun: べきだ/べきじゃない/べきだった. NOT for direct suggestions (use 方がいい). Good for: self-admonition, general principles, neutral circumstances.",
    relatedGrammar: ["tk-essential-047", "tk-advanced-003", "tk-advanced-005"],
    tags: ["べき", "obligation", "should"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/shouldbe" }]
  },

  {
    grammarId: "tk-advanced-005",
    title: "Attempting with べく",
    titleJapanese: "試行「べく」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.2",
    taeKimOrder: 97,
    explanation: "べく is conjunctive form of べき meaning \"in order to\" or \"in an effort to\" do what one is supposed to do. Very old-fashioned, seldom used. Mainly JLPT/formal writing.",
    structure: "Verb + べく\nする → すべく",
    examples: [
      {
        japanese: "試験に合格すべく、皆一生懸命に勉強している。",
        reading: "しけんにごうかくすべく、みんないっしょうけんめいにべんきょうしている。",
        english: "Everybody is studying hard in an effort to pass the exam.",
        breakdown: "試験に合格すべく (in order to pass) + 皆一生懸命に勉強している (everyone studying hard)."
      }
    ],
    notes: "Formation: Verb + べく. Old-fashioned. Means \"in order to\". Modern alternatives: ために, ように, しようと思って. Rarely used except JLPT N1 or formal documents.",
    relatedGrammar: ["tk-advanced-004", "tk-advanced-006"],
    tags: ["べく", "in-order-to", "old-fashioned"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/shouldbe" }]
  },

  {
    grammarId: "tk-advanced-006",
    title: "Prohibition with べからず",
    titleJapanese: "禁止「べからず」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.2",
    taeKimOrder: 98,
    explanation: "べからず expresses opposite of べき - action one must not do. Very formal/archaic. Often in べし・べからず (do's and don'ts). Useful for signs and regulations.",
    structure: "Verb + べからず\nする → すべからず",
    examples: [
      {
        japanese: "ゴミ捨てるべからず。",
        reading: "ゴミすてるべからず。",
        english: "You must not throw away trash.",
        breakdown: "ゴミ捨てる (throw trash) + べからず (must not). Sign/regulation."
      }
    ],
    notes: "Formation: Verb + べからず. Very archaic. Common on warning signs, formal rules. Modern alternatives: 〜てはいけない, 〜な. Mainly JLPT or reading old texts.",
    relatedGrammar: ["tk-advanced-004", "tk-advanced-005"],
    tags: ["べからず", "prohibition", "archaic"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/shouldbe" }]
  },

  {
    grammarId: "tk-advanced-007",
    title: "Minimum requirement with (で)さえ",
    titleJapanese: "最低限「（で）さえ」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.3",
    taeKimOrder: 99,
    explanation: "(で)さえ expresses minimum expectation - \"not even\" or \"even\". Shows bare minimum not met OR all you need. For nouns: さえ or でさえ. For verbs: stem + さえ OR て/で + さえ.",
    structure: "Nouns: さえ/でさえ\nVerbs: stem + さえ",
    examples: [
      {
        japanese: "宿題が多すぎて、トイレに行く時間さえなかった。",
        reading: "しゅくだいがおおすぎて、トイレにいくじかんさえなかった。",
        english: "There was so much homework, I didn't even have time to go to the bathroom.",
        breakdown: "宿題が多すぎて + トイレに行く時間さえなかった (didn't even have bathroom time)."
      },
      {
        japanese: "お金さえあれば、何でも出来るよ。",
        reading: "おかねさえあれば、なんでもできるよ。",
        english: "The least you need is money and you can do anything.",
        breakdown: "お金さえあれば (if only have money) + 何でも出来る (can do anything)."
      }
    ],
    notes: "Formation: Nouns: さえ/でさえ (で adds emphasis). Verbs: stem + さえ OR て/で + さえ. Meaning: Negative = not even minimum. Positive = X alone enough. Common: 〜さえあれば, 〜さえすれば.",
    relatedGrammar: ["tk-advanced-008", "tk-advanced-009"],
    tags: ["さえ", "minimum", "even"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/minimum" }]
  },

  {
    grammarId: "tk-advanced-008",
    title: "Minimum with (で)すら",
    titleJapanese: "最低限「（で）すら」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.3",
    taeKimOrder: 100,
    explanation: "(で)すら is older variation of (で)さえ. Interchangeable but generally used only with nouns. More literary/formal. Same meaning: \"not even\" or \"even\".",
    structure: "Nouns: すら/ですら\nNOT commonly with verbs",
    examples: [
      {
        japanese: "この天才の私ですらわからなかった。",
        reading: "このてんさいのわたしですらわからなかった。",
        english: "Even a genius such as myself couldn't solve it.",
        breakdown: "この天才の私ですら (even genius me) + わからなかった (couldn't understand)."
      }
    ],
    notes: "Formation: Nouns + すら/ですら. Older variation of さえ. Generally for nouns only. More literary/formal. Less common in modern speech.",
    relatedGrammar: ["tk-advanced-007", "tk-advanced-009"],
    tags: ["すら", "minimum", "literary"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/minimum" }]
  },

  {
    grammarId: "tk-advanced-009",
    title: "Beyond consideration with おろか",
    titleJapanese: "比較外「おろか」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.3",
    taeKimOrder: 101,
    explanation: "おろか (愚か = foolish) indicates something so ridiculous it's not worth considering. Shows extreme gap. English: \"forget about X, much less Y\". Attach directly to nouns. どころか is more common alternative.",
    structure: "Noun + はおろか\nMuch less/forget about",
    examples: [
      {
        japanese: "漢字はおろか、ひらがなさえ読めないよ！",
        reading: "かんじはおろか、ひらがなさえよめないよ！",
        english: "Forget about Kanji, I can't even read Hiragana!",
        breakdown: "漢字はおろか (forget kanji) + ひらがなさえ読めない (can't even read hiragana)."
      },
      {
        japanese: "大学はおろか、高校すら卒業しなかった。",
        reading: "だいがくはおろか、こうこうすらそつぎょうしなかった。",
        english: "I didn't even graduate from high school much less college.",
        breakdown: "大学はおろか (college out of question) + 高校すら卒業しなかった (didn't even finish high school)."
      }
    ],
    notes: "From 愚か (foolish). Formation: Noun + はおろか. Shows X so beyond that Y (easier) is also impossible. Pattern: [harder]はおろか、[easier]さえ〜ない. More common alternative: どころか. JLPT N1 level.",
    relatedGrammar: ["tk-advanced-007", "tk-advanced-008"],
    tags: ["おろか", "much-less", "extreme-gap"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/minimum" }]
  },

  {
    grammarId: "tk-advanced-010",
    title: "Showing emotions with 〜がる",
    titleJapanese: "感情表出「〜がる」",
    jlptLevel: "N3",
    category: "Advanced Topics",
    taeKimSection: "6.4",
    taeKimOrder: 102,
    explanation: "〜がる observes others' emotions/feelings based on signs. Only for adjectives. Cannot use for own emotions (no need to guess yourself). Attach to adjectives to create u-verb. Common with: 嫌, 怖い, 嬉しい, 恥ずかしい. Also for observing what others want using 欲しい or 〜たい.",
    structure: "I-adj: remove い + がる\nNa-adj: direct + がる\nBecomes u-verb",
    examples: [
      {
        japanese: "早くきてよ！何を恥ずかしがっているの？",
        reading: "はやくきてよ！なにをはずかしがっているの？",
        english: "Hurry up and come here. What are you acting all embarrassed for?",
        breakdown: "何を恥ずかしがっている (what acting embarrassed about). Observing embarrassed behavior."
      },
      {
        japanese: "彼女は朝早く起こされるのを嫌がるタイプです。",
        reading: "かのじょはあさはやくおこされるのをいやがるタイプです。",
        english: "My girlfriend is the type to show dislike towards getting woken up early.",
        breakdown: "朝早く起こされるのを嫌がる (shows dislike toward being woken early). Observing her feelings."
      }
    ],
    notes: "Formation: I-adj remove い + がる (怖い→怖がる). Na-adj + がる (嫌→嫌がる). Result is u-verb conjugation. Only for others' emotions, NOT your own. Common adjectives: 嫌 (dislike), 怖い (scared), 嬉しい (happy), 恥ずかしい (embarrassed). For wants: 欲しい→欲しがる, 〜たい→〜たがる. With 屋: 恥ずかしがり屋 (easily embarrassed person), 寒がり屋 (easily cold person). Impersonal observation style - rare in casual conversation. Common in narration.",
    relatedGrammar: ["tk-essential-038"],
    tags: ["〜がる", "emotions", "observation", "feelings"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/signs" }]
  },

  {
    grammarId: "tk-advanced-011",
    title: "Cannot help but do with 〜ざるを得ない",
    titleJapanese: "不可避「〜ざるを得ない」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.5",
    taeKimOrder: 103,
    explanation: "〜ざるを得ない expresses something must be done - cannot obtain not doing. Uses archaic negative ざる instead of ない. Means can't not do even if wanted. Double negative creates slight nuance you don't want to but have to. Fancier than regular 'have to'. More formal than なければならない.",
    structure: "Negative verb: ない→ざる + を得ない\nする→せざる, くる→こざる",
    examples: [
      {
        japanese: "このテレビがこれ以上壊れたら、新しいのを買わざるを得ないな。",
        reading: "このテレビがこれいじょうこわれたら、あたらしいのをかわざるをえないな。",
        english: "If this TV breaks even more, there's no choice but to buy a new one.",
        breakdown: "買わざるを得ない (can't not buy). 買う→買わない→買わざる→買わざるを得ない."
      },
      {
        japanese: "ずっと我慢してきたが、この状態だと歯医者さんに行かざるを得ない。",
        reading: "ずっとがまんしてきたが、このじょうたいだとはいしゃさんにいかざるをえない。",
        english: "I tolerated it all this time but in this situation, I can't not go to the dentist.",
        breakdown: "行かざるを得ない (must go). 行く→行かない→行かざる→行かざるを得ない."
      }
    ],
    notes: "Formation: Negative verb ない→ざる + を得ない. 食べない→食べざる→食べざるを得ない. 行かない→行かざる→行かざるを得ない. Exceptions: する→せざるを得ない (NOT しざる), くる→こざるを得ない. Archaic ざる from old negative form. Cannot obtain (得る) not doing = must do. Double negative implies reluctance but necessity. More formal than: なければならない, なくてはいけない. Can write in hiragana: 〜ざるをえない. Emphasizes circumstances force action.",
    relatedGrammar: ["tk-essential-032", "tk-advanced-012"],
    tags: ["〜ざるを得ない", "must", "cannot-help", "formal", "reluctant-necessity"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/nonfeasibility" }]
  },

  {
    grammarId: "tk-advanced-012",
    title: "Cannot be helped with やむを得ない",
    titleJapanese: "不可避「やむを得ない」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.5",
    taeKimOrder: 104,
    explanation: "やむを得ない = cannot obtain stopping. Fixed expression for situations that cannot be helped. Similar to 仕方がない/しょうがない but more formal. Not specific action forced - general situation with no choice. Describes unavoidable circumstances. を particle unusually attached to verb 止む.",
    structure: "Fixed expression: やむを得ない\nNo conjugation needed\nGeneral unavoidable situation",
    examples: [
      {
        japanese: "やむを得ない事由により手続が遅れた場合、必ずご連絡下さい。",
        reading: "やむをえないじゆうによりてつづきがおくれたばあい、かならずごれんらくください。",
        english: "If paperwork should be late due to uncontrollable circumstance, please make sure to contact us.",
        breakdown: "やむを得ない事由 (unavoidable circumstances). Fixed expression describing situation."
      },
      {
        japanese: "この仕事は厳しいかもしれませんが、最近の不景気では新しい仕事が見つからないのでやむを得ない状態です。",
        reading: "このしごとはきびしいかもしれませんが、さいきんのふけいきではあたらしいしごとがみつからないのでやむをえないじょうたいです。",
        english: "This job may be bad but because can't find new job due to recent downturn, it's a situation where nothing can be done.",
        breakdown: "やむを得ない状態 (unavoidable situation). Cannot be helped due to circumstances."
      }
    ],
    notes: "Fixed expression: やむを得ない. 止む (やむ) = to stop. Cannot obtain stopping = cannot be helped. Set phrase - use as-is like relative clause. Similar expressions: 仕方がない (nothing can be done), しょうがない (can't be helped-casual). やむを得ない more formal. Difference from 〜ざるを得ない: やむを得ない = general situation unavoidable, 〜ざるを得ない = specific action must do. Often in formal contexts: やむを得ない事由 (unavoidable circumstances), やむを得ない理由 (unavoidable reason). Can conjugate: やむを得なかった (couldn't be helped-past).",
    relatedGrammar: ["tk-advanced-011"],
    tags: ["やむを得ない", "unavoidable", "cannot-help", "circumstances", "formal"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/nonfeasibility" }]
  },

  {
    grammarId: "tk-advanced-013",
    title: "Cannot do with 〜かねる",
    titleJapanese: "不可能「〜かねる」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.5",
    taeKimOrder: 105,
    explanation: "〜かねる is ru-verb suffix expressing inability, reluctance, or refusal to do something. Often for things find difficult/unpleasant/awkward/painful. In negative かねない = possibility something bad might happen (risk/fear that). Attach to verb stem.",
    structure: "Verb stem + かねる (inability)\nVerb stem + かねない (bad possibility)",
    examples: [
      {
        japanese: "この場ではちょっと決めかねますので、また別途会議を設けましょう。",
        reading: "このばではちょっときめかねますので、またべっとかいぎをもうけましょう。",
        english: "Since making decision here is impossible, let's set up separate meeting again.",
        breakdown: "決めかねる (cannot decide). 決める→決め (stem) + かねる. Cannot make decision."
      },
      {
        japanese: "このままでは、個人情報が漏洩しかねないので、速やかに対応をお願い致します。",
        reading: "このままでは、こじんじょうほうがろうえいしかねないので、すみやかにたいおうをおねがいいたします。",
        english: "At this rate, there is possibility that personal information might leak so I request this be dealt with promptly.",
        breakdown: "漏洩しかねない (might leak-negative possibility). する→し (stem) + かねない. Risk of leaking."
      }
    ],
    notes: "Formation: Verb stem + かねる/かねない. 決める→決めかねる (cannot decide), する→しかねる (cannot do). かねる conjugates as ru-verb. Positive: inability/reluctance. 〜かねる = cannot do / find difficult / reluctant. Negative かねない: bad possibility. 〜かねない = might happen (bad thing) / risk that / fear that. Common with: 決めかねる (can't decide), 答えかねる (can't answer), 賛成しかねる (cannot agree). With negative for risks: 漏洩しかねない (might leak), なりかねない (might become). Usually for unpleasant/difficult situations.",
    relatedGrammar: ["tk-advanced-011", "tk-advanced-012"],
    tags: ["〜かねる", "cannot", "inability", "reluctance", "risk"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/nonfeasibility" }]
  },

  {
    grammarId: "tk-advanced-014",
    title: "Prone to with 〜がち",
    titleJapanese: "傾向「〜がち」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.6",
    taeKimOrder: 106,
    explanation: "〜がち expresses tendency - something prone to occur. Attach to verb stem or noun. Result works like na-adjective. Usually for bad/undesirable tendencies. Modifies nouns with な. Most practical grammar in this section - actually heard in conversation though more common in writing.",
    structure: "Verb stem + がち\nNoun + がち\nWorks like na-adjective",
    examples: [
      {
        japanese: "確定申告は忘れがちな手続のひとつだ。",
        reading: "かくていしんこくはわすれがちなてつづきのひとつだ。",
        english: "Filing income taxes is one of those processes that one is prone to forget.",
        breakdown: "忘れがち (prone to forget). 忘れる→忘れ (stem) + がち. Modifies 手続 with な."
      },
      {
        japanese: "留守がちなご家庭には、犬よりも、猫の方がおすすめです。",
        reading: "るすがちなごかていには、いぬよりも、ねこのほうがおすすめです。",
        english: "For families that tend to be away from home, cats are recommended over dogs.",
        breakdown: "留守がち (tend to be away). Noun 留守 + がち. Modifies 家庭 with な."
      }
    ],
    notes: "Formation: Verb stem + がち (見る→見がち, なる→なりがち). Noun + がち (病気→病気がち). Result is na-adjective. Conjugation: なりがち/なりがちじゃない/なりがちだった/なりがちじゃなかった. Usually bad tendencies: 忘れがち (prone to forget), 病気がち (prone to illness), 留守がち (often away). Modifies nouns with な: 忘れがちな手続 (process prone to be forgotten). Most practical in this lesson - can hear in conversation. More common in writing but not strictly formal.",
    relatedGrammar: ["tk-advanced-015"],
    tags: ["〜がち", "prone-to", "tendency", "likelihood"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/tendencies" }]
  },

  {
    grammarId: "tk-advanced-015",
    title: "Ongoing with 〜つつ",
    titleJapanese: "継続「〜つつ」",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.6",
    taeKimOrder: 107,
    explanation: "〜つつ expresses ongoing occurrence - similar to ながら but more literary. Two uses: 1) Two concurrent actions (both equal weight unlike ながら where one is auxiliary). 2) With ある shows existing trend: 〜つつある. Tone very different from ながら - literary/abstract, not everyday. More for emotions/thoughts than physical actions.",
    structure: "Verb stem + つつ\nWith trend: stem + つつある\nLiterary tone",
    examples: [
      {
        japanese: "二日酔いで痛む頭を押さえつつ、トイレに入った。",
        reading: "ふつかよいでいたむあたまをおさえつつ、トイレにはいった。",
        english: "Went into bathroom while holding aching head from hangover.",
        breakdown: "押さえつつ (while holding). 押さえる→押さえ + つつ. Both actions equal weight."
      },
      {
        japanese: "体によくないと思いつつ、最近は全然運動してない。",
        reading: "からだによくないとおもいつつ、さいきんはぜんぜんうんどうしてない。",
        english: "While thinking it's bad for body, haven't exercised at all recently.",
        breakdown: "思いつつ (while thinking). 思う→思い + つつ. Abstract/emotional action."
      },
      {
        japanese: "電気製品の発展につれて、ハードディスクの容量はますます大きくなりつつある。",
        reading: "でんきせいひんのはってんにつれて、ハードディスクのようりょうはますますおおきくなりつつある。",
        english: "Led by advancement of electronic products, hard disk capacities are becoming ever larger.",
        breakdown: "なりつつある (becoming-trend). なる→なり + つつある. Shows ongoing trend."
      }
    ],
    notes: "Formation: Verb stem + つつ (見る→見つつ, 思う→思いつつ). For trend: stem + つつある (なる→なりつつある). Different from ながら: つつ for literary/abstract (emotions/thoughts), both actions equal weight. ながら for everyday, one auxiliary action. Would sound weird: テレビを見つつ寝る (unnatural). Better: テレビを見ながら寝る. Second use with ある: shows existing trend/tide. Common in articles: 〜つつある (is in process of). Used for: formal writing, newspapers, magazines, literary works. NOT casual conversation.",
    relatedGrammar: ["tk-special-027", "tk-advanced-014"],
    tags: ["〜つつ", "ongoing", "concurrent", "literary", "trend"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/tendencies" }]
  },

  {
    grammarId: "tk-advanced-016",
    title: "Bad tendency with きらいがある",
    titleJapanese: "悪い傾向「きらいがある」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.6",
    taeKimOrder: 108,
    explanation: "きらいがある is fixed expression for negative tendency or bad habit. きらい functions as noun (NOT na-adjective 嫌い). Particle が follows proving it's noun. Simply states that negative/undesirable tendency exists. More formal than regular tendency expressions.",
    structure: "Verb/Noun + のきらいがある\nFixed expression",
    examples: [
      {
        japanese: "多くの大学生は、締切日ぎりぎりまで、宿題をやらないきらいがある。",
        reading: "おおくのだいがくせいは、しめきりびぎりぎりまで、しゅくだいをやらないきらいがある。",
        english: "A lot of college students have a bad tendency of not doing their homework until just barely it's due.",
        breakdown: "やらないきらいがある (have bad tendency of not doing). きらいがある shows negative habit."
      },
      {
        japanese: "コーディングが好きな開発者は、ちゃんとしたドキュメント作成と十分なテストを怠るきらいがある。",
        reading: "コーディングがすきなかいはつしゃは、ちゃんとしたドキュメントさくせいとじゅうぶんなテストをおこたるきらいがある。",
        english: "Developers who like coding have bad tendency to neglect proper documentation and adequate testing.",
        breakdown: "怠るきらいがある (have tendency to neglect). Negative tendency for developers."
      }
    ],
    notes: "Fixed expression: のきらいがある. きらい here is NOUN not na-adjective. Particle が follows (きらいが) proving noun usage. Only for negative/undesirable tendencies. More formal tone. Formation: Verb dictionary form + きらいがある (やらないきらいがある). Noun + のきらいがある. Different from 嫌い (na-adjective meaning dislike). This きらい means tendency/habit. Always with ある: きらいがある. Cannot conjugate きらい itself. Can conjugate ある: きらいがあった (had bad tendency).",
    relatedGrammar: ["tk-advanced-014", "tk-advanced-015"],
    tags: ["きらいがある", "bad-tendency", "negative-habit", "formal"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/tendencies" }]
  },

  {
    grammarId: "tk-advanced-017",
    title: "Negative volitional with まい",
    titleJapanese: "否定意向形「まい」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.7",
    taeKimOrder: 109,
    explanation: "まい expresses negative intention - will for something NOT to happen. Very stiff and formal negative volitional. Practically never in daily conversations (movies/formal writing only). Shows strong determination NOT to do something. Can also express doubt (very formal でしょう). Must always come last even for polite forms.",
    structure: "Ru-verb: stem + まい\nU-verb: dictionary + まい\nする→するまい/しまい\nくる→くるまい",
    examples: [
      {
        japanese: "相手は剣の達人だ。そう簡単には勝てまい。",
        reading: "あいては けんのたつじんだ。そうかんたんにはかてまい。",
        english: "Opponent is master of the sword. I doubt you can win so easily.",
        breakdown: "勝てまい (probably cannot win). 勝てる→勝てまい. Expresses doubt/negative expectation."
      },
      {
        japanese: "その時までは決して彼に会うまいと心に決めていた。",
        reading: "そのときまではけっしてかれにあうまいとこころにきめていた。",
        english: "Until that time, I had decided in my heart to not meet him by any means.",
        breakdown: "会うまい (will not meet). 会う + まい. Strong determination NOT to meet."
      },
      {
        japanese: "あの人は、二度と嘘をつくまいと誓ったのです。",
        reading: "あのひとは、にどとうそをつくまいとちかったのです。",
        english: "That person swore to never lie again.",
        breakdown: "つくまい (will not tell). つく + まい + と誓った. Swore NOT to do."
      }
    ],
    notes: "Formation: Ru-verb stem + まい (見る→見まい, 食べる→食べまい). U-verb dictionary + まい (行く→行くまい, 勝つ→勝つまい). Exceptions: する→するまい or しまい, くる→くるまい. For polite must come last: なります→なりますまい (NOT なりまい). Two uses: 1) Strong negative intention (will NOT do). 2) Negative probability/doubt (probably won't - very formal). Very stiff/formal - movies/speeches/old texts. NOT for casual conversation. For 'let's not': use やめる with volitional (行くのをやめよう). For 'try not to': use ようにする with negative (食べないようにしている).",
    relatedGrammar: ["tk-essential-036", "tk-advanced-018"],
    tags: ["まい", "negative-volitional", "intention", "formal", "determination"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/advanced_volitional" }]
  },

  {
    grammarId: "tk-advanced-018",
    title: "Whether or not with volitional",
    titleJapanese: "意向形の無関係「〜うが〜うまいが」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.7",
    taeKimOrder: 110,
    explanation: "Use both volitional AND negative volitional (まい) to express doesn't matter whether something happens or not. Attach が to both forms. Shows complete indifference or lack of relation. Very formal/literary expression.",
    structure: "[volitional]が[negative volitional]が\nBoth with が particle",
    examples: [
      {
        japanese: "あいつが大学に入ろうが入るまいが、俺とは関係ないよ。",
        reading: "あいつがだいがくにはいろうがはいるまいが、おれとはかんけいないよ。",
        english: "Whether that guy goes to college or not, has nothing to do with me.",
        breakdown: "入ろうが入るまいが (whether enter or not). 入る→入ろう + が + 入るまい + が."
      },
      {
        japanese: "時間があろうがあるまいが、間に合わせるしかない。",
        reading: "じかんがあろうがあるまいが、まにあわせるしかない。",
        english: "Whether there's time or not, there's nothing to do but make it on time.",
        breakdown: "あろうがあるまいが (whether there is or not). ある→あろう + が + あるまい + が."
      },
      {
        japanese: "最近のウィルスは強力で、プログラムを実行しようがしまいが、ページを見るだけで感染するらしい。",
        reading: "さいきんのウィルスはきょうりょくで、プログラムをじっこうしようがしまいが、ページをみるだけでかんせんするらしい。",
        english: "Recent viruses are so strong that it doesn't matter whether you run program or not, will spread just by looking at page.",
        breakdown: "実行しようがしまいが (whether execute or not). する→しよう + が + しまい + が."
      }
    ],
    notes: "Formation: Regular volitional + が + Negative volitional (まい) + が. 食べる: 食べようが食べまいが (whether eat or not). 行く: 行こうが行くまいが (whether go or not). する: しようがしまいが (whether do or not). Pattern shows indifference: action doesn't matter / has no bearing / no relation. Very formal/literary. Common with: 関係ない (no relation), しかない (no choice but). Both volitionals need が particle. Can also use: であろうがなかろうが (whether is or not - formal).",
    relatedGrammar: ["tk-advanced-017", "tk-advanced-019"],
    tags: ["volitional", "whether-or-not", "indifference", "formal", "lack-of-relation"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/advanced_volitional" }]
  },

  {
    grammarId: "tk-advanced-019",
    title: "Formal likelihood with であろう",
    titleJapanese: "形式的推量「であろう」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.7",
    taeKimOrder: 111,
    explanation: "であろう uses volitional of ある from である. Even more formal than でしょう. Expresses likelihood or supposition in very formal/literary contexts. Common in formal speeches, academic writing, official documents.",
    structure: "Noun/Adj/Verb + であろう\nVery formal tone",
    examples: [
      {
        japanese: "今後50年、人間が直面するであろう問題に正面から向き合って、自ら解決をはかる。",
        reading: "こんご50ねん、にんげんがちょくめんするであろうもんだいにしょうめんからむきあって、みずからかいけつをはかる。",
        english: "Directly approach problems that humans will likely encounter in next 50 years and devise solutions ourselves.",
        breakdown: "直面するであろう (will likely face). する + であろう. Formal supposition about future."
      },
      {
        japanese: "生徒数減少の現在、学科の新設は困難であろうが、改革が求められている。",
        reading: "せいとすうげんしょうのげんざい、がっかのしんせつはこんなんであろうが、かいかくがもとめられている。",
        english: "With current decreasing student numbers, setting up new courses will likely be difficult but reform is demanded.",
        breakdown: "困難であろう (likely be difficult). 困難 + であろう. Formal conjecture."
      }
    ],
    notes: "Formation: Attach であろう to noun/adjective/verb. From である + volitional of ある (あろう). More formal than でしょう/だろう. Step above in formality hierarchy: だろう (casual) → でしょう (polite) → であろう (very formal). Common in: academic papers, formal speeches, official documents, news articles, formal writing. Shows: supposition, likelihood, probability. Often with: であろうが (although likely), であろうと (even if likely). Not used in casual conversation.",
    relatedGrammar: ["tk-essential-028", "tk-advanced-001", "tk-advanced-020"],
    tags: ["であろう", "likelihood", "formal", "supposition", "literary"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/advanced_volitional" }]
  },

  {
    grammarId: "tk-advanced-020",
    title: "Volitional for い-adjectives with かろう",
    titleJapanese: "い形容詞の意向形「かろう」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.7",
    taeKimOrder: 112,
    explanation: "かろう is very old-fashioned volitional for negatives and i-adjectives. Only in formal and literary contexts. Remove final い and attach かろう. Often in 〜かろうが〜かろうが pattern (whether X or Y). Extremely rare in modern speech.",
    structure: "I-adj: remove い + かろう\nではない→ではなかろう",
    examples: [
      {
        japanese: "どんな商品でもネットで販売するだけで売上が伸びるというものではなかろう。",
        reading: "どんなしょうひんでもネットではんばいするだけでうりあげがのびるというものではなかろう。",
        english: "It's not necessarily the case that sales go up just by selling any type of product on the net.",
        breakdown: "ではなかろう (probably isn't). ではない→ではなかろう. Formal negative supposition."
      },
      {
        japanese: "運動を始めるのが早かろうが遅かろうが、健康にいいというのは変わりません。",
        reading: "うんどうをはじめるのがはやかろうがおそかろうが、けんこうにいいというのはかわりません。",
        english: "Whether you start exercising early or late, fact that it's good for health doesn't change.",
        breakdown: "早かろうが遅かろうが (whether early or late). 早い→早かろう, 遅い→遅かろう."
      }
    ],
    notes: "Formation: I-adjective remove い + かろう. 早い→早かろう, 遅い→遅かろう. Negative: ではない→ではなかろう. Very old-fashioned - only formal/literary contexts. Modern alternative: でしょう/だろう. Common pattern: 〜かろうが〜かろうが (whether X or Y - doesn't matter). Can also: であろうがなかろうが (whether is or not). Extremely formal - academic writing, classical literature, formal speeches. NOT for daily conversation. Often shows indifference when paired with が.",
    relatedGrammar: ["tk-advanced-017", "tk-advanced-018", "tk-advanced-019"],
    tags: ["かろう", "volitional", "i-adjective", "archaic", "formal"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/advanced_volitional" }]
  },

  {
    grammarId: "tk-advanced-021",
    title: "Riddled with だらけ",
    titleJapanese: "だらけ",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.8",
    taeKimOrder: 113,
    explanation: "だらけ expresses something riddled everywhere with something. Generally negative connotation. Attach to noun, result works as regular noun. Shows abundance but usually undesirable things. Common: 間違いだらけ (riddled with mistakes), ゴミだらけ (garbage everywhere), 埃だらけ (covered in dust), 傷だらけ (covered in scratches).",
    structure: "Noun + だらけ\nFunctions as noun",
    examples: [
      {
        japanese: "このドキュメントは間違いだらけで、全然役に立たない。",
        reading: "このドキュメントはまちがいだらけで、ぜんぜんやくにたたない。",
        english: "This document is riddled with mistakes and is not useful at all.",
        breakdown: "間違いだらけ (riddled with mistakes). 間違い + だらけ. Full of errors."
      },
      {
        japanese: "携帯を2年間使ってたら、傷だらけになった。",
        reading: "けいたいを2ねんかんつかってたら、きずだらけになった。",
        english: "After using cell phone for two years, it became covered with scratches.",
        breakdown: "傷だらけ (covered with scratches). 傷 + だらけ. Lots of damage."
      },
      {
        japanese: "この埃だらけのテレビをちゃんと拭いてくれない？",
        reading: "このほこりだらけのテレビをちゃんとふいてくれない？",
        english: "Can you properly dust this TV completely covered in dust?",
        breakdown: "埃だらけの (covered in dust). 埃 + だらけ + の. Modifies TV with の."
      }
    ],
    notes: "Formation: Noun + だらけ. Result is noun. Uses の to modify: 間違いだらけの文書 (mistake-riddled document). Usually negative: ゴミだらけ (garbage everywhere), 血だらけ (covered in blood), 泥だらけ (covered in mud). Means: riddled with / covered in / full of. Functions as noun - not adjective. Can use に particle: 傷だらけになる (become covered in scratches). Common expressions: 間違いだらけ (mistakes), 借金だらけ (debts), 傷だらけ (scratches/wounds).",
    relatedGrammar: ["tk-advanced-022"],
    tags: ["だらけ", "riddled", "covered", "abundance", "negative"],
    difficulty: 3,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/covered" }]
  },

  {
    grammarId: "tk-advanced-022",
    title: "Covered with まみれ",
    titleJapanese: "まみれ",
    jlptLevel: "N2",
    category: "Advanced Topics",
    taeKimSection: "6.8",
    taeKimOrder: 114,
    explanation: "まみれ similar to だらけ but only for physical objects that literally cover something. Cannot use for abstract (間違いまみれ ✗) or things that don't actually cover (ゴミまみれ ✗). Only for liquids, dust, and substances that physically coat surface. Blood, oil, sweat, mud, etc. More specific than だらけ.",
    structure: "Noun + まみれ\nOnly physical coverings",
    examples: [
      {
        japanese: "彼は油まみれになりながら、車の修理に頑張りました。",
        reading: "かれはあぶらまみれになりながら、くるまのしゅうりにがんばりました。",
        english: "While becoming covered in oil, he worked hard at fixing the car.",
        breakdown: "油まみれ (covered in oil). Physical substance coating the person."
      },
      {
        japanese: "たった１キロを走っただけで、汗まみれになるのは情けない。",
        reading: "たった１キロをはしっただけで、あせまみれになるのはなさけない。",
        english: "It's pitiful that one gets covered in sweat from running just 1 kilometer.",
        breakdown: "汗まみれ (covered in sweat). Liquid covering the body."
      }
    ],
    notes: "Formation: Noun + まみれ. Only physical substances that literally cover surface. OK: 血まみれ (blood), 油まみれ (oil), 汗まみれ (sweat), 泥まみれ (mud), 埃まみれ (dust). NOT OK: 間違いまみれ (mistakes - not physical), ゴミまみれ (garbage - doesn't coat surface). Key difference from だらけ: だらけ = riddled/littered (can be abstract), まみれ = physically covering surface (must be tangible coating). Grammatically works same as だらけ - functions as noun, uses の to modify: 血まみれの服 (blood-covered clothes).",
    relatedGrammar: ["tk-advanced-021", "tk-advanced-023"],
    tags: ["まみれ", "covered", "physical", "coating"],
    difficulty: 4,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/covered" }]
  },

  {
    grammarId: "tk-advanced-023",
    title: "Entirely with ずくめ",
    titleJapanese: "ずくめ",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.8",
    taeKimOrder: 115,
    explanation: "ずくめ describes something applying to whole thing - entirely/completely/from head to toe. Dictionary definition: 何から何まで、そればかり (everything, nothing but that). Rarely used - usually with colors for clothing (黒ずくめ all in black) or abstract concepts (いいことずくめ entirely good things). Different from だらけ/まみれ - not about covering but about totality.",
    structure: "Noun + ずくめ\nRarely used, very specific",
    examples: [
      {
        japanese: "白ずくめ団体は去年ニュースになっていた。",
        reading: "しろずくめだんたいはきょねんニュースになっていた。",
        english: "The organization dressed all in white was on the news last year.",
        breakdown: "白ずくめ (all in white). Completely dressed in white from head to toe."
      },
      {
        japanese: "このシェークは、おいしいし、栄養たっぷりで体にいいですから、いいことずくめですよ。",
        reading: "このシェークは、おいしいし、えいようたっぷりでからだにいいですから、いいことずくめですよ。",
        english: "This shake is tasty and filled with nutrients, it's good for your body so it's entirely good things.",
        breakdown: "いいことずくめ (entirely good things). Everything about it is good - complete positive."
      }
    ],
    notes: "Formation: Noun + ずくめ. Means: entirely X / nothing but X / all X. Common usage: Colors for clothing (黒ずくめ all in black, 白ずくめ all in white). Abstract concepts (いいことずくめ all good things, うそずくめ all lies). Very rare in conversation - usually literature or formal contexts. Grammatically same as だらけ/まみれ - functions as noun. Different meanings: だらけ = riddled with (negative), まみれ = covered in (physical), ずくめ = entirely/completely (totality). Check Google Images for 黒ずくめ to see visual examples.",
    relatedGrammar: ["tk-advanced-021", "tk-advanced-022"],
    tags: ["ずくめ", "entirely", "completely", "totality"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/covered" }]
  },

  {
    grammarId: "tk-advanced-024",
    title: "Instant action with が早いか",
    titleJapanese: "即時「が早いか」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.9",
    taeKimOrder: 116,
    explanation: "が早いか describes something happening the instant something else occurred - almost simultaneous. Strong emphasis on immediacy. Similar to とたんに but emphasizes how soon. Rarely used outside JLPT. Curious grammar: が particle comes right after verb. Can use non-past or past tense of first verb.",
    structure: "Verb (dict/past) + が早いか\nが after verb (special case)",
    examples: [
      {
        japanese: "彼女は、教授の姿を見るが早いか、教室から逃げ出した。",
        reading: "かのじょは、きょうじゅのすがたをみるがはやいか、きょうしつからにげだした。",
        english: "The instant (she) saw the professor's figure, (she) ran away from the classroom.",
        breakdown: "見るが早いか (the instant saw). Immediate action following sight."
      },
      {
        japanese: "「食べてみよう」と言うが早いか、口の中に放り込んだ。",
        reading: "「たべてみよう」というがはやいか、くちのなかにほうりこんだ。",
        english: "The instant (he) said 'let's try eating it', he threw (it) into his mouth.",
        breakdown: "言うが早いか (instant said). Action simultaneous with words."
      }
    ],
    notes: "Formation: Verb dictionary form + が早いか OR Verb past + が早いか. 言う→言うが早いか or 言った→言ったが早いか. Special: が particle directly after verb (only for this grammar). Must be: Events directly related, Actually happened (past tense), Sequential actions. Emphasizes: simultaneity, immediacy, speed of reaction. Rarely used except: JLPT tests, literature, formal writing. Similar to: とたんに (but less emphasis on immediacy). Very formal/literary tone.",
    relatedGrammar: ["tk-special-026", "tk-advanced-025"],
    tags: ["が早いか", "instant", "immediate", "simultaneous", "formal"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/proximity" }]
  },

  {
    grammarId: "tk-advanced-025",
    title: "Right after with や／や否や",
    titleJapanese: "直後「や／や否や」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.9",
    taeKimOrder: 117,
    explanation: "や or や否や (やいなや) describes what happened right after verb. Essentially same as が早いか. 否 (いな) means 'no' (like in 否定). Literal: 'whether action taken or not' - second action happens before you determine if first really happened. Not used in regular conversation. Usually past tense for completed events, can use present for regular occurrences.",
    structure: "Verb (dict) + や\nVerb (dict) + や否や",
    examples: [
      {
        japanese: "私の顔を見るや、何か言おうとした。",
        reading: "わたしのかおをみるや、なにかいおうとした。",
        english: "(He) tried to say something as soon as he saw my face.",
        breakdown: "見るや (as soon as saw). Immediate reaction to seeing face."
      },
      {
        japanese: "搭乗のアナウンスが聞こえるや否や、みんながゲートの方へ走り出した。",
        reading: "とうじょうのアナウンスがきこえるやいなや、みんながゲートのほうへはしりだした。",
        english: "As soon as the announcement to board was audible, everybody started running toward the gate.",
        breakdown: "聞こえるや否や (instant heard). Immediate mass action following announcement."
      }
    ],
    notes: "Formation: Verb dictionary form + や OR + や否や (やいなや). 見る→見るや/見るや否や, する→するや/するや否や. 否 read as いな (means 'no'). Literal meaning: whether happened or not - action so fast can't confirm. Almost always past tense (completed events). Can use present for recurring patterns. Same meaning as が早いか. Not used in conversation - literary/formal/JLPT only. Second verb usually past tense.",
    relatedGrammar: ["tk-advanced-024", "tk-advanced-026"],
    tags: ["や", "や否や", "right-after", "immediate", "literary"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/proximity" }]
  },

  {
    grammarId: "tk-advanced-026",
    title: "Repeatedly right after with そばから",
    titleJapanese: "繰り返し「そばから」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.9",
    taeKimOrder: 118,
    explanation: "そばから describes event happening right after another BUT implies recurring pattern. Unlike が早いか/や否や which are one-time, そばから is for repeated cycles. Classic example: clean room → gets dirty again → clean → dirty again. Shows frustration at repeated pattern. Following event usually non-past (ongoing pattern).",
    structure: "Verb (dict) + そばから\nImplies repetition",
    examples: [
      {
        japanese: "子供が掃除するそばから散らかすから、もうあきらめたくなった。",
        reading: "こどもがそうじするそばからちらかすから、もうあきらめたくなった。",
        english: "The child messes up (the room) [repeatedly] as soon as I clean so I already became wanting to give up.",
        breakdown: "掃除するそばから散らかす (messes up right after cleaning - repeatedly). Frustrating cycle."
      },
      {
        japanese: "教科書を読んだそばから忘れてしまうので勉強ができない。",
        reading: "きょうかしょをよんだそばからわすれてしまうのでべんきょうができない。",
        english: "Forget [repeatedly] right after I read the textbook so I can't study.",
        breakdown: "読んだそばから忘れる (forget right after reading - pattern). Repeated frustration."
      }
    ],
    notes: "Formation: Verb dictionary form + そばから. Rare: past tense + そばから also acceptable. Key difference from が早いか/や否や: そばから = recurring pattern/repeated cycle. が早いか/や否や = one-time immediate action. Shows frustration at repetitive futility. Second verb usually non-past (ongoing pattern not specific past). Common contexts: cleaning → mess, study → forget, save money → spend. Emphasizes cyclical nature causing exasperation.",
    relatedGrammar: ["tk-advanced-024", "tk-advanced-025"],
    tags: ["そばから", "repeatedly", "pattern", "right-after", "frustration"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/proximity" }]
  },

  {
    grammarId: "tk-advanced-027",
    title: "Unexpected result with 思いきや",
    titleJapanese: "意外「思いきや」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.10",
    taeKimOrder: 119,
    explanation: "思いきや expresses thoughts that turned out completely wrong - much to your astonishment. Use like quotation と思う but replace with 思いきや. No tense in 思いきや - original thought implicitly past since results already contrary. Surprisingly heard in real life despite being from books. Shows gap between expectation and reality.",
    structure: "[thought] + と思いきや\nNo tense on 思いきや",
    examples: [
      {
        japanese: "昼間だから絶対込んでいると思いきや、一人もいなかった。",
        reading: "ひるまだからぜったいこんでいるとおもいきや、ひとりもいなかった。",
        english: "Despite having thought that it must be crowded since it was afternoon, (surprisingly) not a single person was there.",
        breakdown: "込んでいると思いきや (thought would be crowded but). Complete opposite of expectation."
      },
      {
        japanese: "このレストランは安いと思いきや、会計は5千円以上だった！",
        reading: "このレストランはやすいとおもいきや、かいけいは5せんえんいじょうだった！",
        english: "Thought this restaurant would be cheap but (surprisingly) the bill was over 5,000 yen!",
        breakdown: "安いと思いきや (thought cheap but). Shocking price difference from expectation."
      }
    ],
    notes: "Formation: [thought/expectation] + と思いきや. Same as quotation と思う structure. No tense conjugation on 思いきや itself. Original thought implicitly past (since reality already revealed). Shows: surprise, astonishment, expectations betrayed. Reality very different from what thought. Actually heard in real conversations (not just literary). Expresses dramatic gap between expectation and reality. Often followed by actual result in contrast.",
    relatedGrammar: ["tk-essential-040"],
    tags: ["思いきや", "unexpected", "contrary", "surprise", "expectation"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/others" }]
  },

  {
    grammarId: "tk-advanced-028",
    title: "While doing with 〜がてら",
    titleJapanese: "同時「〜がてら」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.10",
    taeKimOrder: 120,
    explanation: "がてら indicates two actions done at same time - main action and side action. Formal and seldom-used. Different from ながら: がてら means some/all time spent on main action also used for side thing. No verb required - attach to noun and する inferred. Can also attach to verb stem. Action with がてら is main, following is aside.",
    structure: "Noun + がてら (する inferred)\nVerb stem + がてら",
    examples: [
      {
        japanese: "散歩がてら、タバコを買いに行きました。",
        reading: "さんぽがてら、タバコをかいにいきました。",
        english: "While taking a stroll, I also used that time to buy cigarettes.",
        breakdown: "散歩がてら (while strolling - main action). Buying cigarettes is side activity."
      },
      {
        japanese: "博物館を見がてらに、お土産を買うつもりです。",
        reading: "はくぶつかんをみがてらに、おみやげをかうつもりです。",
        english: "While seeing the museum, I plan to also use that time to buy souvenirs.",
        breakdown: "見がてら (while seeing - main). Souvenirs are side purchase during museum visit."
      }
    ],
    notes: "Formation: Noun + がてら (散歩→散歩がてら, する inferred). Verb stem + がてら (見る→見がてら). Main action gets がてら, following is aside/secondary. Different from ながら: ながら = two exactly concurrent actions (same time), がてら = time spent on main also used for side thing. Very formal, seldom used. Can attach directly to noun without verb. Common with: 散歩がてら (while strolling), 買い物がてら (while shopping), 見がてら (while looking).",
    relatedGrammar: ["tk-special-027", "tk-advanced-029"],
    tags: ["がてら", "while-doing", "concurrent", "formal", "aside"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/others" }]
  },

  {
    grammarId: "tk-advanced-029",
    title: "Bad result with 〜あげく",
    titleJapanese: "悪結果「〜あげく」",
    jlptLevel: "N1",
    category: "Advanced Topics",
    taeKimSection: "6.10",
    taeKimOrder: 121,
    explanation: "あげく (挙句) describes result, usually negative, after great effort. Shows final outcome of prolonged action. Past tense verb since action completed. Treated as noun - needs の particle to modify noun. あげくの果て is stronger version. Emphasizes long struggle leading to disappointing end.",
    structure: "Verb past + あげく\nNoun + のあげく",
    examples: [
      {
        japanese: "事情を2時間かけて説明したあげく、納得してもらえなかった。",
        reading: "じじょうを2じかんかけてせつめいしたあげく、なっとくしてもらえなかった。",
        english: "(After a great deal of) explaining the circumstances for 2 hours, (in the end), couldn't receive understanding.",
        breakdown: "説明したあげく (after explaining). 2 hours of effort resulted in failure."
      },
      {
        japanese: "先生と相談のあげく、退学をしないことにした。",
        reading: "せんせいとそうだんのあげく、たいがくをしないことにした。",
        english: "(After much) consulting with teacher, (in the end), decided on not dropping out of school.",
        breakdown: "相談のあげく (after consultation). Long discussion led to decision."
      }
    ],
    notes: "Formation: Verb past tense + あげく (考えた→考えたあげく). Noun + のあげく (けんか→けんかのあげく). Usually negative results after effort. Shows: great effort, long process, disappointing outcome. Treated as noun - needs の to modify: あげくの結果 (result in the end). Stronger version: あげくの果て (in the bitter end). Used for: completed actions (past tense), prolonged struggles, unfortunate endings. Emphasizes effort was significant but result poor.",
    relatedGrammar: ["tk-special-026"],
    tags: ["あげく", "bad-result", "after-effort", "negative-outcome", "formal"],
    difficulty: 5,
    resources: [{ name: "Tae Kim's Guide", url: "http://www.guidetojapanese.org/learn/grammar/others" }]
  }
];

export default grammarSeedData;
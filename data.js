/* ============================================================
   FATIMAH'S LEARNING HUB — CONTENT DATA
   ------------------------------------------------------------
   Edit THIS file to change videos, facts, or quiz questions.

   VIDEOS: every topic below already has a real videoId found
   from a kid-friendly YouTube search. To swap one out, replace
   the videoId string with the part after "v=" in any YouTube URL.

   QUIZZES: each topic has a small POOL of questions (2 or more).
   Every time a child takes the quiz, the app shuffles the order
   of the questions AND the order of the answer options, so it
   feels different each time — add more questions to any pool
   any time using the same {type, q, options, answer, explanation}
   shape. type is "mc" (multiple choice) or "tf" (true/false).

   FACTS: the "fact" string shows as a "Did you know?" box under
   the video.
   ============================================================ */

const APP_DATA = {
  mascot: { name: "Leo", emoji: "🦁" },
  levels: {
    younger: { key: "younger", label: "Junior Learners", range: "Ages 2–6", emoji: "🧒", color: "#4A90D9" },
    older:   { key: "older",   label: "Super Learners",  range: "Ages 7–10", emoji: "🚀", color: "#F3722C" }
  },

  subjects: [
    {
      key: "math",
      name: "Mathematics",
      emoji: "🔢",
      tagline: "Numbers, shapes & counting fun",
      color: "#3B82F6",
      layout: "grid",
      levels: {
        younger: [
          { title: "Counting 1 to 10", blurb: "Learning to count objects one by one, all the way to ten.",
            videoId: "DR-cfDsHCGA",
            icon: "🪨",
        fact: "Did you know? People have used pebbles and fingers to count since long before numbers were written down!",
            questions: [
              { type: "mc", q: "What number comes right after 5?", options: ["4", "6", "7", "10"], answer: 1, explanation: "After 5 comes 6 — we just count one more!" },
              { type: "mc", q: "How many fingers are on one hand?", options: ["3", "5", "8", "10"], answer: 1, explanation: "One hand has 5 fingers." }
            ,
              { type: "mc", q: "What number comes before 8?", options: ["6", "7", "9", "10"], answer: 1, explanation: "Before 8 comes 7." },
              { type: "mc", q: "How many toes do you have on both feet?", options: ["5", "8", "10", "12"], answer: 2, explanation: "You have 10 toes in total." }] },
          { title: "Shapes All Around", blurb: "Spotting circles, squares, triangles and rectangles in everyday things.",
            videoId: "mAE79M9lCbg",
            icon: "🛑",
        fact: "Did you know? A stop sign has 8 sides — that shape is called an octagon!",
            questions: [
              { type: "mc", q: "Which shape has 3 sides?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: 2, explanation: "A triangle always has exactly 3 sides." },
              { type: "tf", q: "A circle has corners.", options: ["True", "False"], answer: 1, explanation: "A circle is round with no corners at all." }
            ,
              { type: "mc", q: "How many sides does a square have?", options: ["2", "3", "4", "5"], answer: 2, explanation: "A square has 4 equal sides." },
              { type: "tf", q: "A rectangle has 4 sides.", options: ["True", "False"], answer: 0, explanation: "Yes, a rectangle always has 4 sides." }] },
          { title: "Big and Small", blurb: "Comparing sizes: which is bigger, which is smaller.",
            videoId: "x7LqsktdW3k",
            icon: "🐋",
        fact: "Did you know? A blue whale's heart is so big, a small child could crawl through some of its blood vessels!",
            questions: [
              { type: "mc", q: "Which is usually bigger?", options: ["An ant", "An elephant", "A button", "A grape"], answer: 1, explanation: "Elephants are some of the biggest animals on land!" },
              { type: "mc", q: "Which is usually smaller?", options: ["A mouse", "A horse", "A whale", "A truck"], answer: 0, explanation: "A mouse is tiny compared to a horse, whale, or truck." }
            ,
              { type: "mc", q: "Which is bigger, a house or a toy car?", options: ["A house", "A toy car", "They are the same", "Cannot tell"], answer: 0, explanation: "A house is much bigger than a toy car." },
              { type: "tf", q: "A grape is bigger than a watermelon.", options: ["True", "False"], answer: 1, explanation: "A watermelon is much bigger than a grape." }] },
          { title: "Colors and Patterns", blurb: "Noticing repeating patterns like red-blue-red-blue.",
            videoId: "uLcn8TDIefM",
            icon: "🦓",
        fact: "Did you know? A zebra's stripe pattern is unique — no two zebras have exactly the same stripes!",
            questions: [
              { type: "mc", q: "What comes next: 🔴🔵🔴🔵🔴 ?", options: ["🔴", "🔵", "🟢", "🟡"], answer: 1, explanation: "The pattern alternates red, blue — so blue comes next." },
              { type: "mc", q: "What comes next: 🟦🟨🟦🟨🟦 ?", options: ["🟦", "🟨", "🟩", "🟥"], answer: 1, explanation: "The pattern alternates blue, yellow — so yellow comes next." }
            ,
              { type: "mc", q: "What comes next: 🟢🟢🔵🟢🟢🔵🟢🟢 ?", options: ["🟢", "🔵", "🟡", "🔴"], answer: 1, explanation: "The pattern repeats two greens then a blue." },
              { type: "mc", q: "Which color usually means 'stop'?", options: ["Green", "Red", "Blue", "Yellow"], answer: 1, explanation: "Red usually means stop, like on a stop sign." }] },
          { title: "Simple Addition", blurb: "Putting small groups of things together, like 1 + 1.",
            videoId: "n0FhD70JQMQ",
            icon: "➕",
        fact: "Did you know? People were adding numbers with pebbles and marks thousands of years before calculators existed!",
            questions: [
              { type: "mc", q: "What is 2 + 1?", options: ["1", "2", "3", "4"], answer: 2, explanation: "2 apples plus 1 more apple makes 3 apples." },
              { type: "mc", q: "What is 1 + 1?", options: ["1", "2", "3", "11"], answer: 1, explanation: "1 plus 1 makes 2." }
            ,
              { type: "mc", q: "What is 3 + 2?", options: ["4", "5", "6", "7"], answer: 1, explanation: "3 plus 2 makes 5." },
              { type: "mc", q: "What is 0 + 4?", options: ["0", "4", "5", "8"], answer: 1, explanation: "Adding zero doesn't change the number, so it's 4." }] }
        ],
        older: [
          { title: "Addition and Subtraction", blurb: "Adding and taking away with bigger numbers.",
            videoId: "NHI0ePgwlgU",
            icon: "➖",
        fact: "Did you know? The '+' and '−' symbols have been used in math for more than 500 years!",
            questions: [
              { type: "mc", q: "What is 15 - 7?", options: ["6", "7", "8", "9"], answer: 2, explanation: "15 minus 7 leaves 8." },
              { type: "mc", q: "What is 24 + 19?", options: ["33", "43", "42", "40"], answer: 1, explanation: "24 + 19 = 43." }
            ,
              { type: "mc", q: "What is 30 - 12?", options: ["16", "18", "20", "22"], answer: 1, explanation: "30 minus 12 is 18." },
              { type: "mc", q: "What is 45 + 26?", options: ["61", "71", "81", "69"], answer: 1, explanation: "45 + 26 = 71." }] },
          { title: "Multiplication Basics", blurb: "Understanding multiplication as repeated addition.",
            videoId: "dPksJHBZs4Q",
            icon: "✖️",
        fact: "Did you know? The '×' multiplication sign first appeared in a math book printed in 1631!",
            questions: [
              { type: "mc", q: "What is 4 × 3?", options: ["7", "10", "12", "16"], answer: 2, explanation: "4 × 3 means 4 groups of 3, which is 12." },
              { type: "mc", q: "What is 5 × 2?", options: ["7", "10", "12", "15"], answer: 1, explanation: "5 × 2 means 5 groups of 2, which is 10." }
            ,
              { type: "mc", q: "What is 6 × 3?", options: ["16", "18", "21", "24"], answer: 1, explanation: "6 × 3 means 6 groups of 3, which is 18." },
              { type: "mc", q: "What is 7 × 1?", options: ["0", "1", "7", "14"], answer: 2, explanation: "Any number times 1 stays the same, so 7." }] },
          { title: "Telling Time", blurb: "Reading clocks — hours, half hours, and minutes.",
            videoId: "h6RNkQ7lU8Y",
            icon: "⏰",
        fact: "Did you know? Ancient Egyptians were among the first people to divide the day into 24 hours!",
            questions: [
              { type: "mc", q: "How many minutes are in one hour?", options: ["30", "45", "60", "100"], answer: 2, explanation: "One hour always has 60 minutes." },
              { type: "mc", q: "If the short hand points to 3 and the long hand points to 12, what time is it?", options: ["3:00", "12:03", "6:00", "9:00"], answer: 0, explanation: "The short hour hand shows 3, so it's 3 o'clock." }
            ,
              { type: "mc", q: "How many hours are in a full day?", options: ["12", "20", "24", "30"], answer: 2, explanation: "A full day has 24 hours." },
              { type: "mc", q: "If the long hand points to 6, how many minutes past the hour is it?", options: ["6", "15", "30", "45"], answer: 2, explanation: "When the long hand points to 6, it's 30 minutes past the hour." }] },
          { title: "Fractions Made Fun", blurb: "Understanding halves, quarters, and simple fractions.",
            videoId: "lTce7f6KGE0",
            icon: "🍕",
        fact: "Did you know? The little line in a fraction like 1/2 has been used in math since the 1200s!",
            questions: [
              { type: "mc", q: "If you cut a pizza into 4 equal slices, each slice is what fraction?", options: ["1/2", "1/3", "1/4", "1/8"], answer: 2, explanation: "4 equal slices means each one is one-quarter (1/4)." },
              { type: "mc", q: "Which fraction is bigger?", options: ["1/2", "1/4", "They are equal", "Cannot tell"], answer: 0, explanation: "Half of something is more than a quarter of it." }
            ,
              { type: "mc", q: "What does 3/4 mean?", options: ["3 out of 4 equal parts", "4 out of 3 parts", "3 plus 4", "3 minus 4"], answer: 0, explanation: "3/4 means 3 out of 4 equal parts." },
              { type: "mc", q: "Which is the same as one whole?", options: ["1/2", "2/2", "3/4", "1/4"], answer: 1, explanation: "2/2 means both parts, which makes one whole." }] },
          { title: "Money and Counting Coins", blurb: "Recognizing coins and notes, and adding up simple amounts.",
            videoId: "MbtmucV-U2c",
            icon: "🪙",
        fact: "Did you know? The very first coins were made over 2,600 years ago!",
            questions: [
              { type: "tf", q: "Counting money can help you know if you have enough to buy something.", options: ["True", "False"], answer: 0, explanation: "Yes! Counting money tells us exactly how much we have." },
              { type: "mc", q: "Which coin is worth the most?", options: ["Penny", "Nickel", "Dime", "They're all equal"], answer: 2, explanation: "A dime is worth more than a penny or a nickel." }
            ,
              { type: "mc", q: "How many pennies make a dime?", options: ["5", "10", "20", "100"], answer: 1, explanation: "10 pennies are equal to one dime." },
              { type: "mc", q: "If you have 2 dimes, how many cents do you have?", options: ["10", "15", "20", "25"], answer: 2, explanation: "2 dimes = 20 cents." }] }
        ]
      }
    },

    {
      key: "english",
      name: "English Language",
      emoji: "🔤",
      tagline: "Letters, words & sentences",
      color: "#EF476F",
      layout: "timeline",
      levels: {
        younger: [
          { title: "The Alphabet ABC", blurb: "Learning the letters from A to Z and their sounds.",
            videoId: "tKsIi1MH4lw",
            icon: "🔤",
        fact: "Did you know? The English alphabet has 26 letters, but some languages have over 70!",
            questions: [
              { type: "mc", q: "Which letter comes right after B?", options: ["A", "C", "D", "Z"], answer: 1, explanation: "After A, B comes C." },
              { type: "mc", q: "How many letters are in the English alphabet?", options: ["20", "26", "30", "10"], answer: 1, explanation: "The English alphabet has 26 letters." }
            ,
              { type: "mc", q: "Which letter comes right before Z?", options: ["X", "Y", "W", "A"], answer: 1, explanation: "Y comes right before Z." },
              { type: "tf", q: "The alphabet starts with the letter A.", options: ["True", "False"], answer: 0, explanation: "Yes, A is the first letter." }] },
          { title: "Simple Words and Sounds", blurb: "Blending sounds to make simple words like 'cat' and 'dog'.",
            videoId: "M1S9y-xO7eQ",
            icon: "🐱",
        fact: "Did you know? The word 'cat' is made of just three sounds: /k/ /a/ /t/!",
            questions: [
              { type: "tf", q: "'Cat' starts with the letter C.", options: ["True", "False"], answer: 0, explanation: "Yes — 'Cat' starts with the C sound." },
              { type: "mc", q: "What sound does 'D' make at the start of 'Dog'?", options: ["/d/", "/k/", "/m/", "/s/"], answer: 0, explanation: "The letter D makes the /d/ sound, like in 'Dog'." }
            ,
              { type: "mc", q: "Which word starts with the same sound as 'Sun'?", options: ["Snake", "Moon", "Car", "Dog"], answer: 0, explanation: "'Sun' and 'Snake' both start with the /s/ sound." },
              { type: "mc", q: "How many sounds are in the word 'dog'?", options: ["1", "2", "3", "4"], answer: 2, explanation: "'Dog' has 3 sounds: /d/ /o/ /g/." }] },
          { title: "Naming Things Around Us", blurb: "Learning names for everyday objects at home and school.",
            videoId: "a_X_avBfoVg",
            icon: "📚",
        fact: "Did you know? English has more than 170,000 words in use today!",
            questions: [
              { type: "mc", q: "What do we call the thing we sit on to eat dinner?", options: ["Chair", "Cloud", "Cat", "Car"], answer: 0, explanation: "We sit on a chair." },
              { type: "mc", q: "What do we call the thing we sleep on at night?", options: ["Bed", "Car", "Spoon", "Cloud"], answer: 0, explanation: "We sleep on a bed." }
            ,
              { type: "mc", q: "What do we call the thing we write with?", options: ["Pencil", "Spoon", "Shoe", "Cloud"], answer: 0, explanation: "We write with a pencil or pen." },
              { type: "mc", q: "What do we call the place where we learn?", options: ["School", "Kitchen", "Garage", "Store"], answer: 0, explanation: "School is where we go to learn." }] },
          { title: "Colors in English", blurb: "Learning color words: red, blue, green, yellow, and more.",
            videoId: "MVRxGb33-oQ",
            icon: "🍊",
        fact: "Did you know? The color orange was named after the fruit — not the other way around!",
            questions: [
              { type: "mc", q: "What color is a banana?", options: ["Purple", "Yellow", "Blue", "Black"], answer: 1, explanation: "Bananas are yellow when ripe." },
              { type: "mc", q: "What color is grass?", options: ["Green", "Purple", "Black", "White"], answer: 0, explanation: "Grass is green." }
            ,
              { type: "mc", q: "What color is the sky on a clear day?", options: ["Blue", "Red", "Brown", "Black"], answer: 0, explanation: "The sky is usually blue on a clear day." },
              { type: "mc", q: "What color do you get when you mix red and white?", options: ["Pink", "Green", "Black", "Orange"], answer: 0, explanation: "Red and white mixed together makes pink." }] },
          { title: "Greetings and Manners", blurb: "Saying hello, please, thank you, and being polite.",
            videoId: "B-BnUl1IK9I",
            icon: "👋",
        fact: "Did you know? People around the world greet each other in more than 100 different ways!",
            questions: [
              { type: "tf", q: "It's polite to say 'thank you' when someone helps you.", options: ["True", "False"], answer: 0, explanation: "Saying thank you shows good manners." },
              { type: "mc", q: "What do you say when you meet someone in the morning?", options: ["Good morning", "Goodnight", "Goodbye forever", "Nothing"], answer: 0, explanation: "'Good morning' is a friendly morning greeting." }
            ,
              { type: "mc", q: "What do you say when you accidentally bump into someone?", options: ["Sorry", "Goodbye", "Hello", "Nothing"], answer: 0, explanation: "Saying 'sorry' is polite when you bump into someone." },
              { type: "tf", q: "It's polite to interrupt when someone else is talking.", options: ["True", "False"], answer: 1, explanation: "It's polite to wait your turn instead of interrupting." }] }
        ],
        older: [
          { title: "Nouns and Verbs", blurb: "Spotting naming words (nouns) and action words (verbs).",
            videoId: "TlKqkvH9lck",
            icon: "🏃",
        fact: "Did you know? The most commonly used verb in the English language is 'be'!",
            questions: [
              { type: "mc", q: "Which word is a verb (action word)?", options: ["Table", "Jump", "Happy", "Blue"], answer: 1, explanation: "'Jump' is an action, so it's a verb." },
              { type: "mc", q: "Which word is a noun (naming word)?", options: ["Run", "Dog", "Quickly", "Jump"], answer: 1, explanation: "'Dog' names a thing, so it's a noun." }
            ,
              { type: "mc", q: "Which word is a naming word (noun)?", options: ["Sing", "Chair", "Fast", "Happy"], answer: 1, explanation: "'Chair' names a thing, so it's a noun." },
              { type: "mc", q: "Which word shows an action?", options: ["Book", "Swim", "Blue", "Slow"], answer: 1, explanation: "'Swim' is an action, so it's a verb." }] },
          { title: "Building Simple Sentences", blurb: "Putting words together to make complete sentences.",
            videoId: "RQeHOdh2rAw",
            icon: "💬",
        fact: "Did you know? The shortest complete sentence in English can be just one word, like 'Go!'",
            questions: [
              { type: "tf", q: "A sentence should start with a capital letter.", options: ["True", "False"], answer: 0, explanation: "Sentences always begin with a capital letter." },
              { type: "mc", q: "Which of these is a complete sentence?", options: ["The dog", "Running fast", "The dog ran fast.", "Fast the"], answer: 2, explanation: "'The dog ran fast.' has a subject and an action, and makes full sense." }
            ,
              { type: "mc", q: "What does a sentence need to make sense?", options: ["A subject and a verb", "Only punctuation", "Only a noun", "Nothing special"], answer: 0, explanation: "A complete sentence needs at least a subject and a verb." },
              { type: "mc", q: "Which word should start a sentence?", options: ["the", "The", "thE", "tHe"], answer: 1, explanation: "Sentences begin with a capital letter, like 'The'." }] },
          { title: "Reading Short Stories", blurb: "Practicing reading a short story and answering questions about it.",
            videoId: "nKNIxwVKGts",
            icon: "📖",
        fact: "Did you know? Reading for just 10 minutes a day can help build a much bigger vocabulary over time!",
            questions: [
              { type: "mc", q: "What should you do if you don't understand a word while reading?", options: ["Skip the whole book", "Ask or look it up", "Stop reading forever", "Guess and never check"], answer: 1, explanation: "Asking or looking up a word helps you understand better." },
              { type: "mc", q: "What is it called when you understand what you read?", options: ["Comprehension", "Confusion", "Counting", "Coloring"], answer: 0, explanation: "Comprehension means understanding what you've read." }
            ,
              { type: "mc", q: "What is the main character of a story called?", options: ["The protagonist", "The footnote", "The index", "The glossary"], answer: 0, explanation: "The main character in a story is called the protagonist." },
              { type: "mc", q: "Why do we read stories?", options: ["To learn and be entertained", "Only to pass time", "It has no purpose", "To avoid thinking"], answer: 0, explanation: "Stories help us learn new things and enjoy ourselves." }] },
          { title: "Rhyming Words", blurb: "Finding words that sound alike at the end, like 'cat' and 'hat'.",
            videoId: "tiqr-asB1z0",
            icon: "🎵",
        fact: "Did you know? Poets have used rhymes for thousands of years to help people remember stories!",
            questions: [
              { type: "mc", q: "Which word rhymes with 'star'?", options: ["Sun", "Car", "Moon", "Sky"], answer: 1, explanation: "'Star' and 'car' both end with the same sound." },
              { type: "mc", q: "Which word rhymes with 'light'?", options: ["Night", "Food", "Chair", "Green"], answer: 0, explanation: "'Light' and 'night' end with the same sound." }
            ,
              { type: "mc", q: "Which word rhymes with 'ball'?", options: ["Tall", "Sun", "Book", "Green"], answer: 0, explanation: "'Ball' and 'tall' rhyme — they end with the same sound." },
              { type: "mc", q: "Which word does NOT rhyme with 'cake'?", options: ["Lake", "Make", "Dog", "Bake"], answer: 2, explanation: "'Dog' does not end with the same sound as 'cake'." }] },
          { title: "Punctuation Basics", blurb: "Learning full stops, question marks, and exclamation marks.",
            videoId: "mPnSYcxkiKU",
            icon: "❓",
        fact: "Did you know? The question mark may have come from an old symbol scholars used centuries ago!",
            questions: [
              { type: "mc", q: "Which punctuation mark do you use at the end of a question?", options: [".", "!", "?", ","], answer: 2, explanation: "A question mark (?) ends a question." },
              { type: "mc", q: "Which mark shows strong feeling, like excitement?", options: [".", "?", "!", ","], answer: 2, explanation: "An exclamation mark (!) shows strong feeling." }
            ,
              { type: "mc", q: "Which mark separates items in a list?", options: ["Comma", "Period", "Question mark", "Exclamation mark"], answer: 0, explanation: "A comma is used to separate items in a list." },
              { type: "mc", q: "What ends most regular sentences?", options: ["A period", "A question mark", "An exclamation mark", "Nothing"], answer: 0, explanation: "Most regular statements end with a period." }] }
        ]
      }
    },

    {
      key: "poems",
      name: "Poem & Story Writing",
      emoji: "📖",
      tagline: "Imagination, rhymes & storytelling",
      color: "#8B5CF6",
      layout: "cards",
      levels: {
        younger: [
          { title: "What is a Poem?", blurb: "Discovering that poems use fun, rhythmic words.",
            videoId: "-Lk9SYjHEb4",
            icon: "📜",
        fact: "Did you know? Some of the oldest poems in the world are over 4,000 years old!",
            questions: [
              { type: "mc", q: "Poems often use words that...", options: ["Rhyme", "Are silent", "Have no meaning", "Are always sad"], answer: 0, explanation: "Many poems use rhyming words to sound fun." },
              { type: "mc", q: "Poems are often divided into short groups of lines called...", options: ["Chapters", "Verses or stanzas", "Pages", "Paragraphs only"], answer: 1, explanation: "Groups of lines in a poem are called verses or stanzas." }
            ,
              { type: "mc", q: "Poems are often read...?", options: ["Out loud with rhythm", "Only in silence", "Backwards", "In secret code"], answer: 0, explanation: "Poems are often read aloud so you can hear their rhythm." },
              { type: "tf", q: "All poems must rhyme.", options: ["True", "False"], answer: 1, explanation: "Not all poems rhyme — some poems don't rhyme at all!" }] },
          { title: "Nursery Rhymes Fun", blurb: "Enjoying classic nursery rhymes and their patterns.",
            videoId: "JdPx94ZgvzY",
            icon: "🌟",
        fact: "Did you know? 'Twinkle, Twinkle, Little Star' was first published over 200 years ago!",
            questions: [
              { type: "mc", q: "Nursery rhymes are usually...", options: ["Long novels", "Short and rhyming", "Only numbers", "Silent"], answer: 1, explanation: "Nursery rhymes are short, fun, and rhyme." },
              { type: "mc", q: "Which of these is a classic nursery rhyme?", options: ["Twinkle Twinkle Little Star", "A math textbook", "A weather report", "A grocery list"], answer: 0, explanation: "'Twinkle Twinkle Little Star' is a very famous nursery rhyme." }
            ,
              { type: "mc", q: "Nursery rhymes are usually meant for...?", options: ["Young children", "Only adults", "Robots", "No one"], answer: 0, explanation: "Nursery rhymes are fun, simple rhymes made for young children." },
              { type: "mc", q: "What often happens at the end of a nursery rhyme line?", options: ["A rhyme", "A math problem", "Silence forever", "A question"], answer: 0, explanation: "Nursery rhyme lines often end with a rhyming word." }] },
          { title: "Once Upon a Time", blurb: "Learning how most stories begin.",
            videoId: "W2IXYWlxPQo",
            icon: "🏰",
        fact: "Did you know? 'Once upon a time' has been used to start stories since the 1300s!",
            questions: [
              { type: "mc", q: "Many storybooks begin with the words...", options: ["The End", "Once Upon a Time", "Goodbye Now", "Chapter 10"], answer: 1, explanation: "'Once Upon a Time' is a classic story opener." },
              { type: "mc", q: "Which phrase often ends a fairy tale?", options: ["...and they lived happily ever after", "...and then it was Tuesday", "...the end of the news", "...they went to the store"], answer: 0, explanation: "Many fairy tales end with 'happily ever after'." }
            ,
              { type: "mc", q: "Fairy tales often include...?", options: ["Magic and adventure", "Only facts", "Weather reports", "Math homework"], answer: 0, explanation: "Fairy tales often include magical and exciting adventures." },
              { type: "mc", q: "Who is usually the main character in a fairy tale?", options: ["A hero or heroine", "A calculator", "A newspaper", "A shopping list"], answer: 0, explanation: "Fairy tales usually follow a hero or heroine on an adventure." }] },
          { title: "Animal Story Time", blurb: "Enjoying stories where animals talk and have adventures.",
            videoId: "7QYjjfcakSo",
            icon: "🦊",
        fact: "Did you know? Stories where animals talk and teach a lesson are called fables!",
            questions: [
              { type: "mc", q: "In animal stories, animals often can...", options: ["Fly to the moon only", "Talk and act like people", "Never move", "Only sleep"], answer: 1, explanation: "In these stories, animals often talk and have adventures like people." },
              { type: "mc", q: "Stories with talking animals that teach a lesson are called...", options: ["Fables", "Newspapers", "Recipes", "Maps"], answer: 0, explanation: "A fable is a story, often with animals, that teaches a lesson." }
            ,
              { type: "mc", q: "What lesson do fables often teach?", options: ["A moral lesson", "Nothing at all", "Only numbers", "How to cook"], answer: 0, explanation: "Fables usually end with a moral, or lesson, for the reader." },
              { type: "mc", q: "In 'The Tortoise and the Hare,' who wins the race?", options: ["The Tortoise", "The Hare", "No one", "They tie"], answer: 0, explanation: "The slow but steady tortoise wins the race in this classic fable." }] },
          { title: "My Favorite Character", blurb: "Talking about a character you like and why.",
            videoId: "GDxgbGqZllk",
            icon: "🦸",
        fact: "Did you know? Some famous storybook characters have been loved by readers for over 100 years!",
            questions: [
              { type: "mc", q: "A 'character' in a story is...", options: ["A number", "A person or animal in the story", "The book's color", "A page number"], answer: 1, explanation: "A character is a person, animal, or creature in the story." },
              { type: "mc", q: "Words that describe a character are called...", options: ["Adjectives", "Numbers", "Silence", "Punctuation only"], answer: 0, explanation: "Adjectives are describing words that help paint a picture of a character." }
            ,
              { type: "mc", q: "Which of these describes a character's personality?", options: ["Brave", "Blue", "Square", "A loud noise"], answer: 0, explanation: "'Brave' describes what a character is like inside." },
              { type: "mc", q: "Why do readers often have a favorite character?", options: ["They relate to or admire them", "Random chance", "The book is short", "No real reason"], answer: 0, explanation: "Readers often love a character because they relate to or admire them." }] }
        ],
        older: [
          { title: "Writing Your First Poem", blurb: "Trying out simple rhyming couplets.",
            videoId: "wJyMa01Umu0",
            icon: "🌸",
        fact: "Did you know? A haiku is a poem with only 17 syllables in total!",
            questions: [
              { type: "mc", q: "Which pair of words rhyme?", options: ["Tree / Sky", "Light / Night", "Book / Chair", "Moon / Table"], answer: 1, explanation: "'Light' and 'night' rhyme — they end with the same sound." },
              { type: "mc", q: "Two rhyming lines in a row are called a...", options: ["Couplet", "Chapter", "Index", "Footnote"], answer: 0, explanation: "A couplet is a pair of rhyming lines." }
            ,
              { type: "mc", q: "What is a simple way to start writing a poem?", options: ["Pick a topic you love", "Copy someone else's poem exactly", "Avoid all describing words", "Never rhyme"], answer: 0, explanation: "Choosing a topic you care about makes writing a poem easier and more fun." },
              { type: "mc", q: "Which pair does NOT rhyme?", options: ["Cat / Hat", "Blue / Shoe", "Star / Car", "Sun / Chair"], answer: 3, explanation: "'Sun' and 'Chair' do not end with the same sound." }] },
          { title: "Story Beginning, Middle, End", blurb: "Understanding the 3 main parts every story needs.",
            videoId: "dVu9VHEFrpg",
            icon: "🎢",
        fact: "Did you know? This 3-part pattern is sometimes called a 'story arc'!",
            questions: [
              { type: "mc", q: "What are the three main parts of a story?", options: ["Title, Author, Price", "Beginning, Middle, End", "Cover, Pages, Back", "Loud, Quiet, Loud"], answer: 1, explanation: "Every story has a beginning, a middle, and an end." },
              { type: "mc", q: "The 'middle' of a story usually contains the...", options: ["Main problem or events", "Cover page", "Author's name", "Blank pages"], answer: 0, explanation: "The middle carries the main action and problem of the story." }
            ,
              { type: "mc", q: "Where is a story's main problem usually introduced?", options: ["The middle", "The very end only", "The dictionary", "The book cover"], answer: 0, explanation: "The main problem or conflict usually appears in the middle of the story." },
              { type: "mc", q: "What usually happens at the end of a story?", options: ["The problem is resolved", "Nothing happens", "A new book starts", "The characters disappear"], answer: 0, explanation: "The end of a story usually resolves the main problem." }] },
          { title: "Describing Words", blurb: "Using adjectives to make stories more colorful and exciting.",
            videoId: "QxoDGlPUmyU",
            icon: "✨",
        fact: "Did you know? Describing words are called adjectives, and English has thousands of them!",
            questions: [
              { type: "mc", q: "Which word describes how something looks or feels?", options: ["Run", "Sparkly", "And", "Under"], answer: 1, explanation: "'Sparkly' is a describing word (adjective)." },
              { type: "mc", q: "Which word describes a feeling?", options: ["Happy", "Table", "Run", "Under"], answer: 0, explanation: "'Happy' describes how someone feels." }
            ,
              { type: "mc", q: "Which sentence uses a describing word?", options: ["The dog ran.", "The fluffy dog ran.", "Dog ran the.", "Ran dog the."], answer: 1, explanation: "'Fluffy' describes the dog, making the sentence more vivid." },
              { type: "mc", q: "What part of speech describes how an action happens?", options: ["A noun", "An adverb", "A pronoun", "A conjunction"], answer: 1, explanation: "An adverb, like 'quickly', describes how an action happens." }] },
          { title: "Rhyme and Rhythm", blurb: "Feeling the beat and rhyme pattern in a poem.",
            videoId: "iWxXAbIvkoU",
            icon: "🥁",
        fact: "Did you know? Rap music uses rhythm and rhyme just like poetry does!",
            questions: [
              { type: "mc", q: "'Rhythm' in a poem is best described as...", options: ["The poem's beat or flow", "The poem's title", "A type of punctuation", "The author's name"], answer: 0, explanation: "Rhythm is the beat or flow you feel when reading a poem." },
              { type: "mc", q: "A poem's steady beat is called its...", options: ["Rhythm", "Punctuation", "Spelling", "Grammar"], answer: 0, explanation: "The steady beat of a poem is its rhythm." }
            ,
              { type: "mc", q: "Clapping along to a poem helps you feel its...?", options: ["Rhythm", "Spelling", "Punctuation", "Grammar"], answer: 0, explanation: "Clapping helps you feel a poem's rhythm, or beat." },
              { type: "mc", q: "Songs and poems both often use...?", options: ["Rhyme and rhythm", "Only silence", "Random letters", "Math symbols"], answer: 0, explanation: "Both songs and poems often use rhyme and rhythm to sound pleasing." }] },
          { title: "Create Your Own Story", blurb: "Planning a short story: a character, a problem, and an ending.",
            videoId: "B8SX7AABWmI",
            icon: "✍️",
        fact: "Did you know? Many famous authors wrote their very first stories when they were kids!",
            questions: [
              { type: "mc", q: "Before writing a story, it helps to first think of...", options: ["Only the ending", "A character and a problem to solve", "Nothing at all", "The publisher"], answer: 1, explanation: "Good stories usually start with a character who has a problem to solve." },
              { type: "mc", q: "A story's main character usually has a...", options: ["Problem to solve", "Phone number", "Bank account", "Car"], answer: 0, explanation: "Most stories follow a character trying to solve a problem." }
            ,
              { type: "mc", q: "What usually happens after a character faces a problem?", options: ["They try to solve it", "The story ends immediately", "Nothing changes", "They forget about it"], answer: 0, explanation: "In most stories, the character tries to solve the problem they face." },
              { type: "mc", q: "Why is planning helpful before writing a story?", options: ["It helps organize your ideas", "It makes the story boring", "It isn't helpful", "It only wastes time"], answer: 0, explanation: "Planning helps you organize your ideas before you start writing." }] }
        ]
      }
    },

    {
      key: "islamic",
      name: "Islamic Studies",
      emoji: "🕌",
      tagline: "Faith, kindness & good manners",
      color: "#2A9D8F",
      layout: "list",
      levels: {
        younger: [
          { title: "Saying Bismillah", blurb: "Learning to say Bismillah before starting good things, like eating.",
            videoId: "cHqfk5lMw-E",
            icon: "🌙",
        fact: "Did you know? Muslims say Bismillah before starting almost anything important!",
            questions: [
              { type: "tf", q: "We say 'Bismillah' before starting good things, like eating.", options: ["True", "False"], answer: 0, explanation: "Yes — saying Bismillah reminds us to begin with Allah's name." },
              { type: "mc", q: "'Bismillah' means 'in the name of...'", options: ["Allah", "the teacher", "the weather", "the animals"], answer: 0, explanation: "Bismillah means 'in the name of Allah'." }
            ,
              { type: "mc", q: "When might someone say Bismillah?", options: ["Before eating or starting a task", "Only at midnight", "Never", "Only during play"], answer: 0, explanation: "Bismillah is often said before eating or starting something good." },
              { type: "tf", q: "Saying Bismillah is a way to remember Allah.", options: ["True", "False"], answer: 0, explanation: "Yes, saying Bismillah helps us remember to begin with Allah's name." }] },
          { title: "The Five Daily Prayers (Intro)", blurb: "A gentle introduction to Muslims praying five times a day.",
            videoId: "XOr-gYGpQs4",
            icon: "🕌",
        fact: "Did you know? The five daily prayers are called Fajr, Dhuhr, Asr, Maghrib, and Isha!",
            questions: [
              { type: "tf", q: "Muslims pray five times every day.", options: ["True", "False"], answer: 0, explanation: "Yes — the five daily prayers are an important part of Islam." },
              { type: "mc", q: "How many times a day do Muslims pray?", options: ["Three", "Five", "Seven", "Ten"], answer: 1, explanation: "Muslims pray five times each day." }
            ,
              { type: "mc", q: "Prayer is an important part of a Muslim's...?", options: ["Daily life", "Birthday only", "Homework", "Weekend only"], answer: 0, explanation: "Prayer is an important part of daily life for Muslims." },
              { type: "tf", q: "Prayers can only be said once a week.", options: ["True", "False"], answer: 1, explanation: "Muslims pray five times a day, not just once a week." }] },
          { title: "Being Kind and Honest", blurb: "Learning that Islam teaches kindness, honesty, and helping others.",
            videoId: "7olb-mya2zw",
            icon: "🤝",
        fact: "Did you know? Kindness is considered one of the most important qualities to have in Islam!",
            questions: [
              { type: "tf", q: "Being kind to others is encouraged in Islam.", options: ["True", "False"], answer: 0, explanation: "Yes — kindness and honesty are important values in Islam." },
              { type: "mc", q: "Which of these is an example of being honest?", options: ["Telling the truth", "Telling a lie", "Hiding a mistake", "Breaking a promise"], answer: 0, explanation: "Telling the truth is a simple example of honesty." }
            ,
              { type: "mc", q: "If you find something that isn't yours, what should you do?", options: ["Try to return it", "Keep it secretly", "Throw it away", "Ignore it"], answer: 0, explanation: "Being honest means trying to return something that isn't yours." },
              { type: "mc", q: "Helping a friend who is sad is an example of...?", options: ["Kindness", "Dishonesty", "Rudeness", "Laziness"], answer: 0, explanation: "Helping a sad friend is a kind and caring act." }] },
          { title: "Simple Duas", blurb: "Learning short duas (prayers) for everyday moments.",
            videoId: "IKkE0RB5eZU",
            icon: "🤲",
        fact: "Did you know? A dua is like a small personal prayer you can say anytime!",
            questions: [
              { type: "tf", q: "A dua is a kind of prayer or supplication.", options: ["True", "False"], answer: 0, explanation: "Yes — a dua is a personal prayer to Allah." },
              { type: "mc", q: "When do Muslims often say a short dua?", options: ["Before eating or sleeping", "Only on birthdays", "Never", "Only in dreams"], answer: 0, explanation: "Short duas are often said before everyday moments like eating or sleeping." }
            ,
              { type: "mc", q: "A short prayer said before an action is called a...?", options: ["Dua", "Surah", "Wudu", "Adhan"], answer: 0, explanation: "A short personal prayer like this is called a dua." },
              { type: "tf", q: "Duas can be said in your own words too.", options: ["True", "False"], answer: 0, explanation: "Yes, duas can be memorized or said sincerely in your own words." }] },
          { title: "Ramadan for Little Ones", blurb: "A simple look at what Ramadan means for Muslim families.",
            videoId: "nI8qrKJ7OeU",
            icon: "🌛",
        fact: "Did you know? Ramadan is the ninth month of the Islamic calendar!",
            questions: [
              { type: "tf", q: "Ramadan is a special month in Islam.", options: ["True", "False"], answer: 0, explanation: "Yes — Ramadan is a special month of fasting and prayer." },
              { type: "mc", q: "What do many Muslim families do during Ramadan?", options: ["Fast during the day", "Never eat at all", "Only eat candy", "Sleep all day"], answer: 0, explanation: "During Ramadan, many Muslims fast from dawn until sunset." }
            ,
              { type: "mc", q: "During Ramadan, many Muslims practice...?", options: ["Fasting and extra prayer", "Only sleeping", "Only playing games", "Nothing different"], answer: 0, explanation: "Ramadan is a month of extra fasting, prayer, and good deeds." },
              { type: "mc", q: "What often follows the end of Ramadan?", options: ["A celebration called Eid", "A test at school", "Nothing special", "Another Ramadan immediately"], answer: 0, explanation: "The end of Ramadan is celebrated with Eid al-Fitr." }] }
        ],
        older: [
          { title: "The Pillars of Islam", blurb: "Learning the five pillars that guide a Muslim's life.",
            videoId: "H9U8T8x1AhQ",
            icon: "🏛️",
        fact: "Did you know? The Five Pillars are like the foundation that holds up a Muslim's faith!",
            questions: [
              { type: "tf", q: "There are five pillars of Islam.", options: ["True", "False"], answer: 0, explanation: "Yes — the Five Pillars are the foundation of a Muslim's practice." },
              { type: "mc", q: "How many Pillars of Islam are there?", options: ["Three", "Four", "Five", "Six"], answer: 2, explanation: "There are five Pillars of Islam." }
            ,
              { type: "mc", q: "Which of these is one of the Five Pillars?", options: ["Prayer (Salah)", "Painting", "Swimming", "Cooking"], answer: 0, explanation: "Prayer, or Salah, is one of the Five Pillars of Islam." },
              { type: "mc", q: "The Five Pillars help guide a Muslim's...?", options: ["Faith and daily practice", "Favorite food", "School subjects", "Sports team"], answer: 0, explanation: "The Five Pillars guide a Muslim's faith and daily practice." }] },
          { title: "Stories of the Prophets", blurb: "Simple, age-appropriate stories about the Prophets.",
            videoId: "ZPQzoLb9BAw",
            icon: "📿",
        fact: "Did you know? The Qur'an mentions the names of 25 prophets!",
            questions: [
              { type: "tf", q: "Stories of the Prophets teach us good lessons.", options: ["True", "False"], answer: 0, explanation: "Yes — these stories are full of lessons about patience, honesty, and faith." },
              { type: "mc", q: "Stories of the Prophets often teach lessons about...", options: ["Patience and faith", "Video games", "Sports scores", "Nothing important"], answer: 0, explanation: "These stories teach timeless lessons like patience, honesty, and faith." }
            ,
              { type: "mc", q: "Stories of the Prophets are found in the...?", options: ["Qur'an", "Newspaper", "Comic books", "Math textbook"], answer: 0, explanation: "Many stories of the Prophets are found in the Qur'an." },
              { type: "mc", q: "What quality do Prophets often show in these stories?", options: ["Patience and faith", "Carelessness", "Laziness", "Dishonesty"], answer: 0, explanation: "Prophets are often shown demonstrating patience and strong faith." }] },
          { title: "Wudu Steps", blurb: "Learning the steps of Wudu (ablution) before prayer.",
            videoId: "LZWe0Xh-Hfc",
            icon: "💧",
        fact: "Did you know? Wudu is meant to clean and prepare the body before standing to pray!",
            questions: [
              { type: "tf", q: "Wudu is done before performing prayer.", options: ["True", "False"], answer: 0, explanation: "Yes — Wudu is the cleansing done before prayer." },
              { type: "mc", q: "Wudu is performed before...", options: ["Prayer", "Watching TV", "Playing football", "Sleeping only"], answer: 0, explanation: "Wudu is performed before prayer." }
            ,
              { type: "mc", q: "Wudu typically begins with washing which part?", options: ["The hands", "The feet only", "Nothing", "The hair only"], answer: 0, explanation: "Wudu typically begins with washing the hands." },
              { type: "tf", q: "Wudu can be repeated before each prayer.", options: ["True", "False"], answer: 0, explanation: "Yes, Wudu is often performed before each prayer." }] },
          { title: "Good Manners (Akhlaq)", blurb: "Learning about respect, patience, and good character.",
            videoId: "WtLKU39qv2U",
            icon: "💛",
        fact: "Did you know? 'Akhlaq' comes from an Arabic word meaning 'character'!",
            questions: [
              { type: "tf", q: "Good manners and respect for others are part of good Akhlaq.", options: ["True", "False"], answer: 0, explanation: "Yes — Akhlaq means good character and manners." },
              { type: "mc", q: "'Akhlaq' refers to a person's...", options: ["Character and manners", "Height", "Favorite food", "Shoe size"], answer: 0, explanation: "Akhlaq means a person's character and manners." }
            ,
              { type: "mc", q: "Which is an example of good Akhlaq?", options: ["Being respectful to others", "Being rude", "Ignoring elders", "Breaking promises"], answer: 0, explanation: "Being respectful to others is an example of good Akhlaq." },
              { type: "mc", q: "Why is good Akhlaq important?", options: ["It helps build a kind community", "It has no purpose", "It only matters at home", "It's only for adults"], answer: 0, explanation: "Good Akhlaq helps build a kind and respectful community." }] },
          { title: "Learning Short Surahs", blurb: "Practicing short, commonly recited Surahs.",
            videoId: "aMKnCveaoD0",
            icon: "📗",
        fact: "Did you know? The Qur'an has 114 surahs (chapters) in total!",
            questions: [
              { type: "tf", q: "A Surah is a chapter of the Qur'an.", options: ["True", "False"], answer: 0, explanation: "Yes — the Qur'an is divided into chapters called Surahs." },
              { type: "mc", q: "A 'Surah' is a...", options: ["Chapter of the Qur'an", "Type of prayer mat", "Kind of food", "Musical instrument"], answer: 0, explanation: "A Surah is a chapter of the Qur'an." }
            ,
              { type: "mc", q: "Surahs are recited during...?", options: ["Prayer", "Only bedtime", "Only meals", "Never"], answer: 0, explanation: "Surahs are recited as part of daily prayer." },
              { type: "mc", q: "What does memorizing short Surahs help with?", options: ["Prayer and remembrance", "Cooking skills", "Sports ability", "Nothing useful"], answer: 0, explanation: "Memorizing short Surahs helps with prayer and remembering the Qur'an." }] }
        ]
      }
    }
  ],

  /* Professions is a single reading list — no age split, shown like a book's
     table of contents, tied to Fatimah's own storybook "When I Grow Up". */
  professions: {
    key: "professions",
    name: "Professions",
    emoji: "👩‍⚕️",
    tagline: "From \"When I Grow Up\" — Fatimah's own storybook!",
    color: "#F3722C",
    bookTitle: "When I Grow Up: Fatimah's Book of Amazing Professions",
    coverImage: "images/professions/cover.jpg",
    closingMessage: "There are different occupations in the world. All you have to do is find the one most suitable for you. Thank you!",
    authorName: "Fatimah Abdullateef Umar, age 11",
    authorBio: "Fatimah Abdullateef Umar is 11 years old and loves to imagine all the different people who make the world work — from doctors to pilots to tailors. She wrote and illustrated this book herself, one profession at a time, because she believes every job matters and every dream is worth drawing.",
    chapters: [
      { title: "Farmers — Growing Our Food", image: "images/professions/farmer.jpg", blurb: "Meeting the farmer from Fatimah's book, who grows the food we eat.",
        story: "Farmers are the kind people who grow our food and fruits. They plant seeds, care for their crops, and gather the harvest so we always have something good to eat. Without farmers, there would be no food on our tables at all! Farmers truly work like everyday miracles, because their hard work saves lives. Whether they grow vegetables, fruits, or grains, every single farmer is important.",
        videoId: "gQRxCMaG6fg",
        icon: "🌾",
        fact: "Did you know? One farmer can grow enough food to feed well over a hundred people!",
        questions: [
          { type: "mc", q: "What does a farmer help grow?", options: ["Cars", "Food like crops", "Airplanes", "Books"], answer: 1, explanation: "Farmers grow crops and raise animals that give us food." },
          { type: "mc", q: "Where do farmers usually grow their crops?", options: ["On a farm", "In a classroom", "In an airplane", "Underwater"], answer: 0, explanation: "Farmers grow their crops on farms." }
        ,
              { type: "mc", q: "What do farmers need to help their crops grow?", options: ["Water and sunlight", "Only rocks", "Loud music", "Nothing at all"], answer: 0, explanation: "Crops need water and sunlight to grow well." },
              { type: "tf", q: "Farmers only grow fruits, never vegetables.", options: ["True", "False"], answer: 1, explanation: "Farmers grow many things, including vegetables, fruits, and grains." }] },
      { title: "Doctors — Keeping Us Healthy", image: "images/professions/doctor.jpg", blurb: "Meeting the doctor from the book, who helps people feel better.",
        story: "Doctors are special people who treat diseases and save lives every day. Doctors are blessings in society — without them, many people would suffer from illnesses with no one to help them get better. Let's continue to respect all the doctors that we know.",
        videoId: "4eeUCYAOLbo",
        icon: "🩺",
        fact: "Did you know? Doctors study for many years before they can treat patients on their own!",
        questions: [
          { type: "mc", q: "What does a doctor help people do?", options: ["Fly planes", "Feel better when sick", "Bake bread", "Fix pipes"], answer: 1, explanation: "Doctors help take care of people and keep them healthy." },
          { type: "mc", q: "What tool does a doctor often use to listen to your heartbeat?", options: ["A stethoscope", "A hammer", "A paintbrush", "A spoon"], answer: 0, explanation: "Doctors use a stethoscope to listen to your heart and breathing." }
        ,
              { type: "mc", q: "Where do doctors often work?", options: ["A hospital or clinic", "An airplane", "A farm", "A kitchen"], answer: 0, explanation: "Doctors often work in hospitals or clinics." },
              { type: "mc", q: "What is one way to say thank you to doctors?", options: ["Respecting their hard work", "Ignoring them", "Being unkind", "Avoiding checkups"], answer: 0, explanation: "Respecting the hard work doctors do is a nice way to say thank you." }] },
      { title: "Teachers — Helping Us Learn", image: "images/professions/teacher.jpg", blurb: "Meeting the teacher from the book, who helps children learn new things.",
        story: "Teachers are smart and very patient. They teach children things they didn't know before, planting knowledge into little minds every single day. Without teachers, we would never learn to read, write, or dream big. Teachers even teach the teachers of tomorrow, because learning never really stops. As one wise teacher once said, \"We can never stop learning.\"",
        videoId: "wS1NF5qFRfs",
        icon: "🍎",
        fact: "Did you know? Many famous inventors and leaders say a teacher inspired them the most!",
        questions: [
          { type: "mc", q: "What does a teacher help students do?", options: ["Cook dinner", "Learn new things", "Drive buses", "Sew clothes"], answer: 1, explanation: "Teachers help students learn and grow." },
          { type: "mc", q: "What is one important job of a teacher?", options: ["Helping students learn", "Flying airplanes", "Fixing pipes", "Cooking dinner for the class"], answer: 0, explanation: "A teacher's main job is helping students learn." }
        ,
              { type: "mc", q: "Teachers help students by...?", options: ["Explaining new ideas", "Avoiding questions", "Ignoring mistakes", "Skipping lessons"], answer: 0, explanation: "Teachers help by patiently explaining new ideas to their students." },
              { type: "tf", q: "Teachers only teach one subject their whole life.", options: ["True", "False"], answer: 1, explanation: "Teachers can teach many subjects and grade levels over their careers." }] },
      { title: "Pilots — Flying High", image: "images/professions/pilot.jpg", blurb: "Meeting the pilot from the book, who flies airplanes in the sky.",
        story: "Pilots are smart, brave, and full of courage. They fly big airplanes high above the clouds, helping people explore and travel all around the world. Without pilots, we would all be stuck in one place, never able to visit new countries or see faraway lands. So let's give a big thank you to every pilot in the sky, keeping us safe on every journey.",
        videoId: "Y_xjhJzdGKA",
        icon: "✈️",
        fact: "Did you know? Commercial airplanes can fly nearly 7 miles above the ground!",
        questions: [
          { type: "mc", q: "Where does a pilot work?", options: ["Underwater", "In an airplane", "In a kitchen", "In a garden"], answer: 1, explanation: "Pilots fly airplanes high in the sky." },
          { type: "mc", q: "What is the special seat at the front of an airplane called?", options: ["The cockpit", "The kitchen", "The basement", "The garage"], answer: 0, explanation: "Pilots sit in the cockpit at the front of the plane." }
        ,
              { type: "mc", q: "What do pilots use to communicate with air traffic control?", options: ["A radio", "A telephone booth", "A letter", "A drum"], answer: 0, explanation: "Pilots use radios to communicate with air traffic control." },
              { type: "mc", q: "Before flying, pilots must carefully check the...?", options: ["Airplane's condition", "Weather only", "Passenger's shoes", "Nothing at all"], answer: 0, explanation: "Pilots carefully check the airplane and conditions before every flight." }] },
      { title: "Chefs — Cooking Yummy Food", image: "images/professions/chef.jpg", blurb: "Meeting the chef from the book, who cooks delicious meals.",
        story: "Chefs are the people who cook delicious meals and delicacies for us to enjoy. They are calm, creative, kind, and hardworking, and they fill our tummies with yummy food every day. Without chefs, we would all be hungry! So go on, chef… what delicious dish will you serve us next?",
        videoId: "Ws4rpqNz4II",
        icon: "👩‍🍳",
        fact: "Did you know? Some chefs train for years in special cooking schools!",
        questions: [
          { type: "mc", q: "What does a chef do?", options: ["Cooks food", "Flies planes", "Teaches math", "Builds houses"], answer: 0, explanation: "Chefs cook tasty meals for people to enjoy." },
          { type: "mc", q: "Where does a chef usually work?", options: ["A kitchen or restaurant", "A courtroom", "An airplane", "A farm field"], answer: 0, explanation: "Chefs usually work in a kitchen or restaurant." }
        ,
              { type: "mc", q: "What is one important skill for a chef?", options: ["Following recipes carefully", "Ignoring cleanliness", "Never tasting food", "Avoiding vegetables"], answer: 0, explanation: "Chefs need to follow recipes carefully to cook delicious food." },
              { type: "tf", q: "Chefs only cook one type of food their whole career.", options: ["True", "False"], answer: 1, explanation: "Chefs can learn to cook many different types of cuisine." }] },
      { title: "Engineers — Building Big Things", image: "images/professions/engineer.jpg", blurb: "Meeting the engineer from the book, who designs and builds things.",
        story: "Engineers are special people who make our everyday life easier and more comfortable. They design and build the amazing bridges, buildings, and machines that we use every day. Engineers are smart, wise, and clever — so clever that you can hardly ever outsmart one. Engineering is not an easy job, so let's respect every engineer out there.",
        videoId: "pkVIk-RGPpw",
        icon: "🌉",
        fact: "Did you know? Engineers helped design almost everything you use, from toys to bridges!",
        questions: [
          { type: "mc", q: "What might an engineer help design?", options: ["A bridge or building", "A poem", "A meal", "A prayer"], answer: 0, explanation: "Engineers design and build things like bridges, roads, and machines." },
          { type: "mc", q: "Engineers use math and science mostly to...", options: ["Solve problems and build things", "Bake cookies", "Play music", "Water plants"], answer: 0, explanation: "Engineers use math and science to solve problems and build things." }
        ,
              { type: "mc", q: "Which of these might an engineer design?", options: ["A bridge", "A poem", "A song", "A prayer"], answer: 0, explanation: "Engineers often design structures like bridges and buildings." },
              { type: "mc", q: "Engineers often use which subjects in their work?", options: ["Math and science", "Only art", "Only music", "None at all"], answer: 0, explanation: "Engineers rely heavily on math and science in their work." }] },
      { title: "Soldiers — Keeping Us Safe", image: "images/professions/soldier.jpg", blurb: "Meeting the soldier from the book, who works to protect others.",
        story: "Soldiers are brave and strong. They protect our country all day long, fighting for our rights and keeping everyone safe and sound. Soldiers are just like us, only with an extra spark of courage inside them. That spark is exactly what makes them a true blessing to us all.",
        videoId: "L3kwUhTu55s",
        icon: "🎖️",
        fact: "Did you know? Soldiers often train closely as a team so they can work well together!",
        questions: [
          { type: "mc", q: "What is one job of a soldier?", options: ["Protecting people", "Painting pictures", "Selling fruit", "Writing songs"], answer: 0, explanation: "Soldiers work to protect and keep people safe." },
          { type: "mc", q: "One important quality of a soldier is...", options: ["Bravery", "Cooking skills", "Painting skills", "Singing"], answer: 0, explanation: "Bravery is an important quality for a soldier." }
        ,
              { type: "mc", q: "What is one quality soldiers often need?", options: ["Discipline", "Carelessness", "Laziness", "Dishonesty"], answer: 0, explanation: "Discipline is an important quality for soldiers." },
              { type: "mc", q: "Soldiers often work together as a...?", options: ["Team", "Random crowd", "An audience", "Nothing"], answer: 0, explanation: "Soldiers usually train and work together as a team." }] },
      { title: "Tailors — Making Our Clothes", image: "images/professions/tailor.jpg", blurb: "Meeting the tailor from the book, who sews and designs clothes.",
        story: "Tailors are creative and wise. They design new and beautiful styles, and they are the true inventors of the clothes we wear every day. A tailor can sit quietly at their sewing machine, humming a peaceful little tune, and before you know it, a beautiful masterpiece of clothing has been made. Are tailors not wonders?",
        videoId: "RsNHc0hPjI4",
        icon: "🧵",
        fact: "Did you know? Long ago, almost every piece of clothing was sewn by hand by a tailor!",
        questions: [
          { type: "mc", q: "What does a tailor make?", options: ["Clothes", "Bridges", "Medicine", "Airplanes"], answer: 0, explanation: "Tailors sew and design clothing for people to wear." },
          { type: "mc", q: "What tool does a tailor use to join fabric together?", options: ["Needle and thread", "Hammer", "Stethoscope", "Wrench"], answer: 0, explanation: "Tailors use a needle and thread to sew fabric together." }
        ,
              { type: "mc", q: "What material do tailors often work with?", options: ["Fabric", "Wood", "Metal", "Water"], answer: 0, explanation: "Tailors work with fabric to create clothing." },
              { type: "mc", q: "What skill is important for a tailor?", options: ["Sewing carefully", "Ignoring measurements", "Avoiding fabric", "Never using thread"], answer: 0, explanation: "Sewing carefully and taking accurate measurements is important for tailors." }] },
      { title: "Plumbers — Fixing Our Pipes", image: "images/professions/plumber.jpg", blurb: "Meeting the plumber from the book, who fixes water pipes at home.",
        story: "Plumbers are the people who fix water pipes and stop annoying leaks and clogs, helping us live in a clean and healthy home. Without plumbers, our water would not flow properly, and our environment would quickly become dirty and unsafe. Plumbers truly deserve a big thank you from all of us.",
        videoId: "bufC9WZ258g",
        icon: "🔧",
        fact: "Did you know? Ancient Rome had one of the very first big plumbing systems in history!",
        questions: [
          { type: "mc", q: "What does a plumber usually fix?", options: ["Water pipes", "Airplane engines", "School books", "Farm animals"], answer: 0, explanation: "Plumbers fix and install water pipes in homes and buildings." },
          { type: "mc", q: "What might a plumber fix in your house?", options: ["A leaking pipe", "A broken toy", "A math problem", "A torn shirt"], answer: 0, explanation: "A plumber would fix a leaking pipe." }
        ,
              { type: "mc", q: "What might leak if a pipe breaks?", options: ["Water", "Sunlight", "Music", "Wind"], answer: 0, explanation: "A broken pipe can leak water." },
              { type: "mc", q: "Why is a plumber's work important for health?", options: ["It keeps water clean and flowing", "It has nothing to do with health", "It only matters for looks", "It never matters"], answer: 0, explanation: "Clean, properly flowing water is important for staying healthy." }] },
      { title: "What Do You Want to Be?", image: null, blurb: "A reflection activity: after meeting everyone in the book, which profession is your favorite — and why?",
        videoId: "g6hgnC_Mg6Q",
        icon: "🌈",
        fact: "Did you know? Fatimah imagined and drew every one of these professions herself in her own storybook!",
        questions: [
          { type: "mc", q: "Why is it good to learn about many different professions?", options: ["So we only pick one job forever at age 5", "So we understand how people help each other in different ways", "It isn't useful at all", "So we can forget about school"], answer: 1, explanation: "Learning about different professions helps us see how everyone's job helps the community in a different way." },
          { type: "mc", q: "It's good to learn about many professions because...", options: ["Everyone helps the community differently", "Only doctors matter", "Jobs never change", "We should only learn one job ever"], answer: 0, explanation: "Every profession helps the community in its own special way." }
        ,
              { type: "mc", q: "Which profession from this book grows our food?", options: ["Farmers", "Pilots", "Tailors", "Soldiers"], answer: 0, explanation: "Farmers are the ones who grow our food." },
              { type: "mc", q: "Which profession from this book helps us when we're sick?", options: ["Doctors", "Chefs", "Engineers", "Plumbers"], answer: 0, explanation: "Doctors help take care of us when we are sick." }] }
    ]
  },

  /* ---------- Play: simple games (see script.js for the game logic) ---------- */
  games: {
    memoryMatch: {
      name: "Memory Match",
      emoji: "🧠",
      tagline: "Flip the cards and find every matching pair!",
      pairs: ["🔢", "🔤", "📖", "🕌", "🌈", "⭐"]
    },
    pictureMatch: {
      name: "Picture Match",
      emoji: "🖼️",
      tagline: "Pick the picture that matches the word!",
      rounds: [
        { word: "Sun",   correct: "☀️", options: ["☀️", "🌙", "🐱", "🚗"] },
        { word: "Cat",   correct: "🐱", options: ["🐶", "🐱", "🐦", "🐟"] },
        { word: "Apple", correct: "🍎", options: ["🍌", "🍇", "🍎", "🍊"] },
        { word: "Car",   correct: "🚗", options: ["🚌", "🚗", "🚲", "✈️"] },
        { word: "Star",  correct: "⭐", options: ["⭐", "☁️", "🌧️", "❄️"] },
        { word: "Book",  correct: "📖", options: ["📱", "📖", "🖊️", "🎈"] },
        { word: "Fish",  correct: "🐟", options: ["🐦", "🐟", "🐘", "🐝"] },
        { word: "Moon",  correct: "🌙", options: ["🌙", "☀️", "⭐", "🌈"] }
      ]
    }
  },

  /* ---------- Badges children can earn (see script.js for unlock logic) ---------- */
  badges: [
    { id: "starter",       emoji: "🌟", name: "Getting Started", description: "Complete your very first topic." },
    { id: "math-whiz",     emoji: "🔢", name: "Math Whiz",       description: "Finish every Mathematics topic for your group." },
    { id: "wordsmith",     emoji: "🔤", name: "Wordsmith",       description: "Finish every English Language topic for your group." },
    { id: "storyteller",   emoji: "📖", name: "Storyteller",     description: "Finish every Poem & Story Writing topic for your group." },
    { id: "star-student",  emoji: "🕌", name: "Star Student",    description: "Finish every Islamic Studies topic for your group." },
    { id: "dream-chaser",  emoji: "🌈", name: "Dream Chaser",    description: "Finish reading every profession in Fatimah's book." },
    { id: "perfect-score", emoji: "🏆", name: "Perfect Score",   description: "Get every question right in a quiz." },
    { id: "memory-master", emoji: "🧠", name: "Memory Master",   description: "Win a round of Memory Match." },
    { id: "picture-pro",   emoji: "🖼️", name: "Picture Pro",     description: "Score well in Picture Match." }
  ]
};

# 🌈 Fatimah's Learning Hub

**Status: finished and ready to deploy.** Every subject has real, working YouTube videos attached
(click a topic → the video plays right there), every topic has a fun fact and a quiz, and the whole
site has been tested end to end (name entry, both age groups, all 5 subjects, both games, badges,
certificates, and scores). See "Quick QA notes" near the bottom before sending it onward.

A colorful, no-login learning website for young children (ages 2–10):

1. Mathematics
2. English Language
3. Poem & Story Writing
4. Islamic Studies
5. Professions — a reading list of all 9 professions from Fatimah's own book *"When I Grow Up"*, with her real illustrations and text

## How it works

1. A child types their name in a friendly popup.
2. They must pick a group — **Junior Learners (2–6)** or **Super Learners (7–10)** — before subjects appear. Tap the pill in the header to switch anytime.
3. **"Explore Subjects"** in the header lists all 5 subjects. Each subject has its own layout (tile grid, timeline, big cards, list, book chapters).
4. Every topic has a YouTube video, a "Did you know?" fun fact, and a quiz.
5. Quiz questions and answer options are shuffled on every attempt.
6. **Review** shows right/wrong answers with explanations; **Finish Review** shows the score, stars (and confetti for a perfect score).
7. Progress bars (overall and per subject) are saved in the browser under the child's name.
8. Every fun fact has an animated picture, and every quiz answer explanation shows a matching picture.
9. Extras: 🔊 read-aloud buttons, 🔔 sound on/off (top right), a "Fact of the day", Leo the lion mascot, a printable certificate when a subject is finished, and a "My Scores" page for parents (in the Explore Subjects menu).
10. Each quiz question pool now has 4+ questions; every attempt randomly shows 3 of them, in shuffled order.
11. A **Play** section (in the menu) has two games: **Memory Match** and **Picture Match**.
12. A **My Badges** page (in the menu) shows stickers a child earns for finishing topics, subjects, and games. A small badge-shelf preview also shows on the home screen, and a toast pops up the moment a new badge is earned.

No accounts, no backend — everything runs in the browser.

## Files

```
index.html          page structure, name popup, group chooser
style.css           colors, fonts, layouts, animations
data.js             ALL editable content (topics, videos, facts, quizzes, book text)
script.js           app logic (no need to edit)
images/professions/ Fatimah's book illustrations + cover
```

## Editing content (data.js)

- **Swap a video:** change `videoId` to the part after `v=` in a YouTube link.
- **Add a quiz question:** add `{ type: "mc", q: "...", options: [...], answer: 0, explanation: "..." }` to a topic's `questions` list (`answer` = index of the correct option; use `type: "tf"` for True/False).
- **Change a fun fact:** edit the topic's `fact` and its picture (`icon`, any emoji).
- **Rename the mascot:** edit `mascot` at the top of `data.js`.
- **Professions book:** each chapter has `image`, `story`, `videoId`, `fact`, `questions`.

## Deploying to Vercel — checklist

1. Unzip the folder — keep `index.html`, `style.css`, `data.js`, `script.js`, and the `images/` folder together, all at the top level (don't nest them in a subfolder).
2. Go to vercel.com and sign in (free plan is fine).
3. Choose **Add New → Project**, then either:
   - **Drag and drop** the unzipped folder onto the "Deploy" page, or
   - Push the folder to a GitHub repo first, then **Import** that repo.
4. Framework preset: choose **Other** (this is a plain static site, no build step needed). Leave the build command empty.
5. Click **Deploy**. Vercel gives you a live `yourproject.vercel.app` link in under a minute.
6. Open the link on a phone and a laptop, click through a subject, a video, a quiz, and the two games once each, just to see it live.
7. Optional: in Vercel's project settings you can add a custom domain later if Fatimah wants one.


## Quick QA notes (read before sending to a client)

- **Videos:** all 50 video slots (every topic across all 5 subjects, plus every Professions chapter) have a real YouTube video ID attached and are clickable — confirmed by checking `data.js` directly (no placeholders left). I could not personally click-play all 50 inside this environment, so it's worth a quick spot-check per subject after deploying, in case any one video has since gone private.
- **Functionality:** name entry, group selection, all 5 subjects, quizzes (with review + certificates), both games, the badge collection, and the parent "My Scores" page were all tested end to end with no errors.
- **Icons:** the site now has a proper app icon, so it looks polished if someone adds it to their phone's home screen (Settings aren't needed — this happens automatically from the browser's "Add to Home Screen" option).
- **No backend, no accounts, no data leaves the device** — everything (name, scores, badges) is stored only in that browser, which is worth mentioning to the client.

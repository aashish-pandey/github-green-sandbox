# 🟢 GitHub Green Sandbox

Simulate green squares on your GitHub contribution graph using a custom-built visual calendar UI and a commit automation script.

> ⚠️ This is meant for **educational and aesthetic purposes only**. Don't abuse it to misrepresent actual work.

---

## 📁 What This Repo Contains

- `index.html` — interactive GitHub-style grid to select dates
- `dates.txt` — holds list of selected commit dates (one per line)
- `greenify.sh` — shell script that commits on those dates
- `activity.md` — dummy file used for commits

---

## 🚀 Quickstart Guide

### 🔧 1. Create a New GitHub Repo (via Terminal)

```bash
mkdir github-green-sandbox && cd github-green-sandbox
git init
```

### 🌐 2. Add the Remote GitHub Repo

```bash
git remote add origin https://github.com/<your-username>/github-green-sandbox.git
```

> Replace `<your-username>` with your actual GitHub username.

---

## 🖱️ 3. Use the Interactive Website

1. Open `index.html` in your browser.
2. Select the days you want commits (click to toggle green).
3. Copy the **Selected Dates** list at the bottom of the page.
4. Paste them into `dates.txt` (one date per line).

Example `dates.txt`:
```
2024-10-01
2024-10-02
2024-10-04
```

---

## 🟩 4. Generate Commits

### Make the script executable:

```bash
chmod +x greenify.sh
```

### Run the script:

```bash
./greenify.sh
```

This will:
- Update `activity.md`
- Create one commit per date
- Set author and commit time to that date

---

## ☁️ 5. Push to GitHub

```bash
git add .
git commit -m "Initial commit with files"
git push -u origin main
```

Wait 1–2 minutes, then check your [GitHub contributions](https://github.com/<your-username>) — green squares will appear!

---

## 🧹 To Reset the Repo

Want a fresh start?

```bash
rm -rf .git
git init
git remote add origin https://github.com/<your-username>/github-green-sandbox.git
```

Then run everything from Step 3 again.

---

## 💡 Tips

- This only works on **public** repositories.
- GitHub caches contribution activity — be patient for squares to appear.
- Want to simulate a full year of activity? Select dates smartly!

---

## 🧪 Example Output

You’ll see something like:

```bash
[main 1a2b3c4] Greenify 2024-10-01
[main 5d6e7f8] Greenify 2024-10-02
...
```

---

## 📸 Optional: Add a Screenshot

![Preview of index.html](preview.png)

---

## 📜 License

MIT — Use freely, but don’t fake your entire life 😉

---

Made with ❤️ by Aashish Pandey

# Priyanka Prajapati – Portfolio Website

A simple, responsive personal portfolio built with only **HTML, CSS and vanilla JavaScript**.
No build step is needed, so it works directly on **GitHub Pages**.

## Folder structure

```
portfolio/
├── index.html                 ← all text and content
├── css/style.css              ← colors, fonts, layout
├── js/script.js               ← theme toggle, menu, animations
├── assets/
│   ├── images/
│   │   ├── profile.jpg        ← your photo (already added)
│   │   ├── favicon.png        ← browser tab icon (already added)
│   │   └── disha-ai.jpg       ← ADD: project screenshot (optional)
│   └── documents/
│       ├── resume.pdf         ← your resume (already added)
│       └── ibm-ai-literacy.pdf← IBM certificate (already added)
└── README.md
```

## Things you still need to do

1. **Project image:** save a screenshot of Disha Together AI as `assets/images/disha-ai.jpg`.
   Until you add it, the card shows a neat blue placeholder.
2. **Project link:** in `index.html`, find `View on GitHub →` and replace the link with your project repository link.
3. **Check your details:** read through `index.html` once. Details such as the experience dates are taken from your documents.
4. **Phone number:** the site is public. If you do not want your phone number visible, delete the `<li>` block with `tel:` in the Contact section.

## How to edit

- **Text:** open `index.html`. Each section has a comment like `<!-- EDIT: ... -->`.
  To add a project, certificate or education entry, copy one existing block and change the text.
- **Colors and fonts:** open `css/style.css` and change the variables at the top (`--primary`, `--accent`, and others).
- **Hide a section:** a section with no entries (Experience, Sports Achievements) hides itself automatically.
- **Resume:** replace `assets/documents/resume.pdf` with a new file of the same name.

## Test on your computer

Double-click `index.html`. It opens in your browser. No installation is needed.

## Publish on GitHub Pages

1. Go to <https://github.com> and click **New repository**.
2. Name it **`madhuprajapatietw-collab.github.io`** to get the short link `https://madhuprajapatietw-collab.github.io`.
   (Any other name also works, but then the link ends with `/that-name/`.)
3. Set it to **Public** and click **Create repository**.
4. Click **uploading an existing file**. Upload the **contents** of the `portfolio` folder
   (`index.html`, `css`, `js`, `assets`, `README.md`). `index.html` must be at the top level of the repository.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**,
   select branch **main**, folder **/ (root)**, and click **Save**.
7. Wait 1–2 minutes and refresh. Your live link will appear at the top of the Pages screen.

To update the site later, open the file on GitHub, click the pencil icon, edit and commit.

## Features

- Light and dark theme (remembers your choice)
- Mobile menu, sticky navbar, active section highlight
- Smooth scrolling, fade-in animations, hover effects
- Download Resume button, back-to-top button
- Works on mobile, tablet and desktop

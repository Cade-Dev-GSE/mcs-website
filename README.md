# Monte Carlo Sports Website

Data-driven sports betting models powered by 100,000+ simulations.

## 🚀 Quick Start

1. Clone this repo
2. Open `index.html` in a browser

Or use a local server:
```bash
npx serve .
# or
python -m http.server 8000
```

## 📁 File Structure

```
website/
├── index.html              # Main page
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Interactions & animations
├── images/
│   ├── favicon.png         # Browser tab icon (32x32)
│   ├── og-image.png        # Social share image (1200x630)
│   ├── sample-gamelines.png
│   ├── sample-td.png
│   └── sample-props.png
└── README.md
```

## ✏️ Customization

### Update Discord Link
Search for `YOUR_DISCORD_INVITE_LINK` in `index.html` and replace with your actual invite link.

### Update Twitter Handle  
In the footer, update the Twitter link to your handle.

### Add Cheatsheet Screenshots
Add your actual model output screenshots to the `/images/` folder:
- `sample-gamelines.png` - Game lines cheatsheet
- `sample-td.png` - TD scorer cheatsheet  
- `sample-props.png` - Player props cheatsheet

### Change Colors
Edit the CSS variables in `:root` at the top of `style.css`:
```css
:root {
    --gold: #FFD700;        /* Primary accent */
    --cyan: #00d4ff;        /* Secondary accent */
    --bg-dark: #0a0a0f;     /* Background */
    /* etc... */
}
```

## 🌐 Deployment

### GitHub Pages (Free)

1. Push code to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch
4. Branch: main / root
5. Save

Your site will be live at `https://username.github.io/repo-name/`

### Custom Domain

1. In GitHub Pages settings, add your domain
2. Add DNS records at your registrar:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | username.github.io |

3. Wait 10-30 min for DNS propagation
4. Enable "Enforce HTTPS"

## 📱 Responsive

The site is fully responsive:
- Desktop: Full layout
- Tablet: Adjusted grid
- Mobile: Stacked layout, hamburger menu

## 🎨 Design Notes

- Dark theme matches cheatsheet aesthetic
- Gold (#FFD700) primary accent
- Cyan (#00d4ff) secondary accent
- Orbitron font for headings
- Inter font for body text
- Subtle animations on scroll

## 📊 Performance

- No build step required
- Pure HTML/CSS/JS
- Google Fonts loaded async
- Images lazy-loadable (add `loading="lazy"` to img tags)

## 📝 License

© 2025 Monte Carlo Sports

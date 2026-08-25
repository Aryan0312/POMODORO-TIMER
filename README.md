![GitHub last commit](https://img.shields.io/github/last-commit/Aryan0312/POMODORO-TIMER)
![GitHub top language](https://img.shields.io/github/languages/top/Aryan0312/POMODORO-TIMER)
![Stars](https://img.shields.io/github/stars/Aryan0312/POMODORO-TIMER?style=social)

# 🍅 Pomodoro Timer

A beautiful, feature-rich **Pomodoro Timer** web application to boost your productivity and maintain focus. Built with vanilla HTML, CSS, and JavaScript.

## 🎯 Live Demo

🔗 **[Visit the Live App](https://aryan0312.github.io/POMODORO-TIMER/)**

## ✨ Features

- ⏱️ **Three Timer Modes:**
  - 💼 Work Session: 25 minutes
  - ☕ Short Break: 5 minutes
  - 😴 Long Break: 15 minutes

- 🎨 **Modern UI:**
  - Responsive design for all devices
  - Smooth animations and transitions
  - Gradient background with glassmorphism effects
  - Progress bar visualization

- 🔔 **Smart Notifications:**
  - Browser notifications when timer ends
  - Audio alert sound
  - Session switch notifications
  - Dynamic page title updates

- ⌨️ **Keyboard Shortcuts:**
  - `Space`: Start/Pause timer
  - `R`: Reset timer
  - `W`: Start work session
  - `B`: Start break

- 📱 **Fully Responsive:**
  - Desktop, tablet, and mobile optimized
  - Touch-friendly controls
  - Adaptive layout

## 🚀 Getting Started

### Option 1: Open Online
Simply visit: **[https://aryan0312.github.io/POMODORO-TIMER/](https://aryan0312.github.io/POMODORO-TIMER/)**

### Option 2: Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aryan0312/POMODORO-TIMER.git
   cd POMODORO-TIMER
   ```

2. **Start a local server:**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if installed)
   npx http-server
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
POMODORO-TIMER/
├── index.html      # HTML structure and layout
├── style.css       # Modern styling and responsive design
├── script.js       # Timer logic and interactivity
└── README.md       # This file
```

## 🎮 How to Use

1. **Start a Session:** Click "START" or press `Space`
2. **Quick Select:** Use Work, Break, or Long Break buttons
3. **Pause Anytime:** Click "PAUSE" to temporarily stop
4. **Reset:** Click "RESET" to start over
5. **Auto-Switch:** Timer automatically switches between work and break sessions

## 🛠️ Technical Details

### Technologies Used
- **HTML5:** Semantic markup
- **CSS3:** Modern styling with CSS variables and Grid/Flexbox
- **JavaScript (ES6+):** State management and DOM manipulation

### Browser Support
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile Browsers (iOS Safari, Chrome Mobile)

### Key Implementation Details

**State Management:**
```javascript
const state = {
    timeLeft: 25 * 60,
    totalTime: 25 * 60,
    isRunning: false,
    isWorkSession: true,
};
```

**Timer Mechanism:**
- Uses `setInterval()` for precise 1-second updates
- Cleans up intervals to prevent memory leaks
- Updates display in MM:SS format

**Notifications:**
- Web Audio API for sound notifications
- Browser Notifications API for system alerts
- Fallback alerts for unsupported browsers

## 🌟 Improvements Made

✅ **Code Quality:**
- Clean, readable, and well-commented code
- Separation of concerns (structure, style, logic)
- ES6+ best practices

✅ **User Experience:**
- Smooth animations and visual feedback
- Keyboard shortcuts for power users
- Automatic session switching
- Progress visualization

✅ **Accessibility:**
- Semantic HTML structure
- ARIA-friendly button labels
- High contrast colors
- Keyboard navigation support

✅ **Performance:**
- Minimal dependencies (pure vanilla JS)
- Optimized animations using CSS
- Efficient DOM manipulation

## 🎨 Customization

Want to customize the timer durations? Edit `script.js`:

```javascript
const CONFIG = {
    WORK_DURATION: 25 * 60,      // Change this value (in seconds)
    SHORT_BREAK: 5 * 60,         // Change this value
    LONG_BREAK: 15 * 60,         // Change this value
};
```

Change colors in `style.css`:
```css
:root {
    --primary-color: #ef4444;    /* Red tomato color */
    --accent-color: #3b82f6;     /* Blue accent */
}
```

## 📊 Screenshots

Coming soon! For now, visit the [live demo](https://aryan0312.github.io/POMODORO-TIMER/).

## 🐛 Known Issues & Future Improvements

- [ ] Add dark mode toggle
- [ ] Local storage to save stats/sessions
- [ ] Customizable timer durations in UI
- [ ] Background music option
- [ ] Daily productivity charts
- [ ] Export session history

## 🤝 Contributing

Found a bug or have suggestions? Feel free to:
1. Open an [issue](https://github.com/Aryan0312/POMODORO-TIMER/issues)
2. Submit a [pull request](https://github.com/Aryan0312/POMODORO-TIMER/pulls)

## 📝 License

This project is open source and available under the **MIT License**.

## 🔗 Resources

- [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) - Original concept
- [MDN Web Docs](https://developer.mozilla.org/) - Web API references
- [CSS-Tricks](https://css-tricks.com/) - CSS tips and tricks

## 👨‍💻 Author

**Aryan Shrivastav**
- GitHub: [@Aryan0312](https://github.com/Aryan0312)
- LinkedIn: [Aryan Shrivastav](https://www.linkedin.com/in/aryan-shrivastav/)
- Email: aryanshrivastav.dev@gmail.com

---

**Built with ❤️ to help you stay productive!**

⭐ If you find this useful, please star the repository!

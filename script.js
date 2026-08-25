// ========================================
// POMODORO TIMER - Enhanced Version
// ========================================

const CONFIG = {
    WORK_DURATION: 25 * 60,      // 25 minutes
    SHORT_BREAK: 5 * 60,         // 5 minutes
    LONG_BREAK: 15 * 60,         // 15 minutes
};

let state = {
    timeLeft: CONFIG.WORK_DURATION,
    totalTime: CONFIG.WORK_DURATION,
    isRunning: false,
    isWorkSession: true,
    timerId: null,
};

// ========================================
// DOM Elements
// ========================================
const timerDisplay = document.getElementById('timer');
const sessionTypeDisplay = document.getElementById('sessionType');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const workBtn = document.getElementById('workBtn');
const breakBtn = document.getElementById('breakBtn');
const longBreakBtn = document.getElementById('longBreakBtn');
const progressFill = document.getElementById('progressFill');

// ========================================
// Display & Formatting
// ========================================
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(state.timeLeft);
    sessionTypeDisplay.textContent = state.isWorkSession ? '💼 Work Session' : '☕ Break Time';
    
    // Update progress bar
    const progress = ((state.totalTime - state.timeLeft) / state.totalTime) * 100;
    progressFill.style.width = progress + '%';
    
    // Update page title
    document.title = `${formatTime(state.timeLeft)} - Pomodoro Timer`;
}

function playNotification() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio notification not available');
    }
}

function showNotification(message) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('🍅 Pomodoro Timer', {
            body: message,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75">🍅</text></svg>'
        });
    }
}

// ========================================
// Timer Logic
// ========================================
function startTimer() {
    if (state.isRunning) return;
    
    state.isRunning = true;
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
    
    state.timerId = setInterval(() => {
        state.timeLeft--;
        updateDisplay();
        
        if (state.timeLeft === 0) {
            clearInterval(state.timerId);
            state.isRunning = false;
            playNotification();
            
            const message = state.isWorkSession 
                ? '✅ Work session complete! Time for a break.' 
                : '🔔 Break time is over! Ready to work?';
            
            showNotification(message);
            alert(message);
            
            // Auto-switch to break/work
            toggleSession();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(state.timerId);
    state.isRunning = false;
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
}

function resetTimer() {
    clearInterval(state.timerId);
    state.isRunning = false;
    state.timeLeft = state.isWorkSession ? CONFIG.WORK_DURATION : CONFIG.SHORT_BREAK;
    state.totalTime = state.timeLeft;
    
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    
    updateDisplay();
}

function setSession(duration, isWork) {
    clearInterval(state.timerId);
    state.isRunning = false;
    state.isWorkSession = isWork;
    state.timeLeft = duration;
    state.totalTime = duration;
    
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    
    updateDisplay();
}

function toggleSession() {
    if (state.isWorkSession) {
        // Switch to break
        setSession(CONFIG.SHORT_BREAK, false);
    } else {
        // Switch to work
        setSession(CONFIG.WORK_DURATION, true);
    }
}

// ========================================
// Event Listeners
// ========================================
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

workBtn.addEventListener('click', () => setSession(CONFIG.WORK_DURATION, true));
breakBtn.addEventListener('click', () => setSession(CONFIG.SHORT_BREAK, false));
longBreakBtn.addEventListener('click', () => setSession(CONFIG.LONG_BREAK, false));

// ========================================
// Keyboard Shortcuts
// ========================================
document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'Space':
            e.preventDefault();
            state.isRunning ? pauseTimer() : startTimer();
            break;
        case 'KeyR':
            resetTimer();
            break;
        case 'KeyW':
            setSession(CONFIG.WORK_DURATION, true);
            break;
        case 'KeyB':
            setSession(CONFIG.SHORT_BREAK, false);
            break;
    }
});

// ========================================
// Browser Notifications Setup
// ========================================
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// ========================================
// Initialize Display
// ========================================
updateDisplay();

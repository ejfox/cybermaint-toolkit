/**
 * @file cybermaint-toolkit.js
 * @description A toolkit for creating cyberpunk-style tools with immersive features.
 */

const blessed = require("blessed");
const child_process = require("child_process");

/**
 * Creates a typing animation effect for text.
 * @param {string} text - The text to animate.
 * @param {blessed.Widgets.BoxElement} element - The blessed element to render the text in.
 * @param {function} [callback] - Optional callback to run after animation completes.
 * @param {number} [speed=50] - The speed of typing in milliseconds.
 * @example
 * const box = blessed.box({ width: '100%', height: '100%' });
 * screen.append(box);
 * animateTyping("Hello, Operator.", box, () => console.log("Animation complete!"));
 */
function animateTyping(text, element, callback, speed = 50) {
  let i = 0;
  const interval = setInterval(() => {
    element.setContent(text.slice(0, i));
    element.screen.render();
    i++;
    if (i > text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

/**
 * Applies a glitch effect to the screen content.
 * @param {blessed.screen} screen - The blessed screen object.
 * @param {number} [duration=500] - Duration of the glitch effect in milliseconds.
 * @example
 * const screen = blessed.screen();
 * glitchEffect(screen, 1000);
 */
function glitchEffect(screen, duration = 500) {
  const originalContent = screen.content;
  const glitchChars = ["#", "%", "&", "@", "!", "*"];
  let glitchInterval = setInterval(() => {
    screen.setContent(
      screen.content
        .split("")
        .map((char) =>
          Math.random() > 0.9
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char
        )
        .join("")
    );
    screen.render();
  }, 50);
  setTimeout(() => {
    clearInterval(glitchInterval);
    screen.setContent(originalContent);
    screen.render();
  }, duration);
}

/**
 * Plays a sound file using the system's default audio player.
 * @param {string} soundFile - Path to the sound file.
 * @example
 * playSound('path/to/cyberpunk_ambience.mp3');
 */
function playSound(soundFile) {
  const command = process.platform === "darwin" ? "afplay" : "mpg123";
  child_process.exec(`${command} ${soundFile}`);
}

/**
 * Creates a countdown timer on the screen.
 * @param {blessed.screen} screen - The blessed screen object.
 * @param {number} seconds - The number of seconds to count down from.
 * @param {function} callback - Function to call when countdown reaches zero.
 * @returns {blessed.Widgets.BoxElement} The countdown box element.
 * @example
 * const screen = blessed.screen();
 * startCountdown(screen, 60, () => console.log("Time's up!"));
 */
function startCountdown(screen, seconds, callback) {
  let timeLeft = seconds;
  const countdownBox = blessed.box({
    bottom: 2,
    left: "center",
    width: "30%",
    height: "shrink",
    tags: true,
    style: { fg: "red", bg: "black" },
  });
  screen.append(countdownBox);
  screen.render();

  const timer = setInterval(() => {
    timeLeft--;
    countdownBox.setContent(`Time remaining: ${timeLeft} seconds`);
    screen.render();
    if (timeLeft <= 0) {
      clearInterval(timer);
      callback();
    }
  }, 1000);

  return countdownBox;
}

/**
 * Creates a bordered box with ASCII-style borders.
 * @param {string} content - The content to put inside the box.
 * @returns {string} The content wrapped in an ASCII border.
 * @example
 * console.log(createAsciiBox("Welcome, Operator."));
 */
function createAsciiBox(content) {
  const lines = content.split("\n");
  const width = Math.max(...lines.map((line) => line.length)) + 2;
  const top = `╔${"═".repeat(width)}╗`;
  const bottom = `╚${"═".repeat(width)}╝`;
  const paddedLines = lines.map((line) => `║ ${line.padEnd(width - 2)} ║`);
  return [top, ...paddedLines, bottom].join("\n");
}

/**
 * Creates a "hacker-style" scrolling effect for an array of strings.
 * @param {blessed.screen} screen - The blessed screen object.
 * @param {string[]} lines - Array of strings to scroll.
 * @param {number} [speed=100] - Speed of scrolling in milliseconds.
 * @example
 * const screen = blessed.screen();
 * const hackerLines = ["Accessing mainframe...", "Bypassing firewall...", "Download complete."];
 * hackerScroll(screen, hackerLines);
 */
function hackerScroll(screen, lines, speed = 100) {
  const box = blessed.box({
    top: "center",
    left: "center",
    width: "80%",
    height: "80%",
    style: {
      fg: "green",
      bg: "black",
    },
  });
  screen.append(box);

  let i = 0;
  const interval = setInterval(() => {
    if (i >= lines.length) {
      clearInterval(interval);
      return;
    }
    box.pushLine(lines[i]);
    screen.render();
    i++;
  }, speed);
}

module.exports = {
  animateTyping,
  glitchEffect,
  playSound,
  startCountdown,
  createAsciiBox,
  hackerScroll,
};

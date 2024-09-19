const blessed = require("blessed");
const {
  animateTyping,
  glitchEffect,
  playSound,
  startCountdown,
  createAsciiBox,
  hackerScroll,
} = require("./index");

// Create a screen object
const screen = blessed.screen({
  smartCSR: true,
  title: "Cybermaint Toolkit Playground",
});

// Create a box for output
const outputBox = blessed.box({
  top: 0,
  left: 0,
  width: "100%",
  height: "90%",
  content: "",
  tags: true,
  border: {
    type: "line",
  },
  style: {
    fg: "white",
    bg: "black",
    border: {
      fg: "#f0f0f0",
    },
  },
  scrollable: true,
  alwaysScroll: true,
  scrollbar: {
    ch: " ",
    track: {
      bg: "cyan",
    },
    style: {
      inverse: true,
    },
  },
});

// Create a box for user input
const inputBox = blessed.textarea({
  bottom: 0,
  left: 0,
  height: "10%",
  width: "100%",
  inputOnFocus: true,
  padding: {
    top: 1,
    left: 2,
  },
  style: {
    fg: "#787878",
    bg: "#454545",
    focus: {
      fg: "#f6f6f6",
      bg: "#353535",
    },
  },
});

// Append boxes to the screen
screen.append(outputBox);
screen.append(inputBox);

// Focus on the input box
inputBox.focus();

// Quit on Escape, q, or Control-C
screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

// Handle user input
inputBox.key("enter", function (ch, key) {
  const command = this.getValue().trim();
  this.clearValue();
  screen.render();
  processCommand(command);
});

function processCommand(command) {
  switch (command.toLowerCase()) {
    case "type":
      animateTyping("Welcome to the Cybermaint Toolkit!", outputBox, () => {
        outputBox.pushLine("\nTyping animation complete.");
        screen.render();
      });
      break;
    case "glitch":
      outputBox.pushLine("Applying glitch effect...");
      screen.render();
      glitchEffect(screen, 2000);
      break;
    case "sound":
      outputBox.pushLine(
        "Playing sound... (Make sure you have a sound file and proper audio setup)"
      );
      screen.render();
      playSound("path/to/your/sound/file.mp3");
      break;
    case "countdown":
      outputBox.pushLine("Starting countdown...");
      screen.render();
      startCountdown(screen, 10, () => {
        outputBox.pushLine("Countdown finished!");
        screen.render();
      });
      break;
    case "box":
      const asciiBox = createAsciiBox(
        "Welcome to Cybermaint\nEnjoy your stay, operator."
      );
      outputBox.pushLine(asciiBox);
      screen.render();
      break;
    case "scroll":
      const hackerLines = [
        "Initializing cyberdeck...",
        "Connecting to the grid...",
        "Bypassing ICE...",
        "Accessing restricted data...",
        "Download complete.",
        "Covering tracks...",
      ];
      hackerScroll(screen, hackerLines);
      break;
    case "help":
      outputBox.pushLine(
        "Available commands: type, glitch, sound, countdown, box, scroll, help, clear, exit"
      );
      screen.render();
      break;
    case "clear":
      outputBox.setContent("");
      screen.render();
      break;
    case "exit":
      process.exit(0);
    default:
      outputBox.pushLine(`Unknown command: ${command}`);
      outputBox.pushLine("Type 'help' for a list of commands.");
      screen.render();
  }
}

// Initial instructions
outputBox.pushLine("Welcome to the Cybermaint Toolkit Playground!");
outputBox.pushLine("Type 'help' for a list of available commands.");
screen.render();

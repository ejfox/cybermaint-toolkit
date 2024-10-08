
# Cybermaint Toolkit

A toolkit for creating cyberpunk-style tools with immersive features.

## Using the Playground

The Cybermaint Toolkit comes with a playground where you can interactively test all the features. To use the playground:

1. Make sure you have Node.js installed on your system.
2. Navigate to the project directory in your terminal.
3. Run the playground using the command:

```bash
node playground.js
```
4. Once the playground starts, you can enter commands to test different features:
- `type`: Demonstrates typing animation
- `glitch`: Applies a glitch effect to the screen
- `sound`: Plays a sound (ensure you have a sound file path configured)
- `countdown`: Starts a 10-second countdown
- `box`: Displays text in an ASCII box
- `scroll`: Shows hacker-style scrolling text
- `help`: Lists all available commands
- `clear`: Clears the output screen
- `exit`: Quits the playground

5. Type your commands in the input box at the bottom of the screen and press Enter to execute.


### Table of Contents

*   [blessed][1]
*   [animateTyping][2]
    *   [Parameters][3]
    *   [Examples][4]
*   [glitchEffect][5]
    *   [Parameters][6]
    *   [Examples][7]
*   [playSound][8]
    *   [Parameters][9]
    *   [Examples][10]
*   [startCountdown][11]
    *   [Parameters][12]
    *   [Examples][13]
*   [createAsciiBox][14]
    *   [Parameters][15]
    *   [Examples][16]
*   [hackerScroll][17]
    *   [Parameters][18]
    *   [Examples][19]

## blessed

A toolkit for creating cyberpunk-style tools with immersive features.

## animateTyping

Creates a typing animation effect for text.

### Parameters

*   `text` **[string][20]** The text to animate.
*   `element` **blessed.Widgets.BoxElement** The blessed element to render the text in.
*   `callback` **[function][21]?** Optional callback to run after animation completes.
*   `speed` **[number][22]** The speed of typing in milliseconds. (optional, default `50`)

### Examples

```javascript
const box = blessed.box({ width: '100%', height: '100%' });
screen.append(box);
animateTyping("Hello, Operator.", box, () => console.log("Animation complete!"));
```

## glitchEffect

Applies a glitch effect to the screen content.

### Parameters

*   `screen` **blessed.screen** The blessed screen object.
*   `duration` **[number][22]** Duration of the glitch effect in milliseconds. (optional, default `500`)

### Examples

```javascript
const screen = blessed.screen();
glitchEffect(screen, 1000);
```

## playSound

Plays a sound file using the system's default audio player.

### Parameters

*   `soundFile` **[string][20]** Path to the sound file.

### Examples

```javascript
playSound('path/to/cyberpunk_ambience.mp3');
```

## startCountdown

Creates a countdown timer on the screen.

### Parameters

*   `screen` **blessed.screen** The blessed screen object.
*   `seconds` **[number][22]** The number of seconds to count down from.
*   `callback` **[function][21]** Function to call when countdown reaches zero.

### Examples

```javascript
const screen = blessed.screen();
startCountdown(screen, 60, () => console.log("Time's up!"));
```

Returns **blessed.Widgets.BoxElement** The countdown box element.

## createAsciiBox

Creates a bordered box with ASCII-style borders.

### Parameters

*   `content` **[string][20]** The content to put inside the box.

### Examples

```javascript
console.log(createAsciiBox("Welcome, Operator."));
```

Returns **[string][20]** The content wrapped in an ASCII border.

## hackerScroll

Creates a "hacker-style" scrolling effect for an array of strings.

### Parameters

*   `screen` **blessed.screen** The blessed screen object.
*   `lines` **[Array][23]<[string][20]>** Array of strings to scroll.
*   `speed` **[number][22]** Speed of scrolling in milliseconds. (optional, default `100`)

### Examples

```javascript
const screen = blessed.screen();
const hackerLines = ["Accessing mainframe...", "Bypassing firewall...", "Download complete."];
hackerScroll(screen, hackerLines);
```

[1]: #blessed

[2]: #animatetyping

[3]: #parameters

[4]: #examples

[5]: #glitcheffect

[6]: #parameters-1

[7]: #examples-1

[8]: #playsound

[9]: #parameters-2

[10]: #examples-2

[11]: #startcountdown

[12]: #parameters-3

[13]: #examples-3

[14]: #createasciibox

[15]: #parameters-4

[16]: #examples-4

[17]: #hackerscroll

[18]: #parameters-5

[19]: #examples-5

[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[22]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[23]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

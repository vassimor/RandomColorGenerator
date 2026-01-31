This is a random color generator program.

TODOS
- [ ] Create a test folder in .github/workflows.test.yml.
- [ ] Create a block of 31x9 hashtags #9 
- [ ] put a hole in the middle of this block
- [ ] Put a hex number in the middle
- [ ] Generate a random hex code
- [ ] Use this code to make the block appear in this color
- [ ] Accept and use hue and luminosity to generate matching 
       colors to match the choices



1.Generate a random hex color code

```bash
node index.js

#1c2256

node index.js

#561c2e

```

When a user enters `node index.js` in the command line, a block of 31x9 `#` characters colored with a random color (using hex code, e.g. `#ff0000`) should be generated.

```bash

node index.js #561c2e

################################
################################
################################
#####                      #####
#####      #563c1r         #####
#####                      #####
################################
################################
################################
```
```bash

node index.js red

################################
################################
################################
#####                      #####
#####      #FF0000       #####
#####                      #####
################################
################################
################################
```
```bash

node index.js green light

################################
################################
################################
#####                      #####
#####      #90EE90       #####
#####                      #####
################################
################################
################################
```

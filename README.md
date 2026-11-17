# C Learning Lab

A responsive, interactive static learning site for studying C from first principles through pointers, memory ownership, library use, and safer systems programming.

## Run locally

Open `index.html` in a browser, or serve this directory locally:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Learning features

- Seven-stage beginner-to-advanced learning roadmap
- Interactive concept explorer with compilable examples and practical takeaways
- Memory-storage visualization with lifecycle-focused explanations
- Practice prompts with progressive hints
- Self-paced knowledge-check quiz with answer explanations
- Field guide to common C standard-library headers
- Links to public standards material, cppreference, GNU libc documentation, and Linux man-pages
- Responsive layout, keyboard focus styling, and reduced-motion support

## A good way to study

1. Start with the roadmap and write each example in a local `.c` file.
2. Compile with warnings enabled, for example `cc -std=c17 -Wall -Wextra -Wpedantic file.c -o program`.
3. Predict the output before running the program; change one thing and test again.
4. Attempt a practice prompt before revealing its hint.
5. Use the linked references to verify details and differences between C standards or platforms.

The site is a learning aid, not a substitute for checking the applicable C standard, platform documentation, and compiler diagnostics. The linked N1570 document is a public C11 committee draft, not the published ISO text.

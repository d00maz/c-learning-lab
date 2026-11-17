# C Learning Lab

A small, dependency-free C programming course delivered as a static website. It is designed to teach through short lessons, working examples, practice prompts, hints, and source references—not to be a wall of documentation.

## Run locally

You need a browser and Python 3 (or another static file server). From the repository root:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Course features

- 12 lessons arranged into five stages, from a first program through debugging and undefined behavior
- Lesson objectives, explanations, examples, exercises, optional hints, and sample solutions
- Searchable lesson navigation with previous/next controls
- Browser-local completion tracking using `localStorage`
- Links from lessons to relevant language, library, and secure-coding references
- Responsive layout and keyboard-focus styling

## Project structure

```text
.
├── index.html   # Semantic page shell and reference list
├── styles.css   # Responsive visual design
├── script.js    # Lesson content, navigation, disclosures, and progress
└── README.md    # Project setup and contributor notes
```

The course content lives in the `LESSONS` array in `script.js`. Each lesson follows the same data shape, which keeps content separate from rendering. To add a lesson, provide a unique `id`, a stage, learning objectives, explanation, code example, exercise, hint, solution, and source links.

## Development notes

- No build step or package installation is required.
- Progress is saved on the current browser/device; it is not an account or cloud sync.
- Examples target hosted C and generally use C17. Compiler options and sanitizer availability vary by platform.
- Use `cc -std=c17 -Wall -Wextra -Wpedantic source.c -o program` as a starting point for compiling exercises. Add platform-supported sanitizers during development where appropriate.
- N1570 linked in the site is a public C11 committee draft, not the published ISO standard. Platform manuals should be read as platform-specific documentation.

## References

- [cppreference — C](https://en.cppreference.com/w/c)
- [WG14 N1570 public draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)
- [GNU C Library manual](https://www.gnu.org/software/libc/manual/html_node/)
- [Linux man-pages](https://man7.org/linux/man-pages/)
- [SEI CERT C Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard)

## License

MIT. See [LICENSE](LICENSE).

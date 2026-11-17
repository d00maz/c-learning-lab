const modules = [
  {
    id: 'foundation',
    title: 'Foundations',
    level: 'Beginner',
    summary: 'Learn how a C program is built, compiled, and executed, then control the program with expressions and flow.',
    objective: 'Understand source files, compiler feedback, and the structure of a working program.',
    points: [
      'Compile and link a C file from the terminal.',
      'Understand the role of main, return codes, and toolchains.',
      'Write loops, conditionals, and functions from first principles.'
    ],
    code: '#include <stdio.h>\n\nint main(void) {\n    int total = 0;\n    for (int i = 1; i <= 5; ++i) {\n        total += i;\n    }\n    printf("sum=%d\\n", total);\n    return 0;\n}',
    exercise: 'Write a program that prints the first 10 Fibonacci numbers using a loop and an array.',
    myth: 'Modern languages hide much of the build process. C makes you understand it explicitly.',
    references: ['cc -std=c17 -Wall -Wextra -Wpedantic file.c -o app', 'main returns an exit code to the OS', 'Use compiler warnings as part of the development process']
  },
  {
    id: 'types',
    title: 'Types & conversions',
    level: 'Beginner',
    summary: 'C is explicit about size, value, and conversion, so choice of type affects correctness and behavior.',
    objective: 'Understand integer sizes, char, float, and why implicit conversions matter.',
    points: [
      'Different integer types have different widths and ranges.',
      'Lossy conversion can quietly change the meaning of a value.',
      'Overflow is not a safe or portable behavior in C.'
    ],
    code: 'int count = 2147483647;\ndouble average = 5.75;\nchar letter = \'A\';\n\nprintf("count=%d average=%.2f letter=%c\\n", count, average, letter);',
    exercise: 'Create a program that reads an integer and prints whether it is even or odd, using a careful type and error check.',
    myth: 'A value “fits” in a type only by the range of the type, not by how it looks on the screen.',
    references: ['Use the right printf conversion specifier', 'Be careful with signed vs unsigned arithmetic', 'Prefer explicit conversions when the domain requires it']
  },
  {
    id: 'arrays',
    title: 'Arrays & strings',
    level: 'Beginner',
    summary: 'Arrays are contiguous memory and strings are char arrays terminated by a null byte.',
    objective: 'Write safe array logic and understand string termination and bounds.',
    points: [
      'Arrays do not carry their length at runtime.',
      'Strings end with a terminating '\0' byte.',
      'Writing beyond an array boundary causes undefined behavior.'
    ],
    code: 'char greeting[] = "hello";\nint scores[4] = {90, 88, 94, 96};\n\nprintf("%s -> %d\\n", greeting, scores[2]);',
    exercise: 'Implement a function that counts the number of vowels in a string while walking it with a pointer.',
    myth: 'If it prints once, it must be correct. In C, memory bugs can appear later and only under certain conditions.',
    references: ['strlen counts until '\0'', 'Use fgets or bounded input for strings', 'Do not call gets — it is not safe']
  },
  {
    id: 'pointers',
    title: 'Pointers & indirection',
    level: 'Intermediate',
    summary: 'Pointers are addresses. They let C manipulate memory directly, but they also expose the program to aliasing and lifetime errors.',
    objective: 'Use pointers to pass values by reference, traverse arrays, and reason about validity.',
    points: [
      'A pointer stores an address; dereferencing reads or writes the pointed object.',
      'Pointer arithmetic is based on the pointed-to type.',
      'Null checks are not enough to prove a pointer is valid.'
    ],
    code: 'int age = 28;\nint *ptr = &age;\n*ptr = 30;\nprintf("age=%d\\n", age);',
    exercise: 'Write a function that swaps two integers using pointer arguments and test it with a main function.',
    myth: 'A pointer is just a number with a name. In reality, valid use depends on the object it points at and its lifetime.',
    references: ['Use *ptr to access the pointed object', 'Do not dereference an invalid pointer', 'Use const when the pointed object should not be modified']
  },
  {
    id: 'memory',
    title: 'Memory model',
    level: 'Intermediate',
    summary: 'C programs live in stack, static, and heap storage. Understanding lifetime is the difference between safe code and broken code.',
    objective: 'Reason about object lifetime, storage duration, and ownership rules.',
    points: [
      'Automatic storage lasts until the block exits.',
      'Allocated storage lasts until free() is called.',
      'Static storage outlives the function call.'
    ],
    code: '#include <stdlib.h>\n\nint *values = malloc(3 * sizeof *values);\nif (!values) return 1;\nvalues[0] = 10;\nfree(values);\nvalues = NULL;',
    exercise: 'Write a function that allocates an array of ints, fills it, and returns the pointer if successful; free it in the caller.',
    myth: 'Heap memory is “free” because the OS manages it. In C, the programmer owns the cleanup contract, not the runtime.',
    references: ['Every successful malloc needs a matching free', 'Check size multiplication before allocation', 'Consider realloc for growth while preserving data']
  },
  {
    id: 'structs',
    title: 'Structs & APIs',
    level: 'Intermediate',
    summary: 'Structs allow you to define records and build clean interfaces with explicit ownership and invariants.',
    objective: 'Design data records and modular code with header files and function contracts.',
    points: [
      'A struct groups related data under one type.',
      'Passing the struct by value copies it; passing a pointer avoids that copy.',
      'Use headers to expose interfaces without leaking implementation details.'
    ],
    code: 'typedef struct {\n    char name[32];\n    int score;\n} Student;\n\nStudent s = {"Mia", 96};\nprintf("%s %d\\n", s.name, s.score);',
    exercise: 'Define a struct with name, age, and score, then write a function to print it and another to update score.',
    myth: 'Structs are just containers. They become powerful only when their invariants and ownership rules are clear.',
    references: ['Use headers for declarations', 'Keep function contracts explicit', 'Prefer pointer arguments when the structure is large or should be updated']
  },
  {
    id: 'files',
    title: 'Files & errors',
    level: 'Intermediate',
    summary: 'Real C programs read and write files and manage system errors using stream and errno-based APIs.',
    objective: 'Handle files and error reporting realistically instead of assuming every operation works.',
    points: [
      'Open file handles with the correct mode.',
      'Check the return value of each file and library call.',
      'Use errno and perror to communicate failures clearly.'
    ],
    code: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("notes.txt", "w");\n    if (!f) {\n        perror("fopen");\n        return 1;\n    }\n    fputs("C is precise\\n", f);\n    fclose(f);\n}',
    exercise: 'Write a program that reads a text file line-by-line and counts how many non-empty lines it contains.',
    myth: 'A file is only as reliable as the call that opened it. Always validate file operations and cleanup paths.',
    references: ['Check fopen return value', 'Use fgets for safe line input', 'Close files after write or read operations']
  },
  {
    id: 'debug',
    title: 'Debugging & tools',
    level: 'Advanced',
    summary: 'Professional C practice involves warnings, sanitizers, assertions, and understanding undefined behavior.',
    objective: 'Use the compiler and runtime tools to locate memory and logic faults before deployment.',
    points: [
      'Enable warnings and sanitizers in normal development.',
      'Use asan/ubsan to expose invalid memory and arithmetic.',
      'Treat undefined behavior as a correctness issue, not as a harmless quirk.'
    ],
    code: 'cc -std=c17 -Wall -Wextra -Wpedantic -O1 -fsanitize=address -g program.c -o program',
    exercise: 'Compile a small buggy program with sanitizers and explain the error report in your own words.',
    myth: 'If the code “works on my machine,” it is still not correct. C is often sensitive to UB and optimization differences.',
    references: ['Compiler warnings are infrastructure, not optional decoration', 'Use AddressSanitizer and UndefinedBehaviorSanitizer', 'Read backtraces and source locations carefully']
  },
  {
    id: 'safe-c',
    title: 'Safe C practice',
    level: 'Advanced',
    summary: 'Good C is not clever; it is explicit, validated, and easy to reason about under stress.',
    objective: 'Build habits that make code maintainable, testable, and less likely to fail under real workloads.',
    points: [
      'Use clear ownership rules for every pointer and allocation.',
      'Check bounds and failure paths instead of trusting assumptions.',
      'Prefer clear code over clever micro-optimizations.'
    ],
    code: 'int *buffer = malloc(n * sizeof *buffer);\nif (!buffer) {\n    fprintf(stderr, "allocation failed\\n");\n    return 1;\n}\n// use buffer\nfree(buffer);\nbuffer = NULL;',
    exercise: 'Review a short C program for hidden UB and propose a safer rewrite with comments explaining each change.',
    myth: 'The fastest program is not always the correct or maintainable one. In C, correctness and safety are part of performance.',
    references: ['Document obvious invariants', 'Validate assumptions with tests', 'Use the standard API, not ad-hoc “works in my environment” logic']
  }
];

const moduleList = document.getElementById('module-list');
const moduleContent = document.getElementById('module-content');
let currentModuleId = modules[0].id;

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
}

function renderModules() {
  moduleList.innerHTML = '';

  modules.forEach((module) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'module-button';
    if (module.id === currentModuleId) button.classList.add('is-active');
    button.innerHTML = `<strong>${module.title}</strong><span>${module.level}</span>`;
    button.addEventListener('click', () => {
      currentModuleId = module.id;
      renderModules();
      renderModuleContent();
    });
    moduleList.appendChild(button);
  });
}

function renderModuleContent() {
  const module = modules.find((item) => item.id === currentModuleId) || modules[0];

  moduleContent.innerHTML = `
    <div class="lesson-shell">
      <div class="lesson-header">
        <h2>${escapeHtml(module.title)}</h2>
        <span class="level-pill">${escapeHtml(module.level)}</span>
      </div>

      <div class="lesson-grid">
        <article class="lesson-card">
          <h3>Why this matters</h3>
          <p>${escapeHtml(module.summary)}</p>
          <ul>
            ${module.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
          </ul>
        </article>

        <article class="note-card">
          <h3>Key idea</h3>
          <p>${escapeHtml(module.myth)}</p>
        </article>
      </div>

      <div class="lesson-grid">
        <article class="lesson-card">
          <h3>Example</h3>
          <div class="code-box">
            <pre><code>${escapeHtml(module.code)}</code></pre>
          </div>
        </article>

        <article class="exercise-card">
          <h3>Exercise</h3>
          <p>${escapeHtml(module.objective)}</p>
          <pre><code>${escapeHtml(module.exercise)}</code></pre>
        </article>
      </div>

      <div class="note-card">
        <h3>Reference signals</h3>
        <ul>
          ${module.references.map((reference) => `<li>${escapeHtml(reference)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

const quizQuestions = [
  {
    question: 'What is the relationship between a variable and a pointer in C?',
    options: ['A pointer is a value type that stores data directly', 'A pointer stores the address of another object', 'A pointer is always a string', 'A pointer cannot be used with arrays'],
    answer: 'A pointer stores the address of another object',
    explain: 'A pointer stores an address, and dereferencing reads or writes the object located there.'
  },
  {
    question: 'Why is checking malloc result important?',
    options: ['It is optional because C allocates memory automatically', 'It prevents dereferencing a null pointer on failure', 'It avoids using the stack', 'It is only needed for strings'],
    answer: 'It prevents dereferencing a null pointer on failure',
    explain: 'malloc returns NULL when allocation fails; dereferencing it is undefined behavior.'
  },
  {
    question: 'What does a C string require to be safely terminated?',
    options: ['A null terminator', 'A newline character', 'A space at the end', 'A stored length field'],
    answer: 'A null terminator',
    explain: 'The terminating null byte tells string functions where the character sequence ends.'
  },
  {
    question: 'Which is the best practice when compiling C code?',
    options: ['Ignore warnings', 'Compile with warnings enabled and fix issues', 'Turn off optimization', 'Use only release builds'],
    answer: 'Compile with warnings enabled and fix issues',
    explain: 'Warnings catch common issues early; sanitizers catch deeper memory problems.'
  },
  {
    question: 'What is a typical source of undefined behavior?',
    options: ['Using a const-qualified object', 'Writing past the end of an array', 'Including stdlib.h', 'Calling printf correctly'],
    answer: 'Writing past the end of an array',
    explain: 'Out-of-bounds access is undefined behavior and can produce very hard-to-debug issues.'
  }
];

let quizIndex = 0;
let answered = false;

const quizProgress = document.getElementById('quiz-progress');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNext = document.getElementById('quiz-next');

function renderQuiz() {
  answered = false;
  const item = quizQuestions[quizIndex];
  quizProgress.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = '';
  quizFeedback.className = 'quiz-feedback';
  quizNext.hidden = true;
  quizOptions.replaceChildren();

  item.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => answerQuiz(option));
    quizOptions.appendChild(button);
  });
}

function answerQuiz(selected) {
  if (answered) return;
  answered = true;
  const item = quizQuestions[quizIndex];
  const correct = selected === item.answer;

  [...quizOptions.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add('correct');
    else if (button.textContent === selected) button.classList.add('incorrect');
  });

  quizFeedback.className = `quiz-feedback ${correct ? 'success' : 'error'}`;
  quizFeedback.textContent = `${correct ? 'Correct.' : 'Not quite.'} ${item.explain}`;
  quizNext.hidden = false;
}

quizNext.addEventListener('click', () => {
  quizIndex = (quizIndex + 1) % quizQuestions.length;
  renderQuiz();
});

renderModules();
renderModuleContent();
renderQuiz();


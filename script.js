const concepts = {
  firstProgram: {
    title: 'The first program: compile, link, run',
    summary: 'A C source file is translated into a program by a toolchain. Learn to read compiler diagnostics instead of treating compilation as magic.',
    code: '#include <stdio.h>\n\nint main(void) {\n    puts("Hello, C!");\n    return 0;\n}',
    lesson: 'Try compiling with a C compiler in a terminal: cc -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello. Warnings are useful feedback; fix them rather than hiding them.'
  },
  variables: {
    title: 'Variables and types',
    summary: 'C objects have types, values, and lifetimes. Choose a type that represents the data and initialize objects before reading them.',
    code: 'int count = 10;\ndouble average = 5.75;\nchar initial = \'A\';\n\nprintf("count=%d average=%.2f initial=%c\\n",\n       count, average, initial);',
    lesson: 'The conversion specifier passed to printf must match the argument type. A mismatch can invoke undefined behavior; consult the printf reference.'
  },
  functions: {
    title: 'Functions and interfaces',
    summary: 'Functions give a program understandable units. A function declaration tells callers its name, parameters, and return type.',
    code: 'int add(int left, int right) {\n    return left + right;\n}\n\nint main(void) {\n    printf("%d\\n", add(10, 32));\n}',
    lesson: 'C passes arguments by value. To let a function modify a caller’s object, pass a pointer to that object and document the contract.'
  },
  arrays: {
    title: 'Arrays and strings',
    summary: 'An array contains a fixed number of elements of one type. A C string is a sequence of char values ending in a null character.',
    code: 'int scores[] = {88, 92, 95};\nchar name[] = "Ada";\n\nprintf("%d %s\\n", scores[1], name);',
    lesson: 'C does not automatically check array bounds. Do not index beyond the number of elements. A string buffer needs room for its terminating \'\\0\'.'
  },
  pointers: {
    title: 'Pointers and indirection',
    summary: 'A pointer value refers to an object (or function). The address-of operator obtains an object’s address; unary * accesses the pointed-to object.',
    code: 'int age = 28;\nint *age_ptr = &age;\n\n*age_ptr = 29;\nprintf("%d\\n", age);',
    lesson: 'Only dereference a pointer when it points to a live, suitably aligned object of the expected type. A null check alone cannot prove every pointer is valid.'
  },
  memory: {
    title: 'Dynamic allocation and ownership',
    summary: 'Allocated storage remains available until released. Handle allocation failure and make the owner responsible for exactly one cleanup.',
    code: '#include <stdlib.h>\n\nsize_t count = 5;\nint *items = malloc(count * sizeof *items);\nif (items == NULL) {\n    /* handle allocation failure */\n    return 1;\n}\n/* use items[0] through items[count - 1] */\nfree(items);\nitems = NULL;',
    lesson: 'Do not use the pointer after free. Check that size calculations cannot overflow before allocating, and free each allocation exactly once.'
  },
  structs: {
    title: 'Structures and data design',
    summary: 'A struct groups related fields into one object. Keep invariants and ownership rules visible in the API that uses it.',
    code: 'typedef struct {\n    const char *name;\n    unsigned int score;\n} Result;\n\nResult r = { .name = "Ada", .score = 95 };\nprintf("%s: %u\\n", r.name, r.score);',
    lesson: 'A struct containing a pointer does not automatically own the pointed-to data. State whether fields borrow data or own allocations.'
  },
  files: {
    title: 'Files and error handling',
    summary: 'The standard I/O library exposes files as streams. Opening and writing can fail, so check the results and close resources.',
    code: '#include <stdio.h>\n\nFILE *file = fopen("notes.txt", "w");\nif (file == NULL) {\n    perror("fopen");\n    return 1;\n}\nif (fputs("Hello, C!\\n", file) == EOF) {\n    perror("fputs");\n}\nif (fclose(file) == EOF) {\n    perror("fclose");\n}',
    lesson: 'Use fgets for bounded line input rather than unbounded gets (removed from the language). Check the return value of I/O operations.'
  }
};

const conceptTabs = document.getElementById('concept-tabs');
const conceptPanel = document.getElementById('concept-panel');
let currentConcept = 'firstProgram';

function renderConceptTabs() {
  for (const [key, concept] of Object.entries(concepts)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-btn';
    button.role = 'tab';
    button.setAttribute('aria-selected', String(key === currentConcept));
    button.textContent = concept.title;
    button.addEventListener('click', () => {
      currentConcept = key;
      renderConceptPanel();
    });
    conceptTabs.appendChild(button);
  }
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
}

function renderConceptPanel() {
  const concept = concepts[currentConcept];
  conceptTabs.querySelectorAll('[role="tab"]').forEach((tab, index) => {
    const key = Object.keys(concepts)[index];
    tab.setAttribute('aria-selected', String(key === currentConcept));
    tab.classList.toggle('is-active', key === currentConcept);
  });
  conceptPanel.innerHTML = `<h3>${escapeHtml(concept.title)}</h3><p>${escapeHtml(concept.summary)}</p><div class="example"><pre><code>${escapeHtml(concept.code)}</code></pre></div><div class="takeaway"><strong>Learn it:</strong> ${escapeHtml(concept.lesson)}</div>`;
}

const memoryContent = {
  stack: [
    ['function call', 'main() activation record (illustrative)'],
    ['local object', 'int x = 42'],
    ['pointer object', 'int *p stores the address of x'],
    ['lifetime', 'automatic objects end with their block']
  ],
  heap: [
    ['owner variable', 'int *items'],
    ['allocated block', 'malloc requests storage; check for NULL'],
    ['valid use', 'access only within the allocated bounds'],
    ['cleanup', 'free(items) ends the allocation lifetime']
  ]
};

function renderMemory(mode = 'stack') {
  const diagram = document.getElementById('memory-diagram');
  diagram.innerHTML = memoryContent[mode].map(([label, value]) =>
    `<div class="memory-row"><div class="memory-label">${escapeHtml(label)}</div><div class="memory-box ${mode === 'heap' ? 'heap' : ''}">${escapeHtml(value)}</div></div>`
  ).join('');
  document.querySelectorAll('[data-memory]').forEach((button) => {
    const active = button.dataset.memory === mode;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('secondary', !active);
  });
}

document.querySelectorAll('[data-memory]').forEach((button) => {
  button.addEventListener('click', () => renderMemory(button.dataset.memory));
});

const hints = {
  format: 'Try printf("Count: %d; average: %.2f\\n", count, average). Match each conversion specifier to the argument type.',
  count: 'Include <ctype.h>, walk until the string terminator, and pass (unsigned char)*p to isalpha, isdigit, or isspace.',
  dynamic: 'Before allocation, check the element-count multiplication for overflow. Use malloc(count * sizeof *items), check NULL, and free on every path after success.'
};

document.querySelectorAll('[data-challenge]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.challenge;
    const article = button.closest('.challenge-card');
    let hint = article.querySelector('.challenge-hint');
    if (!hint) {
      hint = document.createElement('p');
      hint.className = 'challenge-hint';
      hint.setAttribute('role', 'status');
      button.insertAdjacentElement('afterend', hint);
      button.textContent = 'Hide hint';
      hint.textContent = hints[key];
    } else {
      hint.remove();
      button.textContent = 'Reveal hint';
    }
  });
});

const questions = [
  { question: 'What operator accesses the object a valid pointer points to?', options: ['&', '*', '%', '->'], answer: '*', explain: 'Unary * performs indirection. The pointer must be valid to dereference it.' },
  { question: 'What should a program do if malloc cannot allocate the requested storage?', options: ['Assume the memory exists', 'Check for a null pointer and handle failure', 'Call free on the result', 'Use the pointer anyway'], answer: 'Check for a null pointer and handle failure', explain: 'malloc returns a null pointer when allocation fails; do not dereference it.' },
  { question: 'What marks the end of a conventional C string?', options: ['A null character', 'A newline in every case', 'The array’s last byte automatically', 'A space'], answer: 'A null character', explain: 'A C string ends at the first null character, written \\0.' },
  { question: 'Which function is a bounded alternative for reading a line into a character array?', options: ['gets', 'fgets', 'strcpy', 'scanf with no width'], answer: 'fgets', explain: 'fgets takes the destination capacity; check its return value and handle a retained newline if needed.' },
  { question: 'When should dynamically allocated storage be released?', options: ['After its last use, by its owner', 'At the end of every loop iteration regardless', 'Never', 'Before the first use'], answer: 'After its last use, by its owner', explain: 'A clear ownership rule helps avoid leaks, double frees, and use-after-free bugs.' }
];
let quizIndex = 0;
let answered = false;
const questionNode = document.getElementById('quiz-question');
const optionsNode = document.getElementById('quiz-options');
const feedbackNode = document.getElementById('quiz-feedback');
const progressNode = document.getElementById('quiz-progress');
const nextButton = document.getElementById('quiz-next');

function renderQuiz() {
  answered = false;
  const item = questions[quizIndex];
  progressNode.textContent = `Question ${quizIndex + 1} of ${questions.length}`;
  questionNode.textContent = item.question;
  feedbackNode.textContent = '';
  feedbackNode.className = 'quiz-feedback';
  nextButton.hidden = true;
  nextButton.textContent = quizIndex === questions.length - 1 ? 'Restart quiz' : 'Next question';
  optionsNode.replaceChildren();
  item.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => answerQuiz(option));
    optionsNode.appendChild(button);
  });
}

function answerQuiz(selected) {
  if (answered) return;
  answered = true;
  const item = questions[quizIndex];
  const correct = selected === item.answer;
  optionsNode.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add('correct');
    else if (button.textContent === selected) button.classList.add('incorrect');
  });
  feedbackNode.className = `quiz-feedback ${correct ? 'success' : 'error'}`;
  feedbackNode.textContent = `${correct ? 'Correct.' : 'Not quite.'} ${item.explain}`;
  nextButton.hidden = false;
}

nextButton.addEventListener('click', () => {
  quizIndex = (quizIndex + 1) % questions.length;
  renderQuiz();
});

renderConceptTabs();
renderConceptPanel();
renderMemory('stack');
renderQuiz();

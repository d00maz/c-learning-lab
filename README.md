const concepts = {
  compile: {
    title: 'Compile, link, and run',
    summary: 'A C program is built in stages. The compiler checks types and syntax; the linker resolves symbols; the OS runs the resulting binary.',
    code: '#include <stdio.h>\n\nint main(void) {\n    puts("Hello, C");\n    return 0;\n}',
    lesson: 'Build with warnings enabled: cc -std=c17 -Wall -Wextra -Wpedantic file.c -o app. Warnings are free feedback; treat them as part of the program design.'
  },
  types: {
    title: 'Types, conversions, and overflow',
    summary: 'C’s type system is explicit. Numeric conversions and overflow rules matter because they can silently change program behavior.',
    code: 'int x = 2147483647;\nint y = x + 1;\nprintf("%d\\n", y);',
    lesson: 'Signed integer overflow is undefined behavior. Prefer safer arithmetic or use wider types when the domain demands it.'
  },
  arrays: {
    title: 'Arrays and strings',
    summary: 'Array indexing is unchecked by the language. A string in C is an array of chars ending with a null byte.',
    code: 'char name[] = "Ada";\nint marks[] = {90, 87, 98};\n\nprintf("%s got %d\\n", name, marks[1]);',
    lesson: 'Do not write beyond the array bounds, and reserve one extra byte for the terminating null character in strings.'
  },
  pointers: {
    title: 'Pointers and indirection',
    summary: 'Pointers store addresses. They are essential for arrays, dynamic memory, and efficient APIs, but they are also one of the most common bug sources.',
    code: 'int value = 42;\nint *ptr = &value;\n*ptr = 99;\nprintf("%d\\n", value);',
    lesson: 'Before dereferencing, make sure the pointer is valid, points to the expected type, and is not null or stale.'
  },
  memory: {
    title: 'Memory ownership and lifetime',
    summary: 'Every object has a lifetime. A pointer remains valid only while the object it points to still exists and is not freed.',
    code: '#include <stdlib.h>\n\nint *numbers = malloc(3 * sizeof *numbers);\nif (numbers == NULL) return 1;\n\nnumbers[0] = 1;\nfree(numbers);',
    lesson: 'Each allocation needs a definite owner and a matching free. Freeing too early, too late, or more than once creates undefined behavior.'
  },
  ub: {
    title: 'Undefined behavior',
    summary: 'Undefined behavior means the C standard does not define what happens. This is the language feature that makes bugs unpredictable and hard to reproduce.',
    code: 'int a[2];\nint *p = &a[0];\n*(p + 3) = 42;',
    lesson: 'The bug is not “probably harmless.” It can appear to work, fail later, or behave differently across compilers and optimization levels.'
  },
  debug: {
    title: 'Debugging and sanitizers',
    summary: 'A serious C workflow uses compiler warnings and memory sanitizers. These tools reveal problems before they become production bugs.',
    code: 'cc -std=c17 -Wall -Wextra -Wpedantic -O1 -fsanitize=address -g program.c -o program',
    lesson: 'Use AddressSanitizer and UBSan routinely. They catch common memory and arithmetic mistakes quickly and clearly.'
  }
};

const conceptTabs = document.getElementById('concept-tabs');
const conceptPanel = document.getElementById('concept-panel');
let currentConcept = 'compile';

function escapeHtml(source) {
  return source.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
}

function renderConceptTabs() {
  for (const [key, concept] of Object.entries(concepts)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-btn';
    button.role = 'tab';
    button.textContent = concept.title;
    button.addEventListener('click', () => {
      currentConcept = key;
      renderConceptPanel();
    });
    conceptTabs.appendChild(button);
  }
}

function renderConceptPanel() {
  const concept = concepts[currentConcept];
  [...conceptTabs.children].forEach((tab, index) => {
    const key = Object.keys(concepts)[index];
    tab.classList.toggle('is-active', key === currentConcept);
    tab.setAttribute('aria-selected', String(key === currentConcept));
  });
  conceptPanel.innerHTML = `
    <h3>${escapeHtml(concept.title)}</h3>
    <p>${escapeHtml(concept.summary)}</p>
    <div class="example">
      <pre><code>${escapeHtml(concept.code)}</code></pre>
    </div>
    <div class="takeaway"><strong>Why it matters:</strong> ${escapeHtml(concept.lesson)}</div>
  `;
}

const memoryContent = {
  stack: [
    ['function frame', 'main() activation record'],
    ['local value', 'int x = 42'],
    ['pointer value', 'int *p = &x'],
    ['lifetime', 'object ends with scope']
  ],
  heap: [
    ['owner variable', 'int *items'],
    ['allocated block', 'malloc(size) returns storage'],
    ['valid access', 'only while the object is alive'],
    ['cleanup', 'free(items) when done']
  ]
};

function renderMemory(mode = 'stack') {
  const diagram = document.getElementById('memory-diagram');
  diagram.innerHTML = memoryContent[mode].map(([label, value]) => `
    <div class="memory-row">
      <div class="memory-label">${escapeHtml(label)}</div>
      <div class="memory-box ${mode === 'heap' ? 'heap' : ''}">${escapeHtml(value)}</div>
    </div>
  `).join('');

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
  format: 'Use printf with matching specifiers: %d for int, %f or %.2f for doubles, and %c for char.',
  count: 'Use ctype.h, traverse the string until the terminator, and cast each char to unsigned char before calling isalpha or isdigit.',
  dynamic: 'Allocate with malloc(count * sizeof *items), check for NULL, fill the array, and free the pointer once you are done.'
};

document.querySelectorAll('[data-challenge]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.challenge;
    const article = button.closest('.challenge-card');
    let hint = article.querySelector('.challenge-hint');

    if (!hint) {
      hint = document.createElement('p');
      hint.className = 'challenge-hint';
      hint.style.marginTop = '0.75rem';
      hint.style.color = 'var(--muted)';
      button.insertAdjacentElement('afterend', hint);
      button.textContent = 'Hide hint';
      hint.textContent = hints[key];
    } else {
      hint.remove();
      button.textContent = 'Hint';
    }
  });
});

const questions = [
  {
    question: 'Which of these is the most likely cause of undefined behavior in C?',
    options: ['Using the correct printf format string', 'Writing past the end of an array', 'Including stdio.h', 'Using a loop'],
    answer: 'Writing past the end of an array',
    explain: 'Out-of-bounds writes are classic undefined behavior: the program may crash, appear to work, or fail later.'
  },
  {
    question: 'What should you do if malloc returns NULL?',
    options: ['Continue and dereference it anyway', 'Check it and handle the failure', 'Ignore it because it is uncommon', 'Call free immediately'],
    answer: 'Check it and handle the failure',
    explain: 'A null pointer means allocation failed; dereferencing it is invalid.'
  },
  {
    question: 'What is the terminator for a conventional C string?',
    options: ['\n', '0xFF', '\0', 'EOF'],
    answer: '\0',
    explain: 'C strings are terminated by a null character. Without it, functions cannot know where the string ends.'
  },
  {
    question: 'What is the best habit when you compile C code?',
    options: ['Never enable warnings', 'Compile with warnings and sanitizers enabled', 'Only compile on release mode', 'Ignore compiler output'],
    answer: 'Compile with warnings and sanitizers enabled',
    explain: 'Compiler diagnostics are part of the development process. They reveal serious issues early.'
  },
  {
    question: 'When should dynamically allocated memory be freed?',
    options: ['Never, because the system reclaims it automatically', 'After the last valid use, by the owner', 'As soon as it is assigned', 'Before the first read'],
    answer: 'After the last valid use, by the owner',
    explain: 'Ownership matters. Freeing at the correct time prevents leaks and use-after-free issues.'
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
  const item = questions[quizIndex];
  quizProgress.textContent = `Question ${quizIndex + 1} of ${questions.length}`;
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
  const item = questions[quizIndex];
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
  quizIndex = (quizIndex + 1) % questions.length;
  renderQuiz();
});

renderConceptTabs();
renderConceptPanel();
renderMemory('stack');
renderQuiz();

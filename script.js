const LESSONS = [
  {
    id: 'hello', stage: '01 · Start here', title: 'Your first C program', level: 'Beginner', time: '10 min',
    summary: 'C is a compiled language with a small core and a powerful standard library. Start by compiling and running a tiny program.',
    objectives: ['Recognize a translation unit and main function.', 'Compile a file and run the resulting program.'],
    explanation: 'A source file is translated by a compiler and linker into an executable program. The function main is where a hosted C program begins. Returning zero conventionally reports success to the environment. The exact build command depends on your compiler and operating system.',
    code: '#include <stdio.h>\n\nint main(void) {\n    puts("Hello, C!");\n    return 0;\n}',
    caption: 'hello.c — a minimal hosted C program',
    note: 'Compile with warnings enabled: cc -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello. Fix warnings instead of silencing them without understanding why.',
    exercise: 'Change the program to print your name and a second line describing one thing you want to build. Compile and run it.',
    hint: 'puts writes the given string followed by a newline. You can call it more than once.',
    solution: '#include <stdio.h>\n\nint main(void) {\n    puts("Ada");\n    puts("I want to build a useful tool.");\n    return 0;\n}',
    sources: [{ label: 'cppreference: main function', url: 'https://en.cppreference.com/w/c/language/main_function' }, { label: 'C language overview', url: 'https://en.cppreference.com/w/c' }]
  },
  {
    id: 'types', stage: '01 · Start here', title: 'Values, variables & types', level: 'Beginner', time: '15 min',
    summary: 'A variable is an object with a type, a value, and a lifetime. Initialize it before reading it.',
    objectives: ['Declare and initialize int, double, and char objects.', 'Match printf conversion specifiers to argument types.'],
    explanation: 'The type determines which values an object can represent and how operations interpret it. C does not automatically initialize ordinary local variables. Reading an indeterminate value is not a valid way to get a default. For formatted output, the conversion specification must match the corresponding argument type.',
    code: '#include <stdio.h>\n\nint main(void) {\n    int count = 3;\n    double price = 2.50;\n    char grade = \'A\';\n\n    printf("count=%d price=%.2f grade=%c\\n",\n           count, price, grade);\n    return 0;\n}',
    caption: 'Explicit types and matching printf conversions',
    note: 'Integer types have implementation-defined widths within standard minimum requirements. Use limits.h and stdint.h when ranges or exact-width types matter; do not assume int is always 32 bits.',
    exercise: 'Declare an integer temperature and a double measurement, initialize both, and print them with labels. Use an appropriate conversion for each.',
    hint: 'Use %d for int and %f for a double argument to printf. The precision form %.1f prints one digit after the decimal point.',
    solution: 'int temperature = 21;\ndouble measurement = 21.5;\nprintf("temperature=%d C; measurement=%.1f\\n",\n       temperature, measurement);',
    sources: [{ label: 'Arithmetic types', url: 'https://en.cppreference.com/w/c/language/arithmetic_types' }, { label: 'printf reference', url: 'https://en.cppreference.com/w/c/io/fprintf' }]
  },
  {
    id: 'control', stage: '01 · Start here', title: 'Decisions, loops & functions', level: 'Beginner', time: '20 min',
    summary: 'Control flow makes a program respond to data. Functions give meaningful names to reusable operations.',
    objectives: ['Use if and loops to control execution.', 'Write a function with parameters and a return value.'],
    explanation: 'A function is a named operation with a declared return type and parameter list. C passes arguments by value: a function receives copies of argument values. A loop repeats work while its condition holds. Keep each function focused and make preconditions and return meanings clear.',
    code: '#include <stdio.h>\n\nint sum_to(int limit) {\n    int sum = 0;\n    for (int i = 1; i <= limit; ++i) {\n        sum += i;\n    }\n    return sum;\n}\n\nint main(void) {\n    printf("%d\\n", sum_to(5));\n    return 0;\n}',
    caption: 'A function, a for loop, and a call site',
    note: 'This example assumes limit is small enough that the sum fits in int. Real APIs should define supported ranges and handle invalid inputs deliberately.',
    exercise: 'Write is_even(int value), returning 1 for even values and 0 otherwise. Call it from main and print the result.',
    hint: 'The remainder operator is %. An integer is even when value % 2 equals zero.',
    solution: 'int is_even(int value) {\n    return value % 2 == 0;\n}',
    sources: [{ label: 'Function definitions', url: 'https://en.cppreference.com/w/c/language/function_definition' }, { label: 'Statements and control flow', url: 'https://en.cppreference.com/w/c/language/statements' }]
  },
  {
    id: 'arrays', stage: '02 · Data & pointers', title: 'Arrays & bounds', level: 'Beginner', time: '18 min',
    summary: 'An array stores a fixed number of same-typed elements contiguously. The language does not check your indexes at runtime.',
    objectives: ['Declare, initialize, and index an array.', 'Pass a length alongside an array when a function needs it.'],
    explanation: 'For an array of n elements, valid indexes are 0 through n - 1. In most expressions an array converts to a pointer to its first element, so a function parameter written as an array does not carry the original length. Pass the length explicitly and validate it before indexing.',
    code: '#include <stddef.h>\n\nint sum(const int values[], size_t length) {\n    int total = 0;\n    for (size_t i = 0; i < length; ++i) {\n        total += values[i];\n    }\n    return total;\n}',
    caption: 'The array and its length travel together',
    note: 'This simple sum can overflow int for large values. A robust API documents its value range or returns an error when the result cannot be represented.',
    exercise: 'Write a function that finds the largest value in a non-empty int array. State what the function expects about length.',
    hint: 'Initialize the current maximum from values[0], then inspect elements starting at index 1. Do not call it with length zero.',
    solution: 'int max_value(const int values[], size_t length) {\n    int maximum = values[0];\n    for (size_t i = 1; i < length; ++i) {\n        if (values[i] > maximum) maximum = values[i];\n    }\n    return maximum;\n}',
    sources: [{ label: 'Array declaration', url: 'https://en.cppreference.com/w/c/language/array' }, { label: 'CERT: array bounds', url: 'https://wiki.sei.cmu.edu/confluence/display/c/ARR30-C.+Do+not+form+or+use+out-of-bounds+pointers+or+array+subscripts' }]
  },
  {
    id: 'strings', stage: '02 · Data & pointers', title: 'Strings & safe input', level: 'Beginner', time: '22 min',
    summary: 'A C string is a sequence of char values terminated by a null character. A buffer must have room for that terminator.',
    objectives: ['Explain the difference between a character array and a C string.', 'Use bounded input and handle truncation intentionally.'],
    explanation: 'The literal "cat" contains four characters in storage: c, a, t, and the terminating null character. Functions such as printf with %s keep reading until a null character, so passing a non-terminated array is unsafe. Prefer fgets for line input because it accepts a capacity; inspect whether a complete line fit.',
    code: '#include <stdio.h>\n\nint main(void) {\n    char name[32];\n    fputs("Name: ", stdout);\n    if (fgets(name, sizeof name, stdin) == NULL) {\n        fputs("Could not read input\\n", stderr);\n        return 1;\n    }\n    printf("Hello, %s", name);\n    return 0;\n}',
    caption: 'fgets limits the number of bytes written to the buffer',
    note: 'fgets may retain the newline, and a line longer than the buffer may be only partially read. Production code should detect and handle that case according to its input policy.',
    exercise: 'Create a char array for a short label, initialize it with a string literal, and print its length using strlen.',
    hint: 'Include <string.h>. strlen counts characters before the null terminator, not the terminator itself.',
    solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char label[] = "sensor";\n    printf("%zu\\n", strlen(label));\n}',
    sources: [{ label: 'C string literals', url: 'https://en.cppreference.com/w/c/language/string_literal' }, { label: 'fgets reference', url: 'https://en.cppreference.com/w/c/io/fgets' }, { label: 'CERT: string termination', url: 'https://wiki.sei.cmu.edu/confluence/display/c/STR32-C.+Do+not+pass+a+non-null-terminated+character+sequence+to+a+library+function+that+expects+a+string' }]
  },
  {
    id: 'pointers', stage: '02 · Data & pointers', title: 'Pointers & indirection', level: 'Intermediate', time: '25 min',
    summary: 'A pointer object holds a pointer value. The address-of operator obtains an object’s address; indirection accesses the referred object.',
    objectives: ['Read and write an object through a pointer.', 'Use pointer parameters to let a function update caller-owned objects.'],
    explanation: 'The declaration int *p means p points to int. The expression &value obtains the address of value; *p designates the pointed-to int. C still passes p by value, but the copied pointer can refer to the same caller object. A pointer must refer to a live, suitably aligned object before it is dereferenced.',
    code: 'void increment(int *value) {\n    if (value != NULL) {\n        ++*value;\n    }\n}\n\nint count = 4;\nincrement(&count);\n/* count is now 5 */',
    caption: 'The pointer parameter refers to the caller’s object',
    note: 'A null check protects against a null argument only. It cannot prove a non-null pointer is live, in bounds, or otherwise valid.',
    exercise: 'Write a function that swaps two int objects using pointer parameters. Avoid dereferencing null pointers.',
    hint: 'Use a temporary int. Check both pointer arguments before reading or writing through either one.',
    solution: 'void swap_int(int *a, int *b) {\n    if (a == NULL || b == NULL) return;\n    int temporary = *a;\n    *a = *b;\n    *b = temporary;\n}',
    sources: [{ label: 'Pointer declarations', url: 'https://en.cppreference.com/w/c/language/pointer' }, { label: 'CERT: pointer validity', url: 'https://wiki.sei.cmu.edu/confluence/display/c/ARR30-C.+Do+not+form+or+use+out-of-bounds+pointers+or+array+subscripts' }]
  },
  {
    id: 'lifetime', stage: '03 · Memory & ownership', title: 'Object lifetime & storage', level: 'Intermediate', time: '20 min',
    summary: 'Memory safety starts with knowing when an object begins and ends. A pointer does not extend the lifetime of the object it points to.',
    objectives: ['Distinguish automatic and static storage duration.', 'Recognize a dangling pointer caused by returning a local address.'],
    explanation: 'Local objects commonly have automatic storage duration: their lifetime ends when execution leaves their block. Objects declared static have static storage duration and live for the entire program. C does not require the abstract machine to have a literal stack or heap; those are useful implementation models, not the language’s complete rules.',
    code: 'int *bad_address(void) {\n    int local = 42;\n    return &local; /* invalid after return */\n}\n\nint *good_address(int *caller_object) {\n    return caller_object; /* caller controls lifetime */\n}',
    caption: 'Returning the address of an expired automatic object is invalid',
    note: 'Do not return pointers to local automatic objects. Return a value, accept caller-owned storage, or allocate an object and clearly document who must release it.',
    exercise: 'Explain why returning &local from a function is invalid. Rewrite the function to return the integer value instead.',
    hint: 'The local object’s lifetime ends when the function returns. Returning its value copies the value rather than exposing the expired object.',
    solution: 'int make_value(void) {\n    int local = 42;\n    return local;\n}',
    sources: [{ label: 'Storage duration and lifetime', url: 'https://en.cppreference.com/w/c/language/storage_duration' }, { label: 'CERT: returned stack address', url: 'https://wiki.sei.cmu.edu/confluence/display/c/DCL30-C.+Declare+objects+with+appropriate+storage+durations' }]
  },
  {
    id: 'allocation', stage: '03 · Memory & ownership', title: 'Dynamic allocation & ownership', level: 'Intermediate', time: '30 min',
    summary: 'Dynamic allocation lets an object outlive a block, but it introduces an explicit resource lifecycle that your code must manage.',
    objectives: ['Allocate and release storage with malloc and free.', 'Check failure and keep allocation size calculations valid.'],
    explanation: 'malloc requests a number of bytes and returns a pointer suitably aligned for ordinary object types, or a null pointer on failure. sizeof *items ties the allocation to the pointed-to type. The owner should release the allocation exactly once after its final use. The count multiplication must not overflow size_t.',
    code: '#include <stdint.h>\n#include <stdlib.h>\n\nsize_t count = 10;\nif (count > SIZE_MAX / sizeof(int)) {\n    return 1; /* size calculation would overflow */\n}\nint *items = malloc(count * sizeof *items);\nif (items == NULL) {\n    return 1;\n}\n/* use items[0] through items[count - 1] */\nfree(items);',
    caption: 'Allocation, failure check, use, then one release',
    note: 'free(NULL) is permitted, but freeing a non-allocated pointer, freeing twice, or using the allocation after free is undefined behavior. Set a pointer to NULL only when that helps prevent a particular stale use; it does not repair other aliases.',
    exercise: 'Write a function that allocates space for n integers and returns it through an output parameter. Define clearly what happens when n is zero and when allocation fails.',
    hint: 'Give the function a return status and an int ** output parameter. Set *out to NULL before attempting allocation, then assign it only after success.',
    solution: 'int make_ints(size_t n, int **out) {\n    if (out == NULL) return 0;\n    *out = NULL;\n    if (n == 0 || n > SIZE_MAX / sizeof **out) return 0;\n    int *p = malloc(n * sizeof *p);\n    if (p == NULL) return 0;\n    *out = p;\n    return 1;\n}',
    sources: [{ label: 'malloc and free', url: 'https://en.cppreference.com/w/c/memory/malloc' }, { label: 'CERT: allocation size overflow', url: 'https://wiki.sei.cmu.edu/confluence/display/c/MEM35-C.+Allocate+sufficient+memory+for+an+object' }]
  },
  {
    id: 'structs', stage: '04 · Design & libraries', title: 'Structs & API design', level: 'Intermediate', time: '22 min',
    summary: 'Structures group related values. Good C interfaces also define valid states, ownership, failure results, and cleanup expectations.',
    objectives: ['Declare and initialize a structure.', 'Choose what an API owns and what it only borrows.'],
    explanation: 'A structure is a value composed of named members. Passing a structure by value copies it; passing a pointer lets a function access the same object. If a member is a pointer, copying the structure copies only the pointer value—not the pointed-to data. Document whether that data is borrowed or owned.',
    code: 'typedef struct {\n    const char *name; /* borrowed; not freed here */\n    unsigned score;\n} Result;\n\nvoid print_result(const Result *result) {\n    if (result != NULL) {\n        printf("%s: %u\\n", result->name, result->score);\n    }\n}',
    caption: 'The comment states that name is borrowed, not owned',
    note: 'The function also assumes name is a valid null-terminated string. Public APIs should state such preconditions and use const to communicate read-only access.',
    exercise: 'Design a Point struct containing two double coordinates and write a function that prints one. Decide whether the function needs a pointer or a copy.',
    hint: 'A pointer to const Point avoids copying and communicates that printing will not modify the structure.',
    solution: 'typedef struct { double x; double y; } Point;\n\nvoid print_point(const Point *point) {\n    if (point == NULL) return;\n    printf("(%.2f, %.2f)\\n", point->x, point->y);\n}',
    sources: [{ label: 'Structure types', url: 'https://en.cppreference.com/w/c/language/struct' }, { label: 'CERT C coding standard', url: 'https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard' }]
  },
  {
    id: 'files', stage: '04 · Design & libraries', title: 'Files, streams & errors', level: 'Intermediate', time: '25 min',
    summary: 'File operations can fail. Check the return value at each step and keep cleanup paths easy to audit.',
    objectives: ['Open a stream and handle failure.', 'Check write and close results rather than assuming success.'],
    explanation: 'The stdio library exposes streams through FILE pointers. fopen can fail and return a null pointer. Output functions may report errors, and buffered output errors can be reported by fclose. perror prints a message based on errno, but consult each function’s documentation for its precise error contract.',
    code: '#include <stdio.h>\n\nFILE *file = fopen("notes.txt", "w");\nif (file == NULL) {\n    perror("fopen");\n    return 1;\n}\n\nif (fputs("Learning C\\n", file) == EOF) {\n    perror("fputs");\n}\nif (fclose(file) == EOF) {\n    perror("fclose");\n}',
    caption: 'A stream has to be opened, checked, and closed',
    note: 'For untrusted input, fgets provides a destination capacity. Check the result and define how your program handles long lines, embedded null bytes, and encoding.',
    exercise: 'Adapt the example to append to a file instead of truncating it. Explain what happens if fopen fails.',
    hint: 'The append mode string is "a". fopen returns NULL on failure; print a diagnostic and avoid using the stream.',
    solution: 'FILE *file = fopen("notes.txt", "a");\nif (file == NULL) {\n    perror("fopen");\n    return 1;\n}',
    sources: [{ label: 'fopen reference', url: 'https://en.cppreference.com/w/c/io/fopen' }, { label: 'GNU libc: I/O on streams', url: 'https://www.gnu.org/software/libc/manual/html_node/I_002fO-on-Streams.html' }]
  },
  {
    id: 'undefined', stage: '05 · Expert practice', title: 'Undefined behavior', level: 'Advanced', time: '25 min',
    summary: 'Undefined behavior is not a predictable error mode. The C standard places no requirements on what the program does after it occurs.',
    objectives: ['Identify common sources of undefined behavior.', 'Understand why tests on one build cannot prove code is safe.'],
    explanation: 'Out-of-bounds access, dereferencing an invalid pointer, and signed integer overflow are examples of undefined behavior. The compiler may optimize under the assumption that a well-defined program does not do these things. A bug that appears harmless at low optimization can change after a compiler or build change.',
    code: 'int values[2] = {10, 20};\n/* invalid: valid indexes are 0 and 1 */\nint third = values[2];\n\n/* signed overflow is also undefined */\nint maximum = INT_MAX;\nint wrapped = maximum + 1;',
    caption: 'Do not rely on either expression having a particular result',
    note: 'Prefer explicit validation and checked arithmetic. Sanitizers and tests find many defects, but no tool can prove every program free of undefined behavior.',
    exercise: 'List the valid indexes for an array of length n. Explain what a sanitizer may report for an access at index n.',
    hint: 'The first index is zero. Count n elements to find the last index, then identify the first index that is outside the array.',
    solution: 'For n > 0, valid indexes are 0 through n - 1. Index n is one past the last element and must not be dereferenced.',
    sources: [{ label: 'CERT: do not rely on undefined behavior', url: 'https://wiki.sei.cmu.edu/confluence/display/c/EXP34-C.+Do+not+dereference+null+pointers' }, { label: 'C language reference', url: 'https://en.cppreference.com/w/c/language/behavior' }]
  },
  {
    id: 'tooling', stage: '05 · Expert practice', title: 'Compiler, debugger & sanitizers', level: 'Advanced', time: '20 min',
    summary: 'Reliable C work uses tools continuously: diagnostics, a debugger, tests, and runtime instrumentation.',
    objectives: ['Build with strict warnings and debug symbols.', 'Use sanitizers as feedback, not as a substitute for reasoning.'],
    explanation: 'Warnings can identify suspicious conversions, missing declarations, and other mistakes. Debug symbols help a debugger connect machine instructions to source. AddressSanitizer detects many invalid memory accesses; UndefinedBehaviorSanitizer diagnoses some undefined operations. Availability and behavior vary by compiler and platform.',
    code: 'cc -std=c17 -Wall -Wextra -Wpedantic -Wconversion \\\n   -g -O1 -fsanitize=address,undefined \\\n   program.c -o program\n./program',
    caption: 'A development build for compilers that support these options',
    note: 'Some platforms do not support every sanitizer, and sanitizer builds are not production security proofs. Keep a normal optimized build and test on the target platform too.',
    exercise: 'Compile a small program with one intentional out-of-bounds access using a supported sanitizer. Read the report and identify the source line.',
    hint: 'Use a tiny local test program and remove the defect immediately afterwards. Never test undefined behavior in software you depend on.',
    solution: 'Build with -fsanitize=address,undefined -g, run the program, then read the sanitizer report for the error type and source location.',
    sources: [{ label: 'GCC instrumentation options', url: 'https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html' }, { label: 'Clang AddressSanitizer', url: 'https://clang.llvm.org/docs/AddressSanitizer.html' }]
  }
];

const STORAGE_KEY = 'c-learning-lab-progress-v2';
let currentIndex = 0;
let completed = loadProgress();
const moduleList = document.querySelector('#module-list');
const lessonContent = document.querySelector('#lesson-content');
const searchInput = document.querySelector('#lesson-search');

function loadProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return new Set(Array.isArray(value) ? value.filter((id) => LESSONS.some((lesson) => lesson.id === id)) : []);
  } catch {
    return new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  } catch {
    // The course remains usable when storage is disabled or full.
  }
  renderProgress();
  renderNavigation(searchInput.value);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderProgress() {
  const count = completed.size;
  const percent = LESSONS.length ? (count / LESSONS.length) * 100 : 0;
  document.querySelector('#progress-label').textContent = `${count} of ${LESSONS.length} lessons complete`;
  document.querySelector('#progress-bar').style.width = `${percent}%`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(count));
}

function renderNavigation(filter = '') {
  const query = filter.trim().toLowerCase();
  moduleList.replaceChildren();
  let visibleCount = 0;
  let stageHeading = '';

  LESSONS.forEach((lesson, index) => {
    const matches = !query || `${lesson.title} ${lesson.stage} ${lesson.summary}`.toLowerCase().includes(query);
    if (!matches) return;
    visibleCount += 1;
    if (lesson.stage !== stageHeading) {
      stageHeading = lesson.stage;
      const heading = document.createElement('p');
      heading.className = 'module-group-title';
      heading.textContent = stageHeading;
      moduleList.append(heading);
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lesson-link';
    button.setAttribute('aria-current', index === currentIndex ? 'page' : 'false');
    button.innerHTML = `<span class="lesson-number">${String(index + 1).padStart(2, '0')}</span><span class="lesson-link-title">${escapeHtml(lesson.title)}</span><span class="lesson-check" aria-label="${completed.has(lesson.id) ? 'Completed' : 'Not completed'}">${completed.has(lesson.id) ? '✓' : ''}</span>`;
    button.addEventListener('click', () => {
      currentIndex = index;
      renderLesson();
      renderNavigation(searchInput.value);
      document.querySelector('#breadcrumb').textContent = `${lesson.stage} / ${lesson.title}`;
    });
    moduleList.append(button);
  });

  document.querySelector('#search-empty').hidden = visibleCount > 0;
}

function renderLesson() {
  const lesson = LESSONS[currentIndex];
  const isComplete = completed.has(lesson.id);
  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === LESSONS.length - 1;

  lessonContent.innerHTML = `
    <header class="lesson-heading">
      <div class="lesson-kicker">${escapeHtml(lesson.stage)} · ${escapeHtml(lesson.level)}</div>
      <h2 class="lesson-title">${escapeHtml(lesson.title)}</h2>
      <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
      <div class="lesson-meta"><span class="meta-chip">${escapeHtml(lesson.time)}</span><span class="meta-chip">Lesson ${currentIndex + 1} of ${LESSONS.length}</span></div>
    </header>
    <section class="lesson-section"><h3>By the end, you can…</h3><ul class="objectives">${lesson.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
    <section class="lesson-section explanation"><h3>The idea</h3><p>${escapeHtml(lesson.explanation)}</p></section>
    <section class="lesson-section"><h3>Study the example</h3><div class="code-panel"><div class="code-caption">${escapeHtml(lesson.caption)}</div><pre><code>${escapeHtml(lesson.code)}</code></pre></div></section>
    <aside class="callout ${lesson.id === 'undefined' || lesson.id === 'allocation' ? 'warning' : ''}"><strong>${lesson.id === 'undefined' || lesson.id === 'allocation' ? 'Safety note' : 'Keep in mind'}</strong><p>${escapeHtml(lesson.note)}</p></aside>
    <section class="lesson-section exercise"><h3>Practice · Try it yourself first</h3><p>${escapeHtml(lesson.exercise)}</p><button class="hint-toggle" type="button" aria-expanded="false" aria-controls="lesson-hint">Show hint</button><div id="lesson-hint" class="hint-content" hidden>${escapeHtml(lesson.hint)}</div><p><button class="solution-toggle" type="button" aria-expanded="false" aria-controls="lesson-solution">Reveal one possible solution</button></p><div id="lesson-solution" class="solution-content" hidden><p>One possible approach (not the only correct one):</p><div class="code-panel"><pre><code>${escapeHtml(lesson.solution)}</code></pre></div></div></section>
    <section class="lesson-section"><h3>Read further</h3><div class="lesson-sources">${lesson.sources.map((source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a>`).join('')}</div></section>
    <nav class="lesson-nav" aria-label="Lesson navigation"><button type="button" id="previous-lesson" ${previousDisabled ? 'disabled' : ''}>← Previous</button><button type="button" class="complete-button ${isComplete ? 'is-complete' : ''}" id="complete-lesson" aria-pressed="${isComplete}">${isComplete ? '✓ Completed' : 'Mark lesson complete'}</button><button type="button" id="next-lesson" ${nextDisabled ? 'disabled' : ''}>Next →</button></nav>
  `;

  document.querySelector('#breadcrumb').textContent = `${lesson.stage} / ${lesson.title}`;
  lessonContent.querySelector('.hint-toggle').addEventListener('click', toggleDisclosure);
  lessonContent.querySelector('.solution-toggle').addEventListener('click', toggleDisclosure);
  lessonContent.querySelector('#previous-lesson').addEventListener('click', () => moveLesson(-1));
  lessonContent.querySelector('#next-lesson').addEventListener('click', () => moveLesson(1));
  lessonContent.querySelector('#complete-lesson').addEventListener('click', toggleComplete);
}

function toggleDisclosure(event) {
  const button = event.currentTarget;
  const content = document.getElementById(button.getAttribute('aria-controls'));
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  content.hidden = expanded;
  button.textContent = expanded
    ? (content.id === 'lesson-hint' ? 'Show hint' : 'Reveal one possible solution')
    : (content.id === 'lesson-hint' ? 'Hide hint' : 'Hide solution');
}

function moveLesson(offset) {
  const nextIndex = currentIndex + offset;
  if (nextIndex < 0 || nextIndex >= LESSONS.length) return;
  currentIndex = nextIndex;
  renderLesson();
  renderNavigation(searchInput.value);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleComplete() {
  const lesson = LESSONS[currentIndex];
  if (completed.has(lesson.id)) completed.delete(lesson.id);
  else completed.add(lesson.id);
  saveProgress();
  renderLesson();
}

searchInput.addEventListener('input', () => renderNavigation(searchInput.value));
renderProgress();
renderNavigation();
renderLesson();

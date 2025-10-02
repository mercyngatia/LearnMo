// Sample Course data structure
const coursesData = [
    {
        id: 'web-dev-basics',
        title: 'Web Development Fundamentals',
        description: 'Learn the core technologies of web development: HTML, CSS, and JavaScript. Build your first website and understand how the web works.',
        icon: '🌐',
        category: 'Web Development',
        lessons: [
            { id: 'lesson-1', title: 'Introduction to HTML', duration: '30 min' },
            { id: 'lesson-2', title: 'CSS Styling Basics', duration: '45 min' },
            { id: 'lesson-3', title: 'JavaScript Fundamentals', duration: '60 min' },
            { id: 'lesson-4', title: 'Building Your First Website', duration: '90 min' }
        ]
    },
    {
        id: 'responsive-design',
        title: 'Responsive Web Design',
        description: 'Master the art of creating websites that look great on all devices. Learn CSS Grid, Flexbox, and media queries.',
        icon: '📱',
        category: 'Web Development',
        lessons: [
            { id: 'lesson-1', title: 'CSS Flexbox Layout', duration: '40 min' },
            { id: 'lesson-2', title: 'CSS Grid Systems', duration: '50 min' },
            { id: 'lesson-3', title: 'Media Queries & Breakpoints', duration: '35 min' },
            { id: 'lesson-4', title: 'Mobile-First Approach', duration: '45 min' }
        ]
    },
    {
        id: 'javascript-es6',
        title: 'Modern JavaScript ES6+',
        description: 'Dive into modern JavaScript features including arrow functions, destructuring, modules, and async/await.',
        icon: '⚡',
        category: 'Programming',
        lessons: [
            { id: 'lesson-1', title: 'ES6+ Syntax Features', duration: '55 min' },
            { id: 'lesson-2', title: 'Array Methods & Destructuring', duration: '40 min' },
            { id: 'lesson-3', title: 'Promises & Async/Await', duration: '65 min' },
            { id: 'lesson-4', title: 'Modules & Bundlers', duration: '50 min' }
        ]
    },
    {
        id: 'python-basics',
        title: 'Python for Beginners',
        description: 'Start your programming journey with Python. Learn basic syntax, data structures, and build simple applications.',
        icon: '🐍',
        category: 'Programming',
        lessons: [
            { id: 'lesson-1', title: 'Python Syntax & Variables', duration: '35 min' },
            { id: 'lesson-2', title: 'Data Structures in Python', duration: '50 min' },
            { id: 'lesson-3', title: 'Functions and Modules', duration: '45 min' },
            { id: 'lesson-4', title: 'Building a Simple App', duration: '60 min' }
        ]
    },

    {
        id: 'web-dev-basics',
        title: 'Web Development Fundamentals',
        description: 'Learn the core technologies of web development: HTML, CSS, and JavaScript. Build your first website and understand how the web works.',
        icon: '🌐',
        category: 'Web Development',
        lessons: [
            { id: 'lesson-1', title: 'Introduction to HTML', duration: '30 min' },
            { id: 'lesson-2', title: 'CSS Styling Basics', duration: '45 min' },
            { id: 'lesson-3', title: 'JavaScript Fundamentals', duration: '60 min' },
            { id: 'lesson-4', title: 'Building Your First Website', duration: '90 min' }
        ]
    },
    {
        id: 'responsive-design',
        title: 'Responsive Web Design',
        description: 'Master the art of creating websites that look great on all devices. Learn CSS Grid, Flexbox, and media queries.',
        icon: '📱',
        category: 'Web Development',
        lessons: [
            { id: 'lesson-1', title: 'CSS Flexbox Layout', duration: '40 min' },
            { id: 'lesson-2', title: 'CSS Grid Systems', duration: '50 min' },
            { id: 'lesson-3', title: 'Media Queries & Breakpoints', duration: '35 min' },
            { id: 'lesson-4', title: 'Mobile-First Approach', duration: '45 min' }
        ]
    },
    {
        id: 'javascript-es6',
        title: 'Modern JavaScript ES6+',
        description: 'Dive into modern JavaScript features including arrow functions, destructuring, modules, and async/await.',
        icon: '⚡',
        category: 'Programming',
        lessons: [
            { id: 'lesson-1', title: 'ES6+ Syntax Features', duration: '55 min' },
            { id: 'lesson-2', title: 'Array Methods & Destructuring', duration: '40 min' },
            { id: 'lesson-3', title: 'Promises & Async/Await', duration: '65 min' },
            { id: 'lesson-4', title: 'Modules & Bundlers', duration: '50 min' }
        ]
    },
    {
        id: 'python-basics',
        title: 'Python for Beginners',
        description: 'Start your programming journey with Python. Learn basic syntax, data structures, and build simple applications.',
        icon: '🐍',
        category: 'Programming',
        lessons: [
            { id: 'lesson-1', title: 'Python Syntax & Variables', duration: '35 min' },
            { id: 'lesson-2', title: 'Data Structures in Python', duration: '50 min' },
            { id: 'lesson-3', title: 'Functions and Modules', duration: '45 min' },
            { id: 'lesson-4', title: 'Building a Simple App', duration: '60 min' }
        ]
    }
];

// localStorage keys
const STORAGE_KEYS = {
    PROGRESS: 'learnmo_progress',
    USER: 'learnmo_user'
};
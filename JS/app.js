class LearnMoApp {
    constructor() {
        this.courses = coursesData;
        this.userProgress = this.loadProgress();
        this.currentUser = this.loadUser();
        this.currentView = 'auth';
        
        this.initializeApp();
    }

    // Initialize the application
    initializeApp() {
        this.bindEvents();
        this.checkAuthStatus();
        this.showView(this.currentView);
    }

    // Bind all event listeners
    bindEvents() {
        // Auth form events
        document.getElementById('form-login').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('form-register').addEventListener('submit', (e) => this.handleRegister(e));
        
        // Auth navigation
        document.getElementById('show-register').addEventListener('click', () => this.showAuthForm('register'));
        document.getElementById('show-login').addEventListener('click', () => this.showAuthForm('login'));
        
        // Navigation events
        document.getElementById('back-btn').addEventListener('click', () => this.showView('home'));
        document.getElementById('logout-btn').addEventListener('click', () => this.handleLogout());
        document.querySelector('.logo').addEventListener('click', () => this.showView('home'));
        
        // Course events will be bound when rendering
    }

    // Check if user is already logged in
    checkAuthStatus() {
        if (this.currentUser) {
            this.showView('home');
            this.updateUserUI();
        } else {
            this.showView('auth');
        }
    }

    // Show/hide views
    showView(viewName, courseId = null) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.style.display = 'none';
        });
        
        // Show the selected view
        switch(viewName) {
            case 'auth':
                document.getElementById('view-auth').style.display = 'block';
                break;
            case 'home':
                document.getElementById('view-home').style.display = 'block';
                this.renderCourses();
                break;
            case 'detail':
                if (courseId) {
                    document.getElementById('view-detail').style.display = 'block';
                    this.renderCourseDetail(courseId);
                }
                break;
        }
        
        this.currentView = viewName;
    }

    // Switch between login and register forms
    showAuthForm(formType) {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        
        if (formType === 'register') {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        } else {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        }
        
        // Clear any error messages
        this.clearAuthMessages();
    }

    // Handle user login
    handleLogin(event) {
        event.preventDefault();
        this.showLoading(true);
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorElement = document.getElementById('login-error');
        
        // Simple validation
        if (!this.validateEmail(email)) {
            this.showError(errorElement, 'Please enter a valid email address');
            this.showLoading(false);
            return;
        }
        
        if (password.length < 6) {
            this.showError(errorElement, 'Password must be at least 6 characters');
            this.showLoading(false);
            return;
        }
        
        // Simulate API call delay
        setTimeout(() => {
            // For demo purposes, we'll accept any valid email and password
            const userData = {
                email: email,
                username: email.split('@')[0],
                loggedIn: true,
                joinedAt: new Date().toISOString()
            };
            
            this.currentUser = userData;
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
            
            this.showView('home');
            this.updateUserUI();
            this.showLoading(false);
        }, 1000);
    }

    // Handle user registration
    handleRegister(event) {
        event.preventDefault();
        this.showLoading(true);
        
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-password-confirm').value;
        const errorElement = document.getElementById('register-error');
        const successElement = document.getElementById('register-success');
        
        // Validation
        if (!this.validateEmail(email)) {
            this.showError(errorElement, 'Please enter a valid email address');
            this.showLoading(false);
            return;
        }
        
        if (password.length < 6) {
            this.showError(errorElement, 'Password must be at least 6 characters');
            this.showLoading(false);
            return;
        }
        
        if (password !== confirmPassword) {
            this.showError(errorElement, 'Passwords do not match');
            this.showLoading(false);
            return;
        }
        
        // Simulate API call delay
        setTimeout(() => {
            const userData = {
                email: email,
                username: email.split('@')[0],
                loggedIn: true,
                joinedAt: new Date().toISOString()
            };
            
            this.currentUser = userData;
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
            
            this.showSuccess(successElement, 'Account created successfully!');
            
            // Auto switch to home after success
            setTimeout(() => {
                this.showView('home');
                this.updateUserUI();
                this.showLoading(false);
            }, 1500);
        }, 1000);
    }

    // Handle user logout - FIXED VERSION
    handleLogout() {
        this.currentUser = null;
        localStorage.removeItem(STORAGE_KEYS.USER);
        
        // Update UI to reflect logout state
        this.updateUserUI();
        
        this.showView('auth');
        this.showAuthForm('login');
        this.clearAuthForms();
    }

    // Render courses on home page
    renderCourses() {
        const courseGrid = document.getElementById('course-list');
        
        if (this.courses.length === 0) {
            courseGrid.innerHTML = '<p class="no-courses">No courses available at the moment.</p>';
            return;
        }
        
        courseGrid.innerHTML = this.courses.map(course => {
            const progress = this.userProgress[course.id] || { completed: false, completedLessons: {} };
            const completedLessons = Object.values(progress.completedLessons || {}).filter(Boolean).length;
            const totalLessons = course.lessons.length;
            const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
            
            return `
                <div class="course-card" onclick="learnMo.showView('detail', '${course.id}')" tabindex="0">
                    <div class="course-header">
                        <div class="course-thumbnail">${course.icon}</div>
                        ${progress.completed ? '<div class="badge-completed">Completed</div>' : ''}
                    </div>
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-meta">
                        <span>${course.category}</span>
                        <span>${totalLessons} lessons</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <div class="progress-text">${progressPercent}% complete</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render course detail view
    renderCourseDetail(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return;
        
        const progress = this.userProgress[courseId] || { completed: false, completedLessons: {} };
        const completedLessons = Object.values(progress.completedLessons || {}).filter(Boolean).length;
        const totalLessons = course.lessons.length;
        const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        
        const detailContainer = document.getElementById('course-detail');
        detailContainer.innerHTML = `
            <div class="course-detail">
                <div class="course-detail-header">
                    <div class="course-detail-top">
                        <div class="course-detail-info">
                            <div class="course-detail-thumbnail">${course.icon}</div>
                            <div>
                                <h1>${course.title}</h1>
                                <div class="category-badge">${course.category}</div>
                            </div>
                        </div>
                    </div>
                    <p class="course-description">${course.description}</p>
                    
                    <div class="progress-section">
                        <div class="progress-info">
                            <span>Course Progress</span>
                            <span>${progressPercent}%</span>
                        </div>
                        <div class="progress-bar-large">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <button class="btn-mark-complete ${progress.completed ? 'completed' : ''}" 
                                onclick="learnMo.toggleCourseCompletion('${courseId}')">
                            ${progress.completed ? '✓ Course Completed' : 'Mark Course as Complete'}
                        </button>
                    </div>
                </div>
                
                <div class="course-lessons">
                    <h2>Course Lessons</h2>
                    <div class="lesson-list">
                        ${course.lessons.map((lesson, index) => {
                            const isCompleted = progress.completedLessons && progress.completedLessons[lesson.id];
                            return `
                                <div class="lesson-item" onclick="learnMo.toggleLessonCompletion('${courseId}', '${lesson.id}')">
                                    <div class="lesson-checkbox ${isCompleted ? 'checked' : ''}" 
                                         role="checkbox" 
                                         aria-checked="${isCompleted}"></div>
                                    <div class="lesson-content">
                                        <div class="lesson-meta">
                                            <span class="lesson-number">Lesson ${index + 1}</span>
                                            <span class="lesson-duration">${lesson.duration}</span>
                                        </div>
                                        <div class="lesson-title ${isCompleted ? 'completed' : ''}">
                                            ${lesson.title}
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Toggle lesson completion
    toggleLessonCompletion(courseId, lessonId) {
        if (!this.userProgress[courseId]) {
            this.userProgress[courseId] = { completed: false, completedLessons: {} };
        }
        
        const currentState = this.userProgress[courseId].completedLessons[lessonId] || false;
        this.userProgress[courseId].completedLessons[lessonId] = !currentState;
        
        // Check if all lessons are completed
        const course = this.courses.find(c => c.id === courseId);
        const allLessonsCompleted = course.lessons.every(lesson => 
            this.userProgress[courseId].completedLessons[lesson.id]
        );
        
        if (allLessonsCompleted) {
            this.userProgress[courseId].completed = true;
        }
        
        this.saveProgress();
        this.renderCourseDetail(courseId);
        
        // Also update the home view if we're on detail view
        if (this.currentView === 'detail') {
            // We're already on detail view, no need to re-render home
        }
    }

    // Toggle course completion
    toggleCourseCompletion(courseId) {
        if (!this.userProgress[courseId]) {
            this.userProgress[courseId] = { completed: false, completedLessons: {} };
        }
        
        const currentState = this.userProgress[courseId].completed;
        this.userProgress[courseId].completed = !currentState;
        
        // If marking as completed, mark all lessons as completed
        if (!currentState) {
            const course = this.courses.find(c => c.id === courseId);
            course.lessons.forEach(lesson => {
                this.userProgress[courseId].completedLessons[lesson.id] = true;
            });
        }
        
        this.saveProgress();
        this.renderCourseDetail(courseId);
    }

    // localStorage management
    loadProgress() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
        } catch (error) {
            console.error('Error loading progress:', error);
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(this.userProgress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    loadUser() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || null;
        } catch (error) {
            console.error('Error loading user:', error);
            return null;
        }
    }

    // UI helpers
    updateUserUI() {
        const userEmail = document.getElementById('user_email');
        const logoutBtn = document.getElementById('logout-btn');
        
        if (this.currentUser) {
            userEmail.textContent = this.currentUser.email;
            logoutBtn.style.display = 'block';
        } else {
            userEmail.textContent = '';
            logoutBtn.style.display = 'none';
        }
    }

    showLoading(show) {
        const spinner = document.getElementById('loading-spinner');
        spinner.style.display = show ? 'flex' : 'none';
    }

    showError(element, message) {
        element.textContent = message;
        element.classList.add('show');
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }

    showSuccess(element, message) {
        element.textContent = message;
        element.classList.add('show');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            element.classList.remove('show');
        }, 3000);
    }

    clearAuthMessages() {
        document.querySelectorAll('.error-message, .success-message').forEach(element => {
            element.classList.remove('show');
        });
    }

    clearAuthForms() {
        document.getElementById('form-login').reset();
        document.getElementById('form-register').reset();
    }

    // Validation helpers
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Initialize the application when DOM is loaded
let learnMo;
document.addEventListener('DOMContentLoaded', () => {
    learnMo = new LearnMoApp();
});








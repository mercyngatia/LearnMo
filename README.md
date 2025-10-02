# LearnMo - Mini E-Learning Platform

LearnMo is a modern, responsive e-learning platform built with vanilla JavaScript that provides an interactive learning experience for coding and development courses.

## 🌟 Features

### User Authentication
- **Secure Login & Registration** with email validation
- Persistent user sessions with localStorage
- Protected course content for authenticated users

### Course Management
- **Interactive Course Catalog** with beautiful card layouts
- **Detailed Course Views** with comprehensive lesson lists
- **Progress Tracking** with visual progress bars
- **Lesson Completion** system with checkboxes
- **Course Completion** badges and status tracking

### User Experience
- **Responsive Design** that works on desktop and mobile devices
- **Split Layout Authentication** with promotional content
- **Smooth Navigation** between views
- **Loading States** for better user feedback
- **Error Handling** with user-friendly messages

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local server for development (due to localStorage usage)

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd learnmo
   ```

2. **Set Up the Project Structure**
   ```
   learnmo/
   ├── index.html
   ├── CSS/
   │   └── styles.css
   ├── JS/
   │   ├── app.js
   │   └── data.js
   └── README.md
   ```

3. **Start a Local Server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Open in Browser**
   Navigate to `http://localhost:8000` in your web browser.

## 🎯 How to Use

### For Students
1. **Create an Account**
   - Click "Register" on the login page
   - Enter your email and password (minimum 6 characters)
   - Confirm your password

2. **Browse Courses**
   - Explore available courses on the home page
   - View course details by clicking on any course card

3. **Track Progress**
   - Mark lessons as complete using checkboxes
   - Track overall course progress with visual indicators
   - Earn completion badges for finished courses

### Demo Accounts
For testing purposes, you can use any valid email format and any password with 6+ characters.

## 🛠️ Technical Details

### Architecture
- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Storage**: Browser localStorage for data persistence
- **Styling**: CSS Custom Properties (Variables) for consistent theming
- **Icons**: Unicode emojis for course thumbnails

### Key Components

#### JavaScript Classes
- `LearnMoApp` - Main application controller
- Manages user authentication, course rendering, and progress tracking

#### Data Structure
```javascript
// Course Structure
{
  id: "unique-course-id",
  title: "Course Title",
  description: "Course description",
  category: "Programming",
  icon: "📚",
  lessons: [
    {
      id: "lesson-id",
      title: "Lesson Title",
      duration: "30 min"
    }
  ]
}
```

#### Storage Keys
- `learnmo_user` - User authentication data
- `learnmo_progress` - Course progress tracking

## 🎨 Customization

### Adding New Courses
Edit the `coursesData` array in `JS/data.js`:

```javascript
const coursesData = [
  {
    id: "new-course",
    title: "New Course Title",
    description: "Course description",
    category: "Category",
    icon: "🎯",
    lessons: [
      {
        id: "lesson-1",
        title: "New Lesson",
        duration: "45 min"
      }
    ]
  }
];
```

### Styling Customization
Modify CSS custom properties in `:root` section:

```css
:root {
  --color-primary: #your-color;
  --color-primary-dark: #your-dark-color;
  /* Add more customizations */
}
```

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Desktop**: Full split-layout authentication
- **Tablet**: Adaptive grid layouts
- **Mobile**: Single-column layouts with hidden promotional section

## 🔧 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚧 Development

### File Structure
```
learnmo/
├── index.html              # Main HTML file
├── CSS/
│   └── styles.css          # All styles and responsive design
├── JS/
│   ├── app.js             # Main application logic
│   └── data.js            # Course data and storage constants
└── README.md              # This file
```

### Extending Functionality
- Add new user roles (instructor, admin)
- Implement backend API integration
- Add video lesson support
- Include quiz and assessment features
- Add social features (discussions, ratings)

## 🐛 Troubleshooting

### Common Issues

1. **Login Not Working**
   - Ensure you're running on a local server (not file:// protocol)
   - Check browser console for errors
   - Verify email format and password length

2. **Progress Not Saving**
   - Check if localStorage is enabled in browser
   - Clear browser cache and try again

3. **Styling Issues**
   - Hard refresh the page (Ctrl+F5)
   - Check CSS file path in HTML

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Ensure all files are properly linked

---

**Happy Learning!** 🎓

Built with ❤️ for the coding community.
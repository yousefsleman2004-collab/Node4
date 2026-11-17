// ייבוא מודולים נדרשים: http ליצירת השרת, fs לקריאת קבצים, ו-path לניהול נתיבים
const http = require('http');
const fs = require('fs');
const path = require('path');

// יצירת שרת ה-Node.js
const server = http.createServer((req, res) => {
    
    // 1. טיפול בקובצי עיצוב (CSS) כך שהשרת יקרא ויחזיר אותם כהלכה
    if (req.url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(path.join(__dirname, '/templates', req.url)).pipe(res);;
       
    } 
    // 2. עמוד הבית (Home / Index)
    else if (req.url === '/' || req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.join(__dirname, '/templates/page.html')).pipe(res);
    } 
    // 3. עמוד אודות (About) - כנדרש בסעיף 6
    else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.join(__dirname, '/templates/about.html')).pipe(res);
    } 
    // 4. עמוד צور קשר (Contact) - כנדרש בסעיף 6
    else if (req.url === '/contact') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.join(__dirname, '/templates/contact.html')).pipe(res);
    } 
    else if (req.url.endsWith('.jpg')) {
    res.setHeader('Content-Type', 'image/jpeg');
    fs.createReadStream(path.join(__dirname, req.url)).pipe(res);
}
    // 6. טיפול בשגיאת 404 במידה והעמוד לא נמצא
    else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// הגדרת השרת שיאזין בפורט 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});
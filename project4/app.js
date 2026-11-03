
//שם המגישים
//יוסף סולימאן
//ריאן סויטאת


// טעינת מודול ה-fs לניהול קבצים
const fs=require('fs');
// הגדרת מערך עם שמות עשרת קבצי הקלט
const files=
[
'a1.txt',
'a2.txt',
'a3.txt',
'a4.txt',
'a5.txt',
'a6.txt',
'a7.txt',
'a8.txt',
'a9.txt',
'a10.txt'
];
// שם הקובץ שבו נשמור את התוצאה
const outputFileName='result.txt';
// יצירת קובץ התוצאה ומחיקת התוכן הקודם
fs.writeFileSync(outputFileName,'');
// מעבר על כל הקבצים במערך
files.forEach((fileName,index) => 
{
    // חישוב מספר הקובץ, כי האינדקס מתחיל מ-0
const fileNumber=index+1;

try{
     // קריאת תוכן הקובץ
    const content =fs.readFileSync(fileName,'utf8');
     // פיצול התוכן לשורות ושמירתן במערך
    const Lines=content.split(/\r?\n/);
// בחירת מספר השורות לפי מספר הקובץ
    const linesToCopy=Lines.slice(0,fileNumber);
 // חיבור השורות לטקסט אחד עם ירידת שורה
    const textTorite=linesToCopy.join('\n')+'\n';
    // הוספת הטקסט לקובץ התוצאה
    fs.appendFileSync(outputFileName,textTorite);
     // הדפסת הודעה על הצלחת הפעולה
    console.log(`the file checked${fileName} succesfully`);

   }
catch(err)
   {
     // טיפול בשגיאה והדפסת הודעת שגיאה
    console.log(`error reading file ${fileName}`,error.message);
   }
});
// קריאת קובץ התוצאה והדפסת התוכן למסוף
console.log(fs.readFileSync('./result.txt','utf8'));



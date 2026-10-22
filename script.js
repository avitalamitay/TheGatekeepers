document.addEventListener('DOMContentLoaded', () => {

    // --- 1. מצב יום / הגחלת (Theme Toggle) ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeBtn.textContent = 'לגחלת (מצב אפל)';
        } else {
            themeBtn.textContent = 'לעולם האנושי (מצב בהיר)';
        }
    });

    // --- 2. מחולל רעיונות לדמויות ---
    const generateBtn = document.getElementById('generate-btn');
    const resultText = document.getElementById('generator-result');

    // את יכולה להוסיף או לשנות את המילים כאן:
    const creatures = [
        "קנטאורית",
         "סירנה", 
         "רוח יער", 
         "גורגונה", 
         "פיה", 
         "קיטסונה", 
         "ערפד", 
         "שדת אש", 
         "נימפת מים",
        "ג׳ין (ג׳יני)",
        "⁠עיפרית (ג׳ין אש עוצמתי) ",
        "⁠סירנה",
        "⁠אמפוסה (מפלצת דמוית אנוש שמפתה בני אדם וטורפת אותם)",
        "⁠מינוטאור",
        "⁠סימורג/רוֹק (ציפורי־ענק עם ת׳מות שונות שמחוברות אליהן)",
        "כימרה",
        "⁠למאסו (יישות מגינה עם ראש אדם, גוף של אריה וכנפיים של עיט)",
        "⁠גריפין/היפוגריף",
        "⁠אחת ממאות הווריאציות של דרקונים",
        "⁠נחש־ים",
        "⁠סלקי (פיות כלבי ים שמסוגלות להסיר את הפרווה שלהן ולהפוך אנושיות)",
        "⁠ראקשאסה (מפלצות אוכלות אדם מהמיתולוגיה ההודית)",
        "⁠פוקה (משני צורה תעלולנים)",
        "⁠נאגה (אנשי נחש, מקושרים לאוצרות ולהגנה)",
        "⁠באנשי (רוח שהיללה שלה מבשרת על מוות של אהוב)",
        "⁠קיטסונה (רוחות שועל)",
        "⁠צ׳ופקאברה (מפלצת שאוכלת עצמות של חיות ואנשים ומשאירה את שאר הגוף מאחור)"
        ];
    const triggers = [
        "כששמעת שיר ספציפי ברדיו של מונית",
        "כשהיית קרובה למוות בתאונת דרכים",
        "כשמצאת חפץ ישן ומוזר בשוק פשפשים",
        "במהלך ריב סוער במיוחד עם אדם קרוב",
        "כשמישהו זר ברחוב הסתכל לך ישר בעיניים",
        "כשראית משהו מוזר במוזיאון",
        "כשהכנת יצירת אמנות ממש מיוחדת"
    ];
    const ages = [
        "בגיל 18",
        "בגיל 24",
        "ממש לפני חודש",
        "לפני חצי שנה",
        "לפני ארבעה ימים ו15 שעות",
        "בגיל 12", 
        "בגיל 7", 
        "בגיל 5", 
        "בגיל 8", 
        "בגיל 10", 
        "בגיל 14", 
        "בגיל 15", 
        "בגיל 16", 
        "בגיל 17", 
        "בגיל 19", 
        "בגיל 20", 
        "בגיל 21", 
        "בגיל 22", 
        "בגיל 23", 
        "בגיל 25", 
        "בגיל 26", 
        "בגיל 27"
        ];

    generateBtn.addEventListener('click', () => {
        const randomCreature = creatures[Math.floor(Math.random() * creatures.length)];
        const randomTrigger = triggers[Math.floor(Math.random() * triggers.length)];
        const randomAge = ages[Math.floor(Math.random() * ages.length)];
        
        resultText.textContent = `היית ${randomCreature}, ועברת התלקחות ${randomAge}, ${randomTrigger}.`;
    });

    // --- 3. טיימר ספירה לאחור למפגש אפס ---
    // שנו את התאריך והשעה כאן (פורמט: שעה:דקות:שניות חודש יום, שנה). 
    const targetDate = new Date("November 16, 2026 18:00:00").getTime();

    const updateTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(updateTimer);
            document.getElementById("countdown").innerHTML = "המפגש כבר התחיל!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }, 1000);


    // --- 4. הדלת הסודית של הקהילה ---
    const secretDoor = document.getElementById('secret-door');
    const secretModal = document.getElementById('secret-modal');
    const closeSecretBtn = document.getElementById('close-secret');

    secretDoor.addEventListener('click', () => {
        secretModal.classList.add('active');
    });

    closeSecretBtn.addEventListener('click', () => {
        secretModal.classList.remove('active');
    });

    // --- 5. תפריט מובייל (המבורגר) ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if(mobileBtn && navLinks) {
        // פתיחה וסגירה של התפריט בלחיצה על ההמבורגר
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // סגירה אוטומטית של התפריט אחרי שלוחצים על אחד הקישורים (כדי שהמסך לא יישאר חסום)
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

// รอให้หน้าเว็บโหลดโครงสร้าง HTML เสร็จสมบูรณ์ก่อนทำงาน
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. เลือกการ์ดหมวดหมู่ทั้งหมดที่มีคลาส .cat-card
    const categoryCards = document.querySelectorAll('.cat-card');

    // 2. วนลูปเพื่อดักจับการคลิกทีละการ์ด
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            
            // 3. ดึงค่า ID จาก attribute 'data-id' ที่เรากำหนดใน HTML
            // ตัวอย่าง: ถ้าคลิกการ์ด Smartphones จะได้ค่า "smartphones"
            const categoryId = this.getAttribute('data-id');

            // 4. ถ้ามี ID ให้ทำการเปลี่ยนหน้าเว็บ
            if (categoryId) {
                // ส่งค่า id ไปทาง URL (Query String)
                // ผลลัพธ์จะเป็น: Category.html?id=smartphones
                window.location.href = `Category.html?id=${categoryId}`;
            } else {
                console.error("No data-id found on this card.");
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', function () {

    const langTH = document.getElementById('langTH');
    const langEN = document.getElementById('langEN');

    // ทุก element ที่รองรับหลายภาษา
    const translatableElements = document.querySelectorAll('[data-th][data-en]');

    function setLanguage(lang) {
        translatableElements.forEach(el => {
            if (lang === 'th') {
                el.innerHTML = el.getAttribute('data-th');
            } else {
                el.innerHTML = el.getAttribute('data-en');
            }
        });

        // เปลี่ยนสถานะปุ่ม
        langTH.classList.toggle('active', lang === 'th');
        langEN.classList.toggle('active', lang === 'en');

        // จำค่าภาษา
        localStorage.setItem('lang', lang);
    }

    // Click events
    langTH.addEventListener('click', () => setLanguage('th'));
    langEN.addEventListener('click', () => setLanguage('en'));

    // โหลดภาษาที่เคยเลือกไว้
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

});

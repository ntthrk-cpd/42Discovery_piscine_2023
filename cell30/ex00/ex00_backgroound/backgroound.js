
function colorChange() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
}

// 16777215 = 0xffffff 
// 16 คือ ฐาน 16 คือ 16 ตัวอักษร 0-9 และ a-f
// 7777215 คือ จำนวนสีที่มีในฐาน 16 คือ 16777215 สี
// ใช้ Math.floor เพื่อปัดเศษทศนิยมทิ้ง
// ใช้ toString(16) เพื่อแปลงเป็นฐาน 16
// ใช้ document.body.style.backgroundColor เพื่อเปลี่ยนสีพื้นหลัง
// ใช้ "#" + color เพื่อเพิ่ม # ข้างหน้าสีที่สุ่มได้
// ใช้ document.getElementById("ft_button").addEventListener("click", colorChange, false); 
// เพื่อเรียกใช้ฟังก์ชัน colorChange เมื่อกดปุ่ม ft_button โดยใช้ addEventListener เพื่อเรียกใช้ฟังก์ชัน colorChange 
// โดยใช้ click เป็น event และ false เป็น useCapture ที่ไม่ใช้   capture phase แต่ใช้ bubble phase แทน 
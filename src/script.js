// 1. Зміна заголовка при натисканні на кнопку
document.getElementById("change-title").addEventListener("click", function() {
    document.getElementById("main-title").textContent = "Заголовок змінено!";
});

// 2. Функція привітання користувача
function greetUser(name) {
    console.log(`Привіт, ${name}!`);
}
greetUser("Данило");

// 3. Перевірка віку через prompt і alert
function checkAge() {
    let age = prompt("Введіть свій вік:");
    
    while (isNaN(age) || age === "" || age === null) {
        age = prompt("Будь ласка, введіть число!");
    }

    age = Number(age);
    
    if (age < 18) {
        alert("Доступ заборонено");
    } else {
        alert("Доступ дозволено");
    }
}
checkAge();

// 4. Функція зміни фону на випадковий колір
function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// 5. Обробка кліку по всій сторінці для зміни фону
document.body.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomRGB();
});

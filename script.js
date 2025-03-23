// Функція для перемикання між формами
document.getElementById('switchToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginFormContainer').style.display = 'block';
    document.querySelector('.form-container').style.display = 'none';
});

document.getElementById('switchToRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginFormContainer').style.display = 'none';
    document.querySelector('.form-container').style.display = 'block';
});

// Обробка форми реєстрації (без збереження даних)
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Просто виводимо введені дані в консоль
    console.log(`Логін: ${username}`);
    console.log(`Електронна пошта: ${email}`);
    console.log(`Пароль: ${password}`);

    alert('Ваша реєстрація успішна!'); // Інформація для користувача
});

// Обробка форми входу (без перевірки паролю)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Просто виводимо введені дані в консоль
    console.log(`Логін: ${loginUsername}`);
    console.log(`Пароль: ${loginPassword}`);

    alert('Вхід успішний!'); // Інформація для користувача
});
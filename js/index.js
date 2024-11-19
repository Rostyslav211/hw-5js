// Завдання 1

function updateMessage() {
    const selectElement = document.getElementById('drink-select');
    const messageElement = document.getElementById('message');
    const selectedValue = selectElement.value;

    let message = '';
    switch (selectedValue) {
        case 'coffee':
            message = 'Ви обрали Каву.';
            break;
        case 'tea':
            message = 'Ви обрали Чай.';
            break;
        case 'juice':
            message = 'Ви обрали Сік.';
            break;
        default:
            message = 'Будь ласка, оберіть напій.';
    }

    messageElement.textContent = message;
}

// Завдання 2

function checkDay() {
    const dayInput = document.getElementById('day-input').value.trim().toLowerCase();
    const dayMessage = document.getElementById('day-message');

    switch (dayInput) {
        case 'понеділок':
        case 'вівторок':
        case 'середа':
        case 'четвер':
        case 'п’ятниця':
            dayMessage.textContent = 'Це робочий день.';
            break;
        case 'субота':
        case 'неділя':
            dayMessage.textContent = 'Це вихідний день.';
            break;
        default:
            dayMessage.textContent = 'Будь ласка, введіть коректний день тижня.';
    }
}

// Завдання 3

function checkSeason() {
    const monthInput = parseInt(document.getElementById('month-input').value.trim(), 10);
    const seasonMessage = document.getElementById('season-message');

    switch (monthInput) {
        case 12:
        case 1:
        case 2:
            seasonMessage.textContent = 'Це Зима.';
            break;
        case 3:
        case 4:
        case 5:
            seasonMessage.textContent = 'Це Весна.';
            break;
        case 6:
        case 7:
        case 8:
            seasonMessage.textContent = 'Це Літо.';
            break;
        case 9:
        case 10:
        case 11:
            seasonMessage.textContent = 'Це Осінь.';
            break;
        default:
            seasonMessage.textContent = 'Будь ласка, введіть коректний номер місяця (1-12).';
    }
}

// Завдання 4

function checkDaysInMonth() {
    const monthInput = parseInt(document.getElementById('days-month-input').value.trim(), 10);
    const daysMessage = document.getElementById('days-message');

    let days;
    switch (monthInput) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28; // Лютий (без врахування високосного року)
            break;
        default:
            daysMessage.textContent = 'Будь ласка, введіть коректний номер місяця (1-12).';
            return;
    }

    daysMessage.textContent = `У цьому місяці ${days} днів.`;
}

// Завдання 5

function checkColorAction() {
    const colorInput = document.getElementById('color-input').value.trim().toLowerCase();
    const colorMessage = document.getElementById('color-message');

    switch (colorInput) {
        case 'червоний':
            colorMessage.textContent = 'Стоп!';
            break;
        case 'зелений':
            colorMessage.textContent = 'Йти!';
            break;
        case 'жовтий':
            colorMessage.textContent = 'Чекати!';
            break;
        default:
            colorMessage.textContent = 'Будь ласка, введіть коректний колір (червоний, зелений, жовтий).';
    }
}


// Завдання 6

function calculateOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation-select').value;
    const resultMessage = document.getElementById('result-message');

    if (isNaN(num1) || isNaN(num2)) {
        resultMessage.textContent = 'Будь ласка, введіть коректні числа.';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultMessage.textContent = 'Ділення на нуль неможливе!';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultMessage.textContent = 'Оберіть операцію.';
            return;
    }

    resultMessage.textContent = `Результат: ${result}`;
}

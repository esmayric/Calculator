// HTML'de belirtilen display elementini seç
let display = document.querySelector('.display');

// Hesaplama yapıldı mı kontrol etmek için bir bayrak (flag)
let isCalculated = false;

// Sayı veya operatör eklemek için kullanılan fonksiyon
function appendToDisplay(value) {
    // Eğer bir hesaplama yapıldıysa, display'i temizle
    if (isCalculated) {
        display.value = ''; // Hesaplama yapıldıysa display'i temizle
        isCalculated = false; // Bayrağı sıfırla
    }

    // Eğer son karakter bir nokta ise ve yeni giriş de bir nokta ise, işlemi iptal et
    if (value === '.' && display.value.slice(-1) === '.') {
        return; // Eğer son karakter zaten bir nokta ise işlemi iptal et
    }

    // Eğer display '0' ise ve yeni giriş bir nokta değilse, '0' ile değiştir
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Display'i temizlemek için fonksiyon
function clearDisplay() {
    display.value = '0';
    isCalculated = false; // Temizle butonuna basıldığında bayrağı sıfırla
}

// Yüzde hesaplamak için fonksiyon
function calculatePercentage() {
    display.value = eval(display.value) / 100;
}

// Hesaplama sonucunu göstermek için fonksiyon
function calculateResult() {
    display.value = eval(display.value);
    isCalculated = true; // Hesaplama yapıldığında bayrağı ayarla
}

// Son karakteri silmek için fonksiyon
function deleteLastDigit() {
    if (!isCalculated) {
        display.value = display.value.slice(0, -1) || '0';
    }
}

// Sayfa yüklendiğinde display'i temizle
window.onload = clearDisplay;

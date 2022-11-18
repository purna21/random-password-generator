// Random Password


let uppercase_letters = []
let lowercase_letters = []
let special_letters = []
let numbers = []



for (let i = 65; i <= 90; i++) {
    uppercase_letters.push(String.fromCharCode(i))
};
// console.log(uppercase_letters)

for (let i = 97; i <= 122; i++) {
    lowercase_letters.push(String.fromCharCode(i))
};
// console.log(lowercase_letters)

for (let i = 33; i <= 42; i++) {
    special_letters.push(String.fromCharCode(i))
};
// console.log(special_letters)

for (let i = 48; i <= 57; i++) {
    numbers.push(String.fromCharCode(i))
};
// console.log(numbers)

let all_characters = [...uppercase_letters, ...lowercase_letters, ...special_letters, ...numbers]

let all_characters_length = all_characters.length
// console.log(all_characters)
// console.log(all_characters_length)

// console.log(Math.floor(Math.random() * all_characters_length))

let random_password = ''
// let password_length = prompt('How many characters you want to generate?')
let generated_password = document.querySelector('.generated-password');
// console.log(generated_password)
let password_range_slider = document.querySelector('#password-range')
// console.log(password_range_slider)
let password_range_display = document.querySelector('.password-length')
// console.log(password_range_display)
let password_length = document.querySelector('.password-length')

let generate_btn = document.querySelector('.generate-btn')

password_range_slider.addEventListener('input', () => {
    password_range_display.textContent = password_range_slider.value
});


generate_btn.addEventListener('click', () => {

    for (let i = 1; i <= Number(password_length.innerHTML); i++) {

        random_password += all_characters[Math.floor(Math.random() * all_characters_length)]

    }
    // console.log(random_password)
    generated_password.textContent = random_password
    random_password = ''

});



// console.log(random_password)
// console.log(password_range.value)
// console.log(password)

// console.log(random_password)

















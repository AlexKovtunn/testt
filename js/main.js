document.addEventListener('DOMContentLoaded', () => {
  //burger-menu
  const burgerMenuButton = document.querySelector('.burger-menu__btn');

  burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('active');
    document.body.classList.toggle('body__hidden');
  });

  const burgerMenuItems = document.querySelectorAll('.burger-menu__list > *');

  burgerMenuItems.forEach((burgerItem) => {
    burgerItem.addEventListener('click', () => {
      burgerMenuButton.classList.toggle('active');
      document.body.classList.toggle('body__hidden');
    });
  });

  //FORM
  // работаю с кастомным селектом
  const selectedOption = document.querySelector('.order-form__custom-select-selected');
  const customSelect = document.querySelector('.order-form__custom-select');
  const realSelect = document.querySelector('.order-form__real-select');
  const optionsList = document.querySelector('.custom-select__options-wrapper');

  selectedOption.addEventListener('click', () => {
    customSelect.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove('active');
    }
  });

  const spanSelectedOption = selectedOption.querySelector('span');

  optionsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      document.querySelector('.order-form__custom-select-selected').style.border = 'unset';
      const selectedValue = e.target.getAttribute('data-value');
      optionsList.querySelectorAll('li').forEach((li) => {
        li.classList.remove('selected');
      });
      e.target.classList.add('selected');
      spanSelectedOption.textContent = e.target.textContent;

      const option = document.createElement('option');
      option.value = selectedValue;
      realSelect.innerHTML = '';
      realSelect.appendChild(option);

      customSelect.classList.remove('active');
    }
  });
  // работаю с ползунком
  const customInputRange = document.querySelector('.order-form__real-range');
  const valueInputRange = document.getElementById('valueInputRange');

  customInputRange.addEventListener('input', () => {
    const value = customInputRange.value;
    valueInputRange.textContent = value + '%';
  });

  const fileInput = document.getElementById('fileInput');
  const nameFileSpan = document.getElementById('nameFile');

  fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
      nameFileSpan.textContent = fileInput.files[0].name;
    } else {
      nameFileSpan.textContent = 'Прикрепить файл';
    }
  });

  //валидация и отправка формы
  const inputsForm = document.querySelectorAll('.order-form__input');
  const form = document.querySelector('.order-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  fileInput.addEventListener('invalid', (e) => {
    e.preventDefault();
    document.querySelector('.order-form__label-file').style.borderColor = 'red';
  });
  fileInput.addEventListener('input', () => {
    if (fileInput.validity.valid) {
      document.querySelector('.order-form__label-file').style.borderColor = '#3E9CDC';
    }
  });
  realSelect.addEventListener('invalid', (e) => {
    e.preventDefault();
    document.querySelector('.order-form__custom-select-selected').style.border = '1px solid red';
  });
  inputsForm.forEach((inputForm) => {
    inputForm.addEventListener('invalid', (e) => {
      e.preventDefault();
      inputForm.style.border = '1px solid red';
    });
    inputForm.addEventListener('input', (e) => {
      if (inputForm.validity.valid) {
        inputForm.style.borderColor = 'unset';
      }
    });
  });
});

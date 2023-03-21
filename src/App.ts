const startButton = document.getElementById("show-form") as HTMLButtonElement | null;
const firstForm = document.getElementById("first-form") as HTMLElement | null;
const secondForm  = document.getElementById('second-form') as HTMLElement | null;
const thirdForm = document.getElementById('third-form') as HTMLElement | null;
const fourthForm  = document.getElementById('fourth-form') as HTMLElement | null;
const fifthForm = document.getElementById('fifth-form') as HTMLElement | null;
const sixthForm = document.getElementById('sixth-form') as HTMLElement | null;
const seventhForm = document.getElementById('seventh-form') as HTMLElement | null;
const studentSelect = document.getElementById('student-select') as HTMLSelectElement | null;
const studiesInput = document.getElementById('studies-input') as HTMLInputElement | null;
const forms = document.querySelectorAll('form');
const studyTime = document.getElementById('study-time') as HTMLInputElement | null;
const degreeSelect = document.getElementById('degree-select') as HTMLSelectElement | null;
const repeatedYearSelect = document.getElementById('repeated-year-select') as HTMLSelectElement | null;
const sportType = document.getElementById('sport-type') as HTMLInputElement | null;
const languageInput = document.getElementById('language-input') as HTMLInputElement | null;
const inputs = document.querySelectorAll('input');
const selects = document.querySelectorAll('select');
const submitButton = document.getElementById('submit-button') as HTMLButtonElement | null;
const alertDiv = document.createElement('div');
alertDiv.style.display = 'none';

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', (event) => {
    event.preventDefault();
    return false;
  });
}

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (firstForm.style.display === "none" && alertDiv.style.display === "none") {
    firstForm.style.display = "block";
    startButton.style.display = "none";
    submitButton.style.display = "block";
    seventhForm.style.display = 'block'
  }
});

studentSelect.addEventListener('input', () => {
  if (studentSelect.value === 'yes') {
    secondForm.style.display = 'block';
  
    
  }
  else if (studentSelect.value === 'no') {
   
    for (let i = 0; i < inputs.length-1; i++) {
      inputs[i].value = '';
    }
    for (let i = 1; i < selects.length; i++) {
      selects[i].value = '';
    }
    for (let i = 1; i < forms.length -1; i++) {
      forms[i].style.display = 'none';
    }
    
  } else if (studentSelect.value === ''){
   
    for (let i = 0; i < inputs.length-1; i++) {
      inputs[i].value = '';
    };
    for (let i = 0; i < selects.length; i++) {
      selects[i].value = '';
    };
    for (let i = 1; i < forms.length-1; i++) {
      forms[i].style.display = 'none';
    }
  }
});

studiesInput.addEventListener('input', () => {
  if (studiesInput.value.toUpperCase() === 'IT' || studiesInput.value.toUpperCase() === 'IT '  ) {
    thirdForm.style.display = 'block';
    fourthForm.style.display = 'block';
  } else if (studiesInput.value.trim() === '') {
    thirdForm.style.display = 'none';
    fourthForm.style.display = 'none';
    studyTime.value = '';
  } else if (studiesInput.value.toUpperCase() !== 'IT'){
    thirdForm.style.display = 'none';
    fourthForm.style.display = 'block';
    languageInput.value = '';
  }
});

studyTime.addEventListener('input', () => {
    if (parseInt(studyTime.value) >= 4) {
      fifthForm.style.display = 'block';
      for (let i = 5; i < forms.length-1; i++) {
        forms[i].style.display = 'none';
      }
   
    }
    else if (parseInt(studyTime.value) < 4) {
      degreeSelect.value ='';
 
      for (let i = 4; i < forms.length -1; i++) {
        forms[i].style.display = 'none';
      }
    }
  })

  degreeSelect.addEventListener('input', () => {
    if (degreeSelect.value === 'yes') {

      sixthForm.style.display = 'none';
      repeatedYearSelect.value = '';
    }
    else if (degreeSelect.value === 'no') {
      sixthForm.style.display = 'block';

    }
    else if (degreeSelect.value === ''){
   
      sixthForm.style.display = 'none';
      repeatedYearSelect.value = '';
    }
  })

  repeatedYearSelect.addEventListener('input', () => {
    if (repeatedYearSelect.value !== '') {

    }
    else {
  
    }
  })
  let storedFormData = [];
  


  submitButton.addEventListener('click', () => {
    let allInputsFilled = true; 
  
    forms.forEach(form => {
      if (form.style.display !== 'none') {
        const inputs = form.querySelectorAll('input');
        const selects = form.querySelectorAll('select');
        inputs.forEach(input => {
          if (input.value === '') {
            allInputsFilled = false;
          }
        });
        selects.forEach(select => {
          if (select.value === '') {
            allInputsFilled = false;
          }
        });
      }
    });
  
    if (allInputsFilled) {
      const formData = {
        studentSelect: studentSelect.value,
        studiesInput: studiesInput.value,
        studyTime: studyTime.value,
        degreeSelect: degreeSelect.value,
        repeatedYearSelect: repeatedYearSelect.value,
        sportType: sportType.value,
        languageInput: languageInput.value,
      };
      storedFormData.push(formData);
      localStorage.setItem('formData', JSON.stringify(storedFormData));
      
      forms.forEach(form => form.style.display = 'none');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
      for (let i = 0; i < selects.length; i++) {
        selects[i].value = '';
      }
      //sumbit ALERT
      alertDiv.classList.add('alert');
      alertDiv.style.display = 'block';
      alertDiv.innerHTML = '<p>Form data has been submitted successfully!</p><button>OK</button>';
      document.body.appendChild(alertDiv);
      
      const okButton = alertDiv.querySelector('button');
      okButton.addEventListener('click', () => {
        alertDiv.style.display = 'none';
      });
      startButton.style.display = "block";
      submitButton.style.display = "none";
    } else {
      alert('Please fill out all fields before submitting.');
    }
    
  });

const getStoredFormData = JSON.parse(localStorage.getItem('formData'));
console.log(getStoredFormData);

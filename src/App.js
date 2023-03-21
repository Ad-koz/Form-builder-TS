var startButton = document.getElementById("show-form");
var firstForm = document.getElementById("first-form");
var secondForm = document.getElementById('second-form');
var thirdForm = document.getElementById('third-form');
var fourthForm = document.getElementById('fourth-form');
var fifthForm = document.getElementById('fifth-form');
var sixthForm = document.getElementById('sixth-form');
var seventhForm = document.getElementById('seventh-form');
var studentSelect = document.getElementById('student-select');
var studiesInput = document.getElementById('studies-input');
var forms = document.querySelectorAll('form');
var studyTime = document.getElementById('study-time');
var degreeSelect = document.getElementById('degree-select');
var repeatedYearSelect = document.getElementById('repeated-year-select');
var sportType = document.getElementById('sport-type');
var languageInput = document.getElementById('language-input');
var inputs = document.querySelectorAll('input');
var selects = document.querySelectorAll('select');
var submitButton = document.getElementById('submit-button');
var alertDiv = document.createElement('div');
alertDiv.style.display = 'none';
for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (event) {
        event.preventDefault();
        return false;
    });
}
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (firstForm.style.display === "none" && alertDiv.style.display === "none") {
        firstForm.style.display = "block";
        startButton.style.display = "none";
        submitButton.style.display = "block";
        seventhForm.style.display = 'block';
    }
});
studentSelect.addEventListener('input', function () {
    if (studentSelect.value === 'yes') {
        secondForm.style.display = 'block';
        // seventhForm.style.display = (sportType.value !== '') ? 'block' : 'none';
    }
    else if (studentSelect.value === 'no') {
        // seventhForm.style.display = 'block';
        for (var i = 0; i < inputs.length - 1; i++) {
            inputs[i].value = '';
        }
        for (var i = 1; i < selects.length; i++) {
            selects[i].value = '';
        }
        for (var i = 1; i < forms.length - 1; i++) {
            forms[i].style.display = 'none';
        }
    }
    else if (studentSelect.value === '') {
        for (var i = 0; i < inputs.length - 1; i++) {
            inputs[i].value = '';
        }
        ;
        for (var i = 0; i < selects.length; i++) {
            selects[i].value = '';
        }
        ;
        for (var i = 1; i < forms.length - 1; i++) {
            forms[i].style.display = 'none';
        }
    }
});
studiesInput.addEventListener('input', function () {
    if (studiesInput.value.toUpperCase() === 'IT' || studiesInput.value.toUpperCase() === 'IT ') {
        thirdForm.style.display = 'block';
        fourthForm.style.display = 'block';
    }
    else if (studiesInput.value.trim() === '') {
        thirdForm.style.display = 'none';
        fourthForm.style.display = 'none';
        studyTime.value = '';
    }
    else if (studiesInput.value.toUpperCase() !== 'IT') {
        thirdForm.style.display = 'none';
        fourthForm.style.display = 'block';
        languageInput.value = '';
    }
});
studyTime.addEventListener('input', function () {
    if (parseInt(studyTime.value) >= 4) {
        fifthForm.style.display = 'block';
        for (var i = 5; i < forms.length - 1; i++) {
            forms[i].style.display = 'none';
        }
        // seventhForm.style.display = (sportType.value !== '') ? 'block' : 'none';
    }
    else if (parseInt(studyTime.value) < 4) {
        degreeSelect.value = '';
        // seventhForm.style.display ='block';
        for (var i = 4; i < forms.length - 1; i++) {
            forms[i].style.display = 'none';
        }
    }
});
degreeSelect.addEventListener('input', function () {
    if (degreeSelect.value === 'yes') {
        // seventhForm.style.display ='block';
        sixthForm.style.display = 'none';
        repeatedYearSelect.value = '';
    }
    else if (degreeSelect.value === 'no') {
        sixthForm.style.display = 'block';
        // seventhForm.style.display = (sportType.value !== '') ? 'block' : 'none';
    }
    else if (degreeSelect.value === '') {
        // seventhForm.style.display ='block';
        sixthForm.style.display = 'none';
        repeatedYearSelect.value = '';
    }
});
repeatedYearSelect.addEventListener('input', function () {
    if (repeatedYearSelect.value !== '') {
        // seventhForm.style.display = 'block'
    }
    else {
        // seventhForm.style.display = 'none'
    }
});
var storedFormData = [];
submitButton.addEventListener('click', function () {
    var allInputsFilled = true;
    forms.forEach(function (form) {
        if (form.style.display !== 'none') {
            var inputs_1 = form.querySelectorAll('input');
            var selects_1 = form.querySelectorAll('select');
            inputs_1.forEach(function (input) {
                if (input.value === '') {
                    allInputsFilled = false;
                }
            });
            selects_1.forEach(function (select) {
                if (select.value === '') {
                    allInputsFilled = false;
                }
            });
        }
    });
    if (allInputsFilled) {
        var formData = {
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
        forms.forEach(function (form) { return form.style.display = 'none'; });
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        for (var i = 0; i < selects.length; i++) {
            selects[i].value = '';
        }
        //sumbit ALERT
        alertDiv.classList.add('alert');
        alertDiv.style.display = 'block';
        alertDiv.innerHTML = '<p>Form data has been submitted successfully!</p><button>OK</button>';
        document.body.appendChild(alertDiv);
        var okButton = alertDiv.querySelector('button');
        okButton.addEventListener('click', function () {
            alertDiv.style.display = 'none';
        });
        startButton.style.display = "block";
        submitButton.style.display = "none";
    }
    else {
        alert('Please fill out all fields before submitting.');
    }
});
var getStoredFormData = JSON.parse(localStorage.getItem('formData'));
console.log(getStoredFormData);
function foo() {
    return {
        bar: "hello"
    };
}
function foo1() {
    return;
    {
        bar: "hello";
    }
}
console.log(foo());
console.log(foo1());

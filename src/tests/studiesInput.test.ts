describe ('studies-input - how the etered value affect on next forms display', () => {
    let studiesInput: HTMLInputElement | null;
    let thirdForm: HTMLElement | null;
    let fourthForm: HTMLElement | null;
    let languageInput: HTMLInputElement | null;

  beforeEach(() => {  
    document.body.innerHTML = `
    <form id="first-form" style="display:none;">
    <label for="question">Are you a student?</label>
   <select id="student-select">
    <option value = ''>select option</option>
    <option value="yes">YES</option>
    <option value="no">NO</option>
   </select>
</form>
<form id="second-form" style="display:none;">
    <label for="question">What do you study?</label>
    <input type="text" id="studies-input" required>
</form>
<form id="third-form" style="display:none;">
    <label for="question">What programming language is your best?</label>
   <input type="text" id="language-input">
</form>
<form id="fourth-form" style="display:none;">
    <label for="question">How long do you study?</label>
   <input type="number" id='study-time' min="0" required>
</form>`;
studiesInput = document.querySelector('#studies-input');
thirdForm = document.querySelector('#third-form');
fourthForm = document.querySelector('#fourth-form');
languageInput = document.querySelector('#language-input');
});
    test('should display third and fourth form if entered text is "IT"', () => {
        studiesInput.value = 'IT';
        studiesInput.dispatchEvent(new Event('input'));
       setTimeout(() => { expect(thirdForm.style.display).toBe('block');
        expect(fourthForm.style.display).toBe('block');
     }, 1000)   
    });
    test('should display third and fourth form if entered text is "it"', () => {
        studiesInput.value = 'it';
        studiesInput.dispatchEvent(new Event('input'));
       setTimeout(() => { expect(thirdForm.style.display).toBe('block');
        expect(fourthForm.style.display).toBe('block');
     }, 1000)   
    });
    test('should not display third form if entered text is different than "IT", but should display fourth form', () => {
        studiesInput.value = 'Materials Science';
        studiesInput.dispatchEvent(new Event('input'));
       setTimeout(() => { expect(thirdForm.style.display).toBe('none');
        expect(fourthForm.style.display).toBe('block');
     }, 1000)   
    });
    test('The value of language-input should be empty, if entered text is different than IT', () => {
        studiesInput.value = 'Materials Science';
        studiesInput.dispatchEvent(new Event('input'));
       setTimeout(() => { 
        expect(languageInput.value).toBe('');
     }, 1000)   
    });
    
    
})
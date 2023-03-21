describe('study-time input - how the entered value affect on next forms display', () => {
    let studyTime: HTMLInputElement | null;
    let fifthForm: HTMLElement | null;
    let degreeSelect: HTMLSelectElement | null;
    beforeEach(() => {
        document.body.innerHTML = `<form id="fourth-form" style="display:none;">
        <label for="question">How long do you study?</label>
       <input type="number" id='study-time' min="0" required>
    </form>
    <form id="fifth-form" style="display:none;">
        <label for="question">Do you already have a degree?</label>
        <select id = "degree-select">
            <option value="">select option</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
        </select>
    </form>`
    studyTime = document.querySelector('#study-time') as HTMLInputElement | null;
    fifthForm = document.querySelector('#fifth-form') as HTMLElement | null;
    degreeSelect = document.querySelector('#degree-select') as HTMLSelectElement | null;
    });
    test('should not display fifth form if number is lower than 4 and the degree-select value should be empty', () => {
        studyTime.value = "3";
         setTimeout(() => {
        expect(fifthForm.style.display).toBe('none');
        expect(degreeSelect.value).toBe('');
      }, 1000);
    });
    test('should  display fifth form if number is higher than 4', () => {
        studyTime.value = "5";
         setTimeout(() => {
        expect(fifthForm.style.display).toBe('block');
      }, 1000);
    });
    test('should  display fifth form if number is equal to 4', () => {
        studyTime.value = "4";
         setTimeout(() => {
        expect(fifthForm.style.display).toBe('block');
      }, 1000);
    });
})
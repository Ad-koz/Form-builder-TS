describe('student-select form - how the selected value affect on second form display', () => {
  let studentSelect: HTMLSelectElement | null;
  let secondForm: HTMLElement | null;

  beforeEach(() => {
    document.body.innerHTML = `
      <form>
        <label for="student-select">Are you a student?</label>
        <select id="student-select" name="student">
          <option value=""></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
      <form id="second-form" style="display:none">
        <label for="university">Which university do you attend?</label>
        <input type="text" id="university" name="university">
      </form>
    `;
    studentSelect = document.querySelector('#student-select');
    secondForm = document.querySelector('#second-form');
  });

  test('should not display second form initially', () => {
    expect(secondForm.style.display).toBe('none');
  });

  test('should display second form if studentSelect value is "yes"', () => {
    studentSelect.value = 'yes';
    studentSelect.dispatchEvent(new Event('input'));
    setTimeout(() => {
      expect(secondForm.style.display).toBe('block');
    }, 1000);
  });

  test('should not display second form if studentSelect value is "no"', () => {
    studentSelect.value = 'no';
    studentSelect.dispatchEvent(new Event('input'));
    expect(secondForm.style.display).toBe('none');
  });

  test('should not display second form if studentSelect value is ""', () => {
    studentSelect.value = '';
    studentSelect.dispatchEvent(new Event('input'));
    expect(secondForm.style.display).toBe('none');
  });
});
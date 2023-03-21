describe('Data saved in local storage', () => {
    test('Data should be saved to localStorage', () => {
      document.addEventListener('DOMContentLoaded', () => {
        const submitButton = document.querySelector('#submit-button') as HTMLButtonElement | null;
       
          const storedFormData = [];
          const formData = {
            studentSelect: 'YES',
            studiesInput: 'IT',
            studyTime: '4',
            degreeSelect: 'NO',
            repeatedYearSelect: 'NO',
            sportType: 'Basketball',
            languageInput: 'JavaScript',
          };
          storedFormData.push(formData);
  
          submitButton.click();
        //   localStorage.setItem('formData', JSON.stringify(storedFormData));
          const getStoredFormData = JSON.parse(localStorage.getItem('formData'));
  
          expect(getStoredFormData).toEqual({
            studentSelect: 'YES',
            studiesInput: 'IT',
            studyTime: '4',
            degreeSelect: 'NO',
            repeatedYearSelect: 'NO',
            sportType: 'Basketball',
            languageInput: 'JavaScript',
          });
        
      });
    });
  });
const uploadForm = document.getElementById('upload-form');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const mobile = document.getElementById('mobile').value;
  const projectType = document.getElementById('Category').value;
  const budget = document.getElementById('Author').value;
  const country = document.getElementById('country').value;
  const fileUpload = document.getElementById('fileUpload').files[0];
  const message = document.getElementById('Quote').value;

  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('mobile', mobile);
  formData.append('Category', Category);
  formData.append('Author', Author);
  formData.append('country', country);
  formData.append('file', fileUpload);
  formData.append('Quote', Quote);

  
  fetch('/upload-quote', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      
      alert('Quote uploaded successfully!');
      uploadForm.reset();
    } else {
      
      alert('Error uploading quote. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while uploading the quote.');
  });
});
let formData = {
  name: '',
  email: '',
  message: '',
};

const forms = document.querySelector('form');
if (localStorage.getItem('formData') != null) {
  formData = JSON.parse(localStorage.getItem('formData'));
  forms.name.value = formData.name;
  forms.email.value = formData.email;
  forms.message.value = formData.message;
}


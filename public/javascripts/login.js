$('.validate-form').on('submit', async function (e) {
  let email = $('#email');
  let password = $('#password');
  console.log(email,password);
  e.preventDefault();
  if (validate(email) == false || validate(password) == false) {
    alert('Invalid email or password');
  }
});

$('.validate-form-reg').on('submit', async function (e) {
  let email = $('#email');
  let password = $('#password');
  let passwordCheck = $('#passwordCheck');
  e.preventDefault();
  if (validate(email) == false) {
    showValidate(email);
  }
  if (validate(password) == false) {
    showValidate(password);
  }
  if (validate(passwordCheck) == false) {
    showValidate(passwordCheck);
  }
  if (password.val() !== passwordCheck.val()) {
    var thisAlert = $(passwordCheck).parent();
    $(thisAlert).addClass('alert-validate');
  }
});

function validate(input) {
  //provjerimo tip inputa ili po imenu
  if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    //RegEx za mail validaciju
    if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/i) == null) {
      return false;
    }
  } else {
    //provjera passworda gorenavedena
    if ($(input).val().trim() == '' || $(input).val().trim().length < 4) {
      return false;
    }
  }
  return true;
}





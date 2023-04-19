function Validation(values) {
  let error = {};
  const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const password_pattern = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;


  if (values.name === '') {
    error.name = 'Email should not be empty';
  } else {
    error.name = '';
  }


  if (values.email === '') {
    error.email = 'Email should not be empty';
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = '';
  }
  return error;
}

export default Validation;

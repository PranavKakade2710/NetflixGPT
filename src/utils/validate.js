export const checkValidation = (email, password, fullName) => {
  const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isfullNameValid = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(fullName);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isfullNameValid) return "Full Name is not valid";

  return null;
};

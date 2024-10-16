export const handleForm = (email,password) => {
    const validEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const validPassaword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validEmail) return "Email is not valid";
    if(!validPassaword) return "Password is not valid";

    return null;
}
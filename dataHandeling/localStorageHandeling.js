
export function SaveLogInToLocalStorage(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

export function RemoveLogInToLocalStorage(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}

export function GetEmailFromLocalStorage(){
    return localStorage.getItem('email');
}
export function GetPasswordFromLocalStorage(){
    return localStorage.getItem('password');
}
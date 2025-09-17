const pwd = document.getElementById('pwd');
const gen = document.getElementById('gen');

gen.onclick = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
    let pass = '';
    for(let i = 0; i < 12; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    pwd.value = pass;
    navigator.clipboard.writeText(pass);
};

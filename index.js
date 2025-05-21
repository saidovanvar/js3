export let input = prompt("Yoshni kiriting");
export function validator(a) {

    if (a < 0 || a > 120) {
        throw new Error('Agar yosh 0 dan kichik yoki 120dan katta');
    }
}
 
export const cartRead33 = async () => {
    let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json');
    let data = await res.json();
    let data2 = Object.values(data);
    return data2;
}
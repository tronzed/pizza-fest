 
export const getStoreDetail = async () => {
    let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/site_detail.json');
    let data = await res.json();
    let data2 = Object.values(data);
    let data3 = data2[0];
    return data3;
}
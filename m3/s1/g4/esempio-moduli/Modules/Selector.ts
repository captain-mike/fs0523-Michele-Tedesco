export function S(selector:string){
    return document.querySelector(selector);
}

export const accessToken = 'kjuhbaweskjfnwekjrjhjh0982384y5rruiourejfnh';

export function post(url:string){
    return fetch(url,{
        method:'POST',
        headers:{
            'Authorization':'Bearer ' + accessToken
        }
    }).then(res => res.json())
}
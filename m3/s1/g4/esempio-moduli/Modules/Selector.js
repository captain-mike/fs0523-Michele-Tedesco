export function S(selector) {
    return document.querySelector(selector);
}
export const accessToken = 'kjuhbaweskjfnwekjrjhjh0982384y5rruiourejfnh';
export function post(url) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }).then(res => res.json());
}
//# sourceMappingURL=Selector.js.map
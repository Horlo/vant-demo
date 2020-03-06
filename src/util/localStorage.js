export default {
    set(key, data, expiresTime) {
        const obj = {
            data,
            ctime: (new Date()).getTime(), //时间戳，同Date.now()
            expiresTime: expiresTime || 1000 * 60 * 60 // 如果没有传过期时间，则设置过期时间一个小时
        }
        localStorage.setItem(key, JSON.stringify(obj));
    },
    get(key) {
        const {
            ctime,
            expiresTime,
            data
        } = JSON.parse(localStorage.getItem(key));
        const times = (new Date()).getTime();
        if (times - ctime >= expiresTime) {
            // 如果超时
            localStorage.removeItem(key);
            return null;
        } else {
            // 未超时
            return data;
        }
    }
}
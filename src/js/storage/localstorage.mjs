export function storageSave(key, value) {

    localStorage.setItem(key, JSON.stringify(value));
};

export function storageLoad(key) {

    try {

        const value = localStorage.getItem(key);
        return JSON.parse(value);

    } catch {

        return null;
    };
};

export function storageRemove(key) {

    localStorage.removeItem(key);
};
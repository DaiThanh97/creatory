import Axios from 'axios';
import { STORAGE_KEY } from '../configs/constants';

class UserSignIn {
    constructor({ authenticated }) {
        this.isAuthen = authenticated;
    }
}

class ListInfo {
    constructor({ total, list }) {
        this.totalInfo = total;
        this.list = list;
    }
}

class Info {
    constructor({
        id,
        guid,
        isActive,
        balance,
        age,
        eyeColor,
        firstName,
        lastName,
        gender,
        email,
        phone,
        about,
        registered,
        latitude,
        longitude,
        tags
    }) {
        this.id = id;
        this.guid = guid;
        this.isActive = isActive;
        this.balance = balance;
        this.age = age;
        this.eyeColor = eyeColor;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.about = about;
        this.registered = registered;
        this.latitude = latitude;
        this.longitude = longitude;
        this.tags = tags;
    }
}

class UserService {
    signIn(username, password) {
        return Axios.post('/auth', {
            username,
            password
        });
    }

    getInfo(offset, limit) {
        return Axios.get(`/data?offset=${offset}&limit=${limit}`);
    }

    mapSignIn(data) {
        return new UserSignIn(data);
    }

    mapListInfo(data) {
        return new ListInfo(data);
    }

    mapInfo(data) {
        return new Info(data);
    }

    setSignInState(isSignIn) {
        localStorage.setItem(STORAGE_KEY.IS_AUTH, isSignIn);
    }

    getSignInState() {
        return localStorage.getItem(STORAGE_KEY.IS_AUTH);
    }
}

export const userService = new UserService();
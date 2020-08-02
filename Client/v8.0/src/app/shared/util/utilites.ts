import { HttpHeaders } from '@angular/common/http';

export function AreEquivalent(source, destination): boolean {

    var aProps = Object.getOwnPropertyNames(source);
    var bProps = Object.getOwnPropertyNames(destination);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (!propName.endsWith('_p') && source[propName] !== destination[propName]) {
            return false;
        }
    }
    return true;
}

export async function delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("wait..."));
}

export function GetSecureHeader(): HttpHeaders {
    let header = new HttpHeaders()
        .set('authorization', `Bearer ${localStorage.getItem('token')}`);
    return header;
}
export const tokenHashKey = '8c10%$#f9be0b053082'
export const defaultPassword = '123456'

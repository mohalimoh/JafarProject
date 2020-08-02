
export class userInfo {
    registerDate: Date = new Date;
    active: boolean = false;
    isDeleted: boolean = false;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    fatherName: string;
    nationalID: string;
    birthDate: string;
    birthPlace: string;
    accessLevel: any;
    contactInfo: contactInfo;
}

export class contactInfo {
    phone: string;
    mobile: string;
    address: string;
}

export class accessLevel {
    title: string;
    rules: rule[];
}

export class rule {
    name: string;
    value: string[];
}

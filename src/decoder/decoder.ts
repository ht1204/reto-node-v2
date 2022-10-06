import Base64 from 'js-base64';

let secretCode: string = '';

export const decoder = (code: string) => {
    const { decode } = Base64;
    secretCode = decode(code);
    console.log('secretCode: ', secretCode);
}

export const getSecretCode = () => secretCode;

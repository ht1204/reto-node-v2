import Base64 from 'js-base64';

export const decrypt = (code: string) => {
    const { decode } = Base64;
    const secretCode: string = decode(code);
    console.log('Decoded Data - Secret Code: ', secretCode);
    process.exit(0);
}
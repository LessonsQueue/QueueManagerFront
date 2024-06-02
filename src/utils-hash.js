import CryptoJS from 'crypto-js';

export const createHash = (...args) => {
  return CryptoJS.SHA256(args.join()).toString(CryptoJS.enc.Hex);
};
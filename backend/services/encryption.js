import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
// Ensure the key is exactly 32 bytes for AES-256
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-key-change-this-in-prod';
const KEY = Buffer.alloc(32);
Buffer.from(ENCRYPTION_KEY, 'utf8').copy(KEY);
const IV_LENGTH = 16;

export const encrypt = (text) => {
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt token');
  }
};

export const decrypt = (text) => {
  try {
    const parts = text.split(':');
    const iv = Buffer.from(parts.shift(), 'hex');
    const encryptedText = parts.join(':');
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt token');
  }
};

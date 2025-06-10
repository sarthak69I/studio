
// src/lib/access-manager.ts
'use client';

const PENDING_TOKEN_KEY = 'eleakPendingAccessRequestToken';
const ACCESS_KEY = 'eleakCourseAccessKey';
const ACCESS_KEY_EXPIRY_MS = 6 * 60 * 60 * 1000; // 6 hours
const PENDING_TOKEN_VALIDITY_MS = 25 * 1000; // 25 seconds

interface AccessToken {
  value: string;
  expiry: number;
}

interface PendingToken {
  value: string;
  expiry: number;
}

// For Pending Token (short-lived, indicates visit to Linkcents initiated)
export const setPendingToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const tokenValue = Math.random().toString(36).substring(2, 15);
    const expiry = Date.now() + PENDING_TOKEN_VALIDITY_MS;
    const token: PendingToken = { value: tokenValue, expiry };
    localStorage.setItem(PENDING_TOKEN_KEY, JSON.stringify(token));
    return tokenValue;
  } catch (error) {
    console.error('Error setting pending token in localStorage:', error);
    return null;
  }
};

export const getValidPendingToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedToken = localStorage.getItem(PENDING_TOKEN_KEY);
    if (!storedToken) return null;

    const token: PendingToken = JSON.parse(storedToken);
    if (Date.now() < token.expiry) {
      return token.value;
    } else {
      localStorage.removeItem(PENDING_TOKEN_KEY); // Expired token
      return null;
    }
  } catch (error) {
    console.error('Error getting pending token from localStorage:', error);
    return null;
  }
};

export const clearPendingToken = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PENDING_TOKEN_KEY);
  } catch (error) {
    console.error('Error clearing pending token from localStorage:', error);
  }
};


// For Final Access Key (6-hour validity)
export const setAccessKey = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const keyValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const expiry = Date.now() + ACCESS_KEY_EXPIRY_MS;
    const keyData: AccessToken = { value: keyValue, expiry };
    localStorage.setItem(ACCESS_KEY, JSON.stringify(keyData));
    return keyValue;
  } catch (error) {
    console.error('Error setting access key in localStorage:', error);
    return null;
  }
};

export const getValidAccessKey = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedKey = localStorage.getItem(ACCESS_KEY);
    if (!storedKey) return null;

    const keyData: AccessToken = JSON.parse(storedKey);
    if (Date.now() < keyData.expiry) {
      return keyData.value;
    } else {
      localStorage.removeItem(ACCESS_KEY); // Expired key
      return null;
    }
  } catch (error) {
    console.error('Error getting access key from localStorage:', error);
    return null;
  }
};

export const clearAccessKey = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ACCESS_KEY);
  } catch (error) {
    console.error('Error clearing access key from localStorage:', error);
  }
};

export const getAccessKeyExpiry = (): number | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedKey = localStorage.getItem(ACCESS_KEY);
    if (!storedKey) return null;
    const keyData: AccessToken = JSON.parse(storedKey);
    return keyData.expiry;
  } catch {
    return null;
  }
};

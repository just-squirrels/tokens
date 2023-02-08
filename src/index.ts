import { randomBytes } from "crypto";

/**
 * The default number of bytes used to generate a token.
 */
export const DEFAULT_BYTES = 32;

/**
 * The length of a token generated with the default number of bytes.
 */
export const DEFAULT_LENGTH = tokenLength();

/**
 * Generate a base64url encoded random token.
 * @param bytes Number of bytes to generate.
 * @returns A random token string.
 */
export function genToken(bytes = DEFAULT_BYTES) {
    return randomBytes(bytes).toString("base64url");
}

/**
 * Get the expected length of a token generated with the given byte count.
 * @param bytes Number of bytes used when generating a token.
 * @returns The expected token length.
 */
export function tokenLength(bytes = DEFAULT_BYTES) {
    return Math.ceil(bytes * 8 / 6);
}

export default { DEFAULT_BYTES, DEFAULT_LENGTH, genToken, tokenLength };

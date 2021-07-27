/**
 *  Convert a hex string to an alphanumeric string
 *  @param hexx The hex string to convert
 */
export declare const hex2str: (hexx: string) => string;

/**
 *  Convert an alphanumeric string to a hex string
 *  @param str The string to convert
 */
export declare const str2hex: (str: string) => string;

/**
 *  Replace real hex values with diffrent 'a' letters
 *  @param str The hex string to convert
 */
export declare const hex2a: (str: string) => string;

/**
 *  Replace diffrent 'a' letters with it's real hex values
 *  @param str The string to convert
 */
export declare const a2hex: (str: string) => string;

/**
 *  Funtion to validate a URL
 *  @param url The url to validate
 */
export declare const validURL: (url: string) => boolean;

/**
 *  Lengthen a URL
 *  @param url The orignal URL
 */
export declare const lengthen: (url: string) => string;

/**
 *  Lengthen a URL but with greater reliability at the cost of speed
 *  @param url The orignal URL
 */
export declare const lengthenAsPath: (url: string) => string;
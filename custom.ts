
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    Josiah,
    Is,
    Cool
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Josiah {
 // * LOL
 //% block
 export function join(str1: string, str2: string) {
   return str1.concat(str2)
 }
}

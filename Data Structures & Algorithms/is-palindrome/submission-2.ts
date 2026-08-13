class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidCharacter(char: string): boolean {
        const charCode = char.charCodeAt(0);
        return (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)
    }

    isPalindrome(s: string): boolean {
        let l = 0, r = s.length - 1;

        while (l <= r) {
            const charL = s.charAt(l).toLowerCase();
            const charR = s.charAt(r).toLowerCase();

            if (!this.isValidCharacter(charL)) {l++;continue;}
            if (!this.isValidCharacter(charR)) {r--;continue;}

            if (charL !== charR) return false;

            l++;r--;
        }

        return true;
    }
}

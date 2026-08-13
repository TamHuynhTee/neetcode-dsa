class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const alph = Array.from<number>({length: 26}).fill(0)

        for (let i = 0; i < s.length; i++) {
            alph[s.at(i).charCodeAt(0) - 97]++;
            alph[t.at(i).charCodeAt(0) - 97]--;
        }

        return alph.every(c => c === 0);
    }
}

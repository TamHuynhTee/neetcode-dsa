class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        const countS = new Map(), countT = new Map();

        for (let i = 0; i < s.length; i++) {
            if (!countS.has(s.at(i))) countS.set(s.at(i), 0)
            if (!countT.has(t.at(i))) countT.set(t.at(i), 0)

            countS.set(s.at(i), countS.get(s.at(i)) + 1)
            countT.set(t.at(i), countT.get(t.at(i)) + 1)
        }

        const sEntries = Array.from(countS.entries());

        for (let i = 0; i < sEntries.length; i++) {
            const [key, val] = sEntries[i];
            if (!countT.has(key)) return false;
            if (countT.get(key) !== val) return false;
        }

        return true;
    }
}

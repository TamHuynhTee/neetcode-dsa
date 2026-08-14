class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // isAnagram(str1: string, str2: string): boolean {
    //     if (str1.length !== str2.length) return false;

    //     const alph = Array.from<number>({length: 26}).fill(0);

    //     for (let i = 0; i < str1.length; i++) {
    //         alph[str1.at(i).charCodeAt(0) - 97]++;
    //         alph[str2.at(i).charCodeAt(0) - 97]--;
    //     }

    //     return alph.every(a => a === 0);
    // }
    toAlphabetMap(str: string): string {
        const alph = Array.from<number>({length: 26}).fill(0);
        for (const s of str) {
            alph[s.charCodeAt(0) - 97]++;
        }
        return alph.join(':');
    }

    groupAnagrams(strs: string[]): string[][] {
        const alph = new Map<string, string[]>();
    
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const alphMap = this.toAlphabetMap(str);

            if (!alph.has(alphMap)) alph.set(alphMap, [])

            alph.set(alphMap, [...alph.get(alphMap), str]);
        }

        return Array.from(alph.entries()).map(a => a[1])
    }
}

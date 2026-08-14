class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // check row by row
        for (let i = 0; i < 9; i++) {
            const exist = new Set();
            for (let j = 0; j < 9; j++) {
                const atIndex = board[i][j];
                if (atIndex === '.') continue;
                if (exist.has(atIndex)) return false;
                exist.add(atIndex)
            }
        }
        // check col by col
        for (let i = 0; i < 9; i++) {
            const exist = new Set();
            for (let j = 0; j < 9; j++) {
                const atIndex = board[j][i];
                if (atIndex === '.') continue;
                if (exist.has(atIndex)) return false;
                exist.add(atIndex)
            }
        }
        // check sub 3x3 matrix
        for (let i = 0; i < 9; i+=3) {
            for (let j = 0; j < 9; j+=3) {
                const exist = new Set();
                for (let r = i; r < i + 3; r++) {
                    for (let c = j; c < j + 3; c++) {
                        const atIndex = board[r][c];
                        if (atIndex === '.') continue;
                        if (exist.has(atIndex)) return false;
                        exist.add(atIndex)
                    }
                }
            }
        }

        return true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const col = new Map<number, Set<string>>();
        const row = new Map<number, Set<string>>();
        const squares = new Map<string, Set<string>>();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                const atSquare = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

                if (cell === ".") continue;

                if (!row.has(r)) row.set(r, new Set());
                if (!col.has(c)) col.set(c, new Set());
                if (!squares.has(atSquare)) squares.set(atSquare, new Set());

                if (row.get(r).has(cell) || col.get(c).has(cell) || squares.get(atSquare).has(cell))
                    return false;

                row.get(r).add(cell);
                col.get(c).add(cell);
                squares.get(atSquare).add(cell);
            }
        }

        return true;
    }
}

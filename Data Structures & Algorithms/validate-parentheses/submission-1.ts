class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isOpenBracket(c: string): boolean {
        return c == '(' || c == '[' || c == '{'
    }
    
    isCloseBracket(c: string): boolean {
        return c == ')' || c == ']' || c == '}'
    }

    relevantBracket(c: string): string {
        switch(c) {
            case ')': return '(';
            case ']': return '[';
            case '}': return '{';
            default: return ''
        }
    }

    isValid(s: string): boolean {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (this.isOpenBracket(s.charAt(i))) {
                stack.push(s.charAt(i))
            }

            if (this.isCloseBracket(s.charAt(i))) {
                const br = stack.pop();
                if (this.relevantBracket(s.charAt(i)) !== br) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

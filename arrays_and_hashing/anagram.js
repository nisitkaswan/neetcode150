/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const words = new Map()

    if(s.length !== t.length) return false

    for (w of s) {
        words.set(w, (words.get(w) || 0) + 1)
    }

    for (w of t) {
        if(!words.get(w) || words.get(w) == 0) return false
        words.set(w,words.get(w)-1)
    }

    return true
};
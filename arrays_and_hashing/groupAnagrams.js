/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()

    for (const str of strs) {
        const sortedStr = str.split('').sort((a,b) =>  a.localeCompare(b)).join('')
        if (!map.has(sortedStr)) {
            map.set(sortedStr,[])
        }

        map.set(sortedStr,[...map.get(sortedStr),str])
    }

    return Array.from(map.values())
    

};

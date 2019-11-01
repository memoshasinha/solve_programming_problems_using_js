/**
 * @param {string} s
 * @return {number}
 */

function distinctSubstring(str) {
    let stringLength = str.length;
    let visited = new Array(256);
    let dist_count = 0;
    visited.fill(false);
    for (let i = 0; i < stringLength; i++) {
      if (visited[str.charCodeAt(i)] == false) {
        visited[str.charCodeAt(i)] = true;
        dist_count++;
      }
    }
    
    let start = 0, start_index = -1; 
    let min_len = 256; 
   
    let count = 0; 
    let curr_count =  new Array(256); 
    for (let j=0; j<stringLength; j++) 
    { 
        // Count occurrence of characters of string 
        curr_count[str.charCodeAt(j)]++; 
   
        // If any distinct character matched, 
        // then increment count 
        if (curr_count[str.charCodeAt(j)] == 1 ) 
            count++; 
   
        // if all the characters are matched 
        if (count == dist_count) 
        { 
            // Try to minimize the window i.e., check if 
            // any character is occurring more no. of times 
            // than its occurrence in pattern, if yes 
            // then remove it from starting and also remove 
            // the useless characters. 
            while (curr_count[str.charCodeAt(start)] > 1) 
            { 
                if (curr_count[str.charCodeAt(start)] > 1) 
                    curr_count[str.charCodeAt(start)]--; 
                start++; 
            } 
              
            // Update window size 
            let len_window = j - start + 1; 
            if (min_len > len_window) 
            { 
                min_len = len_window; 
                start_index = start; 
            } 
        } 
    } 
    // Return substring starting from start_index 
    // and length min_len 
    return str.substring(start_index, start_index+min_len); 

};


console.log(distinctSubstring("aabcbcdbca"));

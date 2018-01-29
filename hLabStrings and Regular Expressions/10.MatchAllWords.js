function matchAllWords(text) {
    console.log(text.split(/\W+/).filter(word => word!=="").join("|"));//tuk e glavna W i ne raboti kakto v regex saita?
   // console.log(text.split(/\W+/));
}
matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
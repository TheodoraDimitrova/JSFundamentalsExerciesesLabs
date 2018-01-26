function arrayDelimiter(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));

}
arrayDelimiter(['How about no?','I','not','do', 'it!','_']);
//'How about no?','I','not','do', 'it!','_']
//['One', 'Two', 'Three', 'Four','Five', '-']
// A̶l̶l̶o̶w̶ ̶u̶s̶e̶r̶s̶ ̶t̶o̶ ̶s̶e̶a̶r̶c̶h̶ ̶f̶o̶r̶ ̶w̶o̶r̶d̶s̶ ̶t̶h̶a̶t̶ ̶r̶h̶y̶m̶e̶ ̶w̶i̶t̶h̶ ̶a̶ ̶g̶i̶v̶e̶n̶ ̶w̶o̶r̶d̶ ̶(̶u̶s̶e̶ ̶t̶h̶e̶ ̶r̶e̶l̶_̶r̶h̶y̶ ̶p̶a̶r̶a̶m̶e̶t̶e̶r̶ ̶i̶n̶ ̶t̶h̶e̶ ̶D̶a̶t̶a̶M̶u̶s̶e̶ ̶A̶P̶I̶)̶// Show the header "Words that rhyme with {...}:"
// While the results are loading (while we are waiting for data from the DataMuse API), show the text "...loading"
// I̶f̶ ̶t̶h̶e̶r̶e̶ ̶a̶r̶e̶ ̶n̶o̶ ̶r̶e̶s̶u̶l̶t̶s̶,̶ ̶s̶h̶o̶w̶ ̶t̶h̶e̶ ̶t̶e̶x̶t̶ ̶"̶(̶n̶o̶ ̶r̶e̶s̶u̶l̶t̶s̶)̶"̶
// Group the results by the number of syllables (you might want to use the groupBy function that we give below in order to do this)
// W̶h̶e̶n̶ ̶t̶h̶e̶ ̶u̶s̶e̶r̶ ̶h̶i̶t̶s̶ ̶[̶E̶n̶t̶e̶r̶]̶ ̶o̶n̶ ̶t̶h̶e̶ ̶w̶o̶r̶d̶ ̶i̶n̶p̶u̶t̶,̶ ̶s̶e̶a̶r̶c̶h̶ ̶f̶o̶r̶ ̶r̶h̶y̶m̶i̶n̶g̶ ̶w̶o̶r̶d̶s̶
// A̶l̶l̶o̶w̶ ̶u̶s̶e̶r̶s̶ ̶t̶o̶ ̶s̶e̶a̶r̶c̶h̶ ̶f̶o̶r̶ ̶w̶o̶r̶d̶s̶ ̶w̶i̶t̶h̶ ̶a̶ ̶s̶i̶m̶i̶l̶a̶r̶ ̶m̶e̶a̶n̶i̶n̶g̶ ̶t̶o̶ ̶a̶ ̶g̶i̶v̶e̶n̶ ̶w̶o̶r̶d̶ ̶(̶u̶s̶e̶ ̶t̶h̶e̶ ̶m̶l̶ ̶p̶a̶r̶a̶m̶e̶t̶e̶r̶ ̶i̶n̶ ̶t̶h̶e̶ ̶D̶a̶t̶a̶M̶u̶s̶e̶ ̶A̶P̶I̶)̶
// S̶h̶o̶w̶ ̶t̶h̶e̶ ̶h̶e̶a̶d̶e̶r̶ ̶"̶W̶o̶r̶d̶s̶ ̶w̶i̶t̶h̶ ̶a̶ ̶s̶i̶m̶i̶l̶a̶r̶ ̶m̶e̶a̶n̶i̶n̶g̶ ̶t̶o̶ ̶{̶.̶.̶.̶}̶:̶"̶
// While the results are loading (while we are waiting for data from the DataMuse API), show the text "...loading"
// I̶f̶ ̶t̶h̶e̶r̶e̶ ̶a̶r̶e̶ ̶n̶o̶ ̶r̶e̶s̶u̶l̶t̶s̶,̶ ̶s̶h̶o̶w̶ ̶t̶h̶e̶ ̶t̶e̶x̶t̶ ̶"̶(̶n̶o̶ ̶r̶e̶s̶u̶l̶t̶s̶)̶"̶
// I̶̶̶f̶̶̶ ̶̶̶t̶̶̶h̶̶̶e̶̶̶r̶̶̶e̶̶̶ ̶̶̶a̶̶̶r̶̶̶e̶̶̶ ̶̶̶r̶̶̶e̶̶̶s̶̶̶u̶̶̶l̶̶̶t̶̶̶s̶̶̶,̶̶̶ ̶̶̶s̶̶̶h̶̶̶o̶̶̶w̶̶̶ ̶̶̶t̶̶̶h̶̶̶e̶̶̶m̶ ̶a̶s̶ ̶a̶ ̶l̶i̶s̶t̶
// A̶l̶l̶o̶w̶ ̶t̶h̶e̶ ̶u̶s̶e̶r̶ ̶t̶o̶ ̶"̶s̶a̶v̶e̶"̶ ̶w̶o̶r̶d̶s̶ ̶b̶y̶ ̶c̶l̶i̶c̶k̶i̶n̶g̶ ̶a̶ ̶"̶S̶a̶v̶e̶"̶ ̶b̶u̶t̶t̶o̶n̶ ̶n̶e̶x̶t̶ ̶t̶o̶ ̶e̶v̶e̶r̶y̶ ̶r̶e̶s̶u̶l̶t̶
// T̶h̶e̶r̶e̶ ̶s̶h̶o̶u̶l̶d̶ ̶b̶e̶ ̶a̶ ̶l̶i̶s̶t̶ ̶o̶f̶ ̶"̶S̶a̶v̶e̶d̶ ̶w̶o̶r̶d̶s̶"̶ ̶a̶t̶ ̶t̶h̶e̶ ̶t̶o̶p̶ ̶o̶f̶ ̶t̶h̶e̶ ̶p̶a̶g̶e̶ ̶t̶h̶a̶t̶ ̶s̶t̶a̶r̶t̶s̶ ̶w̶i̶t̶h̶ ̶t̶h̶e̶ ̶t̶e̶x̶t̶ ̶"̶S̶a̶v̶e̶d̶ ̶w̶o̶r̶d̶s̶:̶ ̶(̶n̶o̶n̶e̶)̶"̶
// N̶e̶x̶t̶ ̶t̶o̶ ̶e̶v̶e̶r̶y̶ ̶r̶e̶s̶u̶l̶t̶,̶ ̶t̶h̶e̶r̶e̶ ̶s̶h̶o̶u̶l̶d̶ ̶b̶e̶ ̶a̶ ̶"̶(̶s̶a̶v̶e̶)̶"̶ ̶b̶u̶t̶t̶o̶n̶ ̶t̶h̶a̶t̶ ̶a̶d̶d̶s̶ ̶t̶h̶a̶t̶ ̶w̶o̶r̶d̶ ̶t̶o̶ ̶t̶h̶e̶ ̶l̶i̶s̶t̶ ̶o̶f̶ ̶s̶a̶v̶e̶ ̶r̶e̶s̶u̶l̶t̶s̶ ̶w̶h̶e̶n̶ ̶c̶l̶i̶c̶k̶e̶d̶
// The list of saved words should be displayed, separated by a comma (you might want to use the .join() method (Links to an external site.) for this)


function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

function getSynonyms(ml, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({ml})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

/**
 * Returns a list of objects grouped by some property. For example:
 * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
 * 
 * returns:
 * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
 *    'red': [{name: 'Jack', team: 'red'}]
 * }
 * 
 * @param {any[]} objects: An array of objects
 * @param {string|Function} property: A property to group objects by
 * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
 */
 function groupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}
////////////////////////////////////////////////////////////////////////////////////////////////
show_rhymes = document.getElementById('show_rhymes')
show_synonyms = document.getElementById('show_synonyms')
word_output = document.getElementById('word_output')

saved_words.textContent='(none)'

////////////////////////////////////////////////////////////////////////////////////////////////
function saveWord(x){
    saved_words.append(x+", ");
}
function rhymes_output(){
    word_output.textContent = '';
    word_input = (document.getElementById('word_input')).value
    output_description = document.getElementById('output_description')
    saved_words = document.getElementById('saved_words')
    //check what the input is:

    getRhymes(word_input, (result) => {
        const sorted_result = groupBy(result,'numSyllables');
        const values = Object.values(sorted_result);
        const grouped_result = values.flat()
        console.log(values)
        console.log(grouped_result)
        
        if (grouped_result.length>0){
            for (a in grouped_result){
                let rhymes = grouped_result[a].word;
                saved_words.textContent=''
                word_output.innerHTML+='<li>'+rhymes+'<button onclick=saveWord("'+rhymes+'") class="btn btn-sm btn-outline-danger save" type="button">(save)</button></li>';
                output_description.textContent = 'Words that rhyme with '+word_input+':';

                
            }} else {
                output_description.textContent = 'No Results'
            }
        
    });

    show_rhymes.addEventListener('load', ()=>{
        console.log('page loading')
        output_description.textContent = 'loading...'
    })

}

function synonyms_output(){
    word_output.textContent = '';
    word_input = (document.getElementById('word_input')).value
    output_description = document.getElementById('output_description')
    //check what the input is:
    getSynonyms(word_input, (result) => {
        const sorted_result = groupBy(result,'numSyllables');
        const values = Object.values(sorted_result);
        const grouped_result = values.flat()
        console.log(values)
        console.log(grouped_result)
        
        if (grouped_result.length>0){
            for (a in grouped_result){
                let synonyms = grouped_result[a].word;
                saved_words.textContent=''
                word_output.innerHTML+='<li>'+synonyms+'<button onclick=saveWord("'+synonyms+'") class="btn btn-sm btn-outline-danger save" type="button">(save)</button></li>';
                output_description.textContent = 'Words with a meaning similar to '+word_input+':'
                
            }} else {
                output_description.textContent = 'No Results'
            }


        

    });

    show_synonyms.addEventListener('load', ()=>{
        console.log('page loading')
        output_description.textContent = 'loading...'
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////

show_rhymes.addEventListener('click', ()=>{
    rhymes_output();
})
document.getElementById('word_input').addEventListener('keypress', (event)=>{
    if (event.key == 'Enter'){
        rhymes_output();
    }
})

show_synonyms.addEventListener('click', ()=>{
    synonyms_output();
})




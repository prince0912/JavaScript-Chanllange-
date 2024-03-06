// Huffman Coding Compression Algorithm
//1. Create a leaf node for each character and add them to the priority queue.

// 2. While there is more than one node in the queue:

// Remove the two nodes of the highest priority (the lowest frequency) from the queue.
// Create a new internal node with these two nodes as children and a frequency equal to the sum of both nodes’ frequencies.
// Add the new node to the priority queue.
// 3. The remaining node is the root node and the tree is complete.



class Node{
    constructor(char, freq, left = null , right = null){
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}


function buildFrequencyTable(data){
    const frequencyTable ={};

    for(const char of data){
        frequencyTable[char] = (frequencyTable[char] || 0)+1;
    }


    return Object.entries(frequencyTable)
    .map(([char, freq])=> new Node(char, freq))
    .sort((a, b) => a.freq - b.freq);

}

function buildHuffmanTree(nodes){
    while(nodes.length > 1){
        const [first, second] = nodes.splice(0,2);
        const newNode = new Node(null, first.freq + second.freq, first, second);
        nodes.push(newNode);
        nodes.sort((a, b )=> a.freq - b.freq);
    }

    return nodes[0];
}


function buildHuffmanCodes(node, code="", codes={}){
    if(node.char !== null){
        codes[node.char] = code;
        return codes;
    }

    buildHuffmanCodes(node.left, code + "0", codes);
    buildHuffmanCodes(node.right, code + "1", codes);

    return codes;
}

function encode(data, codes){
    return data.split("").map((char)=>codes[char]).join("");
}

function compress(data){
    const frequencyTable = buildFrequencyTable(data);
    const huffmanTree = buildHuffmanTree([...frequencyTable]);
    const huffmancodes = buildHuffmanCodes(huffmanTree);

    const compressedData = encode(data, huffmancodes);

    return {frequencyTable , huffmancodes , compressedData};
}


const data = 'abracadabra';
const {frequencyTable, huffmancodes,  compressedData } = compress(data);

console.log("Frequency Table:", frequencyTable);
console.log("Huffman codes:", huffmancodes);
console.log("Compressed Data", compressedData)

function bfs(rootNode, vertices, edges){


    let visited = [];
    let explored = [];

    rootNode.distance = 0;
    visited.push(rootNode);

    var adjacents;
    var firstNode;

    while(visited.length > 0){
        
        firstNode =  visited.shift()

        adjacents = findAdjacent(firstNode.name, vertices, edges);
       
        for(const vertice of adjacents){   
            visited.push(vertice)
        }

        
        markDistanceAndPredecessor(firstNode, adjacents)


        explored.push(firstNode);
    }

    
    return explored;

}



function findAdjacent(rootNode, vertices, edges){

        let allOfRootsEdges = edges.filter(a => a.includes(rootNode));

        let adjacentAddreses = [... new Set(allOfRootsEdges.flat(1))]

        let rootNodeIndex = adjacentAddreses.indexOf(rootNode)
        adjacentAddreses.splice(rootNodeIndex, 1)

        let adjacentNodes = [];
       

        for(let x = 0; x < adjacentAddreses.length; x++){
           let found = vertices.find(el => (el.name === adjacentAddreses[x] && el.distance === null))
            if(found != undefined){
                adjacentNodes.push(found)
            }
        }
        return adjacentNodes
}




function markDistanceAndPredecessor(node, adjacents){
    for(let vertice of adjacents){
     
            vertice.distance = node.distance + 1;
            vertice.predecessor = node;
    }
   
    return adjacents;
}

function addToQueue(){

}

var edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

var vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
    {name: '28th&Bwy', distance: null, predecessor: null},

  {name: '14th&6th', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null}
]

let adjacents = findAdjacent('34th&6th', vertices, edges)
//console.log(adjacents)
markDistanceAndPredecessor( {name: '34th&6th', distance: null, predecessor: null}, adjacents)

const xpath = require("xpath"),
  dom = require("xmldom").DOMParser;

module.exports.getFromXpath = (html, xpathtoberetrived) => {
  var doc = new dom().parseFromString(html);
  var nodes = xpath.select(xpathtoberetrived, doc);
   return nodes[0].firstChild.data;
};

module.exports.getLinks=html=>{
    var doc = new dom().parseFromString(html);
    var nodes = xpath.select('//a', doc);
    return nodes;
}

module.exports.getAllLinkText=html=>{
    var nodes = this.getLinks(html);
    var nodetext = [];
    nodes.forEach(function(node){
        nodetext.push(node.firstChild.data)
    });
    return nodetext;
}
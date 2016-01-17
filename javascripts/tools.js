define(function () {
    return {
        findParent: function (node,parentName) {
            var parentNode=node.parentNode;
            return parentNode.nodeName.toLowerCase()===parentName ? parentNode : this.findParent(parentNode,parentName);
        }
    }
});
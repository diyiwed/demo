function my$(id){
   return document.getElementById(id);
}
//设置任意元素之间的文本内容
function setInnerText(element,text) {
    if (typeof element.textContent=="undefined") {
        element.innerText=text;
    }else{
        element.textContent;
    }
}
//获取任意元素之间的文本值
function getInnerContent(element) {
    if (typeof element.textContent=="function"){
        return element.innerText;
    } else{
        return element.textContent;
    }
}

//获取任意一个父级元素的第一个子级元素
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    }else{
        var node=element.firstElementChild;
        while (node&&node.nodeType!=1) {
            node=node.nextSibling;
        }
        return node;
    }
}

//获取任意一个父级元素的最后一个子级元素
function getLastElementChild(element) {
    if (element.lastElementChild){
        return element.lastElementChild;
    } else{
        var node=element.lastChild;
        while (node&&node.nodeType!=1) {
            node=node.previousSibling;
        }
        return node;
    }
}
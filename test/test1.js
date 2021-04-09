function travate(root) {
    var result = [];
    var diff = function() {
        if(root.value) {
            result.push(root.value)
        }
        if(root.left) {
            diff(root.left)
        }

    }
    diff(root)
    return result
}
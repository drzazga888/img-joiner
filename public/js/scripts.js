function buildStruct() {
    return buildStructDeeper($('.project').children());
}

function buildStructDeeper(root) {
    if (root.hasClass('image')) {
        var child = root.children('img');
        return {
            type: 'image',
            imageId: child.length > 0 ? Number(child.data('id')) : null
        }
    } else if (root.hasClass('split')) {
        var builded = [];
        root.children().each(function() {
            var child = buildStructDeeper($(this));
            if (child)
                builded.push(child);
        });
        return {
            type: root.hasClass('vertical') ? 'vertical' : 'horizontal',
            splitNodes: builded
        };
    } else
        return null;
}

$(document).ready(function() {
    console.log(JSON.stringify(buildStruct()));
});

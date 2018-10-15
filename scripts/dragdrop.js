interact('.card')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "self",
            endOnly: true,
            elementRect: { top: 0, left: 1, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: false,
        // call this function on every dragmove event
        onmove: dragMoveListener,
    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// enable draggables to be dropped into this
interact('.placeholderCard').dropzone({
    // Require a 50% element overlap for a drop to be possible
    overlap: 0.50,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        if (draggableElement.children[1].className == dropzoneElement.children[0].className) {
            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
        }
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
    },
    ondrop: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        //Check if the card is being placed in the correct placeholder.
        if (draggableElement.children[1].className == dropzoneElement.children[0].className) {
            // make card invisible if placed in right placeholder.
            event.relatedTarget.style.display = 'none';
            counter++;
        }

        if (counter == 52) {
            document.getElementById("restart").children[0].style.display = "inline-block";
            document.getElementById("restart").style.display = "inline-block";
        }
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});
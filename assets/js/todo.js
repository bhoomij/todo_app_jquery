// Mark todo as complete
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Delete todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

//Add todo
$("input[type='text']").on("keypress", function (e) {
    if (e.keyCode === 13) {
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
})
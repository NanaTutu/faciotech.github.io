document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown-toggle elements
    var dropdownToggleElements = document.querySelectorAll('.dropdown-toggle');

    // Add click event listener to each dropdown-toggle element
    dropdownToggleElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Toggle the visibility of the next sibling element
            var submenu = this.nextElementSibling;
            if (submenu.classList.contains('show')) {
                submenu.classList.remove('show');
            } else {
                submenu.classList.add('show');
            }
        });
    });
});
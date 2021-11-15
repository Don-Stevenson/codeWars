// opening php script tag
<?php
// We have a "books" Pod with "Publisher" and
// as single-select relationship fields
// setting up the parameters to for the query
$params = array(
    'limit'
    => -1 // Return all rows
);
//  Create and find all books passing in the above params on the search
//  Loop to go through and fetch all the books and display all the titles and the publisher
$books = pods('books', $params);
if (0 < $books->total()) {
    while ($books->fetch()) {
        
?>      <!-- Closing tag for script -->
        <!-- print the title of the book in a h2 html element -->
        <h2><?php echo $books->display('name'); ?></h2>
        <!-- line break -->
        <br />
        <!-- print the name of the publisher in a h2 html element -->
        <h2>Publisher: <?php echo $books->display('Publisher'); ?></h2>
        <br />
<?php
    } // end of books loop
} // end of found books
?>

<!-- The above should output every book in the array. 
Here is example of one entry for a book -->
<h2>The Lord of the Rings</h2>
<br />
<p>Publisher: ‘Allen & Unwin’</p>
<br />
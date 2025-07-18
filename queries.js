queries.js
// Connect and run the following commands in MongoDB Compass 'Filter' or 'Aggregation' tabs:

// 1. Find all books in a specific genre (e.g., Fantasy)
Filter:
{ genre: "Fantasy" }

// 2. Find books published after a certain year (e.g., 2015)
Filter:
{ published_year: { $gt: 2015 } }

// 3. Find books by a specific author (e.g., J.K. Rowling)
Filter:
{ author: "J.K. Rowling" }

// 4. Update price of a specific book (use Update tab):
Filter: { title: "The Hobbit" }
Update: { $set: { price: 12.99 } }

// 5. Delete a book by title (use Delete tab):
Filter: { title: "Old Book Title" }

// 6. Books in stock and published after 2010
Filter:
{ in_stock: true, published_year: { $gt: 2010 } }

// 7. Projection: only title, author, price
Filter: {}
Project:
{ title: 1, author: 1, price: 1 }

// 8. Sorting by price
Sort Ascending:
{ price: 1 }
Sort Descending:
{ price: -1 }

// 9. Pagination: 5 per page (e.g., page 2)
Skip: 5
Limit: 5

// 10. Aggregation: Avg price by genre
Pipeline:
[ { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } } ]

// 11. Aggregation: Author with most books
Pipeline:
[
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]

// 12. Aggregation: Group by publication decade
Pipeline:
[
  {
    $group: {
      _id: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } }, "s" ] },
      count: { $sum: 1 }
    }
  }
]

// 13. Create Indexes (Compass Indexes tab):
{ title: 1 }
{ author: 1, published_year: 1 }

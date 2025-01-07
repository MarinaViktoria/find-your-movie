# Find Your Movie - a React app to search for movies, view movie details, rate and add movies to your watchlist

This project is a part of [The Ultimate React Course 2024: React, Redux & More](https://www.udemy.com/course/the-ultimate-react-course/) by `Jonas Schmedtmann`.
The website's design and structure were provided as part of the course curriculum, and I did not design the website from scratch. The primary purpose of this project is to practice and apply the concepts learned during the course.

## Description

Find Your Movie is a web application that utilizes React concepts including `useEffect`, data fetching, and custom hooks to fetch data from the [OMDb API](https://www.omdbapi.com/), a comprehensive database of movie information. It allows users to:

- Search for movies
- View movie details
- Rate and add movies to their watchlist

## Usage

Write the movie's title in the search field.
Once you find a movie that you are interested in, click on it to view the details page. The details page will show you the movie title, poster, runtime, IMDb rating, plot, release year, actors, director, and genre. You can also rate the movie and add it to your watchlist.
To remove a movie from your watchlist, simply click on the "X" button next to the movie.

## Features

- Search movies: Users can enter a movie title in the search box.
- Focused search box: The search box is automatically focused when the page loads.
- Clear search query: Users can press enter to clear the search query after input.
- Preview search results: Display movie titles and release years; users can click on a movie to view more details.
- Detailed search results: Includes title, poster, runtime, IMDb rating, plot, release year, actors, director, and genre.
- Page title update: Page title is automatically updated to the selected movie title.
- Rate and add movies to watchlist: Users can rate movies (1 to 10) and add them to their watchlist.
- Return to watchlist from search results: Users can press the escape key to return from the search results detail page to the watchlist.
- Saved watchlist: The watchlist is automatically saved in local storage.
- Average rating and average runtime of all selected movies on the watchlist.
- Remove movies from watchlist: Users can remove movies from their watchlist by clicking the "X" button next to the movie.

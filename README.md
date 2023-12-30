# Netflix GPT

    - create-react-app netflix-gpt
    - Configured Tailwind css
    - Header
    - Routing of App
    - Login Form
    - Sign up Form
    - Form validation
    - useRef hook
    - Firebase Setup
    - Deploying app to server
    - Create sign up user account
    - Implement Sign in functionality
    - Created userSlice with Redux store
    - BugFix : User profile updated
    - BugFix : Navigating from /browse to / if not logged in and vice-versa
    - Optimize : removed eventListener with cleanup func. for onAuthStateChanged in the  useEffect
    - Optimize : Added hardcoded values to constants file
    - Registered on TMDB and got the API key and read access token
    - got the data from TMDB api nowPlayingMovies
    - Created custom hook useNowPlayingMovies
    - created moviesSlice
    - updated redux store with movies data
    - Created plan for MainContainer and SecondaryContainer
    - Fetched the Trailer video from API data
    - Embedded the youtube video and made it autoPlay with mute option
    - Build SecondaryComponent
    - Build MovieList
    - Build MovieCard
    - TMDB image cdn url
    - usePopularMovies custom hook created

# Features

- Login/Sign Up
  - Sign In /Sign Up Form
  - redirect to browse page
- Browse (After authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search bar
  - movie suggestions

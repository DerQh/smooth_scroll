// VARIABLES //
const url =
  "https://api.themoviedb.org/3/movie/550?api_key=fe06dea7adb7b94ebb81f9d0294ebddc";
const url2 =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe06dea7adb7b94ebb81f9d0294ebddc&page=1";

const AUTH_KEY = "1c71ee163e25b728eb804e977142d48f";
const API_KEY_NEW = "fe06dea7adb7b94ebb81f9d0294ebddc";
const MOVIE_DB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
const MOVIE_DB_INFO_URL = "https://api.themoviedb.org/3/movie";
const MOVIE_DB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const genreurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_NEW}&language=en-US`;
const showsgenre = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY_NEW}&language=en-US`;
// console.log(genreurl, showsgenre);
// DOM ELEMENTS
const section_OneEl = document.querySelector(".one");
const navbarEL = document.querySelector(".navbar");
const wrappperDivEl = document.getElementsByClassName("wrapper_div");
const image_divEl = document.getElementsByClassName("image_div");

const logoEl = document.querySelector(".logo");
const menuDropEl = document.querySelector(".drop_down");
const signUpDivEl = document.querySelector(".sign_up");
const bodyEl = document.querySelector("body");
const cancleBtnEl = document.querySelectorAll(".fa-xmark");
const createACCEl = document.querySelector(".create_account");
const creatAccDIvEl = document.querySelectorAll(".create_account_div");
const signUpCallEl = document.querySelector(".sign_in_call");

const menuDLogoEls = document.querySelectorAll(".menu_logo");
const menuDIvEl = document.querySelector(".minus_one");
const lensEl = document.querySelector(".fa-magnifying-glass");
const searchDivEl = document.querySelector(".search_div");
const loginEl = document.querySelector(".to_logIN");
const movieBtnEl = document.querySelector(".genre");
const sectionOneEl = document.querySelector(".one");

const movie_pageEl = document.querySelector(".movie_page");
const landing_MovieEl = document.querySelector(".movie_landing");
const trending_divEL = document.querySelector(".trending");
const trending_div_innnerEL = document.querySelector(".trending_div");
let section_TwoEl = document.querySelector(".two");
const parentELs = document.getElementsByClassName("cover_div");
const watchBtns = document.getElementsByClassName("btn_watch");

const sliderContainer = document.querySelector(".trending_div");
const sliderEls = document.getElementsByClassName("trending-mov-div");

const single_movieTopEL = document.getElementsByClassName("single_movie_top");
const wrapperDivEl = document.querySelectorAll(".wrapper_div");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let data;
let id;

// Helper Functions
function randNum() {
  const max = 140;
  const min = 90;
  const num = (Math.random() * (max - min) + min).toFixed(0);
  return num;
}

function Settimet(func) {
  setTimeout(func, 2000);
}

function changeDate(dateItem) {
  dateItem = "2023-07-05";
  const year = dateItem.slice(0, 4);
  const month = +dateItem.slice(-1);
  const date = +dateItem.slice(5, 7);
  const dateFormat = `${months[month + 1]} ${date}, ${year}`;
  return dateFormat;
  console.log(dateFormat);
}

//

function scroll_naavbar() {
  window.onscroll = function () {
    if (window.pageYOffset >= navbarEL.offsetTop) {
      section_OneEl.classList.add("sticky");
    } else {
      section_OneEl.classList.remove("sticky");
    }
  };
}

function observeDivs() {
  let num = 0;
  // create observer//
  const callback_Func = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (num % 2 === 0) {
          entry.target.classList.toggle("scroll");
          entry.target.classList.toggle("fadeinTopRight");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.toggle("scroll");
          entry.target.classList.toggle("fadeinTop");
          observer.unobserve(entry.target);
        }
      } else {
        return;
      }
      num++;
    });
  };
  const observer = new IntersectionObserver(callback_Func, {
    threshold: 0.6,
    rootMargin: "60px",
  });

  // loop over enties//
  Array.from(wrappperDivEl).forEach((div) => {
    observer.observe(div);
  });
}

function toggelMenu() {
  cancleBtnEl.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      signUpDivEl.classList.toggle("hidden");
      bodyEl.style.overflow = "scroll";
    });
  });

  createACCEl.addEventListener("click", function () {
    creatAccDIvEl.forEach((el) => {
      el.classList.toggle("hidden");
    });
  });

  signUpCallEl.addEventListener("click", function () {
    creatAccDIvEl.forEach((el) => {
      el.classList.toggle("hidden");
    });
  });

  loginEl.addEventListener("click", function () {
    signUpDivEl.classList.toggle("hidden");
    creatAccDIvEl.forEach((el) => {
      el.classList.remove("hidden");
    });
    creatAccDIvEl[0].classList.add("hidden");
    bodyEl.style.overflow = "hidden";
  });

  lensEl.addEventListener("click", () => {
    searchDivEl.classList.toggle("active");
    lensEl.classList.toggle("color_aqua");
  });
  logoEl.addEventListener("click", function () {
    menuDropEl.classList.toggle("show_menu");

    menuDIvEl.addEventListener("click", function () {
      if (menuDropEl.classList.contains("show_menu")) {
      }
    });
  });

  logoEl.addEventListener("mouseover", function () {
    menuDLogoEls.forEach((el) => {
      el.classList.toggle("aqua_backg");
    });
  });
}

// SLIDE TRENDING MOVIES FUNCION //
//
function trendingSlider() {
  if (!data) return;
  let count = 0;
  sliderContainer.addEventListener("click", function (event) {
    if (count >= data.length) count = 0;
    // console.log(data[count]);
    sliderContainer.innerHTML = "";
    let link = `${MOVIE_DB_IMAGE_URL}${data[count].backdrop_path}`;
    // console.log(link);
    const markup = `<div class="trending-mov-div">
          <div class="next_page">
            <img class="next_icon" src="./images/next-button.png" alt="" />
          </div>
          <div class="trending_details">
            <h4 class="trending_genre">${data[count].title}</h4>
            <h4 class="trending_genre">Movie</h4>
          </div>`;
    sliderContainer.insertAdjacentHTML("afterbegin", markup);
    trending_div_innnerEL.style.backgroundImage = `linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(22, 22, 22, 0.5)
    ),
    url("${link}")`;
    count++;
  });

  // let imageWidth = sliderEls[0].clientWidth;
  // console.log(imageWidth);
  // let currentIndex = 0;
  // sliderContainer.style.transform = `translateX(${
  //   -imageWidth * currentIndex
  // }px)`;
  // Array.from(sliderEls).forEach((element, index) => {
  //   element.addEventListener("click", (event) => {
  //     // sliderContainer.style.transform = `translateX(${-100}%)`;
  //     // currentIndex = index;
  //   });
  // });
}

//
async function renderMovie_straignt(id_film) {
  try {
    location.hash = "#moviename";
    Array.from(single_movieTopEL).forEach((el) => {
      el.classList.remove("animation_on");
    });
    api.getSingle(id_film).then((singleData) => {
      // console.log(singleData);
      // console.log(id_film);
      api.getCredits(id_film).then((cast) => {
        // console.log(cast);
        let countries = singleData.production_countries.map((dat) => dat.name);
        let genres = singleData.genres.map((dat) => dat.name);
        let markup_array = [];
        let recommended_Array = data.slice(0, 11);
        let backdrop_link = `https://image.tmdb.org/t/p/w500${singleData.backdrop_path}`;
        let poster_link = `https://image.tmdb.org/t/p/w500${singleData.poster_path}`;
        let castNames = cast.cast
          .slice(0, 5)
          .map((cst) => cst.name)
          .join(", ");
        let director = cast.cast[0].character;
        // console.log(director);
        // console.log(castNames);

        // ----RENDER THE HTML -
        menuDIvEl.innerHTML = "";
        const singleMovie = `<div class="single_movie_top">
          <!-- HOmePage Landing Section  -->
          <section class="landing_movie">
          <!-- Clicked Movie Page -->
          <section class="movie_page " style="background-image:linear-gradient(rgba(255, 255, 255, 0), rgba(22, 22, 22, 1)), url('${backdrop_link}')">
            <div class="play_btn_div">
              <img
                class="movie_play_btn"
                src="./images/play-button-2.png"
                alt=""
              />
            </div>
          </section>
          </section>
        </div>`;
        menuDIvEl.insertAdjacentHTML("afterbegin", singleMovie);
        const markup = `<div class="wrapper-movie" style="background-image:linear-gradient(rgba(255, 255, 255, 0), rgba(22, 22, 22, 1)), url('${poster_link}')">
        <div class="single_movie">
          <div class="stars">
            <div class="ratings_stars">
              <i class="fa-solid fa-star fa-lg"></i>
              <i class="fa-solid fa-star fa-lg"></i>
              <i class="fa-solid fa-star fa-lg"></i>
              <i class="fa-solid fa-star-half-stroke fa-lg"></i>
              <i class="fa-regular fa-star fa-lg"></i>
            </div>
            <div class="review">
              <p>${singleData.vote_average} of 10 (${
          singleData.vote_count
        }  reviews)</p>
            </div>
          </div>

          <div class="movie-description">
            <h4 class="movie_title">${singleData.title}</h4>
            <div class="inner_landing_div movies">
              <h4 class="clicked format">HD</h4>
              <h4 class="active p_guidance">PG-13</h4>

              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffffff"></i>
                <h4 class="movie_rating">${singleData.vote_average} </h4>
              </div>
              <h4 class="year">2023</h4>
              <h4 class="duration">${randNum()} min</h4>
            </div>
            <p class="movie_synopsis">
              ${singleData.overview} 
            </p>
            <div class="movie_infos">
              <h5 class="movie_info">Type:</h5>
              <h5 class="movie_info">Movie</h5>
              <h5 class="movie_info">Country:</h5>
              <h5 class="movie_info">${countries.join(", ")}</h5>
              <h5 class="movie_info">Genre:</h5>
              <h5 class="movie_info">${genres.join(" ")}</h5>
              <h5 class="movie_info">Release Date:</h5>
              <h5 class="movie_info">${changeDate(cast.release_date)}</h5>
              <h5 class="movie_info">Director:</h5>
              <h5 class="movie_info">${director}</h5>
              <h5 class="movie_info">Cast:</h5>
              <h5 class="movie_info">
                ${castNames}
              </h5>
            </div>
          </div>
        </div>
        </div>
         <div class="top_movies_div">
            <!-- Menu -->
          <div class="menu_recomende">
            <h5 class="sub_title latest">RECOMMENDED</h5>
           </div>
       </div>
        `;

        section_TwoEl.innerHTML = "";
        section_OneEl.classList.toggle("sec-one-top");
        trending_divEL.classList.add("hidden");

        recommended_Array.forEach((arr) => {
          let link = `https://image.tmdb.org/t/p/w500${arr.poster_path}`;
          let year = arr.release_date ? arr.release_date.slice(0, 4) : "Null";

          // console.log(arr.first_air_date);

          let markup = ` <div class="top_movie reloaded">
             <div class="top_10">
                <div class="image_div_top">
                   <img
                   src="${link}"
                   alt=""
                  class="top_10_image"
                   />
                </div>
                <div class="top_10_detail">
                  <h6 class="top_paragraph">
                      <span class="top_genre">MOVIE /</span>
                       <span class="top_year">${year} /</span>
                       <span class="top_min">100 min</span>
                  </h6>
                   <h6 class="top_title">${arr.title}</h6>
                </div>
              </div>`;
          markup_array.push(markup);
        });

        section_TwoEl.insertAdjacentHTML("afterbegin", markup);

        // create the remomended section //

        const footerEl = ` <footer class="section_three last_footer">
        <div class="logo_name onfocus">
          <h4 class="footer_logo">Movie<span>Hub</span></h4>
        </div>
        <div class="footer_wrapper">
          <ul class="footer_links">
            <li class="footer_link"><a href="#">Movies</a></li>
            <li class="footer_link"><a href="#">TV_Shows</a></li>
            <li class="footer_link"><a href="#">A-Z List</a></li>
            <li class="footer_link"><a href="#">Recently Updated</a></li>
            <li class="footer_link"><a href="#">About</a></li>
            <li class="footer_link"><a href="#">Contact Me</a></li>
          </ul>
        </div>
        <div class="footer_divider"></div>
        <h6 class="footer_paragraph">
          Thank you for visiting MovieHub, your ultimate destination for all
          things cinema ! I strive to bring you the latest updates, reviews and
          information about the most captivating films from around the world.
          Wheather you're a decicated cinephile or simply enjoy a good movie. So
          sit back grab your popcorn, and let me take you to the journey of the
          silver screen.
        </h6>
        <h6 class="disclaimer">
          This website does not store any files on the server, I only link it to
          the media which is hosted on a 3rd party service
        </h6>
        <h6 class="end">sana @2023 All rights reserved</h6>
      </footer>`;
        markup_array.push(footerEl);
        const markup_recommended = markup_array.join("");
        const top_moviesEL = document.querySelector(".top_movies_div");
        top_moviesEL.insertAdjacentHTML("beforeend", markup_recommended);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // section_OneEl.classList.add("sticky");
        //  section_OneEl.classList.remove("sticky");
        //  navbarEL.classList.remove("sticky_movie");
        // section_OneEl.classList.add("sticky_movie");
      });
    });
  } catch (err) {
    console.error(err);
  }
}

// Render MOvie Page //
async function renderMOviePage() {
  Array.from(parentELs).forEach((el) => {
    el.addEventListener("click", function (event) {
      const movie_id = el.dataset.id;
      // console.log(id);
      renderMovie_straignt(movie_id);
    });
  });
}

async function renderHomeHtml(home_data) {
  // get 4 movies from DATA array //
  try {
    if (!home_data)
      throw new Error("Data is not there to be passed by Landing Page  ");
    let home_movie = await home_data.slice(0, 4);
    let runtime;
    let genre;
    let title, rating, year, bg_link, id;
    let empty = [];
    function get_array(mov) {
      return new Promise(async (resolve, reject) => {
        try {
          let single_mov = await api.getSingle(mov.id);
          // console.log(single_mov.runtime);
          year = single_mov.release_date.slice(0, 4);
          // console.log(year);
          runtime = single_mov.runtime;
          genre = single_mov.genres[0].name;
          bg_link = `https://image.tmdb.org/t/p/w500${single_mov.backdrop_path}`;
          id = single_mov.id;
          title = single_mov.title;
          rating = single_mov.vote_average;
          // console.log(runtime, genre, year, id, bg_link);
          let markup = ` <div class="single_movie_top animation_on data-id ="${id}">
        <!-- HOmePage Landing Section  -->
        <section class="landing_movie">
          <!-- Clicked Movie Page -->
          <section class="movie_page hidden">
            <div class="play_btn_div">
              <img
                class="movie_play_btn"
                src="./images/play-button-2.png"
                alt=""
              />
            </div>
          </section>
          <div class="movie_landing" style="background-image:linear-gradient(rgba(25, 20, 20, 0.1), rgba(22, 22, 22, 1)), url('${bg_link}')">
            <h4 class="movie_name">${title}</h4>
            <div class="inner_landing_div">
              <h4 class="clicked format">HD</h4>
              <h4 class="active p_guidance">${genre}</h4>
              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffffff"></i>
                <h4 class="movie_rating">${rating.toFixed(1)}</h4>
              </div>
              <h4 class="year">${year}</h4>
              <h4 class="duration">${runtime} min</h4>
            </div>

            <div class="watch_bookmark">
              <button class="btn_watch" data-id ="${id}">
                <i
                  class="fa-regular fa-circle-play fa-xl"
                  style="color: #000000"
                ></i>
                <span class="span_watch" >Watch Now</span>
              </button>
              <h4 class="bookmark_item">
                <i class="fa-regular fa-bookmark"></i
                ><span class="span_bookmark">Bookmark</span>
              </h4>
            </div>
          </div>
        </section>
       </div>
       `;
          resolve(markup);
        } catch (err) {
          reject(err);
        }
      });
    }

    Promise.all(home_movie.map(get_array)).then((fetched_data) => {
      empty.push(fetched_data);
      // console.log(empty);
      menuDIvEl.innerHTML = "";
      landingHTML = empty.join("");
      menuDIvEl.insertAdjacentHTML("afterbegin", landingHTML);

      // -----LISTEN TO CLICK ON THE WATCH BUTTONS AFTER THEY HAVE BEEN CREATED  ----//

      // console.log(watchBtns.length);
      Array.from(watchBtns).forEach((el) => {
        el.addEventListener("click", function (event) {
          const movie_id = el.dataset.id;
          // console.log(id);
          // location.hash = `#${}`;
          renderMovie_straignt(movie_id);
        });
      });

      // ////////
    });
  } catch (err) {
    console.error(err, "Error Retrieveing Homapage Data");
  }
}

// render Homepage //
async function renderHomePage(data_Array) {
  try {
    data_Array = data;
    if (!data_Array) throw new Error("No data for the HomaPage");
    location.hash = "#home";
    // render landig page //
    renderHomeHtml(data_Array);
    // location.hash = "home";
    Array.from(single_movieTopEL).forEach((el) => {
      el.classList.add("animation_on");
    });
    section_TwoEl.innerHTML = "";
    section_OneEl.classList.remove("sticky");
    navbarEL.classList.remove("sticky_movie");

    trending_divEL.classList.remove("hidden");

    function moviestemplate(section) {
      let recomended_movies = data_Array.slice(-11, -1);
      let latest_movies = data_Array.slice(0, 10);
      // console.log(latest_movies);
      let movies_array = [];
      let elementHtml;
      let count = 0;

      if (section == "movies") {
        recomended_movies.forEach((movie) => {
          let image_link = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          // console.log(movie.release_date);

          let year = movie.release_date
            ? movie.release_date.slice(0, 4)
            : "Null";
          elementHtml = `  <div class="wrapper_div ">
            <div class="image_div">
              <div class="cover_div show_image" data-id ="${movie.id}">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="${image_link}"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">${year}</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">${randNum()} min</h4>
            </div>
            <h4 class="movie_title">${movie.title}</h4>
          </div>`;
          movies_array.push(elementHtml);
        });
      }

      latest_movies.forEach((movie) => {
        let image_link = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        let year = movie.release_date ? movie.release_date.slice(0, 4) : "Null";
        if (section == "topmovies") {
          count++;
          elementHtml = `  <div class="top_movie data-id ="${movie.id}">
          <div class="number_div">
            <h4 class="number">${count}</h4>
          </div>
          <div class="top_10">
            <div class="image_div_top">
              <img
                src="${image_link}"
                alt=""
                class="top_10_image"
              />
            </div>
            <div class="top_10_detail">
              <h6 class="top_paragraph">
                <span class="top_genre">MOVIE /</span>
                <span class="top_year">${year} /</span>
                <span class="top_min">${randNum()} min</span>
              </h6>
              <h6 class="top_title">${movie.title}</h6>
            </div>
          </div>
        </div>`;
          movies_array.push(elementHtml);
        }
      });

      // console.log(movies_array.length);
      return movies_array.join("");
    }

    const markup = `  <div class="all-movies-div">
        <!-- Menu -->
        <div class="menu_recomende">
          <h5 class="sub_title">RECOMMENDED</h5>
          <div class="menu_movies_div">
            <h4 class="movies_btn">Movies</h4>
            <h4 class="shows_btn">TV Shows</h4>
          </div>
        </div>
        <!-- Movies-Div -->
        <div class="wrapper">${moviestemplate("movies")}
        </div>
      </div>

      <!-- Latest MOvies  -->
      <div class="all-movies-div">
        <!-- Menu -->
        <div class="menu_recomende">
          <h5 class="sub_title latest">LATEST MOVIES</h5>
          <!-- <div class="menu_movies_div">
            <h4 class="movies_btn">Movies</h4>
            <h4 class="shows_btn">TV Shows</h4>
          </div> -->
        </div>
        <!-- Movies-Div -->
        <div class="wrapper">${moviestemplate("movies")}
        </div>
      </div>

      <!--      TOP-10 -->

      <div class="top_movies_div">
        <!-- Menu -->
        <div class="menu_recomende">
          <h5 class="sub_title latest">TOP 10</h5>
          <div class="menu_movies_div">
            <h4 class="movies_btn">Day</h4>
            <h4 class="shows_btn">Week</h4>
            <h4 class="shows_btn">Month</h4>
          </div>
        </div>
        <!-- top movies list -->
        ${moviestemplate("topmovies")}
      </div>

      <!-- footer -->
      <footer class="section_three">
        <div class="logo_name onfocus">
          <h4 class="footer_logo">Movie<span>Hub</span></h4>
        </div>
        <div class="footer_wrapper">
          <ul class="footer_links">
            <li class="footer_link"><a href="#">Movies</a></li>
            <li class="footer_link"><a href="#">TV_Shows</a></li>
            <li class="footer_link"><a href="#">A-Z List</a></li>
            <li class="footer_link"><a href="#">Recently Updated</a></li>
            <li class="footer_link"><a href="#">About</a></li>
            <li class="footer_link"><a href="#">Contact Me</a></li>
          </ul>
        </div>
        <div class="footer_divider"></div>
        <h6 class="footer_paragraph">
          Thank you for visiting MovieHub, your ultimate destination for all
          things cinema ! I strive to bring you the latest updates, reviews and
          information about the most captivating films from around the world.
          Wheather you're a decicated cinephile or simply enjoy a good movie. So
          sit back grab your popcorn, and let me take you to the journey of the
          silver screen.
        </h6>
        <h6 class="disclaimer">
          This website does not store any files on the server, I only link it to
          the media which is hosted on a 3rd party service
        </h6>
        <h6 class="end">sana @2023 All rights reserved</h6>
      </footer>`;

    section_TwoEl.insertAdjacentHTML("afterbegin", markup);

    // -----LISTEN TO A CLICK ON THE MOVIE AFTER THEY HAVE BEEN CREATED ----//
    // console.log(parentELs.length);
    Array.from(parentELs).forEach((el) => {
      el.addEventListener("click", function (event) {
        const movie_id = el.dataset.id;
        // console.log(movie_id);
        renderMovie_straignt(movie_id);
      });
    });
  } catch (err) {
    console.error(err);
  }
}

// click wrapper div to = MOVIE //
//
function movie_page() {
  window.addEventListener("DOMContentLoaded", function () {
    renderMOviePage();
    const tvshowsEl = document.querySelector(".shows_btn");
    const movies = document.querySelector(".moviess_btn");
  });
}

//
// listen to hash change//
function hash_Change() {
  window.addEventListener("hashchange", function (event) {
    // console.log("hash changeded to: ", this.location.hash);
    if (location.hash == "#moviename") {
      // render movie page//
      renderMovie_straignt();
      // if (id) console.log(true);
    }
    if (location.hash == "#home") {
      // render home page
      renderHomePage();
      movie_hover();
      observeDivs();
      renderMOviePage();
    }
  });
}

// hash funtion //
function hash_func() {
  window.addEventListener("popstate", function (event) {
    // console.log(this.location.hash);
    // console.log(event);
  });
}

// mouse over movies //
function movie_hover() {
  Array.from(wrappperDivEl).forEach((el) => {
    // console.log(el);
    el.addEventListener("mouseover", function (event) {
      // console.log(true);
      el.childNodes[1].childNodes[1].classList.toggle("show_image");
      el.childNodes[3].childNodes[3].classList.toggle("color_aqua_border");
      el.childNodes[5].classList.toggle("color_aqua");
    });
    el.addEventListener("mouseout", function (event) {
      el.childNodes[1].childNodes[1].classList.toggle("show_image");
      el.childNodes[3].childNodes[3].classList.toggle("color_aqua_border");
      el.childNodes[5].classList.toggle("color_aqua");
    });
  });
}

// ÷windows load /
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

class FetchdataAPI {
  static BASE_URL = "https://api.themoviedb.org/3";
  static POPULAR = "/movie/popular";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // FETCH POPULAR MOVIES //

  async getPopular() {
    try {
      let response = await fetch(
        `${BASE_URL}${POPULAR}?api_key=${API_KEY_NEW}&language=en-US&page=1`
      );
      response = await response.json();
      console.log(response.results);
      data = response.results;
      return response.results;
    } catch (err) {
      console.error(err);
    }
  }
  async getTrending() {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY_NEW}&language=en-US&page=1`
      );
      response = await response.json();
      data = response.results;
      console.log(response.results);
      return response.results;
    } catch (err) {
      console.error(err);
    }
  }
  async getTVshows() {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY_NEW}&language=en-US&page=1`
      );
      response = await response.json();
      console.log(response.results);
      data = response;
      return response.results;
    } catch (err) {
      console.error(err);
    }
  }

  async printData(dataArray) {
    try {
      if (dataArray) throw new Error("There in no data ");
      // console.log("data will be printed");
      console.log(dataArray);
    } catch (err) {
      console.error(err);
    }
  }
  async getTOPrated() {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY_NEW}&language=en-US&page=1`
      );
      response = await response.json();
      console.log(response.results);
      data = response.results;
      return response.results;
    } catch (err) {
      console.error(err);
    }
  }
  async getCredits(movie_Id) {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_Id}/credits?api_key=${API_KEY_NEW}&language=en-US&page=1`
      );

      response = await response.json();
      // console.log(response);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
  async getSingle(movie_Id) {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${API_KEY_NEW}&language=en-US&page=1`
      );
      response = await response.json();
      // console.log(response);
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  async searchMovie(movie_name) {
    try {
      const data1 = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie_name}&api_key=${AUTH_KEY}`
      );
      response = await data1.json();
      data = await response.results;
      return response.results;
    } catch (err) {
      console.error(err);
    }
  }
  async getLocal() {
    let response = await JSON.parse(localStorage.getItem("movies"));
    data = response;
    return data;
  }
}

// data handler //
async function init() {
  renderHomePage();
  movie_page();
  hash_Change();
  toggelMenu();
  movie_hover();
  scroll_naavbar();
  observeDivs();
  trendingSlider();
}

// INstantiante the class //
const api = new FetchdataAPI();

api.getTrending().then((dataARRay) => {
  data = dataARRay;
  if (!data) return;
  // --- run all functions -- //
  init();
});

// TO DO LIST //
// Implement search and trending sections

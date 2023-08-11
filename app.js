// VARIABLES //
const url =
  "https://api.themoviedb.org/3/movie/550?api_key=fe06dea7adb7b94ebb81f9d0294ebddc";
const url2 =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe06dea7adb7b94ebb81f9d0294ebddc&page=1";

const MOVIE_DB_API_KEY = "1c71ee163e25b728eb804e977142d48f";
const API_KEY_NEW = "fe06dea7adb7b94ebb81f9d0294ebddc";
const MOVIE_DB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
const MOVIE_DB_INFO_URL = "https://api.themoviedb.org/3/movie";
const MOVIE_DB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// DOM ELEMENTS
const section_OneEl = document.querySelector(".one");
const navbarEL = document.querySelector(".navbar");
const wrappperDivEl = document.getElementsByClassName("wrapper_div");
const image_divEl = document.querySelectorAll(".image_div");

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
let section_TwoEl = document.querySelector(".two");
const parentELs = document.getElementsByClassName("cover_div");
const single_movieTopEL = document.getElementsByClassName("single_movie_top");
const wrapperDivEl = document.querySelectorAll(".wrapper_div");

let data;
let id;

//---------- FETCH DATA----- //

async function main_data(url) {
  try {
    let response = await fetch(url);
    response = await response.json();
    return response;
  } catch (err) {
    console.log(err, "Error fetching data");
  }
}

// main_data(url2).then(function (resp) {
//   data = resp.results;
//   console.log(data.results);
//   // localStorage.setItem("movies", JSON.stringify(data.results));
// });

async function getdaatLocal() {
  data = JSON.parse(localStorage.getItem("movies"));
}

getdaatLocal();

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

function renderMovie_straignt() {
  Array.from(single_movieTopEL).forEach((el) => {
    el.classList.remove("animation_on");
  });

  let [id_array] = data.filter((dat) => dat.id == id);
  console.log(id, id_array, data);
  let backdrop_link = `https://image.tmdb.org/t/p/w500${id_array.backdrop_path}`;
  let poster_link = `https://image.tmdb.org/t/p/w500${id_array.poster_path}`;

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
              <p>${id_array.vote_average} 0f 10(${id_array.vote_count}  reviews)</p>
            </div>
          </div>

          <div class="movie-description">
            <h4 class="movie_title">${id_array.title}</h4>
            <div class="inner_landing_div movies">
              <h4 class="clicked format">HD</h4>
              <h4 class="active p_guidance">PG-13</h4>

              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffffff"></i>
                <h4 class="movie_rating">${id_array.vote_average} </h4>
              </div>
              <h4 class="year">2023</h4>
              <h4 class="duration">114 min</h4>
            </div>
            <p class="movie_synopsis">
              ${id_array.overview} 
            </p>
            <div class="movie_infos">
              <h5 class="movie_info">Type:</h5>
              <h5 class="movie_info">Movie</h5>
              <h5 class="movie_info">Country:</h5>
              <h5 class="movie_info">United States</h5>
              <h5 class="movie_info">Genre:</h5>
              <h5 class="movie_info">Drama, Comedy, Family</h5>
              <h5 class="movie_info">Release Date:</h5>
              <h5 class="movie_info">jul 24, 2024</h5>
              <h5 class="movie_info">Director:</h5>
              <h5 class="movie_info">Johnny Depp</h5>
              <h5 class="movie_info">Cast:</h5>
              <h5 class="movie_info">
                Johnny Depp, Rosemarie DeWitt, Danny Huston, Zoey Deutch, Ron
                Livingstone, Linda Emond
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
  // section_OneEl.classList.add("sticky");
  //  section_OneEl.classList.remove("sticky");
  //  navbarEL.classList.remove("sticky_movie");
  // section_OneEl.classList.add("sticky_movie");

  section_TwoEl.insertAdjacentHTML("afterbegin", markup);
  // create the remomended section //
  let markup_array = [];

  for (x = 0; x <= 9; x++) {
    let markup = ` <div class="top_movie reloaded">
             <div class="top_10">
                <div class="image_div_top">
                   <img
                   src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                   alt=""
                  class="top_10_image"
                   />
                </div>
                <div class="top_10_detail">
                  <h6 class="top_paragraph">
                      <span class="top_genre">MOVIE /</span>
                       <span class="top_year">2023 /</span>
                       <span class="top_min">100 min</span>
                  </h6>
                   <h6 class="top_title">The Professor</h6>
                </div>
              </div>`;
    markup_array.push(markup);
  }

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
  trending_divEL.classList.add("hidden");
}

// Render MOvie Page //
function renderMOviePage() {
  Array.from(parentELs).forEach((el) => {
    el.addEventListener("click", function (event) {
      id = event.target.dataset.id;
      console.log(event.target.dataset.id, id);
      location.hash = "#moviename";
      renderMovie_straignt();
    });
  });
}

function renderHomeHtml() {
  console.log();
  let home_movie = data.slice(0, 4);
  let landing_array = [];
  home_movie.forEach((movie) => {
    // console.log(movie);
    let year = movie.release_date.slice(0, 4);
    let bg_link = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    const markup = ` <div class="single_movie_top animation_on data-id ="${movie.id}">
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
          <div class="movie_landing" style="background-image:linear-gradient(rgba(255, 255, 255, 0), rgba(22, 22, 22, 1)), url('${bg_link}')">
            <h4 class="movie_name">${movie.title}</h4>
            <div class="inner_landing_div">
              <h4 class="clicked format">HD</h4>
              <h4 class="active p_guidance">PG-13</h4>
              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffffff"></i>
                <h4 class="movie_rating">${movie.vote_average}</h4>
              </div>
              <h4 class="year">${year}</h4>
              <h4 class="duration">114 min</h4>
            </div>

            <div class="watch_bookmark">
              <button class="btn_watch">
                <i
                  class="fa-regular fa-circle-play fa-xl"
                  style="color: #000000"
                ></i>
                <span class="span_watch">Watch Now</span>
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
    landing_array.push(markup);
  });

  // //

  // console.log(landing_array.length);
  menuDIvEl.innerHTML = "";
  landing_array = landing_array.join("");
  menuDIvEl.insertAdjacentHTML("afterbegin", landing_array);
}

// render Homepage //
function renderHomePage() {
  // render landig page //
  renderHomeHtml();
  location.hash = "home";
  Array.from(single_movieTopEL).forEach((el) => {
    el.classList.add("animation_on");
  });
  section_TwoEl.innerHTML = "";
  section_OneEl.classList.remove("sticky");
  navbarEL.classList.remove("sticky_movie");

  trending_divEL.classList.remove("hidden");

  function moviestemplate(section) {
    let recomended_movies = data.slice(-11, -1);
    let latest_movies = data.slice(0, 10);
    console.log(latest_movies);
    let movies_array = [];
    let elementHtml;
    let count = 0;

    if (section == "movies") {
      recomended_movies.forEach((movie) => {
        let image_link = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        let year = movie.release_date.slice(0, 4);
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
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">${movie.title}</h4>
          </div>`;
        movies_array.push(elementHtml);
      });
    }

    latest_movies.forEach((movie) => {
      let image_link = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      let year = movie.release_date.slice(0, 4);
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
                <span class="top_min">100 min</span>
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

  // wrapperDivEl.forEach((el) => {
  //   // console.log(el.classList);
  //   // el.style.opacity = 0;
  // });
}

// click wrapper div to = MOVIE //
function movie_page() {
  window.addEventListener("DOMContentLoaded", function () {
    renderMOviePage();
  });
}

//
// listen to hash change//
function hash_Change() {
  window.addEventListener("hashchange", function (event) {
    // console.log("hash changeded to: ", this.location.hash);
    if (this.location.hash == "#moviename") {
      // render movie page//
      renderMovie_straignt();
    }
    if (this.location.hash == "#home") {
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
    console.log(this.location.hash);
    console.log(event);
    // console.log("back button pressed");
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
// Event Listiner//

function init() {
  renderHomePage();
  hash_Change();
  toggelMenu();
  movie_hover();
  scroll_naavbar();
  observeDivs();
  movie_page();
}
init();

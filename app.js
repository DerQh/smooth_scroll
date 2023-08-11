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
const single_movieTopEL = document.querySelectorAll(".single_movie_top");
const wrapperDivEl = document.querySelectorAll(".wrapper_div");

let data = [];

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
  single_movieTopEL.forEach((el) => {
    el.classList.remove("animation_on");
  });
  const markup = `<div class="wrapper-movie ">
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
              <p>6.6 0f 10(227 reviews)</p>
            </div>
          </div>

          <div class="movie-description">
            <h4 class="movie_title">The Professor</h4>
            <div class="inner_landing_div movies">
              <h4 class="clicked format">HD</h4>
              <h4 class="active p_guidance">PG-13</h4>

              <div class="rating">
                <i class="fa-solid fa-star" style="color: #ffffff"></i>
                <h4 class="movie_rating">7.7</h4>
              </div>
              <h4 class="year">2023</h4>
              <h4 class="duration">114 min</h4>
            </div>
            <p class="movie_synopsis">
              After learning about his terminal diagnosis, a college professor
              decides to live his life to the fullest by drinking, smoking and
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
  section_OneEl.classList.add("sticky");
  landing_MovieEl.classList.add("hidden");
  trending_divEL.classList.add("hidden");
  movie_pageEl.classList.remove("hidden");
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

  const footerEl = `    <footer class="section_three">
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
}

// Render MOvie Page //
function renderMOviePage() {
  Array.from(parentELs).forEach((el) => {
    el.addEventListener("click", function (event) {
      location.hash = "#moviename";
      renderMovie_straignt();
    });
  });
}

// render Homepage //
function renderHomePage() {
  single_movieTopEL.forEach((el) => {
    el.classList.add("animation_on");
  });
  section_TwoEl.innerHTML = "";
  section_OneEl.classList.remove("sticky");
  navbarEL.classList.remove("sticky_movie");

  landing_MovieEl.classList.remove("hidden");
  trending_divEL.classList.remove("hidden");
  movie_pageEl.classList.add("hidden");

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
        <div class="wrapper">
          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>

          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>
          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>

          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>

          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>

          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>
          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>

          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>
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
        <div class="wrapper">
          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>
          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>

          <div class="wrapper_div">
            <div class="image_div">
              <div class="cover_div show_image">
                <img class="play_btn" src="./images/play-button.png" alt="" />
              </div>
              <img
                class="image_movie"
                src="https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
                alt=""
              />
            </div>
            <div class="movie_details">
              <h4 class="year">2023</h4>
              <h4 class="genre">Movie</h4>
              <h4 class="runtime">100 min</h4>
            </div>
            <h4 class="movie_title">The Professor</h4>
          </div>
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
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">1</h4>
          </div>
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
          </div>
        </div>
        <!-- 2 -->
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">2</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">3</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">4</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">5</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">6</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">7</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">8</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">9</h4>
          </div>
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
          </div>
        </div>
        <div class="top_movie">
          <div class="number_div">
            <h4 class="number">10</h4>
          </div>
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
          </div>
        </div>
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

// Event Listiner//
function init() {
  location.hash = "home";
  renderHomePage();
  hash_Change();
  toggelMenu();
  movie_hover();
  scroll_naavbar();
  observeDivs();
  movie_page();
}

init();

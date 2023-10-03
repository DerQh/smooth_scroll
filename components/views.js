// click wrapper div to = MOVIE //

export const movie_page = function () {
  const movie_pageEl = document.querySelector(".movie_page");
  const landing_MovieEl = document.querySelector(".movie_landing");
  const trending_divEL = document.querySelector(".trending");
  const section_TwoEl = document.querySelector(".two");
  const parentELs = document.querySelectorAll(".cover_div");
  const single_movieTopEL = document.querySelectorAll(".single_movie_top");
  // const all_moviesEl = document.querySelector("");
  window.addEventListener("DOMContentLoaded", function () {
    parentELs.forEach((el) => {
      el.addEventListener("click", function (event) {
        single_movieTopEL.forEach((el) => {
          el.classList.toggle("animation_on");
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
        navbarEL.classList.toggle("sticky_movie");

        landing_MovieEl.classList.toggle("hidden");
        trending_divEL.classList.toggle("hidden");
        movie_pageEl.classList.toggle("hidden");
        section_TwoEl.insertAdjacentHTML("afterbegin", markup);
        console.log(event.target);
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

        // console.log();
      });
    });
  });
};

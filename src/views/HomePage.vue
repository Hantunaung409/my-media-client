<template>
  <div class="d-flex justify-content-center align-item-center">
    <p class="btn btn-sm btn-danger text-white me-4" @click="home()" v-if="!tokenStatus">Home</p>
    <p class="btn btn-sm btn-dark text-white" @click="loginPage()" v-if="!tokenStatus">Login</p>
    <p class="btn btn-sm btn-dark text-white" @click="logoutPage()" v-if="tokenStatus">Logout</p>
  </div>
    <div>
        <!-- Whats New Start -->
        <section class="whats-news-area pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-3 col-md-3">
                                <div class="section-tittle mb-30">
                                    <h3>Whats New</h3>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <div @click="categoryFilter('')" class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true" style="cursor:pointer">All</div
                        >
                        <div
                      
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="details.htmlnav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          v-for="(category, index) in categoryLists" :key="index"
                          @click="categoryFilter(category.category_id)"
                           style="cursor:pointer">{{ category.title }}</div
                        >

                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="offset-5 col-6 my-4 d-flex align-content-center align-items-center" v-if="tokenStatus">
                    <input type="text" name="" class=" form-control col-4" v-model="searchKey" @keyup.enter="search()">
                    <label class=" col-2 offset-1 fs-4" @click="search()"><i class="fa-solid fa-magnifying-glass"></i></label>
                  </div>
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <span v-if="!tokenStatus" class=" text-danger d-flex justify-content-center my-5 fs-4">Please Sign in to see more posts</span>
                        <span v-else>
                          <div class="row">
                            <div class=" fs-3 text-center my-5" v-if="postLists.length == 0">
                              There is no Post Related to the category!
                            </div>
                            <div class="col-lg-6 col-md-6" v-for="(post, index) in postLists" :key="index">
                              <div class="single-what-news mb-100" @click="newDetails(post.post_id)">
                                <div class="what-img">
                                  <img
                                    v-bind:src="post.image"
                                    alt=""
                                  />
                                </div>
                                <div class="what-cap">
                                  <span class="color1">{{ post.title }}</span>
                                  <h4>
                                    <a href="details.html"
                                      >{{ post.description }}</a
                                    >
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>

                      </div>
                    </div>
                    <!-- Card two -->
                    <div
                      class="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Card three -->
                    <div
                      class="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card fure -->
                    <div
                      class="tab-pane fade"
                      id="nav-last"
                      role="tabpanel"
                      aria-labelledby="nav-last-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card Five -->
                    <div
                      class="tab-pane fade"
                      id="nav-nav-Sport"
                      role="tabpanel"
                      aria-labelledby="nav-Sports"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card Six -->
                    <div
                      class="tab-pane fade"
                      id="nav-techno"
                      role="tabpanel"
                      aria-labelledby="nav-technology"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <!-- Whats New End -->

        <!--Start pagination -->
        <div class="pagination-area pb-45 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
                      ></a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="details.html">01</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">02</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">03</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
                      ></a>
                                            </li>
                                            </ul>
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
        <!-- End pagination  -->
    </div>
</template>

<script src="../js/HomePage.js"></script>


<template>
  <div class="d-flex justify-content-center align-item-center">
    <!-- <p class="btn btn-sm btn-danger text-white me-4" @click="home()">Home</p>
    <p class="btn btn-sm btn-dark text-white" @click="loginPage()">Login</p> -->
  </div>
    <div>
        <main>
        <!-- About US Start -->
        <div class="about-area">
            <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">
                                <strong>Trending now</strong>
                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   <div class="row">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="thisPostData.image" alt="">
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                    <h3>{{ thisPostData.title }}</h3>
                                </div>
                                <div class="about-prea">
                                    {{ thisPostData.description }}
                                </div> 
                                <!-- <div class="social-share pt-30">
                                    <div class="section-tittle">
                                        <h3 class="mr-20">Share:</h3>
                                        <ul>
                                            <li><a href="#"><img src="../assets/img/news/icon-ins.png" alt=""></a></li>
                                            <li><a href="#"><img src="../assets/img/news/icon-fb.png" alt=""></a></li>
                                            <li><a href="#"><img src="../assets/img/news/icon-tw.png" alt=""></a></li>
                                            <li><a href="#"><img src="../assets/img/news/icon-yo.png" alt=""></a></li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                            <div class=" mb-4">
                                <i class="fa-solid fa-eye me-2"></i>
                                <span>{{ viewCount }}</span>
                            </div>
                            <!-- From -->
                            <div class="row">
                                <div class="col-lg-8">
                                        <div class="form-group my-3">
                                            <button onclick="history.back()" class="button button-contactForm boxed-btn">Back</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <!-- New Poster -->
                            <div class="news-poster d-none d-lg-block">
                                <img src="../assets/img/news/news_card.jpg" alt="">
                            </div>
                        </div>
                   </div>
            </div>
        </div>
        <!-- About US End -->
    </main>
    </div>
</template>

<script src="../js/newDetails.js"></script>

<style lang="scss" scoped>

</style>
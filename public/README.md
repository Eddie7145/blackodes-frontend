body{
    background: #0f0e17;
    margin: 15px;
}
::-webkit-scrollbar{
    width: 0;
}
#scrollPath{
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
}
#progressbar{
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    background: linear-gradient(to top, #fa2e72, transparent);
    animation: animate 5s linear infinite;
}
@keyframes animate {
    0%,100%{
        filter: hue-rotate(0deg);
    }
    50%{
        filter: hue-rotate(50deg);
    }
}
#progressbar:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #fa2e72, transparent);
    filter: blur(10px);
}
#progressbar:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #fa2e72, transparent);
    filter: blur(10px);
}



/* NAV SECTION */
nav{
    width: 100%;
    height: 15vh;
    padding: 20px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #fa2e72;
    position: sticky;
}
nav ul li{
    font-size: 19px;
    font-weight: 300;
    list-style: none;
    display: inline-block;
    margin: 25px;
    top: 0;
    right: 2%;
}
nav ul li a{
    text-decoration: none;
    color: #fff;
    position: relative;
}
nav ul li a::after{
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background: #b367b3;
    transition: width 0.3s;
}
nav ul li a:hover::after{
    width: 50%;
    font-size: 10px;
    border-radius: 10px;
}
nav ul li a i{
    font-size: 20px;
    font-weight: 100;
    margin-left: 10px;
    color: #6801a3;
}
.nav-btn{
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    padding: 20px 20px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.30),
                             -6px -6px 10px -1px rgba(255, 255, 255, 0.03);
    transition: 0.3s ease-in;
}
.nav-btn i{
    margin-left: 10px;
    color: #6801a3;
    font-size: 20px;
}
.nav-btn:hover{
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.1),
                -4px -4px 6px -1px rgba(255, 255, 255, 0.01),
                -0.5px -0.5px 0px rgba(255, 255, 255, 0.1),
                0.5px 0.5px 0px rgba(0, 0, 0, .15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #18181f;
 
}
.logo{
    width: 250px;
    top: 0;
    left: 2%;
    cursor: pointer;
}

/* END OF NAV SECTION */


/* INTRO SECTION */

.intro-header{
    width: 100%;
    height: 95px;
    display: flex;
    place-items: center;
    justify-content: center;
    margin-top: 85px;
    position: relative;
}

.intro-header h1{
    font-size: 60px;
    color: #fff;
    text-align: center;
    justify-content: center;
}
.intro-header img{
    width: 250px;
    height: auto;
}
.intro-header span{
    margin-top: 90px;
    position: absolute;
    font-size: 18px;
    font-weight: 300;
    color: #777;
}
.intro-header a{
    text-decoration: none;
    color: #6801a3;
    font-size: 15px;
}
.intro-header a:hover{
    color: #fa2e72;
    transition: ease 0.3s;
    font-weight: 400;
}
.intro-header .user-pic{
    width: 25px;
    position: absolute;
    border-radius: 50%;
    margin-right: 190px;
    margin-top: 150px;
    border: 1px solid #fa2e72;
}
.intro-header .user-pic:hover{
    width: 40px;
    padding: 3px;
    margin-right: 200px;
    border: 1px dashed #fa2e72;
    transition: 0.3s ease-in;
}
.intro-header p{
    font-size: 15px;
    font-weight: 300;
    color: #6801a3;
    position: absolute;
    margin-top: 150px;
}
.social-media{
    display: flex;
    justify-content: center;
    margin-top: 650px;
    position: absolute;
}
.social-links{
    display: flex;
    background: #0f0e17;
    height: 70px;
    width: 70px;
    margin: 0 15px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.5s;
}
.social-links i{
    font-size: 30px;
    color: #6801a3;
    transition: transform 0.5s;
}
.social-links:hover{
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                -4px -4px 6px -1px rgba(255, 255, 255, 0.01),
                -0.5px -0.5px 0px rgba(255, 255, 255, 0.1),
                0.5px 0.5px 0px rgba(0, 0, 0, .15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.01);
    transform: translateY(2px);
}
.social-links:hover i{
    transform: scale(0.90);
}
.social-links:hover .fa-facebook{
    color: #fff;
    background-color: #2d5cc2;
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s ease-in;
}
.social-links:hover .fa-linkedin-in{
    color: #fff;
    background-color: #002574;
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s ease-in;
}
.social-links:hover .fa-twitter{
    color: #0084b8;
    background-color: #fff;
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s ease-in;
}
.social-links:hover .fa-instagram{
    color: #f0f0f0;
    background: linear-gradient(to right, red, purple);
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s ease-in;
}
.social-links:hover .fa-github{
    color: #fff;
    background-color: #0a0a0a;
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s ease-in;
}
.social-links:hover .fa-discord{
    color: #fff;
    background-color: #395798;
    border-radius: 50%;
    padding: 15px;
    transition: 0.3s ease-in;
}
.social-media span{
    font-size: 15px;
    font-weight: 200;
    color: #fa2e72;
    position: absolute;
    margin-top: 120px;
    text-transform: capitalize;
}
.social-label{
    margin-top: 10px;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    color: #b367b3;
    letter-spacing: 1px;
    margin-left: 5px;
}

/* END OF INTRO SECTION */


/* BLOG BODY */
.home{
    position: relative;
    padding-bottom: 56.52%; /* 16:9 */
    height: 100px;
    width: 80%;
    margin: 35rem 8rem;
}

.back-video{
    position: absolute;
    height: auto;
    width: 100%;
    border-radius: 50px;
    padding: 1px;
    background: linear-gradient(360deg, #fa2e72, #6801a3 50%, #d63710);
}

.intro-text{
    display: flex;
    text-align: start;
    line-height: 1.5rem;
}
.qstns{
    position: absolute;
    color: #f9b2ca;
    font-size: 25px;
    margin-top: 45rem;
    text-transform: capitalize;
    line-height: 2rem;
}
.intro-text p{
    font-size: 23px;
    font-weight: 300;
    color: #fff;
    margin-top: 52rem;
    line-height: 2rem;
}
.intro-text .decor{
    color: #6801a3;
    font-weight: 500;
    text-decoration: underline;
}


/* BLOG CARD */
.blog-container{
    width: 100%;
    border: 1px solid #6801a3;
    border-radius: 0rem 10rem 0rem 10rem;
    padding: 50px;
    display: block;
    align-items: center;
    background: #1f1d32;
    position: absolute;
    margin-top: 650px;
}
.blog-container h1{
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #fa2e72;
    margin-bottom: 10px;
}

.card-1{
    width: 310px;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-right: 55px;

}
.card-2{
    width: 310px;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-right: 55px;

}
.card-3{
    width: 310px;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;

}
.card-inner{
    position: relative;
    width: 100%;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform 1s;
}
.front-face{
    backface-visibility: hidden;
}
.front-face img{
    width: 100%;
    border-radius: 10px;
    border: 1px solid #6801a3;
    padding: 2px;
}
.back-face{
    backface-visibility: hidden;
    background: #0f0e17;
    color: #f9b2ca;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    border: 1px solid #b367b3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: rotateY(180deg);
    padding: 20px;
}
.back-face h2{
   font-size: 30px;
   font-weight: 500;
   line-height: 1.8rem; 
   padding: 20px 0;
}
.back-face i{
    font-size: 10px;
    font-weight: 300;
    color: #b367b3;
    margin-left: 5px;
}

.card-1:hover .card-inner{
    transform: rotateY(-180deg);
}
.card-2:hover .card-inner{
    transform: rotateY(180deg);
}
.card-3:hover .card-inner{
    transform: rotateY(-180deg);
}
.card-topic{
    font-size: 15px;
    font-weight: 600;
    padding: 3px;
    color: #fa2e72;
    text-transform: uppercase;
}
.card-btn{
    text-decoration: none;
    color: #f9b2ca;
    background: #1f1d32;
    padding: 10px;
    margin-top: 5px;
    border-radius: 10px;
    font-size: 15px;
}


/* Call to action section */
.cta-1{
    width: 300px;
    perspective: 1000px;
    cursor: pointer;
    background-image: linear-gradient(to right, #6801a3, transparent), url();
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    color: #f9b2ca;
    padding: 8%;
    margin: 50px 30px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 40px;
    transition: 0.3s;
}
.cta-2{
    width: 300px;
    perspective: 1000px;
    cursor: pointer;
    background-image: linear-gradient(to right, #6801a3, transparent), url(public/images/blog-img-2.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    color: #f9b2ca;
    padding: 8%;
    margin: 50px 30px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 40px;
    transition: 0.3s;
}
.cta-3{
    width: 300px;
    perspective: 1000px;
    cursor: pointer;
    background-image: linear-gradient(to right, #6801a3, transparent), url(public/images/blog-img-3.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    color: #f9b2ca;
    padding: 8%;
    margin: 50px 30px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    transition: 0.3s;
}
.cta-1 h3{
    font-size: 50px;
    line-height: 2.5rem;
    font-weight: 500;
    text-align: center; 
    text-transform: uppercase;
}
.cta-2 h3{
    font-size: 50px;
    line-height: 2.5rem;
    font-weight: 500;
    text-align: center; 
    text-transform: uppercase;
}

.cta-3 h3{
    font-size: 50px;
    line-height: 2.5rem;
    font-weight: 500;
    text-align: center; 
    text-transform: uppercase;
}
.cta-1:hover{
    text-transform: uppercase;
    color: #0f0e17;
    background-image: linear-gradient(to right, #fa2e72, transparent);
}
.cta-2:hover{
    text-transform: uppercase;
    color: #0f0e17;
    background-image: linear-gradient(to right, #fa2e72, transparent);
}

.cta-3:hover{
    text-transform: uppercase;
    color: #0f0e17;
    background-image: linear-gradient(to right, #fa2e72, transparent);
}
.cta-btn{
    background: #0f0e17;
    color: #b367b3;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 20px;
    bottom: 5%;
    right: 10%;
    display: inline-block;
    cursor: pointer; 
    position: absolute;
}

.cta-arrow{
    font-size: 15px;
    margin-left: 5px;  
}

.segments{
    width: 100%;
    border: 1px solid #6801a3;
    margin-top: 70px;
    border-radius: 10rem 0rem 10rem 0rem;
    padding: 20px 20px;
    display: block;
    align-items: center;
    justify-content: space-around;
    background: #1f1d32;
    position: absolute;
}
.segments h1{
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px #fa2e72;
}


/* Contact Form Section*/
.contact-form{
    width: 100%;
    height: 100vh; 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 30px;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 1150px;
}
form{
    background: #0f0e17;
    border: 1px solid #6801a3;
    display: flex;
    flex-direction: column;
    padding: 2vw 4vw;
    width: 100%;
    max-width: 1000px;
    border-radius: 10rem 0rem 10rem 0rem;
}
form h3{
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #fa2e72;
}
form input, form textarea{
    border: 0;
    margin: 10px 0;
    padding: 20px;
    outline: none;
    background: #1f1d32;
    font-size: 16px;
    border-radius: 20px;
    color: #fff;
    resize: none;
}
form button{
    padding: 15px;
    background: #fa2e72;
    color: #e7cfd7;
    font-size: 18px;
    border: 0;
    outline: none;
    cursor: pointer;
    width: 150px;
    margin: 20px auto 0;
    border-radius: 30px;
}


/* Share section */
.share-section{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    align-items: center;
    justify-content: center;  
}
.share-btn{
    position: relative;
    border: 1px solid #6801a3;
    background: #0f0e17;
    color: #fa2e72;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 30px;
    padding-top: 2.5px;
    padding-right: 3px;
    cursor: pointer;
    z-index: 2;
    bottom: 30%;
    right: 10.5%;
}
.share-options{
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: auto;
    height: auto;
    transform-origin: bottom left;
    transform: scale(0);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #1f1d32;
    color: #fff;
    padding: 20px;
    transition: .5s;
    transition-delay: .5s;
}
.share-options.active{
    transform: scale(1);
    transition-delay: 0s;
}
.share-title{
    opacity: 0;
    transition: .5s;
    transition-delay: 0s;
    font-size: 20px;
    font-weight: 300;
    text-transform: capitalize;
    text-align: center;
    padding: 0 20px 3px 0;
    color: #fa2e72;
}
.socials{
    opacity: 0;
    transition: .5s;
    transition-delay: 0s;
    width: 250px;
    height: 120px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
}
.socials-btn{
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #0f0e17;
    color: #fff;
    line-height: 50px;
    font-size: 25px;
    cursor: pointer;
    margin: 0 5px;
    text-align: center;
}
.socials-btn:nth-child(1){
    background: #FFA654 ;
}
.socials-btn:nth-child(2){
    background: #25D366 ;
}
.socials-btn:nth-child(3){
    background: linear-gradient(to right, red, purple) ;
}
.socials-btn:nth-child(4){
    background: #0084b8 ;
}
.socials-btn:nth-child(5){
    background: #2d5cc2 ;
}
.socials-btn:nth-child(6){
    background: #002574 ;
}

.link-container{
    opacity: 0;
    transition: .5s;
    transition-delay: 0s;
    width: 100%;
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    background-color: #0f0e17;
    overflow: hidden;
    padding: 0 10px;
}
.link{
    width: 80%;
    height: 100%;
    line-height: 40px;
    color: #fff;
}
.copy-btn{
    position: absolute;
    right: 0;
    cursor: pointer;
    background: #6801a3;
    color: #fff;
    border: none;
    height: 100%;
    width: 30%;
    text-transform: capitalize;
    font-size: 16px;
}
.share-options.active .share-title,
.share-options.active .socials,
.share-options.active .link-container{
    opacity: 1;
    transition: .5s;
    transition-delay: .5s;
}

.share-text{
    color: #fff;
    position: absolute;
    width: 50%;
    right: 1%;
    bottom: 17%;
    padding: 40px;
    margin: -50px;
    background: #1f1d32;
    border-radius: 0rem 5rem 0rem 5rem;
    transition: 0.3s;
}
.share-text strong{
    font-size: 17px;
    color: #fa2e72;
    font-weight: 500;
}
.share-text:hover{
    background: transparent;
    border: 1px dashed #6801a3;
    color: #f9b2ca;
}


/* FOOTER SECTION */
.footer{
    background: #1f1d32;
    color: #fff;
    border-radius: 5rem 10 5rem 5rem;
    margin-top: 2250px;
    padding: 100px 30px;
    border: 0;
    border-bottom: none;
}
.footer-container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,auto));
    gap: 2rem;
}
.footer-box{
    display: flex;
    flex-direction: column;
}
.footer-box h3{
    margin-bottom: 1.2rem;
    font-size: 25px;
    font-weight: 400;
    text-decoration: underline;
}
.footer-container img{
    width: 200px;
}
.footer-box a{
    font-size: 17px;
    color: #b367b3;
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    transition: 0.3s ease-in-out;
}
.footer-box a:hover{
    color: #fa2e72;
    font-size: 18px;
    padding: 10px 10px;
    text-align: left;
    text-transform: lowercase;
    background: linear-gradient(to right, #0f0e17, transparent);
    border-radius: 10px;
} 
.footer-box i{
    color: #fff;
    margin-right: 8px;
    align-items: center;
}
.footer-box .fa-blog{
    font-size: 40px;
    color: #6801a3;
}
.footer-box .fa-globe-africa{
    font-size: 40px;
    color: #6801a3;
}
.footer-box .fa-headphones-alt{
    font-size: 40px;
    color: #6801a3;
}
.copyright{
    padding: 20px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, #6801a3, #1f1d32);
    border-radius: 0 0 10rem 0rem;
}
.copyright-tag{
    font-size: 15px;
    font-weight: 500;
    color: #777;
    text-transform: capitalize;
}
.copyright a{
    font-size: 20px;
    font-weight: 400;
    color: #b367b3;
    text-decoration: underline;
    transition: 0.3s;
}
.copyright a:hover{
    color: #fa2e72;
    font-weight: 500;
    text-decoration: none;
}
"use strict";

function run() {
    anchors.options = {
        visible: "touch",
        icon: "\uf02e"
    }, anchors.add(".page__content > h1,.page__content > h2,.page__content > h3,.page__content > h4,.page__content > h5,.page__content > h6"), particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#f4f1da"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 10
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#f4f1da",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 4,
                direction: "right",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !0,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    }), $(function() {
        $("#particles-js canvas").addClass("active"), $("main").fitVids(), $(".sticky").Stickyfill();
        var e = function() {
            var e = $(window).width();
            e > 1024 ? (Stickyfill.rebuild(), Stickyfill.init()) : Stickyfill.stop()
        };
        e(), $(window).resize(function() {
            e()
        }), $(".author__urls-wrapper button").on("click", function() {
            $(".author__urls").fadeToggle("fast", function() {}), $(".author__urls-wrapper button").toggleClass("open")
        }), $("a").smoothScroll({
            offset: -20,
            beforeScroll: function(e) {
                history.pushState({}, document.title, e.link.href)
            },
            afterScroll: function(e) {
                var t = e.scrollTarget + " > a.anchorjs-link";
                document.querySelector(t).focus(), window.setTimeout(function() {
                    document.querySelector(t).blur()
                }, 1e3)
            }
        }), $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup"), $(".image-popup").magnificPopup({
            disableOn: function() {
                return !($(window).width() < 500)
            },
            type: "image",
            tLoading: "Loading image #%curr%...",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
            },
            removalDelay: 500,
            mainClass: "mfp-zoom-in",
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    })
}["complete", "loaded", "interactive"].includes(document.readyState) && document.body ? run() : document.addEventListener("DOMContentLoaded", run, !1);

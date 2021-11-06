$(function () {
    'use strict';
    //===== Prealoder
    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            }
        }
    })

    $('.linked-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })


})


let faculty = [{
        name: 'Khoa Học Máy Tính',
        image: './assets/images/faculty/laptop.svg',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/Chuan%20dau%20ra%20KHMT%20060919.pdf'
    },
    {
        name: 'Công Nghệ Kỹ Thuật Công Trình Xây Dựng',
        image: './assets/images/faculty/contruction.png',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/C%C4%90R%20ng%C3%A0nh%20X%C3%A2y%20D%E1%BB%B1ng.pdf'
    },
    {
        name: 'Quản Lý Xây Dựng',
        image: './assets/images/faculty/worker.png',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/C%C4%90R%20%20QLXD-CDR%20nop.pdf'
    },
    {
        name: 'Công Nghệ Sinh Học',
        image: './assets/images/faculty/biotechnology.png',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/C%C4%90R%20C%C3%B4ng%20ngh%E1%BB%87%20sinh%20h%E1%BB%8Dc.pdf'
    },
    {
        name: 'Hệ Thống Thông Tin Quản Lý',
        image: '',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/chuan%20dau%20ra%20HTTTQL%20150819.pdf'
    },
    {
        name: 'Công Nghệ Thông Tin',
        image: '',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/Chuan%20dau%20ra%20KHMT%20060919.pdf'
    },
    {
        name: 'Quản Trị Kinh Doanh',
        image: '',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/C%C4%90R%20QTKD%20-%20C%C4%90R.pdf'
    },
    {
        name: 'Kinh Doanh Quốc Tế',
        image: '',
        link: 'http://quanlydaotao.ou.edu.vn/media/files/ChuanDauRa/CT%C4%90T%20KDQT.pdf'
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    },
    {
        name: '',
        image: '',
        link: ''
    }
]

let faculty_list = document.querySelector('#faculty')

renderFaculty = (faculty) => {
    faculty.forEach(e => {
        let prod = `
    <div class="col-4 md-4 s-6 xs-10 card">
        <div class="card-inner">
            <div class="card-icon">
                <img src="${e.image}" alt="${e.name}" class="img-fluid">
            </div>
            <p><a href="${e.link}"
                    class="hover-link">${e.name}</a></p>
        </div>
    </div>
    `
        faculty_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderFaculty(faculty)

// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "15",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#cc3a3b",
    width: "30",
    blending_mode: "normal"
}];

if (document.getElementById("particles-1")) particlesJS("particles-1", {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": !0,
                "value_area": 4000
            }
        },
        "color": {
            "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 33,
                "height": 33
            }
        },
        "opacity": {
            "value": 0.15,
            "random": !0,
            "anim": {
                "enable": !0,
                "speed": 0.2,
                "opacity_min": 0.15,
                "sync": !1
            }
        },
        "size": {
            "value": 50,
            "random": !0,
            "anim": {
                "enable": !0,
                "speed": 2,
                "size_min": 5,
                "sync": !1
            }
        },
        "line_linked": {
            "enable": !1,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": !0,
            "speed": 2,
            "direction": "top",
            "random": !0,
            "straight": !1,
            "out_mode": "out",
            "bounce": !1,
            "attract": {
                "enable": !1,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": !1,
                "mode": "bubble"
            },
            "onclick": {
                "enable": !1,
                "mode": "repulse"
            },
            "resize": !0
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1,
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": !0
});

if (document.getElementById("particles-2")) particlesJS("particles-2", {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": !0,
                "value_area": 4000
            }
        },
        "color": {
            "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 33,
                "height": 33
            }
        },
        "opacity": {
            "value": 0.15,
            "random": !0,
            "anim": {
                "enable": !0,
                "speed": 0.2,
                "opacity_min": 0.15,
                "sync": !1
            }
        },
        "size": {
            "value": 50,
            "random": !0,
            "anim": {
                "enable": !0,
                "speed": 2,
                "size_min": 5,
                "sync": !1
            }
        },
        "line_linked": {
            "enable": !1,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": !0,
            "speed": 2,
            "direction": "top",
            "random": !0,
            "straight": !1,
            "out_mode": "out",
            "bounce": !1,
            "attract": {
                "enable": !1,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": !1,
                "mode": "bubble"
            },
            "onclick": {
                "enable": !1,
                "mode": "repulse"
            },
            "resize": !0
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1,
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": !0
});
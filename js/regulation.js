let regulation = [{
        name: 'Quy định đào tạo ngoại ngữ không chuyên thuộc các chương trình đào tạo trình độ đại học hình thức đào tạo chính quy',
        image: './assets/images/notificaiton/post-1.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quy-dinh-dao-tao-ngoai-ngu-khong-chuyen-thuoc-cac-chuong-trinh-dao-tao-trinh-do-dai-hoc-hinh-thuc-dao-tao-chinh-quy',
        time: '27/07/2021 09:46',
    },
    {
        name: 'Quy định miễn, giảm môn học thuộc các chương trình đào tạo đại học hình thức đào tạo chính quy năm 2021',
        image: './assets/images/notificaiton/post-2.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quy-dinh-mien-giam-mon-hoc-thuoc-cac-chuong-trinh-dao-tao-dai-hoc-hinh-thuc-dao-tao-chinh-quy-nam-202',
        time: '15/07/2021 14:04',
    },
    {
        name: 'Quy định đăng ký môn học năm 2021',
        image: './assets/images/notificaiton/post-3.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quy-dinh-dang-ky-mon-hoc-nam-2021',
        time: '15/07/2021 14:01',
    },
    {
        name: 'Quy định tổ chức dạy, học và đánh giá kết quả học tập chương trình giáo dục quốc phòng và an ninh 2021',
        image: './assets/images/notificaiton/post-4.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quy-dinh-to-chuc-day-hoc-va-danh-gia-ket-qua-hoc-tap-chuong-trinh-giao-duc-quoc-phong-va-an-ninh-2021',
        time: '15/07/2021 13:56',
    },
    {
        name: 'Quy chế đào tạo Đại học hình thức đào tạo CQ theo hệ thống tín chỉ 2021',
        image: './assets/images/notificaiton/post-5.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quy-che-dao-tao-dai-hoc-hinh-thuc-dao-tao-cq-theo-he-thong-tin-chi-2021',
        time: '02/07/2021 16:46',
    },
    {
        name: 'Quyết định ban hành Quy định chuyển vào/ra Chương trình Chất lượng cao',
        image: './assets/images/notificaiton/post-6.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quyet-dinh-ban-hanh-quy-dinh-chuyen-vaora-chuong-trinh-chat-luong-cao',
        time: '12/03/2021 09:33',
    },
    {
        name: 'Quyết định ban hành quy định đào tạo ngoại ngữ không chuyên thuộc các chương trình đào tạo ĐHCQ',
        image: './assets/images/notificaiton/post-7.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quyet-dinh-ban-hanh-quy-dinh-dao-tao-ngoai-ngu-khong-chuyen-thuoc-cac-chuong-trinh-dao-tao-dhcq-1599641972',
        time: '09/09/2020 15:59',
    },
    {
        name: 'Quyết định ban hành quy định đào tạo ngoại ngữ không chuyên thuộc các chương trình đào tạo ĐHCQ',
        image: './assets/images/notificaiton/post-8.png',
        link: 'http://quanlydaotao.ou.edu.vn/quyet-dinh-ban-hanh-quy-dinh-dao-tao-ngoai-ngu-khong-chuyen-thuoc-cac-chuong-trinh-dao-tao-dhcq',
        time: '21/08/2020 13:17',
    },
    {
        name: 'Quyết định về việc ban hành Quy định tổ chức dạy, học và đánh giá kết quả học tập môn học Giáo dục Quốc phòng - An ninh',
        image: './assets/images/notificaiton/post-9.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quyet-dinh-ve-viec-ban-hanh-quy-dinh-to-chuc-day-hoc-va-danh-gia-ket-qua-hoc-tap-mon-hoc-giao-duc-quoc-phong-an-ninh',
        time: '21/08/2020 13:14',
    },
    {
        name: ' Quyết định Ban hành Quy định miễn, giảm môn học thuộc các chương trình đào tạo trình độ đại học hình thức đào tạo chính quy 2020',
        image: './assets/images/notificaiton/post-1.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quyet-dinh-ban-hanh-quy-dinh-mien-giam-mon-hoc-thuoc-cac-chuong-trinh-dao-tao-trinh-do-dai-hoc-hinh-thuc-dao-tao-chinh-quy-2020',
        time: '18/08/2020 15:59',
    },
    {
        name: 'Quyết định ban hành đăng ký môn học 2020',
        image: './assets/images/notificaiton/post-2.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quyet-dinh-ban-hanh-dang-ky-mon-hoc',
        time: '18/08/2020 15:55',
    },
    {
        name: 'Quy định điều chỉnh lịch thi (Áp dụng từ năm học 2020-2021)',
        image: './assets/images/notificaiton/post-3.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/quy-dinh-dieu-chinh-lich-thi-ap-dung-tu-nam-hoc-20202021-1597216676',
        time: '12/08/2020 14:17',
    }
]

let regulation_list = document.querySelector('#regulation')

renderRegulation = (regulation) => {
    regulation.forEach(e => {
        let prod = `
            <div class="col-3 md-4 s-6 xs-5 card">
                <div class="card-inner">
                    <img src="${e.image}" alt="card1">
                    <div class="card-icon"><i class="fas fa-stream"></i></div>
                    <p class="text-justify"><a
                            href="${e.link}"
                            class="hover-link">
                           ${e.name}</a></p>
                    <span><i class="far fa-clock"></i>${e.time}</span>
                </div>
            </div>
        `
        regulation_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderRegulation(regulation)
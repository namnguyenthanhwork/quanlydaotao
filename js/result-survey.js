let result = [{
        name: 'Khảo sát lấy ý kiến sinh viên mới tốt nghiệp',
        image: './assets/images/notificaiton/post-1.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/khao-sat-lay-y-kien-sinh-vien-moi-tot-nghiep',
        time: '06/09/2020 13:34'
    },
    {
        name: 'Khảo sát Mức độ hài lòng của sinh viên đối với các Phòng Ban và Khoa trong Trường',
        image: './assets/images/notificaiton/post-2.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/khao-sat-muc-do-hai-long-cua-sinh-vien-doi-voi-cac-phong-ban-va-khoa-trong-truong',
        time: '06/09/2020 13:28'
    },
    {
        name: 'Báo cáo kết quả Khảo sát lấy ý kiến phản hồi từ người học về hoạt động giảng dạy của giảng viên',
        image: './assets/images/notificaiton/post-3.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/bao-cao-ket-qua-khao-sat-lay-y-kien-phan-hoi-tu-nguoi-hoc-ve-hoat-dong-giang-day-cua-giang-vien',
        time: '12/08/2020 15:07'
    },
    {
        name: 'Báo cáo kết quả Khảo sát lý do tân sinh viên chọn Trường Đại học Mở Thành phố Hồ Chí Minh',
        image: './assets/images/notificaiton/post-4.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/bao-cao-ket-qua-khao-sat-ly-do-tan-sinh-vien-chon-truong-dai-hoc-mo-thanh-pho-ho-chi-minh',
        time: '12/08/2020 14:57'
    },
    {
        name: 'Báo cáo kết quả Khảo sát tỷ lệ sinh viên có việc làm trong vòng 12 tháng sau khi tốt nghiệp',
        image: './assets/images/notificaiton/post-5.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/bao-cao-ket-qua-khao-sat-ty-le-sinh-vien-co-viec-lam-trong-vong-12-thang-sau-khi-tot-nghiep',
        time: '10/08/2020 14:49'
    },
    {
        name: 'Khảo sát, thu thập thông tin về nhu cầu và ý kiến của sinh viên đối với giảng viên dạy Tiếng Anh không chuyên',
        image: './assets/images/notificaiton/post-6.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/khao-sat-thu-thap-thong-tin-ve-nhu-cau-va-y-kien-cua-sinh-vien-doi-voi-giang-vien-day-tieng-anh-khong-chuyen',
        time: '18/11/2019 13:30'
    },
    {
        name: 'Khảo sát, thu thập thông tin về nhu cầu và ý kiến của sinh viên đối với giảng viên dạy các môn tiếng Anh của Khoa Đào tạo đặc biệt',
        image: './assets/images/notificaiton/post-7.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/khao-sat-thu-thap-thong-tin-ve-nhu-cau-va-y-kien-cua-sinh-vien-doi-voi-giang-vien-day-cac-mon-tieng-anh-cua-khoa-dao-tao-dac-biet',
        time: '17/11/2019 13:32'
    },
    {
        name: 'Khảo sát, đánh giá cuối khóa học',
        image: './assets/images/notificaiton/post-9.jpg',
        link: 'http://quanlydaotao.ou.edu.vn/khao-sat-danh-gia-cuoi-khoa-hoc',
        time: '16/11/2019 13:33'
    }
]

let result_list = document.querySelector('#result')

renderResult = (result) => {
    result.forEach(e => {
        let prod = `
        <div class="col-3 md-4 s-6 xs-9 card">
            <div class="card-inner">
                <img src="${e.image}" alt="card1">
                <div class="card-icon"><i class="fas fa-stream"></i></div>
                <p class="text-justify"><a
                        href="${e.link}"
                        class="hover-link">${e.name}</a></p>
                <span><i class="far fa-clock"></i>${e.time}</span>
            </div>
        </div>
    `
        result_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderResult(result)
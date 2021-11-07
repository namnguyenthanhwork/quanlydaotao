let member = [{
        name: 'ThS. Phan Thị Thu Phương',
        image: './assets/images/member/phanthithuphuong.png',
        mail: 'phuong.ptt@ou.edu.vn',
        employee: 'Phó Trưởng Phòng - Phụ Trách'
    },
    {
        name: 'ThS. Lê Thị Vũ Anh',
        image: './assets/images/member/lethivuanh.png',
        mail: 'anh.ltv@ou.edu.vn',
        employee: 'Phó Trưởng phòng'
    },
    {
        name: 'ThS. Trần Lê Trọng Phúc',
        image: './assets/images/member/tranletrongphuc.png',
        mail: 'phuc.tlt@ou.edu.vn',
        employee: 'Phó Trưởng phòng'
    },
    {
        name: 'Nguyễn Phương Anh',
        image: './assets/images/member/nguyenphuonganh.jpg',
        mail: 'Chuyên viên',
        employee: 'anh.np@ou.edu.vn'
    },
    {
        name: 'Phạm Minh Dzu',
        image: './assets/images/member/phamminhdzu.png',
        mail: 'Chuyên viên',
        employee: 'dzu.pm@ou.edu.vn'
    },
    {
        name: 'Đỗ Đại Dương',
        image: './assets/images/member/logo.png',
        mail: 'Chuyên viên',
        employee: 'duong.dd@ou.edu.vn'
    },
    {
        name: 'Phùng Thị Kim Ngọc',
        image: './assets/images/member/phungthikimngoc.jpg',
        mail: 'Chuyên viên',
        employee: 'ngoc.ptk@ou.edu.vn'
    },
    {
        name: 'Trần Thị Thúy Hằng',
        image: './assets/images/member/tranthithuyhang.png',
        mail: 'Chuyên viên',
        employee: 'hang.ttht@ou.edu.vn'
    },
    {
        name: 'Nguyễn Phi Hùng',
        image: './assets/images/member/nguyenphihung.jpg',
        mail: 'Chuyên viên',
        employee: 'hung.np@ou.edu.vn'
    },
    {
        name: 'Nguyễn Thanh Hùng',
        image: './assets/images/member/logo.png',
        mail: 'Chuyên viên',
        employee: 'hung.nt@ou.edu.vn'
    },
    {
        name: 'Nguyễn Thị Ngọc Loan',
        image: './assets/images/member/nguyenthingocloan.png',
        mail: 'Chuyên viên',
        employee: 'loan.ntn@ou.edu.vn'
    },
    {
        name: 'Cao Thị Hà Phương',
        image: './assets/images/member/caothihaphuong.png',
        mail: 'Chuyên viên',
        employee: 'phuong.cth@ou.edu.vn'
    },
    {
        name: 'Trần Thị Lệ Quyên',
        image: './assets/images/member/tranthilequyen.png',
        mail: 'Chuyên viên',
        employee: 'quyen.ttl@ou.edu.vn'
    },
    {
        name: 'Nguyễn Minh Trí',
        image: './assets/images/member/nguyenminhtri.png',
        mail: 'Chuyên viên',
        employee: 'tri.nm@ou.edu.vn'
    },
    {
        name: 'Vũ Thị Thanh Trúc',
        image: './assets/images/member/vuthithanhtruc.png',
        mail: 'Chuyên viên',
        employee: 'truc.vtt@ou.edu.vn'
    },
    {
        name: 'Nguyễn Huỳnh Vũ Duy',
        image: './assets/images/member/logo.png',
        mail: 'Chuyên viên',
        employee: 'duy.nhv@ou.edu.vn'
    }
]

let member_list = document.querySelector('#member')

renderMember = (member) => {
    member.forEach(e => {
        let prod = `
        <div class="col-3 md-4 s-6 xs-9 card">
                <div class="card-inner">
                    <img src="${e.image}" alt="card1">
                    <div class="card-icon"><i class="fas fa-graduation-cap"></i></div>
                    <p class="member"><a href="javascript:;" class="hover-link">${e.name}</a></p>
                    <p>
                        <span><i>${e.employee}</i></span>
                        <span><a href="mailto:${e.mail}">${e.mail}</a></span>
                        </p>
                </div>
        </div>

        `
        member_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderMember(member)
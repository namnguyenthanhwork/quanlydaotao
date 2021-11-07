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
        mail: 'anh.np@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Phạm Minh Dzu',
        image: './assets/images/member/phamminhdzu.png',
        mail: 'dzu.pm@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Đỗ Đại Dương',
        image: './assets/images/member/logo.png',
        mail: 'duong.dd@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Phùng Thị Kim Ngọc',
        image: './assets/images/member/phungthikimngoc.jpg',
        mail: 'ngoc.ptk@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Trần Thị Thúy Hằng',
        image: './assets/images/member/tranthithuyhang.png',
        mail: 'hang.ttht@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Nguyễn Phi Hùng',
        image: './assets/images/member/nguyenphihung.jpg',
        mail: 'hung.np@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Nguyễn Thanh Hùng',
        image: './assets/images/member/logo.png',
        mail: 'hung.nt@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Nguyễn Thị Ngọc Loan',
        image: './assets/images/member/nguyenthingocloan.png',
        mail: 'loan.ntn@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Cao Thị Hà Phương',
        image: './assets/images/member/caothihaphuong.png',
        mail: 'phuong.cth@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Trần Thị Lệ Quyên',
        image: './assets/images/member/tranthilequyen.png',
        mail: 'quyen.ttl@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Nguyễn Minh Trí',
        image: './assets/images/member/nguyenminhtri.png',
        mail: 'tri.nm@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Vũ Thị Thanh Trúc',
        image: './assets/images/member/vuthithanhtruc.png',
        mail: 'truc.vtt@ou.edu.vn',
        employee: 'Chuyên viên'
    },
    {
        name: 'Nguyễn Huỳnh Vũ Duy',
        image: './assets/images/member/logo.png',
        mail: 'duy.nhv@ou.edu.vn',
        employee: 'Chuyên viên'
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
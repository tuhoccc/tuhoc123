// Khi nhập tài khoản, mật khẩu, kiểm tra mật khẩu xử lý:

// Kiểm tra xem tài khoản (username) có tồn tại trước đó trong localstorage hay không (đặt key storage phù hợp) nếu chưa có thì tạo username với pass mới lưu trong storage, còn nếu có hiện thông báo "Tài khoản đã tồn tại"
// Xác kỹ mật khẩu với mật khẩu nhập lại có giống nhau không, nếu không thì hiện lỗi "Mật khẩu và mật khẩu nhập lại không trùng khớp"
// Form Đăng Nhập

// const submit = () => {
//     //lấy username, password vừa nhập
//     const username = document.getElementById('username').value
//     const password = document.getElementById('password').value

//     //lấy danh sách accounts dưới localStorage
//     const accounts = JSON.parse(localStorage.getItem('accounts')) || []

//     //tài khoản mới
//     const newAccount = {
//         username,
//         password
//     }

//     //Kiểm tra tài khoản tồn tại chưa
//     let check = false

//     for(const i = 0; i< accounts.length; i++){
//         if(array[i].name === newAccount.name){
//             check = true
//         }
//     }

//     if(check){
//         console.log('Tai khoan da ton tai')
//     }else{
//         localStorage.setItem('accounts', JSON.stringify(accounts))
//     }
// }

//---------- luyện tập------------

// const newAccount = () => {
//   // Tạo ra 1 Mảng
//   const accounts = JSON.parse(localStorage.getItem("Name")) || [];
//   const username = {
//     name: "Nguyễn Tâm",
//     age: 25,
//     class: "Đại Học",
//   };
//   accounts.push(username);
//   // Để lưu vào localStorage phải đưa về String
//   localStorage.setItem("Name", JSON.stringify(accounts));
//   // xoá localStorage
//   //   localStorage.clear(accounts);
// };
// newAccount();

// const accounts = JSON.parse(localStorage.getItem("Name")) || [];
// const username = {
//   name: "Nguyễn Văn B",
//   age: 25,
//   class: "Đại Học",
// };
// accounts.push(username);

// localStorage.setItem("Name", JSON.stringify(accounts));

// const dongvat = [
//   {
//     id: 1,
//     ten: "Con meo",
//     tuoi: 130,
//     gioiTinh: "Nam",
//   },

//   {
//     id: 2,
//     ten: "Con cho",
//     tuoi: 630,
//     gioiTinh: "Nu",
//   },
//   {
//     id: 1,
//     ten: "Con meo",
//     tuoi: 130,
//     gioiTinh: "Nu",
//   },
//   {
//     id: 3,
//     ten: "Con chim",
//     tuoi: 30,
//     gioiTinh: "Nu",
//   },
//   {
//     id: 4,
//     ten: "Con bo",
//     tuoi: 330,
//     gioiTinh: "Nu",
//   },
// ];
//---------filter
// const ketqua = dongvat.filter(
//   (item, index) => item.ten === "Con meo" || item.ten === "Con bo"
// );
// console.log(ketqua);

// const ketqua2 = dongvat.filter((item, index) => {
//   if (item.ten === "Con meo") {
//     return item;
//   }
// });
// console.log(ketqua2);
//---------------find---------
// const ketqua = dongvat.find((item, index) => item.ten === "Con meo");
// console.log(ketqua);
// const ketqua2 = dongvat.find((item, index) => {
//   if (item.ten === "Con meo") {
//     return item;
//   }
// });
// console.log(ketqua2);
//--------for----
// let count = [];
// for (let i = 0; i < dongvat.length; i++) {
//   // count += dongvat[i].ten;
//   count.push([dongvat[i].ten]);
// }
// console.log(count);
//--------map-------
// const ketqua3 = dongvat.map((item, index) => {
//   return {
//     name: item.ten,
//     gioITinh: item.gioiTinh,
//   };
// });
// console.log(ketqua3);

// const ketqua4 = dongvat.map((item, index) => ({
//   name: item.ten,
//   gioITinh: item.gioiTinh,
// }));
// console.group(ketqua4);

//Bài Tập
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const useInput = document.querySelector("#input").value;
  const lists = [
    {
      id: 1,
      name: useInput,
      status: false,
    },
  ];
  const list = lists.map((item, index) => {
    return {
      name: item.name,
    };
  });
  accounts.push(list);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  let Div = document.querySelector("#Div");
  Div.innerHTML = "Xin Chào " + useInput;
});

// const list = {
//   id: 1,
//   name: useInput,
//   status: false,
// };
// accounts.push(list);
// console.log(accounts);
// localStorage.setItem("accounts", JSON.stringify(accounts));
// accounts.forEach((item, index) => {
//   console.log(item, index);
// });

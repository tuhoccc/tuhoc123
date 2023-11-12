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

// const total = dongvat.reduce((tong, value) => {
//   return tong + value.tuoi;
// }, 0);
// console.log("total :", total);
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
//------------------
// const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
// function displayTasks() {
//   let taskList = document.getElementById("tasklist");
//   taskList.innerHTML = "";
//   accounts.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     li.innerHTML += ` <button data-index="${index}" class="delete">Delete</button>`;
//     taskList.appendChild(li);
//   });
// }
// const addTaskButton = document.getElementById("addtask");
// addTaskButton.addEventListener("click", () => {
//   const taskInput = document.getElementById("task");
//   const newTask = taskInput.value.trim();
//   if (newTask) {
//     accounts.push(newTask);
//     localStorage.setItem("accounts", JSON.stringify(accounts));
//     displayTasks();
//     taskInput.value = "";
//   }
// });
// const taskList = document.getElementById("tasklist");
// taskList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     const index = e.target.dataset.index;
//     accounts.splice(index, 1);
//     localStorage.setItem("accounts", JSON.stringify(accounts));
//     displayTasks();
//   }
// });

// displayTasks();
//------------------------------------
// document.querySelector("#form"),
//   addEventListener("submit", (e) => {
//     e.preventDefault();
//     const accounts = JSON.parse(localStorage.getItem("lists")) || [];
//     const username = document.querySelector("input").value;
//     let lists = {
//       id: 1,
//       name: username,
//       status: false,
//     };
//     accounts.push(lists);
//     localStorage.setItem("lists", JSON.stringify(accounts));
//   });
// let names = accounts.map((item) => {
//   return {
//     name: item.name,
//   };
// });
// let ElementDiv = document.createElement("li");
// ElementDiv.textContent = names;
// document.querySelector("#form").appendChild(ElementDiv);
// let button = document.createElement("button");
// button.innerText = "Xoá";
// button.style = "margin-top:10px;";
// ElementDiv.innerHTML = username;
// ElementDiv.style = " margin-right:20px;color:red;margin-top:10px";
// document.body.appendChild(ElementDiv);
// document.body.appendChild(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   ElementDiv.style = "disPlay:none";
//   button.style = "disPlay:none";
//   localStorage.removeItem("lists");
// });

// let list = lists.map((item, index) => {
//   return { name: item.name };
// });
// accounts.push(list);
// localStorage.setItem("lists", JSON.stringify(accounts));
// // });
// let ElementDiv = document.createElement("li");
// console.log(ElementDiv);
// let button = document.createElement("button");
// button.innerText = "Xoá";
// button.style = "margin-top:10px;";
// ElementDiv.innerHTML = username;
// ElementDiv.style = " margin-right:20px;color:red;margin-top:10px";
// document.body.appendChild(ElementDiv);
// document.body.appendChild(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   ElementDiv.style = "disPlay:none";
//   button.style = "disPlay:none";
//   localStorage.removeItem("lists");
// });

//------------------------

// const lists = [
//   {
//     name: "Nguyễn Văn A",
//     age: 20,
//   },
//   {
//     name: "Nguyễn Văn B",
//     age: 27,
//   },
//   {
//     name: "Nguyễn Văn C",
//     age: 19,
//   },
//   {
//     name: "Nguyễn Văn D",
//     age: 32,
//   },
//   {
//     name: "Nguyễn Văn E",
//     age: 35,
//   },
// ];
//------forEach()-----
// console.log("lists :", lists);
// lists.forEach((item) => {
//   console.log("item :", item);
// });
//-------find()------
// const list = lists.find((item) => {
//   if (item.name === "Nguyễn Văn B") {
//     return item;
//   }
// });
// console.log("list :", list);
//----------filter()-------
// const list = lists.filter((item) => {
//   if (item.age >= 20) {
//     return item;
//   }
// });
// console.log("list :", list);
//-------map()-------
// const list = lists.map((item) => {
//   return {
//     name: item.name,
//     status: "Lập trình",
//   };
// });
// console.log(list);
//----------reduce()--------
// const list = lists.reduce((total, item, arr, b) => {
//   console.log("arr : ", arr);
//   console.log("b : ", b);
//   console.log("total :", total);
//   console.log("item :", item);
//   return total + item.age;
// }, 0);
// const abc = [
//   {
//     name: "TP. Hồ Chí Minh",
//     quocGia: "Viet Nam",
//     chieuDai: 50000,
//   },
//   {
//     name: "Vung Tau",
//     quocGia: "Viet Nam",
//     chieuDai: 50000,
//   },
//   {
//     name: "Seul",
//     quocGia: "Han Quoc",
//     chieuDai: 50000,
//   },
//   {
//     name: "Busan",
//     quocGia: "Han Quoc",
//     chieuDai: 50000,
//   },
//   {
//     name: "Tokyo",
//     quocGia: "Nhat Ban",
//     chieuDai: 50000,
//   },
//   {
//     name: "Tokyo",
//     quocGia: "Han Quoc",
//     chieuDai: 50000,
//   },
// ];
// const abc = [
//   {
//     name: "TP. Hồ Chí Minh",
//     quocGia: "Viet Nam",
//     chieuDai: 10,
//   },
//   {
//     name: "Vung Tau",
//     quocGia: "Viet Nam",
//     chieuDai: 20,
//   },
//   {
//     name: "Vung Tau 1",
//     quocGia: "Viet Nam",
//     chieuDai: 400,
//   },
//   {
//     name: "Busan",
//     quocGia: "Han Quoc",
//     chieuDai: 60000,
//   },
//   {
//     name: "Tokyo",
//     quocGia: "Nhat Ban",
//     chieuDai: 2120000,
//   },
//   {
//     name: "Tokyo",
//     quocGia: "Han Quoc",
//     chieuDai: 50000,
//   },
// ];
// console.log(abc);
//-----------includes()---------
// const quocGia1 = abc.filter((item) => {
//   if (item.quocGia === "Viet Nam") {
//     return item;
//   }
// });
// document.querySelector("button").addEventListener("click", (e) => {
//   e.preventDefault();
//   const inPut = document.querySelector("input").value;
//   const names = abc.filter((item) => {
//     console.log(item);
//     if (item.name.includes(inPut)) {
//       return item;
//     }
//   });
//   console.log(names);
// });

// const totals = abc.reduce((total, item) => {
//   return total + item.quocGia;
// }, []);
// console.log(totals);
//--------some()---------
// const timkiem = abc.some((item) => {
//   return item.quocGia === "Viet Nam" && item.name === "Tokyo";
// });
// console.log("Tim kiếm :", timkiem);
//--------every()---------
// const names = abc.every((item) => {
//   return item.chieuDai === 50000;
// });
// console.log(names);
//---------------------------
// abc.forEach((item) => {
//   console.log(item.name);
// });
// const count = abc.map((item) => {
//   return {
//     quocGia: item.quocGia,
//   };
// });
// console.log("count :", count);
// const names = abc.find((item) => {
//   if (item.name === "Tokyo") {
//     return item;
//   }
// });
// console.log(names);
// const lists = abc.filter((item) => {
//   if (item.quocGia === "Viet Nam") {
//     return item;
//   }
// });
// const names = lists.map((item) => {
//   return {
//     name: item.name,
//   };
// });
// console.log("names :", names);
//----------Bài tập Ôn Tập-------
// Bài 1
const Numbers = [1, 5, 7, 5, 3, 2, 4, 5, 7, 7, 8, 5, 4, 1];
//A:Tìm số lớn nhất
const biggest = Math.max(...Numbers);
console.log("Kết quả lớn nhất trong mảng :", biggest); // 8
//B:Tìm số bé nhất
const small = Math.min(...Numbers);
console.log("Kết quả bé nhất trong mảng :", small); // 1
//C: Sắp xếp mảng theo thứ tự giảm dần
const Decrease = Numbers.sort((a, b) => {
  // a và b là 1 giá trị bất kì nếu a = 1, b = 2
  return a - b;
});
console.log("Sắp xếp từ bé đến lớn", Decrease); // [1, 1, 2, 3, 4, 4, 5, 5, 5, 5, 7, 7, 7, 8]
//D:Sắp xếp mảng theo thứ tự tăng dần
const Ascending = Numbers.sort((a, b) => {
  // a và b là 1 giá trị bất kì nếu a = 5, b = 4
  return b - a;
});
console.log("sắp xếp từ lớn đến bé", Ascending); // [8, 7, 7, 7, 5, 5, 5, 5, 4, 4, 3, 2, 1, 1]
//C: Lọc ra những số là số nguyên tố
//số nguyên tố là những số chia hết cho 1 và chính nó
const number = Numbers.filter((item) => {
  if ((item >= 2 && item % 2 !== 0) || item === 2) {
    return item;
  }
});
console.log("Số nguyên là số chia hết cho 1 và chính nó :", number); // [7, 7, 7, 5, 5, 5, 5, 3, 2]
//Bài 2
function integer() {
  document.querySelector("#button").addEventListener("click", () => {
    const input = document.querySelector("#input");
    const result = input.value;
    if ((result >= 2 && result % 2 !== 0) || result === 2) {
      alert("Đây là số nguyên chia hết cho 1 và chính nó");
    } else {
      alert("Đây không phải là số nguyên");
    }
  });
}
// integer();
//Bài 3 chưa biết làm.....
function symmetry() {
  document.querySelector("#button").addEventListener("click", () => {
    const inPut = document.querySelector("#input");
    const result = inPut.value;
    if (nb > 0) {
      alert("đó là số đối xứng");
    } else {
      alert("không phải");
    }
  });
}
// symmetry();
//Bài 4
let fruits = ["Apples", "pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
// alert(fruits.length);
console.log("Kết quả length trả về :", fruits.length); // 4
//Bài 6
let Names = [
  {
    name: "Tam",
  },
  {
    name: "Thang",
  },
];
// console.log(typeof Names);
//A: Đây là mảng object
// B: Thêm Bich ở cuối mảng ta dùng push()
Names.push({ name: "Bich" }); // [{name:'Tam'},{name:'Thang'},{name:'Bich'}]
console.log("Thêm Phần tử Bich :", Names);
// C: Để thay đổi giá trị ở giữa bằng hạnh ta dùng splice()
Names.splice(1, 1, { name: "Hạnh" }); //[{name:'Tam'},{name:'Hạnh'},{name:'Bich'}]
console.log("thay thế giá trị ở giữa :", Names);
//D : Lấy ra phần tử đầu
const between = Names.find((item) => {
  if (item.name === "Hạnh") {
    return item;
  }
});
console.log("Lấy ra phần tử đầu :", between); //[{name:'Hạnh'}]
//E : Tách giá trị đầu tiên của mảng  và hiện thị
const sum = Names.slice(0, 1);
console.log("Lấy phần từ đầu :", sum); // [{name:'Tam'}]
//F: Thêm 'Hiền' vào đầu mảng dùng unshift()
Names.unshift({ name: "Hiền" });
console.log("thêm phần từ Hiền :", Names);
//Bài 7
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
function tinhtong() {
  document.querySelector("#button").addEventListener("click", () => {
    const input = document.querySelector("#input");
    // const sum = input.value;
    const total = input.value;
    const totals = parseInt(total);
    accounts.push(totals);
    console.log(accounts);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    if (accounts) {
      const account = accounts.reduce((total, value) => {
        return total + value;
      }, 0);
      console.log("Tổng :", account);
    }
  });
}
// tinhtong();
// Bài 8 Chưa biết làm chữ viết hoa chữ cái đầu
function xulychuoi(str) {
  const abc = str.split("-").join("");
  console.log(abc);
}
xulychuoi("my-short-string");
//Bài 9
const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pt1 = 2;
const pt2 = 8;
function timkiem(mang, pt1, pt2) {
  const ketqua = mang.filter((item) => {
    if (item >= pt1 && item <= pt2) {
      return item;
    }
  });
  console.log(ketqua);
}
timkiem(mang, pt1, pt2);
//--------Xử dụng new Promise-----------
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Công việc 1");
//   }, 3000);
// });
// promise
//   .then((correct) => {
//     console.log(correct);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("công việc 2");
//       }, 3000);
//     });
//   })
//   .then((correct1) => {
//     console.log(correct1);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("có lỗi");
//       }, 3000);
//     });
//   })
//   .then((correct2) => {
//     console.log(correct2);
//   })
//   .catch((wrong) => {
//     console.log(wrong);
//   })
//   .finally(() => {
//     console.log("Dừng!");
//   });
// Viết tắt
// function acronym(number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve(number), 1000);
//   });
// }
// acronym("Công Việc 1")
//   .then((reason) => {
//     console.log(reason);
//     return acronym("Công Việc 2");
//   })
//   .then((reason1) => {
//     console.log(reason1);
//     return acronym("Công Việc 3");
//   })
//   .then((reason2) => {
//     console.log(reason2);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Dừng !");
//   });

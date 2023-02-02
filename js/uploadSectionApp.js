// Pass single element
// const element = document.querySelector('.js-choice');
// const choices = new Choices(element);

//btn active
const btns = document.querySelectorAll('.uploadBtn')
btns.forEach(btn => {
  btn.addEventListener('click', function () {
    removeClass()
    this.classList.add('active')
  })
})
let removeClass = () => btns.forEach(btn => {
  btn.classList.remove('active')
})


//tags
let input = document.getElementById("myInput");
let listArr = [];
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {  // enter keyboard
    if (input.value != '') {
      let inValue = e.target.value;
      listArr.push(inValue.replace(/\s/g, ''));
      let newTagLi = '';
      listArr.forEach((element, index) => {
        newTagLi += `<span># ${element}<i class="fa fa-times" onclick="ondelete(${index})"></i></span>`;
      });
      document.querySelector('.tags').innerHTML = newTagLi;
      input.value = '';
    } else {
      alert("Please input something");
    }
  }
})

function ondelete(index) {
  listArr.splice(index, 1);
  let newTagLi = '';
  listArr.forEach((element, index) => {
    newTagLi += `<span># ${element}<i class="fa fa-times" onclick="ondelete(${index})"></i></span>`;
  });
  document.querySelector('.tags').innerHTML = newTagLi;
}
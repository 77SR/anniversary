alert('結婚記念日から何日経ったか確認してみよう')

const displayDiv = document.getElementById('display');
const pushButton = document.getElementById('calcs');

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

pushButton.onclick = () => {
  let metDay = document.getElementById('met-day').value;
  metDay = new Date(metDay);

  let now = new Date();

  let result = (now.getTime() - metDay.getTime()) / 86400000;



  removeAllChildren(displayDiv)
  const header = document.createElement('h3');
  header.innerText = '大切な日から' + Math.floor(
    result) + '日が経ちました';
  displayDiv.appendChild(header);
};



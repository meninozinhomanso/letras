# // var emoji = require('./emoji.json')

// import * as emoji from './emoji.json';

console.log(emoji[2].char);

let emojiCount = 0;
let emojiRow = "";

for (let j = 0; j < 110; j++) {
  let emojiDiv = $('<div></div>').addClass('emoji-line');
  for (let i = 0; i < 18; i++) {
    let emojiTxt = $("<p></p>").text(emoji[emojiCount].char).addClass('emoji').click(() => {
      console.log('the text is ' + emoji[emojiCount].char)
    })
    emojiDiv.append(emojiTxt);
    if(emojiCount > 159 && emojiCount < 2513) {
      emojiCount += 6;
    } else {
      emojiCount++;
    }

  }
  $("#emojiContainer").append(emojiDiv);
}


$(".emoji-line").on('click', function (event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("click recognised", event.target.innerText)
  let input = $("#emojiInput");
  input.val(input.val() + event.target.innerText);
});

$('#emojiCopy').click(() => {
  let input = $("#emojiInput");
  let snackbar = $('#snackbar');
  let emojiTxt = input.val();
  if (emojiTxt == '') {
    snackbar.html('First select some sweet emojis to copy').addClass('show');
    setTimeout(function () {
      snackbar.removeClass('show');
    }, 3000);
    return;
  }

  input.select();
  document.execCommand("copy");
  snackbar.html(emojiTxt + " copied to clipboard. Enjoy !!").show();
  $('#snackbar').addClass('show');
  var x = document.getElementById("snackbar");


  setTimeout(function () {
    snackbar.removeClass('show');
  }, 3000);

})







// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function (data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function (element) {
//   let color = element.target.value;
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       { code: 'document.body.style.backgroundColor = "' + color + '";' });
//   });
// };

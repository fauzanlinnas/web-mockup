var notifElem = document.getElementById('notification');
var notifElemScroll = document.getElementById('scroll');
var newsletterElem = document.getElementById('newsletter');

function slideUp() {
    notifElem.classList.add('hide_notif');
    notifElemScroll.classList.add('hide_notif');
};

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

function appearScroll() {
  var y = window.scrollY;
  if (y >= height/3 && newsletterElem.className == 'hide') {
    newsletterElem.className = 'show';
  }
};

function slideLeft() {
    newsletterElem.className = 'stay_hidden';
};

window.addEventListener('scroll', appearScroll);
setInterval(appearScroll, 600*1000);
// Common lightweight script for site interactions
document.addEventListener('DOMContentLoaded', function(){
  // nav active linking
  document.querySelectorAll('.nav-item, .nav-link').forEach(function(el){
    el.addEventListener('click', function(){
      document.querySelectorAll('.nav-item, .nav-link').forEach(function(i){ i.classList.remove('active'); });
      el.classList.add('active');
    });
  });

  // refresh captcha elements if any
  var rc = document.getElementById('refreshCaptcha');
  if(rc){ rc.addEventListener('click', function(){ var c = document.querySelector('.captcha-text'); if(c){ c.textContent = Math.floor(100000 + Math.random()*900000); } }); }
});

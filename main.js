function hiatus() {
  alert("maaf fitur ini belum selesai dibuat, mohon jelajahi main website portofolio nabila terlebih dahulu ^-^")
}

function explore() {
  document.querySelector('#space').scrollIntoView({
    behavior: 'smooth'
  });
  setTimeout(function() {
    document.querySelector('#space1').scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(function() {
      document.querySelector('#space2').scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(function() {
        document.querySelector('#b7').scrollIntoView({
          behavior: 'smooth'
        });
        setTimeout(function() {
          document.querySelector('#certi-title').scrollIntoView({
            behavior: 'smooth'
          });
          setTimeout(function() {
            document.querySelector('#contact-title').scrollIntoView({
              behavior: 'smooth'
            });
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

function wushAbout() {
  document.querySelector('#space').scrollIntoView({
    behavior: 'smooth'
  });
}
function wushSkill() {
  document.querySelector('#space1').scrollIntoView({
    behavior: 'smooth'
  });
}
function wushEdu() {
  document.querySelector('#space2').scrollIntoView({
    behavior: 'smooth'
  });
}
function wushProject() {
  document.querySelector('#b7').scrollIntoView({
    behavior: 'smooth'
  });
}
function wushCertificates() {
  document.querySelector('#certi-title').scrollIntoView({
    behavior: 'smooth'
  });
}
function wushContacts() {
  document.querySelector('#space6').scrollIntoView({
    behavior: 'smooth'
  });
}
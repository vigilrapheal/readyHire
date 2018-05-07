
/*!
 * Start opncv - opncv  v1.0.0-beta ()
 * Copyright 2018- opncv
 */

$("#getmail").on("focusout", function() {
      var domainList = ["Safe-mail", "fastmail", "mail", "mail2world",
          "outlook", "hotmail", "mailinator", "rediffmail", "runbox",
          "vfemail", "yahoo", "zilladog", "hushmail", "zoho", "gmx",
          "protonmail", "tutanota", "yandex", "aol", "gmail",
          "fastmail", "lycos", "webmail", "spamex", "gmail",
          "guerrillamail", "tempinbox", "forward", "getnada",
          "mail22", "morsin"
      ];

      var myRegexp = /((\w*\d*)(\.\w*\d*)?)([^ ])(@)(([a-z]*)(\.([^ ])\w*))/gm;
      var match = myRegexp.exec($('#getmail').val());

      var i;
      for (i = 0; i < domainList.length; ++i) {
          if (match[7].toLowerCase() === domainList[i]) {
              $(this).attr("placeholder", "* Enter company email address *");
              $(this).addClass('placeholderColor');
$(this).css("border-color","red");
              $(this).val("");
          }
      }
  });

  $("#getmail").on("mousedown", function() {
      $(this).attr("placeholder", "Company email");
$(this).css("border-color","");
      $(this).removeClass('placeholderColor');
  });


  var text = ["Client","Agency"];
  var content = ["Gain your unfair advantage, increase placements and maximize revenues with intelligence that no one else has.","Realtime recruitment intelligence to fill mission critical roles from multiple talent pipelines, in days not weeks."]
  var counter = 0;
  var elem = document.getElementById("changeText");
  var elem2 = document.getElementById("changeContent");

  var inst = setInterval(change, 3000);

  function change() {
      elem.innerHTML = text[counter];
      elem2.innerHTML = content[counter];
      counter++;
      if (counter >= text.length) {
          counter = 0;
          // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
      }
  }

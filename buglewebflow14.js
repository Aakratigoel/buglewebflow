$(document).ready(function () {
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;

  let mobile_content1count = 1;
  let mobile_content2count = 1;
  let mobile_content3count = 1;

  $(".tablink").first().addClass("active-link");
  $(".tab2link").first().addClass("tab2-active-link");
  $(".tab3link").first().addClass("tab3-active-link");

  const mobileResponsive = () => {
    console.log("Entered mobile responsive");
    if (screen.width <= 992) {
      console.log("screen widtg condition true");
      $(".management_left").addClass("mobile_show_block");
      $(".management_left").removeClass("hide_block");
      $(".management_right").addClass("hide_block");
      $(".management_right").removeClass("mobile_show_block");

      $(".manage_arrow_button").click(function (e) {
        console.log("Button cllicked");
        if (mobile_content1count === 6) {
          mobile_content1count = 1;
          content1count = 1;
        } else {
          mobile_content1count++;
          if (mobile_content1count % 2 !== 0) {
            content1count++;
          }
        }

        console.log("mobile content count", mobile_content1count);
        console.log("content count", content1count);

        if (mobile_content1count === 1) {
          $(".tablink").first().addClass("active-link");
          $(".tablink:nth-of-type(2)").removeClass("active-link");
          $(".tablink:nth-of-type(3)").removeClass("active-link");
          $(".management").addClass("show_block");
          $(".registration").removeClass("show_block");
          $(".registration").addClass("hide_block");
          $(".waiver").addClass("hide_block");
          $(".waiver").removeClass("show_block");

          $(".management_left").addClass("mobile_show_block");
          $(".management_left").removeClass("hide_block");
          $(".management_right").addClass("hide_block");
          $(".management_right").removeClass("mobile_show_block");
        }

        if (mobile_content1count === 2) {
          $(".tablink").first().addClass("active-link");
          $(".tablink:nth-of-type(2)").removeClass("active-link");
          $(".tablink:nth-of-type(3)").removeClass("active-link");
          $(".management").addClass("show_block");
          $(".registration").removeClass("show_block");
          $(".registration").addClass("hide_block");
          $(".waiver").addClass("hide_block");
          $(".waiver").removeClass("show_block");

          $(".management_left").removeClass("mobile_show_block");
          $(".management_left").addClass("hide_block");
          $(".management_right").removeClass("hide_block");
          $(".management_right").addClass("mobile_show_block");
        }

        if (mobile_content1count === 3) {
          $(".tablink:nth-of-type(2)").addClass("active-link");
          $(".tablink").first().removeClass("active-link");
          $(".tablink:nth-of-type(3)").removeClass("active-link");
          $(".management").addClass("hide_block");
          $(".management").removeClass("show_block");
          $(".registration").addClass("show_block");
          $(".waiver").addClass("hide_block");
          $(".waiver").removeClass("show_block");

          $(".registration_left").addClass("mobile_show_block");
          $(".registration_left").removeClass("hide_block");
          $(".registration_right").addClass("hide_block");
          $(".registration_right").removeClass("mobile_show_block");
        }

        if (mobile_content1count === 4) {
          $(".tablink:nth-of-type(2)").addClass("active-link");
          $(".tablink").first().removeClass("active-link");
          $(".tablink:nth-of-type(3)").removeClass("active-link");
          $(".management").addClass("hide_block");
          $(".management").removeClass("show_block");
          $(".registration").addClass("show_block");
          $(".waiver").addClass("hide_block");
          $(".waiver").removeClass("show_block");

          $(".registration_left").removeClass("mobile_show_block");
          $(".registration_left").addClass("hide_block");
          $(".registration_right").removeClass("hide_block");
          $(".registration_right").addClass("mobile_show_block");
        }

        if (mobile_content1count === 5) {
          $(".tablink:nth-of-type(3)").addClass("active-link");
          $(".tablink").first().removeClass("active-link");
          $(".tablink:nth-of-type(2)").removeClass("active-link");
          $(".management").removeClass("show_block");
          $(".management").addClass("hide_block");
          $(".registration").removeClass("show_block");
          $(".registration").addClass("hide_block");
          $(".waiver").removeClass("hide_block");
          $(".waiver").addClass("show_block");

          $(".waiver_left").addClass("mobile_show_block");
          $(".waiver_left").removeClass("hide_block");
          $(".waiver_right").addClass("hide_block");
          $(".waiver_right").removeClass("mobile_show_block");
        }
        if (mobile_content1count === 6) {
          $(".tablink:nth-of-type(3)").addClass("active-link");
          $(".tablink").first().removeClass("active-link");
          $(".tablink:nth-of-type(2)").removeClass("active-link");
          $(".management").removeClass("show_block");
          $(".management").addClass("hide_block");
          $(".registration").removeClass("show_block");
          $(".registration").addClass("hide_block");
          $(".waiver").removeClass("hide_block");
          $(".waiver").addClass("show_block");

          $(".waiver_left").removeClass("mobile_show_block");
          $(".waiver_left").addClass("hide_block");
          $(".waiver_right").removeClass("hide_block");
          $(".waiver_right").addClass("mobile_show_block");
        }
      });
    } else {
      $(".manage_arrow_button").click(function (e) {
        console.log(content1count);
        if (content1count === 3) {
          content1count = 1;
          mobile_content1count = 6;
        } else {
          content1count++;
          if (content1count == 2) {
            mobile_content1count = 4;
          }
          if (content1count == 2) {
            mobile_content1count = 6;
          }
        }

        if (content1count === 1) {
          $(".tablink").first().addClass("active-link");
          $(".tablink:nth-of-type(2)").removeClass("active-link");
          $(".tablink:nth-of-type(3)").removeClass("active-link");
          $(".management").addClass("show_block");
          $(".registration").removeClass("show_block");
          $(".registration").addClass("hide_block");
          $(".waiver").addClass("hide_block");
          $(".waiver").removeClass("show_block");
        }

        if (content1count === 2) {
          $(".tablink:nth-of-type(2)").addClass("active-link");
          $(".tablink").first().removeClass("active-link");
          $(".tablink:nth-of-type(3)").removeClass("active-link");
          $(".management").addClass("hide_block");
          $(".management").removeClass("show_block");
          $(".registration").addClass("show_block");
          $(".waiver").addClass("hide_block");
          $(".waiver").removeClass("show_block");
        }

        if (content1count === 3) {
          $(".tablink:nth-of-type(3)").addClass("active-link");
          $(".tablink").first().removeClass("active-link");
          $(".tablink:nth-of-type(2)").removeClass("active-link");
          $(".management").removeClass("show_block");
          $(".management").addClass("hide_block");
          $(".registration").removeClass("show_block");
          $(".registration").addClass("hide_block");
          $(".waiver").removeClass("hide_block");
          $(".waiver").addClass("show_block");
        }
      });
    }
  };

  mobileResponsive();

  $(window).resize(function () {
    mobileResponsive();
  });

  // $(".manage_arrow_button").click(function (e) {
  //   console.log(content1count);
  //   if (content1count === 3) {
  //     content1count = 1;
  //   } else {
  //     content1count++;
  //   }

  //   if (content1count === 1) {
  //     $(".tablink").first().addClass("active-link");
  //     $(".tablink:nth-of-type(2)").removeClass("active-link");
  //     $(".tablink:nth-of-type(3)").removeClass("active-link");
  //     $(".management").addClass("show_block");
  //     $(".registration").removeClass("show_block");
  //     $(".registration").addClass("hide_block");
  //     $(".waiver").addClass("hide_block");
  //     $(".waiver").removeClass("show_block");
  //   }

  //   if (content1count === 2) {
  //     $(".tablink:nth-of-type(2)").addClass("active-link");
  //     $(".tablink").first().removeClass("active-link");
  //     $(".tablink:nth-of-type(3)").removeClass("active-link");
  //     $(".management").addClass("hide_block");
  //     $(".management").removeClass("show_block");
  //     $(".registration").addClass("show_block");
  //     $(".waiver").addClass("hide_block");
  //     $(".waiver").removeClass("show_block");
  //   }

  //   if (content1count === 3) {
  //     $(".tablink:nth-of-type(3)").addClass("active-link");
  //     $(".tablink").first().removeClass("active-link");
  //     $(".tablink:nth-of-type(2)").removeClass("active-link");
  //     $(".management").removeClass("show_block");
  //     $(".management").addClass("hide_block");
  //     $(".registration").removeClass("show_block");
  //     $(".registration").addClass("hide_block");
  //     $(".waiver").removeClass("hide_block");
  //     $(".waiver").addClass("show_block");
  //   }
  // });

  $(".control_arrow").click(function (e) {
    if (content2count === 3) {
      content2count = 1;
    } else {
      content2count++;
    }

    if (content2count === 1) {
      console.log(true);
      $(".tab2link").first().addClass("tab2-active-link");
      $(".tab2link:nth-of-type(2)").removeClass("tab2-active-link");
      $(".tab2link:nth-of-type(3)").removeClass("tab2-active-link");
      $(".checkin").addClass("show_block");
      $(".checkin").removeClass("hide_block");
      $(".masstext").addClass("hide_block");
      $(".masstext").removeClass("show_block");
      $(".hours").addClass("hide_block");
      $(".hours").removeClass("show_block");
    }

    if (content2count === 2) {
      $(".tab2link").first().removeClass("tab2-active-link");
      $(".tab2link:nth-of-type(2)").addClass("tab2-active-link");
      $(".tab2link:nth-of-type(3)").removeClass("tab2-active-link");
      $(".checkin").removeClass("show_block");
      $(".checkin").addClass("hide_block");
      $(".masstext").removeClass("hide_block");
      $(".masstext").addClass("show_block");
      $(".hours").addClass("hide_block");
      $(".hours").removeClass("show_block");
    }
    if (content2count === 3) {
      $(".tab2link").first().removeClass("tab2-active-link");
      $(".tab2link:nth-of-type(2)").removeClass("tab2-active-link");
      $(".tab2link:nth-of-type(3)").addClass("tab2-active-link");
      $(".checkin").removeClass("show_block");
      $(".checkin").addClass("hide_block");
      $(".masstext").addClass("hide_block");
      $(".masstext").removeClass("show_block");
      $(".hours").removeClass("hide_block");
      $(".hours").addClass("show_block");
    }
  });

  $(".inform_arrow").click(function (e) {
    if (content3count === 2) {
      content3count = 1;
    } else {
      content3count++;
    }

    if (content3count === 1) {
      $(".tab3link").first().addClass("tab3-active-link");
      $(".tab3link:nth-of-type(2)").removeClass("tab3-active-link");
      $(".impact").addClass("show_block");
      $(".impact").removeClass("hide_block");
      $(".crm_content").addClass("hide_block");
      $(".crm_content").removeClass("show_block");
    }

    if (content3count === 2) {
      $(".tab3link").first().removeClass("tab3-active-link");
      $(".tab3link:nth-of-type(2)").addClass("tab3-active-link");
      $(".impact").removeClass("show_block");
      $(".impact").addClass("hide_block");
      $(".crm_content").removeClass("hide_block");
      $(".crm_content").addClass("show_block");
    }
  });

  $(".tablink").click(function (e) {
    $(".tablink").removeClass("active-link");
    $(this).addClass("active-link");
    const text = $(this).text();
    if (text.indexOf("Event Registration") >= 0) {
      content1count = 2;
      $(".management").addClass("hide_block");
      $(".management").removeClass("show_block");
      $(".registration").addClass("show_block");
      $(".waiver").addClass("hide_block");
      $(".waiver").removeClass("show_block");
    }

    if (text.indexOf("Enterprise Account") >= 0) {
      content1count = 1;
      $(".management").addClass("show_block");
      $(".registration").removeClass("show_block");
      $(".registration").addClass("hide_block");
      $(".waiver").addClass("hide_block");
      $(".waiver").removeClass("show_block");
    }

    if (text.indexOf("Digital Waivers") >= 0) {
      content1count = 3;
      $(".management").removeClass("show_block");
      $(".management").addClass("hide_block");
      $(".registration").removeClass("show_block");
      $(".registration").addClass("hide_block");
      $(".waiver").removeClass("hide_block");
      $(".waiver").addClass("show_block");
    }
  });

  $(".tab2link").click(function (e) {
    $(".tab2link").removeClass("tab2-active-link");
    $(this).addClass("tab2-active-link");
    const text2 = $(this).text();
    if (text2.indexOf("QR") >= 0) {
      content2count = 1;
      $(".checkin").addClass("show_block");
      $(".checkin").removeClass("hide_block");
      $(".masstext").addClass("hide_block");
      $(".masstext").removeClass("show_block");
      $(".hours").addClass("hide_block");
      $(".hours").removeClass("show_block");
    }

    if (text2.indexOf("Mass Text") >= 0) {
      content2count = 2;
      $(".checkin").removeClass("show_block");
      $(".checkin").addClass("hide_block");
      $(".masstext").removeClass("hide_block");
      $(".masstext").addClass("show_block");
      $(".hours").addClass("hide_block");
      $(".hours").removeClass("show_block");
    }
    if (text2.indexOf("Track volunteer") >= 0) {
      content2count = 3;
      $(".checkin").removeClass("show_block");
      $(".checkin").addClass("hide_block");
      $(".masstext").addClass("hide_block");
      $(".masstext").removeClass("show_block");
      $(".hours").removeClass("hide_block");
      $(".hours").addClass("show_block");
    }
  });

  $(".tab3link").click(function (e) {
    $(".tab3link").removeClass("tab3-active-link");
    $(this).addClass("tab3-active-link");
    const text3 = $(this).text();
    if (text3.indexOf("Impact Update") >= 0) {
      content3count = 1;
      $(".impact").addClass("show_block");
      $(".impact").removeClass("hide_block");
      $(".crm_content").addClass("hide_block");
      $(".crm_content").removeClass("show_block");
    }

    if (text3.indexOf("CRM") >= 0) {
      content3count = 2;
      $(".impact").removeClass("show_block");
      $(".impact").addClass("hide_block");
      $(".crm_content").removeClass("hide_block");
      $(".crm_content").addClass("show_block");
    }
  });
});

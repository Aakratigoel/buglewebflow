$(document).ready(function () {
  console.log("document ready");
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;

  /* Organize section links */

  $(".acc_feature_header").addClass("active");
  $(".acc_feature_header").on("click", function () {
    $(this).addClass("active");
    $(".register_feature_header").removeClass("active");
    $(".event_feature_header").removeClass("active");
    $(".shift_feature_header").removeClass("active");

    $(".event_registration_image").fadeOut(1000, function () {
      $(".enterprise_account").fadeIn(1000);
    });

    $(".event_calendar_image").fadeOut(1000, function () {
      $(".enterprise_account").fadeIn(1000);
    });

    $(".volunteer_shifts_image").fadeOut(1000, function () {
      $(".enterprise_account").fadeIn(1000);
    });
  });

  $(".register_feature_header").on("click", function () {
    $(this).addClass("active");
    $(".acc_feature_header").removeClass("active");
    $(".event_feature_header").removeClass("active");
    $(".shift_feature_header").removeClass("active");

    $(".enterprise_account").fadeOut(1000, function () {
      $(".event_registration_image").fadeIn(1000);
    });
    $(".event_calendar_image").fadeOut(1000, function () {
      $(".event_registration_image").fadeIn(1000);
    });
    $(".volunteer_shifts_image").fadeOut(1000, function () {
      $(".event_registration_image").fadeIn(1000);
    });
  });

  $(".event_feature_header").on("click", function () {
    $(this).addClass("active");
    $(".acc_feature_header").removeClass("active");
    $(".register_feature_header").removeClass("active");
    $(".shift_feature_header").removeClass("active");

    $(".enterprise_account").fadeOut(1000, function () {
      $(".event_calendar_image").fadeIn(1000);
    });
    $(".event_registration_image").fadeOut(1000, function () {
      $(".event_calendar_image").fadeIn(1000);
    });
    $(".volunteer_shifts_image").fadeOut(1000, function () {
      $(".event_calendar_image").fadeIn(1000);
    });
  });

  $(".shift_feature_header").on("click", function () {
    $(this).addClass("active");
    $(".acc_feature_header").removeClass("active");
    $(".event_feature_header").removeClass("active");
    $(".register_feature_header").removeClass("active");

    $(".enterprise_account").fadeOut(1000, function () {
      $(".volunteer_shifts_image").fadeIn(1000);
    });
    $(".event_registration_image").fadeOut(1000, function () {
      $(".volunteer_shifts_image").fadeIn(1000);
    });
    $(".event_calendar_image").fadeOut(1000, function () {
      $(".volunteer_shifts_image").fadeIn(1000);
    });
  });

  /* Control section links */

  $(".digital_check_header").addClass("active");
  $(".digital_check_header").on("click", function () {
    $(this).addClass("active");
    $(".volunteer_hours_header").removeClass("active");
    $(".mass_text_header").removeClass("active");
    $(".digital_waivers_header").removeClass("active");

    $(".track_volunteer_hours").fadeOut(function () {
      setTimeout(function () {
        $(".digital_checkout_images").fadeIn();
      }, 1000);
    });
    $(".image-81").fadeOut(function () {
      setTimeout(function () {
        $(".digital_checkout_images").fadeIn();
      }, 1000);
    });
    $(".digital_waiver_image").fadeOut(function () {
      setTimeout(function () {
        $(".digital_checkout_images").fadeIn();
      }, 1000);
    });
  });

  $(".volunteer_hours_header").on("click", function () {
    $(this).addClass("active");
    $(".digital_check_header").removeClass("active");
    $(".mass_text_header").removeClass("active");
    $(".digital_waivers_header").removeClass("active");

    $(".digital_checkout_images").fadeOut(function () {
      setTimeout(function () {
        $(".track_volunteer_hours").fadeIn();
      }, 1000);
    });
    $(".image-81").fadeOut(function () {
      setTimeout(function () {
        $(".track_volunteer_hours").fadeIn();
      }, 1000);
    });
    $(".digital_waiver_image").fadeOut(function () {
      setTimeout(function () {
        $(".track_volunteer_hours").fadeIn();
      }, 1000);
    });
  });

  $(".mass_text_header").on("click", function () {
    $(this).addClass("active");
    $(".digital_check_header").removeClass("active");
    $(".volunteer_hours_header").removeClass("active");
    $(".digital_waivers_header").removeClass("active");

    $(".digital_checkout_images").fadeOut(function () {
      setTimeout(function () {
        $(".image-81").fadeIn();
      }, 1000);
    });
    $(".track_volunteer_hours").fadeOut(function () {
      setTimeout(function () {
        $(".image-81").fadeIn();
      }, 1000);
    });
    $(".digital_waiver_image").fadeOut(function () {
      setTimeout(function () {
        $(".image-81").fadeIn();
      }, 1000);
    });
  });
  $(".digital_waivers_header").on("click", function () {
    $(this).addClass("active");
    $(".digital_check_header").removeClass("active");
    $(".volunteer_hours_header").removeClass("active");
    $(".mass_text_header").removeClass("active");

    $(".digital_checkout_images").fadeOut(function () {
      setTimeout(function () {
        $(".digital_waiver_image").fadeIn();
      }, 1000);
    });
    $(".track_volunteer_hours").fadeOut(function () {
      setTimeout(function () {
        $(".digital_waiver_image").fadeIn();
      }, 1000);
    });
    $(".image-81").fadeOut(function () {
      setTimeout(function () {
        $(".digital_waiver_image").fadeIn();
      }, 1000);
    });
  });

  /* Inform section links */

  $(".impact_update_header").addClass("active");
  $(".impact_update_header").on("click", function () {
    $(this).addClass("active");
    $(".analytics_header").removeClass("active");
    $(".data_transfer_header").removeClass("active");
    $(".volunteer_profiles_header").removeClass("active");

    $(".analytics_image").fadeOut(function () {
      setTimeout(function () {
        $(".inform_update_images").fadeIn();
      }, 1000);
    });
    $(".data_transfer_image").fadeOut(function () {
      setTimeout(function () {
        $(".inform_update_images").fadeIn();
      }, 1000);
    });
    $(".vol_profiles_images").fadeOut(function () {
      setTimeout(function () {
        $(".inform_update_images").fadeIn();
      }, 1000);
    });
  });

  $(".analytics_header").on("click", function () {
    $(this).addClass("active");
    $(".impact_update_header").removeClass("active");
    $(".data_transfer_header").removeClass("active");
    $(".volunteer_profiles_header").removeClass("active");

    $(".inform_update_images").fadeOut(function () {
      setTimeout(function () {
        $(".analytics_image").fadeIn();
      }, 1000);
    });
    $(".data_transfer_image").fadeOut(function () {
      setTimeout(function () {
        $(".analytics_image").fadeIn();
      }, 1000);
    });
    $(".vol_profiles_images").fadeOut(function () {
      setTimeout(function () {
        $(".analytics_image").fadeIn();
      }, 1000);
    });
  });

  $(".data_transfer_header").on("click", function () {
    $(this).addClass("active");
    $(".impact_update_header").removeClass("active");
    $(".analytics_header").removeClass("active");
    $(".volunteer_profiles_header").removeClass("active");

    $(".analytics_image").fadeOut(function () {
      setTimeout(function () {
        $(".data_transfer_image").fadeIn();
      }, 1000);
    });
    $(".inform_update_images").fadeOut(function () {
      setTimeout(function () {
        $(".data_transfer_image").fadeIn();
      }, 1000);
    });
    $(".vol_profiles_images").fadeOut(function () {
      setTimeout(function () {
        $(".data_transfer_image").fadeIn();
      }, 1000);
    });
  });

  $(".volunteer_profiles_header").on("click", function () {
    $(this).addClass("active");
    $(".impact_update_header").removeClass("active");
    $(".analytics_header").removeClass("active");
    $(".data_transfer_header").removeClass("active");

    $(".analytics_image").fadeOut(function () {
      setTimeout(function () {
        $(".vol_profiles_images").fadeIn();
      }, 1000);
    });
    $(".inform_update_images").fadeOut(function () {
      setTimeout(function () {
        $(".vol_profiles_images").fadeIn();
      }, 1000);
    });
    $(".data_transfer_image").fadeOut(function () {
      setTimeout(function () {
        $(".vol_profiles_images").fadeIn();
      }, 1000);
    });
  });

  /**------------------ --------------------------------- */

  $(".tablink").first().addClass("active-link");
  $(".tab2link").first().addClass("active-link");
  $(".tab3link").first().addClass("active-link");

  $(".book_demo").click(function () {
    Calendly.initPopupWidget({
      url: "https://calendly.com/ryan-bugle/bugle-demo",
    });
    return false;
  });

  // const organize_splide = new Splide("#organize-splide", {
  //   type: "slide",
  //   perPage: 1,
  //   autoplay: false,
  //   rewind: true,
  //   interval: 4000,
  // }).mount();

  // const mobile_organize_splide = new Splide("#mobile-organize-splide", {
  //   type: "slide",
  //   perPage: 1,
  //   autoplay: false,
  //   rewind: true,
  //   interval: 4000,
  // }).mount();

  // const control_splide = new Splide("#control-splide", {
  //   type: "slide",
  //   perPage: 1,
  //   autoplay: false,
  //   rewind: true,
  //   interval: 4000,
  // }).mount();

  // const mobile_control_splide = new Splide("#mobile-control-splide", {
  //   type: "slide",
  //   perPage: 1,
  //   autoplay: false,
  //   rewind: true,
  //   interval: 4000,
  // }).mount();

  // const impact_splide = new Splide("#impact-splide", {
  //   type: "slide",
  //   perPage: 1,
  //   autoplay: false,
  //   rewind: true,
  //   interval: 4000,
  // }).mount();

  // const mobile_impact_splide = new Splide("#mobile-impact-splide", {
  //   type: "slide",
  //   perPage: 1,
  //   autoplay: false,
  //   rewind: true,
  //   interval: 4000,
  // }).mount();

  // organize_splide.on("move", function (newIndex) {
  //   $("#organize_tab").find(".tablink").removeClass("active-link");
  //   $("#organize_tab").find(".tablink").eq(newIndex).addClass("active-link");
  // });
  // control_splide.on("move", function (newIndex) {
  //   $("#control_tab").find(".tab2link").removeClass("active-link");
  //   $("#control_tab").find(".tab2link").eq(newIndex).addClass("active-link");
  // });
  // impact_splide.on("move", function (newIndex) {
  //   $("#inform_tab").find(".tab3link").removeClass("active-link");
  //   $("#inform_tab").find(".tab3link").eq(newIndex).addClass("active-link");
  // });
  // mobile_organize_splide.on("move", function (newIndex) {
  //   $("#organize_tab").find(".tablink").removeClass("active-link");
  //   console.log("newIndex", newIndex);
  //   if (newIndex === 0 || newIndex === 1) {
  //     $("#organize_tab").find(".tablink").eq(0).addClass("active-link");
  //   } else if (newIndex === 2 || newIndex === 3) {
  //     $("#organize_tab").find(".tablink").eq(1).addClass("active-link");
  //   } else if (newIndex === 4 || newIndex === 5) {
  //     $("#organize_tab").find(".tablink").eq(2).addClass("active-link");
  //   }
  // });
  // mobile_control_splide.on("move", function (newIndex) {
  //   $("#control_tab").find(".tab2link").removeClass("active-link");
  //   if (newIndex === 0 || newIndex === 1) {
  //     $("#control_tab").find(".tab2link").eq(0).addClass("active-link");
  //   } else if (newIndex === 2 || newIndex === 3) {
  //     $("#control_tab").find(".tab2link").eq(1).addClass("active-link");
  //   } else if (newIndex === 4) {
  //     $("#control_tab").find(".tab2link").eq(2).addClass("active-link");
  //   }
  // });
  // mobile_impact_splide.on("move", function (newIndex) {
  //   $("#inform_tab").find(".tab3link").removeClass("active-link");
  //   if (newIndex === 0 || newIndex === 1) {
  //     $("#inform_tab").find(".tab3link").eq(0).addClass("active-link");
  //   } else if (newIndex === 2) {
  //     $("#inform_tab").find(".tab3link").eq(1).addClass("active-link");
  //   }
  // });

  // const showOrganize = (index) => {
  //   if (index === 0) {
  //     if (screen.width <= 992) {
  //       mobile_organize_splide.go(0);
  //     } else {
  //       organize_splide.go(0);
  //     }
  //   } else if (index === 1) {
  //     if (screen.width <= 992) {
  //       mobile_organize_splide.go(2);
  //     } else {
  //       organize_splide.go(1);
  //     }
  //   } else if (index === 2) {
  //     if (screen.width <= 992) {
  //       mobile_organize_splide.go(4);
  //     } else {
  //       organize_splide.go(2);
  //     }
  //   }
  // };

  // const showControl = (index) => {
  //   if (index === 0) {
  //     if (screen.width <= 992) {
  //       mobile_control_splide.go(0);
  //     } else {
  //       control_splide.go(0);
  //     }
  //   } else if (index === 1) {
  //     if (screen.width <= 992) {
  //       mobile_control_splide.go(2);
  //     } else {
  //       control_splide.go(1);
  //     }
  //   } else if (index === 2) {
  //     if (screen.width <= 992) {
  //       mobile_control_splide.go(4);
  //     } else {
  //       control_splide.go(2);
  //     }
  //   }
  // };

  // const showInform = (index) => {
  //   if (index === 0) {
  //     if (screen.width <= 992) {
  //       mobile_impact_splide.go(0);
  //     } else {
  //       impact_splide.go(0);
  //     }
  //   } else if (index === 1) {
  //     if (screen.width <= 992) {
  //       mobile_impact_splide.go(2);
  //     } else {
  //       impact_splide.go(1);
  //     }
  //   }
  // };

  // $(".tablink").click(function (e) {
  //   const $this = $(this);
  //   const $parent = $this.parents(".tab:first");
  //   const $active = $parent.find(".active-link");
  //   const parentId = $parent.attr("id");
  //   const tabIndex = $this.index();
  //   const activeIndex = $active.index();

  //   console.log("tab index", tabIndex);
  //   console.log("Active index", activeIndex);
  //   /* Do nothing if clicked on the same tab */
  //   if (tabIndex === activeIndex) {
  //     return;
  //   }

  //   if (parentId === "organize_tab") {
  //     showOrganize(tabIndex, activeIndex);
  //   } else if (parentId === "control_tab") {
  //     showControl(tabIndex, activeIndex);
  //   } else if (parentId === "inform_tab") {
  //     showInform(tabIndex, activeIndex);
  //   }

  //   $parent.find(".tablink").removeClass("active-link");
  //   $this.addClass("active-link");
  // });
});
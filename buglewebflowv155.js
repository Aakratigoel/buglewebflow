$(document).ready(function () {
  console.log("document ready");
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;
  let fadeInDuration = 500;

  $(window).resize(() => {
    console.log("Resixe");
    let windowWidth = $(window).width();
    console.log("Window width", windowWidth);
    if (windowWidth < 1100) {
      fadeInDuration = 450;
    }
  });

  /* Organize section links */

  const findFadeOutSelector = function (activeHeader) {
    if (activeHeader.hasClass("acc_feature_header")) {
      return ".enterprise_account";
    } else if (activeHeader.hasClass("register_feature_header")) {
      return ".event_registration_image";
    } else if (activeHeader.hasClass("event_feature_header")) {
      return ".event_calendar_image";
    } else if (activeHeader.hasClass("shift_feature_header")) {
      return ".volunteer_shifts_image";
    }
  };

  const controlFindFadeOutSelector = function (activeHeader) {
    if (activeHeader.hasClass("digital_check_header")) {
      return ".digital_checkout_images";
    } else if (activeHeader.hasClass("volunteer_hours_header")) {
      return ".track_volunteer_hours";
    } else if (activeHeader.hasClass("mass_text_header")) {
      return ".image-81";
    } else if (activeHeader.hasClass("digital_waivers_header")) {
      return ".digital_waiver_image";
    }
  };

  const informFindFadeOutSelector = function (activeHeader) {
    if (activeHeader.hasClass("impact_update_header")) {
      return ".inform_update_images";
    } else if (activeHeader.hasClass("analytics_header")) {
      return ".analytics_image";
    } else if (activeHeader.hasClass("data_transfer_header")) {
      return ".data_transfer_image";
    } else if (activeHeader.hasClass("volunteer_profiles_header")) {
      return ".vol_profiles_images";
    }
  };

  $(".acc_feature_header").addClass("active");
  $(".acc_feature_header").on("click", function () {
    let transition = $(".organize_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }
    $(".container-53").addClass("transition");

    //find current active header and remove active status
    let activeHeader = $(".organize_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = findFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".enterprise_account").css("display", "flex");
        $(".enterprise_account").fadeIn(fadeInDuration, function () {
          $(".container-53").removeClass("transition");
          $(".acc_feature_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".register_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".event_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".shift_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".acc_link_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".register_feature_header").on("click", function () {
    let transition = $(".organize_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }
    $(".container-53").addClass("transition");
    //find current active header and remove active status
    let activeHeader = $(".organize_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = findFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        $(".event_registration_image").css("display", "flex");
        $(".event_registration_image").fadeIn(fadeInDuration, function () {
          $(".container-53").removeClass("transition");
          $(".register_feature_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".acc_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".event_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".shift_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".register_link_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".event_feature_header").on("click", function () {
    let transition = $(".organize_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }
    $(".container-53").addClass("transition");
    //find current active header and remove active status
    let activeHeader = $(".organize_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = findFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        $(".event_calendar_image").css("display", "flex");
        $(".event_calendar_image").fadeIn(fadeInDuration, function () {
          $(".container-53").removeClass("transition");
          $(".event_feature_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".register_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".acc_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".shift_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".event_link_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".shift_feature_header").on("click", function () {
    let transition = $(".organize_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }
    $(".container-53").addClass("transition");
    //find current active header and remove active status
    let activeHeader = $(".organize_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = findFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        $(".volunteer_shifts_image").css("display", "flex");
        $(".volunteer_shifts_image").fadeIn(fadeInDuration, function () {
          $(".container-53").removeClass("transition");
          $(".shift_feature_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".register_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".event_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".acc_link_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".shift_link_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  /* Control section links */

  $(".digital_check_header").addClass("active");
  $(".digital_check_header").on("click", function () {
    let transition = $(".control_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-54").addClass("controlTransition");
    //find current active header and remove active status
    let activeHeader = $(".control_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = controlFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".digital_checkout_images").css("display", "flex");
        $(".digital_checkout_images").fadeIn(fadeInDuration, function () {
          $(".container-54").removeClass("controlTransition");
          $(".digital_check_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".volunteer_hours_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".mass_text_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_waivers_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_check_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".volunteer_hours_header").on("click", function () {
    let transition = $(".control_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-54").addClass("controlTransition");

    //find current active header and remove active status
    let activeHeader = $(".control_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = controlFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        $(".track_volunteer_hours").css("display", "flex");
        $(".track_volunteer_hours").fadeIn(fadeInDuration, function () {
          $(".container-54").removeClass("controlTransition");
          $(".volunteer_hours_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".digital_check_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".mass_text_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_waivers_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".volunteer_hours_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".mass_text_header").on("click", function () {
    let transition = $(".control_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-54").addClass("controlTransition");

    //find current active header and remove active status
    let activeHeader = $(".control_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = controlFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        $(".image-81").css("display", "flex");
        $(".image-81").fadeIn(fadeInDuration, function () {
          $(".container-54").removeClass("controlTransition");
          $(".mass_text_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".volunteer_hours_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_check_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_waivers_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".mass_text_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });
  $(".digital_waivers_header").on("click", function () {
    let transition = $(".control_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-54").addClass("controlTransition");

    //find current active header and remove active status
    let activeHeader = $(".control_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = controlFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".digital_waiver_image").css("display", "flex");
        $(".digital_waiver_image").fadeIn(fadeInDuration, function () {
          $(".container-54").removeClass("controlTransition");
          $(".digital_waivers_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".volunteer_hours_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".mass_text_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_check_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".digital_waivers_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  /* Inform section links */

  $(".impact_update_header").addClass("active");
  $(".impact_update_header").on("click", function () {
    let transition = $(".inform_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-56").addClass("transition");
    $(".container-56").css("transition", "min-height 1s ease-in-out");
    //find current active header and remove active status
    let activeHeader = $(".inform_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = informFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".inform_update_images").css("display", "flex");
        $(".inform_update_images").fadeIn(fadeInDuration, function () {
          $(".container-56").removeClass("transition");
          $(".impact_update_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".analytics_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".data_transfer_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".volunteer_profiles_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".impact_update_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".analytics_header").on("click", function () {
    let transition = $(".inform_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-56").addClass("transition");
    $(".container-56").css("transition", "min-height 1s ease-in-out");
    //find current active header and remove active status
    let activeHeader = $(".inform_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = informFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".analytics_image").css("display", "flex");
        $(".analytics_image").fadeIn(fadeInDuration, function () {
          $(".container-56").removeClass("transition");
          $(".analytics_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".impact_update_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".data_transfer_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".volunteer_profiles_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".analytics_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".data_transfer_header").on("click", function () {
    let transition = $(".inform_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-56").addClass("transition");
    $(".container-56").css("transition", "min-height 1s ease-in-out ");
    //find current active header and remove active status
    let activeHeader = $(".inform_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = informFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".data_transfer_image").css("display", "flex");
        $(".data_transfer_image").fadeIn(fadeInDuration, function () {
          $(".container-56").removeClass("transition");
          $(".data_transfer_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".analytics_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".impact_update_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".volunteer_profiles_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".data_transfer_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
  });

  $(".volunteer_profiles_header").on("click", function () {
    let transition = $(".inform_section").find(".transitionActive");
    if (transition.length > 0) {
      return;
    }

    $(".container-56").addClass("transition");
    $(".container-56").css("transition", "min-height 1s ease-in-out");
    //find current active header and remove active status
    let activeHeader = $(".inform_section").find(".active");
    activeHeader.removeClass("active");

    // setting registration as transitioning and new active
    $(this).addClass("transitionActive");
    $(this).addClass("active");

    // for current active image fade out and fade in new
    let fadeOutSelector = informFindFadeOutSelector(activeHeader);

    $(fadeOutSelector).fadeOut(500, function () {
      setTimeout(function () {
        // $(".vol_profiles_images").css("display", "flex");
        $(".vol_profiles_images").fadeIn(fadeInDuration, function () {
          $(".container-56").removeClass("transition");
          $(".volunteer_profiles_header").removeClass("transitionActive");
        });
      }, 450);
    });

    $(".analytics_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".data_transfer_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".impact_update_content").animate(
      {
        height: 0,
        opacity: 0,
      },
      500,
      function () {
        $(this).css("display", "none");
        $(this).css("height", "");
      }
    );
    $(".volunteer_profiles_content").css("display", "block").animate(
      {
        height: "auto",
        opacity: 1,
      },
      500
    );
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

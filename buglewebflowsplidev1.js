$(document).ready(function () {
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 900) {
      //if the window is greater than 440px wide then turn on jScrollPane..
      $(".management_right, .registration_right, .waiver_right").addClass(
        "splide__slide"
      );
    }
  }
  // Execute on load
  checkWidth();
  $(window).resize(checkWidth);

  $(".tablink").first().addClass("active-link");
  $(".tab2link").first().addClass("active-link");
  $(".tab3link").first().addClass("active-link");

  $(".registration").addClass("hide");
  $(".waiver").addClass("hide");
  $(".masstext").addClass("hide");
  $(".hours").addClass("hide");
  $(".crm_content").addClass("hide");

  $(".book_demo").click(function () {
    Calendly.initPopupWidget({
      url: "https://calendly.com/ryan-bugle/bugle-demo",
    });
    return false;
  });

  /* Initially hide organize mobile blocks */
  $(".management_left, .registration_left, .waiver_left").addClass("");
  $(".management_right, .registration_right, .waiver_right").addClass(
    "mobile_hide_block"
  );

  /* Initially hide control mobile blocks */
  $(".checkin_left, .volunteerhour_left").addClass("");
  $(".checkin_right, .volunteerhour_right").addClass("mobile_hide_block");

  /* Initially hide control mobile blocks */
  $(".impact_left").addClass("");
  $(".impact_right").addClass("mobile_hide_block");

  const showOrganize = (index, previousIndex) => {
    // let $previous;

    // if (previousIndex === 0) {
    //   $previous = $(".management");
    // } else if (previousIndex === 1) {
    //   $previous = $(".registration");
    // } else if (previousIndex === 2) {
    //   $previous = $(".waiver");
    // }

    if (index === 0) {
      $(".waiver").addClass("hide");
      $(".registration").addClass("hide");
      $(".management").removeClass("hide");
      $(".management .management_left").removeClass("mobile_hide_block");
      $(".management .management_right").addClass("mobile_hide_block");

      // $previous.fadeOut(500, function () {
      //   $(".management").fadeIn(500, function () {

      //   });
      // });
    } else if (index === 1) {
      $(".waiver").addClass("hide");
      $(".management").addClass("hide");
      $(".registration").removeClass("hide");
      $(".registration .registration_left").removeClass("mobile_hide_block");
      $(".registration .registration_right").addClass("mobile_hide_block");
      // $previous.fadeOut(500, function () {
      //   $(".registration").fadeIn(500, function () {

      //   });
      // });
    } else if (index === 2) {
      $(".management").addClass("hide");
      $(".registration").addClass("hide");
      $(".waiver").removeClass("hide");
      $(".waiver .waiver_left").removeClass("mobile_hide_block");
      $(".waiver .waiver_right").addClass("mobile_hide_block");

      // $previous.fadeOut(500, function () {
      //   $(".waiver").fadeIn(500, function () {

      //   });
      // });
    }
  };

  const showControl = (index) => {
    if (index === 0) {
      $(".checkin").removeClass("hide");
      $(".masstext").addClass("hide");
      $(".hours").addClass("hide");

      $(".checkin .checkin_left").removeClass("mobile_hide_block");
      $(".checkin .checkin_right").addClass("mobile_hide_block");
    } else if (index === 1) {
      $(".checkin").addClass("hide");
      $(".masstext").addClass("hide");
      $(".hours").removeClass("hide");

      $(".hours .volunteerhour_left").removeClass("mobile_hide_block");
      $(".hours .volunteerhour_right").addClass("mobile_hide_block");
    } else if (index === 2) {
      $(".checkin").addClass("hide");
      $(".masstext").removeClass("hide");
      $(".hours").addClass("hide");
    }
  };

  const showInform = (index) => {
    if (index === 0) {
      $(".impact").removeClass("hide");
      $(".crm_content").addClass("hide");
    } else if (index === 1) {
      $(".impact").addClass("hide");
      $(".crm_content").removeClass("hide");
    }
  };

  $(".tablink").click(function (e) {
    const $this = $(this);
    const $parent = $this.parents(".tab:first");
    const $active = $parent.find(".active-link");
    const parentId = $parent.attr("id");
    const tabIndex = $this.index();
    const activeIndex = $active.index();

    /* Do nothing if clicked on the same tab */
    if (tabIndex === activeIndex) {
      return;
    }

    if (parentId === "organize_tab") {
      const $deskDots = $(".organize_desk_dots");
      const $mobileDots = $(".organize_mobile_dots");
      showOrganize(tabIndex, activeIndex);

      $deskDots.find(".dot-active").removeClass("dot-active");
      $deskDots.find(".dot:eq(" + tabIndex + ")").addClass("dot-active");
      $mobileDots.find(".dot-active").removeClass("dot-active");
      $mobileDots.find(".dot:eq(" + tabIndex * 2 + ")").addClass("dot-active");
    } else if (parentId === "control_tab") {
      const $deskDots = $(".control_desk_dots");
      const $mobileDots = $(".control_mobile_dots");
      showControl(tabIndex, activeIndex);

      $deskDots.find(".control-dot-active").removeClass("control-dot-active");
      $deskDots
        .find(".control-dot:eq(" + tabIndex + ")")
        .addClass("control-dot-active");
      $mobileDots.find(".control-dot-active").removeClass("control-dot-active");
      $mobileDots
        .find(".control-dot:eq(" + tabIndex * 2 + ")")
        .addClass("control-dot-active");
    } else if (parentId === "inform_tab") {
      const $deskDots = $(".inform_desk_dots");
      const $mobileDots = $(".inform_mobile_dots");
      showInform(tabIndex, activeIndex);

      $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $deskDots
        .find(".inform-dot:eq(" + tabIndex + ")")
        .addClass("inform-dot-active");
      $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $mobileDots
        .find(".inform-dot:eq(" + tabIndex * 2 + ")")
        .addClass("inform-dot-active");
    }

    $parent.find(".tablink").removeClass("active-link");
    $this.addClass("active-link");
  });

  $(
    ".organize_desk_dots .dot, .control_desk_dots .control-dot, .inform_desk_dots .inform-dot"
  ).click(function (e) {
    const $this = $(this);
    const tabIndex = $this.index();
    const $parent = $this.parent();

    if ($parent.hasClass("organize_desk_dots")) {
      const $active = $parent.find(".dot-active");
      const activeIndex = $active.index();

      /* Do nothing if clicked on the same tab */
      if (tabIndex === activeIndex) {
        return;
      }

      const $deskDots = $(".organize_desk_dots");
      const $mobileDots = $(".organize_mobile_dots");
      showOrganize(tabIndex, activeIndex);

      $deskDots.find(".dot-active").removeClass("dot-active");
      $deskDots.find(".dot:eq(" + tabIndex + ")").addClass("dot-active");
      $mobileDots.find(".dot-active").removeClass("dot-active");
      $mobileDots.find(".dot:eq(" + tabIndex * 2 + ")").addClass("dot-active");

      $("#organize_tab").find(".tablink").removeClass("active-link");
      $("#organize_tab").find(".tablink").eq(tabIndex).addClass("active-link");
    } else if ($parent.hasClass("control_desk_dots")) {
      const $active = $parent.find(".control-dot-active");
      const activeIndex = $active.index();

      /* Do nothing if clicked on the same tab */
      if (tabIndex === activeIndex) {
        return;
      }

      const $deskDots = $(".control_desk_dots");
      const $mobileDots = $(".control_mobile_dots");
      showControl(tabIndex, activeIndex);

      $deskDots.find(".control-dot-active").removeClass("control-dot-active");
      $deskDots
        .find(".control-dot:eq(" + tabIndex + ")")
        .addClass("control-dot-active");
      $mobileDots.find(".control-dot-active").removeClass("control-dot-active");
      $mobileDots
        .find(".control-dot:eq(" + tabIndex * 2 + ")")
        .addClass("control-dot-active");

      $("#control_tab").find(".tablink").removeClass("active-link");
      $("#control_tab").find(".tablink").eq(tabIndex).addClass("active-link");
    } else if ($parent.hasClass("inform_desk_dots")) {
      const $active = $parent.find(".inform-dot-active");
      const activeIndex = $active.index();

      /* Do nothing if clicked on the same tab */
      if (tabIndex === activeIndex) {
        return;
      }

      const $deskDots = $(".inform_desk_dots");
      const $mobileDots = $(".inform_mobile_dots");
      showInform(tabIndex, activeIndex);

      $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $deskDots
        .find(".inform-dot:eq(" + tabIndex + ")")
        .addClass("inform-dot-active");
      $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $mobileDots
        .find(".inform-dot:eq(" + tabIndex * 2 + ")")
        .addClass("inform-dot-active");

      $("#inform_tab").find(".tablink").removeClass("active-link");
      $("#inform_tab").find(".tablink").eq(tabIndex).addClass("active-link");
    }
  });

  $(
    ".organize_mobile_dots .dot, .control_mobile_dots .control-dot, .inform_mobile_dots .inform-dot"
  ).click(function (e) {
    const $this = $(this);
    const tabIndex = $this.index();
    const $parent = $this.parent();

    if ($parent.hasClass("organize_mobile_dots")) {
      const $active = $parent.find(".dot-active");
      const activeIndex = $active.index();

      console.log($this);
      console.log($parent);
      console.log(tabIndex);
      console.log(activeIndex);

      /* Do nothing if clicked on the same tab */
      if (tabIndex === activeIndex) {
        return;
      }

      const $deskDots = $(".organize_desk_dots");
      const $mobileDots = $(".organize_mobile_dots");
      /* 0, 2, and 4 are similar to tab clicks */
      if (tabIndex === 0) {
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(0)").addClass("dot-active");
        showOrganize(0);

        $("#organize_tab").find(".tablink").removeClass("active-link");
        $("#organize_tab").find(".tablink").eq(0).addClass("active-link");
      } else if (tabIndex === 2) {
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(1)").addClass("dot-active");
        showOrganize(1);

        $("#organize_tab").find(".tablink").removeClass("active-link");
        $("#organize_tab").find(".tablink").eq(1).addClass("active-link");
      } else if (tabIndex === 4) {
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(2)").addClass("dot-active");
        showOrganize(2);

        $("#organize_tab").find(".tablink").removeClass("active-link");
        $("#organize_tab").find(".tablink").eq(2).addClass("active-link");
      } else if (tabIndex === 1) {
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(0)").addClass("dot-active");

        $(".management .management_left").addClass("mobile_hide_block");
        $(".management .management_right").removeClass("mobile_hide_block");
      } else if (tabIndex === 3) {
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(1)").addClass("dot-active");

        $(".registration .registration_left").addClass("mobile_hide_block");
        $(".registration .registration_right").removeClass("mobile_hide_block");
      } else if (tabIndex === 5) {
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(2)").addClass("dot-active");

        $(".waiver .waiver_left").addClass("mobile_hide_block");
        $(".waiver .waiver_right").removeClass("mobile_hide_block");
      }

      $mobileDots.find(".dot-active").removeClass("dot-active");
      $this.addClass("dot-active");
    } else if ($parent.hasClass("control_mobile_dots")) {
      const $active = $parent.find(".control-dot-active");
      const activeIndex = $active.index();

      /* Do nothing if clicked on the same tab */
      if (tabIndex === activeIndex) {
        return;
      }

      const $deskDots = $(".control_desk_dots");
      const $mobileDots = $(".control_mobile_dots");
      showControl(tabIndex, activeIndex);

      $deskDots.find(".control-dot-active").removeClass("control-dot-active");
      $deskDots
        .find(".control-dot:eq(" + tabIndex + ")")
        .addClass("control-dot-active");
      $mobileDots.find(".control-dot-active").removeClass("control-dot-active");
      $mobileDots
        .find(".control-dot:eq(" + tabIndex * 2 + ")")
        .addClass("control-dot-active");

      $("#control_tab").find(".tablink").removeClass("active-link");
      $("#control_tab").find(".tablink").eq(tabIndex).addClass("active-link");
    } else if ($parent.hasClass("inform_mobile_dots")) {
      const $active = $parent.find(".inform-dot-active");
      const activeIndex = $active.index();

      /* Do nothing if clicked on the same tab */
      if (tabIndex === activeIndex) {
        return;
      }

      const $deskDots = $(".inform_desk_dots");
      const $mobileDots = $(".inform_mobile_dots");
      showInform(tabIndex, activeIndex);

      $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $deskDots
        .find(".inform-dot:eq(" + tabIndex + ")")
        .addClass("inform-dot-active");
      $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $mobileDots
        .find(".inform-dot:eq(" + tabIndex * 2 + ")")
        .addClass("inform-dot-active");

      $("#inform_tab").find(".tablink").removeClass("active-link");
      $("#inform_tab").find(".tablink").eq(tabIndex).addClass("active-link");
    }
  });

  $(".manage_arrow_button").click(function (e) {
    const $organize = $("#organize_tab");
    const $active = $organize.find(".active-link");
    const activeIndex = $active.index();
    const $management = $(".management");
    const $registration = $(".registration");
    const $waiver = $(".waiver");
    const $managementChildren = $management.find(
      ".management_left:visible, .management_right:visible"
    ).length;
    const $registrationChildren = $registration.find(
      ".registration_left:visible, .registration_right:visible"
    ).length;
    const $waiverChildren = $waiver.find(
      ".waiver_left:visible, .waiver_right:visible"
    ).length;
    const $deskDots = $(".organize_desk_dots");
    const $mobileDots = $(".organize_mobile_dots");

    /* If 2 children are present at any time, assume desktop view */
    if (
      $managementChildren === 2 ||
      $registrationChildren === 2 ||
      $waiverChildren === 2
    ) {
      if (activeIndex === 2) {
        showOrganize(0);
        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(0)").addClass("dot-active");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(0)").addClass("dot-active");
        $active.removeClass("active-link");
        $organize.find(".tablink:eq(0)").addClass("active-link");
      } else {
        showOrganize(activeIndex + 1);

        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots
          .find(".dot:eq(" + (activeIndex + 1) + ")")
          .addClass("dot-active");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots
          .find(".dot:eq(" + activeIndex * 2 + ")")
          .addClass("dot-active");
        $active.removeClass("active-link");
        $organize
          .find(".tablink:eq(" + (activeIndex + 1) + ")")
          .addClass("active-link");
      }
    } else if ($managementChildren === 1) {
      const $leftVisible = $(".management .management_left:visible");
      const $rightVisible = $(".management .management_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".management .management_right").removeClass("mobile_hide_block");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(1)").addClass("dot-active");
      } else if ($rightVisible.length === 1) {
        showOrganize(1);

        $(".management .management_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $organize.find(".tablink:eq(1)").addClass("active-link");

        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(1)").addClass("dot-active");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(2)").addClass("dot-active");
      }
    } else if ($registrationChildren === 1) {
      const $leftVisible = $(".registration .registration_left:visible");
      const $rightVisible = $(".registration .registration_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".registration .registration_right").removeClass("mobile_hide_block");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(3)").addClass("dot-active");
      } else if ($rightVisible.length === 1) {
        showOrganize(2);

        $(".registration .registration_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $organize.find(".tablink:eq(2)").addClass("active-link");

        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(2)").addClass("dot-active");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(4)").addClass("dot-active");
      }
    } else if ($waiverChildren === 1) {
      const $leftVisible = $(".waiver .waiver_left:visible");
      const $rightVisible = $(".waiver .waiver_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".waiver .waiver_right").removeClass("mobile_hide_block");

        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(5)").addClass("dot-active");
      } else if ($rightVisible.length === 1) {
        showOrganize(0);

        $(".waiver .waiver_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $organize.find(".tablink:eq(0)").addClass("active-link");

        $deskDots.find(".dot-active").removeClass("dot-active");
        $deskDots.find(".dot:eq(0)").addClass("dot-active");
        $mobileDots.find(".dot-active").removeClass("dot-active");
        $mobileDots.find(".dot:eq(0)").addClass("dot-active");
      }
    }
  });

  $(".control_arrow").click(function (e) {
    const $control = $("#control_tab");
    const $active = $control.find(".active-link");
    const activeIndex = $active.index();
    const $checkin = $(".checkin");
    const $masstext = $(".masstext");
    const $hours = $(".hours");
    const $checkInChildren = $checkin.find(
      ".checkin_left:visible, .checkin_right:visible"
    ).length;
    const $masstextChildren = $masstext.find(".mass_text:visible").length;
    const $hoursChildren = $hours.find(
      ".volunteerhour_left:visible, .volunteerhour_right:visible"
    ).length;
    const $deskDots = $(".control_desk_dots");
    const $mobileDots = $(".control_mobile_dots");

    console.log("CheckIn: " + $checkInChildren);
    console.log("Mass Text: " + $masstextChildren);
    console.log("Hours: " + $hoursChildren);

    console.log($deskDots);
    console.log($mobileDots);

    /* If 2 children are present at any time, assume desktop view */
    if (
      $checkInChildren === 2 ||
      $masstextChildren === 1 ||
      $hoursChildren === 2
    ) {
      if (activeIndex === 2) {
        showControl(0);
        $deskDots.find(".control-dot-active").removeClass("control-dot-active");
        $deskDots.find(".control-dot:eq(0)").addClass("control-dot-active");
        $mobileDots
          .find(".control-dot-active")
          .removeClass("control-dot-active");
        $mobileDots.find(".control-dot:eq(0)").addClass("control-dot-active");

        $active.removeClass("active-link");
        $control.find(".tablink:eq(0)").addClass("active-link");
      } else {
        showControl(activeIndex + 1);

        $deskDots.find(".control-dot-active").removeClass("control-dot-active");
        $deskDots
          .find(".control-dot:eq(" + (activeIndex + 1) + ")")
          .addClass("control-dot-active");
        $mobileDots
          .find(".control-dot-active")
          .removeClass("control-dot-active");
        $mobileDots
          .find(".control-dot:eq(" + activeIndex * 2 + ")")
          .addClass("control-dot-active");
        $active.removeClass("active-link");
        $control
          .find(".tablink:eq(" + (activeIndex + 1) + ")")
          .addClass("active-link");
      }
    } else if ($checkInChildren === 1) {
      const $leftVisible = $(".checkin .checkin_left:visible");
      const $rightVisible = $(".checkin .checkin_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".checkin .checkin_right").removeClass("mobile_hide_block");

        $mobileDots
          .find(".control-dot-active")
          .removeClass("control-dot-active");
        $mobileDots.find(".control-dot:eq(1)").addClass("control-dot-active");
      } else if ($rightVisible.length === 1) {
        showControl(1);

        $(".checkin .checkin_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");

        $deskDots.find(".control-dot-active").removeClass("control-dot-active");
        $deskDots.find(".control-dot:eq(1)").addClass("control-dot-active");
        $mobileDots
          .find(".control-dot-active")
          .removeClass("control-dot-active");
        $mobileDots.find(".control-dot:eq(2)").addClass("control-dot-active");

        $active.removeClass("active-link");
        $control.find(".tablink:eq(1)").addClass("active-link");
      }
    } else if ($hoursChildren === 1) {
      const $leftVisible = $(".hours .volunteerhour_left:visible");
      const $rightVisible = $(".hours .volunteerHour_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".hours .volunteerhour_right").removeClass("mobile_hide_block");

        $mobileDots
          .find(".control-dot-active")
          .removeClass("control-dot-active");
        $mobileDots.find(".control-dot:eq(3)").addClass("control-dot-active");
      } else if ($rightVisible.length === 1) {
        showControl(2);

        $(".hours .volunteerhour_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");

        $deskDots.find(".control-dot-active").removeClass("control-dot-active");
        $deskDots.find(".control-dot:eq(2)").addClass("control-dot-active");
        $mobileDots
          .find(".control-dot-active")
          .removeClass("control-dot-active");
        $mobileDots.find(".control-dot:eq(4)").addClass("control-dot-active");

        $active.removeClass("active-link");
        $control.find(".tablink:eq(2)").addClass("active-link");
      }
    } else if ($masstextChildren === 1) {
      showControl(0);

      $deskDots.find(".control-dot-active").removeClass("control-dot-active");
      $deskDots.find(".control-dot:eq(0)").addClass("control-dot-active");
      $mobileDots.find(".control-dot-active").removeClass("control-dot-active");
      $mobileDots.find(".control-dot:eq(0)").addClass("control-dot-active");

      $active.removeClass("active-link");
      $control.find(".tablink:eq(0)").addClass("active-link");
    }
  });

  $(".inform_arrow").click(function (e) {
    const $inform = $("#inform_tab");
    const $active = $inform.find(".active-link");
    const activeIndex = $active.index();
    const $impact = $(".impact");
    const $crm = $(".crm_content");
    const $impactChildren = $impact.find(
      ".impact_left:visible, .impact_right:visible"
    ).length;
    const $crmChildren = $crm.find(".crm:visible").length;
    const $deskDots = $(".inform_desk_dots");
    const $mobileDots = $(".inform_mobile_dots");

    console.log("Impact: " + $impactChildren);
    console.log("CRM: " + $crmChildren);

    console.log($deskDots);
    console.log($mobileDots);

    /* If 2 children are present at any time, assume desktop view */
    if ($impactChildren === 2 || $crmChildren === 1) {
      if (activeIndex === 1) {
        showInform(0);
        $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $deskDots.find(".inform-dot:eq(0)").addClass("inform-dot-active");
        $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $mobileDots.find(".inform-dot:eq(0)").addClass("inform-dot-active");

        $active.removeClass("active-link");
        $inform.find(".tablink:eq(0)").addClass("active-link");
      } else {
        showInform(activeIndex + 1);

        $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $deskDots
          .find(".inform-dot:eq(" + (activeIndex + 1) + ")")
          .addClass("inform-dot-active");
        $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $mobileDots
          .find(".inform-dot:eq(" + activeIndex * 2 + ")")
          .addClass("inform-dot-active");
        $active.removeClass("active-link");
        $inform
          .find(".tablink:eq(" + (activeIndex + 1) + ")")
          .addClass("active-link");
      }
    } else if ($impactChildren === 1) {
      const $leftVisible = $(".impact .impact_left:visible");
      const $rightVisible = $(".impact .impact_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".impact .impact_right").removeClass("mobile_hide_block");

        $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $mobileDots.find(".dot:eq(1)").addClass("inform-dot-active");
      } else if ($rightVisible.length === 1) {
        showInform(1);

        $(".impact .impact_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $inform.find(".tablink:eq(1)").addClass("active-link");

        $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $deskDots.find(".dot:eq(1)").addClass("inform-dot-active");
        $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
        $mobileDots.find(".dot:eq(2)").addClass("inform-dot-active");
      }
    } else if ($crmChildren === 1) {
      showInform(0);
      $active.removeClass("active-link");
      $inform.find(".tablink:eq(0)").addClass("active-link");

      $deskDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $deskDots.find(".dot:eq(0)").addClass("inform-dot-active");
      $mobileDots.find(".inform-dot-active").removeClass("inform-dot-active");
      $mobileDots.find(".dot:eq(0)").addClass("inform-dot-active");
    }
  });
});

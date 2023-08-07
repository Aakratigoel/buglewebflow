$(document).ready(function () {
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;

  $(".tablink").first().addClass("active-link");
  $(".tab2link").first().addClass("tab2-active-link");
  $(".tab3link").first().addClass("tab3-active-link");

  $(".registration").addClass("hide");
  $(".waiver").addClass("hide");
  $(".masstext").addClass("hide");
  $(".hours").addClass("hide");
  $(".crm_content").addClass("hide");

  /* Initially hide organize mobile blocks */
  $(".management_left, .registration_left, .waiver_left").addClass("");
  $(".management_right, .registration_right, .waiver_right").addClass(
    "mobile_hide_block"
  );

  /* Initially hide control mobile blocks */
  $(".checkin_left, .masstext_left, .hours_left").addClass("");
  $(".checkin_right, .masstext_right, .hours_right").addClass(
    "mobile_hide_block"
  );

  /* Initially hide control mobile blocks */
  $(".impact_left, .crm_content_left").addClass("");
  $(".impact_right, .crm_content_right").addClass("mobile_hide_block");

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

      // $previous.fadeOut(500, function () {
      //   $(".management").fadeIn(500, function () {

      //   });
      // });
    } else if (index === 1) {
      $(".waiver").addClass("hide");
      $(".management").addClass("hide");
      $(".registration").removeClass("hide");

      // $previous.fadeOut(500, function () {
      //   $(".registration").fadeIn(500, function () {

      //   });
      // });
    } else if (index === 2) {
      $(".management").addClass("hide");
      $(".registration").addClass("hide");
      $(".waiver").removeClass("hide");

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
    } else if (index === 1) {
      $(".checkin").addClass("hide");
      $(".masstext").removeClass("hide");
      $(".hours").addClass("hide");
    } else if (index === 2) {
      $(".checkin").addClass("hide");
      $(".masstext").addClass("hide");
      $(".hours").removeClass("hide");
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
      showOrganize(tabIndex, activeIndex);
    } else if (parentId === "control_tab") {
      showControl(tabIndex, activeIndex);
    } else if (parentId === "inform_tab") {
      showInform(tabIndex, activeIndex);
    }

    $parent.find(".tablink").removeClass("active-link");
    $this.addClass("active-link");
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
    console.log($managementChildren);
    console.log($registrationChildren);
    console.log($waiverChildren);

    /* If 2 children are present at any time, assume desktop view */
    if (
      $managementChildren === 2 ||
      $registrationChildren === 2 ||
      $waiverChildren === 2
    ) {
      if (activeIndex === 2) {
        showOrganize(0);
      } else {
        showOrganize(activeIndex + 1);
      }
    } else if ($managementChildren === 1) {
      const $leftVisible = $(".management .management_left:visible");
      const $rightVisible = $(".management .management_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".management .management_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showOrganize(1);

        $(".management .management_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(1)").removeClass("active-link");
      }
    } else if ($registrationChildren === 1) {
      const $leftVisible = $(".registration .registration_left:visible");
      const $rightVisible = $(".registration .registration_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".registration .registration_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showOrganize(2);

        $(".registration .registration_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(2)").removeClass("active-link");
      }
    } else if ($waiverChildren === 1) {
      const $leftVisible = $(".waiver .waiver_left:visible");
      const $rightVisible = $(".waiver .waiver_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".waiver .waiver_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showOrganize(0);

        $(".waiver .waiver_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(0)").removeClass("active-link");
      }
    }
  });

  $("control_arrow").click(function (e) {
    const $organize = $("#control_tab");
    const $active = $organize.find(".active-link");
    const activeIndex = $active.index();
    const $checkin = $(".checkin");
    const $masstext = $(".masstext");
    const $hours = $(".hours");
    const $checkInChildren = $checkin.find(
      ".checkin_left:visible, .checkin_right:visible"
    ).length;
    const $masstextChildren = $masstext.find(
      ".masstext_left:visible, .masstext_right:visible"
    ).length;
    const $hoursChildren = $hours.find(
      ".hours_left:visible, .hours_right:visible"
    ).length;

    /* If 2 children are present at any time, assume desktop view */
    if (
      $checkInChildren === 2 ||
      $masstextChildren === 2 ||
      $hoursChildren === 2
    ) {
      if (activeIndex === 2) {
        showControl(0);
      } else {
        showControl(activeIndex + 1);
      }
    } else if ($checkInChildren === 1) {
      const $leftVisible = $(".checkin .checkin_left:visible");
      const $rightVisible = $(".checkin .checkin_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".checkin .checkin_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showControl(1);

        $(".checkin .checkin_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(1)").removeClass("active-link");
      }
    } else if ($masstextChildren === 1) {
      const $leftVisible = $(".masstext .masstext_left:visible");
      const $rightVisible = $(".masstext .masstext_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".masstext .masstext_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showControl(2);

        $(".masstext .masstext_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(2)").removeClass("active-link");
      }
    } else if ($hoursChildren === 1) {
      const $leftVisible = $(".hours .hours_left:visible");
      const $rightVisible = $(".hours .hours_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".hours .hours_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showControl(0);

        $(".hours .hours_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(0)").removeClass("active-link");
      }
    }
  });

  $(".inform_arrow").click(function (e) {
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
    console.log($managementChildren);
    console.log($registrationChildren);
    console.log($waiverChildren);

    /* If 2 children are present at any time, assume desktop view */
    if (
      $managementChildren === 2 ||
      $registrationChildren === 2 ||
      $waiverChildren === 2
    ) {
      if (activeIndex === 2) {
        showOrganize(0);
      } else {
        showOrganize(activeIndex + 1);
      }
    } else if ($managementChildren === 1) {
      const $leftVisible = $(".management .management_left:visible");
      const $rightVisible = $(".management .management_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".management .management_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showOrganize(1);

        $(".management .management_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(1)").removeClass("active-link");
      }
    } else if ($registrationChildren === 1) {
      const $leftVisible = $(".registration .registration_left:visible");
      const $rightVisible = $(".registration .registration_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".registration .registration_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showOrganize(2);

        $(".registration .registration_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(2)").removeClass("active-link");
      }
    } else if ($waiverChildren === 1) {
      const $leftVisible = $(".waiver .waiver_left:visible");
      const $rightVisible = $(".waiver .waiver_right:visible");

      if ($leftVisible.length === 1) {
        $leftVisible.addClass("mobile_hide_block");
        $(".waiver .waiver_right").removeClass("mobile_hide_block");
      } else if ($rightVisible.length === 1) {
        showOrganize(2);

        $(".waiver .waiver_left").removeClass("mobile_hide_block");
        $rightVisible.addClass("mobile_hide_block");
        $active.removeClass("active-link");
        $parent.find(".tab:eq(0)").removeClass("active-link");
      }
    }
  });
});

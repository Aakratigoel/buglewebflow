$(document).ready(function () {
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;

  $(".tablink").first().addClass("active-link");
  $(".tab2link").first().addClass("active-link");
  $(".tab3link").first().addClass("active-link");

  $(".book_demo").click(function () {
    Calendly.initPopupWidget({
      url: "https://calendly.com/ryan-bugle/bugle-demo",
    });
    return false;
  });

  new Splide("#organize-splide", {
    type: "slide",
    perPage: 1,
    autoplay: false,
    rewind: true,
    interval: 4000,
  }).mount();

  new Splide("#mobile-organize-splide", {
    type: "slide",
    perPage: 1,
    autoplay: false,
    rewind: true,
    interval: 4000,
  }).mount();

  new Splide("#control-splide", {
    type: "slide",
    perPage: 1,
    autoplay: false,
    rewind: true,
    interval: 4000,
  }).mount();

  new Splide("#mobile-control-splide", {
    type: "slide",
    perPage: 1,
    autoplay: false,
    rewind: true,
    interval: 4000,
  }).mount();

  new Splide("#impact-splide", {
    type: "slide",
    perPage: 1,
    autoplay: false,
    rewind: true,
    interval: 4000,
  }).mount();

  new Splide("#mobile-impact-splide", {
    type: "slide",
    perPage: 1,
    autoplay: false,
    rewind: true,
    interval: 4000,
  }).mount();

  const showOrganize = (index, previousIndex) => {
    if (index === 0) {
      $(".waiver").addClass("hide");
      $(".registration").addClass("hide");
      $(".management").removeClass("hide");
      $(".management .management_left").removeClass("mobile_hide_block");
      $(".management .management_right").addClass("mobile_hide_block");
    } else if (index === 1) {
      $(".waiver").addClass("hide");
      $(".management").addClass("hide");
      $(".registration").removeClass("hide");
      $(".registration .registration_left").removeClass("mobile_hide_block");
      $(".registration .registration_right").addClass("mobile_hide_block");
    } else if (index === 2) {
      $(".management").addClass("hide");
      $(".registration").addClass("hide");
      $(".waiver").removeClass("hide");
      $(".waiver .waiver_left").removeClass("mobile_hide_block");
      $(".waiver .waiver_right").addClass("mobile_hide_block");
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

    console.log("tab index", tabIndex);
    console.log("Active index", activeIndex);
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
});

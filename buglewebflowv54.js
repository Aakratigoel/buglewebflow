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

  const organize_splide = new Splide("#organize-splide", {
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

  const control_splide = new Splide("#control-splide", {
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

  const impact_splide = new Splide("#impact-splide", {
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
      organize_splide.go(0);
    } else if (index === 1) {
      organize_splide.go(1);
    } else if (index === 2) {
      organize_splide.go(2);
    }
  };

  const showControl = (index) => {
    if (index === 0) {
      control_splide.go(0);
    } else if (index === 1) {
      control_splide.go(1);
    } else if (index === 2) {
      control_splide.go(2);
    }
  };

  const showInform = (index) => {
    if (index === 0) {
      impact_splide.go(0);
    } else if (index === 1) {
      impact_splide.go(1);
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

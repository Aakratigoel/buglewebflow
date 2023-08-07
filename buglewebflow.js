$(document).ready(function () {
  let content1count = 1;
  let content2count = 1;
  let content3count = 1;

  $(".tablink").first().addClass("active-link");
  $(".tab2link").first().addClass("tab2-active-link");
  $(".tab3link").first().addClass("tab3-active-link");

  const managementSection = () => {
    $(".tablink").first().addClass("active-link");
    $(".tablink:nth-of-type(2)").removeClass("active-link");
    $(".tablink:nth-of-type(3)").removeClass("active-link");
    $(".management").addClass("show_block");
    $(".registration").removeClass("show_block");
    $(".registration").addClass("hide_block");
    $(".waiver").addClass("hide_block");
    $(".waiver").removeClass("show_block");
  };

  const registrationSection = () => {
    $(".tablink:nth-of-type(2)").addClass("active-link");
    $(".tablink").first().removeClass("active-link");
    $(".tablink:nth-of-type(3)").removeClass("active-link");
    $(".management").addClass("hide_block");
    $(".management").removeClass("show_block");
    $(".registration").addClass("show_block");
    $(".waiver").addClass("hide_block");
    $(".waiver").removeClass("show_block");
  };

  const waiverSection = () => {
    $(".tablink:nth-of-type(3)").addClass("active-link");
    $(".tablink").first().removeClass("active-link");
    $(".tablink:nth-of-type(2)").removeClass("active-link");
    $(".management").removeClass("show_block");
    $(".management").addClass("hide_block");
    $(".registration").removeClass("show_block");
    $(".registration").addClass("hide_block");
    $(".waiver").removeClass("hide_block");
    $(".waiver").addClass("show_block");
  };

  const qrSection = () => {
    $(".tab2link").first().addClass("tab2-active-link");
    $(".tab2link:nth-of-type(2)").removeClass("tab2-active-link");
    $(".tab2link:nth-of-type(3)").removeClass("tab2-active-link");
    $(".checkin").addClass("show_block");
    $(".checkin").removeClass("hide_block");
    $(".masstext").addClass("hide_block");
    $(".masstext").removeClass("show_block");
    $(".hours").addClass("hide_block");
    $(".hours").removeClass("show_block");
  };

  const massTextSection = () => {
    $(".tab2link").first().removeClass("tab2-active-link");
    $(".tab2link:nth-of-type(2)").addClass("tab2-active-link");
    $(".tab2link:nth-of-type(3)").removeClass("tab2-active-link");
    $(".checkin").removeClass("show_block");
    $(".checkin").addClass("hide_block");
    $(".masstext").removeClass("hide_block");
    $(".masstext").addClass("show_block");
    $(".hours").addClass("hide_block");
    $(".hours").removeClass("show_block");
  };

  const volunteerHoursSection = () => {
    $(".tab2link").first().removeClass("tab2-active-link");
    $(".tab2link:nth-of-type(2)").removeClass("tab2-active-link");
    $(".tab2link:nth-of-type(3)").addClass("tab2-active-link");
    $(".checkin").removeClass("show_block");
    $(".checkin").addClass("hide_block");
    $(".masstext").addClass("hide_block");
    $(".masstext").removeClass("show_block");
    $(".hours").removeClass("hide_block");
    $(".hours").addClass("show_block");
  };

  const impactUpdateSection = () => {
    $(".tab3link").first().addClass("tab3-active-link");
    $(".tab3link:nth-of-type(2)").removeClass("tab3-active-link");
    $(".impact").addClass("show_block");
    $(".impact").removeClass("hide_block");
    $(".crm_content").addClass("hide_block");
    $(".crm_content").removeClass("show_block");
  };

  const crmSection = () => {
    $(".tab3link").first().removeClass("tab3-active-link");
    $(".tab3link:nth-of-type(2)").addClass("tab3-active-link");
    $(".impact").removeClass("show_block");
    $(".impact").addClass("hide_block");
    $(".crm_content").removeClass("hide_block");
    $(".crm_content").addClass("show_block");
  };

  const showOrganize = (index) => {
    if (index === 0) {
      $(".management").removeClass("hide");
      $(".registration").addClass("hide");
      $(".waiver").addClass("hide");
    } else if (index === 1) {
      $(".management").addClass("hide");
      $(".registration").removeClass("hide");
      $(".waiver").addClass("hide");
    } else if (index === 2) {
      $(".management").addClass("hide");
      $(".registration").addClass("hide");
      $(".waiver").removeClass("hide");
    }
  };

  const organiseContentDisplay = () => {
    if (content1count === 1) {
      managementSection();
    }

    if (content1count === 2) {
      registrationSection();
    }

    if (content1count === 3) {
      waiverSection();
    }
  };

  const controlContentDisplay = () => {
    if (content2count === 1) {
      console.log(true);
      qrSection();
    }

    if (content2count === 2) {
      massTextSection();
    }
    if (content2count === 3) {
      volunteerHoursSection();
    }
  };

  const informContentDisplay = () => {
    if (content3count === 1) {
      impactUpdateSection();
    }
    if (content3count === 2) {
      crmSection();
    }
  };

  $(".manage_arrow_button").click(function (e) {
    if (content1count === 3) {
      content1count = 1;
    } else {
      content1count++;
    }
    organiseContentDisplay();
  });

  $(".control_arrow").click(function (e) {
    if (content2count === 3) {
      content2count = 1;
    } else {
      content2count++;
    }

    controlContentDisplay();
  });

  $(".inform_arrow").click(function (e) {
    if (content3count === 2) {
      content3count = 1;
    } else {
      content3count++;
    }

    informContentDisplay();
  });

  /* General tab link for Organize, Control, and Inform */
  $(".tablink").click(function (e) {
    const $this = $(this);
    const $parent = $this.parents(".tab:first");
    const parentId = $parent.data("id");
    const tabIndex = $this.index();

    if (parentId === "organize") {
      showOrganize(tabIndex);
    } else if (parentId === "control") {
      showControl(tabIndex);
    } else if (parentId === "inform") {
      showControl(tabIndex);
    }

    // div (parent2)
    // - .tab (parent1) (183 -> $this.parents(".tab:first")) #organize, #control, #inform
    //  -- .tablink (1 -> $this) (184 -> 0)
    //  -- .tablink
    //  -- .tablink

    $parent.find(".tablink").removeClass("active-link");
    $this.addClass("active-link");
    // const text = $(this).text();

    // if (text.indexOf("Event Registration") >= 0) {
    //   content1count = 2;
    //   $(".management").addClass("hide_block");
    //   $(".management").removeClass("show_block");
    //   $(".registration").addClass("show_block");
    //   $(".waiver").addClass("hide_block");
    //   $(".waiver").removeClass("show_block");
    // }

    // if (text.indexOf("Enterprise Account") >= 0) {
    //   content1count = 1;
    //   $(".management").addClass("show_block");
    //   $(".registration").removeClass("show_block");
    //   $(".registration").addClass("hide_block");
    //   $(".waiver").addClass("hide_block");
    //   $(".waiver").removeClass("show_block");
    // }

    // if (text.indexOf("Digital Waivers") >= 0) {
    //   content1count = 3;
    //   $(".management").removeClass("show_block");
    //   $(".management").addClass("hide_block");
    //   $(".registration").removeClass("show_block");
    //   $(".registration").addClass("hide_block");
    //   $(".waiver").removeClass("hide_block");
    //   $(".waiver").addClass("show_block");
    // }
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

  $(window).resize(function () {
    if (screen.width <= 992) {
      mobileResponsive();
    } else {
    }
  });

  const mobileResponsive = () => {
    if (screen.width <= 992) {
      console.log("entered width");
      let mobile_content1count = 1;
      let mobile_content2count = 1;
      let mobile_content3count = 1;

      // if (content1count === 1) {
      //   mobile_content1count = 1;
      //   $(".management_1").removeClass("hide_block");
      //   $(".management_1").addClass("show_mobile_block");
      //   $(".management_2").addClass("hide_block");
      //   $(".management_2").removeClass("show_mobile_block");
      //   $(".registration_1").removeClass("show_mobile_block");
      //   $(".registration_1").addClass("hide_block");
      //   $(".registration_2").removeClass("show_mobile_block");
      //   $(".registration_2").addClass("hide_block");
      //   $(".waiver_1").addClass("hide_block");
      //   $(".waiver_1").removeClass("show_mobile_block");
      //   $(".waiver_2").addClass("hide_block");
      //   $(".waiver_2").removeClass("show_mobile_block");
      // }

      // if (content2count === 2) {
      //   mobile_content1count = 3;
      //   $(".management_1").addClass("hide_block");
      //   $(".management_1").removeClass("show_mobile_block");
      //   $(".management_2").addClass("hide_block");
      //   $(".management_2").removeClass("show_mobile_block");
      //   $(".registration_1").addClass("show_mobile_block");
      //   $(".registration_1").removeClass("hide_block");
      //   $(".registration_2").addClass("hide_block");
      //   $(".registration_2").removeClass("show_mobile_block");
      //   $(".waiver_1").addClass("hide_block");
      //   $(".waiver_1").removeClass("show_mobile_block");
      //   $(".waiver_2").addClass("hide_block");
      //   $(".waiver_2").removeClass("show_mobile_block");
      // }

      // if (content2count === 3) {
      //   mobile_content1count = 5;
      //   $(".management_1").removeClass("show_mobile_block");
      //   $(".management_1").addClass("hide_block");
      //   $(".management_2").removeClass("show_mobile_block");
      //   $(".management_2").addClass("hide_block");
      //   $(".registration_1").removeClass("show_mobile_block");
      //   $(".registration_1").addClass("hide_block");
      //   $(".registration_2").removeClass("show_mobile_block");
      //   $(".registration_2").addClass("hide_block");
      //   $(".waiver_1").removeClass("hide_block");
      //   $(".waiver_1").addClass("show_mobile_block");
      //   $(".waiver_2").addClass("hide_block");
      //   $(".waiver_2").removeClass("show_mobile_block");
      // }

      $(".tablink").click(function (e) {
        $(".tablink").removeClass("active-link");
        $(this).addClass("active-link");
        const text = $(this).text();
        console.log("text", text);

        if (text.indexOf("Event Registration") >= 0) {
          mobile_content1count = 3;
          $(".management_1").addClass("hide_block");
          $(".management_1").removeClass("show_mobile_block");
          $(".management_2").addClass("hide_block");
          $(".management_2").removeClass("show_mobile_block");
          $(".registration_1").addClass("show_mobile_block");
          $(".registration_1").removeClass("hide_block");
          $(".registration_2").addClass("hide_block");
          $(".registration_2").removeClass("show_mobile_block");
          $(".waiver_1").addClass("hide_block");
          $(".waiver_1").removeClass("show_mobile_block");
          $(".waiver_2").addClass("hide_block");
          $(".waiver_2").removeClass("show_mobile_block");
        }

        if (text.indexOf("Enterprise Account") >= 0) {
          mobile_content1count = 1;
          $(".management_1").removeClass("hide_block");
          $(".management_1").addClass("show_mobile_block");
          $(".management_2").addClass("hide_block");
          $(".management_2").removeClass("show_mobile_block");
          $(".registration_1").removeClass("show_mobile_block");
          $(".registration_1").addClass("hide_block");
          $(".registration_2").removeClass("show_mobile_block");
          $(".registration_2").addClass("hide_block");
          $(".waiver_1").addClass("hide_block");
          $(".waiver_1").removeClass("show_mobile_block");
          $(".waiver_2").addClass("hide_block");
          $(".waiver_2").removeClass("show_mobile_block");
        }

        if (text.indexOf("Digital Waivers") >= 0) {
          mobile_content1count = 5;
          $(".management_1").removeClass("show_mobile_block");
          $(".management_1").addClass("hide_block");
          $(".management_2").removeClass("show_mobile_block");
          $(".management_2").addClass("hide_block");
          $(".registration_1").removeClass("show_mobile_block");
          $(".registration_1").addClass("hide_block");
          $(".registration_2").removeClass("show_mobile_block");
          $(".registration_2").addClass("hide_block");
          $(".waiver_1").removeClass("hide_block");
          $(".waiver_1").addClass("show_mobile_block");
          $(".waiver_2").addClass("hide_block");
          $(".waiver_2").removeClass("show_mobile_block");
        }
      });

      const management_1_section = () => {
        $(".tablink").first().addClass("active-link");
        $(".tablink:nth-of-type(2)").removeClass("active-link");
        $(".tablink:nth-of-type(3)").removeClass("active-link");
        $(".management_1").removeClass("hide_block");
        $(".management_1").addClass("show_mobile_block");
        $(".management_2").addClass("hide_block");
        $(".management_2").removeClass("show_mobile_block");
        $(".registration_1").removeClass("show_mobile_block");
        $(".registration_1").addClass("hide_block");
        $(".registration_2").removeClass("show_mobile_block");
        $(".registration_2").addClass("hide_block");
        $(".waiver_1").addClass("hide_block");
        $(".waiver_1").removeClass("show_mobile_block");
        $(".waiver_2").addClass("hide_block");
        $(".waiver_2").removeClass("show_mobile_block");
      };

      const management_2_section = () => {
        $(".tablink").first().addClass("active-link");
        $(".tablink:nth-of-type(2)").removeClass("active-link");
        $(".tablink:nth-of-type(3)").removeClass("active-link");
        $(".management_1").addClass("hide_block");
        $(".management_1").removeClass("show_mobile_block");
        $(".management_2").removeClass("hide_block");
        $(".management_2").addClass("show_mobile_block");
        $(".registration_1").removeClass("show_mobile_block");
        $(".registration_1").addClass("hide_block");
        $(".registration_2").removeClass("show_mobile_block");
        $(".registration_2").addClass("hide_block");
        $(".waiver_1").addClass("hide_block");
        $(".waiver_1").removeClass("show_mobile_block");
        $(".waiver_2").addClass("hide_block");
        $(".waiver_2").removeClass("show_mobile_block");
      };

      const registration_1_section = () => {
        $(".tablink").first().removeClass("active-link");
        $(".tablink:nth-of-type(2)").addClass("active-link");
        $(".tablink:nth-of-type(3)").removeClass("active-link");
        $(".management_1").addClass("hide_block");
        $(".management_1").removeClass("show_mobile_block");
        $(".management_2").addClass("hide_block");
        $(".management_2").removeClass("show_mobile_block");
        $(".registration_1").addClass("show_mobile_block");
        $(".registration_1").removeClass("hide_block");
        $(".registration_2").removeClass("show_mobile_block");
        $(".registration_2").addClass("hide_block");
        $(".waiver_1").addClass("hide_block");
        $(".waiver_1").removeClass("show_mobile_block");
        $(".waiver_2").addClass("hide_block");
        $(".waiver_2").removeClass("show_mobile_block");
      };

      const registration_2_section = () => {
        $(".tablink").first().removeClass("active-link");
        $(".tablink:nth-of-type(2)").addClass("active-link");
        $(".tablink:nth-of-type(3)").removeClass("active-link");
        $(".management_1").addClass("hide_block");
        $(".management_1").removeClass("show_mobile_block");
        $(".management_2").addClass("hide_block");
        $(".management_2").removeClass("show_mobile_block");
        $(".registration_1").removeClass("show_mobile_block");
        $(".registration_1").addClass("hide_block");
        $(".registration_2").addClass("show_mobile_block");
        $(".registration_2").removeClass("hide_block");
        $(".waiver_1").addClass("hide_block");
        $(".waiver_1").removeClass("show_mobile_block");
        $(".waiver_2").addClass("hide_block");
        $(".waiver_2").removeClass("show_mobile_block");
      };

      const waiver_1_section = () => {
        $(".tablink").first().removeClass("active-link");
        $(".tablink:nth-of-type(2)").removeClass("active-link");
        $(".tablink:nth-of-type(3)").addClass("active-link");
        $(".management_1").addClass("hide_block");
        $(".management_1").removeClass("show_mobile_block");
        $(".management_2").addClass("hide_block");
        $(".management_2").removeClass("show_mobile_block");
        $(".registration_1").removeClass("show_mobile_block");
        $(".registration_1").addClass("hide_block");
        $(".registration_2").removeClass("show_mobile_block");
        $(".registration_2").addClass("hide_block");
        $(".waiver_1").removeClass("hide_block");
        $(".waiver_1").addClass("show_mobile_block");
        $(".waiver_2").addClass("hide_block");
        $(".waiver_2").removeClass("show_mobile_block");
      };

      const waiver_2_section = () => {
        $(".tablink").first().removeClass("active-link");
        $(".tablink:nth-of-type(2)").removeClass("active-link");
        $(".tablink:nth-of-type(3)").addClass("active-link");
        $(".management_1").addClass("hide_block");
        $(".management_1").removeClass("show_mobile_block");
        $(".management_2").addClass("hide_block");
        $(".management_2").removeClass("show_mobile_block");
        $(".registration_1").removeClass("show_mobile_block");
        $(".registration_1").addClass("hide_block");
        $(".registration_2").removeClass("show_mobile_block");
        $(".registration_2").addClass("hide_block");
        $(".waiver_1").addClass("hide_block");
        $(".waiver_1").removeClass("show_mobile_block");
        $(".waiver_2").removeClass("hide_block");
        $(".waiver_2").addClass("show_mobile_block");
      };

      const mobileOrganiseContentDisplay = () => {
        if (mobile_content1count === 1) {
          management_1_section();
        }
        if (mobile_content1count === 2) {
          management_2_section();
        }
        if (mobile_content1count === 3) {
          registration_1_section();
        }
        if (mobile_content1count === 4) {
          registration_2_section();
        }
        if (mobile_content1count === 5) {
          waiver_1_section();
        }
        if (mobile_content1count === 6) {
          waiver_2_section();
        }
      };

      $(".mobile_manage_arrow").click(function (e) {
        console.log("Mobile content", mobile_content1count);
        if (mobile_content1count === 6) {
          mobile_content1count = 1;
        } else {
          mobile_content1count++;
        }
        mobileOrganiseContentDisplay();
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
    }
  };
});

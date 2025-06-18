window.onload = function () {
  // Deviljho
  const deviljhoImage = document.getElementById("imageDeviljho");
  const deviljhoAudio = document.getElementById("rugissement");

  if (deviljhoImage && deviljhoAudio) {
    deviljhoImage.addEventListener("click", () => {
      if (deviljhoAudio.paused) {
        deviljhoAudio.play();
      } else {
        deviljhoAudio.pause();
        deviljhoAudio.currentTime = 0;
      }
    });
  }

  // Logo principal
  const logoImage = document.querySelector(".logo");
  const logoAudio = document.getElementById("hymne");

  if (logoImage && logoAudio) {
    logoImage.addEventListener("click", () => {
      if (logoAudio.paused) {
        logoAudio.play();
      } else {
        logoAudio.pause();
        logoAudio.currentTime = 0;
      }
    });
  }

  // Mizutsune
  const mizuImage = document.getElementById("imageMizutsune");
  const mizuAudio = document.getElementById("rugissementMizu");

  if (mizuImage && mizuAudio) {
    mizuImage.addEventListener("click", () => {
      if (mizuAudio.paused) {
        mizuAudio.play();
      } else {
        mizuAudio.pause();
        mizuAudio.currentTime = 0;
      }
    });
  }


  const BrachyImage = document.getElementById("imageBrachydios");
  const BrachyAudio = document.getElementById("rugissementBrachy");

  if (BrachyImage && BrachyAudio) {
    BrachyImage.addEventListener("click", () => {
      if (BrachyAudio.paused) {
        BrachyAudio.play();
      } else {
        BrachyAudio.pause();
        BrachyAudio.currentTime = 0;
      }
    });
  }

  const ZinogreImage = document.getElementById("imageZinogre");
  const ZinogreAudio = document.getElementById("rugissementZinogre");

  if (ZinogreImage && ZinogreAudio) {
    ZinogreImage.addEventListener("click", () => {
      if (ZinogreAudio.paused) {
        ZinogreAudio.play();
      } else {
        ZinogreAudio.pause();
        ZinogreAudio.currentTime = 0;
      }
    });
  }

  const GoreImage = document.getElementById("imageGore");
  const GoreAudio = document.getElementById("rugissementGore");

  if (GoreImage && GoreAudio) {
    GoreImage.addEventListener("click", () => {
      if (GoreAudio.paused) {
        GoreAudio.play();
      } else {
        GoreAudio.pause();
        GoreAudio.currentTime = 0;
      }
    });
  }

  const ShageruImage = document.getElementById("imageShageru");
  const ShageruAudio = document.getElementById("rugissementShageru");

  if (ShageruImage && ShageruAudio) {
    ShageruImage.addEventListener("click", () => {
      if (ShageruAudio.paused) {
        ShageruAudio.play();
      } else {
        ShageruAudio.pause();
        ShageruAudio.currentTime = 0;
      }
    });
  }

  const AstalosImage = document.getElementById("imageAstalos");
  const AstalosAudio = document.getElementById("rugissementAstalos");

  if (AstalosImage && AstalosAudio) {
    AstalosImage.addEventListener("click", () => {
      if (AstalosAudio.paused) {
        AstalosAudio.play();
      } else {
        AstalosAudio.pause();
        AstalosAudio.currentTime = 0;
      }
    });
  }

  const GammothImage = document.getElementById("imageGammoth");
  const GammothAudio = document.getElementById("rugissementGammoth");

  if (GammothImage && GammothAudio) {
    GammothImage.addEventListener("click", () => {
      if (GammothAudio.paused) {
        GammothAudio.play();
      } else {
        GammothAudio.pause();
        GammothAudio.currentTime = 0;
      }
    });
  }

  const GlavenusImage = document.getElementById("imageGlavenus");
  const GlavenusAudio = document.getElementById("rugissementGlavenus");

  if (GlavenusImage && GlavenusAudio) {
    GlavenusImage.addEventListener("click", () => {
      if (GlavenusAudio.paused) {
        GlavenusAudio.play();
      } else {
        GlavenusAudio.pause();
        GlavenusAudio.currentTime = 0;
      }
    });
  }

  const TeostraImage = document.getElementById("imageTeostra");
  const TeostraAudio = document.getElementById("rugissementTeostra");

  if (TeostraImage && TeostraAudio) {
    TeostraImage.addEventListener("click", () => {
      if (TeostraAudio.paused) {
        TeostraAudio.play();
      } else {
        TeostraAudio.pause();
        TeostraAudio.currentTime = 0;
      }
    });
  }

  const LunastraImage = document.getElementById("imageLunastra");
  const LunastraAudio = document.getElementById("rugissementLunastra");

  if (LunastraImage && LunastraAudio) {
    LunastraImage.addEventListener("click", () => {
      if (LunastraAudio.paused) {
        LunastraAudio.play();
      } else {
        LunastraAudio.pause();
        LunastraAudio.currentTime = 0;
      }
    });
  }

  const ArkveldImage = document.getElementById("imageArkveld");
  const ArkveldAudio = document.getElementById("rugissementArkveld");

  if (ArkveldImage && ArkveldAudio) {
    ArkveldImage.addEventListener("click", () => {
      if (ArkveldAudio.paused) {
        ArkveldAudio.play();
      } else {
        ArkveldAudio.pause();
        ArkveldAudio.currentTime = 0;
      }
    });
  }

  const AlatreonImage = document.getElementById("imageAlatreon");
  const AlatreonAudio = document.getElementById("rugissementAlatreon");

  if (AlatreonImage && AlatreonAudio) {
    AlatreonImage.addEventListener("click", () => {
      if (AlatreonAudio.paused) {
        AlatreonAudio.play();
      } else {
        AlatreonAudio.pause();
        AlatreonAudio.currentTime = 0;
      }
    });
  }

  const FatalisImage = document.getElementById("imageFatalis");
  const FatalisAudio = document.getElementById("rugissementFatalis");

  if (FatalisImage && FatalisAudio) {
    FatalisImage.addEventListener("click", () => {
      if (FatalisAudio.paused) {
        FatalisAudio.play();
      } else {
        FatalisAudio.pause();
        FatalisAudio.currentTime = 0;
      }
    });
  }
};
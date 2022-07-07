$("#analiseDesktop").hide();
$("#analiseMobile").hide();

$("#listarAnalise").click(function () {
  let url = `https://pagespeed.awsli.com.br/v1/analises/` + $("#idLoja").val();

  if ($("#idLoja").val() == "") {
    alert("Digite um ID");
  } else if (!$("#idLoja").val() == "") {
    let xhr = $.getJSON(url, function desktop(data, statusText, xhr) {
      labelsDesktop = [];
      labelsMobile = [];
      $("#analiseDesktop1").remove();
      $("#analiseMobile1").remove();
      $("#analiseDesktop2").remove();
      $("#analiseMobile2").remove();

      $("#resultado2").hide();
      $("#resultado4").hide();

      $("#resultado1").append('<canvas id="analiseDesktop1"></canvas>');
      $("#resultado3").append('<canvas id="analiseMobile1"></canvas>');
      /*Dados Desktop*/
      tituloDesktop = data[0]["loja.dominio"] + " - DESKTOP";
      ScoreDesktop = [];
      first_contentful_paintDesktop = [];
      speed_indexDesktop = [];
      largest_contentful_paintDesktop = [];
      time_to_interactiveDesktop = [];
      total_blocking_timeDesktop = [];
      cumulative_layout_shiftDesktop = [];

      /* Criando Arrays Desktop*/
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          labelsDesktop.push($.format.date(element.createdAt, "dd/MM/yyyy"));
          labelsDesktop = labelsDesktop.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          ScoreDesktop.push(element.score);
          ScoreDesktop = ScoreDesktop.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          first_contentful_paintDesktop.push(element.first_contentful_paint);
          first_contentful_paintDesktop = first_contentful_paintDesktop.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          speed_indexDesktop.push(element.speed_index);
          speed_indexDesktop = speed_indexDesktop.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          largest_contentful_paintDesktop.push(
            element.largest_contentful_paint
          );
          largest_contentful_paintDesktop =
            largest_contentful_paintDesktop.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          time_to_interactiveDesktop.push(element.time_to_interactive);
          time_to_interactiveDesktop = time_to_interactiveDesktop.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          total_blocking_timeDesktop.push(element.total_blocking_time);
          total_blocking_timeDesktop = total_blocking_timeDesktop.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          cumulative_layout_shiftDesktop.push(element.cumulative_layout_shift);
          cumulative_layout_shiftDesktop = cumulative_layout_shiftDesktop.slice(
            0,
            10
          );
        }
      });

      /* Criação Grafico Desktop*/

      const ctxDesktop = document
        .getElementById("analiseDesktop1")
        .getContext("2d");

      let ChartDesktop = new Chart(ctxDesktop, {
        type: "bar",
        data: {
          labels: labelsDesktop,
          datasets: [
            {
              label: "Score",
              data: ScoreDesktop,
              backgroundColor: ["#2BC4C3"],
            },
            {
              label: "first_contentful_paint",
              data: first_contentful_paintDesktop,
              backgroundColor: ["#4F9D5D"],
              hidden: true,
            },
            {
              label: "speed_index",
              data: speed_indexDesktop,
              backgroundColor: ["#45B1E8"],
              hidden: true,
            },
            {
              label: "largest_contentful_paint",
              data: largest_contentful_paintDesktop,
              backgroundColor: ["#EF863F"],
              hidden: true,
            },
            {
              label: "time_to_interactive",
              data: time_to_interactiveDesktop,
              backgroundColor: ["#F5E7A2"],
              hidden: true,
            },
            {
              label: "total_blocking_time",
              data: total_blocking_timeDesktop,
              backgroundColor: ["#F95A61"],
              hidden: true,
            },
            {
              label: "cumulative_layout_shift",
              data: cumulative_layout_shiftDesktop,
              backgroundColor: ["#DF73FF"],
              hidden: true,
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloDesktop,
              padding: 20,
              font: {
                size: 15,
                family: "arial",
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      });

      /*Dados Mobile*/
      tituloMobile = data[0]["loja.dominio"] + " - MOBILE";
      ScoreMobile = [];
      first_contentful_paintMobile = [];
      speed_indexMobile = [];
      largest_contentful_paintMobile = [];
      time_to_interactiveMobile = [];
      total_blocking_timeMobile = [];
      cumulative_layout_shiftMobile = [];

      /* Criando Arrays Mobile*/
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          labelsMobile.push($.format.date(element.createdAt, "dd/MM/yyyy"));
          labelsMobile = labelsMobile.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          ScoreMobile.push(element.score);
          ScoreMobile = ScoreMobile.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          first_contentful_paintMobile.push(element.first_contentful_paint);
          first_contentful_paintMobile = first_contentful_paintMobile.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          speed_indexMobile.push(element.speed_index);
          speed_indexMobile = speed_indexMobile.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          largest_contentful_paintMobile.push(element.largest_contentful_paint);
          largest_contentful_paintMobile = largest_contentful_paintMobile.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          time_to_interactiveMobile.push(element.time_to_interactive);
          time_to_interactiveMobile = time_to_interactiveMobile.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          total_blocking_timeMobile.push(element.total_blocking_time);
          total_blocking_timeMobile = total_blocking_timeMobile.slice(0, 10);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          cumulative_layout_shiftMobile.push(element.cumulative_layout_shift);
          cumulative_layout_shiftMobile = cumulative_layout_shiftMobile.slice(
            0,
            10
          );
        }
      });

      /* Criação Grafico Mobile*/
      const ctxMobile = document
        .getElementById("analiseMobile1")
        .getContext("2d");

      let ChartMobile = new Chart(ctxMobile, {
        type: "bar",
        data: {
          labels: labelsMobile,
          datasets: [
            {
              label: "Score",
              data: ScoreMobile,
              backgroundColor: ["#2BC4C3"],
            },
            {
              label: "first_contentful_paint",
              data: first_contentful_paintMobile,
              backgroundColor: ["#4F9D5D"],
              hidden: true,
            },
            {
              label: "speed_index",
              data: speed_indexMobile,
              backgroundColor: ["#45B1E8"],
              hidden: true,
            },
            {
              label: "largest_contentful_paint",
              data: largest_contentful_paintMobile,
              backgroundColor: ["#EF863F"],
              hidden: true,
            },
            {
              label: "time_to_interactive",
              data: time_to_interactiveMobile,
              backgroundColor: ["#F5E7A2"],
              hidden: true,
            },
            {
              label: "total_blocking_time",
              data: total_blocking_timeMobile,
              backgroundColor: ["#F95A61"],
              hidden: true,
            },
            {
              label: "cumulative_layout_shift",
              data: cumulative_layout_shiftMobile,
              backgroundColor: ["#DF73FF"],
              hidden: true,
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloMobile,
              padding: 20,
              font: {
                size: 15,
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      });
      $("#resultado1").slideDown("slow");
      $("#resultado3").slideDown("slow");
    }).fail(function () {
      var status = xhr.status;
      if (status === 404) {
        $("#response-analise").text("Loja não encontrada");
        $("#response").removeClass("sucess");
        $("#response").addClass("fail");
        $("#response").slideDown(function () {
          setTimeout(function () {
            $("#response").slideUp();
          }, 5000);
        });
      }
    });
  }
});

//COMPARAR LOJAS

$("#comparar").click(function () {
  $("#idLoja2").slideToggle();

  //$("#listarAnalise").removeAttr("id").attr("id", "listarComparacao");

  if ($("#listarComparacao").css("display") === "none") {
    $("#listarComparacao").slideDown();
    $("#listarAnalise").slideUp();
    $("#idLoja").attr("placeholder", "ID da loja 1");
  } else if ($("#listarComparacao").css("display") != "none") {
    $("#listarComparacao").slideUp();
    $("#listarAnalise").slideDown();
    $("#idLoja").attr("placeholder", "ID da loja");
  }
});

$("#listarComparacao").click(function () {
  if ($("#idLoja").val() == "" || $("#idLoja2").val() == "") {
    alert("Digite o das duas lojas");
  } else {
    let url1 =
      `https://pagespeed.awsli.com.br/v1/analises/` + $("#idLoja").val();
    let url2 =
      `https://pagespeed.awsli.com.br/v1/analises/` + $("#idLoja2").val();
    let xhr = $.getJSON(url1, function desktop(data, statusText, xhr) {
      labelsDesktop1 = [];
      labelsMobile1 = [];
      $("#analiseDesktop1").remove();
      $("#analiseMobile1").remove();
      $("#resultado2").show();
      $("#resultado4").show();

      $("#resultado1").append('<canvas id="analiseDesktop1"></canvas>');
      $("#resultado3").append('<canvas id="analiseMobile1"></canvas>');
      /*Dados Desktop*/
      tituloDesktop1 = data[0]["loja.dominio"] + " - DESKTOP";
      ScoreDesktop1 = [];
      first_contentful_paintDesktop1 = [];
      speed_indexDesktop1 = [];
      largest_contentful_paintDesktop1 = [];
      time_to_interactiveDesktop1 = [];
      total_blocking_timeDesktop1 = [];
      cumulative_layout_shiftDesktop1 = [];

      /* Criando Arrays Desktop*/
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          labelsDesktop1.push($.format.date(element.createdAt, "dd/MM/yyyy"));
          labelsDesktop1 = labelsDesktop1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          ScoreDesktop1.push(element.score);
          ScoreDesktop1 = ScoreDesktop1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          first_contentful_paintDesktop1.push(element.first_contentful_paint);
          first_contentful_paintDesktop1 = first_contentful_paintDesktop1.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          speed_indexDesktop1.push(element.speed_index);
          speed_indexDesktop1 = speed_indexDesktop1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          largest_contentful_paintDesktop1.push(
            element.largest_contentful_paint
          );
          largest_contentful_paintDesktop1 =
            largest_contentful_paintDesktop1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          time_to_interactiveDesktop1.push(element.time_to_interactive);
          time_to_interactiveDesktop1 = time_to_interactiveDesktop1.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          total_blocking_timeDesktop1.push(element.total_blocking_time);
          total_blocking_timeDesktop1 = total_blocking_timeDesktop1.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          cumulative_layout_shiftDesktop1.push(element.cumulative_layout_shift);
          cumulative_layout_shiftDesktop1 =
            cumulative_layout_shiftDesktop1.slice(0, 5);
        }
      });

      /* Criação Grafico Desktop*/

      const ctxDesktop1 = document
        .getElementById("analiseDesktop1")
        .getContext("2d");
      let ChartDesktop1 = new Chart(ctxDesktop1, {
        type: "bar",
        data: {
          labels: labelsDesktop1,
          datasets: [
            {
              label: "Score",
              data: ScoreDesktop1,
              backgroundColor: ["#2BC4C3"],
            },
            {
              label: "first_contentful_paint",
              data: first_contentful_paintDesktop1,
              backgroundColor: ["#4F9D5D"],
              hidden: true,
            },
            {
              label: "speed_index",
              data: speed_indexDesktop1,
              backgroundColor: ["#45B1E8"],
              hidden: true,
            },
            {
              label: "largest_contentful_paint",
              data: largest_contentful_paintDesktop1,
              backgroundColor: ["#EF863F"],
              hidden: true,
            },
            {
              label: "time_to_interactive",
              data: time_to_interactiveDesktop1,
              backgroundColor: ["#F5E7A2"],
              hidden: true,
            },
            {
              label: "total_blocking_time",
              data: total_blocking_timeDesktop1,
              backgroundColor: ["#F95A61"],
              hidden: true,
            },
            {
              label: "cumulative_layout_shift",
              data: cumulative_layout_shiftDesktop1,
              backgroundColor: ["#DF73FF"],
              hidden: true,
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloDesktop1,
              padding: 20,
              font: {
                size: 15,
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      });

      /*Dados Mobile*/
      tituloMobile1 = data[0]["loja.dominio"] + " - MOBILE";
      ScoreMobile1 = [];
      first_contentful_paintMobile1 = [];
      speed_indexMobile1 = [];
      largest_contentful_paintMobile1 = [];
      time_to_interactiveMobile1 = [];
      total_blocking_timeMobile1 = [];
      cumulative_layout_shiftMobile1 = [];

      /* Criando Arrays Mobile*/
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          labelsMobile1.push($.format.date(element.createdAt, "dd/MM/yyyy"));
          labelsMobile1 = labelsMobile1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          ScoreMobile1.push(element.score);
          ScoreMobile1 = ScoreMobile1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          first_contentful_paintMobile1.push(element.first_contentful_paint);
          first_contentful_paintMobile1 = first_contentful_paintMobile1.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          speed_indexMobile1.push(element.speed_index);
          speed_indexMobile1 = speed_indexMobile1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          largest_contentful_paintMobile1.push(
            element.largest_contentful_paint
          );
          largest_contentful_paintMobile1 =
            largest_contentful_paintMobile1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          time_to_interactiveMobile1.push(element.time_to_interactive);
          time_to_interactiveMobile1 = time_to_interactiveMobile1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          total_blocking_timeMobile1.push(element.total_blocking_time);
          total_blocking_timeMobile1 = total_blocking_timeMobile1.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          cumulative_layout_shiftMobile1.push(element.cumulative_layout_shift);
          cumulative_layout_shiftMobile1 = cumulative_layout_shiftMobile1.slice(
            0,
            10
          );
        }
      });

      /* Criação Grafico Mobile*/
      const ctxMobile1 = document
        .getElementById("analiseMobile1")
        .getContext("2d");

      let ChartMobile1 = new Chart(ctxMobile1, {
        type: "bar",
        data: {
          labels: labelsMobile1,
          datasets: [
            {
              label: "Score",
              data: ScoreMobile1,
              backgroundColor: ["#2BC4C3"],
            },
            {
              label: "first_contentful_paint",
              data: first_contentful_paintMobile1,
              backgroundColor: ["#4F9D5D"],
              hidden: true,
            },
            {
              label: "speed_index",
              data: speed_indexMobile1,
              backgroundColor: ["#45B1E8"],
              hidden: true,
            },
            {
              label: "largest_contentful_paint",
              data: largest_contentful_paintMobile1,
              backgroundColor: ["#EF863F"],
              hidden: true,
            },
            {
              label: "time_to_interactive",
              data: time_to_interactiveMobile1,
              backgroundColor: ["#F5E7A2"],
              hidden: true,
            },
            {
              label: "total_blocking_time",
              data: total_blocking_timeMobile1,
              backgroundColor: ["#F95A61"],
              hidden: true,
            },
            {
              label: "cumulative_layout_shift",
              data: cumulative_layout_shiftMobile1,
              backgroundColor: ["#DF73FF"],
              hidden: true,
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloMobile1,
              padding: 20,
              font: {
                size: 15,
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      });
      $("#resultado1").slideDown("slow");
      $("#resultado3").slideDown("slow");
    });

    let xhr2 = $.getJSON(url2, function desktop(data, statusText, xhr) {
      labelsDesktop2 = [];
      labelsMobile2 = [];
      $("#analiseDesktop2").remove();
      $("#analiseMobile2").remove();

      $("#resultado2").append('<canvas id="analiseDesktop2"></canvas>');
      $("#resultado4").append('<canvas id="analiseMobile2"></canvas>');
      /*Dados Desktop*/
      tituloDesktop2 = data[0]["loja.dominio"] + " - DESKTOP";
      ScoreDesktop2 = [];
      first_contentful_paintDesktop2 = [];
      speed_indexDesktop2 = [];
      largest_contentful_paintDesktop2 = [];
      time_to_interactiveDesktop2 = [];
      total_blocking_timeDesktop2 = [];
      cumulative_layout_shiftDesktop2 = [];

      /* Criando Arrays Desktop*/
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          labelsDesktop2.push($.format.date(element.createdAt, "dd/MM/yyyy"));
          labelsDesktop2 = labelsDesktop2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          ScoreDesktop2.push(element.score);
          ScoreDesktop2 = ScoreDesktop2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          first_contentful_paintDesktop2.push(element.first_contentful_paint);
          first_contentful_paintDesktop2 = first_contentful_paintDesktop2.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          speed_indexDesktop2.push(element.speed_index);
          speed_indexDesktop2 = speed_indexDesktop2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          largest_contentful_paintDesktop2.push(
            element.largest_contentful_paint
          );
          largest_contentful_paintDesktop2 =
            largest_contentful_paintDesktop2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          time_to_interactiveDesktop2.push(element.time_to_interactive);
          time_to_interactiveDesktop2 = time_to_interactiveDesktop2.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          total_blocking_timeDesktop2.push(element.total_blocking_time);
          total_blocking_timeDesktop2 = total_blocking_timeDesktop2.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "desktop") {
          cumulative_layout_shiftDesktop2.push(element.cumulative_layout_shift);
          cumulative_layout_shiftDesktop2 =
            cumulative_layout_shiftDesktop2.slice(0, 5);
        }
      });

      /* Criação Grafico Desktop*/

      const ctxDesktop2 = document
        .getElementById("analiseDesktop2")
        .getContext("2d");
      let ChartDesktop2 = new Chart(ctxDesktop2, {
        type: "bar",
        data: {
          labels: labelsDesktop2,
          datasets: [
            {
              label: "Score",
              data: ScoreDesktop2,
              backgroundColor: ["#2BC4C3"],
            },
            {
              label: "first_contentful_paint",
              data: first_contentful_paintDesktop2,
              backgroundColor: ["#4F9D5D"],
              hidden: true,
            },
            {
              label: "speed_index",
              data: speed_indexDesktop2,
              backgroundColor: ["#45B1E8"],
              hidden: true,
            },
            {
              label: "largest_contentful_paint",
              data: largest_contentful_paintDesktop2,
              backgroundColor: ["#EF863F"],
              hidden: true,
            },
            {
              label: "time_to_interactive",
              data: time_to_interactiveDesktop2,
              backgroundColor: ["#F5E7A2"],
              hidden: true,
            },
            {
              label: "total_blocking_time",
              data: total_blocking_timeDesktop2,
              backgroundColor: ["#F95A61"],
              hidden: true,
            },
            {
              label: "cumulative_layout_shift",
              data: cumulative_layout_shiftDesktop2,
              backgroundColor: ["#DF73FF"],
              hidden: true,
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloDesktop2,
              padding: 20,
              font: {
                size: 15,
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      });

      /*Dados Mobile*/
      tituloMobile2 = data[0]["loja.dominio"] + " - MOBILE";
      ScoreMobile2 = [];
      first_contentful_paintMobile2 = [];
      speed_indexMobile2 = [];
      largest_contentful_paintMobile2 = [];
      time_to_interactiveMobile2 = [];
      total_blocking_timeMobile2 = [];
      cumulative_layout_shiftMobile2 = [];

      /* Criando Arrays Mobile*/
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          labelsMobile2.push($.format.date(element.createdAt, "dd/MM/yyyy"));
          labelsMobile2 = labelsMobile2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          ScoreMobile2.push(element.score);
          ScoreMobile2 = ScoreMobile2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          first_contentful_paintMobile2.push(element.first_contentful_paint);
          first_contentful_paintMobile2 = first_contentful_paintMobile2.slice(
            0,
            10
          );
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          speed_indexMobile2.push(element.speed_index);
          speed_indexMobile2 = speed_indexMobile2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          largest_contentful_paintMobile2.push(
            element.largest_contentful_paint
          );
          largest_contentful_paintMobile2 =
            largest_contentful_paintMobile2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          time_to_interactiveMobile2.push(element.time_to_interactive);
          time_to_interactiveMobile2 = time_to_interactiveMobile2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          total_blocking_timeMobile2.push(element.total_blocking_time);
          total_blocking_timeMobile2 = total_blocking_timeMobile2.slice(0, 5);
        }
      });
      data.forEach((element) => {
        if (element.strategy == "mobile") {
          cumulative_layout_shiftMobile2.push(element.cumulative_layout_shift);
          cumulative_layout_shiftMobile2 = cumulative_layout_shiftMobile2.slice(
            0,
            10
          );
        }
      });

      /* Criação Grafico Mobile*/
      const ctxMobile2 = document
        .getElementById("analiseMobile2")
        .getContext("2d");
      let ChartMobile2 = new Chart(ctxMobile2, {
        type: "bar",
        data: {
          labels: labelsMobile2,
          datasets: [
            {
              label: "Score",
              data: ScoreMobile2,
              backgroundColor: ["#2BC4C3"],
            },
            {
              label: "first_contentful_paint",
              data: first_contentful_paintMobile2,
              backgroundColor: ["#4F9D5D"],
              hidden: true,
            },
            {
              label: "speed_index",
              data: speed_indexMobile2,
              backgroundColor: ["#45B1E8"],
              hidden: true,
            },
            {
              label: "largest_contentful_paint",
              data: largest_contentful_paintMobile2,
              backgroundColor: ["#EF863F"],
              hidden: true,
            },
            {
              label: "time_to_interactive",
              data: time_to_interactiveMobile2,
              backgroundColor: ["#F5E7A2"],
              hidden: true,
            },
            {
              label: "total_blocking_time",
              data: total_blocking_timeMobile2,
              backgroundColor: ["#F95A61"],
              hidden: true,
            },
            {
              label: "cumulative_layout_shift",
              data: cumulative_layout_shiftMobile2,
              backgroundColor: ["#DF73FF"],
              hidden: true,
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloMobile2,
              padding: 20,
              font: {
                size: 15,
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      });
      $("#resultado2").slideDown("slow");
      $("#resultado4").slideDown("slow");
    });
  }
});

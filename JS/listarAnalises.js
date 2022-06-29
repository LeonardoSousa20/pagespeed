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
      $("#analiseDesktop").remove();
      $("#analiseMobile").remove();

      $("#resultado-analise").append('<canvas id="analiseDesktop"></canvas>');
      $("#resultado-analise").append('<canvas id="analiseMobile"></canvas>');
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
        .getElementById("analiseDesktop")
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
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloDesktop,
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
        .getElementById("analiseMobile")
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
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: tituloMobile,
            },
          },
        },
      });

      $("#analiseDesktop").show(1000);
      $("#analiseMobile").show(1000);
      $("#analiseMobile").addClass("true");
      $("#analiseDesktop").addClass("true");
    }).fail(function () {
      var status = xhr.status;
      if (status === 404) {
        $("#response-analise").text("Loja não encontrada");
        $("#response").removeClass("sucess");
        $("#response").addClass("fail");
        $("#response").show("500").delay(5000).fadeOut(1000);
      }
    });
  }
});

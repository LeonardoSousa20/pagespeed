// Ajustes de button disabled dependendo das analises
if ($("#contentAnalise").attr("analise")) {
} else {
  $("#analiseCsv").addClass("disabled");
  $("#analiseCsv").attr("disabled", "true");
}

// Abertura do modal ao clicar no button
$("#analiseCsv").click(function () {
  $("#modal-exportacao").show();
  if ($("#contentAnalise").attr("analise") == "1") {
    $("#analise2").addClass("disabled");
    $("#analise2").attr("disabled", "true");
  } else if ($("#contentAnalise").attr("analise", "2")) {
    $("#analise2").removeClass("disabled");
    $("#analise2").removeAttr("disabled");
  }
});

// Analise loja 1
$("#analise1").click(async function () {
  let url = `https://pagespeed.awsli.com.br/v1/analises/` + $("#idLoja").val();

  $.getJSON(url, function (json) {
    const objectToCsv = function (data) {
      const csvRows = [];

      // get the headers
      const headers = Object.keys(data[0]);
      csvRows.push(headers.join(","));

      // loop over the rows
      for (const row of data) {
        const values = headers.map((header) => {
          return row[header];
        });
        csvRows.push(values.join(","));
      }
      return csvRows.join("\n");
    };
    const download = function (data) {
      const blob = new Blob([data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute(
        "download",
        "Analise - Loja " + $("#idLoja").val() + ".csv"
      );
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    const data = json.map((row) => ({
      analiseId: row.analise_id,
      score: row.score,
      createdAt: row.createdAt,
      strategy: row.strategy,
      FirstContentfulPaint: row.first_contentful_paint,
      speedIndex: row.speed_index,
      largentContentPaint: row.largest_contentful_paint,
      timeToInteractive: row.time_to_interactive,
      totalBlockingTime: row.total_blocking_time,
      cumulativeLayoutShift: row.cumulative_layout_shift,
    }));
    const csvData = objectToCsv(data);
    download(csvData);
  });
});

// Analise loja 2

$("#analise2").click(async function () {
  let url = `https://pagespeed.awsli.com.br/v1/analises/` + $("#idLoja2").val();

  $.getJSON(url, function (json) {
    const objectToCsv = function (data) {
      const csvRows = [];

      // get the headers
      const headers = Object.keys(data[0]);
      csvRows.push(headers.join(","));

      // loop over the rows
      for (const row of data) {
        const values = headers.map((header) => {
          return row[header];
        });
        csvRows.push(values.join(","));
      }
      return csvRows.join("\n");
    };
    const download = function (data) {
      const blob = new Blob([data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute(
        "download",
        "Analise - Loja " + $("#idLoja2").val() + ".csv"
      );
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    const data = json.map((row) => ({
      analiseId: row.analise_id,
      score: row.score,
      createdAt: row.createdAt,
      strategy: row.strategy,
      FirstContentfulPaint: row.first_contentful_paint,
      speedIndex: row.speed_index,
      largentContentPaint: row.largest_contentful_paint,
      timeToInteractive: row.time_to_interactive,
      totalBlockingTime: row.total_blocking_time,
      cumulativeLayoutShift: row.cumulative_layout_shift,
    }));
    const csvData = objectToCsv(data);
    download(csvData);
  });
});

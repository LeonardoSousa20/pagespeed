$("#analiseCsv").click(async function () {
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
      a.setAttribute("download", "Pagespeed - Analises.csv");
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

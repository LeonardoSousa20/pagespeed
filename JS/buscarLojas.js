$("#buscar").click(function () {
  const url = `https://pagespeed.awsli.com.br/v1/lojas`;
  if ($("#loja-id-busca").val() != "") {
    const urlId =
      `https://pagespeed.awsli.com.br/v1/lojas/` + $("#loja-id-busca").val();

    $.getJSON(urlId, function (data) {
      /*Fazendo o get na api com a URL definida em uma const*/

      var lojas_data = "";

      //Criação do Header

      lojas_data += "<div class=div-table>";
      lojas_data += "<div class=table>";
      lojas_data += "<span>ID</span>";
      lojas_data += "<span>Domínio</span>";
      lojas_data += "<span>Data ultima atualização</span>";
      lojas_data += "<span>Analise ativa</span>";
      lojas_data += "</div>";

      $.each(data, function (key, value) {
        /* Formatando as datas*/
        let dataCriacao = value.createdAt;
        let dataCriacaoFormatada = $.format.date(dataCriacao, "dd/MM/yyyy");
        let dataupdate = value.updatedAt;
        let dataUpdateFormatada = $.format.date(dataupdate, "dd/MM/yyyy");
        /* Criando os conteudos da tabela */
        lojas_data += "<div class=table-row>";
        lojas_data += "<span class=row>" + value.conta_id + "</span>";
        lojas_data += "<span class=row>" + value.dominio + "</span>";
        lojas_data += "<span class=row>" + dataUpdateFormatada + "</span>";
        lojas_data +=
          "<div class=loja-status id=loja-status value= " +
          value.conta_id +
          " dominio=" +
          value.dominio +
          " ativa=" +
          value.loja_ativa +
          ">";
        if (value["loja_ativa"] === false) {
          lojas_data += "<span class=loja-inativa></span>";
        } else if (value["loja_ativa"] === true) {
          lojas_data += "<span class=loja-ativa></span>";
        }
        if (value["loja_ativa"] === false) {
          lojas_data += "<span class=row>Inativa</span>";
        } else if (value["loja_ativa"] === true) {
          lojas_data += "<span class=row>Ativa</span>";
        }

        lojas_data += "</div>";
        lojas_data += "</div>";
      });
      lojas_data += "</div>";
      $("#resultado-busca").html("");
      $("#resultado-busca").append(lojas_data);
      $("#input-div").css("border-bottom", "1px solid rgba(206, 212, 216, 1)");
      $("#input-div").css("height", "100px");
    });
  } else {
    $.getJSON(url, function (data) {
      /*Fazendo o get na api com a URL definida em uma const*/

      var lojas_data = "";

      //Criação do Header

      lojas_data += "<div class=div-table>";
      lojas_data += "<div class=table>";
      lojas_data += "<span>ID</span>";
      lojas_data += "<span>Domínio</span>";
      lojas_data += "<span>Data ultima atualização</span>";
      lojas_data += "<span>Analise ativa</span>";
      lojas_data += "</div>";

      $.each(data, function (key, value) {
        /* Formatando as datas*/
        let dataCriacao = value.createdAt;
        let dataCriacaoFormatada = $.format.date(dataCriacao, "dd/MM/yyyy");
        let dataupdate = value.updatedAt;
        let dataUpdateFormatada = $.format.date(dataupdate, "dd/MM/yyyy");
        /* Criando os conteudos da tabela */
        lojas_data += "<div class=table-row>";
        lojas_data +=
          "<span class=row id=id-loja>" + value.conta_id + "</span>";
        lojas_data += "<span class=row id=dominio>" + value.dominio + "</span>";
        lojas_data += "<span class=row>" + dataUpdateFormatada + "</span>";
        lojas_data +=
          "<div class=loja-status id=loja-status value= " +
          value.conta_id +
          " dominio=" +
          value.dominio +
          " ativa=" +
          value.loja_ativa +
          ">";
        if (value["loja_ativa"] === false) {
          lojas_data += "<span class=loja-inativa></span>";
        } else if (value["loja_ativa"] === true) {
          lojas_data += "<span class=loja-ativa></span>";
        }
        if (value["loja_ativa"] === false) {
          lojas_data += "<span class=row>Inativa</span>";
        } else if (value["loja_ativa"] === true) {
          lojas_data += "<span class=row>Ativa</span>";
        }

        lojas_data += "</div>";
        lojas_data += "</div>";
      });
      lojas_data += "</div>";
      $("#resultado-busca").html("");
      $("#resultado-busca").append(lojas_data);
      $("#input-div").css("border-bottom", "1px solid rgba(206, 212, 216, 1)");
      $("#input-div").css("height", "100px");
    });
  }
});

// ATIVAR/DESATIVAR LOJA
$(document).on("click", "#loja-status", function () {
  let contaId = this.getAttribute("value");
  let dominio = this.getAttribute("dominio");
  let lojaAtiva = this.getAttribute("ativa");

  $("#modal-ativacao").show();

  if (lojaAtiva == "true") {
    $("#confirm").text("Inativar");
    $("#status-confirm").text("inativar");
    $("#modal-content").attr("value", contaId);
    $("#modal-content").attr("ativa", "true");
  } else if (lojaAtiva == "false") {
    $("#confirm").text("Ativar");
    $("#status-confirm").text("ativar");
    $("#modal-content").attr("value", contaId);
    $("#modal-content").attr("ativa", "false");
  }
  $("#confirm-dominio").text(dominio);
});
$(document).on("click", "#cancel-confirm", function () {
  $("#modal-ativacao").hide();
});

$(document).on("click", "#confirm", function () {
  let confirmAtiva = "";
  let confirmId = "";

  $("#modal-content").val(function () {
    confirmAtiva = $(this).attr("ativa");
    return confirmAtiva;
  });
  $("#modal-content").val(function () {
    confirmId = $(this).attr("value");
    return confirmId;
  });
  const confirmUrl = `https://pagespeed.awsli.com.br/v1/lojas/` + confirmId;

  if (confirmAtiva == "true") {
    jsonInativar = {
      loja_ativa: false,
    };
    function inativar(confirmUrl, jsonInativar) {
      let request = new XMLHttpRequest();
      request.open("PUT", confirmUrl, true);
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(jsonInativar));

      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          $("#response-cadastro").text(
            "Analise da loja inativada com sucesso."
          );
          $("#response").removeClass("fail");
          $("#response").addClass("sucess");
          $("#response").show("1000").delay(10000).fadeOut(1000);
        } else if (this.readyState == 4 && this.status == 400) {
          $("#response-cadastro").text("Erro ao inativar analise da loja.");
          $("#response").removeClass("fail");
          $("#response").addClass("sucess");
          $("#response").show("1000").delay(10000).fadeOut(1000);
        }
      };
    }
    inativar(confirmUrl, jsonInativar);
    $("#modal-ativacao").hide();
  } else if (confirmAtiva == "false") {
    jsonAtivar = {
      loja_ativa: true,
    };
    function ativar(confirmUrl, jsonAtivar) {
      let request = new XMLHttpRequest();
      request.open("PUT", confirmUrl, true);
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(jsonAtivar));

      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          $("#response-cadastro").text("Analise da loja ativada com sucesso.");
          $("#response").removeClass("fail");
          $("#response").addClass("sucess");
          $("#response").show("1000").delay(10000).fadeOut(1000);
        } else if (this.readyState == 4 && this.status == 400) {
          $("#response-cadastro").text("Erro ao ativar analise da loja.");
          $("#response").removeClass("fail");
          $("#response").addClass("sucess");
          $("#response").show("1000").delay(10000).fadeOut(1000);
        }
      };
    }
    ativar(confirmUrl, jsonAtivar);
    $("#modal-ativacao").hide();
  }
});

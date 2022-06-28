$("#enviar").click(function () {
  event.preventDefault();
  let dominio = $("#dominio").val();
  let conta = $("#conta").val();

  const url = `https://pagespeed.awsli.com.br/v1/lojas/cadastrar`;

  function removeHttp(dominio) {
    return dominio.replace(/https?:?\/\//, "");
  }
  jsonLoja = {
    dominio: removeHttp(dominio),
    conta_id: conta,
  };

  function fazPost(url, jsonLoja) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(jsonLoja));

    request.onload = function () {
      console.log(this.responseText);
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("response-cadastro").innerHTML =
          "Loja Cadastrada com sucesso.";
        $("#response").removeClass("fail");
        $("#response").addClass("sucess");
        $("#response").show("1000").delay(10000).fadeOut(1000);
      } else if (this.readyState == 4 && this.status == 400) {
        document.getElementById("response-cadastro").innerHTML =
          "Loja já cadastrada.";
        $("#response").removeClass("sucess");
        $("#response").addClass("fail");
        $("#response").show("1000").delay(10000).fadeOut(1000);
      }
      return request.responseText;
    };
  }
  fazPost(url, jsonLoja);
});

$(document).ready(function () {
  var envio = false;
  $("#cantidadMenos1").click(() => {
    let valueP1 = $('#input1').val();
    if (valueP1 > 1) {
      valueP1 -= 1;
      $('#input1').val(valueP1);
    } else {
      $('#input1').val(1);
    }
    let itemss = updateItems();
    actualizarItems(itemss);
  });

  $("#cantidadMas1").click(() => {
    let valueP1 = $('#input1').val();
    if (valueP1 < 9) {
      valueP1 = Number(valueP1) + Number(1);
      $('#input1').val(valueP1);
    }
    let itemss = updateItems();
    actualizarItems(itemss);
  });
  //polera 2
  $("#cantidadMenos2").click(() => {
    let valueP2 = $('#input2').val();
    if (valueP2 > 1) {
      valueP2 -= 1;
      $('#input2').val(valueP2);
    } else {
      $('#input2').val(1);
    }
    let itemss = updateItems();
    actualizarItems(itemss);
  });

  $("#cantidadMas2").click(() => {
    let valueP2 = $('#input2').val();
    if (valueP2 < 9) {
      valueP2 = Number(valueP2) + Number(1);
      $('#input2').val(valueP2);
    }
    let itemss = updateItems();
    actualizarItems(itemss);
  });
  //polera 3
  $("#cantidadMenos3").click(() => {
    let valueP3 = $('#input3').val();
    if (valueP3 > 1) {
      valueP3 -= 1;
      $('#input3').val(valueP3);
    } else {
      $('#input3').val(1);
    }
    let itemss = updateItems();
    actualizarItems(itemss);
  });

  $("#cantidadMas3").click(() => {
    let valueP3 = $('#input3').val();
    if (valueP3 < 9) {
      valueP3 = Number(valueP3) + Number(1);
      $('#input3').val(valueP3);
    }
    let itemss = updateItems();
    actualizarItems(itemss);
  });

  const updateItems = () => {
    let valueP1 = $('#input1').val();
    let valueP2 = $('#input2').val();
    let valueP3 = $('#input3').val();
    let totalItems = Number(valueP1) + Number(valueP2) + Number(valueP3);
    return totalItems;
  };

  const actualizarItems = (items) => {
    let itemsGeneral = $('#itemsGeneral');
    let resumenCantidad = $('#resumenCantidad');
    let resumenTotal = $('#resumenTotal');
    itemsGeneral.text(`${items} items`);
    let totalArticulos1 = Number(44000) * Number(items);
    let totalArticulos2 = parseFloat(totalArticulos1);
    resumenCantidad.text(`${items} artítulos`);
    resumenTotal.text(totalArticulos2);
    $('#totalFinalEnvio').text(totalArticulos2);
  };

  $('#selectEnvio').on('change', function () {
    let resumenTotal = $('#resumenTotal').text();
    let totalConEnvio = Number(this.value) + Number(resumenTotal);
    $('#totalFinalEnvio').text(totalConEnvio);
    envio = true;
  });

  $("#inputDescuento").on('change', function () {
    if (envio == true) {
      if ($('#inputDescuento').val() != '') {
        $('#inputDescuento').css("background-color", "rgba(147, 255, 147, 0.822");
        $('#inputDescuento').css("color", "green");
        if ($('#inputDescuento').val() == 'JQUERY2222') {
          let tt = $('#totalFinalEnvio').text();
          let nTT = Number(tt) - Number(10000);
          $('#totalFinalEnvio').text(nTT);
          $("#inputDescuento").prop("disabled", true);
          $("#cantidadMas1").prop("disabled", true);
          $("#cantidadMas2").prop("disabled", true);
          $("#cantidadMas3").prop("disabled", true);
          $("#cantidadMenos1").prop("disabled", true);
          $("#cantidadMenos2").prop("disabled", true);
          $("#cantidadMenos3").prop("disabled", true);
        }
      } else {
        $('#inputDescuento').css("background-color", "white");
        $('#inputDescuento').css("color", "black");
      }
    } else {
      alert('¡Elige tu envío primero!')
    }
  });

  $("#inputDescuento").on('click', function () {
    if (envio == true) {
      $('#inputDescuento').css("background-color", "skyblue");
      $('#inputDescuento').css("color", "blue");
    } else {
      alert('¡Elige tu envío primero!')
    }
  });

  $("#btnRealizarCompra").on('click', function () {
    if (envio == true) {
      $('#btnRealizarCompra').removeClass('btn-azul');
      $('#btnRealizarCompra').val('¿Estás seguro?');
      $('#btnRealizarCompra').removeClass('btn-danger');
      $('#btnRealizarCompra').addClass('btn-warning');
      $('#btnRealizarCompra').addClass('btn-warning-2');
      $('#btnRealizarCompra').removeClass('btn-azul');
    } else {
      alert('¡Elige tu envio!')
    }
  });

  $("#btnRealizarCompra").on('dblclick', function () {
    if (envio == true) {
      $('#btnRealizarCompra').val('¡OK!');
      $('#btnRealizarCompra').removeClass('btn-warning');
      $('#btnRealizarCompra').addClass('btn-azul');
      $("#btnRealizarCompra").mouseout(function () {
        $('#btnRealizarCompra').val('COMPRADO');
        $('#btnRealizarCompra').removeClass('btn-azul');
        $('#btnRealizarCompra').addClass('btn-gris');
      });
    } else {
      alert('¡Elige tu envio!')
    }
  });

});
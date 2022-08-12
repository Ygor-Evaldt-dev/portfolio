function goForm(event) {
  event.preventDefault();
}

/* mascara telefone*/
function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}

function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id('telefone').onkeyup = function () {
    mascara(this, mtel);
  }
}
let behavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
  options = {
    onKeyPress: function (val, e, field, options) {
      field.mask(behavior.apply({}, arguments), options);
    }
  };

$('#telefone').mask(behavior, options);

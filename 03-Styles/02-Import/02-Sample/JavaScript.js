window.addEventListener('load', function() {
  // Получение доступа к элементу link и чтение содержимого через свойство import
  var content = document.querySelector("#list-import").import;
  var list    = content.querySelector("ul");

  document.body.appendChild(list);
});
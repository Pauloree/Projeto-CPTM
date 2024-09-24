document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
    if (value.length > 9) value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4'); // Formata com pontos e traço
    else if (value.length > 6) value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    else if (value.length > 3) value = value.replace(/(\d{3})(\d+)/, '$1.$2');
    e.target.value = value;
});

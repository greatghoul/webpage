var submit    = document.getElementById('btn-submit'),
    form      = document.getElementById('form-message'),
    PAT_EMAIL = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

function trim(text) {
    return text.replace(/(^\s*|\s*$)/g, '');
}

function validates() {
    var clientname  = trim(document.getElementById('clientname').value),
        clientemail = trim(document.getElementById('clientemail').value), 
        errors = [];

    if (clientname.length === 0) {
        errors.push({ field: 'clientname', message: '请填写姓名'});
    }
    
    if (clientemail.length === 0) {
        errors.push({ field: 'clientemail', message: '请填写邮箱' })
    } else if (!PAT_EMAIL.test(clientemail)) {
        errors.push({ field: 'clientemail', message: '邮箱格式不正确' })
    }

    return errors;
}

function setClassName(id, className) {
    document.getElementById(id).className = className;
}

function showErrors(errors) {
    // 重置错误信息
    setClassName('control-group-clientname', 'control-group');
    setClassName('control-group-clientemail', 'control-group');

    for (var i = 0; i < errors.length; i++) {
        var error = errors[i];
        document.getElementById('error-' + error.field).innerHTML = error.message;
        setClassName('control-group-' + error.field, 'control-group error');
    } 
}

submit.onclick = function() {
    var errors = validates(); 
    showErrors(errors);
    if (errors.length) {
        return false;
    } else {
        form.submit();
    }
};

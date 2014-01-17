var submit    = document.getElementById('btn-submit'),
    form      = document.getElementById('form-message'),
    PAT_EMAIL = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

function trim(text) {
    return text.replace(/(^\s*|\s*$)/g, '');
}

function validates() {
    var name  = trim(document.getElementById('name').value),
        email = trim(document.getElementById('email').value), 
        errors = [];

    if (name.length === 0) {
        errors.push({ field: 'name', message: '请填写姓名'});
    }
    
    if (email.length === 0) {
        errors.push({ field: 'email', message: '请填写邮箱' })
    } else if (!PAT_EMAIL.test(email)) {
        errors.push({ field: 'email', message: '邮箱格式不正确' })
    }

    return errors;
}

function setClassName(id, className) {
    document.getElementById(id).className = className;
}

function showErrors(errors) {
    // 重置错误信息
    setClassName('control-group-name', 'control-group');
    setClassName('control-group-email', 'control-group');

    for (var i = 0; i < errors.length; i++) {
        var error = errors[i];
        document.getElementById('error-' + error.field).innerHTML = error.message;
        setClassName('control-group-' + error.field, 'control-group error');
    } 
}

submit.onclick = function() {
    var errors = validates(); 
    showErrors(errors);
    if (errors) {
        return false;
    } else {
        form.submit();
    }
};

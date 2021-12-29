$(function (e) {
    $("#formContact").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            policies: "required",
            select: "required"
        },
        messages: {
            firstName: "※名を入力してください",
            lastName: "※名を入力してください",
            email: {
                required: "※確認のため、もう一度メールアドレスを入力してください。",
                email: "※間違ったメール形式"
            },
            policies: "※チェックしてください。",
            select: "※チェックしてください。"
        },
        highlight: function(element, errorClass) {
            $(element).addClass('has-error');
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass('has-error');
        },
    });
    $("#register_contact").click(function (e) {
        e.preventDefault();
        if ($('#formContact').valid()){
            var firstName = $('#firstName').val();
            var lastName = $('#lastName').val();
            var email = $('#email').val();
            var content = $('#content').val();
            var select = $('#select-box').val();
            var name = firstName+" "+lastName;
            $("#name-confirm").val(name);
            $("#email-confirm").val(email);
            $("#content-confirm").val(content);
            $("#select-confirm").val(select);
            $("#name-confirm-sp").val(name);
            $("#email-confirm-sp").val(email);
            $("#content-confirm-sp").val(content);
            $('.contact').css('display','none');
            $('.confirm').css('display','block');
            $('.contact_success').css('display','none');
            $('.contact_nav').css('display','none');
            $('.confirm_nav').css('display','block');
            $('.contact_success_nav').css('display','none');
            $('html, body').animate({
                scrollTop: $(this).offset().top -200
            }, 1000);
        }
        else{
            $('.error').each(function () {
                $('html, body').animate({
                    scrollTop: $(this).offset().top -300
                }, 1000);
            });
        }
    });
    $("#modify_contact").click(function (e) {
        $('.contact').css('display','block');
        $('.confirm').css('display','none');
        $('.contact_success').css('display','none');
    });
    $("#modify_contact_sp").click(function (e) {
        $('.contact').css('display','block');
        $('.confirm').css('display','none');
        $('.contact_success').css('display','none');
    });
    $('#register_success').click(function (e) {
        e.preventDefault();
        $('.contact').css('display','none');
        $('.confirm').css('display','none');
        $('.contact_success').css('display','block');
        $('.contact_nav').css('display','none');
        $('.confirm_nav').css('display','none');
        $('.contact_success_nav').css('display','block');
        $('html, body').animate({
            scrollTop: $(this).offset().top -200
        }, 1000);
    });
    $('#register_success_sp').click(function (e) {
        e.preventDefault();
        $('.contact').css('display','none');
        $('.confirm').css('display','none');
        $('.contact_success').css('display','block');
        $('.contact_nav').css('display','none');
        $('.confirm_nav').css('display','none');
        $('.contact_success_nav').css('display','block');
        $('html, body').animate({
            scrollTop: $(this).offset().top -200
        }, 1000);
    });
    $("#formAddress").validate({
        groups: {
            nameGroup: "address[first-name] address[last-name]",
            phoneNumber: "address[phone_number-block-1] address[phone_number-block-2] address[phone_number-block-3]",
            postNumber: "address[post_office_number-block-1] address[post_office_number-block-2]"
        },
        rules: {
            "address[first-name]": "required",
            "address[last-name]": "required",
            "address[company-name]": "required",
            "address[phone_number-block-1]": "required",
            "address[phone_number-block-2]": "required",
            "address[phone_number-block-3]": "required",
            "address[post_office_number-block-1]": "required",
            "address[post_office_number-block-2]": "required",
            "address[city]": "required",
            "address[street]": "required",
        },
        messages: {
            "address[first-name]": "※姓を入力をして下さい",
            "address[last-name]": "※名前を入力をして下さい",
            "address[company-name]": "※会社の名前を入力をして下さい",
            "address[phone_number-block-1]": '※番号を入力をして下さい',
            "address[phone_number-block-2]": '※番号を入力をして下さい',
            "address[phone_number-block-3]": '※番号を入力をして下さい',
            "address[post_office_number-block-1]": '※番号を入力をして下さい',
            "address[post_office_number-block-2]": '※番号を入力をして下さい',
            "address[city]": '※市を入力をして下さい',
            "address[street]": '※住を入力をして下さい',
        },
        highlight: function(element, errorClass) {
            $(element).addClass('has-error');
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass('has-error');
        },
    });
    $("#formRegister").validate({
        rules:{
            firstName:"required",
            lastName:"required",
            email:{
                required:true,
                email:true,
            },
            email2:{
                required:true,
                email:true,
            },
            password:{
                minlength: 6,
                required:true
            },
            passwordConfirm:{
                required:true,
                equalTo: "#password"
            }
        },
        messages:{
            firstName: "※名を入力してください",
            lastName: "※名を入力してください",
            email: {
                required: "※確認のため、もう一度メールアドレスを入力してください。",
                email: "※間違ったメール形式"
            },
            email2:{
                required: "※確認のため、もう一度メールアドレスを入力してください。",
                email: "※間違ったメール形式"
            },
            password:{
                required:"※パスワードが入力されていません",
                minlength: "※パスワードは最低でも6文字必要です"
            },
            passwordConfirm: {
                required:"※パスワードが入力されていません",
                equalTo: "※パスワードの確認が一致しません"
            }
        },
        highlight: function(element, errorClass) {
            $(element).addClass('has-error');
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass('has-error');
        },
    });
    $("#formLogin").validate({
        rules:{
            email:{
                required:true,
                email:true,
            },
            password:{
                required:true,
                minlength:6,
            }
        },
        messages:{
            email: {
                required: "※あなたのメールアドレスを入力してください",
                email: "※間違ったメール形式"
            },
            password:{
                required:"※パスワードが入力されていません",
                minlength: "※パスワードは最低でも6文字必要です"
            }
        },
        highlight: function(element, errorClass) {
            $(element).addClass('has-error');
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass('has-error');
        },
    });

    $ ('#form_retrievel').validate ({
        rules: {
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            email: {
                required: "※あなたのメールアドレスを入力してください",
                email: "※間違ったメール形式"
            }
        },
        highlight: function (element, errorClass) {
            $ (element).addClass ('has-error');
        },
        unhighlight: function (element, errorClass) {
            $ (element).removeClass ('has-error');
        },
    });
});
